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
    title: "Wedding Event",
    price: 1800,
    included: { "medium-audio": 1, "lapel-mic": 2, "photo-360": 1 },
    tone: "bundle-wedding",
    label: "WEDDING",
    desc: "Clear audio and visual support for ceremonies, dinners, and celebrations.",
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
  contactName: "",
  contactEmail: "",
  contactPhone: "",
  organization: "",
  eventName: "",
  eventLocation: "",
  eventNotes: "",
  selected: loadSelection(),
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
let pageRevealObserver;
let lastRenderedPage = null;

function escapeHtml(value) {
  return String(value ?? "").replace(/[&<>\"']/g, (character) => ({
    "&": "&amp;", "<": "&lt;", ">": "&gt;", "\"": "&quot;", "'": "&#39;",
  })[character]);
}

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
function loadSelection() {
  try {
    const saved = localStorage.getItem("beantown-selected-products");
    if (saved === null) return { "medium-audio": 1, "wired-mic": 2 };
    const parsed = JSON.parse(saved);
    return Object.fromEntries(
      Object.entries(parsed).filter(([id, quantity]) =>
        products.some((product) => product.id === id) &&
        Number.isInteger(quantity) && quantity > 0,
      ),
    );
  } catch {
    return { "medium-audio": 1, "wired-mic": 2 };
  }
}
function saveSelection() {
  try { localStorage.setItem("beantown-selected-products", JSON.stringify(state.selected)); }
  catch { /* Keep the in-memory builder usable when storage is unavailable. */ }
}
function syncSetupCount() {
  const count = Object.values(state.selected).reduce((sum, quantity) => sum + quantity, 0);
  const badge = document.querySelector("#setupCount");
  if (badge) badge.textContent = String(count);
  const link = document.querySelector("#setupLink");
  link?.setAttribute("aria-label", `My setup, ${count} item${count === 1 ? "" : "s"}`);
}
function productImage(p) {
  const photo = p.category === "Experiences"
    ? "photo-1505740420928-5e560c06d30e" // clear headphones product shot
    : p.category === "Microphones"
      ? "photo-1540255431229-f8c6137e88d3" // mic with warm live-event background
      : p.category === "Outdoor Movies" || (p.category === "Video & Displays" && !p.id.startsWith("tv-"))
        ? "photo-1697059361461-b81d0e98c3af" // projector and conference room
        : p.category === "Video & Displays"
          ? "photo-1560439514-0fc9d2cd5e1b" // audience and presentation screen
          : p.category === "LED Walls"
            ? "photo-1506157786151-b8491531f063" // live event stage
            : p.category === "Photo Booths"
              ? "photo-1530103862676-de8c9debad1d" // colorful event celebration
              : p.category === "Live Streaming"
                ? "photo-1492619375914-88005aa9e8fb" // camera production equipment
                : "photo-1506157786151-b8491531f063"; // live audio production
  return `https://images.unsplash.com/${photo}?auto=format&fit=crop&w=1200&q=85`;
}

function bundleImage(bundle) {
  const photo = {
    wedding: "event-production.jpg",
    corporate: "projector-screen.jpg",
    school: "event-stage.jpg",
    concert: "live-event.jpg",
    party: "event-production.jpg",
    movie: "event-display.jpg",
  }[bundle.id] || "event-stage.jpg";
  return `assets/beantown/${photo}`;
}

function productCard(p) {
  const image = productImage(p);
  const quantity = state.selected[p.id] || 0;
  return `<article class="product-card reveal"><div class="product-media has-image ${p.tone || ""}"><img class="product-photo" src="${image}" alt="${p.name}" loading="lazy" referrerpolicy="no-referrer"></div><div class="product-meta"><span class="badge">${p.tag}</span><h3>${p.name}</h3><p>${p.desc}</p><div class="price-row"><span class="price">${productPriceText(p)}</span><button class="text-btn add-product-btn ${quantity ? "is-added" : ""}" data-add="${p.id}" aria-label="${quantity ? `${quantity} added. Add another ${p.name}` : `Add ${p.name} to my setup`}">${quantity ? `Added · ${quantity} +` : "Add to setup +"}</button></div></div></article>`;
}
const testimonialSlots = [
  { focus: "SMOOTH SETUP", prompt: "Add an approved client note about setup and on-site support.", event: "Event type · Boston" },
  { focus: "RELIABLE GEAR", prompt: "Add an approved client note about the equipment and event.", event: "Event type · New England" },
  { focus: "EASY DELIVERY", prompt: "Add an approved client note about delivery or communication.", event: "Event type · Boston" },
];
function testimonialCard(slot) {
  return `<article class="testimonial-card"><div class="testimonial-stars" aria-label="Five-star review placeholder">★★★★★</div><span class="testimonial-focus">${slot.focus}</span><p>${slot.prompt}</p><div class="testimonial-person"><span class="testimonial-avatar">BA</span><div><strong>Client name</strong><small>${slot.event}</small></div></div></article>`;
}
function testimonialLane(slots, reverse = false) {
  const cards = slots.map((slot) => testimonialCard(slot)).join("");
  const copies = slots.map((slot) => testimonialCard(slot)).join("");
  return `<div class="testimonial-lane ${reverse ? "reverse" : ""}"><div class="testimonial-track"><div class="testimonial-group">${cards}</div><div class="testimonial-group" aria-hidden="true">${copies}</div></div></div>`;
}
function testimonialSection() {
  const reversed = [...testimonialSlots].reverse();
  return `<section class="section testimonials-section"><div class="section-head"><div><span class="eyebrow">CLIENT STORIES</span><h2>What clients<br>say about the setup.</h2></div><p>Thoughtful support, dependable equipment, and a smoother event from setup to wrap.</p></div><div class="testimonial-marquee" aria-label="Client testimonials">${testimonialLane(testimonialSlots)}${testimonialLane(reversed, true)}</div></section>`;
}
function faqSection() {
  const faqs = [
    [
      "What equipment can I rent?",
      "Beantown offers sound systems, wireless microphones, lighting, 4K TVs, projectors, modular LED video walls, 360 photo booths, and silent disco headphones. Packages are available for small gatherings and large events.",
    ],
    [
      "Is setup and delivery provided?",
      "Yes. Delivery, full setup, soundcheck, and pickup are available across Boston and New England. Select rentals can also be picked up for DIY use, with clear instructions included.",
    ],
    [
      "How do I reserve equipment?",
      "Build your setup online or request a quote directly. Beantown will confirm availability for your date, recommend a suitable package, and coordinate event logistics.",
    ],
    [
      "What if I need support onsite?",
      "On-site or remote support is available. Rentals include setup guides, and our production team can be reached by phone if you need help during your event.",
    ],
    [
      "Can I customize an event bundle?",
      "Yes. Every Wedding, Corporate, Concert, and Outdoor Movie bundle can be tailored with extra wireless mics, subwoofers, screens, or lighting for your venue.",
    ],
    [
      "How does quote-based pricing work?",
      "Standard packages show fixed pricing in the catalog. Custom production gear—like modular LED walls and multi-camera streaming—is quoted based on room size, rigging, and crew needs.",
    ],
    [
      "What do you need from our venue?",
      "Most setups only need standard 15A/20A power within 50 feet and 60–90 minutes for load-in. For outdoor events or large stages, we coordinate power and weather plans in advance.",
    ],
    [
      "What if our guest count or timeline changes?",
      "Event schedules evolve. Let us know as your headcount or timeline shifts and we will adjust your speaker coverage, headphone count, or delivery window.",
    ],
  ];

  const renderCard = ([question, answer], idx) => `
    <article class="faq-item faq9-card" data-faq-card style="--faq-delay:${(idx * 0.05).toFixed(2)}s">
      <button type="button" class="faq9-question" data-faq-toggle aria-expanded="false">
        <span>${question}</span>
        <b class="faq9-icon" aria-hidden="true">+</b>
      </button>
      <div class="faq9-answer">
        <div class="faq9-answer-inner">
          <p>${answer}</p>
        </div>
      </div>
    </article>`;

  const leftCol = faqs.filter((_, i) => i % 2 === 0);
  const rightCol = faqs.filter((_, i) => i % 2 === 1);

  return `<section class="section faq-section faq9-section">
    <div class="section-head">
      <div>
        <span class="eyebrow">GOOD TO KNOW</span>
        <h2>Your questions,<br>answered.</h2>
      </div>
      <p>Helpful details from the Beantown team, so planning your event feels straightforward.</p>
    </div>

    <div class="faq9-layout">
      <aside class="faq9-contact-panel">
        <div class="faq9-contact-card">
          <h3>Need more information?</h3>
          <p class="faq9-contact-copy">The answers here cover the essentials. For custom event packages, venue walkthroughs, or equipment recommendations, reach out directly to our Boston production team.</p>
          <div class="faq9-stats">
            <div class="faq9-stat">
              <strong>&lt; 2h</strong>
              <span>Quote turnaround</span>
            </div>
            <div class="faq9-stat">
              <strong>100%</strong>
              <span>On-time delivery</span>
            </div>
          </div>
          <a href="#quote" class="faq9-cta-btn">
            <span>Email the team</span>
            <i aria-hidden="true">↗</i>
          </a>
          <p class="faq9-hours">Boston &amp; New England event production support.</p>
        </div>
      </aside>

      <div class="faq9-grid">
        <div class="faq9-col">
          ${leftCol.map((item, i) => renderCard(item, i * 2)).join("")}
        </div>
        <div class="faq9-col">
          ${rightCol.map((item, i) => renderCard(item, i * 2 + 1)).join("")}
        </div>
      </div>
    </div>
  </section>`;
}
function home() {
  return `<div class="page">
  <section class="hero reveal"><div class="hero-copy"><span class="eyebrow orange">BOSTON • NEW ENGLAND • EVENT AV</span><h1 class="hero-headline" id="heroHeadline" aria-label="Your event. Your setup."><span class="hero-title-line" data-type-text="YOUR EVENT.">YOUR EVENT.</span><br><span class="hero-title-line hero-title-accent" data-type-text="YOUR SETUP.">YOUR SETUP.</span></h1><p>Rent speakers, screens, streaming gear, photo booths and complete event systems — then build your exact experience before you request a quote.</p><div class="hero-cta"><a class="btn btn-dark" href="#builder">Build my event <span>→</span></a><a class="btn btn-light" href="#rentals">Explore rentals</a></div><div class="hero-note"><span class="dot"></span> Fixed-price packages + quote-based production gear</div></div><div class="hero-floats" aria-hidden="true">
    <article class="floating-story" data-scroll-float="-1" style="--tilt:-5deg"><span class="story-media" style="--story-image:url('assets/beantown/event-production.jpg')"></span><span class="story-kicker">WEDDINGS</span><strong>Every vow, heard.</strong><small>Audio for the aisle and the dance floor.</small></article>
    <article class="floating-story" data-scroll-float="1" style="--tilt:5deg"><span class="story-media" style="--story-image:url('assets/beantown/outdoor-movie.jpg')"></span><span class="story-kicker">OUTDOOR MOVIES</span><strong>Movie night, made big.</strong><small>Screen and sound for the whole crowd.</small></article>
    <article class="floating-story" data-scroll-float="-1" style="--tilt:3deg"><span class="story-media" style="--story-image:url('assets/beantown/headphones.jpg')"></span><span class="story-kicker">SILENT DISCO</span><strong>Three channels. One dance floor.</strong><small>Headphones and transmitters, ready to go.</small></article>
    <article class="floating-story" data-scroll-float="1" style="--tilt:-4deg"><span class="story-media" style="--story-image:url('assets/beantown/projector-screen.jpg')"></span><span class="story-kicker">CORPORATE EVENTS</span><strong>Make every word count.</strong><small>Clear voices and confident presentations.</small></article>
    <article class="floating-story" data-scroll-float="-1" style="--tilt:-3deg"><span class="story-media" style="--story-image:url('assets/beantown/live-event.jpg')"></span><span class="story-kicker">LIVE EVENTS</span><strong>Room-filling sound.</strong><small>Audio that meets the moment.</small></article>
    <article class="floating-story" data-scroll-float="1" style="--tilt:4deg"><span class="story-media" style="--story-image:url('assets/beantown/photo-booth-360.jpg')"></span><span class="story-kicker">PHOTO BOOTHS</span><strong>Keep the good part.</strong><small>A photo moment guests take home.</small></article>
  </div><div class="hero-art has-image" style="--media-image:url('assets/beantown/event-stage.jpg')"><div class="hero-surface"></div><div class="hero-grid"></div><div class="hero-screen"></div><div class="hero-speaker one"></div><div class="hero-speaker two"></div><div class="hero-cable"></div></div></section>
  <div class="marquee"><div class="marquee-track"><span>Audio</span><b>•</b><span>Video</span><b>•</b><span>LED Walls</span><b>•</b><span>Silent Disco</span><b>•</b><span>Photo Booths</span><b>•</b><span>Live Streaming</span><b>•</b><span>Outdoor Movies</span><b>•</b><span>Audio</span><b>•</b><span>Video</span><b>•</b><span>LED Walls</span><b>•</b><span>Silent Disco</span><b>•</b><span>Photo Booths</span></div></div>
  <section class="experience-journey" data-experience-journey>
    <div class="experience-stage">
      <div class="experience-center-anchor">
        <span class="eyebrow">WHAT ARE YOU RENTING?</span>
        <h2 class="experience-main-title">Start with the<br>experience.</h2>
        <p class="experience-subcopy">Scroll to explore the possibilities — from room-filling sound to full-scale visual production.</p>
      </div>


      <div class="tile-reveal-canvas" aria-label="Interactive equipment collage">
        <!-- WAVE 1: Sound & Picture Collage -->
        <a href="#rentals?cat=Audio" class="reveal-tile tile-primary tone-gold" data-tile data-step="0"
           data-start="0.02" data-peak-start="0.18" data-peak-end="0.40" data-end="0.54"
           data-enter-x="-54" data-enter-y="2" data-enter-rot="-12" data-enter-scale="0.75"
           data-target-x="-27" data-target-y="1" data-target-rot="-3.5" data-target-scale="1"
           data-exit-x="-54" data-exit-y="2" data-exit-rot="-10" data-exit-scale="0.75"
           data-drift-x="1.0" data-drift-y="-0.8" data-drift-rot="1.0">
          <span class="tile-media"><img src="assets/beantown/speaker-rental.jpg" alt="Audio rentals" loading="lazy"></span>
          <div class="tile-body">
            <span class="tile-tag">01 / SOUND</span>
            <h3>Audio</h3>
            <p>Speakers, mics, mixers &amp; live PA.</p>
            <span class="tile-cta">Explore →</span>
          </div>
        </a>

        <a href="#rentals?cat=Audio" class="reveal-tile tile-secondary tone-lime" data-tile data-step="0"
           data-start="0.04" data-peak-start="0.20" data-peak-end="0.42" data-end="0.56"
           data-enter-x="-58" data-enter-y="-35" data-enter-rot="10" data-enter-scale="0.72"
           data-target-x="-38" data-target-y="-25" data-target-rot="3.5" data-target-scale="0.96"
           data-exit-x="-58" data-exit-y="-35" data-exit-rot="8" data-exit-scale="0.72"
           data-drift-x="-1.0" data-drift-y="-0.8" data-drift-rot="-1.0">
          <span class="tile-media"><img src="assets/beantown/concert-audio.webp" alt="PA speakers" loading="lazy"></span>
          <div class="tile-caption"><strong>PA speakers</strong><span>Full, room-filling sound</span></div>
        </a>

        <a href="#rentals?cat=Video%20%26%20Displays" class="reveal-tile tile-secondary tone-sky" data-tile data-step="1"
           data-start="0.06" data-peak-start="0.22" data-peak-end="0.44" data-end="0.58"
           data-enter-x="58" data-enter-y="-35" data-enter-rot="-10" data-enter-scale="0.72"
           data-target-x="38" data-target-y="-25" data-target-rot="-4.0" data-target-scale="0.96"
           data-exit-x="58" data-exit-y="-35" data-exit-rot="-8" data-exit-scale="0.72"
           data-drift-x="1.0" data-drift-y="-0.8" data-drift-rot="1.0">
          <span class="tile-media"><img src="assets/beantown/projector-screen.jpg" alt="Projection" loading="lazy"></span>
          <div class="tile-caption"><strong>Projection</strong><span>Make the picture bigger</span></div>
        </a>

        <a href="#rentals?cat=Microphones" class="reveal-tile tile-secondary tone-coral" data-tile data-step="0"
           data-start="0.08" data-peak-start="0.24" data-peak-end="0.46" data-end="0.60"
           data-enter-x="-58" data-enter-y="38" data-enter-rot="10" data-enter-scale="0.72"
           data-target-x="-38" data-target-y="26" data-target-rot="4.0" data-target-scale="0.96"
           data-exit-x="-58" data-exit-y="38" data-exit-rot="8" data-exit-scale="0.72"
           data-drift-x="-1.0" data-drift-y="0.8" data-drift-rot="-1.0">
          <span class="tile-media"><img src="assets/beantown/microphone-rentals.jpeg" alt="Microphones" loading="lazy"></span>
          <div class="tile-caption"><strong>Microphones</strong><span>Ready for every voice</span></div>
        </a>

        <a href="#rentals?cat=Video%20%26%20Displays" class="reveal-tile tile-primary tone-peach" data-tile data-step="1"
           data-start="0.10" data-peak-start="0.26" data-peak-end="0.48" data-end="0.62"
           data-enter-x="54" data-enter-y="-2" data-enter-rot="12" data-enter-scale="0.75"
           data-target-x="27" data-target-y="-1" data-target-rot="3.5" data-target-scale="1"
           data-exit-x="54" data-exit-y="-2" data-exit-rot="10" data-exit-scale="0.75"
           data-drift-x="1.0" data-drift-y="0.8" data-drift-rot="-1.0">
          <span class="tile-media"><img src="assets/beantown/event-display.jpg" alt="Video &amp; Displays" loading="lazy"></span>
          <div class="tile-body">
            <span class="tile-tag">02 / PICTURE</span>
            <h3>Video</h3>
            <p>4K TVs, laser projection &amp; switching.</p>
            <span class="tile-cta">Explore →</span>
          </div>
        </a>

        <a href="#rentals?cat=Video%20%26%20Displays" class="reveal-tile tile-secondary tone-lavender" data-tile data-step="1"
           data-start="0.12" data-peak-start="0.28" data-peak-end="0.50" data-end="0.64"
           data-enter-x="58" data-enter-y="38" data-enter-rot="-10" data-enter-scale="0.72"
           data-target-x="38" data-target-y="26" data-target-rot="-3.5" data-target-scale="0.96"
           data-exit-x="58" data-exit-y="38" data-exit-rot="-8" data-exit-scale="0.72"
           data-drift-x="1.0" data-drift-y="0.8" data-drift-rot="1.0">
          <span class="tile-media"><img src="assets/beantown/live-streaming.jpg" alt="Event displays" loading="lazy"></span>
          <div class="tile-caption"><strong>Event displays</strong><span>Clear, vivid presentation</span></div>
        </a>

        <!-- WAVE 2: Moments & Full Visual Production Collage -->
        <a href="#rentals?cat=Experiences" class="reveal-tile tile-primary tone-mint" data-tile data-step="2"
           data-start="0.44" data-peak-start="0.60" data-peak-end="0.82" data-end="0.96"
           data-enter-x="-54" data-enter-y="2" data-enter-rot="12" data-enter-scale="0.75"
           data-target-x="-27" data-target-y="1" data-target-rot="3.5" data-target-scale="1"
           data-exit-x="-54" data-exit-y="2" data-exit-rot="10" data-exit-scale="0.75"
           data-drift-x="-1.0" data-drift-y="0.8" data-drift-rot="1.0">
          <span class="tile-media"><img src="assets/beantown/photo-booth-360.jpg" alt="Experiences" loading="lazy"></span>
          <div class="tile-body">
            <span class="tile-tag">03 / MOMENTS</span>
            <h3>Experiences</h3>
            <p>Silent disco, outdoor cinema &amp; booths.</p>
            <span class="tile-cta">Explore →</span>
          </div>
        </a>

        <a href="#rentals?cat=Experiences" class="reveal-tile tile-secondary tone-gold" data-tile data-step="2"
           data-start="0.46" data-peak-start="0.62" data-peak-end="0.84" data-end="0.97"
           data-enter-x="-58" data-enter-y="-35" data-enter-rot="-10" data-enter-scale="0.72"
           data-target-x="-38" data-target-y="-25" data-target-rot="-3.5" data-target-scale="0.96"
           data-exit-x="-58" data-exit-y="-35" data-exit-rot="-8" data-exit-scale="0.72"
           data-drift-x="-1.0" data-drift-y="-0.8" data-drift-rot="-1.0">
          <span class="tile-media"><img src="assets/beantown/headphones.jpg" alt="Silent disco" loading="lazy"></span>
          <div class="tile-caption"><strong>Silent disco</strong><span>Three channels, one dance floor</span></div>
        </a>

        <a href="#rentals?cat=Outdoor%20Movies" class="reveal-tile tile-secondary tone-coral" data-tile data-step="2"
           data-start="0.48" data-peak-start="0.64" data-peak-end="0.86" data-end="0.98"
           data-enter-x="58" data-enter-y="-35" data-enter-rot="10" data-enter-scale="0.72"
           data-target-x="38" data-target-y="-25" data-target-rot="4.0" data-target-scale="0.96"
           data-exit-x="58" data-exit-y="-35" data-exit-rot="8" data-exit-scale="0.72"
           data-drift-x="1.0" data-drift-y="-0.8" data-drift-rot="1.0">
          <span class="tile-media"><img src="assets/beantown/outdoor-movie.jpg" alt="Outdoor cinema" loading="lazy"></span>
          <div class="tile-caption"><strong>Outdoor cinema</strong><span>Big-screen nights outside</span></div>
        </a>

        <a href="#rentals?cat=LED%20Walls" class="reveal-tile tile-primary tone-periwinkle" data-tile data-step="3"
           data-start="0.50" data-peak-start="0.66" data-peak-end="0.88" data-end="0.99"
           data-enter-x="54" data-enter-y="-2" data-enter-rot="-12" data-enter-scale="0.75"
           data-target-x="27" data-target-y="-1" data-target-rot="-3.5" data-target-scale="1"
           data-exit-x="54" data-exit-y="-2" data-exit-rot="-10" data-exit-scale="0.75"
           data-drift-x="1.0" data-drift-y="-0.8" data-drift-rot="-1.0">
          <span class="tile-media"><img src="assets/beantown/led-wall-roses.webp" alt="LED Walls" loading="lazy"></span>
          <div class="tile-body">
            <span class="tile-tag">04 / LED WALLS</span>
            <h3>LED Walls</h3>
            <p>High-impact visuals for stages &amp; launches.</p>
            <span class="tile-cta">Explore →</span>
          </div>
        </a>

        <a href="#rentals?cat=LED%20Walls" class="reveal-tile tile-secondary tone-lavender" data-tile data-step="3"
           data-start="0.52" data-peak-start="0.68" data-peak-end="0.90" data-end="1.00"
           data-enter-x="-58" data-enter-y="38" data-enter-rot="-10" data-enter-scale="0.72"
           data-target-x="-38" data-target-y="26" data-target-rot="-3.5" data-target-scale="0.96"
           data-exit-x="-58" data-exit-y="38" data-exit-rot="-8" data-exit-scale="0.72"
           data-drift-x="-1.0" data-drift-y="0.8" data-drift-rot="1.0">
          <span class="tile-media"><img src="assets/beantown/69667bc33d884d697701e4c1_Led-Wall.png" alt="LED stage walls" loading="lazy"></span>
          <div class="tile-caption"><strong>LED walls</strong><span>Bright, high-impact visuals</span></div>
        </a>

        <a href="#rentals?cat=LED%20Walls" class="reveal-tile tile-secondary tone-lime" data-tile data-step="3"
           data-start="0.54" data-peak-start="0.70" data-peak-end="0.92" data-end="1.02"
           data-enter-x="58" data-enter-y="38" data-enter-rot="10" data-enter-scale="0.72"
           data-target-x="38" data-target-y="26" data-target-rot="3.5" data-target-scale="0.96"
           data-exit-x="58" data-exit-y="38" data-exit-rot="8" data-exit-scale="0.72"
           data-drift-x="1.0" data-drift-y="0.8" data-drift-rot="-1.0">
          <span class="tile-media"><img src="assets/beantown/69667bc5bf1882f6695ff917_V-SHAPE-LED-WALL-p-800.jpg" alt="Modular screens" loading="lazy"></span>
          <div class="tile-caption"><strong>Modular screens</strong><span>Shape the stage your way</span></div>
        </a>
      </div>

      <a href="#rentals" class="experience-cta-pill" data-journey-cta>View rentals <span>→</span></a>

    </div>
  </section>
  <section class="section"><div class="section-head"><div><span class="eyebrow">EVENT BUNDLES</span><h2>Start with<br>the occasion.</h2></div><a class="btn btn-light" href="#bundles">View all bundles →</a></div><div class="bundle-grid">${bundles
    .slice(0, 3)
    .map(
      (b) =>
        `<article class="bundle-card reveal"><div class="bundle-top ${b.tone} has-bundle-image" style="--bundle-image:url('${bundleImage(b)}')"><span class="eyebrow">${b.label}</span><h3>${b.title}</h3></div><div class="bundle-body"><p style="margin:0;color:var(--muted);font-size:13px">${b.desc}</p><ul>${b.items
          .slice(0, 3)
          .map((i) => `<li>${i}</li>`)
          .join(
            "",
          )}</ul><div class="bundle-foot"><span class="bundle-price">${money(b.price)}</span><button class="btn btn-dark btn-small" data-bundle="${b.id}">View bundle →</button></div></div></article>`,
    )
    .join("")}</div></section>
  <section class="section"><div class="feature-panel dark"><div><span class="eyebrow">PLAN THE SETUP WITH CONFIDENCE</span><h3>Build it<br>before you book it.</h3><p>Choose your event, add the pieces you need, and see fixed-price items in your estimate. Custom production stays quote-based.</p></div><div class="stat-row"><div class="stat"><strong>24/7</strong><span>CONFIGURE ANYTIME</span></div><div class="stat"><strong>01</strong><span>EVENT BUILDER</span></div><div class="stat"><strong>∞</strong><span>COMBINATIONS</span></div></div></div></section>
  ${testimonialSection()}
  ${faqSection()}
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
  return `<div class="page"><div class="page-hero"><div><span class="eyebrow">EVENT BUNDLES</span><h1>Start with<br>the occasion.</h1></div><p>Choose a fixed package built around a familiar event format. Every bundle is a complete starting point with clear inclusions and no hidden customization step.</p></div><section class="bundle-customize"><div><span class="eyebrow">NEED SOMETHING MORE SPECIFIC?</span><h2>Customize your experience.</h2><p>Build an event from the ground up with recommendations for your occasion and access to the full equipment catalog.</p></div><a class="btn btn-dark" href="#builder">Build my setup →</a></section><div class="bundle-grid">${bundles.map((b) => `<article class="bundle-card reveal"><div class="bundle-top ${b.tone} has-bundle-image" style="--bundle-image:url('${bundleImage(b)}')"><span class="eyebrow">${b.label}</span><h3>${b.title}</h3></div><div class="bundle-body"><p style="margin:0;color:var(--muted);font-size:13px">${b.desc}</p><ul>${b.items.map((i) => `<li>${i}</li>`).join("")}</ul><div class="bundle-foot"><span class="bundle-price">${money(b.price)}</span><button class="btn btn-dark btn-small" data-bundle="${b.id}">View bundle →</button></div></div></article>`).join("")}</div></div>`;
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
      return `<div class="reveal"><span class="eyebrow">STEP 01</span><h2 style="font-family:'Space Grotesk';font-size:42px;letter-spacing:-.04em;margin:8px 0 10px">What are you planning?</h2><p style="color:var(--muted);margin-top:0">Pick the closest event type. The interface uses it to suggest a starting point.</p><div class="choice-grid">${["Wedding", "Corporate Event", "School Event", "Concert", "Private Party", "Outdoor Movie"].map((x) => `<button class="choice ${state.eventType === x ? "selected" : ""}" data-event="${x}"><strong>${x}</strong><span>${x === "Wedding" ? "Ceremony + celebration" : x === "Corporate Event" ? "Meetings + launches" : x === "School Event" ? "Programs + dances" : x === "Concert" ? "Live performance" : x === "Private Party" ? "Celebrations" : "Inflatable movie night"}</span>${state.eventType === x ? "<em>Selected</em>" : ""}</button>`).join("")}</div></div>`;
    if (state.builderStep === 2)
      return `<div class="reveal"><span class="eyebrow">STEP 02</span><h2 style="font-family:'Space Grotesk';font-size:42px;letter-spacing:-.04em;margin:8px 0 10px">Tell us about your event.</h2><p style="color:var(--muted);margin-top:0">Share a few planning and contact details so the quote can be tailored to your venue.</p><div class="form-grid"><div class="field"><label for="contactNameInput">Full name *</label><input class="input" id="contactNameInput" autocomplete="name" required value="${escapeHtml(state.contactName)}" placeholder="Alex Morgan"></div><div class="field"><label for="contactEmailInput">Email *</label><input class="input" id="contactEmailInput" type="email" autocomplete="email" required value="${escapeHtml(state.contactEmail)}" placeholder="alex@example.com"></div><div class="field"><label for="contactPhoneInput">Phone</label><input class="input" id="contactPhoneInput" type="tel" autocomplete="tel" value="${escapeHtml(state.contactPhone)}" placeholder="(617) 555-0198"></div><div class="field"><label for="organizationInput">Organization</label><input class="input" id="organizationInput" autocomplete="organization" value="${escapeHtml(state.organization)}" placeholder="Company or group"></div><div class="field"><label for="eventNameInput">Event name</label><input class="input" id="eventNameInput" value="${escapeHtml(state.eventName)}" placeholder="Annual fundraiser"></div><div class="field"><label for="guestInput">Estimated guests</label><input class="input" id="guestInput" type="number" min="1" value="${state.guests}"></div><div class="field"><label for="venueInput">Venue setting</label><select class="select" id="venueInput"><option ${state.venue === "Indoor" ? "selected" : ""}>Indoor</option><option ${state.venue === "Outdoor" ? "selected" : ""}>Outdoor</option><option ${state.venue === "Hybrid" ? "selected" : ""}>Hybrid</option></select></div><div class="field"><label for="dateInput">Event date</label><input class="input" id="dateInput" type="date" value="${escapeHtml(state.date)}"></div><div class="field full"><label for="eventLocationInput">Venue name or address</label><input class="input" id="eventLocationInput" autocomplete="street-address" value="${escapeHtml(state.eventLocation)}" placeholder="Search for a venue or enter an address"><div class="builder-map-placeholder" role="group" aria-label="Map preview placeholder"><span class="map-placeholder-grid" aria-hidden="true"></span><span class="map-pin" aria-hidden="true">●</span><div class="map-placeholder-copy"><strong id="mapAddressPreview">${state.eventLocation ? escapeHtml(state.eventLocation) : "Your venue preview"}</strong><span>Map preview placeholder · open this address in Google Maps</span><a id="mapPreviewLink" href="${state.eventLocation ? `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(state.eventLocation)}` : "#"}" ${state.eventLocation ? "" : 'aria-disabled="true" tabindex="-1"'} target="_blank" rel="noopener noreferrer">Preview location in Google Maps ↗</a></div></div><small class="map-api-note">An interactive embedded map can be enabled later with a Maps API key.</small></div><div class="field full"><label for="eventNotesInput">Anything else we should know?</label><textarea class="textarea" id="eventNotesInput" placeholder="Schedule, room details, delivery notes, or special requests">${escapeHtml(state.eventNotes)}</textarea></div></div></div>`;
    if (state.builderStep === 3)
      return `<div class="reveal"><span class="eyebrow">STEP 03</span><h2 style="font-family:'Space Grotesk';font-size:42px;letter-spacing:-.04em;margin:8px 0 10px">Pick the pieces.</h2><p style="color:var(--muted);margin-top:0">Start with recommendations for your ${state.eventType.toLowerCase()}, then browse the full equipment catalog. Quantities update the estimate in real time.</p><div class="equipment-group"><div class="equipment-group-head"><span class="eyebrow">FOR YOUR EVENT</span><span class="equipment-count">${recommendedProducts.length} recommendations</span></div><div class="builder-product-grid">${recommendedProducts.map((p) => miniProduct(p, true)).join("")}</div></div><div class="equipment-group all-equipment"><div class="equipment-group-head"><span class="eyebrow">ALL EQUIPMENT</span><span class="equipment-count">${products.length} products</span></div><div class="builder-product-grid">${otherProducts.map((p) => miniProduct(p)).join("")}</div></div></div>`;
    const detail = (label, value) => `<div class="summary-line"><span>${label}</span><strong>${value || "Not provided"}</strong></div>`;
    const locationValue = state.eventLocation ? `<a href="https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(state.eventLocation)}" target="_blank" rel="noopener noreferrer">${escapeHtml(state.eventLocation)} ↗</a>` : "Not provided";
    return `<div class="reveal"><span class="eyebrow">STEP 04</span><h2 style="font-family:'Space Grotesk';font-size:42px;letter-spacing:-.04em;margin:8px 0 10px">Review your build.</h2><p style="color:var(--muted);margin-top:0">Everything the client has configured is summarized here before sending the request.</p><div class="selection-list">${items.length ? items.map(({ p, qty }) => `<div class="selection-chip"><span><strong>${qty} ×</strong> ${p.name}</span><span>${p.priceType === "quote" ? "Quote" : productPriceText(p)}</span></div>`).join("") : `<div class="empty">Add at least one product to your setup.</div>`}</div><div class="builder-event-summary"><h3>Event details</h3>${detail("Event type", escapeHtml(state.eventType))}${detail("Event name", escapeHtml(state.eventName))}${detail("Contact", escapeHtml(state.contactName))}${detail("Email", escapeHtml(state.contactEmail))}${detail("Phone", escapeHtml(state.contactPhone))}${detail("Organization", escapeHtml(state.organization))}${detail("Guests", String(state.guests))}${detail("Venue setting", escapeHtml(state.venue))}${detail("Date", escapeHtml(state.date || "Not selected"))}<div class="summary-line"><span>Venue location</span><strong>${locationValue}</strong></div>${detail("Notes", escapeHtml(state.eventNotes))}</div></div>`;
  }
}

const servicePillars = [
  {
    code: "AV",
    num: "01",
    title: "Audio production",
    word: "audio.",
    desc: "From small gatherings to large-room PA systems, create the right scale for the audience and venue.",
    href: "#rentals?cat=Audio",
    cta: "Explore audio rentals →",
  },
  {
    code: "VX",
    num: "02",
    title: "Video + LED",
    word: "video + LED.",
    desc: "Projection, TVs, LED walls and signal routing for presentations, stages, launches and live events.",
    href: "#rentals?cat=LED%20Walls",
    cta: "Explore video & LED →",
  },
  {
    code: "4K",
    num: "03",
    title: "Live streaming",
    word: "streaming.",
    desc: "Single-camera and multi-angle event production with capture and streaming support.",
    href: "#rentals?cat=Live%20Streaming",
    cta: "Explore live streaming →",
  },
  {
    code: "SET",
    num: "04",
    title: "Delivery + setup",
    word: "setup.",
    desc: "Delivery, setup, pickup, and clear walkthroughs to help your event run smoothly.",
    href: "#builder",
    cta: "Plan delivery & setup →",
  },
  {
    code: "FUN",
    num: "05",
    title: "Event experiences",
    word: "experiences.",
    desc: "Silent disco, outdoor cinema and photo booths turn a basic rental into something memorable.",
    href: "#rentals?cat=Experiences",
    cta: "Explore experiences →",
  },
  {
    code: "OPS",
    num: "06",
    title: "On-site support",
    word: "support.",
    desc: "Get support from a team that knows the gear and understands event timelines.",
    href: "#quote",
    cta: "Book on-site support →",
  },
];

function renderServiceItem(s, index) {
  return `
    <li>
      <button type="button" class="about13-value-btn ${index === 0 ? "is-active" : ""}" data-about13-item="${index}" aria-pressed="${index === 0 ? "true" : "false"}">
        <span class="about13-progress-track" aria-hidden="true">
          <span class="about13-progress-fill" data-about13-bar style="transform: scaleX(${index === 0 ? 0.08 : 0})"></span>
        </span>
        <span class="about13-item-meta">
          <span class="about13-item-num">${s.num}</span>
          <span class="about13-item-code">${s.code}</span>
        </span>
        <span class="about13-item-title">${s.title}</span>
        <span class="about13-item-desc">${s.desc}</span>
      </button>
    </li>`;
}

function services() {
  return `<div class="page">
    <section class="about13-section" data-about13>
      <svg class="about13-svg-defs" aria-hidden="true" width="0" height="0" focusable="false">
        <defs>
          <filter id="about13-liquid-filter" x="-20%" y="-35%" width="140%" height="170%" color-interpolation-filters="sRGB">
            <feGaussianBlur in="SourceGraphic" stdDeviation="0" result="blur" />
            <feColorMatrix in="blur" mode="matrix" values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 25 -10" result="melt" />
          </filter>
        </defs>
      </svg>

      <div class="about13-container">
        <div class="about13-header">
          <div class="about13-headline-wrap">
            <span class="eyebrow">SERVICES · MORE THAN EQUIPMENT</span>
            <h1 class="about13-heading">
              <span class="about13-prefix">We deliver</span>
              <span class="about13-melt-stage" data-melt-stage aria-hidden="true">
                <span class="about13-melt-word is-primary" data-melt-primary>${servicePillars[0].word}</span>
                <span class="about13-melt-word is-secondary" data-melt-secondary>${servicePillars[1].word}</span>
              </span>
              <span class="about13-sr-only" data-melt-sr>${servicePillars[0].title}</span>
            </h1>
          </div>

          <div class="about13-aside">
            <div class="about13-lead-stage" data-lead-stage>
              <p class="about13-lead is-primary" data-lead-primary>${servicePillars[0].desc}</p>
              <p class="about13-lead is-secondary" data-lead-secondary aria-hidden="true">${servicePillars[1].desc}</p>
            </div>
          </div>
        </div>

        <ul class="about13-values" aria-label="Our services">
          ${servicePillars.map((s, idx) => renderServiceItem(s, idx)).join("")}
        </ul>
      </div>
    </section>
  </div>`;
}

function quoteSelection() {
  const items = Object.entries(state.selected)
    .map(([id, quantity]) => ({ product: products.find((item) => item.id === id), quantity }))
    .filter((item) => item.product);
  const estimated = items.reduce((sum, { product, quantity }) => sum + (product.price || 0) * quantity, 0);
  const quoteOnly = items.some(({ product }) => product.priceType === "quote");
  return `<div class="quote-selection"><span class="eyebrow">YOUR SETUP · ${items.reduce((sum, item) => sum + item.quantity, 0)} ITEMS</span>${items.length ? `<ul>${items.map(({ product, quantity }) => `<li><span>${quantity} × ${product.name}</span><strong>${product.price ? money(product.price * quantity) : "Quote"}</strong></li>`).join("")}</ul>` : `<p>No rentals selected yet. Go back to the catalog to build your setup.</p>`}<div class="quote-selection-total"><span>Known price estimate${quoteOnly ? " · quote-only items excluded" : ""}</span><strong>${money(estimated)}</strong></div></div>`;
}

function quote() {
  return `<div class="page"><section class="quote-page"><div class="quote-copy"><span class="eyebrow orange">REQUEST A QUOTE</span><h1>Let’s build<br>the right setup.</h1><p>Send the details below and the production team can confirm availability, final pricing and any setup or delivery requirements.</p>${quoteSelection()}</div><div class="quote-card" id="quoteCard"><div class="quote-form"><span class="eyebrow">YOUR EVENT</span><form id="quoteForm"><div class="form-grid"><div class="field"><label>Full name</label><input class="input" required placeholder="Alex Morgan"></div><div class="field"><label>Email</label><input class="input" type="email" required placeholder="alex@example.com"></div><div class="field"><label>Phone</label><input class="input" placeholder="617 555 0198"></div><div class="field"><label>Event type</label><select class="select"><option>Wedding</option><option>Corporate Event</option><option>School Event</option><option>Concert</option><option>Private Party</option><option>Outdoor Movie</option></select></div><div class="field"><label>Event date</label><input class="input" type="date"></div><div class="field"><label>Estimated guests</label><input class="input" type="number" min="1" placeholder="150"></div><div class="field full"><label>Venue / location</label><input class="input" placeholder="Venue name or address"></div><div class="field full"><label>What do you need?</label><textarea class="textarea" placeholder="Tell us about the event, room, gear, production support, timing, and anything unusual."></textarea></div></div><button class="btn btn-dark" style="width:100%;margin-top:18px">Send quote request →</button></form></div><div class="quote-success"><div class="success-mark">✓</div><span class="eyebrow">REQUEST RECEIVED</span><h2 style="font-family:'Space Grotesk';font-size:42px;letter-spacing:-.04em;margin:10px 0">Your brief is in.</h2><p style="color:var(--muted)">This mockup captures the request locally; connect the production form to the booking backend to submit it.</p><a href="#home" class="btn btn-dark">Back to home</a></div></div></section></div>`;
}

function render(options = {}) {
  const previousScroll = window.scrollY;
  const hash = getHash();
  const routeChanged = lastRenderedPage !== null && lastRenderedPage !== hash;
  if (hash === "bundles") {
    state.bundle = getHashParams().get("bundle") || null;
  }
  if (hash === "rentals") {
    const catParam = getHashParams().get("cat");
    if (catParam) state.category = catParam;
  }
  let view = home();
  if (hash === "rentals") view = rentals();
  if (hash === "bundles") view = bundlesPage();
  if (hash === "builder") view = builder();
  if (hash === "services") view = services();
  if (hash === "quote") view = quote();
  app.innerHTML = view;
  lastRenderedPage = hash;
  const pageRoot = app.querySelector(":scope > .page");
  if (routeChanged && pageRoot && !window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
    pageRoot.classList.add("is-route-entering");
    const clearRouteAnimation = (event) => {
      if (event.target !== pageRoot) return;
      pageRoot.classList.remove("is-route-entering");
      pageRoot.removeEventListener("animationend", clearRouteAnimation);
    };
    pageRoot.addEventListener("animationend", clearRouteAnimation);
  }
  syncSetupCount();
  syncMorphingNavigation();
  queueFloatingStoryUpdate();
  syncNavigation();
  observePageMotion();
  initExperienceJourney();
  initServicesMelt();
  bind();
  if (options.preserveScroll) {
    window.requestAnimationFrame(() => {
      const previousScrollBehavior =
        document.documentElement.style.scrollBehavior;
      document.documentElement.style.scrollBehavior = "auto";
      window.scrollTo(0, previousScroll);
      document.documentElement.style.scrollBehavior = previousScrollBehavior;
    });
  } else {
    window.scrollTo(0, 0);
  }
}

function syncNavigation() {
  const currentHash = getHash();
  document.querySelectorAll(".desktop-nav a, #mobileMenu a").forEach((link) => {
    const targetHash = link.getAttribute("href")?.split("?")[0];
    const isCurrent = targetHash === `#${currentHash}`;
    link.classList.toggle("active", isCurrent);
    if (isCurrent) link.setAttribute("aria-current", "page");
    else link.removeAttribute("aria-current");
  });
}

function syncMorphingNavigation() {
  document.querySelector(".topbar")?.classList.toggle("is-scrolled", window.scrollY > 72);
}

function observePageMotion() {
  const motionTargets = document.querySelectorAll(
    "#app .reveal, #app .page-hero, #app .rentals-toolbar, #app .bundle-customize, #app .builder-wrap, #app .quote-page, #app .bundle-detail-head, #app .bundle-detail-wrap, #app .service-grid, #app .page > .section",
  );
  const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  pageRevealObserver?.disconnect();
  if (reducedMotion || !("IntersectionObserver" in window)) {
    app.classList.remove("motion-enabled");
    motionTargets.forEach((target) => target.classList.add("is-visible"));
    return;
  }

  app.classList.add("motion-enabled");
  pageRevealObserver = new IntersectionObserver(
    (entries, observer) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        entry.target.classList.add("is-visible");
        observer.unobserve(entry.target);
      });
    },
    { threshold: 0.08, rootMargin: "0px 0px -36px 0px" },
  );
  motionTargets.forEach((target) => pageRevealObserver.observe(target));
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
  saveSelection();
  render({ preserveScroll: true });
  const product = products.find((item) => item.id === id);
  showToast(delta > 0 ? `${product?.name || "Rental"} added to your setup` : `${product?.name || "Rental"} removed`);
}

function bind() {
  document.querySelectorAll("[data-cat]").forEach((b) =>
    b.addEventListener("click", () => {
      state.category = b.dataset.cat;
      state.search = "";
      render({ preserveScroll: true });
    }),
  );
  document.querySelector("#rentalSearch")?.addEventListener("input", (e) => {
    state.search = e.target.value;
    const scroll = window.scrollY;
    app.innerHTML = rentals();
    observePageMotion();
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
      saveSelection();
      render({ preserveScroll: true });
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
      saveSelection();
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
        saveSelection();
        state.builderStep = 1;
        location.hash = `bundles?bundle=${match.id}`;
      }
    }),
  );
  document
    .querySelector("[data-builder-next]")
    ?.addEventListener("click", () => {
      if (state.builderStep === 2) {
        const nameInput = document.querySelector("#contactNameInput");
        const emailInput = document.querySelector("#contactEmailInput");
        if (nameInput && !nameInput.reportValidity()) return;
        if (emailInput && !emailInput.reportValidity()) return;
        state.contactName = nameInput?.value.trim() || "";
        state.contactEmail = emailInput?.value.trim() || "";
        state.contactPhone = document.querySelector("#contactPhoneInput")?.value.trim() || "";
        state.organization = document.querySelector("#organizationInput")?.value.trim() || "";
        state.eventName = document.querySelector("#eventNameInput")?.value.trim() || "";
        state.eventLocation = document.querySelector("#eventLocationInput")?.value.trim() || "";
        state.eventNotes = document.querySelector("#eventNotesInput")?.value.trim() || "";
        state.guests = parseInt(
          document.querySelector("#guestInput")?.value || 120,
        );
        state.venue = document.querySelector("#venueInput")?.value || "Indoor";
        state.date = document.querySelector("#dateInput")?.value || "";
      }
      state.builderStep = Math.min(4, state.builderStep + 1);
      render({ preserveScroll: getHash() === "builder" });
    });
  const locationInput = document.querySelector("#eventLocationInput");
  const mapLink = document.querySelector("#mapPreviewLink");
  const mapAddress = document.querySelector("#mapAddressPreview");
  locationInput?.addEventListener("input", () => {
    const address = locationInput.value.trim();
    if (mapAddress) mapAddress.textContent = address || "Your venue preview";
    if (!mapLink) return;
    if (address) {
      mapLink.href = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(address)}`;
      mapLink.removeAttribute("aria-disabled");
      mapLink.removeAttribute("tabindex");
    } else {
      mapLink.href = "#";
      mapLink.setAttribute("aria-disabled", "true");
      mapLink.setAttribute("tabindex", "-1");
    }
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
  document.querySelectorAll("[data-faq-toggle]").forEach((btn) =>
    btn.addEventListener("click", () => {
      const card = btn.closest("[data-faq-card]");
      if (!card) return;
      const isOpen = card.classList.toggle("is-open");
      btn.setAttribute("aria-expanded", isOpen ? "true" : "false");
    }),
  );
}

const mobileMenu = document.getElementById("mobileMenu");
document
  .getElementById("menuBtn")
  ?.addEventListener(
    "click",
    () =>
      {
        const isOpen = mobileMenu.style.display !== "flex";
        mobileMenu.style.display = isOpen ? "flex" : "none";
        document.getElementById("menuBtn")?.setAttribute("aria-expanded", String(isOpen));
      },
  );
mobileMenu
  ?.querySelectorAll("a")
  .forEach((a) =>
    a.addEventListener("click", () => {
      mobileMenu.style.display = "none";
      document.getElementById("menuBtn")?.setAttribute("aria-expanded", "false");
    }),
  );

document.addEventListener("keydown", (event) => {
  if (event.key !== "Escape") return;
  if (searchOverlay) searchOverlay.hidden = true;
  if (mobileMenu) mobileMenu.style.display = "none";
  document.getElementById("menuBtn")?.setAttribute("aria-expanded", "false");
});

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

let floatUpdateQueued = false;
let journeyState = null;
let journeySmoothedScrollY = window.scrollY;
let journeyLastTime = 0;
let servicesMeltRaf = 0;

function clamp01(value) {
  return value < 0 ? 0 : value > 1 ? 1 : value;
}

function smoothstep(edge0, edge1, x) {
  const t = clamp01((x - edge0) / (edge1 - edge0));
  return t * t * (3 - 2 * t);
}

function updateFloatingStories(now = performance.now()) {
  floatUpdateQueued = false;
  const needsMoreFrames = updateExperienceJourney(now);
  const cards = document.querySelectorAll("[data-scroll-float]");
  if (cards.length) {
    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const progress = reducedMotion || window.innerWidth < 1160
      ? 0
      : Math.min(Math.max(window.scrollY / 360, 0), 1);

    cards.forEach((card) => {
      const direction = Number(card.dataset.scrollFloat) || 1;
      const tilt = Number.parseFloat(card.style.getPropertyValue("--tilt")) || 0;
      const x = direction * progress * 220;
      const y = -progress * 72;
      card.style.transform = `translate3d(${x}px, ${y}px, 0) rotate(${tilt + direction * progress * 8}deg) scale(${1 - progress * 0.08})`;
      card.style.opacity = String(1 - progress);
    });
  }
  if (needsMoreFrames && !floatUpdateQueued) {
    floatUpdateQueued = true;
    window.requestAnimationFrame(updateFloatingStories);
  }
}

function updateExperienceJourney(now = performance.now(), immediate = false) {
  if (!journeyState || !journeyState.section.isConnected) return false;
  const { section, anchor, label, pills, tiles, mode } = journeyState;
  if (!section.classList.contains("is-enhanced")) return false;

  const targetScrollY = window.scrollY;
  if (immediate || !journeyLastTime) {
    journeySmoothedScrollY = targetScrollY;
  } else {
    const dt = Math.min(0.05, Math.max(0.004, (now - journeyLastTime) / 1000));
    const alpha = 1 - Math.exp(-14 * dt);
    journeySmoothedScrollY += (targetScrollY - journeySmoothedScrollY) * alpha;
    if (Math.abs(targetScrollY - journeySmoothedScrollY) < 0.15) {
      journeySmoothedScrollY = targetScrollY;
    }
  }
  journeyLastTime = now;

  const scrollLag = journeySmoothedScrollY - targetScrollY;
  const sectionRect = section.getBoundingClientRect();
  const sectionTop = sectionRect.top - scrollLag;
  const sectionHeight = sectionRect.height || 1;
  const vh = window.innerHeight || 1;
  const vw = window.innerWidth || 1;

  const scrollableSpan = Math.max(1, sectionHeight - vh * 0.82);
  const rawProgress = (vh * 0.18 - sectionTop) / scrollableSpan;
  const progress = clamp01(rawProgress);

  section.style.setProperty("--journey-progress", progress.toFixed(4));

  // Keep the centered headline stable as the visual anchor with only a subtle depth breath
  if (anchor) {
    const entrance = smoothstep(-0.18, 0.04, rawProgress);
    const anchorY = (1 - entrance) * 18;
    const breathScale = 1 + Math.sin(progress * Math.PI) * 0.012;
    anchor.style.transform = `translate3d(0, ${anchorY.toFixed(1)}px, 0) scale(${breathScale.toFixed(4)})`;
    anchor.style.opacity = (0.35 + entrance * 0.65).toFixed(3);
  }

  // Adapt collage radius to viewport aspect ratio so tiles frame the centered headline cleanly
  const stageH = Math.max(540, vh - (mode === "mobile" ? 64 : 74));
  const xSpread = mode === "mobile" ? 0.84 : mode === "tablet" ? 0.94 : 1.0;
  const ySpread = mode === "mobile" ? 1.0 : mode === "tablet" ? 1.05 : 1.0;

  for (let i = 0; i < tiles.length; i += 1) {
    const t = tiles[i];
    const effTargetX = mode === "mobile"
      ? Math.sign(t.targetX || 1) * 34
      : t.targetX;
    const effTargetY = mode === "mobile"
      ? (t.targetY * 1.05)
      : t.targetY;

    if (rawProgress <= 0 || rawProgress <= t.start || rawProgress >= t.end) {
      t.el.style.opacity = "0";
      t.el.style.pointerEvents = "none";
      const offX = (rawProgress <= t.start ? t.enterX : t.exitX) * xSpread * (vw / 100);
      const offY = (rawProgress <= t.start ? t.enterY : t.exitY) * ySpread * (stageH / 100);
      const offRot = rawProgress <= t.start ? t.enterRot : t.exitRot;
      const offScale = rawProgress <= t.start ? t.enterScale : t.exitScale;
      t.el.style.transform = `translate3d(calc(-50% + ${offX.toFixed(1)}px), calc(-50% + ${offY.toFixed(1)}px), 0) scale(${offScale}) rotate(${offRot}deg)`;
      continue;
    }

    let xVw = effTargetX;
    let yVh = effTargetY;
    let rot = t.targetRot;
    let scale = t.targetScale;
    let opacity = 1;

    if (rawProgress < t.peakStart) {
      // Flying into collage from outer direction along a curved trajectory
      const u = clamp01((rawProgress - t.start) / (t.peakStart - t.start));
      const invU = 1 - u;
      const easeX = 1 - invU * invU * invU * invU; // quartic ease-out
      const easeY = 1 - invU * invU * invU; // cubic ease-out
      xVw = t.enterX + (effTargetX - t.enterX) * easeX;
      yVh = t.enterY + (effTargetY - t.enterY) * easeY;
      rot = t.enterRot + (t.targetRot - t.enterRot) * easeY;
      scale = t.enterScale + (t.targetScale - t.enterScale) * easeY;
      opacity = smoothstep(0.0, 0.62, u);
    } else if (rawProgress <= t.peakEnd) {
      // Floating in temporary collage around the centered headline
      const m = clamp01((rawProgress - t.peakStart) / (t.peakEnd - t.peakStart));
      xVw = effTargetX + t.driftX * m;
      yVh = effTargetY + t.driftY * m;
      rot = t.targetRot + t.driftRot * m;
      scale = t.targetScale + Math.sin(m * Math.PI) * 0.028;
      opacity = 1;
    } else {
      // Dispersing / retracting away as the user continues scrolling
      const v = clamp01((rawProgress - t.peakEnd) / (t.end - t.peakEnd));
      const easeExitX = v * v;
      const easeExitY = v * v * (3 - 2 * v);
      const settledEndX = effTargetX + t.driftX;
      const settledEndY = effTargetY + t.driftY;
      const settledEndRot = t.targetRot + t.driftRot;
      xVw = settledEndX + (t.exitX - settledEndX) * easeExitX;
      yVh = settledEndY + (t.exitY - settledEndY) * easeExitY;
      rot = settledEndRot + (t.exitRot - settledEndRot) * easeExitX;
      scale = t.targetScale + (t.exitScale - t.targetScale) * easeExitY;
      opacity = 1 - smoothstep(0.08, 0.95, v);
    }

    const pxX = xVw * xSpread * (vw / 100);
    const pxY = yVh * ySpread * (stageH / 100);

    t.el.style.transform = `translate3d(calc(-50% + ${pxX.toFixed(1)}px), calc(-50% + ${pxY.toFixed(1)}px), 0) scale(${scale.toFixed(3)}) rotate(${rot.toFixed(2)}deg)`;
    t.el.style.opacity = opacity.toFixed(3);
    t.el.style.pointerEvents = opacity > 0.4 ? "auto" : "none";
  }

  const activeStep = progress < 0.26 ? 0 : progress < 0.50 ? 1 : progress < 0.74 ? 2 : 3;
  section.dataset.activeStep = String(activeStep);
  if (label) label.textContent = String(activeStep + 1).padStart(2, "0");
  if (pills.length) {
    for (let i = 0; i < pills.length; i += 1) {
      pills[i].classList.toggle("is-active", i === activeStep);
    }
  }

  return Math.abs(targetScrollY - journeySmoothedScrollY) >= 0.15;
}

function initExperienceJourney() {
  const section = document.querySelector("[data-experience-journey]");
  if (!section) {
    journeyState = null;
    return;
  }
  const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  const vw = window.innerWidth;
  const mode = vw <= 700 ? "mobile" : vw <= 1040 ? "tablet" : "desktop";
  section.dataset.viewportMode = mode;
  section.classList.toggle("is-enhanced", !reducedMotion);

  if (reducedMotion) {
    journeyState = null;
    section.querySelectorAll("[data-tile], .experience-center-anchor").forEach((el) => {
      el.style.transform = "";
      el.style.opacity = "";
      el.style.pointerEvents = "";
    });
    return;
  }

  const anchor = section.querySelector(".experience-center-anchor");
  const label = section.querySelector("[data-journey-label]");
  const pills = Array.from(section.querySelectorAll("[data-exp-pill]"));
  const tileEls = Array.from(section.querySelectorAll("[data-tile]"));

  const tiles = tileEls.map((el) => ({
    el,
    step: Number(el.dataset.step) || 0,
    start: Number(el.dataset.start) || 0,
    peakStart: Number(el.dataset.peakStart) || 0.2,
    peakEnd: Number(el.dataset.peakEnd) || 0.5,
    end: Number(el.dataset.end) || 0.7,
    enterX: Number(el.dataset.enterX) || 0,
    enterY: Number(el.dataset.enterY) || 0,
    enterRot: Number(el.dataset.enterRot) || 0,
    enterScale: Number(el.dataset.enterScale) || 0.7,
    targetX: Number(el.dataset.targetX) || 0,
    targetY: Number(el.dataset.targetY) || 0,
    targetRot: Number(el.dataset.targetRot) || 0,
    targetScale: Number(el.dataset.targetScale) || 1,
    exitX: Number(el.dataset.exitX) || 0,
    exitY: Number(el.dataset.exitY) || 0,
    exitRot: Number(el.dataset.exitRot) || 0,
    exitScale: Number(el.dataset.exitScale) || 0.75,
    driftX: Number(el.dataset.driftX) || 0,
    driftY: Number(el.dataset.driftY) || 0,
    driftRot: Number(el.dataset.driftRot) || 0,
  }));

  journeyState = {
    section,
    anchor,
    label,
    pills,
    tiles,
    mode,
  };

  journeyLastTime = performance.now();
  updateExperienceJourney(journeyLastTime, true);
}

function initServicesMelt() {
  if (servicesMeltRaf) {
    window.cancelAnimationFrame(servicesMeltRaf);
    servicesMeltRaf = 0;
  }

  const section = document.querySelector("[data-about13]");
  if (!section) return;

  const stage = section.querySelector("[data-melt-stage]");
  const primaryEl = section.querySelector("[data-melt-primary]");
  const secondaryEl = section.querySelector("[data-melt-secondary]");
  const leadPrimaryEl = section.querySelector("[data-lead-primary]");
  const leadSecondaryEl = section.querySelector("[data-lead-secondary]");
  const srEl = section.querySelector("[data-melt-sr]");
  const ctaEl = section.querySelector("[data-melt-cta]");
  const buttons = Array.from(section.querySelectorAll("[data-about13-item]"));
  const bars = buttons.map((btn) => btn.querySelector("[data-about13-bar]"));

  if (!stage || !primaryEl || !secondaryEl || !buttons.length) return;

  const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  const CYCLE_MS = 3800;
  const MELT_MS = 920;

  let activeIndex = 0;
  let fromIndex = 0;
  let isMelting = false;
  let isHoveringCard = false;
  let meltStartTime = 0;
  let cycleStartTime = performance.now();

  function triggerMelt(nextIndex, now = performance.now()) {
    const normalizedNext = (nextIndex + servicePillars.length) % servicePillars.length;
    if (normalizedNext === activeIndex) {
      if (!isMelting) cycleStartTime = now;
      return;
    }

    if (isMelting && now - meltStartTime < MELT_MS * 0.45) {
      // Keep current outgoing word if interrupted early in the morph
    } else {
      fromIndex = activeIndex;
    }
    activeIndex = normalizedNext;
    cycleStartTime = now;

    buttons.forEach((btn, idx) => {
      const isActive = idx === activeIndex;
      btn.classList.toggle("is-active", isActive);
      btn.setAttribute("aria-pressed", isActive ? "true" : "false");
    });

    bars.forEach((bar, idx) => {
      if (bar && idx !== activeIndex) {
        bar.style.transform = "scaleX(0)";
      }
    });

    const nextItem = servicePillars[activeIndex];
    if (srEl) srEl.textContent = nextItem.title;
    if (ctaEl) {
      ctaEl.textContent = nextItem.cta;
      ctaEl.setAttribute("href", nextItem.href);
    }

    if (reducedMotion) {
      isMelting = false;
      stage.classList.remove("is-melting");
      primaryEl.textContent = nextItem.word;
      primaryEl.style.filter = "none";
      primaryEl.style.opacity = "1";
      primaryEl.style.transform = "translate3d(0, 0, 0) scale(1)";
      secondaryEl.style.opacity = "0";
      if (leadPrimaryEl) {
        leadPrimaryEl.textContent = nextItem.desc;
        leadPrimaryEl.style.filter = "none";
        leadPrimaryEl.style.opacity = "1";
        leadPrimaryEl.style.transform = "translate3d(0, 0, 0)";
      }
      if (leadSecondaryEl) {
        leadSecondaryEl.style.opacity = "0";
      }
      if (bars[activeIndex]) {
        bars[activeIndex].style.transform = "scaleX(1)";
      }
      return;
    }

    isMelting = true;
    meltStartTime = now;
    primaryEl.textContent = servicePillars[fromIndex].word;
    secondaryEl.textContent = nextItem.word;
    if (leadPrimaryEl && leadSecondaryEl) {
      leadPrimaryEl.textContent = servicePillars[fromIndex].desc;
      leadSecondaryEl.textContent = nextItem.desc;
    }
    stage.classList.add("is-melting");
  }

  buttons.forEach((btn, idx) => {
    btn.addEventListener("mouseenter", () => {
      isHoveringCard = true;
      triggerMelt(idx, performance.now());
    });
    btn.addEventListener("mouseleave", () => {
      isHoveringCard = false;
      cycleStartTime = performance.now();
    });
    btn.addEventListener("focus", () => {
      triggerMelt(idx, performance.now());
    });
    btn.addEventListener("click", () => {
      triggerMelt(idx, performance.now());
    });
  });

  if (reducedMotion) {
    if (bars[0]) bars[0].style.transform = "scaleX(1)";
    return;
  }

  function tick(now) {
    if (!section.isConnected) {
      servicesMeltRaf = 0;
      return;
    }

    const elapsed = now - cycleStartTime;
    const progress = isHoveringCard ? 1 : clamp01(elapsed / CYCLE_MS);
    const activeBar = bars[activeIndex];
    if (activeBar) {
      activeBar.style.transform = `scaleX(${progress.toFixed(4)})`;
    }

    if (isMelting) {
      const rawT = clamp01((now - meltStartTime) / MELT_MS);
      const easeT = rawT < 0.5
        ? 4 * rawT * rawT * rawT
        : 1 - Math.pow(-2 * rawT + 2, 3) / 2;

      if (rawT < 1) {
        const outBlur = (easeT * 18).toFixed(2);
        const outOpacity = Math.pow(Math.max(0, 1 - easeT), 0.42).toFixed(3);
        const outY = (easeT * 6).toFixed(2);
        const outScale = (1 - easeT * 0.03).toFixed(3);

        const inBlur = ((1 - easeT) * 18).toFixed(2);
        const inOpacity = Math.pow(Math.max(0, easeT), 0.42).toFixed(3);
        const inY = ((1 - easeT) * -6).toFixed(2);
        const inScale = (0.97 + easeT * 0.03).toFixed(3);

        primaryEl.style.filter = `blur(${outBlur}px)`;
        primaryEl.style.opacity = outOpacity;
        primaryEl.style.transform = `translate3d(0, ${outY}px, 0) scale(${outScale})`;

        secondaryEl.style.filter = `blur(${inBlur}px)`;
        secondaryEl.style.opacity = inOpacity;
        secondaryEl.style.transform = `translate3d(0, ${inY}px, 0) scale(${inScale})`;

        if (leadPrimaryEl && leadSecondaryEl) {
          const leadOutOpacity = Math.max(0, 1 - smoothstep(0.0, 0.65, rawT)).toFixed(3);
          const leadInOpacity = smoothstep(0.25, 0.95, rawT).toFixed(3);
          const leadOutY = (-easeT * 10).toFixed(2);
          const leadInY = ((1 - easeT) * 10).toFixed(2);
          const leadOutBlur = (easeT * 5).toFixed(2);
          const leadInBlur = ((1 - easeT) * 5).toFixed(2);

          leadPrimaryEl.style.opacity = leadOutOpacity;
          leadPrimaryEl.style.transform = `translate3d(0, ${leadOutY}px, 0)`;
          leadPrimaryEl.style.filter = `blur(${leadOutBlur}px)`;

          leadSecondaryEl.style.opacity = leadInOpacity;
          leadSecondaryEl.style.transform = `translate3d(0, ${leadInY}px, 0)`;
          leadSecondaryEl.style.filter = `blur(${leadInBlur}px)`;
        }
      } else {
        isMelting = false;
        stage.classList.remove("is-melting");
        primaryEl.textContent = servicePillars[activeIndex].word;
        primaryEl.style.filter = "none";
        primaryEl.style.opacity = "1";
        primaryEl.style.transform = "translate3d(0, 0, 0) scale(1)";

        secondaryEl.style.filter = "blur(18px)";
        secondaryEl.style.opacity = "0";
        secondaryEl.style.transform = "translate3d(0, -6px, 0) scale(0.97)";

        if (leadPrimaryEl && leadSecondaryEl) {
          leadPrimaryEl.textContent = servicePillars[activeIndex].desc;
          leadPrimaryEl.style.opacity = "1";
          leadPrimaryEl.style.transform = "translate3d(0, 0, 0)";
          leadPrimaryEl.style.filter = "none";

          leadSecondaryEl.style.opacity = "0";
          leadSecondaryEl.style.transform = "translate3d(0, 10px, 0)";
          leadSecondaryEl.style.filter = "blur(5px)";
        }
      }
    }

    if (!isHoveringCard && elapsed >= CYCLE_MS) {
      triggerMelt(activeIndex + 1, now);
    }

    servicesMeltRaf = window.requestAnimationFrame(tick);
  }

  servicesMeltRaf = window.requestAnimationFrame(tick);
}

function queueFloatingStoryUpdate() {
  syncMorphingNavigation();
  if (floatUpdateQueued) return;
  floatUpdateQueued = true;
  window.requestAnimationFrame(updateFloatingStories);
}

window.addEventListener("scroll", queueFloatingStoryUpdate, { passive: true });
window.addEventListener("resize", () => {
  initExperienceJourney();
  queueFloatingStoryUpdate();
});

function typeHeroHeadline() {
  const headline = document.querySelector("#heroHeadline");
  if (!headline || headline.dataset.typed === "true") return;
  headline.dataset.typed = "true";
  headline.querySelectorAll("[data-type-text]").forEach((line, lineIndex) => {
    const text = line.dataset.typeText;
    line.textContent = "";
    [...text].forEach((character, index) => {
      const span = document.createElement("span");
      span.className = "hero-type-char";
      span.textContent = character === " " ? "\u00a0" : character;
      span.style.animationDelay = `${lineIndex * 360 + index * 42}ms`;
      line.append(span);
    });
  });
}

function setOpeningWord(word, element) {
  if (!element) return;
  const characters = typeof Intl !== "undefined" && Intl.Segmenter
    ? Array.from(new Intl.Segmenter("en", { granularity: "grapheme" }).segment(word), ({ segment }) => segment)
    : [...word];
  element.replaceChildren(...characters.map((character, index) => {
    const span = document.createElement("span");
    span.className = "opening-character";
    span.textContent = character;
    span.style.setProperty("--opening-index", index);
    span.style.animationDelay = `${index * 48}ms`;
    return span;
  }));
}

function runOpeningSequence() {
  const opening = document.querySelector("#openingSequence");
  const word = document.querySelector("#openingWord");
  if (getHash() !== "home" || !opening || !word || window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
    document.body.classList.remove("intro-pending");
    opening?.remove();
    typeHeroHeadline();
    return;
  }

  setOpeningWord("EVENT.", word);
  window.setTimeout(() => opening.classList.add("is-switching"), 1000);
  window.setTimeout(() => {
    setOpeningWord("SETUP.", word);
    opening.classList.remove("is-switching");
    opening.classList.add("is-second");
  }, 1550);
  window.setTimeout(() => {
    typeHeroHeadline();
    document.body.classList.remove("intro-pending");
    document.body.classList.add("site-entering");
    opening.classList.add("is-complete");
    window.setTimeout(() => {
      opening.remove();
    }, 650);
  }, 2450);
  window.setTimeout(() => document.body.classList.remove("site-entering"), 4100);
}

document.addEventListener("pointermove", (event) => {
  if (window.matchMedia("(prefers-reduced-motion: reduce), (hover: none)").matches) return;
  if (!(event.target instanceof Element)) return;
  const button = event.target.closest(".btn");
  if (button) {
    const rect = button.getBoundingClientRect();
    const x = (event.clientX - rect.left - rect.width / 2) / rect.width;
    const y = (event.clientY - rect.top - rect.height / 2) / rect.height;
    button.style.setProperty("--button-shift-x", `${(x * 7).toFixed(1)}px`);
    button.style.setProperty("--button-shift-y", `${(y * 5).toFixed(1)}px`);
  }
  const bundle = event.target.closest(".bundle-card");
  if (bundle) {
    const rect = bundle.getBoundingClientRect();
    const x = event.clientX - rect.left;
    const y = event.clientY - rect.top;
    const edge = Math.min(x, rect.width - x, y, rect.height - y);
    const proximity = Math.max(0, Math.min(1, 1 - edge / 86));
    const angle = Math.atan2(y - rect.height / 2, x - rect.width / 2) * 180 / Math.PI + 90;
    bundle.style.setProperty("--edge-proximity", proximity.toFixed(3));
    bundle.style.setProperty("--cursor-angle", `${angle.toFixed(1)}deg`);
  }
});

document.addEventListener("pointerout", (event) => {
  const button = event.target instanceof Element ? event.target.closest(".btn") : null;
  if (!button || button.contains(event.relatedTarget)) return;
  button.style.setProperty("--button-shift-x", "0px");
  button.style.setProperty("--button-shift-y", "0px");
});

document.addEventListener("pointerout", (event) => {
  const bundle = event.target instanceof Element ? event.target.closest(".bundle-card") : null;
  if (!bundle || bundle.contains(event.relatedTarget)) return;
  bundle.style.setProperty("--edge-proximity", "0");
});

window.addEventListener("hashchange", () => {
  if (getHash() !== "builder") state.builderStep = 1;
  render();
});

render();
queueFloatingStoryUpdate();
runOpeningSequence();
