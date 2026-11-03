const { createHash, randomUUID } = require("node:crypto");
const { onRequest } = require("firebase-functions/v2/https");
const { defineSecret } = require("firebase-functions/params");

const resendApiKey = defineSecret("RESEND_API_KEY");
const resendFromEmail = defineSecret("RESEND_FROM_EMAIL");
const RECIPIENT = "kcbianzon@gmail.com";
const WINDOW_MS = 15 * 60 * 1000;
const MAX_REQUESTS = 3;
const attempts = new Map();

function clean(value, limit) {
  return typeof value === "string" ? value.trim().slice(0, limit + 1) : "";
}

function validateQuote(body) {
  if (!body || typeof body !== "object" || Array.isArray(body)) return null;
  const fullName = clean(body.fullName, 100);
  const email = clean(body.email, 254);
  const phone = clean(body.phone, 30);
  const eventType = clean(body.eventType, 20);
  const eventDate = clean(body.eventDate, 10);
  const eventLocation = clean(body.eventLocation, 200);
  const equipment = clean(body.equipment, 2000);
  const message = clean(body.message, 3000);
  const website = clean(body.website, 200);
  const guests = body.guests === "" || body.guests === undefined ? "" : String(body.guests);
  const fields = { fullName, email, phone, eventType, eventDate, eventLocation, guests, equipment, message };
  if (website || Object.entries(fields).some(([key, value]) => value.length > ({ fullName: 100, email: 254, phone: 30, eventType: 20, eventDate: 10, eventLocation: 200, guests: 6, equipment: 2000, message: 3000 })[key])) return null;
  if (fullName.length < 2 || /[\r\n]/.test(fullName) || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) return null;
  if (!/^[+\d().\-\s]{7,30}$/.test(phone) || phone.replace(/\D/g, "").length < 7) return null;
  if (eventType && !["Wedding", "Corporate", "Concert", "Birthday", "Other"].includes(eventType)) return null;
  if (!/^\d{4}-\d{2}-\d{2}$/.test(eventDate) || Number.isNaN(Date.parse(`${eventDate}T12:00:00Z`)) || new Date(`${eventDate}T12:00:00Z`).toISOString().slice(0, 10) !== eventDate) return null;
  if (guests && (!/^\d+$/.test(guests) || Number(guests) < 1 || Number(guests) > 100000)) return null;
  return fields;
}

function emailText(quote) {
  return [
    "NEW QUOTE REQUEST",
    "",
    "CUSTOMER INFORMATION",
    `Full name: ${quote.fullName}`,
    `Email address: ${quote.email}`,
    `Phone number: ${quote.phone}`,
    "",
    "EVENT INFORMATION",
    `Event type: ${quote.eventType || "Not provided"}`,
    `Event date: ${quote.eventDate}`,
    `Event location / venue: ${quote.eventLocation || "Not provided"}`,
    `Number of guests: ${quote.guests || "Not provided"}`,
    "",
    "QUOTATION DETAILS",
    "Equipment or services needed:",
    quote.equipment || "Not provided",
    "",
    "Additional message / special requests:",
    quote.message || "Not provided",
  ].join("\n");
}

function isRateLimited(ip, now) {
  // One function instance is configured below; this lightweight limit covers normal public-form abuse.
  for (const [key, times] of attempts) {
    const recent = times.filter((time) => now - time < WINDOW_MS);
    if (recent.length) attempts.set(key, recent);
    else attempts.delete(key);
  }
  const key = createHash("sha256").update(ip || "unknown").digest("hex");
  const recent = attempts.get(key) || [];
  if (recent.length >= MAX_REQUESTS) return true;
  attempts.set(key, [...recent, now]);
  return false;
}

async function handleQuote(req, res, send = fetch) {
  res.set("Cache-Control", "no-store");
  if (req.method !== "POST") return res.status(405).json({ accepted: false });
  if (!String(req.get("content-type") || "").startsWith("application/json")) return res.status(415).json({ accepted: false });
  if (Number(req.get("content-length") || 0) > 12000) return res.status(413).json({ accepted: false });
  const origin = req.get("origin");
  if (origin) {
    try {
      const originHost = new URL(origin).host;
      const allowedHosts = [req.get("host"), "beantownaudiorental.web.app", "beantownaudiorental.firebaseapp.com"];
      if (!allowedHosts.includes(originHost)) return res.status(403).json({ accepted: false });
    } catch { return res.status(403).json({ accepted: false }); }
  }
  const quote = validateQuote(req.body);
  if (!quote) return res.status(400).json({ accepted: false });
  if (isRateLimited(req.ip || req.socket?.remoteAddress || "unknown", Date.now())) return res.status(429).json({ accepted: false });

  const apiKey = resendApiKey.value();
  const from = resendFromEmail.value();
  if (!apiKey || !from) {
    console.error("Quote email service is not configured");
    return res.status(503).json({ accepted: false });
  }
  try {
    const response = await send("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${apiKey}`,
        "Content-Type": "application/json",
        "Idempotency-Key": `quote-${randomUUID()}`,
      },
      body: JSON.stringify({
        from,
        to: [RECIPIENT],
        reply_to: quote.email,
        subject: `New Quote Request - ${quote.fullName}`,
        text: emailText(quote),
      }),
      signal: AbortSignal.timeout(10000),
    });
    if (!response.ok) {
      console.error("Quote email provider rejected request", response.status);
      return res.status(502).json({ accepted: false });
    }
    const result = await response.json();
    if (!result.id) return res.status(502).json({ accepted: false });
    return res.status(200).json({ accepted: true });
  } catch (error) {
    console.error("Quote email request failed", error);
    return res.status(502).json({ accepted: false });
  }
}

exports.submitQuote = onRequest(
  { region: "us-central1", maxInstances: 1, memory: "256MiB", secrets: [resendApiKey, resendFromEmail] },
  handleQuote,
);

Object.defineProperty(exports, "_test", { value: { validateQuote, emailText, handleQuote, attempts } });
