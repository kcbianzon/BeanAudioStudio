const products = [
  {
    id: "silent-50",
    name: "Silent Disco — 50 Headphones",
    category: "Experiences",
    price: 500,
    priceType: "fixed",
    desc: "Small-group silent disco package.",
    tag: "Popular",
    tone: "lime",
  },
  {
    id: "silent-100",
    name: "Silent Disco — 100 Headphones",
    category: "Experiences",
    price: 900,
    priceType: "fixed",
    desc: "Balanced package for larger parties.",
    tag: "Fixed",
    tone: "lime",
  },
  {
    id: "silent-150",
    name: "Silent Disco — 150 Headphones",
    category: "Experiences",
    price: 1200,
    priceType: "fixed",
    desc: "Mid-size silent event package.",
    tag: "Fixed",
    tone: "lime",
  },
  {
    id: "silent-200",
    name: "Silent Disco — 200 Headphones",
    category: "Experiences",
    price: 1800,
    priceType: "fixed",
    desc: "Large crowd headphone package.",
    tag: "Fixed",
    tone: "lime",
  },
  {
    id: "silent-300",
    name: "Silent Disco — 300 Headphones",
    category: "Experiences",
    price: 2500,
    priceType: "fixed",
    desc: "Maximum listed silent disco package.",
    tag: "Fixed",
    tone: "lime",
  },
  {
    id: "movie-12",
    name: "Outdoor Movie — 12 ft",
    category: "Outdoor Movies",
    price: 549,
    priceType: "fixed",
    desc: "Screen, projector, two powered speakers and core playback gear.",
    tag: "Public price",
    tone: "orange",
  },
  {
    id: "movie-16",
    name: "Outdoor Movie — 16 ft",
    category: "Outdoor Movies",
    price: 749,
    priceType: "fixed",
    desc: "Larger inflatable screen with the same core package.",
    tag: "Public price",
    tone: "orange",
  },
  {
    id: "movie-26",
    name: "Outdoor Movie — 26 ft",
    category: "Outdoor Movies",
    price: 899,
    priceType: "fixed",
    desc: "Community-scale outdoor cinema package.",
    tag: "Public price",
    tone: "orange",
  },
  {
    id: "movie-40",
    name: "Outdoor Movie — 40 ft",
    category: "Outdoor Movies",
    price: 1899,
    priceType: "fixed",
    desc: "Large-format outdoor movie experience.",
    tag: "Public price",
    tone: "orange",
  },
  {
    id: "ipad-mirror",
    name: "iPad Mirror Photo Booth",
    category: "Photo Booths",
    price: 799,
    priceType: "starting",
    desc: "Interactive iPad mirror setup. Listed as starting at.",
    tag: "From",
    tone: "blue",
  },
  {
    id: "magic-air",
    name: "Magic Mirror Air",
    category: "Photo Booths",
    price: 1399,
    priceType: "starting",
    desc: "Full magic mirror photo booth experience.",
    tag: "From",
    tone: "blue",
  },
  {
    id: "magic-frame",
    name: "Magic Mirror + Frame",
    category: "Photo Booths",
    price: 1699,
    priceType: "starting",
    desc: "Framed magic mirror experience.",
    tag: "From",
    tone: "blue",
  },
  {
    id: "photo-360",
    name: "360 Photo Booth",
    category: "Photo Booths",
    price: 1499,
    priceType: "starting",
    desc: "360-degree video/photo platform.",
    tag: "From",
    tone: "blue",
  },
  {
    id: "small-audio",
    name: "Small Audio Package",
    category: "Audio",
    price: null,
    priceType: "quote",
    desc: "2 powered speakers, wireless/wired mic, small mixer.",
    tag: "Quote",
    tone: "",
  },
  {
    id: "medium-audio",
    name: "Medium Audio Package",
    category: "Audio",
    price: null,
    priceType: "quote",
    desc: "4 speakers, wireless mics and 16-channel mixer.",
    tag: "Quote",
    tone: "",
  },
  {
    id: "large-audio",
    name: "Large Audio Package",
    category: "Audio",
    price: null,
    priceType: "quote",
    desc: "Line arrays, subs, multi-channel mixer and support.",
    tag: "Quote",
    tone: "",
  },
  {
    id: "tv-65",
    name: "Samsung 65” 4K TV",
    category: "Video & Displays",
    price: null,
    priceType: "quote",
    desc: "4K UHD display for presentations and events.",
    tag: "Quote",
    tone: "",
  },
  {
    id: "tv-75",
    name: "Samsung 75” 4K TV",
    category: "Video & Displays",
    price: null,
    priceType: "quote",
    desc: "Larger 4K UHD display for event viewing.",
    tag: "Quote",
    tone: "",
  },
  {
    id: "led-12",
    name: "Indoor LED Wall — 12 × 7 ft",
    category: "LED Walls",
    price: null,
    priceType: "quote",
    desc: "2.67 mm LED wall with processor and audio package.",
    tag: "Quote",
    tone: "",
  },
  {
    id: "led-16",
    name: "Indoor LED Wall — 16 × 9 ft",
    category: "LED Walls",
    price: null,
    priceType: "quote",
    desc: "Large indoor LED wall with controller package.",
    tag: "Quote",
    tone: "",
  },
  {
    id: "stream-basic",
    name: "Live Streaming — Basic",
    category: "Live Streaming",
    price: null,
    priceType: "quote",
    desc: "1 × 4K camera, streaming laptop, switcher and mixer.",
    tag: "Quote",
    tone: "",
  },
  {
    id: "stream-pro",
    name: "Live Streaming — Pro",
    category: "Live Streaming",
    price: null,
    priceType: "quote",
    desc: "3 × 4K cameras and multi-angle production setup.",
    tag: "Quote",
    tone: "",
  },
  {
    id: "wired-mic",
    name: "Wired Microphone",
    category: "Microphones",
    price: null,
    priceType: "quote",
    desc: "Reliable cable-connected microphone for event use.",
    tag: "Quote",
    tone: "",
  },
  {
    id: "lapel-mic",
    name: "Lapel Microphone",
    category: "Microphones",
    price: null,
    priceType: "quote",
    desc: "Hands-free clip-on mic for presentations and ceremonies.",
    tag: "Quote",
    tone: "",
  },
  {
    id: "iem",
    name: "In-Ear Monitors",
    category: "Microphones",
    price: null,
    priceType: "quote",
    desc: "Performer monitoring solution.",
    tag: "Quote",
    tone: "",
  },
];

const bundles = [
  {
    id: "wedding",
    title: "Wedding + Reception",
    price: 1800,
    included: { "medium-audio": 1, "lapel-mic": 2, "photo-360": 1 },
    tone: "bundle-wedding",
    label: "WEDDING",
    desc: "Ceremony clarity and reception energy, built around your guest count.",
    items: [
      "Main speaker package",
      "2–4 wireless microphones",
      "Mixer + signal kit",
      "Display for slideshow",
      "Optional lighting",
    ],
    cta: "Customize wedding",
  },
  {
    id: "corporate",
    title: "Corporate Event",
    price: 1200,
    included: {
      "medium-audio": 1,
      "lapel-mic": 2,
      "tv-65": 1,
      "stream-basic": 1,
    },
    tone: "bundle-corporate",
    label: "CORPORATE",
    desc: "Presentation-ready audio, video and streaming support for meetings and launches.",
    items: [
      "Presentation sound",
      "Wireless microphones",
      "Projector / TV",
      "Signal switching",
      "Optional live stream",
    ],
    cta: "Build corporate setup",
  },
  {
    id: "school",
    title: "School Event",
    price: 900,
    included: {
      "medium-audio": 1,
      "wired-mic": 2,
      "movie-16": 1,
      "silent-100": 1,
    },
    tone: "bundle-school",
    label: "SCHOOL",
    desc: "Flexible AV for ceremonies, recognition programs, dances and outdoor activities.",
    items: [
      "Speaker package",
      "Wireless mics",
      "Mixer + stands",
      "Optional lighting",
      "Movie / silent disco add-on",
    ],
    cta: "Plan school event",
  },
  {
    id: "concert",
    title: "Concert + Live Performance",
    price: 2500,
    included: { "large-audio": 1, iem: 2, "wired-mic": 2, "led-16": 1 },
    tone: "bundle-concert",
    label: "CONCERT",
    desc: "Production-focused setup for stage audio, performers and visual systems.",
    items: [
      "Line array PA",
      "Subwoofers",
      "Stage monitors",
      "Digital mixer",
      "Tech support",
    ],
    cta: "Build concert setup",
  },
  {
    id: "party",
    title: "Private Party",
    price: 650,
    included: {
      "small-audio": 1,
      "wired-mic": 1,
      "photo-360": 1,
      "silent-100": 1,
    },
    tone: "bundle-party",
    label: "PARTY",
    desc: "A compact entertainment setup for birthdays, celebrations and social events.",
    items: [
      "Powered speakers",
      "Wireless mic",
      "Mixer",
      "Optional DJ gear",
      "Optional photo booth",
    ],
    cta: "Customize party",
  },
  {
    id: "movie",
    title: "Outdoor Movie Night",
    price: 549,
    included: { "movie-16": 1, "medium-audio": 1, "wired-mic": 1 },
    tone: "bundle-movie",
    label: "MOVIE NIGHT",
    desc: "Pick the screen size and turn a backyard, school or community field into a cinema.",
    items: [
      "Inflatable movie screen",
      "Sony laser projector",
      "2 powered speakers",
      "Audio mixer",
      "Playback laptop / DVD",
    ],
    cta: "Choose screen size",
  },
];

const state = {
  builderStep: 1,
  eventType: "Wedding",
  guests: 120,
  venue: "Indoor",
  date: "",
  selected: { "medium-audio": 1, "wired-mic": 2 },
  bundle: null,
  category: "All",
  search: "",
};

const eventRecommendations = {
  Wedding: ["medium-audio", "lapel-mic", "tv-65", "photo-360"],
  "Corporate Event": ["medium-audio", "lapel-mic", "tv-65", "stream-basic"],
  "School Event": ["medium-audio", "wired-mic", "movie-16", "silent-100"],
  Concert: ["large-audio", "iem", "wired-mic", "led-16"],
  "Private Party": ["small-audio", "wired-mic", "photo-360", "silent-100"],
  "Outdoor Movie": ["movie-16", "medium-audio", "wired-mic", "silent-100"],
};

const app = document.getElementById("app");
const toast = document.getElementById("toast");

function money(value) {
  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
    maximumFractionDigits: 0,
  }).format(value);
}
function getHash() {
  return location.hash.replace("#", "").split("?")[0] || "home";
}
function getHashParams() {
  return new URLSearchParams(location.hash.split("?")[1] || "");
}
function productPriceText(p) {
  if (p.priceType === "quote") return "Quote required";
  if (p.priceType === "starting") return `From ${money(p.price)}`;
  return money(p.price);
}
function filteredProducts() {
  const q = state.search.trim().toLowerCase();
  return products.filter(
    (p) =>
      (state.category === "All" || p.category === state.category) &&
      (!q || `${p.name} ${p.category} ${p.desc}`.toLowerCase().includes(q)),
  );
}
function productCard(p) {
  return `<article class="product-card reveal"><div class="product-media ${p.tone || ""}"></div><div class="product-meta"><span class="badge">${p.tag}</span><h3>${p.name}</h3><p>${p.desc}</p><div class="price-row"><span class="price">${productPriceText(p)}</span><button class="text-btn" data-add="${p.id}">Add +</button></div></div></article>`;
}
function home() {
  return `<div class="page">
  <section class="hero reveal"><div class="hero-copy"><span class="eyebrow orange">BOSTON • NEW ENGLAND • EVENT AV</span><h1>Your event.<br><span style="background:linear-gradient(90deg,var(--ink),var(--accent));-webkit-background-clip:text;color:transparent">Your setup.</span></h1><p>Rent speakers, screens, streaming gear, photo booths and complete event systems — then build your exact experience before you request a quote.</p><div class="hero-cta"><a class="btn btn-dark" href="#builder">Build my event <span>→</span></a><a class="btn btn-light" href="#rentals">Explore rentals</a></div><div class="hero-note"><span class="dot"></span> Fixed-price packages + quote-based production gear</div></div><div class="hero-art"><div class="hero-surface"></div><div class="hero-grid"></div><div class="hero-screen"></div><div class="hero-speaker one"></div><div class="hero-speaker two"></div><div class="hero-cable"></div></div></section>
  <div class="marquee"><div class="marquee-track"><span>Audio</span><b>•</b><span>Video</span><b>•</b><span>LED Walls</span><b>•</b><span>Silent Disco</span><b>•</b><span>Photo Booths</span><b>•</b><span>Live Streaming</span><b>•</b><span>Outdoor Movies</span><b>•</b><span>Audio</span><b>•</b><span>Video</span><b>•</b><span>LED Walls</span><b>•</b><span>Silent Disco</span><b>•</b><span>Photo Booths</span></div></div>
  <section class="section"><div class="section-head"><div><span class="eyebrow">WHAT ARE YOU RENTING?</span><h2>Start with the<br>experience.</h2></div><p>Skip the endless gear list. Tell us what you're trying to make happen and the interface can guide you to a setup.</p></div><div class="category-grid"><a href="#rentals?cat=Audio" class="category-card cat-a"><div><span class="eyebrow">01</span><h3>Audio</h3><p>Speakers, microphones, mixers and live-performance systems.</p></div><strong>Explore →</strong></a><a href="#rentals?cat=Video%20%26%20Displays" class="category-card cat-b"><div><span class="eyebrow">02</span><h3>Video</h3><p>TVs, projection, switching and visual presentation packages.</p></div><strong>Explore →</strong></a><a href="#rentals?cat=Experiences" class="category-card cat-c"><div><span class="eyebrow">03</span><h3>Experiences</h3><p>Silent disco, outdoor movies and photo booth moments.</p></div><strong>Explore →</strong></a><a href="#rentals?cat=LED%20Walls" class="category-card cat-d"><div><span class="eyebrow">04</span><h3>LED Walls</h3><p>High-impact visuals for stages, launches, parties and concerts.</p></div><strong>Explore →</strong></a></div></section>
  <section class="section"><div class="section-head"><div><span class="eyebrow">POPULAR NOW</span><h2>Public pricing,<br>where it exists.</h2></div><a class="btn btn-light" href="#rentals">See all rentals</a></div><div class="product-grid">${products
    .filter((p) =>
      ["movie-12", "movie-16", "silent-100", "photo-360"].includes(p.id),
    )
    .map(productCard)
    .join("")}</div></section>
  <section class="section"><div class="section-head"><div><span class="eyebrow">EVENT BUNDLES</span><h2>Start with<br>the occasion.</h2></div><a class="btn btn-light" href="#bundles">View all bundles →</a></div><div class="bundle-grid">${bundles
    .slice(0, 3)
    .map(
      (b) =>
        `<article class="bundle-card reveal"><div class="bundle-top ${b.tone}"><span class="eyebrow">${b.label}</span><h3>${b.title}</h3></div><div class="bundle-body"><p style="margin:0;color:var(--muted);font-size:13px">${b.desc}</p><ul>${b.items
          .slice(0, 3)
          .map((i) => `<li>${i}</li>`)
          .join(
            "",
          )}</ul><div class="bundle-foot"><span class="bundle-price">${money(b.price)}</span><button class="btn btn-dark btn-small" data-bundle="${b.id}">View bundle →</button></div></div></article>`,
    )
    .join("")}</div></section>
  <section class="section"><div class="split"><div class="feature-panel dark"><div><span class="eyebrow">THE NEW WAY TO RENT AV</span><h3>Build it<br>before you book it.</h3><p>Give clients a visual, interactive way to configure their event. Fixed-price products can calculate instantly while custom production items stay quote-based.</p></div><div class="stat-row"><div class="stat"><strong>24/7</strong><span>CONFIGURE ANYTIME</span></div><div class="stat"><strong>01</strong><span>EVENT BUILDER</span></div><div class="stat"><strong>∞</strong><span>COMBINATIONS</span></div></div></div><div class="feature-panel orange"><div><span class="eyebrow">EVENT BUNDLES</span><h3>Don’t know what to rent?<br>Start from the occasion.</h3><p>Prebuilt bundles give customers a fast path, then let them customize the exact pieces.</p></div><a class="btn btn-dark" href="#bundles">Browse event bundles →</a></div></div></section>
  <section class="section"><div class="section-head"><div><span class="eyebrow">HOW IT WORKS</span><h2>From “what do I need?”<br>to “send me the quote.”</h2></div></div><div class="service-grid"><div class="service-card"><div class="service-icon">01</div><h3>Choose the occasion</h3><p>Wedding, corporate, school, concert, party or outdoor movie — start from context, not equipment jargon.</p></div><div class="service-card"><div class="service-icon">02</div><h3>Customize the setup</h3><p>Add quantities, remove extras, compare fixed-price packages and flag quote-only equipment.</p></div><div class="service-card"><div class="service-icon">03</div><h3>Request the quote</h3><p>Submit the event date, venue, guest count and your complete equipment configuration in one request.</p></div></div></section>
 </div>`;
}

function rentals() {
  const cats = [
    "All",
    "Audio",
    "Microphones",
    "Video & Displays",
    "LED Walls",
    "Experiences",
    "Outdoor Movies",
    "Photo Booths",
    "Live Streaming",
  ];
  const list = filteredProducts();
  return `<div class="page"><div class="page-hero"><div><span class="eyebrow">RENTAL CATALOG</span><h1>Everything<br>you can add.</h1></div><p>Explore the catalog by category. Products with public-reference pricing calculate immediately; production gear marked “Quote required” stays flexible for the client.</p></div><div class="rentals-toolbar"><div style="display:flex;gap:8px;flex-wrap:wrap">${cats.map((c) => `<button class="filter-pill ${state.category === c ? "active" : ""}" data-cat="${c}">${c}</button>`).join("")}</div><div class="inline-search"><input id="rentalSearch" value="${state.search}" placeholder="Search equipment…"></div></div><div class="product-grid">${list.length ? list.map(productCard).join("") : `<div class="empty" style="grid-column:1/-1">No rentals match your search. Try another term or clear the category filter.</div>`}</div></div>`;
}

function bundlesPage() {
  if (state.bundle) return bundleDetail(state.bundle);
  return `<div class="page"><div class="page-hero"><div><span class="eyebrow">EVENT BUNDLES</span><h1>Start with<br>the occasion.</h1></div><p>Choose a fixed package built around a familiar event format. Every bundle is a complete starting point with clear inclusions and no hidden customization step.</p></div><section class="bundle-customize"><div><span class="eyebrow">NEED SOMETHING MORE SPECIFIC?</span><h2>Customize your experience.</h2><p>Build an event from the ground up with recommendations for your occasion and access to the full equipment catalog.</p></div><a class="btn btn-dark" href="#builder">Build my setup →</a></section><div class="bundle-grid">${bundles.map((b) => `<article class="bundle-card reveal"><div class="bundle-top ${b.tone}"><span class="eyebrow">${b.label}</span><h3>${b.title}</h3></div><div class="bundle-body"><p style="margin:0;color:var(--muted);font-size:13px">${b.desc}</p><ul>${b.items.map((i) => `<li>${i}</li>`).join("")}</ul><div class="bundle-foot"><span class="bundle-price">${money(b.price)}</span><button class="btn btn-dark btn-small" data-bundle="${b.id}">View bundle →</button></div></div></article>`).join("")}</div></div>`;
}

function bundleDetail(id) {
  const bundle = bundles.find((b) => b.id === id) || bundles[0];
  const included = Object.entries(bundle.included || {})
    .map(([productId, quantity]) => {
      const product = products.find((p) => p.id === productId);
      return product ? { product, quantity } : null;
    })
    .filter(Boolean);
  const knownTotal = included.reduce(
    (total, { product, quantity }) => total + (product.price || 0) * quantity,
    0,
  );
  const hasQuoteItems = included.some(
    ({ product }) =>
      product.priceType === "quote" || product.priceType === "starting",
  );
  return `<div class="page"><div class="bundle-detail-head"><a class="text-btn" href="#bundles">← All bundles</a><div class="bundle-detail-layout"><div><span class="eyebrow">${bundle.label} PACKAGE</span><h1>${bundle.title}</h1><p>${bundle.desc}</p></div><div class="bundle-detail-price"><span class="eyebrow">FIXED PACKAGE PRICE</span><strong>${money(bundle.price)}</strong></div></div></div><div class="bundle-detail-wrap"><section class="bundle-detail-main"><div class="detail-section-head"><div><span class="eyebrow">WHAT’S INCLUDED</span><h2>Your package, item by item.</h2></div><span class="detail-lock">Fixed package</span></div><div class="bundle-included-list">${included.map(({ product, quantity }) => `<div class="bundle-included-item"><div><strong>${quantity} × ${product.name}</strong><span>${product.category} · ${product.desc}</span></div><strong>${product.price ? money(product.price * quantity) : "Quote required"}</strong></div>`).join("")}</div><div class="bundle-detail-actions"><a class="btn btn-dark" href="#quote">Request this bundle →</a><a class="btn btn-light" href="#builder">Customize instead</a></div></section><aside class="bundle-detail-summary"><span class="eyebrow">PRICE CHECK</span><div class="detail-total"><span>Known equipment total</span><strong>${money(knownTotal)}</strong></div><div class="detail-total"><span>Fixed package price</span><strong>${money(bundle.price)}</strong></div>${hasQuoteItems ? `<div class="quote-tag">Some included production items need final availability and quote confirmation.</div>` : ""}<p>Package inclusions are fixed. The equipment total is shown for transparency; quote-only production items are confirmed by the team.</p></aside></div></div>`;
}

function builder() {
  const items = Object.entries(state.selected)
    .map(([id, qty]) => {
      const p = products.find((x) => x.id === id);
      return p ? { p, qty } : null;
    })
    .filter(Boolean);
  const known = items.reduce((s, { p, qty }) => s + (p.price || 0) * qty, 0);
  const quoteOnly = items.some(
    ({ p }) => p.priceType === "quote" || p.priceType === "starting",
  );
  const recommendedIds =
    eventRecommendations[state.eventType] || eventRecommendations.Wedding;
  const recommendedProducts = recommendedIds
    .map((id) => products.find((p) => p.id === id))
    .filter(Boolean);
  const otherProducts = products.filter((p) => !recommendedIds.includes(p.id));
  const miniProduct = (p, recommended = false) =>
    `<div class="mini-product ${recommended ? "is-recommended" : ""}"><div class="mini-product-heading"><h4>${p.name}</h4>${recommended ? '<span class="recommendation-tag">Recommended</span>' : ""}</div><p>${productPriceText(p)}</p><div class="mini-product-row"><span style="font-size:11px;color:var(--muted)">${p.category}</span><div class="qty-controls"><button class="qty-btn" data-minus="${p.id}">−</button><span class="qty">${state.selected[p.id] || 0}</span><button class="qty-btn" data-plus="${p.id}">+</button></div></div></div>`;
  return `<div class="page"><div class="page-hero"><div><span class="eyebrow">CUSTOM EVENT BUILDER</span><h1>Build your<br>exact setup.</h1></div><p>Prototype a guided experience for clients. This is intentionally quote-friendly: it estimates what is known without pretending custom production has a fixed retail price.</p></div><div class="builder-wrap"><section class="builder-main"><div class="steps">${["Event", "Details", "Equipment", "Review"].map((s, i) => `<div class="step ${state.builderStep === i + 1 ? "active" : ""}">${String(i + 1).padStart(2, "0")} · ${s}</div>`).join("")}</div>${builderStepContent()}<div class="builder-actions"><button class="btn btn-light" data-builder-prev ${state.builderStep === 1 ? "disabled" : ""}>← Back</button>${state.builderStep < 4 ? `<button class="btn btn-dark" data-builder-next>Continue →</button>` : `<a class="btn btn-accent" href="#quote">Request this quote →</a>`}</div></section><aside class="builder-side"><span class="eyebrow">YOUR SETUP</span><div class="summary-total"><div><span class="eyebrow">ESTIMATED TOTAL</span><div style="font-size:11px;color:var(--muted)">${quoteOnly ? "Includes quote-only selections" : ""}</div></div><strong>${money(known)}</strong></div><div class="selection-list">${items.length ? items.map(({ p, qty }) => `<div class="selection-chip"><span>${qty} × ${p.name.replace(" — 50 Headphones", "").replace(" — 100 Headphones", "").replace(" — 150 Headphones", "").replace(" — 200 Headphones", "").replace(" — 300 Headphones", "")}</span><button data-remove="${p.id}" aria-label="Remove">×</button></div>`).join("") : `<div class="empty" style="padding:24px">Nothing selected yet.</div>`}</div>${quoteOnly ? `<div class="quote-tag">Some selections require a final quote confirmation.</div>` : ""}<a class="btn btn-dark" style="width:100%;margin-top:12px" href="#quote">Send my setup →</a></aside></div></div>`;
  function builderStepContent() {
    if (state.builderStep === 1)
      return `<div class="reveal"><span class="eyebrow">STEP 01</span><h2 style="font-family:'Space Grotesk';font-size:42px;letter-spacing:-.04em;margin:8px 0 10px">What are you planning?</h2><p style="color:var(--muted);margin-top:0">Pick the closest event type. The interface uses it to suggest a starting point.</p><div class="choice-grid">${["Wedding", "Corporate Event", "School Event", "Concert", "Private Party", "Outdoor Movie"].map((x) => `<button class="choice ${state.eventType === x ? "selected" : ""}" data-event="${x}"><strong>${x}</strong><span>${x === "Wedding" ? "Ceremony + reception" : x === "Corporate Event" ? "Meetings + launches" : x === "School Event" ? "Programs + dances" : x === "Concert" ? "Live performance" : x === "Private Party" ? "Celebrations" : "Inflatable movie night"}</span>${state.eventType === x ? "<em>Selected</em>" : ""}</button>`).join("")}</div></div>`;
    if (state.builderStep === 2)
      return `<div class="reveal"><span class="eyebrow">STEP 02</span><h2 style="font-family:'Space Grotesk';font-size:42px;letter-spacing:-.04em;margin:8px 0 10px">Tell us about the room.</h2><p style="color:var(--muted);margin-top:0">These details help the eventual quote request size the system properly.</p><div class="form-grid"><div class="field"><label>Guest count</label><input class="input" id="guestInput" type="number" min="1" value="${state.guests}"></div><div class="field"><label>Venue</label><select class="select" id="venueInput"><option ${state.venue === "Indoor" ? "selected" : ""}>Indoor</option><option ${state.venue === "Outdoor" ? "selected" : ""}>Outdoor</option><option ${state.venue === "Hybrid" ? "selected" : ""}>Hybrid</option></select></div><div class="field full"><label>Event date</label><input class="input" id="dateInput" type="date" value="${state.date}"></div></div></div>`;
    if (state.builderStep === 3)
      return `<div class="reveal"><span class="eyebrow">STEP 03</span><h2 style="font-family:'Space Grotesk';font-size:42px;letter-spacing:-.04em;margin:8px 0 10px">Pick the pieces.</h2><p style="color:var(--muted);margin-top:0">Start with recommendations for your ${state.eventType.toLowerCase()}, then browse the full equipment catalog. Quantities update the estimate in real time.</p><div class="equipment-group"><div class="equipment-group-head"><span class="eyebrow">FOR YOUR EVENT</span><span class="equipment-count">${recommendedProducts.length} recommendations</span></div><div class="builder-product-grid">${recommendedProducts.map((p) => miniProduct(p, true)).join("")}</div></div><div class="equipment-group all-equipment"><div class="equipment-group-head"><span class="eyebrow">ALL EQUIPMENT</span><span class="equipment-count">${products.length} products</span></div><div class="builder-product-grid">${otherProducts.map((p) => miniProduct(p)).join("")}</div></div></div>`;
    return `<div class="reveal"><span class="eyebrow">STEP 04</span><h2 style="font-family:'Space Grotesk';font-size:42px;letter-spacing:-.04em;margin:8px 0 10px">Review your build.</h2><p style="color:var(--muted);margin-top:0">Everything the client has configured is summarized here before sending the request.</p><div class="selection-list">${items.length ? items.map(({ p, qty }) => `<div class="selection-chip"><span><strong>${qty} ×</strong> ${p.name}</span><span>${p.priceType === "quote" ? "Quote" : productPriceText(p)}</span></div>`).join("") : `<div class="empty">Add at least one product to your setup.</div>`}</div><div style="padding:16px;border:1px solid var(--line);border-radius:16px;background:#fff"><div class="summary-line"><span>Event</span><strong>${state.eventType}</strong></div><div class="summary-line"><span>Guests</span><strong>${state.guests}</strong></div><div class="summary-line"><span>Venue</span><strong>${state.venue}</strong></div><div class="summary-line"><span>Date</span><strong>${state.date || "Not selected"}</strong></div></div></div>`;
  }
}

function services() {
  return `<div class="page"><div class="page-hero"><div><span class="eyebrow">SERVICES</span><h1>More than<br>equipment.</h1></div><p>Position the company as an event technology partner: delivery, setup, support and production wrap around the rental catalog.</p></div><div class="service-grid"><div class="service-card"><div class="service-icon">AV</div><h3>Audio production</h3><p>From small gatherings to large-room PA systems, create the right scale for the audience and venue.</p></div><div class="service-card"><div class="service-icon">VX</div><h3>Video + LED</h3><p>Projection, TVs, LED walls and signal routing for presentations, stages, launches and live events.</p></div><div class="service-card"><div class="service-icon">4K</div><h3>Live streaming</h3><p>Single-camera and multi-angle event production with capture and streaming support.</p></div><div class="service-card"><div class="service-icon">SET</div><h3>Delivery + setup</h3><p>Keep logistics visible in the quote flow rather than hiding the operational work behind a checkout button.</p></div><div class="service-card"><div class="service-icon">FUN</div><h3>Event experiences</h3><p>Silent disco, outdoor cinema and photo booths turn a basic rental into something memorable.</p></div><div class="service-card"><div class="service-icon">OPS</div><h3>On-site support</h3><p>Offer support tiers for events where technical supervision matters.</p></div></div><section class="section"><div class="split"><div class="feature-panel orange"><div><span class="eyebrow">DESIGN SYSTEM</span><h3>Bold enough to feel like an experience brand.</h3><p>Large typography, modular cards, bright accent surfaces and a clean catalog make the website feel premium without becoming hard to use.</p></div></div><div class="feature-panel dark"><div><span class="eyebrow">CONTENT SYSTEM</span><h3>One source of truth for pricing.</h3><p>Every rental can carry a pricing type: fixed, starting-at, or quote-required. That lets the UI stay transparent while the admin side remains flexible.</p></div></div></div></section></div>`;
}

function quote() {
  return `<div class="page"><section class="quote-page"><div class="quote-copy"><span class="eyebrow orange">REQUEST A QUOTE</span><h1>Let’s build<br>the right setup.</h1><p>Send the details below and the production team can confirm availability, final pricing and any setup or delivery requirements.</p><div class="hero-note"><span class="dot"></span> Your current builder selections can be attached automatically in the production version.</div></div><div class="quote-card" id="quoteCard"><div class="quote-form"><span class="eyebrow">YOUR EVENT</span><form id="quoteForm"><div class="form-grid"><div class="field"><label>Full name</label><input class="input" required placeholder="Alex Morgan"></div><div class="field"><label>Email</label><input class="input" type="email" required placeholder="alex@example.com"></div><div class="field"><label>Phone</label><input class="input" placeholder="617 555 0198"></div><div class="field"><label>Event type</label><select class="select"><option>Wedding</option><option>Corporate Event</option><option>School Event</option><option>Concert</option><option>Private Party</option><option>Outdoor Movie</option></select></div><div class="field"><label>Event date</label><input class="input" type="date"></div><div class="field"><label>Estimated guests</label><input class="input" type="number" min="1" placeholder="150"></div><div class="field full"><label>Venue / location</label><input class="input" placeholder="Venue name or address"></div><div class="field full"><label>What do you need?</label><textarea class="textarea" placeholder="Tell us about the event, room, gear, production support, timing, and anything unusual."></textarea></div></div><button class="btn btn-dark" style="width:100%;margin-top:18px">Send quote request →</button></form></div><div class="quote-success"><div class="success-mark">✓</div><span class="eyebrow">REQUEST RECEIVED</span><h2 style="font-family:'Space Grotesk';font-size:42px;letter-spacing:-.04em;margin:10px 0">Your brief is in.</h2><p style="color:var(--muted)">This mockup would send the configured event to the CRM / Firebase backend.</p><a href="#home" class="btn btn-dark">Back to home</a></div></div></section></div>`;
}

function render(options = {}) {
  const previousScroll = window.scrollY;
  const hash = getHash();
  if (hash === "bundles") {
    state.bundle = getHashParams().get("bundle") || null;
  }
  state.category = hash === "rentals" ? state.category : state.category;
  let view = home();
  if (hash === "rentals") view = rentals();
  if (hash === "bundles") view = bundlesPage();
  if (hash === "builder") view = builder();
  if (hash === "services") view = services();
  if (hash === "quote") view = quote();
  app.innerHTML = view;
  bind();
  if (options.preserveScroll) {
    window.scrollTo({ top: previousScroll, behavior: "instant" });
  } else {
    window.scrollTo({ top: 0, behavior: "instant" });
  }
}

function showToast(msg) {
  toast.textContent = msg;
  toast.classList.add("show");
  clearTimeout(showToast.t);
  showToast.t = setTimeout(() => toast.classList.remove("show"), 2200);
}
function addProduct(id, delta = 1) {
  state.selected[id] = (state.selected[id] || 0) + delta;
  if (state.selected[id] <= 0) delete state.selected[id];
  render({ preserveScroll: getHash() === "builder" });
  showToast(delta > 0 ? "Added to your setup" : "Removed from your setup");
}

function bind() {
  document.querySelectorAll("[data-cat]").forEach((b) =>
    b.addEventListener("click", () => {
      state.category = b.dataset.cat;
      state.search = "";
      document.querySelector("#rentalSearch")?.focus();
      render();
    }),
  );
  document.querySelector("#rentalSearch")?.addEventListener("input", (e) => {
    state.search = e.target.value;
    const scroll = window.scrollY;
    app.innerHTML = rentals();
    bind();
    window.scrollTo(0, scroll);
  });
  document
    .querySelectorAll("[data-add]")
    .forEach((b) =>
      b.addEventListener("click", () => addProduct(b.dataset.add)),
    );
  document
    .querySelectorAll("[data-plus]")
    .forEach((b) =>
      b.addEventListener("click", () => addProduct(b.dataset.plus, 1)),
    );
  document
    .querySelectorAll("[data-minus]")
    .forEach((b) =>
      b.addEventListener("click", () => addProduct(b.dataset.minus, -1)),
    );
  document.querySelectorAll("[data-remove]").forEach((b) =>
    b.addEventListener("click", () => {
      delete state.selected[b.dataset.remove];
      render({ preserveScroll: getHash() === "builder" });
      showToast("Removed from your setup");
    }),
  );
  document.querySelectorAll("[data-event]").forEach((b) =>
    b.addEventListener("click", () => {
      state.eventType = b.dataset.event;
      const recommendedIds =
        eventRecommendations[state.eventType] || eventRecommendations.Wedding;
      recommendedIds.forEach((id) => {
        state.selected[id] = state.selected[id] || 1;
      });
      render({ preserveScroll: getHash() === "builder" });
    }),
  );
  document.querySelectorAll("[data-bundle]").forEach((b) =>
    b.addEventListener("click", () => {
      state.bundle = b.dataset.bundle;
      const match = bundles.find((x) => x.id === b.dataset.bundle);
      if (match) {
        if (match.id === "movie") state.eventType = "Outdoor Movie";
        else if (match.id === "wedding") state.eventType = "Wedding";
        else if (match.id === "concert") state.eventType = "Concert";
        else if (match.id === "school") state.eventType = "School Event";
        else if (match.id === "corporate") state.eventType = "Corporate Event";
        else state.eventType = "Private Party";
      }
      if (match) {
        state.selected = { ...match.included };
        state.builderStep = 1;
        location.hash = `bundles?bundle=${match.id}`;
      }
    }),
  );
  document
    .querySelector("[data-builder-next]")
    ?.addEventListener("click", () => {
      if (state.builderStep === 2) {
        state.guests = parseInt(
          document.querySelector("#guestInput")?.value || 120,
        );
        state.venue = document.querySelector("#venueInput")?.value || "Indoor";
        state.date = document.querySelector("#dateInput")?.value || "";
      }
      state.builderStep = Math.min(4, state.builderStep + 1);
      render({ preserveScroll: getHash() === "builder" });
    });
  document
    .querySelector("[data-builder-prev]")
    ?.addEventListener("click", () => {
      state.builderStep = Math.max(1, state.builderStep - 1);
      render({ preserveScroll: getHash() === "builder" });
    });
  document.querySelector("#quoteForm")?.addEventListener("submit", (e) => {
    e.preventDefault();
    document.querySelector("#quoteCard")?.classList.add("submitted");
    showToast("Quote request captured in the mockup");
  });
}

const mobileMenu = document.getElementById("mobileMenu");
document
  .getElementById("menuBtn")
  ?.addEventListener(
    "click",
    () =>
      (mobileMenu.style.display =
        mobileMenu.style.display === "flex" ? "none" : "flex"),
  );
mobileMenu
  ?.querySelectorAll("a")
  .forEach((a) =>
    a.addEventListener("click", () => (mobileMenu.style.display = "none")),
  );

const searchOverlay = document.getElementById("searchOverlay");
const searchInput = document.getElementById("searchInput");
const searchResults = document.getElementById("searchResults");
document.getElementById("searchBtn")?.addEventListener("click", () => {
  searchOverlay.hidden = false;
  searchInput.focus();
  renderSearch("");
});
document
  .getElementById("closeSearch")
  ?.addEventListener("click", () => (searchOverlay.hidden = true));
searchOverlay?.addEventListener("click", (e) => {
  if (e.target === searchOverlay) searchOverlay.hidden = true;
});
searchInput?.addEventListener("input", (e) => renderSearch(e.target.value));
function renderSearch(q) {
  const r = products
    .filter(
      (p) =>
        !q ||
        `${p.name} ${p.category} ${p.desc}`
          .toLowerCase()
          .includes(q.toLowerCase()),
    )
    .slice(0, 10);
  searchResults.innerHTML = r.length
    ? r
        .map(
          (p) =>
            `<button class="search-item" data-search-item="${p.id}"><span><strong>${p.name}</strong><br><span>${p.category}</span></span><span>${productPriceText(p)} →</span></button>`,
        )
        .join("")
    : `<div class="empty">No matching rentals.</div>`;
  searchResults.querySelectorAll("[data-search-item]").forEach((b) =>
    b.addEventListener("click", () => {
      state.search = b.querySelector("strong").textContent;
      state.category = "All";
      searchOverlay.hidden = true;
      location.hash = "rentals";
    }),
  );
}

window.addEventListener("hashchange", () => {
  if (getHash() !== "builder") state.builderStep = 1;
  render();
});

render();
