/**
 * Generates clean, static, crawlable HTML landing pages for Beantown Audio Rentals
 * directly from assets/beantown/catalog-data.js and updates sitemap.xml.
 *
 * Run: node scripts/build-seo-pages.js
 */
const fs = require("fs");
const path = require("path");
const vm = require("vm");

const ROOT = path.resolve(__dirname, "..");
const PUBLIC_DIR = path.join(ROOT, "public");
const CSS_VERSION = "20261124-seo-push";
const DOMAIN = "https://www.beantownaudiorentals.com";
const WEB3FORMS_KEY = "f285afef-347a-4087-998d-98a4309ad914";
const OG_IMAGE = `${DOMAIN}/assets/beantown/69667bc6a8aed9344088bb03_Screenshot-2025-01-16-at-1-24-21-PM-p-1600.png`;

// Load real catalog data cleanly
const sandbox = { window: {} };
const catalogCode = fs.readFileSync(path.join(ROOT, "assets/beantown/catalog-data.js"), "utf8");
vm.runInNewContext(catalogCode, sandbox);
const CATALOG = sandbox.window.BEANTOWN_SOURCE_CATALOG || [];

function escapeHtml(str) {
  return String(str ?? "").replace(/[&<>"']/g, (ch) => ({
    "&": "&amp;",
    "<": "&lt;",
    ">": "&gt;",
    '"': "&quot;",
    "'": "&#39;",
  })[ch]);
}

function formatPrice(item) {
  if (item.priceType === "quote") return "Quote required";
  const formatted = `$${Number(item.price).toLocaleString("en-US")}`;
  return item.priceType === "starting" ? `From ${formatted}` : formatted;
}

function getItemsForPage(spec) {
  if (Array.isArray(spec.productIds)) {
    const byId = new Map(CATALOG.map((p) => [p.id, p]));
    return spec.productIds.map((id) => {
      const item = byId.get(id);
      if (!item) {
        throw new Error(`Missing productId "${id}" referenced in page "${spec.slug}"`);
      }
      return item;
    });
  }
  if (spec.categoryFilter) {
    return CATALOG.filter((p) => p.category === spec.categoryFilter);
  }
  return [];
}

const SERVICE_PAGES = [
  {
    slug: "speaker-rentals",
    urlPath: "/services/speaker-rentals",
    navLabel: "Speaker Rentals",
    categoryLabel: "Audio & Speakers",
    hashCategory: "Audio & Speakers",
    title: "Speaker & Party Speaker Rental Boston | From $65",
    description:
      "Rent powered PA & party speakers from $65/day near you in Boston, MA & RI. QSC & JBL Bluetooth party speakers, Small–Large PA sound systems & subs with delivery.",
    altNames: ["Boston Speaker Rental", "Rent Party Speakers Near Me", "Rent Speakers Boston, MA", "PA Speaker Rental Massachusetts", "Speaker Rental RI"],
    h1: "Speaker & Party Speaker Rentals in Boston, MA & RI",
    lead: "Rent powered PA speakers, Bluetooth party speakers, concert line arrays, and complete sound systems from $65/day—delivered, set up, and soundchecked across Boston, Massachusetts, and Rhode Island.",
    heroBullets: [
      "Powered 12″ & 15″ PA speakers ($65), stage monitors ($55) & line arrays",
      "Party speaker packages scaled from 30-guest backyards to 500+ attendees",
      "DIY self-pickup or full delivery, cabling & soundcheck across MA, RI & NH",
    ],
    categoryFilter: "Audio & Speakers",
    guideHeading: "How to Choose the Right Speaker or PA System Rental (Boston & RI)",
    guideHtmlParagraphs: [
      `When you need to <strong>rent speakers</strong>, book <strong>PA system rentals</strong>, or <strong>rent party speakers near you</strong> in Greater Boston, Massachusetts, or Rhode Island, start with your guest count and room acoustics. Our single powered PA speakers ($65/day) or Small Audio Package ($199+, 2 speakers + mixer + mic) cover backyard parties, cocktail hours, and conference speeches up to 50 guests cleanly via Bluetooth, 3.5mm AUX, or balanced XLR.`,
      `For 50–150 guests (weddings, graduation parties, corporate receptions), step up to our <a href="/audio">Medium Audio Package ($349+)</a> with four tops and optional <a href="/services/subwoofer-rentals">powered 18&Prime; subwoofers</a> ($75+). Large 150–500+ attendee dances and outdoor concerts pair our Large Line Array PA system ($880+) with <a href="/microphone-rentals">Shure QLX-D wireless, Countryman &amp; delegate mics</a>, <a href="/services/dj-equipment-rentals">DJ gear</a>, and <a href="/services/audio-mixers">Behringer X32 digital mixers</a>—with full service into <a href="/services/rhode-island-av-rentals">Providence, Newport &amp; Warwick, RI</a>.`,
      `Every <strong>speaker rental</strong> includes heavy-duty tripod stands, surge-protected power cords, and balanced XLR/Bluetooth/laptop interconnect cabling. Choose budget-friendly self-pickup or turnkey delivery, clean taped cabling, room EQ tuning, and pickup after your <a href="/services/wedding-av-rentals">wedding</a> or <a href="/services/corporate-events">corporate event</a>.`,
    ],
    related: ["audio", "subwoofer-rentals", "microphone-rentals", "rhode-island-av-rentals", "dj-equipment-rentals", "audio-mixers"],
    faqs: [
      {
        q: "How much does it cost to rent party speakers or PA speakers in Boston?",
        a: "Individual powered 12″ and 15″ PA speakers start at $65/day, stage monitors start at $55, and full turnkey sound packages with stands, cables, mixer, and wireless mics start at $199 (Small), $349 (Medium), and $880 (Large Line Array).",
      },
      {
        q: "How many speakers do I need to rent for 100 to 200 guests?",
        a: "For 50–150 guests (weddings, corporate town halls, receptions), we recommend our Medium Audio Package with four powered speakers on stands plus optional subwoofer support. For 150+ guests or live concerts, our Large Audio Package with line arrays and subs ensures even front-to-back coverage.",
      },
      {
        q: "Do your Boston speaker rentals include delivery, stands, and cables?",
        a: "Yes. Every speaker rental includes tripod stands, power cords, and XLR/Bluetooth interconnect cabling. You can choose self-pickup, white-glove delivery with setup and soundcheck across MA & RI, or full on-site technician operation.",
      },
      {
        q: "Can I connect a phone, laptop, or DJ controller to your PA speakers?",
        a: "Yes. All audio packages include a mixer with Bluetooth, AUX/3.5mm, RCA, and XLR inputs so iPhones, Androids, laptops, microphones, and DJ controllers plug right in without extra adapters.",
      },
    ],
  },
  {
    slug: "audio",
    outFile: "audio.html",
    urlPath: "/audio",
    navLabel: "Audio Packages",
    categoryLabel: "Complete Sound Systems",
    hashCategory: "Audio & Speakers",
    title: "Audio Equipment & Audio System Rental Boston | Beantown",
    description:
      "Audio equipment rentals, PA system rentals & sound equipment rental in Boston ($65–$199+): speaker packages, subs & wireless mics delivered across MA & RI.",
    altNames: [
      "Boston Audio Rentals",
      "Audio Equipment Rentals",
      "Audio Equipment Rental",
      "Audio System Rental",
      "PA System Rentals",
      "Sound Equipment Rental",
      "Audio Equipment Rental Near Me",
      "Sound Equipment in MA",
      "Sound System Services in MA",
      "Audio-Visual Equipment Rental",
      "Rent AV Equipment Near Me",
    ],
    h1: "Audio Equipment & Sound System Rentals for Events in Boston",
    lead: "Turnkey Boston audio rentals, audio equipment rentals, PA system rentals, and sound system rentals for events combining powered PA speakers, Shure wireless microphones, mixers, and cabling—engineered for weddings, corporate summits, parties, and outdoor venues across MA & RI.",
    heroBullets: [
      "Small (up to 50), Medium (50–150) & Large (150+) complete event sound systems",
      "Shop-tested PA gear with stands, Bluetooth/AUX input & redundant XLR cables",
      "Self-pickup savings or full Boston, Massachusetts & Rhode Island delivery & setup",
    ],
    productIds: ["small-audio", "medium-audio", "large-audio", "powered-speakers", "audio-monitors", "audio-cables-stands", "sub-kw181", "qlxd-handheld"],
    guideHeading: "Turnkey Audio Equipment Rentals, PA System Rentals & Sound System Services in MA",
    guideHtmlParagraphs: [
      `Searching for <strong>audio equipment rentals</strong>, <strong>audio equipment rental near me</strong>, a <strong>sound equipment rental</strong>, <strong>PA system rentals</strong>, or an <strong>audio system rental</strong> in Greater Boston shouldn't mean piecing together unfamiliar cables and amplifiers. As a full-service <strong>audio-visual equipment rental</strong> provider offering turnkey <strong>sound system services in MA</strong>, our tiered Boston <a href="/services/speaker-rentals">PA speaker &amp; audio packages</a> ($199–$880+) arrive pre-configured: Small Audio handles up to 50 guests, Medium Audio covers 50–150 guests across hotel ballrooms and tented receptions, and Large Audio adds concert line arrays and subs for 150–500+ attendees.`,
      `Every <strong>sound equipment rental</strong> and <strong>audio equipment rental</strong> is bench-tested prior to dispatch and customizes cleanly with <a href="/microphone-rentals">Shure QLX-D wireless, Countryman &amp; delegate conference mics</a>, <a href="/services/audio-mixers">Behringer X32 / Allen &amp; Heath SQ-7 consoles</a>, stage monitors, <a href="/services/subwoofer-rentals">18-inch cardioid subwoofers</a>, <a href="/services/wedding-av-rentals">renting sound equipment for a wedding</a>, <a href="/services/corporate-events">corporate meetings AV support</a>, or full <a href="/services/rhode-island-av-rentals">Rhode Island audio delivery</a>.`,
      `Looking to <strong>rent AV equipment near me</strong> on a tight schedule? Choose fast self-pickup for compact speaker &amp; mic kits or schedule our Boston crew for early load-in, taped cabling, room tuning, soundcheck, and post-event pickup across Greater Boston and Massachusetts.`,
    ],
    related: ["speaker-rentals", "microphone-rentals", "wedding-av-rentals", "corporate-events", "rhode-island-av-rentals", "subwoofer-rentals", "audio-mixers"],
    faqs: [
      {
        q: "What comes inside a turnkey Beantown sound system rental package?",
        a: "Our Small, Medium, and Large Audio Packages include powered PA speakers, heavy-duty tripod stands, Shure wireless microphones, an audio mixer with Bluetooth/laptop hookups, and all required XLR, power, and surge protection gear.",
      },
      {
        q: "Do you provide sound equipment in MA with full sound system setup and technician services?",
        a: "Yes. We supply commercial sound equipment in MA and full-service sound system services in MA—including white-glove delivery, acoustic speaker placement, wireless microphone frequency coordination, digital mixing, soundcheck, and post-event teardown across Greater Boston, Cambridge, Somerville, Waltham, Worcester, Cape Cod, and all of Massachusetts.",
      },
      {
        q: "Can we pick up compact audio equipment ourselves or book full delivery?",
        a: "Both options are available. Small PA speaker packages, wireless mic kits, and mixers can be picked up directly, or our crew delivers, sets up, runs soundcheck, and handles teardown across Boston, MA, and Rhode Island.",
      },
      {
        q: "Do you service Cambridge, Somerville, Massachusetts, and Rhode Island?",
        a: "Yes. We deliver across all Boston neighborhoods, Cambridge, Somerville, Brookline, Newton, Waltham, Worcester, Cape Cod, Providence & Newport RI, and Southern New Hampshire.",
      },
    ],
  },
  {
    slug: "dj-equipment-rentals",
    urlPath: "/services/dj-equipment-rentals",
    navLabel: "DJ Equipment",
    categoryLabel: "DJ Equipment",
    hashCategory: "DJ Equipment",
    title: "DJ Equipment Rental Boston | CDJ & Mixers | Beantown",
    description:
      "Rent Pioneer CDJ-3000s, DJM-900NXS, Technics 1200 turntables, DDJ boards, Rane battle mixers & complete DJ speaker packages in Boston & Massachusetts from $50.",
    altNames: ["Rent DJ Equipment Boston", "Rent a DJ Board Boston", "CDJ-3000 Rental Massachusetts"],
    h1: "DJ Equipment Rentals in Boston",
    lead: "Club-standard Pioneer DJ CDJ-3000s, DJM-900NXS & DJM-S9 mixers, Technics SL-1200MK2 turntables, DDJ-1000SRT controllers, and turnkey DJ sound packages for weddings, clubs, and private parties.",
    heroBullets: [
      "Pioneer CDJ-3000, CDJ-2000NXS2, DJM-900NXS & Technics 1200s in stock",
      "Rane SEVENTY-TWO, DJM-S9 & DDJ-1000SRT for Serato & Rekordbox DJs",
      "Complete Basic, Standard & Pro DJ packages with speakers, subs & facade",
    ],
    categoryFilter: "DJ Equipment",
    guideHeading: "Rent a DJ Board, Turntables, or Full Club Rig in Boston",
    guideHtmlParagraphs: [
      `Whether you need <strong>DJ equipment rental in Boston</strong> for a touring club artist with an exact Pioneer CDJ-3000 and DJM-900NXS technical rider, want to <strong>rent DJ equipment</strong> for a vinyl set on Technics SL-1200MK2 direct-drive turntables, or need a weekend <strong>DJ equipment rental</strong> with <a href="/services/speaker-rentals">powered party speakers</a> for a private celebration, every unit arrives firmware-updated, clean, and road-ready.`,
      `Need sound, lighting, and dance floor energy in one streamlined booking? Our Basic ($299+), Standard ($499+), and Pro ($699+) DJ Packages bundle controllers or CDJs, powered QSC PA tops, <a href="/services/subwoofer-rentals">18-inch subwoofers</a>, <a href="/microphone-rentals">wireless microphones</a>, and a sleek Scrim Werks facade—or pair with <a href="/services/event-lighting">event uplighting</a>, <a href="/services/cold-sparklers">cold sparklers</a>, and <a href="/services/silent-disco">silent disco headphones</a>.`,
      `We support clubs, weddings, hotel ballrooms, campus formals, and private events throughout Boston, Cambridge, Somerville, and <a href="/services/rhode-island-av-rentals">Providence &amp; Newport, Rhode Island</a>.`,
    ],
    related: ["subwoofer-rentals", "event-lighting", "cold-sparklers", "speaker-rentals", "silent-disco", "rhode-island-av-rentals"],
    faqs: [
      {
        q: "Do you rent individual Pioneer CDJ-3000 players and club mixers separately?",
        a: "Yes. You can rent single CDJ-3000 or CDJ-2000NXS2 decks, DJM-900NXS, DJM-S9, Rane SEVENTY-TWO, or DDJ-1000SRT controllers individually or paired with a full PA and subwoofer setup.",
      },
      {
        q: "Can I rent a DJ setup with speakers and a wireless mic included?",
        a: "Yes. Our Basic, Standard, and Pro DJ Packages include speakers, stands, controller or CDJ rig, wireless microphone, and facade—and you can add 18-inch subwoofers or wireless uplighting in one quote.",
      },
      {
        q: "Are slipmats, Pro DJ Link Ethernet cables, and RCA/XLR cables included?",
        a: "Yes. All necessary Pro DJ Link networking cables, RCA/XLR audio interconnects, slipmats (for Technics 1200s), and power cords are included with your DJ equipment rental.",
      },
    ],
  },
  {
    slug: "projector-rentals",
    urlPath: "/services/projector-rentals",
    navLabel: "Projector Rentals",
    categoryLabel: "Projectors & Screens",
    hashCategory: "Video & Displays",
    title: "Projector Rental Boston | Laser Projectors | Beantown",
    description:
      "Bright 4,500–6,000+ lumen HD laser projector rentals ($175+) & 80″–120″ Fast-Fold projection screens in Boston & Massachusetts for conferences, weddings & galas.",
    altNames: ["Projector Rental Boston", "AV Rental Boston", "Fast-Fold Screen Rental MA"],
    h1: "Projector & Projection Screen Rentals in Boston",
    lead: "Commercial-grade 1080p/WUXGA laser projectors (4,500 to 6,000+ lumens) paired with 80″ tripod screens or 120″ Fast-Fold dress-kit screens—built for crisp slides, keynotes, and videos even in bright rooms.",
    heroBullets: [
      "High-lumen laser projectors with instant power-on & crisp HDMI/WUXGA optics",
      "120″ Fast-Fold screens with black velvet dress kits for gala & ballroom finish",
      "Optional wireless clickers, HDMI switchers & on-site AV video support",
    ],
    productIds: ["laser-projector", "fastfold-screen", "video-basic-package", "video-mid-package", "video-switcher", "movie-16"],
    guideHeading: "High-Brightness Boston Projector Rentals Built for Real Venues",
    guideHtmlParagraphs: [
      `Low-cost office projectors wash out immediately under ballroom chandeliers or daytime windows. Our Boston projector rental inventory uses 4,500 to 6,000+ lumen commercial laser light engines so spreadsheets, brand decks, wedding slideshows, and keynote videos stay sharp and readable from every table.`,
      `Choose an individual HD Laser Projector with a 120-inch Fast-Fold screen, or book our turnkey Basic or Mid-Size <a href="/services/video">video packages</a> including presentation stands, wireless slide clickers, <a href="/services/tv-rentals">65-inch &amp; 75-inch 4K TVs</a>, <a href="/services/indoorledwall">indoor LED video walls</a>, or <a href="/services/outdoor-movies">inflatable outdoor movie screens</a>.`,
    ],
    related: ["corporate-events", "video", "tv-rentals", "indoorledwall", "outdoor-movies", "microphone-rentals"],
    faqs: [
      {
        q: "Do your Boston projector rentals include a screen and Mac/PC HDMI cables?",
        a: "Yes. Our Basic and Mid-Size Video Packages bundle the laser projector, projection screen, long HDMI cabling (25ft–100ft), stand, and wireless slide clicker. You can also rent standalone HD projectors or 120″ Fast-Fold screens individually.",
      },
      {
        q: "When should we choose a projector vs a 75″ TV or LED video wall?",
        a: "For darkened or lightly lit breakouts and banquets up to 175 guests, a laser projector and 120″ Fast-Fold screen offer unmatched screen size per dollar. For sun-drenched trade show floors or high ambient brightness, consider 75″ 4K TVs or an Indoor LED Video Wall.",
      },
    ],
  },
  {
    slug: "cold-sparklers",
    urlPath: "/services/cold-sparklers",
    navLabel: "Cold Sparklers",
    categoryLabel: "Special Effects",
    hashCategory: "Special Effects",
    title: "Cold Spark Machine & Sparklers Rental Boston | Beantown",
    description:
      "Rent indoor-safe ColorKey cold spark machines & cold sparklers in Boston & Massachusetts from $350 for wedding grand entrances, first dances & concerts. No smoke, cool sparks.",
    altNames: ["Cold Spark Machine Rental Boston", "Cold Spark Rental Massachusetts", "Cold Sparklers Rental"],
    h1: "Cold Sparkler & Cold Spark Machine Rentals in Boston",
    lead: "Create unforgettable indoor-safe spark fountains up to 15 feet high for grand entrances, first dances, and concert drops—zero smoke, zero open flame, and no pyrotechnic permit required.",
    heroBullets: [
      "Non-flammable titanium/zirconium granule sparks that remain cool to the touch",
      "Available in Basic (2 units), Premium (4 units) & Ultimate (6 units) DMX arrays",
      "Venue-friendly across Greater Boston ballrooms, tents & historic halls",
    ],
    productIds: ["cold-spark-2", "cold-spark-4", "cold-spark-ultimate", "dry-ice-cloud"],
    guideHeading: "Safe, High-Impact Cold Spark Machine Rental & Cold Sparklers Rental in Boston",
    guideHtmlParagraphs: [
      `Traditional pyrotechnics are banned inside virtually every Boston hotel, museum, and historic ballroom. Our ColorKey Dazzler FX <strong>cold sparklers rental</strong> and <strong>cold spark rental</strong> systems heat special titanium/zirconium composite granules to create a brilliant, photography-ready gold spark fountain up to 15 feet high with zero open combustion and minimal lingering smoke.`,
      `Every Boston <strong>cold spark machine rental</strong> package (Basic 2-unit $350+, Premium 4-unit $650+, Ultimate 6-unit $1,100+) includes sealed granule packets, wireless remote or DMX firing control, power/DMX cabling, and optional certified on-site technician cues—popular alongside our <a href="/services/dry-ice-machine">Dancing on a Cloud dry ice machine rental</a>, <a href="/services/wedding-av-rentals">wedding sound equipment rentals</a>, <a href="/services/event-lighting">wireless uplighting</a>, and <a href="/services/dj-equipment-rentals">DJ equipment packages</a> across Boston, MA, and <a href="/services/rhode-island-av-rentals">Rhode Island</a>.`,
    ],
    related: ["wedding-av-rentals", "dry-ice-machine", "event-lighting", "dj-equipment-rentals", "photo-booth", "rhode-island-av-rentals"],
    faqs: [
      {
        q: "Are cold sparkler machines safe inside Boston hotels and wedding venues?",
        a: "Yes. Every cold spark machine rental and cold sparklers rental uses non-pyrotechnic titanium/zirconium composite granules that stay cool to the touch moments after leaving the nozzle, produce zero open flame, and emit virtually no smoke—making our cold spark rental packages widely approved at Boston ballrooms and reception halls.",
      },
      {
        q: "How many cold spark machines do we need?",
        a: "Two machines (Basic Package, $350+) are ideal for framing a DJ booth or wedding sweetheart table entrance. Four to six machines (Premium $650+ or Ultimate $1,100+) create dramatic symmetrical stage walls for concerts, corporate awards, and grand ballrooms.",
      },
      {
        q: "Are cold spark granules and DMX triggering included in the rental?",
        a: "Yes. Packages include composite titanium granule packets, power and DMX interconnect cables, and wireless cue control, with optional on-site operator sync for grand entrances and first dances.",
      },
    ],
  },
  {
    slug: "dry-ice-machine",
    urlPath: "/services/dry-ice-machine",
    navLabel: "Dry Ice Cloud",
    categoryLabel: "Special Effects",
    hashCategory: "Special Effects",
    title: "Dry Ice Fog Machine Rental Boston | Cloud FX | Beantown",
    description:
      "Rent commercial Chauvet Nimbus dry ice fog machines ($295+) for wedding Dancing on a Cloud first dances & stage fog in Boston, MA & RI. Floor-hugging low fog.",
    altNames: ["Dry Ice Fog Machine Rental", "Dry Ice Machine Rental Massachusetts", "Dancing on a Cloud Fog Rental Boston"],
    h1: "Dry Ice Fog Machine Rentals in Boston (Dancing on a Cloud)",
    lead: "Produce dense, snowy-white low-lying cloud fog that hugs the dance floor for your wedding first dance or theatrical stage cue—powered by commercial Chauvet Nimbus dry ice machines across MA & RI.",
    heroBullets: [
      "Commercial Chauvet DJ Nimbus hot-water dry ice fog machines ($295+)",
      "Thick, clean ankle-height cloud that stays low without triggering alarms",
      "Ideal for wedding first dances, gala entrances & theater in Boston & RI",
    ],
    productIds: ["dry-ice-cloud", "cold-spark-2", "wedding-lighting", "medium-audio"],
    guideHeading: "Dancing on a Cloud Dry Ice Machine Rental Without Venue Alarm Worry",
    guideHtmlParagraphs: [
      `Unlike glycol hazers or cheap Halloween foggers that fill ceilings and risk setting off venue smoke detectors, a real CO2 <strong>dry ice machine rental</strong> and <strong>dry ice fog machine rental</strong> creates heavy chilled vapor that hugs the dance floor at ankle-to-knee level. It rolls cleanly out of our Chauvet Nimbus unit ($295+) for romantic wedding first dances, sweet 16 entrances, and stage cues before dissipating cleanly.`,
      `Pair your <strong>dry ice machine rental</strong> and low-fog effect with <a href="/services/cold-sparklers">indoor-safe cold sparkler fountains</a>, <a href="/services/wedding-av-rentals">wedding ceremony &amp; reception sound equipment</a>, <a href="/services/event-lighting">wireless amber/warm-white uplighting</a>, or <a href="/services/dj-equipment-rentals">complete DJ sound systems</a> across Greater Boston and <a href="/services/rhode-island-av-rentals">Rhode Island venues</a>.`,
    ],
    related: ["wedding-av-rentals", "cold-sparklers", "event-lighting", "photo-booth", "dj-equipment-rentals", "rhode-island-av-rentals"],
    faqs: [
      {
        q: "Does the Chauvet Nimbus dry ice fog machine use solid CO2 dry ice?",
        a: "Yes. True Dancing on a Cloud effects combine heated water with solid CO2 dry ice pellets/blocks to produce dense floor-hugging fog. Ask our Boston desk when booking if you would like delivery, pre-heating, and dry ice coordination handled for your venue.",
      },
      {
        q: "Will a dry ice fog machine trigger optical venue smoke detectors?",
        a: "No when used normally indoors—real CO2 dry ice fog stays strictly low to the floor rather than rising into ceiling optical sensors. We still recommend confirming atmospheric FX with your venue coordinator in advance.",
      },
      {
        q: "How does timing work during a wedding first dance?",
        a: "When booked with setup or an on-site technician, we pre-heat the Nimbus tank discreetly before your grand entrance or first dance so thick white cloud fills the floor right on your DJ cue.",
      },
    ],
  },
  {
    slug: "microphone-rentals",
    outFile: "microphone-rentals.html",
    urlPath: "/microphone-rentals",
    navLabel: "Microphones",
    categoryLabel: "Microphones",
    hashCategory: "Microphones",
    title: "Delegate, PTT & Wireless Mic Rental Boston | Beantown",
    description:
      "Rent delegate mics ($35), push-to-talk (PTT) conference mics, Countryman earset headsets ($50) & Shure QLX-D wireless mics across Boston, MA & RI ($20+).",
    altNames: ["Delegate Mic Rental", "Push to Talk Mic Rental", "Countryman Mic Rental", "Conference Mic Rental Boston", "Microphone Rentals Boston"],
    h1: "Delegate, Push-to-Talk, Countryman & Wireless Microphone Rentals in Boston",
    lead: "Rent Shure QLX-D digital wireless handhelds, clip-on lavaliers, Countryman E6/H6 earset headsets ($50), and push-to-talk (PTT) delegate conference microphones ($35) from $20—pre-tested for zero RF dropouts across Boston, MA, and Rhode Island.",
    heroBullets: [
      "Push-to-Talk (PTT) conference table & delegate gooseneck microphones ($35)",
      "Countryman earset headset mics ($50) & Shure QLX-D wireless lavaliers/handhelds ($65)",
      "Single mic ($65), Dual presentation ($120) & 4–6 mic Live Performance ($220) bundles",
    ],
    categoryFilter: "Microphones",
    guideHeading: "Zero-Dropout Delegate, Push-to-Talk, Countryman & Wireless Mic Audio",
    guideHtmlParagraphs: [
      `Downtown Boston RF spectrum is crowded around convention halls, universities, and Back Bay hotels. Whether you need a weighted gooseneck <strong>delegate mic rental</strong> or <strong>push-to-talk (PTT) conference microphone</strong> ($35) for panel tables, municipal hearings, and summits, a discreet tan <strong>Countryman earset mic rental</strong> ($50) for keynote speakers and theater presenters, or Shure QLX-D wireless lavaliers and handhelds ($65), every unit ships frequency-coordinated and bench-tested.`,
      `Rent single delegate, Countryman, or wireless microphones ($20–$75) or full multi-mic bundles—and pair them directly with our <a href="/services/corporate-events">corporate meetings AV support</a>, <a href="/services/wedding-av-rentals">wedding ceremony &amp; reception sound systems</a>, <a href="/services/audio-mixers">digital audio mixers</a>, <a href="/audio">PA sound packages</a>, and <a href="/services/live-streaming">4K live streaming kits</a>.`,
    ],
    related: ["corporate-events", "wedding-av-rentals", "speaker-rentals", "rhode-island-av-rentals", "audio-mixers", "live-streaming"],
    faqs: [
      {
        q: "Do you offer push-to-talk and conference delegate mic rentals?",
        a: "Yes. Our Push-to-Talk (PTT) & Conference Delegate gooseneck desk microphones ($35) feature weighted non-slip bases, momentary or locking talk switches, and balanced XLR outputs—ideal for panel tables, boardrooms, summit delegates, and controlled Q&A across Boston, MA, and Rhode Island.",
      },
      {
        q: "Do you rent Countryman earset / headset microphones in Boston?",
        a: "Yes. Our Countryman earset headset microphone rentals ($50) pair directly with Shure QLX-D digital wireless bodypack transmitters for ultra-clean, hands-free voice pickup that stays invisible on camera and rejects stage feedback during keynotes, broadcasts, and theater productions.",
      },
      {
        q: "Which microphone is best for a conference panel, keynote, or wedding ceremony?",
        a: "Our Presentation Setup ($120) pairs two Shure QLX-D wireless lavalier or Countryman headset mics with a dual receiver and compact mixer for hands-free corporate talks and wedding vows, while Wireless Handhelds ($65) and PTT Delegate Mics ($35) excel for panel tables, toasts, and audience Q&A.",
      },
      {
        q: "Do microphone rentals include stands, receivers, and XLR cables?",
        a: "Yes. Every mic rental includes matching wireless receiver units, fresh batteries/power supplies, mic clips, tabletop or boom stands where applicable, and XLR patch cabling.",
      },
    ],
  },
  {
    slug: "subwoofer-rentals",
    urlPath: "/services/subwoofer-rentals",
    navLabel: "Subwoofers",
    categoryLabel: "Subwoofers",
    hashCategory: "Subwoofers",
    title: "Subwoofer Rental Boston | QSC & JBL 18″ | Beantown",
    description:
      "Rent high-output 18″ powered subwoofers in Boston from $75: QSC KW181, QSC KS212C cardioid subs, JBL VRX line array subs, JBL PRX618S & Mackie Thump18S.",
    h1: "Subwoofer Rentals in Boston",
    lead: "Feel tight, clean low-end energy without boominess—featuring QSC KW181 1000W 18″ subs, QSC KS212C cardioid directional subs, JBL VRX918SP concert subs, and Mackie Thump18S.",
    heroBullets: [
      "QSC KW181, Cardioid QSC KS212C, JBL VRX918SP, JBL PRX618S & Mackie Thump18S",
      "Cardioid sub options keep sound stages quiet while throwing deep bass forward",
      "Built-in crossover presets pair effortlessly with any powered PA top",
    ],
    categoryFilter: "Subwoofers",
    guideHeading: "Punchy Low-End Tuned for Clubs, Bands & Ballroom Dance Floors",
    guideHtmlParagraphs: [
      `Standard 12-inch or 15-inch PA tops handle speech well, but real concert warmth and dance-floor chest thump require dedicated low-frequency enclosures. Our Boston <strong>subwoofer rental</strong> fleet spans the compact 1200W Mackie Thump18S ($75) and JBL PRX618S ($85) for mobile DJs and house parties, the industry-standard 1000W QSC KW181 18-inch birch subwoofer ($95) for live bands and ballrooms, and the high-output JBL VRX918SP concert array subwoofer ($150) for large stages and festivals.`,
      `Working inside a reverberant historic Boston ballroom, museum atrium, or hotel stage close to open vocal microphones? Rent our <strong>QSC KS212C dual 12-inch active cardioid subwoofer</strong> ($120), which focuses bass energy 15 dB tighter toward the dance floor while keeping the stage and rear walls remarkably quiet.`,
      `Every powered subwoofer rental includes built-in digital crossover presets, threaded pole-mount cups for <a href="/services/speaker-rentals">powered PA tops</a>, power cords, and dual XLR link cables—ready to pair with our <a href="/services/dj-equipment-rentals">Pioneer CDJ &amp; DJ packages</a>, <a href="/audio">complete event sound systems</a>, <a href="/services/wedding-av-rentals">wedding reception audio</a>, and <a href="/services/audio-mixers">Behringer X32 mixers</a>.`,
    ],
    related: ["speaker-rentals", "dj-equipment-rentals", "audio-mixers", "audio", "wedding-av-rentals"],
    faqs: [
      {
        q: "When should I rent a cardioid subwoofer like the QSC KS212C?",
        a: "Cardioid subwoofers reduce rear bass radiation by 15 dB—ideal when DJs or live performers are close to a wall, beside sensitive stage mics, or in historic Boston ballrooms with strict acoustic reverberation limits.",
      },
      {
        q: "How many 18-inch subwoofers do I need for 100 to 300 guests?",
        a: "One 18-inch powered subwoofer (such as the QSC KW181 or JBL PRX618S) adds rich dance-floor warmth for 75–150 guests. For 150–300+ guests, hip-hop/EDM DJ sets, or outdoor tents where bass dissipates quickly, we recommend a matched pair of QSC KW181 or JBL VRX918SP subwoofers.",
      },
      {
        q: "Do your subwoofer rentals include speaker poles and XLR crossover cables?",
        a: "Yes. Every subwoofer rental includes power cabling, balanced XLR interconnects from your mixer or DJ controller, and a pole-mount shaft if you are mounting a powered top cabinet above the sub.",
      },
    ],
  },
  {
    slug: "audio-mixers",
    urlPath: "/services/audio-mixers",
    navLabel: "Audio Mixers",
    categoryLabel: "Audio Mixers",
    hashCategory: "Audio Mixers",
    title: "Behringer X32 & Audio Mixer Rental Boston | From $40",
    description:
      "Rent a Behringer X32 ($150), X32 Compact ($110), Allen & Heath SQ-7 ($295), QSC TouchMix-16 ($85) or Yamaha/Mackie audio mixer in Boston, MA & RI from $40.",
    altNames: ["Behringer X32 Rental", "Behringer X32 Rental Boston", "Audio Mixer Rental Boston", "Allen & Heath SQ-7 Rental Massachusetts"],
    h1: "Behringer X32, Allen & Heath SQ-7 & Audio Mixer Rentals in Boston",
    lead: "Rent tour-grade digital and compact analog mixing consoles from $40/day—featuring the 40-input Behringer X32 ($150), Behringer X32 Compact ($110), 96kHz Allen & Heath SQ-7 ($295), QSC TouchMix-16 ($85), Mackie 1402-VLZ3 ($45), and Yamaha MG10XU ($40).",
    heroBullets: [
      "Behringer X32 ($150) & X32 Compact ($110) with Midas preamps & motorized faders",
      "Allen & Heath SQ-7 48-ch ($295) & QSC TouchMix-16 ($85) digital production desks",
      "Mackie 1402-VLZ3 ($45) & Yamaha MG10XU ($40) compact analog/USB mixers",
    ],
    categoryFilter: "Audio Mixers",
    guideHeading: "Behringer X32, SQ-7 & TouchMix Consoles From Breakouts to Festival FOH",
    guideHtmlParagraphs: [
      `When live sound engineers, touring bands, and corporate AV producers search for a <strong>Behringer X32 rental</strong> in Boston or Massachusetts, reliability and firmware readiness matter most. Our full-size <strong>Behringer X32 digital mixer</strong> ($150/day) delivers 32 Midas-designed programmable mic preamps, 25 motorized 100mm faders, 16 mix buses, onboard Klark Teknik FX, and a 32×32 USB multi-track recording interface—while the <strong>Behringer X32 Compact</strong> ($110/day) packs the same 40-input processing engine into a smaller FOH or monitor footprint.`,
      `For high-specification broadcast, theater, and corporate symposiums, our flagship <strong>Allen &amp; Heath SQ-7</strong> ($295/day) provides 96kHz FPGA processing across 33 motorized faders and 32 onboard preamps, while the rack-friendly <strong>QSC TouchMix-16</strong> ($85/day) and compact <strong>Mackie 1402-VLZ3</strong> ($45) or <strong>Yamaha MG10XU</strong> ($40) make small <a href="/services/corporate-events">conference room sound systems</a> and hybrid Zoom/Teams feeds effortless.`,
      `Rent standalone consoles in protective road cases for self-pickup, or bundle your mixer with <a href="/microphone-rentals">Shure QLX-D wireless, Countryman &amp; push-to-talk delegate mics</a>, <a href="/services/speaker-rentals">powered PA speakers &amp; stage monitors</a>, <a href="/services/subwoofer-rentals">QSC &amp; JBL subwoofers</a>, <a href="/services/live-streaming">4K live streaming kits</a>, and dedicated on-site FOH engineer support.`,
    ],
    related: ["microphone-rentals", "speaker-rentals", "corporate-events", "live-streaming", "subwoofer-rentals", "audio"],
    faqs: [
      {
        q: "What is included with a Behringer X32 or X32 Compact rental in Boston?",
        a: "Every Behringer X32 ($150) and X32 Compact ($110) rental arrives bench-tested in a protective road case with power cord, main XLR output tails, and USB/Ethernet connectivity for iPad remote mixing and multi-track laptop recording.",
      },
      {
        q: "Which mixer should I rent for a corporate panel or hybrid Zoom conference?",
        a: "For 2–4 microphones plus laptop playback, the Yamaha MG10XU ($40) or Mackie 1402-VLZ3 ($45) provides clean preamps and plug-and-play USB audio. For 6–16 wireless or delegate microphones, the QSC TouchMix-16 ($85) or Behringer X32 Compact ($110) adds anti-feedback EQ, gate/compression per channel, and independent livestream bus mixes.",
      },
      {
        q: "Can an on-site Beantown sound engineer set up and run the X32 or SQ-7 console?",
        a: "Yes. You can add Full On-Site Technician Support in our Quote Builder so an experienced Boston FOH audio engineer handles load-in, room EQ, wireless RF coordination, soundcheck, and live show mixing.",
      },
    ],
  },
  {
    slug: "video",
    outFile: "video.html",
    urlPath: "/video",
    navLabel: "Video Equipment",
    categoryLabel: "Video & Displays",
    hashCategory: "Video & Displays",
    title: "Video & AV Equipment Rental Boston | 4K & LED | Beantown",
    description:
      "Rent commercial 4K Samsung TVs, HD laser projectors ($175+), Fast-Fold screens, video switchers & complete audio visual equipment packages in Boston & Massachusetts.",
    altNames: ["Audio Visual Equipment Rental Massachusetts", "AV Rental Boston", "Event Video Equipment Rental Boston"],
    h1: "Video Equipment & Display Rentals in Boston",
    lead: "Complete presentation video packages—combining bright laser projectors, Fast-Fold screens with black velvet dress kits, rolling 65″ & 75″ 4K displays, and seamless multi-input switchers.",
    heroBullets: [
      "Basic (up to 40), Mid-Size (50–175) & Large Format (175+) video packages",
      "65″ & 75″ Samsung 4K UHD TVs on locking commercial rolling stands",
      "Full HD/4K multi-source video switchers with Zoom/Teams webcam output",
    ],
    categoryFilter: "Video & Displays",
    guideHeading: "Conference, Wedding & Trade Show Video Systems Across Boston",
    guideHtmlParagraphs: [
      `Clean event video and <strong>AV equipment rental</strong> mean more than a single screen—they mean seamless laptop switching, confidence monitors for keynote presenters, and zero black frames between speakers. Our tiered Boston video packages ($299–$899+) pair tested <a href="/services/tv-rentals">Samsung 65&Prime; &amp; 75&Prime; 4K UHD displays</a>, <a href="/services/projector-rentals">4,500–6,000+ lumen laser projectors &amp; Fast-Fold screens</a>, and 4-channel seamless video switchers.`,
      `For bright glass-walled ballrooms, trade show floors at BCEC or Hynes, and outdoor festivals, scale up to our <a href="/services/indoorledwall">2.67mm fine-pitch indoor LED video walls</a> ($1,150+) or <a href="/services/ledtrailers">daylight-visible mobile LED screen trailers</a>, and integrate <a href="/services/live-streaming">Sony 4K multi-camera live streaming</a> and <a href="/audio">PA sound packages</a> in one turnkey delivery.`,
    ],
    related: ["projector-rentals", "tv-rentals", "indoorledwall", "live-streaming", "corporate-events"],
    faqs: [
      {
        q: "Do your video packages allow switching cleanly between multiple laptops?",
        a: "Yes. Adding our 4-channel seamless Video Switcher ($75) prevents desktop clutter and 'No Signal' screens on the main display while queuing PowerPoint, Keynote, and video playback across multiple laptops.",
      },
      {
        q: "What is included in the Basic, Mid-Size, and Large Format Video Packages?",
        a: "Our Basic Video Package ($299+) includes a 4,500-lumen HD projector, 80″ tripod screen, stand, HDMI kit, and wireless clicker for up to 40 guests. The Mid-Size Package ($499+) upgrades to a 6,000+ lumen laser projector, 120″ Fast-Fold dress-kit screen, and video switcher for 50–175 guests, while Large Format ($899+) scales to multiple 75″ 4K displays or LED walls with on-site video tech support.",
      },
    ],
  },
  {
    slug: "tv-rentals",
    urlPath: "/services/tv-rentals",
    navLabel: "TV Rentals",
    categoryLabel: "Video & Displays",
    hashCategory: "Video & Displays",
    title: "TV Rental Boston | 65″ & 75″ 4K Displays | Beantown",
    description:
      "Rent commercial Samsung 65-inch and 75-inch 4K UHD TVs on mobile floor/truss stands in Boston for trade shows, BCEC booths, corporate breakouts & watch parties.",
    h1: "Commercial 4K TV Rentals in Boston",
    lead: "Ultra-thin bezel Samsung 65″ and 75″ 4K UHD Smart TVs mounted on commercial rolling stands—built for Boston trade shows, convention booths, confidence monitoring, and watch parties.",
    heroBullets: [
      "Samsung 75″ ($350) and 65″ ($250) 4K Crystal UHD TVs with rolling floor stands",
      "High-speed HDMI cabling, wireless casting & USB looping support",
      "Fast delivery across Boston Convention Center (BCEC), Hynes & local venues",
    ],
    productIds: ["tv-75", "tv-65", "video-large-package", "video-switcher"],
    guideHeading: "Effortless 4K Booth Signage, Breakouts & Stage Confidence Monitors",
    guideHtmlParagraphs: [
      `Need sharp, daylight-bright 4K monitors without draping long projector throws across a crowded trade show booth or sunlit hotel atrium? Our commercial <strong>Samsung 65-inch ($250) and 75-inch ($350) 4K UHD TV rentals</strong> wheel smoothly into position on heavy-duty locking floor stands with internal cable management, HDR10+ contrast, and plug-and-play HDMI, Apple AirPlay, or USB media looping.`,
      `Exhibitors at the Boston Convention &amp; Exhibition Center (BCEC), Hynes Convention Center, Seaport hotel expos, and university career fairs routinely pair dual 75-inch 4K monitors with our <a href="/services/corporate-events">corporate event AV packages</a>, <a href="/microphone-rentals">wireless &amp; delegate microphones</a>, <a href="/services/speaker-rentals">compact powered PA speakers</a>, or step up to a <a href="/services/indoorledwall">seamless 12&prime;&times;7&prime; indoor LED video wall</a> for main-aisle impact.`,
    ],
    related: ["corporate-events", "video", "projector-rentals", "indoorledwall", "live-streaming"],
    faqs: [
      {
        q: "Do your 65″ and 75″ TV rentals include the rolling floor stand and HDMI cables?",
        a: "Yes. Both the Samsung 65-inch ($250) and 75-inch ($350) 4K TV rentals include a commercial rolling floor stand with locking casters, adjustable mounting height, power cord, remote control, and a 25ft high-speed 4K HDMI cable.",
      },
      {
        q: "Can we loop a promotional video from a USB drive or connect multiple TVs together?",
        a: "Yes. Samsung 4K Smart displays support continuous USB MP4 video/image looping for unattended trade show booths, or you can add our 4-channel Video Switcher ($75) and HDMI distribution splitters to mirror a single laptop across 2 to 6 monitors simultaneously.",
      },
      {
        q: "Do you deliver TV rentals directly to BCEC, Hynes Convention Center, and Boston hotels?",
        a: "Yes. We provide timed delivery, stand assembly, video signal testing, and post-show strike across BCEC, Hynes, Seaport, Back Bay hotels, Cambridge, and Greater New England.",
      },
    ],
  },
  {
    slug: "indoorledwall",
    urlPath: "/services/indoorledwall",
    navLabel: "Indoor LED Walls",
    categoryLabel: "LED Video Walls",
    hashCategory: "LED Video Walls",
    title: "Indoor LED Video Wall Rental Boston | 2.6mm | Beantown",
    description:
      "LED screen rental Boston & 2.67mm indoor LED video wall rentals (12′×7′, 16′×9′ & custom stages) with NovaStar VX1000 processing, PA audio, ground support & setup.",
    altNames: ["LED Screen Rental Boston", "Indoor LED Video Wall Rental Boston", "LED Wall Rental Massachusetts", "Modular LED Stage Screen Boston"],
    h1: "Indoor LED Video Wall & LED Screen Rentals in Boston",
    lead: "Seamless, cinema-bright 2.67mm fine-pitch modular LED video walls and LED screen rentals in Boston—complete with NovaStar processing, ground-support framing, audio integration, and dedicated delivery & technician setup.",
    heroBullets: [
      "Turnkey 12′×7′ and 16′×9′ 2.67mm LED wall packages + custom stage builds",
      "Ultra-fine 2.67mm pitch stays crisp even for close-range ballroom viewing",
      "Includes NovaStar VX1000 processor, PA speakers, wireless mic & full crew setup",
    ],
    productIds: ["led-12", "led-16", "led-custom", "led-trailer"],
    guideHeading: "Outshine Ambient Lights With Seamless Modular LED Screen Rental in Boston",
    guideHtmlParagraphs: [
      `Projectors struggle in glass-walled Boston venues, daytime hotel ballrooms, and high-output concert productions. Our <strong>LED screen rental Boston</strong> and <strong>2.67mm fine-pitch indoor LED video wall rentals</strong> ($1,150+ for 12&prime;&times;7&prime;, $1,450+ for 16&prime;&times;9&prime;, $1,850+ for custom builds) deliver deep blacks, vivid 4K-scaled motion graphics, and zero shadows when keynote presenters walk directly in front of the stage.`,
      `Every turnkey indoor LED wall package includes a NovaStar VX1000 all-in-one video processor and scaler, heavy-duty ground-support truss framing, 2 powered PA speakers on tripod stands, a <a href="/microphone-rentals">Shure wireless handheld microphone</a>, and full delivery, rigging, and calibration by our Boston LED technicians—ready to pair with <a href="/services/corporate-events">corporate general sessions</a>, <a href="/services/live-streaming">multi-camera IMAG live streaming</a>, and <a href="/services/event-lighting">stage wash lighting</a>.`,
    ],
    related: ["corporate-events", "ledtrailers", "video", "live-streaming", "event-lighting", "speaker-rentals"],
    faqs: [
      {
        q: "What pixel pitch is best for an indoor ballroom conference or gala?",
        a: "Our 2.67mm fine-pitch indoor panels deliver razor-sharp text, financial slides, and 1080p/4K video for guests seated as close as 8–10 feet away—ideal for Boston corporate keynotes, BCEC trade show booths, and luxury wedding backdrops.",
      },
      {
        q: "What comes included with the 12′×7′ and 16′×9′ Indoor LED Wall packages?",
        a: "Both turnkey packages include the 2.67mm modular LED cabinet array, NovaStar VX1000 processor with HDMI/SDI inputs, freestanding ground-support frame, 2 powered PA speakers, audio mixer, 1 Shure wireless handheld mic, delivery, setup, and teardown.",
      },
      {
        q: "What power is required for an indoor LED video wall?",
        a: "A 12′×7′ LED wall typically operates across two dedicated 120V 20A circuits, while a 16′×9′ or larger custom wall uses three 20A circuits or a venue 3-phase power drop. Our team coordinates power distribution directly with your Boston venue engineer.",
      },
    ],
  },
  {
    slug: "ledtrailers",
    urlPath: "/services/ledtrailers",
    navLabel: "LED Trailers",
    categoryLabel: "LED Video Walls",
    hashCategory: "LED Video Walls",
    title: "Outdoor Mobile LED Wall Trailer Rental MA | Beantown",
    description:
      "Rent sunlight-visible outdoor mobile LED video wall trailers in 5 sizes across Boston, Massachusetts & New England. IP65 weatherproof, hydraulic lift, wind-rated.",
    h1: "Outdoor Mobile LED Video Wall Trailer Rentals",
    lead: "Daylight-bright 3.91mm outdoor LED screen trailers with 360-degree hydraulic mast lift, IP65 weatherproof protection, and optional generator & horn audio—ready for festivals, races, and stadium tailgates.",
    heroBullets: [
      "5 mobile outdoor trailer sizes visible in direct full afternoon sunlight",
      "IP65 rain/weather-resistant build with wind rating up to 45 mph",
      "Fast hydraulic setup plus optional whisper-quiet onboard generator & audio",
    ],
    productIds: ["led-trailer", "led-16", "led-12", "large-audio"],
    guideHeading: "Bring Giant Daylight-Bright Video Anywhere in New England",
    guideHtmlParagraphs: [
      `Unlike <a href="/services/outdoor-movies">inflatable outdoor movie screens</a> that require sunset to watch, our high-brightness <strong>3.91mm outdoor mobile LED video wall trailers</strong> ($2,600+ across 5 sizes) command crisp, full-color visibility at noon under direct summer sun—setting up in under 45 minutes on city plazas, campus quads, road-race finish lines, golf tournaments, and stadium tailgates.`,
      `Each trailer features a 360-degree rotating hydraulic mast, IP65 rain-sealed outdoor cabinets rated for winds up to 45 mph, onboard NovaStar scaling, and optional whisper-quiet diesel/inverter generator power plus <a href="/services/speaker-rentals">high-output outdoor PA speakers</a> and <a href="/services/live-streaming">live camera broadcast switching</a> across Massachusetts, <a href="/services/rhode-island-av-rentals">Rhode Island</a>, and New England.`,
    ],
    related: ["indoorledwall", "outdoor-movies", "speaker-rentals", "live-streaming", "rhode-island-av-rentals"],
    faqs: [
      {
        q: "Can LED video wall trailers run during sunny daytime hours and light rain?",
        a: "Yes. High-nit outdoor 3.91mm panels cut through direct midday sunlight without glare, and the IP65-rated cabinet structure operates safely in rain and winds up to 45 mph.",
      },
      {
        q: "Do mobile LED trailers require venue shore power or include a generator?",
        a: "Our mobile LED trailers can plug into standard venue 208V/240V shore power or arrive completely self-contained with a whisper-quiet onboard generator and integrated outdoor horn/PA audio system.",
      },
    ],
  },
  {
    slug: "live-streaming",
    urlPath: "/services/live-streaming",
    navLabel: "Live Streaming",
    categoryLabel: "Live Streaming",
    hashCategory: "Live Streaming",
    title: "Live Streaming Equipment Rental Boston | Beantown",
    description:
      "Rent turnkey single-camera and 3-camera 4K live streaming broadcast kits in Boston for hybrid conferences, town halls, Zoom/YouTube events & concerts.",
    h1: "Live Streaming & Hybrid Event Packages in Boston",
    lead: "Broadcast-clean multi-camera 4K live streaming stations combining Sony 4K cameras, hardware video switchers, QSC TouchMix audio, wireless mics, and master recording.",
    heroBullets: [
      "Single-camera Basic ($621+) & 3-camera Pro ($1,250+) streaming kits",
      "Direct broadcast feeds to YouTube, Zoom, Microsoft Teams & Vimeo",
      "Synchronized board audio plus local high-bitrate master recording",
    ],
    productIds: ["stream-basic", "stream-pro", "video-switcher", "qlxd-lavalier", "mixer-touchmix"],
    guideHeading: "Zero-Lag Hybrid Broadcasts for Universities & Corporate Town Halls",
    guideHtmlParagraphs: [
      `Remote attendees notice bad audio or blurry webcam video within five seconds. Our Boston <strong>live streaming equipment rentals</strong> ($621+ single-camera Basic, $1,250+ 3-camera Pro) pair optical Sony 4K broadcast cameras on fluid-head tripods with direct board-mixed <a href="/microphone-rentals">Shure QLX-D wireless &amp; push-to-talk delegate microphones</a>, a QSC TouchMix digital audio console, and a hardware LiveMaster 4K multi-input video switcher.`,
      `Whether you are streaming a biotech investor town hall in Cambridge, a university commencement, a hybrid panel at a Seaport hotel, or a live concert, our OBS/vMix broadcast workstations send simultaneous 1080p/4K feeds to Zoom, Microsoft Teams, YouTube Live, Vimeo, and custom RTMP portals while recording a redundant local master file—backed by our full <a href="/services/corporate-events">corporate meetings AV support</a> and <a href="/services/audio-mixers">Behringer X32 / SQ-7 consoles</a>.`,
    ],
    related: ["corporate-events", "microphone-rentals", "video", "audio-mixers", "tv-rentals"],
    faqs: [
      {
        q: "What platforms do your live streaming setups support?",
        a: "Our OBS/vMix workstations and hardware capture switchers output cleanly to Zoom, Microsoft Teams, Webex, YouTube Live, LinkedIn Live, Vimeo, and custom corporate RTMP portals while saving a high-bitrate local master recording.",
      },
      {
        q: "What is the difference between the Basic ($621+) and Pro ($1,250+) Live Streaming Packages?",
        a: "The Basic Package ($621+) includes 1 Sony 4K broadcast camera on a tripod, a 4K switcher, QSC TouchMix mixer, Shure wireless mic, and streaming workstation laptop. The Pro Package ($1,250+) upgrades to 3 Sony 4K camera angles (wide, tight presenter, and panel/audience), dual wireless mics, QSC TouchMix-16 console, and multi-angle hardware switching.",
      },
    ],
  },
  {
    slug: "outdoor-movies",
    urlPath: "/services/outdoor-movies",
    navLabel: "Outdoor Movies",
    categoryLabel: "Outdoor Movies",
    hashCategory: "Outdoor Movies",
    title: "Inflatable Movie Screen & Projector Rental | MA & RI",
    description:
      "Complete inflatable outdoor movie screen rentals with HD laser projector & PA speakers in Boston, MA & Rhode Island (RI): 12ft ($549), 16ft ($749), 26ft ($899) & 40ft ($1,899).",
    altNames: ["Inflatable Movie Screen With Projector and Speakers Rental", "Inflatable Movie Screen Rental RI", "Outdoor Movie Screen Rental Massachusetts"],
    h1: "Outdoor Inflatable Movie Screen, Projector & Speaker Rentals (MA & RI)",
    lead: "Complete outdoor cinema packages including inflatable screen, bright HD laser projector, powered PA speakers, media player, and quiet blower—delivered across Boston, Massachusetts, and Rhode Island.",
    heroBullets: [
      "Complete screen + projector + speakers bundles: 12ft ($549), 16ft ($749), 26ft ($899) & 40ft ($1,899)",
      "Commercial high-output HD laser projectors & booming outdoor PA speakers",
      "Turnkey delivery & setup across Boston, MA, Providence & Newport, RI",
    ],
    categoryFilter: "Outdoor Movies",
    guideHeading: "All-in-One Screen, Projector & Speaker Packages Across MA & RI",
    guideHtmlParagraphs: [
      `Planning a backyard movie night, school PTO fundraiser, campus quad screening, or town summer movie series in Massachusetts or Rhode Island? Every Beantown <strong>inflatable movie screen with projector and speakers rental</strong> arrives complete with a widescreen 16:9 inflatable screen, ultra-quiet continuous blower, bright <a href="/services/projector-rentals">HD laser movie projector</a>, <a href="/services/speaker-rentals">outdoor PA speakers</a> on tripod stands, heavy-duty stakes/tethers, and HDMI/Blu-ray connectivity.`,
      `Hosting a daytime outdoor festival or sunny afternoon tailgate in Boston or Providence, RI? Check out our sunlight-visible <a href="/services/ledtrailers">mobile outdoor LED screen trailers</a>, or add <a href="/services/silent-disco">silent disco headphones</a> for late-night audio after quiet-hour curfews.`,
    ],
    related: ["rhode-island-av-rentals", "ledtrailers", "projector-rentals", "silent-disco", "speaker-rentals"],
    faqs: [
      {
        q: "Does the inflatable movie screen rental include a projector and speakers?",
        a: "Yes! Every 12ft ($549), 16ft ($749), 26ft ($899), and 40ft ($1,899) package is a complete inflatable movie screen, HD laser projector, and powered PA speaker setup—plus mixer, quiet air blower, media player, and cabling.",
      },
      {
        q: "Do you deliver inflatable movie screen rentals to Rhode Island (RI) and Massachusetts?",
        a: "Yes. We deliver, set up, test, and tear down outdoor movie screen packages throughout Greater Boston, all of Massachusetts, and Rhode Island including Providence, Warwick, Cranston, and Newport.",
      },
      {
        q: "How many guests can each inflatable movie screen size hold?",
        a: "Our 12ft screen ($549) fits 10–30 guests for backyard birthdays, the 16ft ($749) fits up to 75 guests, the 26ft ($899) serves 100–150+ community attendees, and the 40ft Megascreen ($1,899) powers 500+ park or drive-in crowds.",
      },
      {
        q: "Can we plug a Roku, Apple TV, Fire Stick, laptop, or gaming console in?",
        a: "Yes. Every outdoor cinema package includes HDMI inputs for laptops, streaming sticks, gaming consoles, plus a Blu-ray/DVD player.",
      },
    ],
  },
  {
    slug: "photo-booth",
    urlPath: "/services/photo-booth",
    navLabel: "Photo Booths",
    categoryLabel: "Photo Booths",
    hashCategory: "Photo Booths",
    title: "Photo Booth Rental Boston | 360 & Mirror | Beantown",
    description:
      "Rent 360 spinning video photo booths, vintage Magic Mirror booths & sleek iPad Mirror booths in Boston & New England for weddings, proms, galas & brand activations.",
    h1: "Photo Booth Rentals in Boston (360 & Magic Mirror)",
    lead: "Elevate weddings, holiday galas, and campus parties with interactive full-length Magic Mirror photo booths (with unlimited studio prints) and 360-degree slow-motion video platforms.",
    heroBullets: [
      "iPad Mirror ($799+), Magic Mirror ($1,399+), Framed Mirror ($1,699+) & 360 Booth ($1,499+)",
      "Instant guest sharing via AirDrop, SMS, Email & QR code + custom event overlays",
      "Studio lighting, VIP props & red-carpet stanchion options available",
    ],
    categoryFilter: "Photo Booths",
    guideHeading: "360 Video Platforms & Interactive Mirrors Built for Sharing",
    guideHtmlParagraphs: [
      `Modern guests expect instant digital shares AND tangible keepsakes. Our Boston <strong>photo booth rental</strong> lineup spans sleek digital iPad Mirror booths ($799+) with beauty LED ring lights, full-height interactive touchscreen Magic Mirror booths ($1,399+) and ornate Vintage Framed Magic Mirrors ($1,699+) with DSLR strobes and unlimited 4&times;6 dye-sublimation prints, and RGB-lit <strong>360 revolving video photo booths</strong> ($1,499+) that capture slow-motion social reels for 3–4 guests at once.`,
      `Every photo booth booking includes custom event logo or monogram overlays, a curated VIP party prop trunk, instant QR/AirDrop/SMS/email sharing, and complete online digital gallery access—perfect alongside our <a href="/services/wedding-av-rentals">wedding sound &amp; lighting packages</a>, <a href="/services/cold-sparklers">indoor-safe cold sparklers</a>, <a href="/services/dry-ice-machine">Dancing on a Cloud dry ice fog</a>, and <a href="/services/dj-equipment-rentals">Boston DJ equipment rentals</a>.`,
    ],
    related: ["wedding-av-rentals", "cold-sparklers", "dry-ice-machine", "event-lighting", "dj-equipment-rentals"],
    faqs: [
      {
        q: "How do guests receive photos or 360 slow-motion videos?",
        a: "Guests share captures instantaneously on-site via QR code, Apple AirDrop, SMS text, or email, plus unlimited high-speed 4×6 lab-quality photo prints on our Magic Mirror and Vintage Framed Mirror packages.",
      },
      {
        q: "How much space and power does a 360 photo booth or Magic Mirror require?",
        a: "We recommend an 8′×8′ to 10′×10′ flat floor area and access to a single standard 120V household outlet within 25 feet. Red carpet, velvet stanchions, and perimeter RGB LED lighting are included on select packages.",
      },
    ],
  },
  {
    slug: "silent-disco",
    urlPath: "/services/silent-disco",
    navLabel: "Silent Disco",
    categoryLabel: "Silent Disco",
    hashCategory: "Silent Disco",
    title: "Silent Disco Headphone Rental Boston | Beantown",
    description:
      "Rent 3-channel LED wireless silent disco headphone packages in Boston: 50 ($500), 100 ($900), 150 ($1,200), 200 ($1,800) & 300 ($2,500) headphone packs with transmitters.",
    h1: "Silent Disco Headphone Rentals in Boston",
    lead: "Host unforgettable late-night rooftop parties, university socials, weddings, and noise-restricted venue events with glowing 3-channel wireless LED headphones—zero sound curfew conflict.",
    heroBullets: [
      "Published pricing: 50 ($500), 100 ($900), 150 ($1,200), 200 ($1,800) & 300 ($2,500) packs",
      "3 simultaneous music channels (Red, Blue, Green LED earcups) up to 500m range",
      "Pre-charged headphones + 3 RF transmitters + laptop/phone/DJ cables included",
    ],
    categoryFilter: "Silent Disco",
    guideHeading: "Beat Noise Ordinances With 3-Channel LED Headphone Parties",
    guideHtmlParagraphs: [
      `Hosting in a residential Back Bay brownstone, Cambridge rooftop, university quad, or a historic reception hall with strict 10:00 PM sound limits? Our Boston <strong>silent disco headphone rentals</strong> ($500 for 50 headphones, $900 for 100, $1,200 for 150, $1,800 for 200, and $2,500 for 300) let up to three live DJs or Spotify playlists broadcast simultaneously on glowing Red, Blue, and Green channels while the room outside stays whisper quiet.`,
      `Every package ships 100% pre-charged in organized transport cases with 3 long-range RF transmitters (up to 500-meter radius) and 3.5mm/RCA/XLR audio cables—popular for college orientations, <a href="/services/outdoor-movies">late-night outdoor movie screenings</a>, <a href="/services/wedding-av-rentals">wedding after-parties</a>, and <a href="/services/dj-equipment-rentals">multi-DJ battles</a> across Massachusetts and <a href="/services/rhode-island-av-rentals">Rhode Island</a>.`,
    ],
    related: ["dj-equipment-rentals", "event-lighting", "outdoor-movies", "photo-booth", "wedding-av-rentals"],
    faqs: [
      {
        q: "How long do silent disco headphones stay charged during an event?",
        a: "Every unit ships 100% pre-charged with 8–10+ hours of continuous wireless playtime, plus included charging racks on 100–300 headphone packs.",
      },
      {
        q: "Can we connect three different phones, laptops, or DJ controllers?",
        a: "Yes! Every pack includes 3 independent RF transmitters and audio interconnect cables so up to 3 music sources broadcast simultaneously.",
      },
    ],
  },
  {
    slug: "event-lighting",
    urlPath: "/services/event-lighting",
    navLabel: "Event Lighting",
    categoryLabel: "Event Lighting",
    hashCategory: "Event Lighting",
    title: "Event Lighting & Uplight Rental Boston | Beantown",
    description:
      "Rent Chauvet wireless Freedom Par uplights, pinspots, moving heads, LED followspots, light bars, blacklights & complete stage/wedding lighting in Boston & MA.",
    h1: "Event Lighting & Wireless Uplight Rentals in Boston",
    lead: "Transform ordinary rooms, tents, and stages with 100% wireless battery-powered Chauvet Freedom Par uplights, DMX moving heads, centerpiece pinspots, LED followspots, and outdoor wash lighting.",
    heroBullets: [
      "Cable-free Chauvet Freedom Par wireless uplights (up to 20-hour battery life)",
      "Dedicated Wedding, Dance Party, Stage, Outdoor IP65 & Uplighting packages",
      "DMX moving heads, LED followspots, magnetic pinspots & UV blacklights",
    ],
    categoryFilter: "Event Lighting",
    guideHeading: "Sculpt Your Venue Color Palette With Wire-Free Architecture",
    guideHtmlParagraphs: [
      `Lighting instantly defines the mood of any Boston space—from warm candlelit amber across exposed brick walls and white wedding tents to synchronized moving-head club beams over a dance floor. Our IP65 weather-rated wireless <strong>Chauvet Freedom Par H9 uplight rentals</strong> ($150 for 6 fixtures, $275 for Basic 8-light package) run up to 20 hours on internal batteries, eliminating messy power cords along venue perimeters.`,
      `Need complete stage or reception illumination? Choose our Wedding Lighting Package ($450+ with 8 wireless uplights + 4 magnetic cake/centerpiece pinspots), Dance Party Lighting Package ($350+), or Stage Lighting Package ($550+ with dual lighting trees and DMX console)—and pair with <a href="/services/cold-sparklers">indoor-safe cold sparkler machines</a>, <a href="/services/dry-ice-machine">Dancing on a Cloud dry ice fog</a>, and <a href="/services/wedding-av-rentals">wedding sound systems</a>.`,
    ],
    related: ["wedding-av-rentals", "cold-sparklers", "dry-ice-machine", "dj-equipment-rentals", "photo-booth"],
    faqs: [
      {
        q: "Are your wireless uplights truly cord-free during an event?",
        a: "Yes. Our Chauvet Freedom Par wireless LED uplights run up to 20 hours on internal lithium batteries, letting us tuck them cleanly beside pillars, drapery, and tent legs without tripping hazards.",
      },
      {
        q: "Can we customize the exact RGB+Amber+UV color of the wireless uplights?",
        a: "Yes. Every Chauvet Freedom Par H9 fixture mixes Red, Green, Blue, Amber, White, and UV LEDs so you can lock in warm candlelit gold for dinner and switch to dynamic color fades for dancing via wireless remote or DMX.",
      },
    ],
  },
  {
    slug: "corporate-events",
    urlPath: "/services/corporate-events",
    navLabel: "Corporate Event AV",
    categoryLabel: "Corporate Meetings & Event AV",
    hashCategory: "Video & Displays",
    title: "Corporate Event AV & Meetings Support Boston, MA",
    description:
      "Corporate event AV & meetings support in Boston, MA: wireless & delegate mics, PA speakers, laser projectors, 4K TVs, LED walls, streaming & on-site techs.",
    altNames: ["Corporate Event AV Boston MA", "Corporate Meetings AV Support Boston MA", "Conference Room Sound Systems in MA", "Corporate Conference AV Rental Boston"],
    h1: "Corporate Event AV & Corporate Meetings Support in Boston, MA",
    lead: "Turnkey corporate event AV, conference room sound systems in MA, and full meetings AV support across Boston, Cambridge, and Seaport hotels—combining QSC PA audio, Shure QLX-D & PTT delegate microphones, 4K TVs, laser projectors, 2.67mm LED walls, hybrid live streaming, and dedicated on-site technicians.",
    heroBullets: [
      "Complete conference room sound systems, display, mic & Zoom/Teams hybrid packages",
      "Experienced with BCEC, Hynes Convention Center, Seaport & Kendall Square venues",
      "Pre-tested gear, clean taped cabling, COI readiness & dedicated FOH engineers",
    ],
    productIds: [
      "medium-audio",
      "mic-presentation-package",
      "ptt-mic",
      "qlxd-lavalier",
      "laser-projector",
      "fastfold-screen",
      "tv-75",
      "led-12",
      "stream-basic",
      "stream-pro",
    ],
    guideHeading: "Dependable AV & Conference Room Sound Systems Across Boston & MA",
    guideHtmlParagraphs: [
      `Corporate planners, executive assistants, and event teams searching for <strong>corporate event AV in Boston, MA</strong> or temporary <strong>conference room sound systems in MA</strong> need equipment that arrives early, coordinates cleanly with hotel or office building loading docks, and eliminates audio dropouts or blank presentation screens. From executive boardroom Q&amp;As in Back Bay and Kendall Square to 300-person town halls and trade show booths at BCEC or Hynes, our crew delivers, sets up, and runs technical rehearsal well before doors open.`,
      `Build custom corporate meetings support with our <a href="/microphone-rentals">delegate push-to-talk ($35), Countryman earset ($50) &amp; Shure QLX-D wireless lavalier microphones ($65)</a>, <a href="/audio">Small and Medium PA sound packages</a>, <a href="/services/audio-mixers">Behringer X32 &amp; QSC TouchMix digital mixers</a>, <a href="/services/projector-rentals">high-lumen laser projectors</a>, <a href="/services/tv-rentals">65&Prime; &amp; 75&Prime; 4K rolling monitors</a>, <a href="/services/indoorledwall">seamless 2.67mm indoor LED video walls</a>, and <a href="/services/live-streaming">multi-camera hybrid streaming systems</a>—or <a href="/contact">request a written corporate quote</a> directly from our Boston desk.`,
    ],
    related: ["microphone-rentals", "audio", "audio-mixers", "projector-rentals", "tv-rentals", "indoorledwall", "live-streaming"],
    faqs: [
      {
        q: "Do you rent temporary conference room sound systems in MA for boardrooms and hotel meetings?",
        a: "Yes. We configure low-profile conference room sound systems across Massachusetts—combining compact powered PA speakers, tabletop Push-to-Talk (PTT) delegate gooseneck microphones ($35), Shure QLX-D wireless lavaliers ($65), and USB digital mixers that feed crystal-clear room audio directly into Zoom and Microsoft Teams.",
      },
      {
        q: "Do you provide dedicated on-site AV technicians for corporate meetings in Boston, MA?",
        a: "Yes. You can book certified Beantown on-site AV technicians and audio engineers to manage morning setup, presenter mic checks, slide and laptop switching, Q&A panel levels, hybrid Zoom/Teams audio feeds, and quiet post-event strike.",
      },
      {
        q: "Which microphones do you recommend for corporate panels and keynote speakers?",
        a: "We recommend our Presentation Package ($120) with two Shure QLX-D wireless lavalier or handheld mics for keynotes, paired with our Push-to-Talk (PTT) Conference Delegate gooseneck microphones ($35 each) for multi-speaker roundtables and town-hall Q&As.",
      },
      {
        q: "Can you deliver to Seaport, Downtown Boston, Back Bay hotels, and Kendall Square?",
        a: "Yes. We routinely deliver and set up corporate AV across Downtown Boston, Seaport District, Back Bay, Financial District, Cambridge/Kendall Square, Waltham, Burlington, and Greater New England, and accept corporate cards, ACH, and approved Net-30 invoicing.",
      },
    ],
  },
  {
    slug: "rhode-island-av-rentals",
    urlPath: "/services/rhode-island-av-rentals",
    navLabel: "Rhode Island AV",
    categoryLabel: "Rhode Island · Providence · Newport",
    hashCategory: "Audio & Speakers",
    title: "Speaker, Mic & Event AV Rental Rhode Island | Beantown",
    description:
      "Rent PA speakers, party speakers, wireless & delegate mics, DJ gear & inflatable movie screens across Providence, Newport, Warwick & Cranston, RI ($65+).",
    altNames: ["Microphone and Speaker Rental RI", "Speaker Rental Rhode Island", "Inflatable Movie Screen Rental RI", "AV Rental Providence RI"],
    h1: "Speaker, Microphone & Event AV Rentals in Rhode Island (RI)",
    lead: "Turnkey microphone and speaker rentals, inflatable movie screens, DJ setups, and event AV production delivered across Providence, Warwick, Cranston, Pawtucket, and Newport, RI from $65+.",
    heroBullets: [
      "Powered PA speakers ($65), complete audio packages ($199+) & 18″ subwoofers",
      "Shure QLX-D wireless handhelds, lavaliers & PTT delegate conference mics ($20–$65)",
      "12ft–40ft inflatable outdoor movie screens, silent disco & cold sparklers across RI",
    ],
    productIds: [
      "small-audio",
      "medium-audio",
      "powered-speakers",
      "qlxd-handheld",
      "qlxd-lavalier",
      "ptt-mic",
      "mic-presentation-package",
      "movie-16",
      "movie-26",
      "silent-100",
      "cold-spark-2",
    ],
    guideHeading: "Reliable Delivery Across Providence, Newport & All of Rhode Island",
    guideHtmlParagraphs: [
      `Planning a ceremony in Newport, a campus event near Brown University, RISD, or Providence College, a backyard movie night in Warwick or Cranston, or a corporate meeting downtown? Our team dispatches clean, pre-tested <strong>microphone and speaker rentals across Rhode Island</strong> via I-95 South—handling morning load-in, discreet cabling, RF coordination, and prompt teardown.`,
      `Popular Rhode Island rentals include our turnkey <a href="/audio">Small and Medium PA Audio Packages</a> ($199–$349+), <a href="/microphone-rentals">Shure QLX-D wireless &amp; push-to-talk conference mics</a>, <a href="/services/outdoor-movies">all-in-one inflatable outdoor movie screens with projector &amp; speakers</a> ($549–$1,899), <a href="/services/silent-disco">quiet-curfew silent disco packs</a> for historic coastal venues, and <a href="/services/cold-sparklers">indoor-safe cold sparklers</a>.`,
    ],
    related: ["speaker-rentals", "microphone-rentals", "outdoor-movies", "audio", "corporate-events"],
    faqs: [
      {
        q: "Do you deliver microphone and speaker rentals anywhere in Rhode Island?",
        a: "Yes. We deliver, set up, soundcheck, and tear down across Providence, Warwick, Cranston, Pawtucket, East Greenwich, Bristol, Narragansett, Middletown, and Newport, RI.",
      },
      {
        q: "Can we rent outdoor inflatable movie screens or silent disco packages in RI?",
        a: "Yes. Our 12ft ($549), 16ft ($749), 26ft ($899), and 40ft ($1,899) inflatable outdoor movie screens include the HD laser projector and PA speakers, and our 3-channel wireless silent disco packages ($500–$2,500) work wonderfully at noise-restricted Newport estates.",
      },
      {
        q: "How far ahead should we book Rhode Island event AV delivery?",
        a: "We recommend reserving 2–3 weeks in advance for May–October weekends in Newport and Providence, though we handle urgent same-week requests whenever crew is open—call (978) 601-5473 to confirm availability.",
      },
    ],
  },
  {
    slug: "wedding-av-rentals",
    urlPath: "/services/wedding-av-rentals",
    navLabel: "Wedding Sound & AV",
    categoryLabel: "Weddings · Sound · Lighting · FX",
    hashCategory: "Audio & Speakers",
    title: "Wedding Sound, Speaker & Lighting Rental Boston | Beantown",
    description:
      "Rent sound equipment for weddings in Boston, MA & RI ($199+): PA speakers, wireless ceremony mics, DJ gear, uplighting, cold sparklers, dry ice cloud & photo booths.",
    altNames: ["Rent Sound Equipment for Wedding", "Wedding Sound System Rental Boston", "Wedding Speaker and Microphone Rental MA", "Wedding Lighting & Cold Sparklers Boston"],
    h1: "Rent Sound Equipment, Wireless Mics, Lighting & Special FX for Weddings in Boston",
    lead: "Complete wedding sound equipment rentals from $199+—combining discreet Shure wireless ceremony lavaliers, cocktail hour PA speakers, reception subwoofers, cord-free amber/warm-white uplighting, Dancing on a Cloud dry ice fog, indoor-safe cold sparklers, and Magic Mirror photo booths across Boston, MA & Rhode Island.",
    heroBullets: [
      "Ceremony & cocktail PA speaker packages ($199+) with clip-on Shure wireless mics ($65)",
      "Reception sound systems ($349+), QSC cardioid subs ($120) & turnkey DJ setups ($299+)",
      "Wireless battery uplighting ($150/6), cold sparklers ($350+) & dry ice cloud fog ($295+)",
    ],
    productIds: [
      "small-audio",
      "medium-audio",
      "qlxd-lavalier",
      "qlxd-handheld",
      "dj-standard-pkg",
      "sub-ks212c",
      "wedding-lighting",
      "uplights-6",
      "cold-spark-2",
      "dry-ice-cloud",
      "photo-magic-mirror",
      "photo-360",
      "silent-100",
    ],
    guideHeading: "How to Rent Sound Equipment for a Wedding Without Audio Dropouts",
    guideHtmlParagraphs: [
      `When couples and planners look to <strong>rent sound equipment for a wedding</strong> in Greater Boston, Cape Cod, or Newport, RI, the biggest mistake is trying to stretch one pair of speakers across three separate rooms. We design seamless ceremony-to-last-dance kits: a compact battery or <a href="/audio">Small Audio Package</a> ($199+) with a clip-on <a href="/microphone-rentals">Shure QLX-D wireless lavalier</a> for the officiant and vow exchange, a dedicated speaker for outdoor or atrium cocktail hour, and a <a href="/services/speaker-rentals">Medium Audio or DJ Reception System</a> ($349+) with a <a href="/services/subwoofer-rentals">QSC cardioid subwoofer</a> for clear dinner toasts and punchy dance-floor bass.`,
      `Elevate your grand entrance and first dance in one coordinated delivery by adding <a href="/services/event-lighting">100% cord-free Chauvet Freedom Par wireless uplights</a>, <a href="/services/dry-ice-machine">Chauvet Nimbus Dancing on a Cloud dry ice low fog</a> ($295+), <a href="/services/cold-sparklers">indoor-safe cold sparkler fountains</a> ($350+), a <a href="/services/photo-booth">full-length Magic Mirror or 360 video photo booth</a>, or <a href="/services/silent-disco">3-channel LED silent disco headphones</a> for late-night after-parties at curfew-restricted venues.`,
      `Choose budget-friendly self-pickup for DIY backyard weddings or white-glove delivery, hidden white/black taped cabling, acoustic soundcheck, and on-site technician operation across Boston, Cambridge, the North &amp; South Shore, Cape Cod, and <a href="/services/rhode-island-av-rentals">Rhode Island</a>.`,
    ],
    related: ["speaker-rentals", "audio", "microphone-rentals", "event-lighting", "cold-sparklers", "dry-ice-machine", "photo-booth"],
    faqs: [
      {
        q: "What sound equipment do I need to rent for a wedding ceremony and reception?",
        a: "For the ceremony (up to 150 guests), we recommend our Small Audio Package ($199+) paired with a Shure QLX-D clip-on wireless lavalier mic ($65) for the officiant and a wireless handheld mic for readings. For the reception (50–150+ guests), our Medium Audio Package ($349+) or Standard DJ Package ($499+) with four speakers, wireless toast mics, and an 18-inch subwoofer covers speeches and dancing cleanly.",
      },
      {
        q: "Can we plug Spotify or a laptop directly into your wedding speaker rentals?",
        a: "Yes. Every wedding sound package includes an audio mixer with Bluetooth, 3.5mm/AUX, RCA, and balanced XLR inputs so playlists from an iPhone, iPad, MacBook, or DJ controller play effortlessly.",
      },
      {
        q: "Are your Cold Sparklers and Dancing on a Cloud dry ice machines safe for indoor wedding venues?",
        a: "Yes. Our Cold Sparkler machines use non-flammable composite granules that produce zero open flame and virtually no smoke, while our Chauvet Nimbus dry ice fog machine uses real solid CO2 and heated water so thick white cloud stays strictly at ankle height without rising into ceiling smoke sensors.",
      },
      {
        q: "Do you deliver and set up wedding sound and lighting at Boston and Newport venues?",
        a: "Yes. Our technicians handle early venue load-in, neat cable taping, frequency coordination, soundcheck, and post-reception teardown across Boston hotels, historic estates, tents, Cape Cod, and Newport/Providence, RI.",
      },
    ],
  },
];

// Write styles append cleanly (idempotent marker)
function ensureSeoStyles() {
  const marker = "/* SEO_STATIC_LANDING_STYLES_START */";
  const seoCss = `
${marker}
.footer-seo-strip {
  max-width: 1280px;
  margin: 28px auto 0;
  padding-top: 22px;
  border-top: 1px solid #2a2a2a;
}
.footer-seo-label {
  display: block;
  font-size: 10px;
  font-weight: 700;
  letter-spacing: 0.14em;
  text-transform: uppercase;
  color: #8e8a82;
  margin-bottom: 10px;
}
.footer-seo-links {
  display: flex;
  flex-wrap: wrap;
  gap: 8px 18px;
}
.footer .footer-seo-links a {
  display: inline-block;
  margin: 0;
  padding: 2px 0;
  font-size: 12px;
  color: #a9a49b;
  opacity: 0.9;
}
.footer .footer-seo-links a:hover {
  color: #fff1c7;
  opacity: 1;
}

.seo-main {
  max-width: 1240px;
  margin: 0 auto;
  padding: 36px 24px 80px;
}
.seo-breadcrumbs {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: 8px;
  font-size: 13px;
  color: #656159;
  margin-bottom: 22px;
}
.seo-breadcrumbs a {
  color: #292820;
  text-decoration: none;
  font-weight: 500;
}
.seo-breadcrumbs a:hover {
  text-decoration: underline;
}
.seo-hero {
  background: #ffffff;
  border: 1px solid rgba(41, 40, 32, 0.1);
  border-radius: 30px;
  padding: clamp(28px, 4vw, 48px);
  box-shadow: 0 22px 48px rgba(41, 40, 32, 0.05);
  margin-bottom: 42px;
}
.seo-hero-eyebrow {
  display: inline-block;
  font-size: 11px;
  font-weight: 800;
  letter-spacing: 0.14em;
  text-transform: uppercase;
  color: #8e5f00;
  background: #fff3cc;
  padding: 6px 14px;
  border-radius: 999px;
  margin-bottom: 16px;
}
.seo-hero h1 {
  font-family: "Sora", "Inter", sans-serif;
  font-size: clamp(32px, 4.8vw, 54px);
  line-height: 1.06;
  letter-spacing: -0.03em;
  margin: 0 0 16px;
  color: #111216;
}
.seo-hero-lead {
  font-size: clamp(16px, 1.8vw, 19px);
  line-height: 1.55;
  color: #4b4942;
  max-width: 780px;
  margin: 0 0 22px;
}
.seo-hero-bullets {
  list-style: none;
  padding: 0;
  margin: 0 0 28px;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
  gap: 10px 20px;
}
.seo-hero-bullets li {
  display: flex;
  align-items: flex-start;
  gap: 10px;
  font-size: 14px;
  line-height: 1.45;
  color: #292820;
  font-weight: 500;
}
.seo-hero-bullets li::before {
  content: "✓";
  flex: 0 0 auto;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 20px;
  height: 20px;
  border-radius: 999px;
  background: #f5c443;
  color: #111216;
  font-size: 11px;
  font-weight: 800;
  margin-top: 1px;
}
.seo-cta-row {
  display: flex;
  flex-wrap: wrap;
  gap: 12px;
  align-items: center;
}
.seo-btn-gold {
  background: #f5c443;
  color: #111216;
  border: 1px solid #e2b029;
}
.seo-btn-gold:hover {
  background: #ffd159;
}
.seo-phone-pill {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  padding: 12px 18px;
  border-radius: 999px;
  background: #faf6ee;
  border: 1px solid rgba(41, 40, 32, 0.14);
  font-weight: 700;
  font-size: 14px;
  color: #111216;
  text-decoration: none;
}
.seo-section-head {
  display: flex;
  flex-wrap: wrap;
  align-items: flex-end;
  justify-content: space-between;
  gap: 16px;
  margin: 44px 0 22px;
}
.seo-section-head h2 {
  font-family: "Sora", "Inter", sans-serif;
  font-size: clamp(24px, 3vw, 34px);
  line-height: 1.15;
  margin: 0;
  letter-spacing: -0.025em;
}
.seo-catalog-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(290px, 1fr));
  gap: 20px;
}
.seo-item-card {
  background: #ffffff;
  border: 1px solid rgba(41, 40, 32, 0.1);
  border-radius: 24px;
  padding: 16px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 14px;
  box-shadow: 0 10px 26px rgba(41, 40, 32, 0.04);
}
.seo-item-thumb {
  position: relative;
  border-radius: 16px;
  overflow: hidden;
  background: #f4efe4;
  aspect-ratio: 4 / 3;
}
.seo-item-thumb img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
}
.seo-item-tag {
  position: absolute;
  top: 10px;
  left: 10px;
  background: rgba(17, 18, 22, 0.85);
  color: #fff;
  font-size: 11px;
  font-weight: 700;
  padding: 4px 10px;
  border-radius: 999px;
}
.seo-item-card h3 {
  font-family: "Sora", "Inter", sans-serif;
  font-size: 18px;
  line-height: 1.25;
  margin: 0 0 8px;
  color: #111216;
}
.seo-item-specs {
  list-style: none;
  padding: 0;
  margin: 0;
  display: grid;
  gap: 5px;
  font-size: 13px;
  line-height: 1.45;
  color: #555249;
}
.seo-item-foot {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 10px;
  padding-top: 12px;
  border-top: 1px solid rgba(41, 40, 32, 0.08);
}
.seo-item-price {
  font-weight: 800;
  font-size: 15px;
  color: #111216;
}
.seo-add-btn {
  border: 0;
  border-radius: 999px;
  padding: 10px 16px;
  font-size: 13px;
  font-weight: 700;
  cursor: pointer;
  background: #111216;
  color: #ffffff;
  transition: transform 0.15s ease, background 0.15s ease;
}
.seo-add-btn:hover {
  transform: translateY(-1px);
  background: #292820;
}
.seo-add-btn.is-added {
  background: #f5c443;
  color: #111216;
}
.seo-guide-box {
  background: #ffffff;
  border: 1px solid rgba(41, 40, 32, 0.1);
  border-radius: 26px;
  padding: clamp(24px, 4vw, 40px);
  margin-top: 46px;
}
.seo-guide-box h2 {
  font-family: "Sora", "Inter", sans-serif;
  font-size: clamp(22px, 2.8vw, 30px);
  margin: 0 0 14px;
}
.seo-guide-box p {
  font-size: 16px;
  line-height: 1.65;
  color: #46433b;
  margin: 0 0 14px;
}
.seo-guide-box p:last-child {
  margin-bottom: 0;
}
.seo-areas-pill-row {
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  margin-top: 18px;
}
.seo-area-pill {
  font-size: 12px;
  font-weight: 600;
  background: #faf6ee;
  border: 1px solid rgba(41, 40, 32, 0.12);
  border-radius: 999px;
  padding: 6px 12px;
  color: #292820;
}
.seo-faq-list {
  display: grid;
  gap: 12px;
}
.seo-faq-item {
  background: #ffffff;
  border: 1px solid rgba(41, 40, 32, 0.1);
  border-radius: 18px;
  padding: 18px 22px;
}
.seo-faq-item summary {
  font-weight: 700;
  font-size: 16px;
  cursor: pointer;
  color: #111216;
  list-style: none;
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 14px;
}
.seo-faq-item summary::-webkit-details-marker {
  display: none;
}
.seo-faq-item summary::after {
  content: "+";
  font-size: 20px;
  font-weight: 500;
  flex-shrink: 0;
}
.seo-faq-item[open] summary::after {
  content: "−";
}
.seo-faq-item p {
  margin: 12px 0 0;
  font-size: 15px;
  line-height: 1.6;
  color: #4b4942;
}
.seo-related-grid {
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
}
.seo-related-chip {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  padding: 11px 18px;
  border-radius: 999px;
  background: #ffffff;
  border: 1px solid rgba(41, 40, 32, 0.14);
  font-size: 14px;
  font-weight: 600;
  color: #111216;
  text-decoration: none;
}
.seo-related-chip:hover {
  background: #111216;
  color: #ffffff;
}
.seo-directory-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(min(100%, 280px), 1fr));
  gap: 18px;
}
.seo-directory-card {
  background: #ffffff;
  border: 1px solid rgba(41, 40, 32, 0.1);
  border-radius: 22px;
  padding: 22px;
  text-decoration: none;
  color: inherit;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 10px;
  transition: transform 0.16s ease, box-shadow 0.16s ease;
}
.seo-directory-card:hover {
  transform: translateY(-2px);
  box-shadow: 0 14px 28px rgba(41, 40, 32, 0.08);
}
.seo-directory-card h3 {
  margin: 0;
  font-family: "Sora", "Inter", sans-serif;
  font-size: 19px;
  color: #111216;
}
.seo-directory-card p {
  margin: 0;
  font-size: 14px;
  line-height: 1.5;
  color: #555249;
}
.seo-directory-card span {
  font-size: 13px;
  font-weight: 700;
  color: #9b6a00;
}
@media (max-width: 768px) {
  .seo-main {
    padding: 22px 14px 96px;
  }
}
@media (max-width: 400px) {
  .seo-main {
    padding: 16px 10px 96px;
  }
  .seo-hero,
  .seo-guide-box,
  .seo-item-card,
  .seo-faq-item {
    padding: 18px 14px;
    border-radius: 18px;
  }
  .seo-cta-row .btn,
  .seo-phone-pill {
    width: 100%;
    justify-content: center;
    text-align: center;
  }
}
`;
  const cssPath = path.join(ROOT, "styles.css");
  let current = fs.readFileSync(cssPath, "utf8");
  const idx = current.indexOf(marker);
  if (idx !== -1) {
    current = current.slice(0, idx).trimEnd() + "\n";
  }
  const finalCss = current + "\n" + seoCss.trim() + "\n";
  fs.writeFileSync(cssPath, finalCss, "utf8");
  fs.writeFileSync(path.join(PUBLIC_DIR, "styles.css"), finalCss, "utf8");
}

const US_ELIGIBLE_REGION = { "@type": "Country", name: "US" };

function usAreaServedList() {
  return [
    { "@type": "City", name: "Boston", address: { "@type": "PostalAddress", addressLocality: "Boston", addressRegion: "MA", addressCountry: "US" } },
    { "@type": "City", name: "Cambridge", address: { "@type": "PostalAddress", addressLocality: "Cambridge", addressRegion: "MA", addressCountry: "US" } },
    { "@type": "City", name: "Somerville", address: { "@type": "PostalAddress", addressLocality: "Somerville", addressRegion: "MA", addressCountry: "US" } },
    { "@type": "City", name: "Brookline", address: { "@type": "PostalAddress", addressLocality: "Brookline", addressRegion: "MA", addressCountry: "US" } },
    { "@type": "City", name: "Newton", address: { "@type": "PostalAddress", addressLocality: "Newton", addressRegion: "MA", addressCountry: "US" } },
    { "@type": "City", name: "Waltham", address: { "@type": "PostalAddress", addressLocality: "Waltham", addressRegion: "MA", addressCountry: "US" } },
    { "@type": "City", name: "Quincy", address: { "@type": "PostalAddress", addressLocality: "Quincy", addressRegion: "MA", addressCountry: "US" } },
    { "@type": "City", name: "Worcester", address: { "@type": "PostalAddress", addressLocality: "Worcester", addressRegion: "MA", addressCountry: "US" } },
    { "@type": "City", name: "Providence", address: { "@type": "PostalAddress", addressLocality: "Providence", addressRegion: "RI", addressCountry: "US" } },
    { "@type": "City", name: "Newport", address: { "@type": "PostalAddress", addressLocality: "Newport", addressRegion: "RI", addressCountry: "US" } },
    { "@type": "State", name: "Massachusetts", address: { "@type": "PostalAddress", addressRegion: "MA", addressCountry: "US" } },
    { "@type": "State", name: "Rhode Island", address: { "@type": "PostalAddress", addressRegion: "RI", addressCountry: "US" } },
    { "@type": "State", name: "New Hampshire", address: { "@type": "PostalAddress", addressRegion: "NH", addressCountry: "US" } },
    { "@type": "Country", name: "US" },
  ];
}

function organizationSchemaNode() {
  return {
    "@type": ["LocalBusiness", "Organization"],
    "@id": `${DOMAIN}/#organization`,
    name: "Beantown Audio Rentals",
    alternateName: ["Beantown Audio Visual", "Boston Audio Rentals"],
    description:
      "Boston & Massachusetts audio-visual equipment rental & sound system services in MA: audio equipment rentals, PA system rentals, powered speakers, DJ equipment, wireless & push-to-talk delegate microphones, corporate event AV, HD laser projectors, LED video walls, lighting, cold sparklers, dry ice machines, silent disco & photo booths.",
    url: `${DOMAIN}/`,
    logo: {
      "@type": "ImageObject",
      url: `${DOMAIN}/favicon-512x512.png`,
      width: 512,
      height: 512,
    },
    image: OG_IMAGE,
    telephone: "+1-978-601-5473",
    email: "info@beantownaudiorentals.com",
    priceRange: "$$",
    currenciesAccepted: "USD",
    paymentAccepted: "Cash, Credit Card, Debit Card, ACH Bank Transfer, Corporate Check",
    address: {
      "@type": "PostalAddress",
      addressLocality: "Boston",
      addressRegion: "MA",
      postalCode: "02108",
      addressCountry: "US",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: 42.3601,
      longitude: -71.0589,
    },
    areaServed: usAreaServedList(),
    knowsAbout: [
      "Audio-Visual Equipment Rental",
      "Audio Visual Equipment Rental Service",
      "Rent AV Equipment Near Me",
      "AV Companies Near Me",
      "Boston Audio Rentals",
      "Audio Equipment Rentals",
      "Audio Equipment Rental",
      "Audio System Rental",
      "PA System Rentals",
      "Sound Equipment Rental",
      "Rent Sound Equipment for Wedding",
      "Event Equipment Rentals Boston, MA",
      "Sound Equipment in MA",
      "Sound System Services in MA",
      "Corporate Event AV Production",
      "Delegate & Push-to-Talk Microphone Rental",
      "Speaker & PA System Rental",
      "DJ Equipment Rental",
      "LED Screen Rental Boston",
      "LED Video Wall Rental",
      "Cold Spark Machine Rental",
      "Dry Ice Machine Rental",
      "Inflatable Outdoor Movie Screen Rental",
      "Hybrid Live Streaming Support",
    ],
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: [
          "Monday",
          "Tuesday",
          "Wednesday",
          "Thursday",
          "Friday",
          "Saturday",
          "Sunday",
        ],
        opens: "08:00",
        closes: "20:00",
      },
    ],
    hasMap: "https://www.google.com/maps/place/?q=place_id:ChIJXw44D_Tanw4RbnwolfVca-A",
    sameAs: [
      "https://www.google.com/maps/place/?q=place_id:ChIJXw44D_Tanw4RbnwolfVca-A",
      "https://www.instagram.com/beantownaudiorentals/",
    ],
  };
}

function websiteSchemaNode() {
  return {
    "@type": "WebSite",
    "@id": `${DOMAIN}/#website`,
    name: "Beantown Audio Rentals",
    url: `${DOMAIN}/`,
    inLanguage: "en-US",
    publisher: { "@id": `${DOMAIN}/#organization` },
  };
}

function commonHeadTags({ title, description, canonicalUrl, jsonLdObj, ogImage, ogImageAlt, preloadImage }) {
  const resolvedOgImage = ogImage || OG_IMAGE;
  const resolvedOgImageAlt =
    ogImageAlt || "Beantown Audio Rentals Boston event audio, LED video walls, and production gear";
  const preloadTag = preloadImage
    ? `\n    <link rel="preload" as="image" href="${escapeHtml(preloadImage)}" fetchpriority="high" />`
    : "";
  return `    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0, viewport-fit=cover" />
    <title>${escapeHtml(title)}</title>
    <meta name="description" content="${escapeHtml(description)}" />
    <meta name="robots" content="index, follow, max-image-preview:large" />
    <meta name="google-site-verification" content="mNQFNo1Zx3hTSlkyXoKHWQBBHWDKJ_Ns4Z5Bcfgvmzo" />
    <meta name="geo.region" content="US-MA" />
    <meta name="geo.placename" content="Boston, Massachusetts" />
    <meta name="geo.position" content="42.3601;-71.0589" />
    <meta name="ICBM" content="42.3601, -71.0589" />
    <link rel="canonical" href="${escapeHtml(canonicalUrl)}" />
    <link rel="alternate" hreflang="en-US" href="${escapeHtml(canonicalUrl)}" />
    <meta property="og:type" content="website" />
    <meta property="og:locale" content="en_US" />
    <meta property="og:site_name" content="Beantown Audio Rentals" />
    <meta property="og:url" content="${escapeHtml(canonicalUrl)}" />
    <meta property="og:title" content="${escapeHtml(title)}" />
    <meta property="og:description" content="${escapeHtml(description)}" />
    <meta property="og:image" content="${escapeHtml(resolvedOgImage)}" />
    <meta property="og:image:alt" content="${escapeHtml(resolvedOgImageAlt)}" />
    <meta name="twitter:card" content="summary_large_image" />
    <meta name="twitter:title" content="${escapeHtml(title)}" />
    <meta name="twitter:description" content="${escapeHtml(description)}" />
    <meta name="twitter:image" content="${escapeHtml(resolvedOgImage)}" />
    <link rel="icon" href="/favicon.ico" sizes="48x48" />
    <link rel="icon" type="image/png" sizes="48x48" href="/favicon-48x48.png" />
    <link rel="icon" type="image/png" sizes="96x96" href="/favicon-96x96.png" />
    <link rel="icon" type="image/png" sizes="192x192" href="/favicon-192x192.png" />
    <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
    <link rel="manifest" href="/site.webmanifest" />${preloadTag}
    <script type="application/ld+json">
${JSON.stringify(jsonLdObj, null, 2)}
    </script>
    <link rel="preconnect" href="https://fonts.googleapis.com" />
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
    <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&family=Sora:wght@500;600;700;800&display=swap" rel="stylesheet" />
    <link rel="stylesheet" href="/styles.css?v=${CSS_VERSION}" />`;
}

function commonHeader({ active }) {
  return `      <header class="topbar">
        <div class="nav-wrap">
          <a class="brand" href="/" aria-label="Beantown Audio Rentals home">
            <img class="brand-logo" src="/assets/beantown/beantown-logo.png" alt="Beantown Audio Rentals" width="1161" height="558" />
          </a>

          <nav class="desktop-nav" aria-label="Primary navigation">
            <a href="/#rentals">Rentals</a>
            <a href="/#bundles">Event Bundles</a>
            <a href="/about"${active === "about" ? ' class="active" aria-current="page"' : ""}>About Us</a>
            <a href="/services"${active === "services" ? ' class="active" aria-current="page"' : ""}>Services</a>
          </nav>

          <div class="nav-actions">
            <a class="setup-link" id="setupLink" href="/#quote" aria-label="My setup">
              <svg class="setup-icon" viewBox="0 0 24 24" aria-hidden="true"><path d="M5 8h14l1 13H4L5 8Zm4 0a3 3 0 0 1 6 0" /></svg>
              <span class="setup-caption">My setup</span><b id="setupCount">0</b>
            </a>
            <a class="btn btn-dark btn-small" href="/#quote">Get a Quote <span>↗</span></a>
          </div>
        </div>
      </header>`;
}

function footerSeoStripHtml() {
  const links = [
    ...SERVICE_PAGES.map((p) => `<a href="${p.urlPath}">${escapeHtml(p.navLabel)}</a>`),
    `<a href="/services">All Services</a>`,
    `<a href="/about">About Beantown</a>`,
    `<a href="/contact">Contact &amp; Quote</a>`,
  ].join("");
  return `        <div class="footer-seo-strip">
          <span class="footer-seo-label">Boston &amp; New England Rental Guides</span>
          <div class="footer-seo-links">${links}</div>
        </div>`;
}

function commonFooter() {
  return `      <footer class="footer">
        <div class="footer-grid">
          <div>
            <div class="brand footer-brand">
              <img class="brand-logo" src="/assets/beantown/beantown-logo-white.png" alt="Beantown Audio Rentals" width="1161" height="558" />
            </div>
            <p class="muted">
              Premium event technology, delivered without the stress.
            </p>
          </div>
          <div>
            <h4>Explore</h4>
            <a href="/#rentals">Rentals</a><a href="/#bundles">Bundles</a><a href="/about">About Us</a>
          </div>
          <div>
            <h4>Services</h4>
            <a href="/services">All AV Services</a><a href="/services/speaker-rentals">Speaker Rentals</a><a href="/services/dj-equipment-rentals">DJ Equipment</a><a href="/services/projector-rentals">Projector Rentals</a>
          </div>
          <div>
            <h4>Contact</h4>
            <a href="/contact">Contact &amp; Free Quote</a><a href="mailto:info@beantownaudiorentals.com">info@beantownaudiorentals.com</a><a href="tel:+19786015473">(978) 601-5473</a>
          </div>
        </div>
${footerSeoStripHtml()}
        <div class="footer-bottom">
          <span>© 2026 Beantown Audio Rentals · Boston, Massachusetts</span><span>Rental selections and final pricing are confirmed with your quote. · <a href="/#admin" class="footer-admin-link">Admin CMS</a></span>
        </div>
      </footer>`;
}

function mobileBottomNavHtml(active) {
  return `    <nav class="mobile-bottom-nav" id="mobileBottomNav" aria-label="Mobile navigation">
      <a href="/" class="mobile-bottom-link">
        <span class="mobile-bottom-icon"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="m3 10 9-7 9 7v10a1 1 0 0 1-1 1h-5v-7H9v7H4a1 1 0 0 1-1-1Z"/></svg></span>
        <span>Home</span>
      </a>
      <a href="/#rentals" class="mobile-bottom-link">
        <span class="mobile-bottom-icon"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><rect x="5" y="2" width="14" height="20" rx="2"/><circle cx="12" cy="7" r="2"/><circle cx="12" cy="15" r="4"/><circle cx="12" cy="15" r="1" fill="currentColor" stroke="none"/></svg></span>
        <span>Rentals</span>
      </a>
      <a href="/#bundles" class="mobile-bottom-link">
        <span class="mobile-bottom-icon"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><rect x="3" y="5" width="18" height="17" rx="3"/><path d="M7 2v6m10-6v6M3 10h18m-9 2 1.4 2.8 3.1.5-2.2 2.2.5 3-2.8-1.4-2.8 1.4.5-3-2.2-2.2 3.1-.5Z"/></svg></span>
        <span>Bundles</span>
      </a>
      <a href="/about" class="mobile-bottom-link${active === "about" ? " active" : ""}">
        <span class="mobile-bottom-icon"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><circle cx="9" cy="7" r="4"/><path d="M2 20v-2a7 7 0 0 1 14 0v2a15 15 0 0 1-14 0Zm15-8a5 5 0 0 1 5 5v2a11 11 0 0 1-3 .7"/><path d="M17 3a4 4 0 0 1 0 8"/></svg></span>
        <span>About</span>
      </a>
      <a href="/services" class="mobile-bottom-link${active === "services" ? " active" : ""}">
        <span class="mobile-bottom-icon"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M3 13v-2a9 9 0 0 1 18 0v2m0 4v1a4 4 0 0 1-4 4h-2"/><rect x="1" y="11" width="5" height="7" rx="2"/><rect x="18" y="11" width="5" height="7" rx="2"/><rect x="10" y="20" width="5" height="3" rx="1.5"/></svg></span>
        <span>Services</span>
      </a>
    </nav>`;
}

const CART_SYNC_SCRIPT = `    <div class="toast" id="toast" role="status" aria-live="polite"></div>
    <script>
      (function () {
        var SESSION_KEY = "beantown_guest_session_id";
        var CART_PREFIX = "beantown_guest_cart_";
        var SUPABASE_URL = "https://kaalrpvxvvjnvqjqkevt.supabase.co";
        var SUPABASE_KEY = "sb_publishable_6yqy5UBgafUlbBt3-Is9SA_ydvzQQnC";
        function getSessionId() {
          try {
            var id = sessionStorage.getItem(SESSION_KEY);
            if (!id) {
              id = (crypto && crypto.randomUUID) ? crypto.randomUUID() : String(Date.now());
              sessionStorage.setItem(SESSION_KEY, id);
            }
            return id;
          } catch (e) {
            return "guest";
          }
        }
        function readCart() {
          try {
            var raw = sessionStorage.getItem(CART_PREFIX + getSessionId());
            return raw ? JSON.parse(raw) : {};
          } catch (e) {
            return {};
          }
        }
        function writeCart(cart) {
          var sid = getSessionId();
          try {
            sessionStorage.setItem(CART_PREFIX + sid, JSON.stringify(cart));
          } catch (e) {}
          try {
            fetch(SUPABASE_URL + "/rest/v1/guest_carts?on_conflict=session_id", {
              method: "POST",
              headers: {
                apikey: SUPABASE_KEY,
                "Content-Type": "application/json",
                Prefer: "resolution=merge-duplicates,return=minimal",
                "x-session-id": sid
              },
              body: JSON.stringify({ session_id: sid, items: cart, updated_at: new Date().toISOString() })
            }).catch(function () {});
          } catch (e) {}
        }
        function syncBadges() {
          var cart = readCart();
          var total = Object.values(cart).reduce(function (s, n) { return s + (Number(n) || 0); }, 0);
          var countEl = document.getElementById("setupCount");
          if (countEl) countEl.textContent = String(total);
          document.querySelectorAll("[data-add-id]").forEach(function (btn) {
            var q = cart[btn.getAttribute("data-add-id")] || 0;
            btn.classList.toggle("is-added", q > 0);
            btn.textContent = q > 0 ? "In Setup (" + q + ") +" : "Add to Setup +";
          });
        }
        function showToast(msg) {
          var t = document.getElementById("toast");
          if (!t) return;
          t.textContent = msg;
          t.classList.add("show");
          clearTimeout(window.__seoToastTimer);
          window.__seoToastTimer = setTimeout(function () { t.classList.remove("show"); }, 2600);
        }
        document.addEventListener("click", function (e) {
          var btn = e.target.closest("[data-add-id]");
          if (!btn) return;
          var id = btn.getAttribute("data-add-id");
          var name = btn.getAttribute("data-add-name") || "Equipment";
          var cart = readCart();
          cart[id] = (cart[id] || 0) + 1;
          writeCart(cart);
          syncBadges();
          showToast(name + " added — click My setup or Get a Quote to finalize");
        });
        syncBadges();
      })();
    </script>`;

function renderServicePage(spec) {
  const items = getItemsForPage(spec);
  const numericPrices = items.map((i) => i.price).filter((n) => typeof n === "number" && n > 0);
  const canonicalUrl = `${DOMAIN}${spec.urlPath}`;
  const catEncoded = new URLSearchParams({ cat: spec.hashCategory }).toString();
  const interactiveHref = `/#${"rentals"}?${catEncoded}`;
  const bySlug = new Map(SERVICE_PAGES.map((p) => [p.slug, p]));

  const schemaGraph = {
    "@context": "https://schema.org",
    "@graph": [
      organizationSchemaNode(),
      websiteSchemaNode(),
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Home", item: `${DOMAIN}/` },
          { "@type": "ListItem", position: 2, name: "Services", item: `${DOMAIN}/services` },
          { "@type": "ListItem", position: 3, name: spec.navLabel, item: canonicalUrl },
        ],
      },
      {
        "@type": "Service",
        "@id": `${canonicalUrl}#service`,
        name: spec.h1,
        ...(Array.isArray(spec.altNames) && spec.altNames.length ? { alternateName: spec.altNames } : {}),
        description: spec.description,
        url: canonicalUrl,
        image: items[0]?.image ? `${DOMAIN}/${items[0].image}` : OG_IMAGE,
        serviceType: spec.categoryLabel,
        provider: { "@id": `${DOMAIN}/#organization` },
        ...(numericPrices.length
          ? {
              offers: {
                "@type": "AggregateOffer",
                priceCurrency: "USD",
                lowPrice: String(Math.min(...numericPrices)),
                highPrice: String(Math.max(...numericPrices)),
                offerCount: String(numericPrices.length),
                eligibleRegion: US_ELIGIBLE_REGION,
              },
            }
          : {}),
        areaServed: usAreaServedList(),
        hasOfferCatalog: {
          "@type": "OfferCatalog",
          name: spec.navLabel,
          itemListElement: items.map((item) => ({
            "@type": "Offer",
            eligibleRegion: US_ELIGIBLE_REGION,
            itemOffered: {
              "@type": "Product",
              sku: item.id,
              name: item.name,
              brand: { "@type": "Brand", name: "Beantown Audio Rentals" },
              image: `${DOMAIN}/${item.image}`,
              description: item.desc.replace(/\n/g, " "),
              offers:
                typeof item.price === "number" && item.price > 0
                  ? {
                      "@type": "Offer",
                      url: canonicalUrl,
                      priceCurrency: "USD",
                      price: String(item.price),
                      priceValidUntil: "2027-12-31",
                      availability: "https://schema.org/InStock",
                      itemCondition: "https://schema.org/NewCondition",
                      eligibleRegion: US_ELIGIBLE_REGION,
                      seller: { "@id": `${DOMAIN}/#organization` },
                      shippingDetails: {
                        "@type": "OfferShippingDetails",
                        shippingDestination: {
                          "@type": "DefinedRegion",
                          addressCountry: "US",
                          addressRegion: ["MA", "RI", "NH"],
                        },
                        deliveryTime: {
                          "@type": "ShippingDeliveryTime",
                          handlingTime: {
                            "@type": "QuantitativeValue",
                            minValue: 0,
                            maxValue: 1,
                            unitCode: "DAY",
                          },
                          transitTime: {
                            "@type": "QuantitativeValue",
                            minValue: 0,
                            maxValue: 1,
                            unitCode: "DAY",
                          },
                        },
                      },
                      hasMerchantReturnPolicy: {
                        "@type": "MerchantReturnPolicy",
                        applicableCountry: "US",
                        returnPolicyCategory: "https://schema.org/MerchantReturnNotPermitted",
                      },
                    }
                  : undefined,
            },
          })),
        },
      },
      {
        "@type": "FAQPage",
        mainEntity: spec.faqs.map((f) => ({
          "@type": "Question",
          name: f.q,
          acceptedAnswer: {
            "@type": "Answer",
            text: f.a,
          },
        })),
      },
    ],
  };

  const itemsHtml = items
    .map((item, idx) => {
      const bullets = item.desc
        .split("\n")
        .map((line) => line.replace(/^•\s*/, "").trim())
        .filter(Boolean)
        .slice(0, 4);
      const imgSrc = item.image ? `/${item.image}` : "/assets/beantown/event-production.jpg";
      const imgLoadingAttrs =
        idx === 0
          ? 'width="640" height="480" fetchpriority="high" decoding="async"'
          : idx < 3
            ? 'width="640" height="480" decoding="async"'
            : 'width="640" height="480" loading="lazy" decoding="async"';
      return `        <article class="seo-item-card">
          <div>
            <div class="seo-item-thumb">
              <img src="${escapeHtml(imgSrc)}" alt="${escapeHtml(item.name)} rental in Boston" ${imgLoadingAttrs} />
              ${item.tag ? `<span class="seo-item-tag">${escapeHtml(item.tag)}</span>` : ""}
            </div>
            <h3>${escapeHtml(item.name)}</h3>
            <ul class="seo-item-specs">
              ${bullets.map((b) => `<li>• ${escapeHtml(b)}</li>`).join("\n              ")}
            </ul>
          </div>
          <div class="seo-item-foot">
            <span class="seo-item-price">${escapeHtml(formatPrice(item))}</span>
            <button type="button" class="seo-add-btn" data-add-id="${escapeHtml(item.id)}" data-add-name="${escapeHtml(item.name)}">Add to Setup +</button>
          </div>
        </article>`;
    })
    .join("\n");

  const relatedHtml = (spec.related || [])
    .map((s) => bySlug.get(s))
    .filter(Boolean)
    .map((p) => `<a class="seo-related-chip" href="${p.urlPath}">${escapeHtml(p.navLabel)} →</a>`)
    .join("\n          ");

  const html = `<!doctype html>
<html lang="en-US">
  <head>
${commonHeadTags({
  title: spec.title,
  description: spec.description,
  canonicalUrl,
  jsonLdObj: schemaGraph,
  ogImage: items[0]?.image ? `${DOMAIN}/${items[0].image}` : OG_IMAGE,
  ogImageAlt: items[0]?.name
    ? `${items[0].name} rental in Boston — Beantown Audio Rentals`
    : undefined,
  preloadImage: items[0]?.image ? `/${items[0].image}` : undefined,
})}
  </head>
  <body class="seo-static-page">
    <div class="site-shell">
${commonHeader({ active: "services" })}

      <main class="seo-main">
        <nav class="seo-breadcrumbs" aria-label="Breadcrumb">
          <a href="/">Home</a>
          <span aria-hidden="true">/</span>
          <a href="/services">Services</a>
          <span aria-hidden="true">/</span>
          <span>${escapeHtml(spec.navLabel)}</span>
        </nav>

        <section class="seo-hero">
          <span class="seo-hero-eyebrow">BOSTON &amp; NEW ENGLAND AV · ${escapeHtml(spec.categoryLabel)}</span>
          <h1>${escapeHtml(spec.h1)}</h1>
          <p class="seo-hero-lead">${escapeHtml(spec.lead)}</p>
          <ul class="seo-hero-bullets">
            ${spec.heroBullets.map((b) => `<li>${escapeHtml(b)}</li>`).join("\n            ")}
          </ul>
          <div class="seo-cta-row">
            <a class="btn seo-btn-gold" href="${escapeHtml(interactiveHref)}">Open in Interactive Catalog <span>→</span></a>
            <a class="btn btn-dark" href="/contact">Request Custom Quote <span>↗</span></a>
            <a class="seo-phone-pill" href="tel:+19786015473">Call or Text (978) 601-5473</a>
          </div>
        </section>

        <section aria-labelledby="catalogHeading">
          <div class="seo-section-head">
            <div>
              <span class="eyebrow">AVAILABLE RENTAL GEAR</span>
              <h2 id="catalogHeading">${escapeHtml(spec.navLabel)} Inventory (${items.length})</h2>
            </div>
            <a class="btn btn-light btn-small" href="/#quote">Go to Quote Builder →</a>
          </div>
          <div class="seo-catalog-grid">
${itemsHtml}
          </div>
        </section>

        <section class="seo-guide-box" aria-labelledby="guideHeading">
          <h2 id="guideHeading">${escapeHtml(spec.guideHeading)}</h2>
          ${(Array.isArray(spec.guideHtmlParagraphs) ? spec.guideHtmlParagraphs.map((p) => `<p>${p}</p>`) : (spec.guideParagraphs || []).map((p) => `<p>${escapeHtml(p)}</p>`)).join("\n          ")}
          <div class="seo-areas-pill-row" aria-label="Boston and New England service areas">
            <span class="seo-area-pill">Boston Back Bay &amp; Seaport</span>
            <span class="seo-area-pill">Cambridge &amp; Somerville</span>
            <span class="seo-area-pill">Brookline, Newton &amp; Waltham</span>
            <span class="seo-area-pill">Worcester &amp; Cape Cod</span>
            <span class="seo-area-pill">Providence &amp; Newport, RI</span>
            <span class="seo-area-pill">Southern New Hampshire</span>
          </div>
        </section>

        <section aria-labelledby="faqHeading">
          <div class="seo-section-head">
            <div>
              <span class="eyebrow">COMMON QUESTIONS</span>
              <h2 id="faqHeading">${escapeHtml(spec.navLabel)} FAQs</h2>
            </div>
          </div>
          <div class="seo-faq-list">
            ${spec.faqs
              .map(
                (f, i) => `<details class="seo-faq-item"${i === 0 ? " open" : ""}>
              <summary>${escapeHtml(f.q)}</summary>
              <p>${escapeHtml(f.a)}</p>
            </details>`
              )
              .join("\n            ")}
          </div>
        </section>

        <section aria-labelledby="relatedHeading">
          <div class="seo-section-head">
            <div>
              <span class="eyebrow">PAIR WITH OTHER RENTALS</span>
              <h2 id="relatedHeading">Related Boston AV Rentals</h2>
            </div>
          </div>
          <div class="seo-related-grid">
          ${relatedHtml}
          </div>
        </section>
      </main>

${commonFooter()}
    </div>
${mobileBottomNavHtml("services")}
${CART_SYNC_SCRIPT}
  </body>
</html>
`;
  const relOut = spec.outFile || path.join("services", `${spec.slug}.html`);
  fs.mkdirSync(path.join(PUBLIC_DIR, path.dirname(relOut)), { recursive: true });
  fs.mkdirSync(path.join(ROOT, path.dirname(relOut)), { recursive: true });
  fs.writeFileSync(path.join(PUBLIC_DIR, relOut), html, "utf8");
  fs.writeFileSync(path.join(ROOT, relOut), html, "utf8");
}

function renderServicesDirectory() {
  const canonicalUrl = `${DOMAIN}/services`;
  const servicesFaqs = [
    {
      q: "Where can I rent AV equipment near me in Boston and Massachusetts?",
      a: "Beantown Audio Rentals provides same-week and scheduled audio-visual equipment rental across Greater Boston, Cambridge, Somerville, Waltham, Worcester, Cape Cod, Massachusetts, and Rhode Island. Choose self-pickup in Boston or turnkey delivery, setup, soundcheck, and teardown.",
    },
    {
      q: "What is included in your audio-visual equipment rental service?",
      a: "Our audio-visual equipment rental catalog covers powered PA speakers ($65+), Small–Large PA system rentals ($199–$880+), 18-inch subwoofers, Shure QLX-D wireless & push-to-talk delegate microphones ($20–$65), Behringer X32 & Allen & Heath SQ-7 digital mixers, Pioneer CDJ-3000 DJ gear, HD laser projectors, 65″–75″ 4K TVs, 2.67mm indoor LED video walls, mobile LED trailers, 12ft–40ft inflatable outdoor movie screens, wireless uplighting, cold sparklers, dry ice fog machines, silent disco headphones, and photo booths.",
    },
    {
      q: "How much do audio equipment rentals and PA system rentals cost in Boston?",
      a: "Individual powered speaker rentals start at $65/day, wired microphones start at $20, push-to-talk delegate mics are $35, Shure QLX-D wireless mics are $65, and complete PA system rentals with speakers, stands, mixer, and microphone start at $199 (Small Audio Package), $349 (Medium Audio Package), and $880 (Large Line Array Audio Package).",
    },
    {
      q: "Do you offer sound system services in MA with delivery, setup, and on-site technicians?",
      a: "Yes. Beyond standalone sound equipment rental, we provide complete sound system services in MA—including acoustic room planning, early load-in, taped cabling, wireless RF frequency coordination, digital mixing, soundcheck, and optional dedicated FOH audio engineers for the duration of your event.",
    },
    {
      q: "Can I rent sound equipment for a wedding, corporate conference, or outdoor movie night in one package?",
      a: "Yes. You can bundle wedding ceremony and reception sound systems with wireless mics, uplighting, cold sparklers, and dry ice cloud fog, or combine corporate conference room sound systems with delegate mics, laser projectors, LED video walls, and 4K hybrid live streaming in a single itemized quote.",
    },
  ];
  const schemaGraph = {
    "@context": "https://schema.org",
    "@graph": [
      organizationSchemaNode(),
      websiteSchemaNode(),
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Home", item: `${DOMAIN}/` },
          { "@type": "ListItem", position: 2, name: "Services", item: canonicalUrl },
        ],
      },
      {
        "@type": "CollectionPage",
        "@id": `${canonicalUrl}#collection`,
        name: "Boston Audio-Visual Equipment Rental & Event AV Services",
        url: canonicalUrl,
        inLanguage: "en-US",
        description: "Full directory of Boston audio-visual equipment rental, audio equipment rentals, PA system rentals, speaker rental, DJ gear, projectors, LED walls, lighting, cold sparklers, and photo booths.",
        isPartOf: { "@id": `${DOMAIN}/#website` },
        about: { "@id": `${DOMAIN}/#organization` },
        mainEntity: {
          "@type": "ItemList",
          name: "Boston & Massachusetts AV Rental Categories",
          numberOfItems: SERVICE_PAGES.length,
          itemListElement: SERVICE_PAGES.map((p, i) => ({
            "@type": "ListItem",
            position: i + 1,
            name: p.h1,
            url: `${DOMAIN}${p.urlPath}`,
          })),
        },
      },
      {
        "@type": "FAQPage",
        mainEntity: servicesFaqs.map((f) => ({
          "@type": "Question",
          name: f.q,
          acceptedAnswer: {
            "@type": "Answer",
            text: f.a,
          },
        })),
      },
    ],
  };

  const cards = SERVICE_PAGES.map(
    (p) => `          <a class="seo-directory-card" href="${p.urlPath}">
            <div>
              <h3>${escapeHtml(p.navLabel)}</h3>
              <p>${escapeHtml(p.description)}</p>
            </div>
            <span>Explore ${escapeHtml(p.navLabel)} →</span>
          </a>`
  ).join("\n");

  const html = `<!doctype html>
<html lang="en-US">
  <head>
${commonHeadTags({
  title: "AV Rental Boston | Audio Visual Equipment | Beantown",
  description:
    "Full-service AV rental in Boston, MA: corporate event AV, audio systems, speakers, delegate mics, DJ gear, 4K TVs, laser projectors, LED walls, uplighting & FX.",
  canonicalUrl,
  jsonLdObj: schemaGraph,
})}
  </head>
  <body class="seo-static-page">
    <div class="site-shell">
${commonHeader({ active: "services" })}

      <main class="seo-main">
        <nav class="seo-breadcrumbs" aria-label="Breadcrumb">
          <a href="/">Home</a>
          <span aria-hidden="true">/</span>
          <span>Services</span>
        </nav>

        <section class="seo-hero">
          <span class="seo-hero-eyebrow">BOSTON &amp; NEW ENGLAND EVENT PRODUCTION</span>
          <h1>AV Rental Boston &amp; Audio Visual Equipment Directory</h1>
          <p class="seo-hero-lead">Explore every commercial AV rental category we deliver, install, and support across Boston, Cambridge, Somerville, Massachusetts, and Rhode Island—from <a href="/services/corporate-events">corporate meetings AV support</a> and <a href="/microphone-rentals">delegate mics</a> to 40-foot outdoor cinema nights and 2.67mm LED stages.</p>
          <div class="seo-cta-row">
            <a class="btn seo-btn-gold" href="/#rentals">Browse Interactive Catalog <span>→</span></a>
            <a class="btn btn-dark" href="/contact">Request Custom Quote <span>↗</span></a>
            <a class="seo-phone-pill" href="tel:+19786015473">(978) 601-5473</a>
          </div>
        </section>

        <section aria-labelledby="allServicesHeading">
          <div class="seo-section-head">
            <div>
              <span class="eyebrow">BY EQUIPMENT CATEGORY</span>
              <h2 id="allServicesHeading">Browse All Boston AV Rental Guides</h2>
            </div>
          </div>
          <div class="seo-directory-grid">
${cards}
          </div>
        </section>

        <section class="seo-guide-box" aria-labelledby="avDirectoryGuideHeading">
          <h2 id="avDirectoryGuideHeading">Full-Service Audio-Visual Equipment Rental &amp; Sound System Services in Boston, MA &amp; RI</h2>
          <p>Looking to <strong>rent AV equipment near me</strong>, compare <strong>AV companies near me</strong>, or book a dependable <strong>audio-visual equipment rental</strong>, <strong>audio visual equipment rental service</strong>, or <strong>event equipment rentals in Boston, MA</strong>? Beantown Audio Rentals (your local <strong>Boston audio rentals</strong> partner) supplies bench-tested commercial <strong>audio equipment rentals</strong>, video displays, lighting, staging, and special effects hardware from a single itemized quote builder. Whether you need turnkey <strong>sound system services in MA</strong>, a complete <a href="/audio">PA system rental or audio system rental</a> ($199+), a standalone <a href="/services/speaker-rentals">speaker rental or sound equipment rental</a> ($65+), <a href="/microphone-rentals">Shure QLX-D wireless, Countryman &amp; push-to-talk delegate microphones</a> ($20–$65), or a <a href="/services/audio-mixers">Behringer X32 digital mixing console</a> ($150), every unit ships with stands, power drops, and redundant XLR/HDMI interconnects.</p>
          <p>Planning to <a href="/services/wedding-av-rentals">rent sound equipment for a wedding</a> or stage a major corporate summit? Combine <a href="/services/projector-rentals">5,000+ lumen HD laser projectors &amp; Fast-Fold screens</a>, <a href="/services/tv-rentals">65&Prime; &amp; 75&Prime; 4K rolling TV monitors</a>, <a href="/services/indoorledwall">2.67mm fine-pitch indoor LED video walls &amp; LED screen rental in Boston</a>, <a href="/services/ledtrailers">daylight-visible mobile LED trailers</a>, <a href="/services/outdoor-movies">12ft–40ft inflatable outdoor movie screens with projector &amp; speakers</a>, <a href="/services/event-lighting">cord-free battery uplighting</a>, <a href="/services/cold-sparklers">indoor-safe cold spark machine rental &amp; cold sparklers</a>, and <a href="/services/dry-ice-machine">Dancing on a Cloud dry ice machine rental</a>—backed by self-pickup or full delivery, setup, soundcheck, and on-site engineers across <a href="/services/corporate-events">Boston corporate meetings</a>, <a href="/services/wedding-av-rentals">New England weddings</a>, and <a href="/services/rhode-island-av-rentals">Rhode Island events</a>.</p>
        </section>

        <section aria-labelledby="servicesFaqHeading">
          <div class="seo-section-head">
            <div>
              <span class="eyebrow">FREQUENTLY ASKED QUESTIONS</span>
              <h2 id="servicesFaqHeading">Audio-Visual Equipment Rental &amp; Boston AV FAQs</h2>
            </div>
          </div>
          <div class="seo-faq-list">
            ${servicesFaqs
              .map(
                (f) => `<details class="seo-faq-item">
              <summary>${escapeHtml(f.q)}</summary>
              <p>${escapeHtml(f.a)}</p>
            </details>`
              )
              .join("\n            ")}
          </div>
        </section>
      </main>

${commonFooter()}
    </div>
${mobileBottomNavHtml("services")}
${CART_SYNC_SCRIPT}
  </body>
</html>
`;
  fs.writeFileSync(path.join(PUBLIC_DIR, "services.html"), html, "utf8");
  fs.writeFileSync(path.join(ROOT, "services.html"), html, "utf8");
}

function renderAboutPage() {
  const canonicalUrl = `${DOMAIN}/about`;
  const aboutFaqs = [
    {
      q: "What makes Beantown Audio Rentals different from national AV rental chains?",
      a: "Unlike national broker chains that ship untested gear or hide setup fees, Beantown Audio Rentals is a local Boston audio-visual equipment rental team with transparent published daily rates—from $65 powered speaker rentals and $199 PA system rentals to turnkey wedding sound equipment, corporate conference room sound systems in MA, and 2.67mm LED video walls.",
    },
    {
      q: "Where can I rent AV equipment near me with delivery across Massachusetts and Rhode Island?",
      a: "We dispatch daily from Boston across Cambridge, Somerville, Brookline, Newton, Waltham, Quincy, Worcester, Cape Cod, Providence & Newport RI, and Southern New Hampshire—offering both budget-friendly self-pickup and full delivery, setup, soundcheck, and on-site technician operation.",
    },
    {
      q: "Do you provide audio equipment rentals and sound system services in MA for both weddings and corporate events?",
      a: "Yes. Couples rent sound equipment for weddings ($199+ PA systems, Shure wireless ceremony mics, wireless uplighting, cold sparklers, and dry ice cloud fog), while corporate planners book our conference room sound systems in MA, push-to-talk delegate mics, laser projectors, LED walls, and 4K hybrid live streaming.",
    },
  ];
  const schemaGraph = {
    "@context": "https://schema.org",
    "@graph": [
      organizationSchemaNode(),
      websiteSchemaNode(),
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Home", item: `${DOMAIN}/` },
          { "@type": "ListItem", position: 2, name: "About Us", item: canonicalUrl },
        ],
      },
      {
        "@type": "AboutPage",
        name: "About Beantown Audio Rentals",
        url: canonicalUrl,
        mainEntity: { "@id": `${DOMAIN}/#organization` },
      },
      {
        "@type": "FAQPage",
        mainEntity: aboutFaqs.map((f) => ({
          "@type": "Question",
          name: f.q,
          acceptedAnswer: {
            "@type": "Answer",
            text: f.a,
          },
        })),
      },
    ],
  };

  const html = `<!doctype html>
<html lang="en-US">
  <head>
${commonHeadTags({
  title: "About Beantown Audio Rentals | Boston Event AV",
  description:
    "About Beantown Audio Rentals in Boston, MA: shop-tested PA audio systems, speakers, DJ gear, delegate mics, corporate meetings AV support, LED walls & event production.",
  canonicalUrl,
  jsonLdObj: schemaGraph,
})}
  </head>
  <body class="seo-static-page">
    <div class="site-shell">
${commonHeader({ active: "about" })}

      <main class="seo-main">
        <nav class="seo-breadcrumbs" aria-label="Breadcrumb">
          <a href="/">Home</a>
          <span aria-hidden="true">/</span>
          <span>About Us</span>
        </nav>

        <section class="seo-hero">
          <span class="seo-hero-eyebrow">BOSTON · NEW ENGLAND · EVENT AV</span>
          <h1>About Beantown Audio Rentals — Boston Event AV</h1>
          <p class="seo-hero-lead">At Beantown Audio Rentals, great events start with clean sound, bright visuals, simple pricing, and experienced local technicians who keep your load-in calm across Greater Boston, Massachusetts, Rhode Island, and New England.</p>
          <ul class="seo-hero-bullets">
            <li>Pre-tested Shure QLX-D wireless, QSC, JBL, Pioneer DJ, Chauvet &amp; NovaStar LED systems</li>
            <li>Same-week availability &amp; dependable setup windows for hotels, campuses &amp; private venues</li>
            <li>Clear written quotes for pickup, turnkey delivery/setup, or dedicated on-site techs</li>
          </ul>
          <div class="seo-cta-row">
            <a class="btn seo-btn-gold" href="/#rentals">Explore Equipment Catalog <span>→</span></a>
            <a class="btn btn-dark" href="/contact">Contact Our Team <span>↗</span></a>
          </div>
        </section>

        <section class="seo-guide-box">
          <h2>Our Story &amp; Event Production Philosophy</h2>
          <p>Beantown Audio Rentals was founded to replace confusing technical jargon and unreliable rental gear with tested, commercial-grade equipment and transparent support. Whether you are planning a corporate town hall in Boston's Seaport, a panel or commencement in Cambridge, a Back Bay ballroom wedding, a block party in Somerville, or an outdoor movie screening in Massachusetts or Rhode Island, we treat every show—big or small—with the same precision.</p>
          <p>“An event feels calm when someone has already met its worst day. At Beantown, we prepare for every variable so your event runs effortlessly.” — Calvin Reid, Founder</p>
          <p>Our full-service <a href="/services">audio-visual equipment rental</a> inventory covers complete <a href="/audio">audio equipment rentals, PA system rentals &amp; audio system rentals</a>, <a href="/services/speaker-rentals">powered speaker rentals &amp; sound equipment rental</a>, <a href="/services/subwoofer-rentals">18&Prime; subwoofers</a>, <a href="/microphone-rentals">Shure wireless, Countryman &amp; delegate push-to-talk microphones</a>, <a href="/services/wedding-av-rentals">renting sound equipment for a wedding</a>, <a href="/services/corporate-events">corporate meetings AV support &amp; conference room sound systems in MA</a>, <a href="/services/audio-mixers">Behringer X32 &amp; Allen &amp; Heath digital mixers</a>, <a href="/services/dj-equipment-rentals">Pioneer CDJ-3000s &amp; DJ equipment rentals in Boston</a>, <a href="/services/projector-rentals">HD laser projectors &amp; Fast-Fold screens</a>, <a href="/services/tv-rentals">65&Prime; &amp; 75&Prime; 4K TV displays</a>, <a href="/services/indoorledwall">indoor 2.67mm LED video walls</a>, <a href="/services/ledtrailers">outdoor LED trailers</a>, <a href="/services/outdoor-movies">inflatable movie screens with projector &amp; speakers</a>, <a href="/services/photo-booth">360 &amp; Magic Mirror photo booths</a>, <a href="/services/silent-disco">silent disco packs</a>, <a href="/services/event-lighting">wireless uplighting</a>, <a href="/services/cold-sparklers">indoor-safe cold sparklers</a>, <a href="/services/dry-ice-machine">dry ice cloud fog</a>, <a href="/services/live-streaming">multi-camera live streaming kits</a>, and <a href="/services/rhode-island-av-rentals">Rhode Island event AV rentals</a>.</p>
          <p>Whether you are looking to <strong>rent AV equipment near me</strong> for self-pickup or need complete <strong>sound system services in MA</strong> with white-glove delivery and FOH engineers, every microphone, powered speaker, projector, LED cabinet, and cable undergoes bench inspection between events so cables tape flat and shows run on time. Call or text our Boston desk daily at <a href="tel:+19786015473">(978) 601-5473</a> or email <a href="mailto:info@beantownaudiorentals.com">info@beantownaudiorentals.com</a>.</p>
          <div class="seo-areas-pill-row">
            <span class="seo-area-pill">Boston Proper &amp; Seaport</span>
            <span class="seo-area-pill">Cambridge &amp; Somerville</span>
            <span class="seo-area-pill">Brookline &amp; Newton</span>
            <span class="seo-area-pill">North &amp; South Shore MA</span>
            <span class="seo-area-pill">Worcester &amp; Cape Cod</span>
            <span class="seo-area-pill">Providence &amp; Newport, RI</span>
            <span class="seo-area-pill">Southern New Hampshire</span>
          </div>
        </section>

        <section aria-labelledby="aboutFaqHeading">
          <div class="seo-section-head">
            <div>
              <span class="eyebrow">COMMON QUESTIONS</span>
              <h2 id="aboutFaqHeading">About Our Boston Audio-Visual Equipment Rental Service</h2>
            </div>
          </div>
          <div class="seo-faq-list">
            ${aboutFaqs
              .map(
                (f) => `<details class="seo-faq-item">
              <summary>${escapeHtml(f.q)}</summary>
              <p>${escapeHtml(f.a)}</p>
            </details>`
              )
              .join("\n            ")}
          </div>
        </section>

        <section aria-labelledby="popularServicesHeading">
          <div class="seo-section-head">
            <div>
              <span class="eyebrow">OUR CORE RENTALS</span>
              <h2 id="popularServicesHeading">Popular Boston AV Services</h2>
            </div>
          </div>
          <div class="seo-related-grid">
            ${SERVICE_PAGES
              .map((p) => `<a class="seo-related-chip" href="${p.urlPath}">${escapeHtml(p.navLabel)} →</a>`)
              .join("\n            ")}
          </div>
        </section>
      </main>

${commonFooter()}
    </div>
${mobileBottomNavHtml("about")}
${CART_SYNC_SCRIPT}
  </body>
</html>
`;
  fs.writeFileSync(path.join(PUBLIC_DIR, "about.html"), html, "utf8");
  fs.writeFileSync(path.join(ROOT, "about.html"), html, "utf8");
}

function renderContactPage() {
  const canonicalUrl = `${DOMAIN}/contact`;
  const schemaGraph = {
    "@context": "https://schema.org",
    "@graph": [
      organizationSchemaNode(),
      websiteSchemaNode(),
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Home", item: `${DOMAIN}/` },
          { "@type": "ListItem", position: 2, name: "Contact", item: canonicalUrl },
        ],
      },
      {
        "@type": "ContactPage",
        name: "Contact & Request a Quote — Beantown Audio Rentals",
        url: canonicalUrl,
        mainEntity: { "@id": `${DOMAIN}/#organization` },
      },
    ],
  };

  const html = `<!doctype html>
<html lang="en-US">
  <head>
${commonHeadTags({
  title: "Contact & Free AV Quote | Beantown Audio Rentals Boston",
  description:
    "Contact Beantown Audio Rentals in Boston, MA at (978) 601-5473 or request a fast customized AV quote for speakers, projectors, DJ gear, LED walls, lighting & event rentals.",
  canonicalUrl,
  jsonLdObj: schemaGraph,
})}
  </head>
  <body class="seo-static-page">
    <div class="site-shell">
${commonHeader({ active: "contact" })}

      <main class="seo-main">
        <nav class="seo-breadcrumbs" aria-label="Breadcrumb">
          <a href="/">Home</a>
          <span aria-hidden="true">/</span>
          <span>Contact &amp; Quote</span>
        </nav>

        <section class="seo-hero">
          <span class="seo-hero-eyebrow">GET IN TOUCH · BOSTON PRODUCTION DESK</span>
          <h1>Contact Beantown Audio Rentals</h1>
          <p class="seo-hero-lead">Tell us your date, Boston or New England venue, guest count, and equipment ideas—or call our desk directly for immediate availability checks.</p>
          <div class="seo-cta-row">
            <a class="btn seo-btn-gold" href="/#quote">Open Itemized Quote Builder <span>→</span></a>
            <a class="seo-phone-pill" href="tel:+19786015473">(978) 601-5473</a>
            <a class="seo-phone-pill" href="mailto:info@beantownaudiorentals.com">info@beantownaudiorentals.com</a>
          </div>
        </section>

        <div class="get-quote-page" style="padding: 0; max-width: 960px;">
          <form id="contactStaticForm" class="get-quote-form" action="https://api.web3forms.com/submit" method="POST">
            <input type="hidden" name="access_key" value="${WEB3FORMS_KEY}" />
            <input type="hidden" name="subject" value="New Beantown AV Contact & Quote Request" />
            <input type="hidden" name="from_name" value="Beantown Audio Rentals Website Contact" />
            <section class="get-quote-section">
              <div class="get-quote-section-head">
                <span class="get-quote-number">01</span>
                <div><h2>Customer Information</h2><p>How can our Boston production desk reach you?</p></div>
              </div>
              <div class="get-quote-fields">
                <label class="get-quote-field"><span>Full name <b aria-hidden="true">*</b></span><input name="Full Name" type="text" autocomplete="name" maxlength="100" required placeholder="Your full name" /></label>
                <label class="get-quote-field"><span>Email address <b aria-hidden="true">*</b></span><input name="email" type="email" autocomplete="email" maxlength="254" required placeholder="you@example.com" /></label>
                <label class="get-quote-field"><span>Phone number <b aria-hidden="true">*</b></span><input name="Phone Number" type="tel" autocomplete="tel" maxlength="30" required placeholder="(978) 555-0100" /></label>
              </div>
            </section>
            <section class="get-quote-section">
              <div class="get-quote-section-head">
                <span class="get-quote-number">02</span>
                <div><h2>Event Details</h2><p>Share date, venue, and equipment needs.</p></div>
              </div>
              <div class="get-quote-fields">
                <label class="get-quote-field">Event type<select name="Event Type"><option value="">Select an event type</option><option>Wedding</option><option>Corporate</option><option>Concert</option><option>School / University</option><option>Private Party</option><option>Other</option></select></label>
                <label class="get-quote-field"><span>Event date <b aria-hidden="true">*</b></span><input name="Event Date" type="date" required /></label>
                <label class="get-quote-field">Venue / City<input name="Event Location / Venue" type="text" maxlength="200" placeholder="Boston, Cambridge, etc." /></label>
                <label class="get-quote-field">Estimated guests<input name="Number of Guests" type="number" min="1" max="100000" placeholder="e.g. 120" /></label>
                <label class="get-quote-field get-quote-wide">Equipment &amp; notes<textarea name="Equipment or Services Needed" rows="4" maxlength="2500" placeholder="Speakers, projector, DJ equipment, LED wall, lighting, delivery &amp; setup..."></textarea></label>
              </div>
            </section>
            <div class="get-quote-honeypot" aria-hidden="true"><label>Website<input name="botcheck" type="checkbox" tabindex="-1" autocomplete="off" /></label></div>
            <div class="get-quote-actions">
              <p>Open Mon–Sun 8:00 AM – 8:00 PM · Quick response from Boston desk</p>
              <button class="btn btn-dark" type="submit">Send Inquiry <span>→</span></button>
            </div>
            <p id="contactFormStatus" class="get-quote-status" role="status" aria-live="polite" hidden></p>
          </form>
        </div>

        <section class="seo-guide-box" aria-labelledby="contactDispatchHeading">
          <h2 id="contactDispatchHeading">Boston &amp; New England Dispatch, Self-Pickup &amp; Event Coverage</h2>
          <p>Our Boston production desk responds daily from 8:00 AM to 8:00 PM at <a href="tel:+19786015473">(978) 601-5473</a> and <a href="mailto:info@beantownaudiorentals.com">info@beantownaudiorentals.com</a>. Choose budget-friendly self-pickup for compact speaker and wireless microphone packages, white-glove delivery with setup and soundcheck across Massachusetts and Rhode Island, or full on-site technician support.</p>
          <p>Popular quote bundles: <a href="/services/speaker-rentals">Speaker &amp; Party Speaker Rentals</a>, <a href="/services/corporate-events">Corporate Event AV Support</a>, <a href="/microphone-rentals">Delegate &amp; Wireless Mics</a>, <a href="/services/dj-equipment-rentals">DJ Gear</a>, <a href="/services/outdoor-movies">Outdoor Movie Screens</a>, and <a href="/services/rhode-island-av-rentals">Rhode Island AV Delivery</a>.</p>
        </section>
      </main>

${commonFooter()}
    </div>
${mobileBottomNavHtml("contact")}
    <script>
      (function () {
        var form = document.getElementById("contactStaticForm");
        var status = document.getElementById("contactFormStatus");
        if (!form) return;
        form.addEventListener("submit", async function (e) {
          e.preventDefault();
          var btn = form.querySelector('button[type="submit"]');
          if (btn) btn.disabled = true;
          if (status) { status.hidden = false; status.textContent = "Sending inquiry..."; }
          try {
            var data = Object.fromEntries(new FormData(form).entries());
            if (data.email) data.replyto = data.email;
            var res = await fetch("https://api.web3forms.com/submit", {
              method: "POST",
              headers: { "Content-Type": "application/json", Accept: "application/json" },
              body: JSON.stringify(data)
            });
            var json = await res.json();
            if (res.ok && json.success) {
              form.reset();
              if (status) status.textContent = "Thank you! Your inquiry was sent to Beantown Audio Rentals.";
            } else {
              throw new Error(json.message || "Submission error");
            }
          } catch (err) {
            if (status) status.textContent = "Unable to submit online—please call (978) 601-5473 or email info@beantownaudiorentals.com.";
          } finally {
            if (btn) btn.disabled = false;
          }
        });
      })();
    </script>
${CART_SYNC_SCRIPT}
  </body>
</html>
`;
  fs.writeFileSync(path.join(PUBLIC_DIR, "contact.html"), html, "utf8");
  fs.writeFileSync(path.join(ROOT, "contact.html"), html, "utf8");
}

function renderHomepage() {
  const homeTitle = "Boston Audio Visual Rentals | Beantown Audio Rentals";
  const homeDesc =
    "Boston & RI audio visual & party speaker rentals from $65: sound systems, delegate mics, DJ gear, corporate AV, laser projectors, LED walls & dry ice fog.";
  const homeFaqs = [
    {
      category: "Rentals & Inventory",
      question: "What equipment is available in your Boston rental inventory?",
      answer:
        "Our Boston audio-visual equipment rental, audio equipment rentals, and sound equipment rental inventory includes Small ($199+), Medium ($349+), and Large ($880+) PA system rentals and audio system rental packages; powered speaker rental units ($65) and 18-inch QSC & JBL subwoofers ($75–$150); Shure QLX-D wireless handheld & lavalier microphones ($65), Countryman earset headsets ($50), and push-to-talk (PTT) conference delegate mics ($35); Behringer X32 ($150), X32 Compact ($110), Allen & Heath SQ-7 ($295), and QSC TouchMix audio mixers; Pioneer CDJ-3000 ($125), DJM-900NXS ($95), Technics 1200 turntables, and complete DJ packages ($299+); 5,000+ lumen HD laser projectors ($175), 120-inch Fast-Fold screens ($150), Samsung 65-inch ($250) and 75-inch ($350) 4K TVs, indoor 2.67mm LED video walls ($1,150+), and outdoor mobile LED trailers ($2,600+); 12ft–40ft inflatable outdoor movie screens with projector and speakers ($549–$1,899); 360 and Magic Mirror photo booths ($799–$1,699+); 50–300 silent disco headphone packs ($500–$2,500); Chauvet wireless uplighting ($150/6), indoor-safe cold sparkler machines ($350+), Chauvet Nimbus dry ice cloud fog machines ($295+), and 4K live-streaming kits ($621+).",
    },
    {
      category: "Delivery & Setup",
      question: "Do you handle delivery, setup, soundcheck, and pickup?",
      answer:
        "Yes, we provide full turnkey sound system services in MA and audio-visual equipment rental support throughout Greater Boston and all of New England—whether you want to rent sound equipment for a wedding, stage a corporate conference, or rent AV equipment near me. Our experienced technicians arrive well before your event begins, manage all load-in, run and tape clean cabling, tune the system for your room acoustics, and conduct a complete soundcheck and microphone walkthrough with you or your speaker. At the end of your event, we return for prompt, quiet teardown. For select compact equipment (such as small PA speakers or silent disco packs), convenient self-pickup and return is also available with straightforward setup guides and on-call telephone support.",
    },
    {
      category: "Pricing & Quotes",
      question: "How does pricing work, and are there any surprise fees?",
      answer:
        "Every listing in our catalog shows transparent daily or starting rates—including powered PA speakers from $65, Small Audio packages from $199, push-to-talk delegate mics at $35, Behringer X32 digital mixers at $150, cold sparkler packages from $350, dry ice fog machines from $295, outdoor movie screen packages ($549–$1,899), photo booths ($799–$1,699+), and silent disco packages ($500–$2,500). Build your exact setup in our interactive Quote Builder and select self-pickup, turnkey delivery and setup, or full on-site technician support to receive a clear, itemized written quote with zero hidden fees.",
    },
    {
      category: "On-Site Support",
      question: "Can we have an on-site technician or sound engineer manage our show?",
      answer:
        "Absolutely. In addition to delivery and setup, you can book dedicated Beantown AV technicians and FOH audio engineers to stay on-site for the duration of your event. We handle live mic mixing, volume adjustments, background music transitions, presentation slide advancing, video cueing, camera switching, and immediate troubleshooting so that you and your team can focus entirely on your guests.",
    },
    {
      category: "Venue & Power",
      question: "What power and venue accommodations do you need?",
      answer:
        "Most standard audio setups, 4K TVs, wireless uplights, and projectors operate reliably on standard 120V 15A or 20A wall circuits within 50 feet of the stage area. For high-draw production—like large-scale modular LED video walls, high-power sub arrays, or outdoor park/field screenings—we calculate exact amperage loads in advance and can supply ultra-quiet commercial generator rentals and power distribution boxes. We will gladly coordinate directly with your venue manager or coordinator to review load-in docks, elevator clearance, and power availability.",
    },
    {
      category: "Booking Lead Time",
      question: "How far in advance should we reserve our rentals?",
      answer:
        "We recommend booking 2 to 4 weeks in advance, especially for busy Friday and Saturday dates during peak wedding and graduation seasons (May through October) and corporate holiday galas (November–December). That said, we maintain a deep Boston inventory and do our best to accommodate short-notice, same-week, and emergency rentals whenever equipment and crew are available. Call or text us directly at (978) 601-5473 for urgent requests.",
    },
    {
      category: "Weather & Outdoor",
      question: "What is your policy for outdoor events and inclement weather?",
      answer:
        "Outdoor events are a specialty—from park movie nights to outdoor weddings and athletic watch parties. For safety, electronic gear (speakers, non-waterproof lighting, laser projectors, and indoor LED panels) must be situated under a watertight tent, pavilion, or covered structure in case of precipitation. Our mobile outdoor LED video wall trailers are fully weatherproof and wind-rated up to 35 mph. If severe rain or wind threatens an open-air event, we work with you up to 24–48 hours in advance to adapt the schedule or transition to an indoor backup space.",
    },
    {
      category: "Special FX & Safety",
      question: "Are Cold Sparklers and Dry Ice fog safe for indoor Boston venues?",
      answer:
        "Yes, both effects are 100% venue-friendly and safe for indoor use. Our Cold Sparkler machines utilize a non-pyrotechnic titanium/zirconium composite granule that produces a brilliant spark fountain that remains cool to the touch, generates zero open flame, and produces virtually no smoke. Our Dry Ice machines use solid carbon dioxide and hot water to generate dense, chilled white fog that strictly hugs the floor at ankle height (“Dancing on a Cloud”) and dissipates naturally without rising or triggering optical venue fire alarms.",
    },
    {
      category: "Service Area",
      question: "What areas in Massachusetts and New England do you service?",
      answer:
        "Our primary service area covers Boston proper (Back Bay, Seaport, Downtown, South End, Fenway, Dorchester, Charlestown), Cambridge, Somerville, Brookline, Newton, Waltham, Quincy, and communities throughout Greater Boston and Route 128 / I-95. We also regularly deliver across Massachusetts (Worcester, the North Shore, South Shore, Cape Cod & the Islands), Rhode Island (Providence, Newport), and Southern New Hampshire. Inquire about events across broader New England.",
    },
    {
      category: "Payment & Terms",
      question: "What payment methods do you accept, and how do deposits work?",
      answer:
        "We accept all major credit cards, debit cards, ACH bank transfers, and corporate checks. A deposit secures your equipment and dates on our delivery schedule, with the remaining balance due prior to load-in or upon delivery. Direct invoicing and net-30 vendor billing are available for verified universities, municipal departments, and corporate partners.",
    },
  ];
  const org = organizationSchemaNode();
  org.hasOfferCatalog = {
    "@type": "OfferCatalog",
    name: "Boston AV & Event Equipment Rentals",
    itemListElement: [
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Speaker, Microphone & DJ Equipment Rentals",
          url: `${DOMAIN}/services/speaker-rentals`,
          description:
            "Powered PA speaker rentals, subwoofer rentals, Shure QLX-D wireless & push-to-talk microphones, digital audio mixers, Pioneer CDJ-3000s, and turnkey DJ packages.",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Audio Equipment & Sound System Rentals",
          url: `${DOMAIN}/audio`,
          description:
            "Turnkey Small ($199+), Medium ($349+), and Large ($880+) PA sound system packages delivered and soundchecked across Boston and Massachusetts.",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Corporate Event AV & Corporate Meetings AV Support",
          url: `${DOMAIN}/services/corporate-events`,
          description:
            "Turnkey corporate meetings AV support in Boston, MA: BCEC & Hynes booths, hotel conferences, QSC PA audio, delegate & Shure wireless mics, laser projectors, LED walls & hybrid live streaming.",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Delegate, PTT & Conference Microphone Rentals",
          url: `${DOMAIN}/microphone-rentals`,
          description:
            "Shure QLX-D wireless handheld & lavalier mics, Countryman headsets, push-to-talk (PTT) conference delegate desk mics ($35), and presentation mic bundles.",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Projector, 4K TV & LED Video Wall Rentals",
          url: `${DOMAIN}/services/projector-rentals`,
          description:
            "Commercial HD laser projectors, Fast-Fold screens, Samsung 65-inch & 75-inch TVs, indoor 2.67mm LED walls, outdoor mobile LED trailers, and live streaming.",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Inflatable Outdoor Movie Screen With Projector & Speakers (MA & RI)",
          url: `${DOMAIN}/services/outdoor-movies`,
          description:
            "Complete 12ft ($549), 16ft ($749), 26ft ($899) & 40ft ($1,899) inflatable movie screens with HD laser projector and PA speakers delivered across Massachusetts and Rhode Island.",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Event Lighting & Special Effects",
          url: `${DOMAIN}/services/cold-sparklers`,
          description:
            "Wireless battery LED uplights, stage wash lighting, indoor-safe cold sparkler machines, and dry ice Dancing on a Cloud fog machines.",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Silent Disco, Photo Booths & DJ Equipment",
          url: `${DOMAIN}/services/silent-disco`,
          description:
            "3-channel wireless silent disco packs (50–300 headphones), Magic Mirror & 360 photo booths, and Pioneer CDJ-3000 & Technics 1200 DJ gear.",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Speaker, Microphone & Event AV Rentals in Rhode Island",
          url: `${DOMAIN}/services/rhode-island-av-rentals`,
          description:
            "PA speakers, Shure wireless & delegate conference mics, DJ gear, and inflatable movie screens delivered across Providence, Newport, Warwick & Cranston, RI.",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Wedding Sound Equipment, Wireless Mics, Uplighting & Special FX",
          url: `${DOMAIN}/services/wedding-av-rentals`,
          description:
            "Rent sound equipment for weddings in Boston, MA & RI ($199+): PA speakers, Shure wireless ceremony mics, DJ systems, wireless uplights, cold sparklers & dry ice fog.",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Dry Ice Cloud Fog Machine & DJ Equipment Rentals",
          url: `${DOMAIN}/services/dry-ice-machine`,
          description:
            "Commercial Chauvet Nimbus dry ice fog machine rentals ($295+) and club-standard Pioneer CDJ-3000 & Turntable DJ packages.",
        },
      },
    ],
  };

  const schemaGraph = {
    "@context": "https://schema.org",
    "@graph": [
      org,
      websiteSchemaNode(),
      {
        "@type": "FAQPage",
        "@id": `${DOMAIN}/#faq`,
        mainEntity: homeFaqs.map((f) => ({
          "@type": "Question",
          name: f.question,
          acceptedAnswer: {
            "@type": "Answer",
            text: f.answer,
          },
        })),
      },
    ],
  };

  const footerSeoLinks = [
    ...SERVICE_PAGES.map((p) => `<a href="${p.urlPath}">${escapeHtml(p.navLabel)}</a>`),
    `<a href="/services">All Services</a>`,
    `<a href="/about">About Beantown</a>`,
    `<a href="/contact">Contact &amp; Quote</a>`,
  ].join("\n            ");

  // Exact visual parity with home() in script.js + openingSequence curtain (0 visual changes)
  const html = `<!doctype html>
<html lang="en-US">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0, viewport-fit=cover" />
    <title>${escapeHtml(homeTitle)}</title>
    <meta name="description" content="${escapeHtml(homeDesc)}" />
    <meta name="robots" content="index, follow, max-image-preview:large" />
    <meta name="google-site-verification" content="mNQFNo1Zx3hTSlkyXoKHWQBBHWDKJ_Ns4Z5Bcfgvmzo" />
    <meta name="geo.region" content="US-MA" />
    <meta name="geo.placename" content="Boston, Massachusetts" />
    <meta name="geo.position" content="42.3601;-71.0589" />
    <meta name="ICBM" content="42.3601, -71.0589" />
    <link rel="canonical" href="${DOMAIN}/" />
    <link rel="alternate" hreflang="en-US" href="${DOMAIN}/" />
    <meta property="og:type" content="website" />
    <meta property="og:locale" content="en_US" />
    <meta property="og:site_name" content="Beantown Audio Rentals" />
    <meta property="og:url" content="${DOMAIN}/" />
    <meta property="og:title" content="${escapeHtml(homeTitle)}" />
    <meta property="og:description" content="${escapeHtml(homeDesc)}" />
    <meta property="og:image" content="${escapeHtml(OG_IMAGE)}" />
    <meta property="og:image:alt" content="Beantown Audio Rentals stage LED video wall, lighting, and sound equipment in Boston" />
    <meta name="twitter:card" content="summary_large_image" />
    <meta name="twitter:title" content="${escapeHtml(homeTitle)}" />
    <meta name="twitter:description" content="${escapeHtml(homeDesc)}" />
    <meta name="twitter:image" content="${escapeHtml(OG_IMAGE)}" />
    <link rel="icon" href="/favicon.ico" sizes="48x48" />
    <link rel="icon" type="image/png" sizes="48x48" href="/favicon-48x48.png" />
    <link rel="icon" type="image/png" sizes="96x96" href="/favicon-96x96.png" />
    <link rel="icon" type="image/png" sizes="192x192" href="/favicon-192x192.png" />
    <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
    <link rel="manifest" href="/site.webmanifest" />
    <script type="application/ld+json">
${JSON.stringify(schemaGraph, null, 2)}
    </script>
    <link rel="preload" as="image" href="assets/beantown/hero-stage-rig.png" />
    <link rel="preload" as="image" href="assets/beantown/hero-movie-rig.png" />
    <link rel="preconnect" href="https://fonts.googleapis.com" />
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
    <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&family=Sora:wght@500;600;700;800&display=swap" rel="stylesheet" />
    <link rel="stylesheet" href="styles.css?v=${CSS_VERSION}" />
  </head>
  <body class="intro-pending">
    <div class="site-shell">
      <div class="opening-sequence" id="openingSequence" aria-hidden="true"><div class="opening-lockup"><span class="opening-fixed">YOUR</span><span class="opening-changing" id="openingWord">EVENT</span></div></div>
      <header class="topbar">
        <div class="nav-wrap">
          <a class="brand" href="#home" aria-label="Beantown AV home">
            <img class="brand-logo" src="assets/beantown/beantown-logo.png" alt="Beantown Audio Rentals" width="1161" height="558" />
          </a>

          <nav class="desktop-nav" aria-label="Primary navigation">
            <a href="#rentals">Rentals</a>
            <a href="#bundles">Event Bundles</a>
            <a href="/about" data-spa-href="#about">About Us</a>
            <a href="/services" data-spa-href="#services">Services</a>
          </nav>

          <div class="nav-actions">
            <button class="icon-btn" id="searchBtn" aria-label="Search rentals">
              ⌕
            </button>
            <button class="setup-link" id="setupLink" type="button" aria-label="My setup">
              <svg class="setup-icon" viewBox="0 0 24 24" aria-hidden="true"><path d="M5 8h14l1 13H4L5 8Zm4 0a3 3 0 0 1 6 0" /></svg>
              <span class="setup-caption">My setup</span><b id="setupCount">0</b>
            </button>
            <a class="btn btn-dark btn-small" href="#quote">Get a Quote <span>↗</span></a>
          </div>
        </div>
      </header>

      <main id="app">
        <div class="page">
          <section class="hero hero-equipment reveal">
            <img class="hero-equipment-image hero-equipment-left" src="assets/beantown/hero-stage-rig.png" alt="Beantown Audio Rentals Boston stage PA speaker system and LED lighting rig" width="760" height="641" fetchpriority="high" decoding="async" />
            <div class="hero-copy">
              <h1 class="hero-headline" id="heroHeadline" aria-label="Your event. Your setup."><span class="hero-title-line" data-type-text="YOUR EVENT." data-accent-start="5">YOUR <span class="hero-title-highlight">EVENT.</span></span><br /><span class="hero-title-line" data-type-text="YOUR SETUP." data-accent-start="5">YOUR <span class="hero-title-highlight">SETUP.</span></span></h1>
              <p>Rent speakers, screens, streaming gear, photo booths and complete event systems — then build your exact experience before you request a quote.</p>
              <div class="hero-cta"><button type="button" class="btn btn-dark" data-open-cart>Build your setup</button><a class="btn btn-light" href="#rentals">Explore rentals</a></div>
            </div>
            <img class="hero-equipment-image hero-equipment-right" src="assets/beantown/hero-movie-rig.png" alt="Boston outdoor inflatable movie screen, laser projector and event sound system rental" width="760" height="621" fetchpriority="high" decoding="async" />
          </section>
          <section class="experience-categories" aria-labelledby="experience-categories-title">
            <h2 id="experience-categories-title">Start with the experience</h2>
            <div class="experience-carousel">
              <div class="experience-category-grid" id="experience-category-track" role="region" aria-label="Rental categories" tabindex="0">
                <article class="experience-category-card">
                  <h3><a href="/audio" data-spa-href="#rentals?cat=Audio%20%26%20Sound">Audio &amp; sound</a></h3>
                  <img src="assets/beantown/experience-audio.png" alt="Audio equipment, powered PA speakers, microphones and DJ gear rentals in Boston MA" width="783" height="783" loading="lazy" decoding="async" />
                  <nav class="experience-category-links" aria-label="Audio and sound rentals">
                    <a href="/services/speaker-rentals" data-spa-href="#rentals?cat=Audio%20%26%20Speakers">Speakers &amp; PA</a><a href="/services/subwoofer-rentals" data-spa-href="#rentals?cat=Subwoofers">Subwoofers</a><a href="/microphone-rentals" data-spa-href="#rentals?cat=Microphones">Microphones</a><a href="/services/audio-mixers" data-spa-href="#rentals?cat=Audio%20Mixers">Audio Mixers</a><a href="/services/dj-equipment-rentals" data-spa-href="#rentals?cat=DJ%20Equipment">DJ Equipment</a>
                  </nav>
                </article>
                <article class="experience-category-card">
                  <h3><a href="/video" data-spa-href="#rentals?cat=Video%20%26%20Visuals">Video &amp; Visuals</a></h3>
                  <img src="assets/beantown/experience-video.png" alt="HD laser projectors, 4K TV displays, LED video walls and live streaming rentals in Massachusetts" width="689" height="581" loading="lazy" decoding="async" />
                  <nav class="experience-category-links" aria-label="Video and visual rentals">
                    <a href="/services/projector-rentals" data-spa-href="#rentals?cat=Video%20%26%20Displays">Displays &amp; Projectors</a><a href="/services/indoorledwall" data-spa-href="#rentals?cat=LED%20Video%20Walls">LED Video Walls</a><a href="/services/live-streaming" data-spa-href="#rentals?cat=Live%20Streaming">Live Streaming</a>
                  </nav>
                </article>
                <article class="experience-category-card">
                  <h3><a href="/services/event-lighting" data-spa-href="#rentals?cat=Lighting%20%26%20FX">Lighting &amp; FX</a></h3>
                  <img src="assets/beantown/experience-lighting.png" alt="Wireless event uplighting, stage lights, cold sparkler machines and dry ice fog rentals" width="596" height="596" loading="lazy" decoding="async" />
                  <nav class="experience-category-links" aria-label="Lighting and effects rentals">
                    <a href="/services/event-lighting" data-spa-href="#rentals?cat=Event%20Lighting">Event Lighting</a><a href="/services/cold-sparklers" data-spa-href="#rentals?cat=Special%20Effects">Special Effects</a>
                  </nav>
                </article>
                <article class="experience-category-card experience-category-movie">
                  <h3><a href="/services" data-spa-href="#rentals?cat=Event%20Experiences">Event Experiences</a></h3>
                  <img src="assets/beantown/experience-movie.png" alt="Photo booths, silent disco headphones and inflatable outdoor movie screen rentals in Boston" width="824" height="549" loading="lazy" decoding="async" />
                  <nav class="experience-category-links" aria-label="Event experience rentals">
                    <a href="/services/photo-booth" data-spa-href="#rentals?cat=Photo%20Booths">Photo Booths</a><a href="/services/silent-disco" data-spa-href="#rentals?cat=Silent%20Disco">Silent Disco</a><a href="/services/outdoor-movies" data-spa-href="#rentals?cat=Outdoor%20Movies">Outdoor Movies</a>
                  </nav>
                </article>
              </div>
            </div>
            <a href="#rentals?cat=All" class="btn btn-dark experience-categories-cta">View all rentals</a>
          </section>
          <section class="event-bundles-feature reveal" aria-labelledby="event-bundles-title">
            <div class="ebf-copy">
              <h2 id="event-bundles-title">Event Bundles</h2>
              <p>We offer complete event bundles designed around the occasion. From weddings and corporate conferences to concerts and live performances, we combine professional audio, video, lighting, staging, and event technology to create a seamless experience from start to finish.</p>
              <p>Our team works with you to match the right equipment and services to your event's size, venue, and needs. Every bundle is carefully prepared, tested, and supported by our experienced crew so you can focus on your event while we handle the production.</p>
              <a class="ebf-cta" href="#bundles">Browse Event Bundles</a>
            </div>
            <div class="ebf-visual" aria-hidden="true">
              <div class="ebf-photo"><img src="assets/beantown/event-bundles-stage.jpg" alt="Boston live event audio, stage lighting and LED screen production bundle" loading="lazy" decoding="async" /></div>
              <img class="ebf-speaker" src="assets/beantown/event-bundles-speaker.png" alt="Commercial powered PA speaker system for Boston event audio bundles" loading="lazy" decoding="async" />
            </div>
          </section>
          <section class="why-beantown" aria-labelledby="why-beantown-title">
            <h2 id="why-beantown-title">Why Beantown?</h2>
            <div class="why-beantown-grid">
              <article class="why-beantown-item"><img src="assets/beantown/why-speakers.png" alt="Powered PA speaker and subwoofer rentals in Boston Massachusetts" loading="lazy" decoding="async" /><h3>Sound That Sets the Mood</h3><p>Speakers and audio equipment for speeches, celebrations and everything in between.</p></article>
              <article class="why-beantown-item"><img src="assets/beantown/why-lighting.png" alt="Wireless event uplighting and cold sparkler machine rentals" loading="lazy" decoding="async" /><h3>Light Up the Moment</h3><p>Event lighting to set the tone, highlight the action and bring your space to life.</p></article>
              <article class="why-beantown-item"><img src="assets/beantown/why-screen.png" alt="Indoor LED video screens and HD laser projector rentals" loading="lazy" decoding="async" /><h3>Go Big on Screen</h3><p>LED screens for presentations, event visuals and moments everyone should see.</p></article>
              <article class="why-beantown-item"><img src="assets/beantown/why-microphone.png" alt="Wireless handheld, lavalier and push-to-talk conference microphone rentals" loading="lazy" decoding="async" /><h3>Every Voice. Every Beat.</h3><p>Microphones and headphones for hosts, performers and immersive listening.</p></article>
              <article class="why-beantown-item"><img src="assets/beantown/why-movie.png" alt="Inflatable outdoor movie screen rental Boston" loading="lazy" decoding="async" /><h3>Movie Nights, Reimagined</h3><p>Inflatable screens for outdoor films, watch parties and larger-than-life viewing.</p></article>
              <article class="why-beantown-item"><img src="assets/beantown/why-dj.png" alt="Pioneer CDJ-3000, Technics 1200 turntables and DJ board rentals" loading="lazy" decoding="async" /><h3>Bring the Party</h3><p>DJ setups and rental gear to put music at the heart of your celebration.</p></article>
            </div>
          </section>
          <section class="section faq-section faq9-section" id="faq">
            <div class="section-head">
              <div>
                <span class="eyebrow">HELP &amp; EVENT LOGISTICS</span>
                <h2>Your questions,<br />answered.</h2>
              </div>
              <p>Clear, direct answers about our equipment, power requirements, on-site engineers, and delivery across Boston and New England.</p>
            </div>
            <div class="faq9-layout">
              <div class="faq9-feed">
                ${homeFaqs
                  .map(
                    (item) => `<article class="faq-item faq9-card">
                  <div class="faq9-question"><div class="faq9-q-meta"><span class="faq9-category-tag">${escapeHtml(item.category)}</span><span class="faq9-q-text">${escapeHtml(item.question)}</span></div></div>
                  <div class="faq9-answer"><div class="faq9-answer-inner"><p>${escapeHtml(item.answer)}</p></div></div>
                </article>`
                  )
                  .join("\n                ")}
              </div>
            </div>
          </section>
        </div>
      </main>

      <footer class="footer">
        <div class="footer-grid">
          <div>
            <div class="brand footer-brand">
              <img class="brand-logo" src="assets/beantown/beantown-logo-white.png" alt="Beantown Audio Rentals" width="1161" height="558" />
            </div>
            <p class="muted">
              Premium event technology, delivered without the stress.
            </p>
          </div>
          <div>
            <h4>Explore</h4>
            <a href="#rentals">Rentals</a><a href="#bundles">Bundles</a><a href="/about">About Us</a>
          </div>
          <div>
            <h4>Services</h4>
            <a href="/services">All AV Services</a><a href="/services/speaker-rentals">Speaker Rentals</a><a href="/services/dj-equipment-rentals">DJ Equipment</a><a href="/services/projector-rentals">Projector Rentals</a>
          </div>
          <div>
            <h4>Contact</h4>
            <a href="/contact">Contact &amp; Free Quote</a><a href="mailto:info@beantownaudiorentals.com">info@beantownaudiorentals.com</a><a href="tel:+19786015473">(978) 601-5473</a>
          </div>
        </div>
        <div class="footer-seo-strip">
          <span class="footer-seo-label">Boston &amp; New England Rental Guides</span>
          <div class="footer-seo-links">
            ${footerSeoLinks}
          </div>
        </div>
        <div class="footer-bottom">
          <span>© 2026 Beantown Audio Rentals · Boston, Massachusetts</span><span>Rental selections and final pricing are confirmed with your quote. · <a href="#admin" class="footer-admin-link">Admin CMS</a></span>
        </div>
      </footer>
    </div>

    <nav class="mobile-bottom-nav" id="mobileBottomNav" aria-label="Mobile navigation">
      <a href="#home" class="mobile-bottom-link">
        <span class="mobile-bottom-icon"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="m3 10 9-7 9 7v10a1 1 0 0 1-1 1h-5v-7H9v7H4a1 1 0 0 1-1-1Z"/></svg></span>
        <span>Home</span>
      </a>
      <a href="#rentals" class="mobile-bottom-link">
        <span class="mobile-bottom-icon"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><rect x="5" y="2" width="14" height="20" rx="2"/><circle cx="12" cy="7" r="2"/><circle cx="12" cy="15" r="4"/><circle cx="12" cy="15" r="1" fill="currentColor" stroke="none"/></svg></span>
        <span>Rentals</span>
      </a>
      <a href="#bundles" class="mobile-bottom-link">
        <span class="mobile-bottom-icon"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><rect x="3" y="5" width="18" height="17" rx="3"/><path d="M7 2v6m10-6v6M3 10h18m-9 2 1.4 2.8 3.1.5-2.2 2.2.5 3-2.8-1.4-2.8 1.4.5-3-2.2-2.2 3.1-.5Z"/></svg></span>
        <span>Bundles</span>
      </a>
      <a href="#about" class="mobile-bottom-link">
        <span class="mobile-bottom-icon"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><circle cx="9" cy="7" r="4"/><path d="M2 20v-2a7 7 0 0 1 14 0v2a15 15 0 0 1-14 0Zm15-8a5 5 0 0 1 5 5v2a11 11 0 0 1-3 .7"/><path d="M17 3a4 4 0 0 1 0 8"/></svg></span>
        <span>About</span>
      </a>
      <a href="#services" class="mobile-bottom-link">
        <span class="mobile-bottom-icon"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M3 13v-2a9 9 0 0 1 18 0v2m0 4v1a4 4 0 0 1-4 4h-2"/><rect x="1" y="11" width="5" height="7" rx="2"/><rect x="18" y="11" width="5" height="7" rx="2"/><rect x="10" y="20" width="5" height="3" rx="1.5"/></svg></span>
        <span>Services</span>
      </a>
    </nav>

    <div class="search-overlay" id="searchOverlay" hidden>
      <div class="search-panel">
        <div class="search-head">
          <div>
            <span class="eyebrow">QUICK FIND</span>
            <h2>Search rentals</h2>
          </div>
          <button class="icon-btn" id="closeSearch">×</button>
        </div>
        <input
          id="searchInput"
          class="search-input"
          placeholder="Try “wireless mic”, “movie screen”, or “LED wall”"
          autocomplete="off"
        />
        <div id="searchResults" class="search-results"></div>
      </div>
    </div>

    <div class="cart-drawer-overlay" id="cartDrawerOverlay" aria-hidden="true">
      <aside class="cart-drawer" id="cartDrawer" role="dialog" aria-modal="true" aria-labelledby="cartDrawerTitle">
        <header class="cart-drawer-head">
          <div class="cart-drawer-title-wrap">
            <h2 class="cart-drawer-title" id="cartDrawerTitle">Your Setup</h2>
          </div>
          <button class="cart-drawer-close" id="closeCartDrawer" type="button" aria-label="Close setup">
            <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
              <line x1="18" y1="6" x2="6" y2="18"></line>
              <line x1="6" y1="6" x2="18" y2="18"></line>
            </svg>
          </button>
        </header>

        <div class="cart-drawer-body" id="cartDrawerBody"></div>
        <footer class="cart-drawer-footer" id="cartDrawerFooter"></footer>
      </aside>
    </div>

    <div class="toast" id="toast" role="status" aria-live="polite"></div>
    <script defer src="assets/beantown/catalog-data.js?v=${CSS_VERSION}"></script>
    <script defer src="script.js?v=${CSS_VERSION}"></script>
  </body>
</html>
`;
  fs.writeFileSync(path.join(PUBLIC_DIR, "index.html"), html, "utf8");
  fs.writeFileSync(path.join(ROOT, "index.html"), html, "utf8");
}

function cleanupMovedLegacyFiles() {
  for (const stale of ["services/audio.html", "services/video.html", "services/microphone-rentals.html"]) {
    for (const base of [ROOT, PUBLIC_DIR]) {
      const fp = path.join(base, stale);
      if (fs.existsSync(fp)) fs.unlinkSync(fp);
    }
  }
}

function writeSitemap() {
  const today = new Date().toISOString().slice(0, 10);
  const urls = [
    {
      loc: `${DOMAIN}/`,
      priority: "1.0",
      freq: "weekly",
      images: [
        { loc: `${DOMAIN}/assets/beantown/hero-stage-rig.png`, title: "Boston PA Speaker System & Stage Lighting Rental" },
        { loc: `${DOMAIN}/assets/beantown/hero-movie-rig.png`, title: "Boston Outdoor Movie Screen & Laser Projector Rental" },
      ],
    },
    { loc: `${DOMAIN}/services`, priority: "0.9", freq: "weekly", images: [{ loc: OG_IMAGE, title: "Beantown Audio Rentals Boston Event AV Gear" }] },
    { loc: `${DOMAIN}/about`, priority: "0.8", freq: "monthly", images: [] },
    { loc: `${DOMAIN}/contact`, priority: "0.8", freq: "monthly", images: [] },
    ...SERVICE_PAGES.map((p) => {
      const pageItems = getItemsForPage(p);
      const imgs = [];
      const seen = new Set();
      for (const item of pageItems) {
        if (item.image && !seen.has(item.image) && imgs.length < 4) {
          seen.add(item.image);
          imgs.push({ loc: `${DOMAIN}/${item.image}`, title: `${item.name} Rental Boston` });
        }
      }
      return {
        loc: `${DOMAIN}${p.urlPath}`,
        priority: ["speaker-rentals", "audio", "dj-equipment-rentals", "projector-rentals", "cold-sparklers", "indoorledwall", "microphone-rentals", "corporate-events", "outdoor-movies", "rhode-island-av-rentals", "dry-ice-machine", "wedding-av-rentals"].includes(p.slug) ? "0.9" : "0.8",
        freq: "weekly",
        images: imgs,
      };
    }),
  ];

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:image="http://www.google.com/schemas/sitemap-image/1.1">
${urls
  .map(
    (u) => `  <url>
    <loc>${u.loc}</loc>
    <lastmod>${today}</lastmod>
    <changefreq>${u.freq}</changefreq>
    <priority>${u.priority}</priority>${
      u.images && u.images.length
        ? "\n" +
          u.images
            .map(
              (im) => `    <image:image>
      <image:loc>${escapeHtml(im.loc)}</image:loc>
      <image:title>${escapeHtml(im.title)}</image:title>
    </image:image>`
            )
            .join("\n")
        : ""
    }
  </url>`
  )
  .join("\n")}
</urlset>
`;
  fs.writeFileSync(path.join(PUBLIC_DIR, "sitemap.xml"), xml, "utf8");
  fs.writeFileSync(path.join(ROOT, "sitemap.xml"), xml, "utf8");
  console.log(`Generated sitemap.xml with ${urls.length} canonical URLs`);
}

function exportHomepageFooterAndCatalogChecks() {
  // Verify every referenced product image exists in public/
  let missing = 0;
  for (const p of CATALOG) {
    if (p.image && !fs.existsSync(path.join(PUBLIC_DIR, p.image))) {
      console.warn("WARNING: Missing asset:", p.image);
      missing++;
    }
  }
  console.log(`Checked ${CATALOG.length} catalog products (missing assets: ${missing})`);
}

cleanupMovedLegacyFiles();
ensureSeoStyles();
SERVICE_PAGES.forEach(renderServicePage);
renderServicesDirectory();
renderAboutPage();
renderContactPage();
renderHomepage();
writeSitemap();
exportHomepageFooterAndCatalogChecks();
console.log(`Built ${SERVICE_PAGES.length + 4} static SEO pages cleanly!`);
