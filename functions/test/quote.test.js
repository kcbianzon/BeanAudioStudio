const test = require("node:test");
const assert = require("node:assert/strict");

process.env.RESEND_API_KEY = "test-key";
process.env.RESEND_FROM_EMAIL = "Beantown Audio Rentals <quotes@example.com>";
const { validateQuote, emailText, handleQuote, attempts } = require("../index.js")._test;

const valid = {
  fullName: "Jamie Rivera",
  email: "jamie@example.com",
  phone: "+1 978 555 0123",
  eventType: "Wedding",
  eventDate: "2026-12-25",
  eventLocation: "Boston, MA",
  guests: "120",
  equipment: "Speakers and wireless microphones",
  message: "Please include delivery.",
  website: "",
};

function response() {
  return {
    code: 200,
    body: null,
    set() { return this; },
    status(code) { this.code = code; return this; },
    json(body) { this.body = body; return this; },
  };
}

function request(body, ip) {
  return {
    method: "POST",
    body,
    ip,
    get(name) {
      return ({ "content-type": "application/json", host: "beantownaudiorental.web.app", origin: "https://beantownaudiorental.web.app" })[name];
    },
  };
}

test("validates required contact and event fields, optional details, and honeypot", () => {
  assert.equal(validateQuote(valid).fullName, "Jamie Rivera");
  assert.equal(validateQuote({ ...valid, phone: "123" }), null);
  assert.equal(validateQuote({ ...valid, eventDate: "2026-02-30" }), null);
  assert.equal(validateQuote({ ...valid, eventType: "Unknown" }), null);
  assert.equal(validateQuote({ ...valid, website: "spam.example" }), null);
  assert.match(emailText(validateQuote(valid)), /Speakers and wireless microphones/);
  assert.match(emailText(validateQuote(valid)), /Please include delivery/);
});

test("returns success only after Resend accepts and sets recipient and reply-to", async () => {
  attempts.clear();
  const res = response();
  let sent;
  await handleQuote(request(valid, "203.0.113.10"), res, async (_url, options) => {
    sent = JSON.parse(options.body);
    assert.equal(options.headers.Authorization, "Bearer test-key");
    return { ok: true, json: async () => ({ id: "email-123" }) };
  });
  assert.deepEqual(res.body, { accepted: true });
  assert.equal(sent.to[0], "kcbianzon@gmail.com");
  assert.equal(sent.reply_to, "jamie@example.com");
  assert.equal(sent.subject, "New Quote Request - Jamie Rivera");
  assert.match(sent.text, /Event date: 2026-12-25/);
});

test("provider rejection and network failure never return success", async () => {
  attempts.clear();
  const rejected = response();
  await handleQuote(request(valid, "203.0.113.11"), rejected, async () => ({ ok: false, status: 403 }));
  assert.equal(rejected.code, 502);
  assert.deepEqual(rejected.body, { accepted: false });
  const failed = response();
  await handleQuote(request(valid, "203.0.113.12"), failed, async () => { throw new Error("offline"); });
  assert.equal(failed.code, 502);
  assert.deepEqual(failed.body, { accepted: false });
});

test("limits repeat submissions from the same IP", async () => {
  attempts.clear();
  const send = async () => ({ ok: true, json: async () => ({ id: "email-123" }) });
  for (let i = 0; i < 3; i++) {
    const res = response();
    await handleQuote(request(valid, "203.0.113.13"), res, send);
    assert.equal(res.code, 200);
  }
  const blocked = response();
  await handleQuote(request(valid, "203.0.113.13"), blocked, send);
  assert.equal(blocked.code, 429);
  assert.deepEqual(blocked.body, { accepted: false });
});
