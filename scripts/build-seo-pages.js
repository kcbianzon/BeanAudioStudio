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
const CSS_VERSION = "20261111-seo-landing";
const DOMAIN = "https://beantownaudiorentals.com";
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
    return spec.productIds.map((id) => byId.get(id)).filter(Boolean);
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
    title: "Speaker Rental Boston | Powered PA Systems & Event Audio | Beantown Audio Rentals",
    description:
      "Rent powered PA speakers, line array sound systems, stage monitors, and full event speaker packages in Boston & New England. Clear event audio with delivery, setup, and soundcheck.",
    h1: "Speaker Rentals in Boston & New England",
    lead: "Crystal-clear powered PA speakers, line arrays, and full audio packages for weddings, corporate panels, concerts, and private celebrations—delivered, set up, and soundchecked across Greater Boston.",
    heroBullets: [
      "Powered 12″ & 15″ PA speakers, concert line arrays & stage monitors",
      "Packages scaled from 30-guest speeches to 500+ attendee main stages",
      "White-glove delivery, cabling, room tuning & pickup across MA, RI & NH",
    ],
    categoryFilter: "Audio & Speakers",
    guideHeading: "Choosing the Right Event Speaker Rental in Boston",
    guideParagraphs: [
      "Whether you are hosting an intimate Back Bay cocktail reception, a corporate keynote in the Seaport District, or an outdoor concert on a college quad, sizing your PA system cleanly prevents muddy speech or distorted highs. Our Small Audio Package handles speeches and ambient playback for up to 50 guests, while our Medium and Large Line Array systems scale seamlessly with subwoofers and wireless Shure QLX-D microphones.",
      "Need to hire speakers for an event quickly? Every speaker rental includes heavy-duty tripod stands, balanced XLR cabling, and optional delivery, setup, soundcheck, or dedicated on-site audio engineer support throughout Boston, Cambridge, Somerville, Brookline, and New England.",
    ],
    related: ["subwoofer-rentals", "microphone-rentals", "audio-mixers", "dj-equipment-rentals", "audio"],
    faqs: [
      {
        q: "How many speakers do I need to rent for 100 to 200 guests?",
        a: "For 50–150 guests (weddings, corporate town halls, receptions), we recommend our Medium Audio Package with four powered speakers on stands plus optional subwoofer support. For 150+ guests or live concerts, our Large Audio Package with line arrays and subs ensures even front-to-back coverage.",
      },
      {
        q: "Do your Boston speaker rentals include delivery, stands, and cables?",
        a: "Yes. Every speaker rental includes tripod stands, power cords, and XLR/Bluetooth interconnect cabling. You can choose pickup, white-glove delivery with setup and soundcheck, or full on-site technician operation.",
      },
      {
        q: "Can I connect a phone, laptop, or DJ controller to your PA speakers?",
        a: "Yes. All audio packages include a compatible mixer with Bluetooth, AUX/3.5mm, RCA, and XLR inputs so phones, laptops, microphones, and DJ controllers plug right in without extra adapters.",
      },
    ],
  },
  {
    slug: "audio",
    urlPath: "/services/audio",
    navLabel: "Audio Packages",
    categoryLabel: "Complete Sound Systems",
    hashCategory: "Audio & Speakers",
    title: "Audio Equipment Rental Boston | Complete Event Sound Packages | Beantown Audio Rentals",
    description:
      "Full-service audio equipment rental near you in Boston & New England. Turnkey PA sound packages, wireless mics, subwoofers & digital mixers delivered and tested for any crowd.",
    h1: "Boston Audio Equipment Rental & Sound Packages",
    lead: "Turnkey sound packages combining powered speakers, wireless Shure microphones, mixers, and cabling—engineered for reliable clarity in hotel ballrooms, tents, auditoriums, and outdoor venues.",
    heroBullets: [
      "Small (up to 50), Medium (50–150) & Large (150+) complete audio packages",
      "Clean, shop-tested sound systems with redundant cables & adapters",
      "Flexible self-pickup or full New England delivery, tuning & teardown",
    ],
    productIds: ["small-audio", "medium-audio", "large-audio", "powered-speakers", "audio-monitors", "audio-cables-stands", "sub-kw181", "qlxd-handheld"],
    guideHeading: "Turnkey Audio Rentals Without the Technical Guesswork",
    guideParagraphs: [
      "Searching for audio equipment rental near you shouldn't mean piecing together dozens of unfamiliar cables and amplifiers. Our tiered Boston audio rental packages match the exact acoustic demands of hotel ballrooms, rooftop lounges, university halls, and outdoor tents.",
      "Every audio system is tested prior to dispatch and can be customized inside our interactive quote builder with extra wireless handheld mics, lavaliers, stage monitors, or 18-inch powered subwoofers.",
    ],
    related: ["speaker-rentals", "microphone-rentals", "subwoofer-rentals", "audio-mixers", "event-lighting"],
    faqs: [
      {
        q: "What comes inside a turnkey Beantown audio rental package?",
        a: "Our Small, Medium, and Large Audio Packages include powered PA speakers, heavy-duty tripod stands, wireless Shure microphones, an audio mixer with Bluetooth/laptop hookups, and all required XLR, power, and surge protection gear.",
      },
      {
        q: "Do you service Cambridge, Somerville, and greater New England?",
        a: "Yes. We deliver across all Boston neighborhoods, Cambridge, Somerville, Brookline, Newton, Waltham, Worcester, Cape Cod, Providence RI, and Southern New Hampshire.",
      },
    ],
  },
  {
    slug: "dj-equipment-rentals",
    urlPath: "/services/dj-equipment-rentals",
    navLabel: "DJ Equipment",
    categoryLabel: "DJ Equipment",
    hashCategory: "DJ Equipment",
    title: "DJ Equipment Rental Boston | CDJ-3000, Mixers & DJ Packages | Beantown Audio Rentals",
    description:
      "Rent Pioneer CDJ-3000s, DJM-900NXS, Technics 1200 turntables, Rane battle mixers, DDJ controllers & complete DJ speaker packages in Boston & New England.",
    h1: "DJ Equipment Rentals in Boston",
    lead: "Club-standard Pioneer DJ CDJ-3000s, DJM-900NXS & DJM-S9 mixers, Technics SL-1200MK2 turntables, DDJ-1000SRT controllers, and turnkey DJ sound packages for weddings, clubs, and private parties.",
    heroBullets: [
      "Pioneer CDJ-3000, CDJ-2000NXS2, DJM-900NXS & Technics 1200s in stock",
      "Rane SEVENTY-TWO, DJM-S9 & DDJ-1000SRT for Serato & Rekordbox DJs",
      "Complete Basic, Standard & Pro DJ packages with speakers, subs & facade",
    ],
    categoryFilter: "DJ Equipment",
    guideHeading: "Rent a DJ Board, Turntables, or Full Club Rig in Boston",
    guideParagraphs: [
      "Whether you are flying in a touring club artist with an exact Pioneer CDJ-3000 and DJM-900NXS technical rider, hosting a vinyl set on Technics SL-1200MK2 direct-drive turntables, or planning to rent a DJ board with powered speakers for a private celebration, every unit arrives firmware-updated, clean, and road-ready.",
      "Need sound and dance floor energy in one streamlined booking? Our Basic, Standard, and Pro DJ Packages bundle controllers/CDJs, powered QSC/PA tops, 18-inch subwoofers, and a sleek Scrim Werks facade.",
    ],
    related: ["subwoofer-rentals", "event-lighting", "cold-sparklers", "speaker-rentals", "silent-disco"],
    faqs: [
      {
        q: "Do you rent individual Pioneer CDJ-3000 players and club mixers separately?",
        a: "Yes. You can rent single CDJ-3000 or CDJ-2000NXS2 decks, DJM-900NXS, DJM-S9, Rane SEVENTY-TWO, or DDJ-1000SRT units individually or paired with a full PA and subwoofer setup.",
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
    title: "Projector Rental Boston | HD Laser Projectors & Fast-Fold Screens | Beantown Audio Rentals",
    description:
      "Bright 4,500–6,000+ lumen HD laser projector rentals & 80″–120″ Fast-Fold projection screens in Boston & New England for conferences, weddings, galas, and slide decks.",
    h1: "Projector & Projection Screen Rentals in Boston",
    lead: "Commercial-grade 1080p/WUXGA laser projectors (4,500 to 6,000+ lumens) paired with 80″ tripod screens or 120″ Fast-Fold dress-kit screens—built for crisp slides, keynotes, and videos even in bright rooms.",
    heroBullets: [
      "High-lumen laser projectors with instant power-on & crisp HDMI/WUXGA optics",
      "120″ Fast-Fold screens with black velvet dress kits for gala & ballroom finish",
      "Optional wireless clickers, HDMI switchers & on-site AV video support",
    ],
    productIds: ["laser-projector", "fastfold-screen", "video-basic-package", "video-mid-package", "video-switcher", "movie-16"],
    guideHeading: "High-Brightness Boston Projector Rentals Built for Real Venues",
    guideParagraphs: [
      "Low-cost office projectors wash out immediately under ballroom chandeliers or daytime windows. Our Boston projector rental inventory uses 4,500 to 6,000+ lumen commercial laser light engines so spreadsheets, brand decks, wedding slideshows, and keynote videos stay sharp and readable from every table.",
      "Choose an individual HD Laser Projector with a 120-inch Fast-Fold screen, or book our turnkey Basic or Mid-Size Video Packages including presentation stands, long-run HDMI kits, wireless clickers, and multi-input video switchers.",
    ],
    related: ["video", "tv-rentals", "indoorledwall", "outdoor-movies", "microphone-rentals"],
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
    title: "Cold Sparklers & Cold Spark Machine Rental Boston | Beantown Audio Rentals",
    description:
      "Rent indoor-safe ColorKey Dazzler FX cold sparkler machines in Boston & Massachusetts for wedding grand entrances, first dances & concerts. No smoke, cool sparks.",
    h1: "Cold Sparkler & Cold Spark Machine Rentals in Boston",
    lead: "Create unforgettable indoor-safe spark fountains up to 15 feet high for grand entrances, first dances, and concert drops—zero smoke, zero open flame, and no pyrotechnic permit required.",
    heroBullets: [
      "Non-flammable titanium/zirconium granule sparks that remain cool to the touch",
      "Available in Basic (2 units), Premium (4 units) & Ultimate (6 units) DMX arrays",
      "Venue-friendly across Greater Boston ballrooms, tents & historic halls",
    ],
    productIds: ["cold-spark-2", "cold-spark-4", "cold-spark-ultimate", "dry-ice-cloud"],
    guideHeading: "Safe, High-Impact Cold Spark Machines for Boston Weddings & Galas",
    guideParagraphs: [
      "Traditional pyrotechnics are banned inside virtually every Boston hotel, museum, and historic ballroom. Our ColorKey Dazzler FX cold sparkler machines heat special composite granules to create a brilliant, photography-ready gold spark fountain without open combustion or heavy lingering smoke.",
      "Every Boston cold spark rental package includes sealed titanium granule refills, synchronized wireless remote or DMX firing control, power/DMX cabling, and optional certified on-site technician operation timed to your DJ or band cues.",
    ],
    related: ["dry-ice-machine", "event-lighting", "dj-equipment-rentals", "photo-booth"],
    faqs: [
      {
        q: "Are cold sparkler machines safe inside Boston hotels and wedding venues?",
        a: "Yes. Cold spark fountains are non-pyrotechnic, cool to the touch moments after leaving the nozzle, produce zero flame, and emit virtually no smoke—making them approved at major Boston ballrooms and event halls.",
      },
      {
        q: "How many cold spark machines do we need?",
        a: "Two machines (Basic Package) are ideal for framing a DJ booth or wedding sweetheart table entrance. Four to six machines (Premium or Ultimate Packages) create dramatic symmetrical stage walls for concerts, corporate awards, and grand ballrooms.",
      },
    ],
  },
  {
    slug: "dry-ice-machine",
    urlPath: "/services/dry-ice-machine",
    navLabel: "Dry Ice Cloud",
    categoryLabel: "Special Effects",
    hashCategory: "Special Effects",
    title: "Dry Ice Machine Rental Boston | Dancing on a Cloud Fog | Beantown Audio Rentals",
    description:
      "Rent commercial Chauvet Nimbus dry ice machines for 'Dancing on a Cloud' wedding first dances & theatrical entrances in Boston & New England. Low-lying fog that won't trip alarms.",
    h1: "Dry Ice Cloud Machine Rentals in Boston",
    lead: "Produce dense, thick, snowy-white low-lying fog that blankets the dance floor for your wedding first dance or theatrical stage cue—staying strictly low to the floor without rising.",
    heroBullets: [
      "Commercial Chauvet DJ Nimbus hot-water dry ice machines",
      "Thick, clean ankle-height cloud that dissipates smoothly before rising",
      "Ideal for wedding first dances, gala entrances & live theater in Boston",
    ],
    productIds: ["dry-ice-cloud", "cold-spark-2", "wedding-lighting", "medium-audio"],
    guideHeading: "Magical 'Dancing on a Cloud' Without Venue Alarm Worry",
    guideParagraphs: [
      "Unlike cheap oil-based foggers that create haze throughout the room and risk triggering optical smoke detectors, real CO2 dry ice fog is heavier than warm indoor air. It rolls gently off the Chauvet Nimbus unit and hugs the dance floor at shoe-to-knee level, creating effortless, cloud-like wedding photos.",
      "Pair your dry ice cloud rental with wireless amber/warm-white uplighting or cold sparkler fountains for an unforgettable first dance reveal anywhere in Boston or New England.",
    ],
    related: ["cold-sparklers", "event-lighting", "photo-booth", "dj-equipment-rentals"],
    faqs: [
      {
        q: "Will a dry ice cloud machine trigger optical venue smoke detectors?",
        a: "Dry ice machines create chilled water vapor/CO2 fog that stays low along the floor and dissipates before reaching ceiling sensors. Always confirm with your venue coordinator ahead of time.",
      },
      {
        q: "How does timing work during a first dance?",
        a: "When booked with setup or an on-site technician, we pre-heat the Nimbus tank discreetly before your grand entrance or first dance so thick white cloud fills the floor right on musical cue.",
      },
    ],
  },
  {
    slug: "microphone-rentals",
    urlPath: "/services/microphone-rentals",
    navLabel: "Microphones",
    categoryLabel: "Microphones",
    hashCategory: "Microphones",
    title: "Microphone Rental Boston | Wireless Conference, Lavalier & Event Mics | Beantown Audio Rentals",
    description:
      "Rent Shure QLX-D digital wireless handhelds, clip-on lavaliers, Countryman headsets, SM58 vocal mics, push-to-talk conference mics & IEMs in Boston & MA.",
    h1: "Wireless & Conference Microphone Rentals in Boston",
    lead: "Dependable RF clarity with Shure QLX-D digital wireless handhelds, discreet clip-on lavaliers, Countryman headsets, push-to-talk podium/conference mics, and live in-ear monitor systems.",
    heroBullets: [
      "Shure QLX-D AES-256 digital wireless handheld & clip-on lavalier systems",
      "Countryman earset mics & Push-to-Talk (PTT) conference table mics",
      "Single mic, Dual presentation & 4–6 mic Live Performance bundles",
    ],
    categoryFilter: "Microphones",
    guideHeading: "Zero-Dropout Wireless Audio for Keynotes, Panels & Ceremonies",
    guideParagraphs: [
      "Downtown Boston RF spectrum is notoriously crowded around convention halls, universities, and Back Bay hotels. That is why our wireless fleet centers on professional Shure QLX-D 24-bit digital systems rather than consumer UHF kits—giving keynote presenters, wedding officiants, and Q&A moderators rock-solid reception.",
      "Rent individual conference mics, lavalier packs, and In-Ear Monitors (IEMs), or add one of our pre-paired Single, Presentation, or Live Performance microphone packages directly to your quote.",
    ],
    related: ["speaker-rentals", "audio-mixers", "live-streaming", "audio"],
    faqs: [
      {
        q: "Which microphone is best for a conference panel or keynote speaker?",
        a: "Our Presentation Setup pairs two Shure QLX-D wireless lavalier or Countryman headset mics with a dual receiver and compact mixer for hands-free corporate talks, while Wireless Handhelds excel for audience Q&A.",
      },
      {
        q: "Do microphone rentals include stands, receivers, and XLR cables?",
        a: "Yes. Every mic rental includes matching wireless receiver units, fresh batteries/power supplies, mic clips, stands where applicable, and XLR patch cabling.",
      },
    ],
  },
  {
    slug: "subwoofer-rentals",
    urlPath: "/services/subwoofer-rentals",
    navLabel: "Subwoofers",
    categoryLabel: "Subwoofers",
    hashCategory: "Subwoofers",
    title: "Subwoofer Rental Boston | QSC, JBL & Mackie 18″ Powered Subwoofers | Beantown Audio Rentals",
    description:
      "Rent high-output 18″ powered subwoofers in Boston: QSC KW181, QSC KS212C cardioid subs, JBL VRX line array subs, JBL PRX618S & Mackie Thump18S.",
    h1: "Subwoofer Rentals in Boston",
    lead: "Feel tight, clean low-end energy without boominess—featuring QSC KW181 1000W 18″ subs, QSC KS212C cardioid directional subs, JBL VRX918SP concert subs, and Mackie Thump18S.",
    heroBullets: [
      "QSC KW181, Cardioid QSC KS212C, JBL VRX918SP, JBL PRX618S & Mackie Thump18S",
      "Cardioid sub options keep sound stages quiet while throwing deep bass forward",
      "Built-in crossover presets pair effortlessly with any powered PA top",
    ],
    categoryFilter: "Subwoofers",
    guideHeading: "Punchy Low-End Tuned for Clubs, Bands & Ballroom Dance Floors",
    guideParagraphs: [
      "Standard 12-inch or 15-inch PA tops handle speech well, but real concert warmth and dance floor energy come from dedicated subwoofers. Whether you need a compact Mackie Thump18S for a house party, a stage-friendly QSC KS212C cardioid sub that cancels rear spill in noise-sensitive wedding venues, or scalable JBL VRX concert sub arrays, we match the cabinet to your room.",
    ],
    related: ["speaker-rentals", "dj-equipment-rentals", "audio-mixers", "audio"],
    faqs: [
      {
        q: "When should I rent a cardioid subwoofer like the QSC KS212C?",
        a: "Cardioid subwoofers reduce rear bass radiation by 15 dB—ideal when DJs or live performers are close to a wall, beside sensitive stage mics, or in historic ballrooms with acoustic reverberation.",
      },
    ],
  },
  {
    slug: "audio-mixers",
    urlPath: "/services/audio-mixers",
    navLabel: "Audio Mixers",
    categoryLabel: "Audio Mixers",
    hashCategory: "Audio Mixers",
    title: "Audio Mixer Rental Boston | Behringer X32, Allen & Heath SQ-7 & Mixers | Beantown Audio Rentals",
    description:
      "Rent digital and analog mixing consoles in Boston: Allen & Heath SQ-7 32-ch, Behringer X32, X32 Compact, QSC TouchMix-16, Mackie 1402-VLZ3 & Yamaha MG10XU.",
    h1: "Digital & Analog Audio Mixer Rentals in Boston",
    lead: "Scalable front-of-house and stage consoles from ultra-compact 10-channel Yamaha USB mixers up to 40-channel Behringer X32 and 96kHz Allen & Heath SQ-7 digital production desks.",
    heroBullets: [
      "Allen & Heath SQ-7, Behringer X32, X32 Compact & QSC TouchMix-16 digital desks",
      "Mackie 1402-VLZ3 & Yamaha MG10XU compact analog & USB recording mixers",
      "Motorized faders, remote iPad control & multi-track USB audio interfaces",
    ],
    categoryFilter: "Audio Mixers",
    guideHeading: "Clean Mixing Power From Breakout Rooms to Festival FOH",
    guideParagraphs: [
      "Complex live bands, corporate panels with multiple remote feeds, and broadcast productions need clean preamps, recallable scenes, and dedicated monitor buses. Rent standalone consoles or combine them with Shure wireless packages and technician engineering.",
    ],
    related: ["microphone-rentals", "speaker-rentals", "live-streaming", "subwoofer-rentals"],
    faqs: [
      {
        q: "Can an on-site Beantown sound engineer run the X32 or SQ-7 console?",
        a: "Yes. You can add Full On-Site Technician Support in Step 4 of our Quote Builder so a trained Boston FOH audio engineer runs soundcheck and mixes your entire program live.",
      },
    ],
  },
  {
    slug: "video",
    urlPath: "/services/video",
    navLabel: "Video Equipment",
    categoryLabel: "Video & Displays",
    hashCategory: "Video & Displays",
    title: "Video Equipment Rental Boston | Displays, Projectors & AV Switchers | Beantown Audio Rentals",
    description:
      "Rent commercial 4K Samsung TVs, laser HD projectors, Fast-Fold screens, video switchers & complete conference video packages in Boston & New England.",
    h1: "Video Equipment & Display Rentals in Boston",
    lead: "Complete presentation video packages—combining bright laser projectors, Fast-Fold screens with black velvet dress kits, rolling 65″ & 75″ 4K displays, and seamless multi-input switchers.",
    heroBullets: [
      "Basic (up to 40), Mid-Size (50–175) & Large Format (175+) video packages",
      "65″ & 75″ Samsung 4K UHD TVs on locking commercial rolling stands",
      "Full HD/4K multi-source video switchers with Zoom/Teams webcam output",
    ],
    categoryFilter: "Video & Displays",
    guideHeading: "Conference, Wedding & Trade Show Video Systems Across Boston",
    guideParagraphs: [
      "Clean event video means more than a single screen—it means seamless laptop switching, confidence monitors for presenters, and zero black frames between speakers. Our Boston video packages pair tested Samsung 4K displays, commercial laser projectors, and 4-channel seamless switchers ready for corporate keynotes, trade shows, and celebrations.",
    ],
    related: ["projector-rentals", "tv-rentals", "indoorledwall", "live-streaming"],
    faqs: [
      {
        q: "Do your video packages allow switching cleanly between multiple laptops?",
        a: "Yes. Adding our 4-channel seamless Video Switcher prevents desktop clutter and 'No Signal' screens on the main display while queuing the next presenter smoothly.",
      },
    ],
  },
  {
    slug: "tv-rentals",
    urlPath: "/services/tv-rentals",
    navLabel: "TV Rentals",
    categoryLabel: "Video & Displays",
    hashCategory: "Video & Displays",
    title: "TV Rental Boston | 65″ & 75″ 4K Samsung Displays on Rolling Stands | Beantown Audio Rentals",
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
    guideHeading: "Effortless Booth Signage, Breakouts & Digital Displays",
    guideParagraphs: [
      "Need sharp, bright 4K monitors without draping projection throws across a crowded booth or bright atrium? Our Samsung 65-inch and 75-inch commercial TV rentals wheel effortlessly into position with concealed cable stands, crystal-clear HDR10+ color, and hassle-free HDMI/USB playback.",
    ],
    related: ["video", "projector-rentals", "indoorledwall", "live-streaming"],
    faqs: [
      {
        q: "Do your 65″ and 75″ TV rentals include the rolling floor stand?",
        a: "Yes. Both the Samsung 65-inch and 75-inch TV rentals come complete with a heavy-duty rolling stand, power cord, remote control, and 25ft high-speed HDMI cable.",
      },
    ],
  },
  {
    slug: "indoorledwall",
    urlPath: "/services/indoorledwall",
    navLabel: "Indoor LED Walls",
    categoryLabel: "LED Video Walls",
    hashCategory: "LED Video Walls",
    title: "Indoor LED Video Wall Rental Boston | High-Res 2.67mm LED Walls | Beantown Audio Rentals",
    description:
      "Rent ultra-fine 2.67mm indoor LED video walls in Boston (12′×7′, 16′×9′ & custom configurations) with NovaStar VX1000 processing, PA audio, ground support & setup.",
    h1: "Indoor LED Video Wall Rentals in Boston",
    lead: "Seamless, cinema-bright 2.67mm fine-pitch modular LED video walls with NovaStar processing, ground-support framing, audio integration, and dedicated delivery & technician setup.",
    heroBullets: [
      "Turnkey 12′×7′ and 16′×9′ 2.67mm LED wall packages + custom stage builds",
      "Ultra-fine 2.67mm pitch stays crisp even for close-range ballroom viewing",
      "Includes NovaStar VX1000 processor, PA speakers, wireless mic & full crew setup",
    ],
    productIds: ["led-12", "led-16", "led-custom", "led-trailer"],
    guideHeading: "Outshine Ambient Lights With Seamless Modular LED Walls",
    guideParagraphs: [
      "Projectors struggle in glass-walled Boston venues, daytime ballrooms, and vibrant concert productions. A high-contrast 2.67mm indoor LED wall delivers rich blacks, vivid motion graphics, and zero shadows when speakers walk in front of the screen.",
      "Every indoor LED wall package scales cleanly with optional custom curves, portrait totems, stage risers, and live camera IMAG feeds.",
    ],
    related: ["ledtrailers", "video", "live-streaming", "event-lighting", "speaker-rentals"],
    faqs: [
      {
        q: "What pixel pitch is best for an indoor ballroom conference or gala?",
        a: "Our 2.67mm fine-pitch indoor panels deliver razor-sharp text and video for guests seated as close as 8–10 feet away, ideal for Boston corporate keynotes, trade shows, and luxury wedding backdrops.",
      },
    ],
  },
  {
    slug: "ledtrailers",
    urlPath: "/services/ledtrailers",
    navLabel: "LED Trailers",
    categoryLabel: "LED Video Walls",
    hashCategory: "LED Video Walls",
    title: "Outdoor Mobile LED Video Wall Trailer Rental Boston & New England | Beantown Audio Rentals",
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
    guideParagraphs: [
      "Unlike inflatable screens that require sunset to watch, our high-brightness mobile LED video wall trailers command crisp, full-color visibility at noon under direct summer sun—setting up swiftly on city plazas, campus greens, marathon finish lines, and festival grounds.",
    ],
    related: ["indoorledwall", "outdoor-movies", "speaker-rentals", "live-streaming"],
    faqs: [
      {
        q: "Can LED video wall trailers run during sunny daytime hours and light rain?",
        a: "Yes. High-nit outdoor 3.91mm panels cut through direct midday sunlight, and the IP65-rated cabinet structure operates safely in rain and winds up to 45 mph.",
      },
    ],
  },
  {
    slug: "live-streaming",
    urlPath: "/services/live-streaming",
    navLabel: "Live Streaming",
    categoryLabel: "Live Streaming",
    hashCategory: "Live Streaming",
    title: "Live Streaming Equipment & Hybrid Event Rental Boston | Beantown Audio Rentals",
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
    guideParagraphs: [
      "Remote attendees notice bad audio or blurry webcam video within five seconds. Our Boston live streaming packages pair optical Sony 4K cameras on fluid-head tripods with direct board-mixed wireless microphones and hardware LiveMaster video switching—sending broadcast clarity to global teams.",
    ],
    related: ["microphone-rentals", "video", "audio-mixers", "tv-rentals"],
    faqs: [
      {
        q: "What platforms do your live streaming setups support?",
        a: "Our OBS/vMix workstations and hardware capture switchers output cleanly to Zoom, Microsoft Teams, YouTube Live, LinkedIn Live, Vimeo, and RTMP corporate portals while saving a clean master file.",
      },
    ],
  },
  {
    slug: "outdoor-movies",
    urlPath: "/services/outdoor-movies",
    navLabel: "Outdoor Movies",
    categoryLabel: "Outdoor Movies",
    hashCategory: "Outdoor Movies",
    title: "Outdoor Inflatable Movie Screen Rental Boston | 12ft to 40ft | Beantown Audio Rentals",
    description:
      "Rent 12ft ($549), 16ft ($749), 26ft ($899) & 40ft ($1,899) inflatable outdoor movie screens in Boston & MA with laser projector, PA speakers & blower included.",
    h1: "Outdoor Inflatable Movie Screen Rentals in Boston",
    lead: "Everything needed for magic under the stars—turnkey 12-foot, 16-foot, 26-foot, and massive 40-foot inflatable cinema packages with HD laser projector, powered PA sound, media player, and quiet blower.",
    heroBullets: [
      "Transparent turnkey rates: 12ft ($549), 16ft ($749), 26ft ($899) & 40ft ($1,899)",
      "Commercial high-output HD laser projectors & booming outdoor speakers",
      "Built for backyard movie nights, schools, town parks & drive-in events",
    ],
    categoryFilter: "Outdoor Movies",
    guideHeading: "Published Pricing for Backyard, School & Town Movie Nights",
    guideParagraphs: [
      "Planning a neighborhood movie night, PTO fundraiser, or town summer screening? Every Beantown inflatable outdoor movie package arrives complete with a widescreen 16:9 screen, ultra-quiet continuous blower, high-brightness HD laser projector, outdoor PA speakers on stands, heavy-duty ground stakes/tethers, and HDMI/Blu-ray connectivity.",
    ],
    related: ["ledtrailers", "projector-rentals", "silent-disco", "speaker-rentals"],
    faqs: [
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
    title: "Photo Booth Rental Boston | 360 Booths & Magic Mirror Booths | Beantown Audio Rentals",
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
    guideParagraphs: [
      "Modern guests expect instant digital shares AND tangible keepsakes. Our Boston photo booth lineup spans sleek digital iPad Mirror booths, full-height interactive touchscreen Magic Mirrors with dye-sublimation 4×6 lab prints, and RGB-lit 360 revolving slow-motion video booths that turn every pose into social content.",
    ],
    related: ["cold-sparklers", "dry-ice-machine", "event-lighting", "dj-equipment-rentals"],
    faqs: [
      {
        q: "How do guests receive photos or 360 slow-motion videos?",
        a: "Guests share captures instantaneously on-site via QR code, AirDrop, SMS text, or email, plus optional unlimited high-speed 4×6 photo prints on our Magic Mirror packages.",
      },
    ],
  },
  {
    slug: "silent-disco",
    urlPath: "/services/silent-disco",
    navLabel: "Silent Disco",
    categoryLabel: "Silent Disco",
    hashCategory: "Silent Disco",
    title: "Silent Disco Rental Boston | 50 to 300+ Wireless LED Headphones | Beantown Audio Rentals",
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
    guideParagraphs: [
      "Hosting in a residential Back Bay brownstone, Cambridge rooftop, university quad, or a reception hall with strict 10 PM sound limits? Silent Disco packages let up to three live DJs or Spotify playlists broadcast simultaneously on glowing Red, Blue, and Green channels while the room outside stays whisper quiet.",
    ],
    related: ["dj-equipment-rentals", "event-lighting", "outdoor-movies", "photo-booth"],
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
    title: "Event Lighting & Wireless Uplight Rental Boston | Beantown Audio Rentals",
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
    guideParagraphs: [
      "Lighting instantly defines the mood of any Boston space—from warm candlelit amber across exposed brick walls and white wedding tents to synchronized moving-head club beams over a dance floor. Our IP65 weather-rated wireless Chauvet Freedom Par fixtures eliminate messy power cords along venue perimeters.",
    ],
    related: ["cold-sparklers", "dry-ice-machine", "dj-equipment-rentals", "photo-booth"],
    faqs: [
      {
        q: "Are your wireless uplights truly cord-free during an event?",
        a: "Yes. Our Chauvet Freedom Par wireless LED uplights run up to 20 hours on internal lithium batteries, letting us tuck them cleanly beside pillars, drapery, and tent legs without tripping hazards.",
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
  grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
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
`;
  const cssPath = path.join(ROOT, "styles.css");
  let current = fs.readFileSync(cssPath, "utf8");
  const idx = current.indexOf(marker);
  if (idx !== -1) {
    current = current.slice(0, idx).trimEnd() + "\n";
  }
  fs.writeFileSync(cssPath, current + "\n" + seoCss.trim() + "\n", "utf8");
}

function commonHeadTags({ title, description, canonicalUrl, jsonLdObj }) {
  return `    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0, viewport-fit=cover" />
    <title>${escapeHtml(title)}</title>
    <meta name="description" content="${escapeHtml(description)}" />
    <meta name="robots" content="index, follow, max-image-preview:large" />
    <meta name="google-site-verification" content="mNQFNo1Zx3hTSlkyXoKHWQBBHWDKJ_Ns4Z5Bcfgvmzo" />
    <link rel="canonical" href="${escapeHtml(canonicalUrl)}" />
    <meta property="og:type" content="website" />
    <meta property="og:locale" content="en_US" />
    <meta property="og:site_name" content="Beantown Audio Rentals" />
    <meta property="og:url" content="${escapeHtml(canonicalUrl)}" />
    <meta property="og:title" content="${escapeHtml(title)}" />
    <meta property="og:description" content="${escapeHtml(description)}" />
    <meta property="og:image" content="${escapeHtml(OG_IMAGE)}" />
    <meta property="og:image:alt" content="Beantown Audio Rentals Boston event audio, LED video walls, and production gear" />
    <meta name="twitter:card" content="summary_large_image" />
    <meta name="twitter:title" content="${escapeHtml(title)}" />
    <meta name="twitter:description" content="${escapeHtml(description)}" />
    <meta name="twitter:image" content="${escapeHtml(OG_IMAGE)}" />
    <link rel="icon" href="/favicon.ico" sizes="48x48" />
    <link rel="icon" type="image/png" sizes="48x48" href="/favicon-48x48.png" />
    <link rel="icon" type="image/png" sizes="96x96" href="/favicon-96x96.png" />
    <link rel="icon" type="image/png" sizes="192x192" href="/favicon-192x192.png" />
    <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
    <link rel="manifest" href="/site.webmanifest" />
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
            <img class="brand-logo" src="/assets/beantown/beantown-logo.png" alt="Beantown Audio Rentals" />
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
              <img class="brand-logo" src="/assets/beantown/beantown-logo-white.png" alt="Beantown Audio Rentals" />
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
  const canonicalUrl = `${DOMAIN}${spec.urlPath}`;
  const catEncoded = new URLSearchParams({ cat: spec.hashCategory }).toString();
  const interactiveHref = `/#${"rentals"}?${catEncoded}`;
  const bySlug = new Map(SERVICE_PAGES.map((p) => [p.slug, p]));

  const schemaGraph = {
    "@context": "https://schema.org",
    "@graph": [
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
        description: spec.description,
        url: canonicalUrl,
        serviceType: spec.categoryLabel,
        provider: { "@id": `${DOMAIN}/#organization` },
        areaServed: [
          { "@type": "City", name: "Boston" },
          { "@type": "City", name: "Cambridge" },
          { "@type": "City", name: "Somerville" },
          { "@type": "City", name: "Brookline" },
          { "@type": "State", name: "Massachusetts" },
          { "@type": "Place", name: "New England" },
        ],
        hasOfferCatalog: {
          "@type": "OfferCatalog",
          name: spec.navLabel,
          itemListElement: items.map((item) => ({
            "@type": "Offer",
            itemOffered: {
              "@type": "Product",
              name: item.name,
              image: `${DOMAIN}/${item.image}`,
              description: item.desc.replace(/\n/g, " "),
              offers:
                typeof item.price === "number" && item.price > 0
                  ? {
                      "@type": "Offer",
                      priceCurrency: "USD",
                      price: String(item.price),
                      availability: "https://schema.org/InStock",
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
    .map((item) => {
      const bullets = item.desc
        .split("\n")
        .map((line) => line.replace(/^•\s*/, "").trim())
        .filter(Boolean)
        .slice(0, 4);
      const imgSrc = item.image ? `/${item.image}` : "/assets/beantown/event-production.jpg";
      return `        <article class="seo-item-card">
          <div>
            <div class="seo-item-thumb">
              <img src="${escapeHtml(imgSrc)}" alt="${escapeHtml(item.name)} rental in Boston" loading="lazy" />
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
<html lang="en">
  <head>
${commonHeadTags({
  title: spec.title,
  description: spec.description,
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
          ${spec.guideParagraphs.map((p) => `<p>${escapeHtml(p)}</p>`).join("\n          ")}
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
  const relOut = path.join("services", `${spec.slug}.html`);
  fs.mkdirSync(path.join(PUBLIC_DIR, "services"), { recursive: true });
  fs.mkdirSync(path.join(ROOT, "services"), { recursive: true });
  fs.writeFileSync(path.join(PUBLIC_DIR, relOut), html, "utf8");
  fs.writeFileSync(path.join(ROOT, relOut), html, "utf8");
}

function renderServicesDirectory() {
  const canonicalUrl = `${DOMAIN}/services`;
  const schemaGraph = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Home", item: `${DOMAIN}/` },
          { "@type": "ListItem", position: 2, name: "Services", item: canonicalUrl },
        ],
      },
      {
        "@type": "CollectionPage",
        name: "Boston Event AV & Equipment Rental Services",
        url: canonicalUrl,
        description: "Full directory of Boston audio, speaker, DJ equipment, projector, LED wall, lighting, cold sparklers, and photo booth rentals.",
        isPartOf: { "@id": `${DOMAIN}/#website` },
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
<html lang="en">
  <head>
${commonHeadTags({
  title: "Boston Event AV & Equipment Rental Services | Beantown Audio Rentals",
  description:
    "Full-service Boston audio visual rentals: speakers, DJ gear, laser projectors, indoor & outdoor LED walls, wireless mics, uplighting, silent disco, photo booths & cold sparklers.",
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
          <h1>Audio, Video, Lighting &amp; Event Rentals</h1>
          <p class="seo-hero-lead">Explore every AV category we deliver, install, and support across Boston, Cambridge, Somerville, Massachusetts, and New England—from single speaker pickups to 40-foot outdoor cinema nights and 2.67mm LED stages.</p>
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
  const schemaGraph = {
    "@context": "https://schema.org",
    "@graph": [
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
    ],
  };

  const html = `<!doctype html>
<html lang="en">
  <head>
${commonHeadTags({
  title: "About Beantown Audio Rentals | Boston Event Audio & Visual Company",
  description:
    "Meet Beantown Audio Rentals—Boston's trusted audio, lighting, LED video wall, DJ gear & event production partner serving Greater Boston, Massachusetts, and New England.",
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
          <span class="seo-hero-eyebrow">ABOUT BEANTOWN AUDIO RENTALS</span>
          <h1>Reliable Event Technology Across Boston &amp; New England</h1>
          <p class="seo-hero-lead">We built Beantown Audio Rentals around a straightforward standard: clean, commercial-grade audio, lighting, and video gear tested before every show—backed by responsive Boston technicians who keep load-in calm and on schedule.</p>
          <ul class="seo-hero-bullets">
            <li>Pre-tested Shure wireless, QSC, Pioneer DJ, Chauvet &amp; NovaStar LED systems</li>
            <li>Same-week availability &amp; dependable setup windows for hotels, campuses &amp; private venues</li>
            <li>Clear written quotes for pickup, turnkey delivery/setup, or dedicated on-site techs</li>
          </ul>
          <div class="seo-cta-row">
            <a class="btn seo-btn-gold" href="/#rentals">Explore Equipment Catalog <span>→</span></a>
            <a class="btn btn-dark" href="/contact">Contact Our Team <span>↗</span></a>
          </div>
        </section>

        <section class="seo-guide-box">
          <h2>Why Event Planners, Venues &amp; Hosts Trust Beantown</h2>
          <p>From corporate town halls in Boston's Seaport District and university commencements in Cambridge to Back Bay ballroom weddings, outdoor movie nights, and multi-channel silent discos across New England, every rental starts with listening to your room, guest count, and run-of-show.</p>
          <p>Every microphone, powered speaker, projector, LED cabinet, and power cable undergoes bench inspection between events so cables tape flat, wireless channels stay lock-tight, and presentations launch without technical hiccups. Need guidance sizing an acoustic system or checking ballroom ceiling height? Reach us daily at <a href="tel:+19786015473">(978) 601-5473</a> or <a href="mailto:info@beantownaudiorentals.com">info@beantownaudiorentals.com</a>.</p>
          <div class="seo-areas-pill-row">
            <span class="seo-area-pill">Boston Proper</span>
            <span class="seo-area-pill">Cambridge &amp; Somerville</span>
            <span class="seo-area-pill">Brookline &amp; Newton</span>
            <span class="seo-area-pill">North &amp; South Shore MA</span>
            <span class="seo-area-pill">Worcester &amp; Cape Cod</span>
            <span class="seo-area-pill">Providence RI &amp; Southern NH</span>
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
            ${SERVICE_PAGES.slice(0, 8)
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
<html lang="en">
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

function writeSitemap() {
  const today = new Date().toISOString().slice(0, 10);
  const urls = [
    { loc: `${DOMAIN}/`, priority: "1.0", freq: "weekly" },
    { loc: `${DOMAIN}/services`, priority: "0.9", freq: "weekly" },
    { loc: `${DOMAIN}/about`, priority: "0.8", freq: "monthly" },
    { loc: `${DOMAIN}/contact`, priority: "0.8", freq: "monthly" },
    ...SERVICE_PAGES.map((p) => ({
      loc: `${DOMAIN}${p.urlPath}`,
      priority: ["speaker-rentals", "dj-equipment-rentals", "projector-rentals", "cold-sparklers", "indoorledwall"].includes(p.slug) ? "0.9" : "0.8",
      freq: "weekly",
    })),
  ];

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls
  .map(
    (u) => `  <url>
    <loc>${u.loc}</loc>
    <lastmod>${today}</lastmod>
    <changefreq>${u.freq}</changefreq>
    <priority>${u.priority}</priority>
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

ensureSeoStyles();
SERVICE_PAGES.forEach(renderServicePage);
renderServicesDirectory();
renderAboutPage();
renderContactPage();
writeSitemap();
exportHomepageFooterAndCatalogChecks();
console.log(`Built ${SERVICE_PAGES.length + 3} static SEO pages cleanly!`);
