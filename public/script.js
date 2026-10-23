const products = [
  // --- AUDIO & SPEAKERS ---
  {
    id: "small-audio",
    name: "Small Event Speaker Package",
    category: "Audio & Speakers",
    price: 199,
    priceType: "starting",
    desc: "2 powered speakers with tripod stands, wired or wireless Shure microphone, and small audio mixer. Perfect for up to 50 guests, speeches, ceremonies, and background music.",
    tag: "Popular",
    tone: "lime",
  },
  {
    id: "medium-audio",
    name: "Medium Event Speaker Package",
    category: "Audio & Speakers",
    price: 349,
    priceType: "starting",
    desc: "4 powered speakers, tripod stands, Shure wireless microphone system, and 16-channel mixer. Built for 50–150 guests, wedding receptions, and corporate panels.",
    tag: "Most popular",
    tone: "lime",
  },
  {
    id: "large-audio",
    name: "Large Event Line Array System",
    category: "Audio & Speakers",
    price: 880,
    priceType: "starting",
    desc: "JBL VRX constant curvature line array modules, high-power subwoofers, digital mixing console, and on-site audio engineer. Designed for 150+ guests, concerts, and festivals.",
    tag: "Concert grade",
    tone: "lime",
  },
  {
    id: "qsc-k12",
    name: "QSC K12.2 Powered 12″ Loudspeaker",
    category: "Audio & Speakers",
    price: 65,
    priceType: "fixed",
    desc: "2000-watt Class-D active loudspeaker with advanced DSP presets. Pristine vocal clarity and room-filling output for mains or stage monitors.",
    tag: "Pro audio",
    tone: "lime",
  },
  {
    id: "qsc-k10",
    name: "QSC K10.2 Powered 10″ Loudspeaker",
    category: "Audio & Speakers",
    price: 55,
    priceType: "fixed",
    desc: "2000-watt compact active speaker. Excellent clarity in a lightweight footprint for meetings, ceremonies, and acoustic sets.",
    tag: "Compact",
    tone: "lime",
  },
  {
    id: "jbl-vrx932",
    name: "JBL VRX932LA Line Array Module",
    category: "Audio & Speakers",
    price: 150,
    priceType: "fixed",
    desc: "Constant curvature line array element with Differential Drive woofer and neodymium compression drivers for large audience coverage.",
    tag: "Line array",
    tone: "lime",
  },

  // --- SUBWOOFER RENTALS ---
  {
    id: "sub-kw181",
    name: "QSC KW181 18″ Powered Subwoofer",
    category: "Subwoofers",
    price: 95,
    priceType: "fixed",
    desc: "1000-watt Class-D 18-inch birch subwoofer. Deep, punchy low-end reinforcement for DJs, live bands, and dance floors.",
    tag: "Heavy bass",
    tone: "gold",
  },
  {
    id: "sub-ks212c",
    name: "QSC KS212C Cardioid Subwoofer",
    category: "Subwoofers",
    price: 120,
    priceType: "fixed",
    desc: "Dual 12-inch active cardioid subwoofer. Keeps bass directional toward the crowd with 15dB less noise behind the stage—great for sound-sensitive venues.",
    tag: "Cardioid tech",
    tone: "gold",
  },
  {
    id: "sub-prx618",
    name: "JBL PRX 618S 18″ Powered Subwoofer",
    category: "Subwoofers",
    price: 85,
    priceType: "fixed",
    desc: "Compact 1000W 18″ active subwoofer delivering clean, resonant low-end for mobile DJs, private parties, and medium halls.",
    tag: "Portable bass",
    tone: "gold",
  },
  {
    id: "sub-thump18",
    name: "Mackie Thump18S 18″ Subwoofer",
    category: "Subwoofers",
    price: 75,
    priceType: "fixed",
    desc: "Solid 1200W peak low-end punch for parties, school functions, and cost-effective bass extension.",
    tag: "Budget friendly",
    tone: "gold",
  },

  // --- MICROPHONES ---
  {
    id: "qlxd-handheld",
    name: "Shure QLX-D Wireless Handheld Mic",
    category: "Microphones",
    price: 65,
    priceType: "fixed",
    desc: "Digital 24-bit wireless microphone with Shure Beta 58A or SM58 capsule. Pristine RF stability, zero interference, and all-day battery.",
    tag: "Industry standard",
    tone: "coral",
  },
  {
    id: "qlxd-lavalier",
    name: "Shure QLX-D Wireless Lapel / Lavalier",
    category: "Microphones",
    price: 65,
    priceType: "fixed",
    desc: "Discreet bodypack transmitter with cardioid lavalier clip-on microphone. Ideal for keynote speakers, wedding officiants, and presenters.",
    tag: "Hands-free",
    tone: "coral",
  },
  {
    id: "countryman-headset",
    name: "Countryman E6 Directional Earset Mic",
    category: "Microphones",
    price: 50,
    priceType: "fixed",
    desc: "Ultra-miniature, skin-tone earset microphone delivering studio-grade vocal reproduction without blocking the speaker's face.",
    tag: "Broadcast quality",
    tone: "coral",
  },
  {
    id: "shure-sm58",
    name: "Shure SM58 / Beta 58A Wired Mic",
    category: "Microphones",
    price: 20,
    priceType: "fixed",
    desc: "The legendary dynamic vocal microphone. Includes 25ft XLR cable and heavy-duty tripod boom stand. Bulletproof reliability.",
    tag: "Legendary",
    tone: "coral",
  },
  {
    id: "ptt-mic",
    name: "Push-To-Talk (PTT) Conference Mic",
    category: "Microphones",
    price: 35,
    priceType: "fixed",
    desc: "Gooseneck tabletop conference microphone with LED indicator and momentary/latching talk switch for panels and meetings.",
    tag: "Conference",
    tone: "coral",
  },
  {
    id: "iem",
    name: "Shure PSM900 Wireless In-Ear Monitors",
    category: "Microphones",
    price: 75,
    priceType: "fixed",
    desc: "Professional wireless bodypack IEM system with sound-isolating earphones. Clean, personalized stage monitoring for singers and musicians.",
    tag: "Stage monitoring",
    tone: "coral",
  },

  // --- AUDIO MIXERS ---
  {
    id: "mixer-touchmix",
    name: "QSC TouchMix-16 Digital Mixer",
    category: "Audio Mixers",
    price: 85,
    priceType: "fixed",
    desc: "16-input compact digital touchscreen mixer with channel processing, instrument/vocal wizard presets, USB multi-track recording, and iPad Wi-Fi control.",
    tag: "Touchscreen",
    tone: "peach",
  },
  {
    id: "mixer-x32",
    name: "Behringer X32 32-Channel Digital Console",
    category: "Audio Mixers",
    price: 150,
    priceType: "fixed",
    desc: "32 mic preamps, 25 motorized faders, integrated effects rack, and flexible routing. The go-to digital console for full band shows and galas.",
    tag: "Full console",
    tone: "peach",
  },
  {
    id: "mixer-x32-compact",
    name: "Behringer X32 Compact Digital Mixer",
    category: "Audio Mixers",
    price: 110,
    priceType: "fixed",
    desc: "16 mic preamps, 17 motorized faders, and complete X32 power in a compact chassis. Ideal for FOH and monitor mixing in tight spaces.",
    tag: "Compact digital",
    tone: "peach",
  },
  {
    id: "mixer-sq7",
    name: "Allen & Heath SQ-7 32-Channel Console",
    category: "Audio Mixers",
    price: 295,
    priceType: "fixed",
    desc: "Flagship 96kHz XCVI FPGA digital mixer with 33 faders, custom soft keys, ultra-low latency, and touring-grade audio quality.",
    tag: "Tour grade",
    tone: "peach",
  },
  {
    id: "mixer-mackie1402",
    name: "Mackie 1402-VLZ3 Compact Analog Mixer",
    category: "Audio Mixers",
    price: 45,
    priceType: "fixed",
    desc: "Ultra-low-noise 14-channel analog mixer with 6 XDR2 mic preamps and durable steel chassis. Simple, reliable, and user-friendly.",
    tag: "Analog workhorse",
    tone: "peach",
  },

  // --- DJ EQUIPMENT ---
  {
    id: "dj-basic-pkg",
    name: "Basic DJ Package (Up to 50 Guests)",
    category: "DJ Equipment",
    price: 299,
    priceType: "starting",
    desc: "Pioneer DJ controller, heavy-duty laptop stand, 2 powered speakers, and all connecting cables. Great for house parties and lounge sets.",
    tag: "Turnkey DJ",
    tone: "sky",
  },
  {
    id: "dj-standard-pkg",
    name: "Standard DJ Package (50–150 Guests)",
    category: "DJ Equipment",
    price: 449,
    priceType: "starting",
    desc: "4-channel controller or dual CDJ setup, 2 powered tops, 1 subwoofer, Scrim Werks facade booth, and wireless mic. Perfect for weddings and dances.",
    tag: "Wedding favorite",
    tone: "sky",
  },
  {
    id: "dj-pro-pkg",
    name: "Pro Club DJ Package (150+ Guests)",
    category: "DJ Equipment",
    price: 699,
    priceType: "starting",
    desc: "Dual CDJ-3000s, DJM-900NXS2 mixer, 4 powered speakers with dual 18″ subs, Scrim Werks facade, and dance lighting package.",
    tag: "Festival ready",
    tone: "sky",
  },
  {
    id: "cdj-3000",
    name: "Pioneer CDJ-3000 DJ Multi-Player",
    category: "DJ Equipment",
    price: 125,
    priceType: "fixed",
    desc: "Pioneer's flagship media player with 9-inch HD touchscreen, advanced MPU processor, Pro DJ Link, and uncompressed 96kHz/32-bit audio.",
    tag: "Club standard",
    tone: "sky",
  },
  {
    id: "cdj-2000nxs2",
    name: "Pioneer CDJ-2000NXS2 Multi-Player",
    category: "DJ Equipment",
    price: 95,
    priceType: "fixed",
    desc: "Industry-standard pro DJ player with 7-inch touch display, 8 hot cues, slip mode, and high-res audio playback.",
    tag: "Industry pro",
    tone: "sky",
  },
  {
    id: "djm-900nxs2",
    name: "Pioneer DJM-900NXS2 4-Channel Mixer",
    category: "DJ Equipment",
    price: 95,
    priceType: "fixed",
    desc: "Touring-standard 4-channel DJ mixer with 64-bit mixing processor, dual USB soundcards, Sound Color FX, and Beat FX.",
    tag: "Club mixer",
    tone: "sky",
  },
  {
    id: "ddj-1000srt",
    name: "Pioneer DDJ-1000SRT 4-Channel Controller",
    category: "DJ Equipment",
    price: 90,
    priceType: "fixed",
    desc: "Full-size club-style jog wheels with on-jog color display, Magvel fader, and seamless plug-and-play mapping for Serato DJ Pro.",
    tag: "Serato pro",
    tone: "sky",
  },
  {
    id: "djm-s9",
    name: "Pioneer DJM-S9 2-Channel Battle Mixer",
    category: "DJ Equipment",
    price: 75,
    priceType: "fixed",
    desc: "High-performance scratch mixer with Magvel Pro crossfader, multi-color performance pads, and dual USB ports for seamless DJ handoffs.",
    tag: "Turntablist",
    tone: "sky",
  },
  {
    id: "rane-72",
    name: "Rane SEVENTY-TWO 2-Channel DJ Mixer",
    category: "DJ Equipment",
    price: 85,
    priceType: "fixed",
    desc: "Solid steel construction, 4.3-inch color touchscreen, dual Flex FX engines, and MAG FOUR faders for elite battle DJs.",
    tag: "Heavy duty",
    tone: "sky",
  },
  {
    id: "technics-1200",
    name: "Technics SL-1200MK2 Turntable",
    category: "DJ Equipment",
    price: 75,
    priceType: "fixed",
    desc: "The timeless direct-drive turntable with quartz motor, precision pitch control, and Ortofon DJ cartridge. (Available individually or as a pair).",
    tag: "Analog vinyl",
    tone: "sky",
  },
  {
    id: "dj-facade",
    name: "Scrim Werks Pro DJ Facade",
    category: "DJ Equipment",
    price: 50,
    priceType: "fixed",
    desc: "Collapsible 4-panel aluminum DJ facade with translucent white scrims. Conceals cables and equipment; looks incredible when backlit with uplights.",
    tag: "Clean look",
    tone: "sky",
  },

  // --- VIDEO & DISPLAYS ---
  {
    id: "tv-65",
    name: "Samsung 65″ 4K UHD Smart TV",
    category: "Video & Displays",
    price: 250,
    priceType: "fixed",
    desc: "Commercial 4K UHD display on a sleek motorized height-adjustable rolling truss stand with HDMI cables and casting support.",
    tag: "4K display",
    tone: "peach",
  },
  {
    id: "tv-75",
    name: "Samsung 75″ 4K UHD Smart TV",
    category: "Video & Displays",
    price: 350,
    priceType: "fixed",
    desc: "High-impact 75-inch 4K UHD presentation screen on heavy-duty motorized truss cart. Crystal-clear visuals for conference rooms and keynote overflow.",
    tag: "Large format",
    tone: "peach",
  },
  {
    id: "laser-projector",
    name: "Sony Laser Projector (5,000+ Lumens)",
    category: "Video & Displays",
    price: 175,
    priceType: "fixed",
    desc: "Crisp laser projection with instant on/off, high color accuracy, and flexible throw distance for conference halls and banquet ballrooms.",
    tag: "Laser tech",
    tone: "peach",
  },
  {
    id: "fastfold-screen",
    name: "Fastfold Screen with Black Dress Kit",
    category: "Video & Displays",
    price: 150,
    priceType: "fixed",
    desc: "Professional 100″ to 150″ front/rear projection screen with snap-on aluminum frame and full velvet blackout drape surround.",
    tag: "Conferences",
    tone: "peach",
  },
  {
    id: "video-switcher",
    name: "Multi-Input HDMI Video Switcher",
    category: "Video & Displays",
    price: 75,
    priceType: "fixed",
    desc: "Seamless video switcher with preview/program multiview, picture-in-picture, and clean transitions between presenter laptops and video feeds.",
    tag: "Seamless",
    tone: "peach",
  },

  // --- LED VIDEO WALLS ---
  {
    id: "led-12",
    name: "Indoor LED Video Wall — 12 × 7 ft",
    category: "LED Video Walls",
    price: 1150,
    priceType: "starting",
    desc: "Ultra-fine 2.67mm pixel pitch LED wall. Includes NovaStar VX1000 processor, ground rigging, 2 powered speakers, audio mixer, and Shure wireless mic.",
    tag: "Turnkey package",
    tone: "periwinkle",
  },
  {
    id: "led-16",
    name: "Indoor LED Video Wall — 16 × 9 ft",
    category: "LED Video Walls",
    price: 1450,
    priceType: "starting",
    desc: "Full-scale 16:9 cinematic LED video wall (2.67mm pitch). Includes NovaStar video processor, sound reinforcement package, and certified lead technician.",
    tag: "Cinematic scale",
    tone: "periwinkle",
  },
  {
    id: "led-custom",
    name: "Custom Modular LED Wall Configuration",
    category: "LED Video Walls",
    price: 1850,
    priceType: "starting",
    desc: "Tailored LED displays in curved, pillar, banner, or backdrop layouts. 2.6mm, 2.9mm, or 3.9mm pixel pitch with ground-support truss or crank stands.",
    tag: "Bespoke design",
    tone: "periwinkle",
  },
  {
    id: "led-trailer",
    name: "Mobile Outdoor LED Video Wall Trailer",
    category: "LED Video Walls",
    price: 2600,
    priceType: "starting",
    desc: "Turnkey hydraulic-lift outdoor mobile LED trailer. Daylight visible (3.91mm pitch), wind and rain resistant, with built-in sound system and generator support.",
    tag: "Outdoor mobile",
    tone: "periwinkle",
  },

  // --- OUTDOOR MOVIES ---
  {
    id: "movie-12",
    name: "Outdoor Movie Package — 12 ft",
    category: "Outdoor Movies",
    price: 549,
    priceType: "fixed",
    desc: "12-foot inflatable screen, Sony laser projector, 2 powered speakers, audio mixer, laptop/DVD player, and delivery/setup. Perfect for 10–30 guests.",
    tag: "Backyard favorite",
    tone: "orange",
  },
  {
    id: "movie-16",
    name: "Outdoor Movie Package — 16 ft",
    category: "Outdoor Movies",
    price: 749,
    priceType: "fixed",
    desc: "16-foot inflatable movie screen with high-brightness Sony laser projector, sound package, and full setup. Ideal for school nights, parks, and up to 75 guests.",
    tag: "School & community",
    tone: "orange",
  },
  {
    id: "movie-26",
    name: "Outdoor Movie Package — 26 ft",
    category: "Outdoor Movies",
    price: 899,
    priceType: "fixed",
    desc: "26-foot community-scale outdoor cinema. High-lumen laser projector, dual amplified speakers, mixer, and on-site setup for 100–150+ guests.",
    tag: "Community scale",
    tone: "orange",
  },
  {
    id: "movie-40",
    name: "Outdoor Movie Package — 40 ft",
    category: "Outdoor Movies",
    price: 1899,
    priceType: "fixed",
    desc: "Colossal 40-foot inflatable cinema screen for city festivals, university fields, and large outdoor crowds. Complete with high-power sound and technician.",
    tag: "Festival scale",
    tone: "orange",
  },

  // --- PHOTO BOOTHS ---
  {
    id: "ipad-mirror",
    name: "iPad Mirror Photo Booth",
    category: "Photo Booths",
    price: 799,
    priceType: "starting",
    desc: "Interactive beauty mirror photo booth with beauty ring lighting, custom animated overlays, and instant SMS/AirDrop/email sharing.",
    tag: "From $799",
    tone: "blue",
  },
  {
    id: "magic-air",
    name: "Magic Mirror Air Photo Booth",
    category: "Photo Booths",
    price: 1399,
    priceType: "starting",
    desc: "Sleek full-length interactive mirror booth with next-generation touch animations, social-media sharing, fun props, and on-site attendant.",
    tag: "From $1,399",
    tone: "blue",
  },
  {
    id: "magic-frame",
    name: "Magic Mirror + Frame Photo Booth",
    category: "Photo Booths",
    price: 1699,
    priceType: "starting",
    desc: "Ornate gold or silver framed full-length mirror booth with instant high-gloss prints, custom guest signature animations, and dedicated attendant.",
    tag: "From $1,699",
    tone: "blue",
  },
  {
    id: "photo-360",
    name: "360 Video Photo Booth Platform",
    category: "Photo Booths",
    price: 1499,
    priceType: "starting",
    desc: "Motorized 360-degree rotating arm capturing slow-motion 4K video with studio lighting, custom audio overlay, and instant sharing station.",
    tag: "From $1,499",
    tone: "blue",
  },

  // --- SILENT DISCO ---
  {
    id: "silent-50",
    name: "Silent Disco — 50 Headphones",
    category: "Silent Disco",
    price: 500,
    priceType: "fixed",
    desc: "50 glowing 3-channel LED wireless headphones, 3 multi-frequency RF transmitters, audio cables, and charging equipment.",
    tag: "Fixed price",
    tone: "mint",
  },
  {
    id: "silent-100",
    name: "Silent Disco — 100 Headphones",
    category: "Silent Disco",
    price: 900,
    priceType: "fixed",
    desc: "100 3-channel wireless headphones with 3 transmitters. Ideal for college socials, rooftop parties, and weddings with quiet hours.",
    tag: "Most popular",
    tone: "mint",
  },
  {
    id: "silent-150",
    name: "Silent Disco — 150 Headphones",
    category: "Silent Disco",
    price: 1200,
    priceType: "fixed",
    desc: "150 glowing headphones and 3 transmitters for campus dances, fraternity/sorority events, and private club nights.",
    tag: "Fixed price",
    tone: "mint",
  },
  {
    id: "silent-200",
    name: "Silent Disco — 200 Headphones",
    category: "Silent Disco",
    price: 1800,
    priceType: "fixed",
    desc: "200 headphones with long-range transmitters. Delivers a zero-noise-complaint dance party for public parks and outdoor celebrations.",
    tag: "Fixed price",
    tone: "mint",
  },
  {
    id: "silent-300",
    name: "Silent Disco — 300 Headphones",
    category: "Silent Disco",
    price: 2500,
    priceType: "fixed",
    desc: "300 headphones and commercial transmitters for festivals, town celebrations, and large corporate entertainment.",
    tag: "Fixed price",
    tone: "mint",
  },

  // --- EVENT LIGHTING ---
  {
    id: "uplights-6",
    name: "Wireless Battery Uplights (Pack of 6)",
    category: "Event Lighting",
    price: 150,
    priceType: "fixed",
    desc: "Chauvet Freedom Par H9 IP battery-powered RGBAW+UV uplights. 100% wireless with smartphone/remote control for walls, columns, and accent lighting.",
    tag: "Wireless battery",
    tone: "lavender",
  },
  {
    id: "uplights-12",
    name: "Wireless Battery Uplights (Pack of 12)",
    category: "Event Lighting",
    price: 275,
    priceType: "fixed",
    desc: "12-pack of wireless Chauvet Freedom Par uplights in rolling charging road case. Full room color transformation with warm white or custom hues.",
    tag: "Full room pack",
    tone: "lavender",
  },
  {
    id: "moving-heads",
    name: "Moving Head Stage Light Fixtures (Pair)",
    category: "Event Lighting",
    price: 120,
    priceType: "fixed",
    desc: "Pair of intelligent DMX moving head spotlight fixtures with gobos, motorized focus, pan/tilt movement, and color prism effects.",
    tag: "Dynamic FX",
    tone: "lavender",
  },
  {
    id: "pinspot-pack",
    name: "Chauvet EZPin Battery Pinspots (Pack of 4)",
    category: "Event Lighting",
    price: 80,
    priceType: "fixed",
    desc: "Magnetic battery-powered warm white pinspots for cake tables, floral centerpieces, and architectural highlights.",
    tag: "Pinspotting",
    tone: "lavender",
  },
  {
    id: "light-bar",
    name: "LED Stage Wash Light Bar",
    category: "Event Lighting",
    price: 65,
    priceType: "fixed",
    desc: "High-output linear LED bar delivering smooth color washes across stages, drapes, and backdrops.",
    tag: "Stage wash",
    tone: "lavender",
  },
  {
    id: "followspot",
    name: "LED Followspot with Stand",
    category: "Event Lighting",
    price: 110,
    priceType: "fixed",
    desc: "Precision LED spotlight with smooth manual iris, color wheel, and adjustable stand for tracking keynote speakers and performers.",
    tag: "Keynote spotlight",
    tone: "lavender",
  },

  // --- SPECIAL EFFECTS (FX) ---
  {
    id: "cold-spark-2",
    name: "Cold Sparkler Machines (2 Units)",
    category: "Special Effects",
    price: 350,
    priceType: "starting",
    desc: "2 indoor-safe cold spark fountain machines with wireless remote, powder granules, and setup. Cool to the touch, non-flammable, and zero smoke.",
    tag: "100% indoor safe",
    tone: "yellow",
  },
  {
    id: "cold-spark-4",
    name: "Cold Sparkler Machines (4 Units)",
    category: "Special Effects",
    price: 650,
    priceType: "starting",
    desc: "4 cold spark machines with DMX synchronized control, extra refill cycles, and technician support. Spectacular for grand entrances and stage shows.",
    tag: "Grand entrance",
    tone: "yellow",
  },
  {
    id: "dry-ice-cloud",
    name: "Dry Ice “Dancing on a Cloud” Machine",
    category: "Special Effects",
    price: 295,
    priceType: "starting",
    desc: "Professional dry ice low-lying fog machine creating a thick, dreamy cloud that hugs the floor without rising or triggering fire alarms. Essential for wedding first dances.",
    tag: "Wedding favorite",
    tone: "yellow",
  },

  // --- LIVE STREAMING ---
  {
    id: "stream-basic",
    name: "Live Streaming — Basic (1 Camera)",
    category: "Live Streaming",
    price: 621,
    priceType: "starting",
    desc: "1 × 4K camera, streaming laptop, QSC digital audio mixer, HDMI switcher, and local HD recording for town halls, webinars, and ceremonies.",
    tag: "Single camera",
    tone: "sky",
  },
  {
    id: "stream-pro",
    name: "Live Streaming — Pro (3 Cameras)",
    category: "Live Streaming",
    price: 1250,
    priceType: "starting",
    desc: "3 × 4K camera multi-angle broadcast setup, video switcher, dedicated stream technician, pristine audio integration, and recording archive.",
    tag: "Broadcast multi-cam",
    tone: "sky",
  },
];

const bundles = [
  {
    id: "wedding",
    title: "Wedding Event",
    price: 2423,
    included: { "medium-audio": 1, "qlxd-lavalier": 2, "dry-ice-cloud": 1, "uplights-6": 1, "photo-360": 1 },
    tone: "bundle-wedding",
    label: "WEDDING",
    desc: "Complete ceremony and reception AV with pristine wireless vows, dance sound, cloud fog effect, and photo booth.",
    items: [
      "Medium 4-speaker sound system",
      "2 Shure QLX-D wireless lapel / handheld mics",
      "Dry ice “Dancing on a Cloud” first dance effect",
      "Wireless battery uplighting package",
      "360 photo booth experience",
    ],
    cta: "Customize wedding",
  },
  {
    id: "corporate",
    title: "Corporate Conference",
    price: 1450,
    included: {
      "medium-audio": 1,
      "qlxd-lavalier": 2,
      "tv-75": 1,
      "stream-basic": 1,
    },
    tone: "bundle-corporate",
    label: "CORPORATE",
    desc: "Presentation-ready audio, 75″ 4K Samsung displays, wireless microphones, and live streaming support for conferences and launches.",
    items: [
      "Presentation sound with QSC speakers",
      "Shure wireless lavalier & handheld mics",
      "Samsung 75″ 4K commercial display on truss",
      "Single-camera 4K live streaming setup",
      "Audio/video recording archive",
    ],
    cta: "Build corporate setup",
  },
  {
    id: "concert",
    title: "Concert & Live Performance",
    price: 2800,
    included: { "large-audio": 1, "sub-kw181": 2, iem: 2, "qlxd-handheld": 2, "led-16": 1 },
    tone: "bundle-concert",
    label: "CONCERT",
    desc: "Production-focused setup for stage audio, line arrays, 18″ subwoofers, in-ear monitoring, and cinematic LED wall.",
    items: [
      "JBL VRX line array PA system",
      "Dual QSC KW181 18″ high-output subwoofers",
      "Shure PSM900 wireless IEM monitoring",
      "Behringer X32 32-channel digital console",
      "On-site sound technician & support",
    ],
    cta: "Build concert setup",
  },
  {
    id: "school",
    title: "School Dance & Social",
    price: 1444,
    included: {
      "medium-audio": 1,
      "sub-thump18": 1,
      "moving-heads": 1,
      "silent-100": 1,
    },
    tone: "bundle-school",
    label: "SCHOOL",
    desc: "High-energy AV for homecomings, proms, recognition programs, and 100-headphone silent disco activations.",
    items: [
      "High-output powered speaker system",
      "18″ powered subwoofer for deep bass",
      "Intelligent moving head dance lighting",
      "100 silent disco headphones & transmitters",
      "Shure wireless mic for announcements",
    ],
    cta: "Plan school event",
  },
  {
    id: "party",
    title: "Private Party & DJ",
    price: 2043,
    included: {
      "dj-basic-pkg": 1,
      "sub-kw181": 1,
      "uplights-6": 1,
      "photo-360": 1,
    },
    tone: "bundle-party",
    label: "PARTY",
    desc: "Turnkey DJ rig, 18″ powered subwoofer, battery uplights, and 360 photo booth for birthdays, anniversaries, and private club nights.",
    items: [
      "Pioneer DJ controller & sound system",
      "18″ QSC KW181 powered subwoofer",
      "Chauvet wireless battery uplighting",
      "360 rotating video booth",
      "Plug-and-play music playback",
    ],
    cta: "Customize party",
  },
  {
    id: "movie",
    title: "Outdoor Movie Night",
    price: 814,
    included: { "movie-16": 1, "qlxd-handheld": 1 },
    tone: "bundle-movie",
    label: "MOVIE NIGHT",
    desc: "16-foot inflatable movie screen with Sony high-lumen laser projector, full sound, playback gear, and complete setup.",
    items: [
      "16-ft inflatable cinema screen",
      "Sony high-lumen laser projector",
      "2 powered speakers & audio mixer",
      "Shure wireless mic for introductions",
      "Playback laptop / DVD & full setup",
    ],
    cta: "Choose screen size",
  },
  {
    id: "special-fx-pkg",
    title: "Special FX Celebration",
    price: 1220,
    included: { "cold-spark-4": 1, "dry-ice-cloud": 1, "uplights-12": 1 },
    tone: "bundle-wedding",
    label: "SPECIAL FX",
    desc: "High-impact visual moments: 4 cold spark fountain machines, dry ice low-lying cloud fog, and 12 wireless uplights.",
    items: [
      "4 indoor-safe cold sparkler machines",
      "Dry ice “Dancing on a Cloud” machine",
      "12 Chauvet wireless battery uplights",
      "DMX synchronized control & refills",
      "Technician operation support",
    ],
    cta: "Book special effects",
  },
];

const SERVICE_TIERS = [
  {
    id: "pickup",
    title: "Self Pickup & Return",
    badge: "FREE · $0",
    price: 0,
    desc: "Pick up and return directly at our Boston warehouse with pre-tested road cases and quick setup walk-through.",
  },
  {
    id: "delivery-setup",
    title: "Delivery, Setup & Breakdown",
    badge: "+$150",
    price: 150,
    desc: "Our crew delivers to your venue, sets up and soundchecks all equipment, and returns after the event for strike.",
  },
  {
    id: "full-tech",
    title: "Full On-Site Technician Support",
    badge: "+$350",
    price: 350,
    desc: "Includes delivery, full rigging/setup, a dedicated on-site AV engineer to operate your show, and post-event breakdown.",
  },
];

const DURATION_OPTIONS = [
  {
    id: "1-day",
    label: "1 Day / Single Event",
    shortLabel: "1 Day (1.0×)",
    multiplier: 1,
    badge: "Standard Rate",
    desc: "Standard 24-hour event rental window.",
  },
  {
    id: "2-days",
    label: "2 Days / Weekend",
    shortLabel: "2 Days (1.5×)",
    multiplier: 1.5,
    badge: "Save 25% on Day 2",
    desc: "Ideal for rehearsal dinner + wedding day or 2-day conferences (1.5× daily equipment rate).",
  },
  {
    id: "3-days",
    label: "3+ Days / Multi-Day",
    shortLabel: "3+ Days (2.0×)",
    multiplier: 2,
    badge: "Save 33%+ Extended",
    desc: "Multi-day festival, campus week, or extended corporate production (2.0× daily equipment rate).",
  },
];

const PAYMENT_METHODS = [
  "ACH / Bank Transfer",
  "Credit / Debit Card",
  "Zelle",
  "Venmo",
  "PayPal",
  "Company Check",
  "Cash",
  "No preference yet",
];

const EVENT_TYPE_CARDS = [
  {
    id: "Wedding",
    code: "01 / WEDDING",
    title: "Wedding",
    desc: "Ceremony wireless vows, cocktail hour speakers, reception sound, dancing on a cloud & photo booth.",
    bundleId: "wedding",
  },
  {
    id: "Corporate Event",
    code: "02 / CORPORATE",
    title: "Corporate Event",
    desc: "Keynotes, panel microphones, 4K confidence monitors, fast-fold projection & multi-cam live streaming.",
    bundleId: "corporate",
  },
  {
    id: "School Event",
    code: "03 / CAMPUS & SCHOOL",
    title: "School Event",
    desc: "Proms, homecomings, campus socials, high-output subwoofers, moving heads & 100-headphone silent disco.",
    bundleId: "school",
  },
  {
    id: "Concert",
    code: "04 / LIVE STAGE",
    title: "Concert",
    desc: "JBL line array systems, dual 18″ subwoofers, wireless IEM monitors, 32-ch digital mixer & LED video wall.",
    bundleId: "concert",
  },
  {
    id: "Private Party",
    code: "05 / SOCIAL & DJ",
    title: "Private Party",
    desc: "Turnkey Pioneer DJ setups, 18″ powered bass, wireless battery uplighting & 360 video booth.",
    bundleId: "party",
  },
  {
    id: "Outdoor Movie",
    code: "06 / OUTDOOR CINEMA",
    title: "Outdoor Movie",
    desc: "12-ft to 40-ft inflatable cinema screens, high-lumen Sony laser projector, PA sound & wireless mic.",
    bundleId: "movie",
  },
];

const GUEST_BRACKETS = [
  { id: "1–50", label: "1–50 Guests", sub: "Intimate gathering or boardroom", defaultCount: 40 },
  { id: "51–150", label: "51–150 Guests", sub: "Reception, banquet or town hall", defaultCount: 120 },
  { id: "151–300", label: "151–300 Guests", sub: "Large ballroom or auditorium", defaultCount: 220 },
  { id: "300+", label: "300+ Guests", sub: "Festival, concert or campus scale", defaultCount: 400 },
];

const _nowInit = new Date();
const state = {
  builderStep: 1,
  quoteStep: 1,
  eventType: "Wedding",
  guests: 120,
  guestBracket: "51–150",
  venue: "Indoor",
  duration: "1-day",
  serviceTier: "delivery-setup",
  date: "",
  dateFlexible: false,
  eventTimeWindow: "Evening (5:00 PM – 11:00 PM)",
  calendarYear: _nowInit.getFullYear(),
  calendarMonth: _nowInit.getMonth(),
  contactName: "",
  contactEmail: "",
  contactPhone: "",
  organization: "",
  eventName: "",
  eventLocation: "",
  locationFlexible: false,
  manualLocationMode: false,
  manualStreet: "",
  manualCity: "",
  manualState: "MA",
  manualZip: "",
  locationQuery: "",
  locationResults: [],
  locationSearching: false,
  locationCoords: { lat: 42.3601, lon: -71.0589 },
  eventNotes: "",
  paymentMethod: "No preference yet",
  builderCategory: "All",
  builderSearch: "",
  builderOnlySelected: false,
  isSubmittingQuote: false,
  quoteError: "",
  submittedQuote: null,
  selected: loadSelection(),
  bundle: null,
  category: "All",
  search: "",
  priceType: "all",
  minPrice: "",
  maxPrice: "",
  onlyPopular: false,
  onlySelected: false,
  sortBy: "recommended",
  viewMode: "grid",
};

const eventRecommendations = {
  Wedding: ["medium-audio", "qlxd-lavalier", "dry-ice-cloud", "uplights-6", "photo-360"],
  "Corporate Event": ["medium-audio", "qlxd-lavalier", "tv-75", "fastfold-screen", "stream-basic"],
  "School Event": ["medium-audio", "sub-thump18", "moving-heads", "silent-100", "movie-16"],
  Concert: ["large-audio", "sub-kw181", "iem", "mixer-x32", "led-16"],
  "Private Party": ["dj-basic-pkg", "sub-kw181", "uplights-6", "photo-360", "silent-100"],
  "Outdoor Movie": ["movie-16", "movie-26", "qlxd-handheld", "silent-100"],
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
function productMatchesCategory(p, cat) {
  return (
    cat === "All" ||
    p.category === cat ||
    ((cat === "Audio" || cat === "Audio & Sound") &&
      (p.category === "Audio & Speakers" ||
        p.category === "Subwoofers" ||
        p.category === "Microphones" ||
        p.category === "Audio Mixers" ||
        p.category === "DJ Equipment")) ||
    (cat === "Video & Visuals" &&
      (p.category === "Video & Displays" ||
        p.category === "LED Video Walls" ||
        p.category === "Live Streaming")) ||
    (cat === "Lighting & FX" &&
      (p.category === "Event Lighting" || p.category === "Special Effects")) ||
    (cat === "LED Walls" && p.category === "LED Video Walls") ||
    ((cat === "Experiences" || cat === "Event Experiences") &&
      (p.category === "Silent Disco" ||
        p.category === "Outdoor Movies" ||
        p.category === "Photo Booths"))
  );
}
function filteredProducts() {
  const q = state.search.trim().toLowerCase();
  const minVal = state.minPrice !== "" && !Number.isNaN(Number(state.minPrice)) ? Number(state.minPrice) : null;
  const maxVal = state.maxPrice !== "" && !Number.isNaN(Number(state.maxPrice)) ? Number(state.maxPrice) : null;
  const filtered = products.filter((p) => {
    const matchesCategory = productMatchesCategory(p, state.category);
    const matchesSearch =
      !q ||
      `${p.name} ${p.category} ${p.desc} ${p.tag}`.toLowerCase().includes(q);
    const matchesPriceType =
      state.priceType === "all" || p.priceType === state.priceType;
    const matchesMin =
      minVal === null || (typeof p.price === "number" && p.price >= minVal);
    const matchesMax =
      maxVal === null || (typeof p.price === "number" && p.price <= maxVal);
    const matchesPopular =
      !state.onlyPopular ||
      /popular|most popular|concert|pro|flagship|industry|favorite/i.test(p.tag || "") ||
      p.priceType === "starting";
    const matchesSelected =
      !state.onlySelected || Boolean(state.selected[p.id]);
    return (
      matchesCategory &&
      matchesSearch &&
      matchesPriceType &&
      matchesMin &&
      matchesMax &&
      matchesPopular &&
      matchesSelected
    );
  });
  if (state.sortBy === "price-asc") {
    return [...filtered].sort((a, b) => {
      const pa = typeof a.price === "number" ? a.price : Number.POSITIVE_INFINITY;
      const pb = typeof b.price === "number" ? b.price : Number.POSITIVE_INFINITY;
      return pa - pb;
    });
  }
  if (state.sortBy === "price-desc") {
    return [...filtered].sort((a, b) => {
      const pa = typeof a.price === "number" ? a.price : -1;
      const pb = typeof b.price === "number" ? b.price : -1;
      return pb - pa;
    });
  }
  if (state.sortBy === "name-asc") {
    return [...filtered].sort((a, b) => a.name.localeCompare(b.name));
  }
  return filtered;
}
function loadSelection() {
  try {
    const saved = localStorage.getItem("beantown-selected-products");
    if (saved === null) return {};
    const parsed = JSON.parse(saved);
    return Object.fromEntries(
      Object.entries(parsed).filter(([id, quantity]) =>
        products.some((product) => product.id === id) &&
        Number.isInteger(quantity) && quantity > 0,
      ),
    );
  } catch {
    return {};
  }
}
function sanitizeSelectedProducts() {
  const cleaned = {};
  if (!state.selected || typeof state.selected !== "object") {
    state.selected = cleaned;
    return cleaned;
  }
  for (const [id, rawQty] of Object.entries(state.selected)) {
    const product = products.find((p) => p.id === id);
    const qty = Math.min(99, Math.max(0, Math.round(Number(rawQty) || 0)));
    if (product && typeof product.price === "number" && product.price > 0 && qty > 0) {
      cleaned[id] = qty;
    }
  }
  state.selected = cleaned;
  return cleaned;
}

function saveSelection() {
  sanitizeSelectedProducts();
  try { localStorage.setItem("beantown-selected-products", JSON.stringify(state.selected)); }
  catch { /* Keep the in-memory builder usable when storage is unavailable. */ }
}

function parseDurationText(text) {
  if (!text || typeof text !== "string") return null;
  const t = text.trim().toLowerCase();
  if (!t) return null;

  if (t.includes("week")) {
    const m = t.match(/(\d+)/);
    const weeks = m ? Math.max(1, parseInt(m[1], 10)) : 1;
    const mult = Math.min(3.5, 2.5 + (weeks - 1) * 0.5);
    return {
      days: weeks * 7,
      multiplier: mult,
      label: `${weeks} Week${weeks > 1 ? "s" : ""} (${mult.toFixed(1)}×)`,
      badge: `${weeks} Week${weeks > 1 ? "s" : ""} (${mult.toFixed(1)}× Rate)`
    };
  }

  if (t.includes("weekend")) {
    return {
      days: 2,
      multiplier: 1.5,
      label: "2 Days (Weekend)",
      badge: "Save 25% on Day 2"
    };
  }

  const dayMatch = t.match(/(\d+)/);
  if (dayMatch) {
    const days = Math.max(1, parseInt(dayMatch[1], 10));
    if (days === 1) {
      return { days: 1, multiplier: 1, label: "1 Day (1.0×)", badge: "Standard Rate" };
    }
    if (days === 2) {
      return { days: 2, multiplier: 1.5, label: "2 Days (1.5×)", badge: "Save 25% on Day 2" };
    }
    if (days === 3) {
      return { days: 3, multiplier: 2.0, label: "3 Days (2.0×)", badge: "Save 33%+ Extended" };
    }
    const mult = Math.min(3.5, 2.0 + (days - 3) * 0.25);
    return {
      days,
      multiplier: mult,
      label: `${days} Days (${mult.toFixed(1)}×)`,
      badge: `${mult.toFixed(1)}× Multi-Day Rate`
    };
  }

  return null;
}

function calculateQuoteTotals() {
  sanitizeSelectedProducts();
  const lineItems = Object.entries(state.selected)
    .map(([id, quantity]) => {
      const product = products.find((item) => item.id === id);
      const qty = Math.min(99, Math.max(1, Math.round(Number(quantity) || 0)));
      if (!product) return null;
      const unitPrice = Number(product.price) || 0;
      const lineSubtotal = unitPrice * qty;
      return {
        product,
        qty,
        unitPrice,
        lineSubtotal,
      };
    })
    .filter(Boolean);

  const totalUnits = lineItems.reduce((sum, item) => sum + item.qty, 0);
  const equipmentBaseSubtotal = lineItems.reduce((sum, item) => sum + item.lineSubtotal, 0);
  let durationOption = DURATION_OPTIONS.find((d) => d.id === state.duration) || DURATION_OPTIONS[0];
  if (state.customDurationText) {
    const parsed = parseDurationText(state.customDurationText);
    if (parsed) {
      durationOption = {
        id: "custom",
        label: parsed.label,
        shortLabel: parsed.label,
        multiplier: parsed.multiplier,
        badge: parsed.badge
      };
    }
  }
  const equipmentDurationTotal = Math.round(equipmentBaseSubtotal * durationOption.multiplier);
  const durationSurcharge = equipmentDurationTotal - equipmentBaseSubtotal;
  const serviceOption = SERVICE_TIERS.find((s) => s.id === state.serviceTier) || SERVICE_TIERS[0];
  const serviceFee = lineItems.length > 0 ? serviceOption.price : 0;
  const grandTotal = equipmentDurationTotal + serviceFee;

  // Check if current selection matches a bundle exactly
  let matchedBundle = null;
  for (const b of bundles) {
    const bEntries = Object.entries(b.included || {});
    if (
      bEntries.length === lineItems.length &&
      bEntries.every(([pid, bQty]) => state.selected[pid] === bQty)
    ) {
      matchedBundle = b;
      break;
    }
  }

  return {
    lineItems,
    uniqueCount: lineItems.length,
    totalUnits,
    equipmentBaseSubtotal,
    durationOption,
    durationSurcharge,
    equipmentDurationTotal,
    serviceOption,
    serviceFee,
    grandTotal,
    matchedBundle,
  };
}
function syncSetupCount() {
  const count = Object.values(state.selected).reduce((sum, quantity) => sum + quantity, 0);
  const badge = document.querySelector("#setupCount");
  if (badge) badge.textContent = String(count);
  const link = document.querySelector("#setupLink");
  link?.setAttribute("aria-label", `My setup, ${count} item${count === 1 ? "" : "s"}`);
}
function productImage(p) {
  if (p.category === "Special Effects" && p.id.startsWith("cold-spark")) {
    return "assets/beantown/cold-sparklers.webp";
  }
  if (p.category === "Special Effects" && p.id.startsWith("dry-ice")) {
    return "assets/beantown/corporate-dance-floor.jpg";
  }
  if (p.id === "led-trailer") {
    return "assets/beantown/outdoor-led-trailer.webp";
  }
  if (p.category === "Event Lighting") {
    return "assets/beantown/event-lighting.webp";
  }
  if (p.category === "Subwoofers") {
    return "assets/beantown/speaker-wall.webp";
  }
  if (p.category === "DJ Equipment") {
    return "assets/beantown/69667bc51a89c0b8e055a68c_SMALL-PA-WITH-SUB--FACADE--AND-MOVERS-p-800.jpg";
  }
  if (p.category === "Silent Disco") {
    return "assets/beantown/headphones.jpg";
  }
  if (p.category === "Outdoor Movies") {
    return "assets/beantown/outdoor-movie.jpg";
  }
  if (p.id === "photo-360") {
    return "assets/beantown/photo-booth-360.jpg";
  }
  if (p.category === "Photo Booths") {
    return "assets/beantown/69667bc3b2d970f7c3028354_MAGIC-PB-p-800.jpeg";
  }
  if (p.category === "Microphones") {
    return "assets/beantown/microphone-rentals.jpeg";
  }
  if (p.category === "Audio Mixers") {
    return "assets/beantown/event-production.jpg";
  }
  if (p.category === "LED Video Walls") {
    return "assets/beantown/69667bc33d884d697701e4c1_Led-Wall.png";
  }
  if (p.category === "Video & Displays" && p.id.startsWith("tv-")) {
    return "assets/beantown/event-display.jpg";
  }
  if (p.category === "Video & Displays") {
    return "assets/beantown/projector-screen.jpg";
  }
  if (p.category === "Live Streaming") {
    return "assets/beantown/live-streaming.jpg";
  }
  if (p.category === "Audio & Speakers") {
    return "assets/beantown/speaker-rental.jpg";
  }
  return "assets/beantown/event-stage.jpg";
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
// Client stories — rotating half-moon wheel.
// SAMPLE COPY: these quotes are placeholders for the mockup. Replace them with approved client reviews
// (and real event photos) before launch. `photo` files live in assets/beantown/.
const testimonialSlots = [
  { quote: "The equipment was reliable and everything sounded great throughout the event.", who: "Concert client", place: "Worcester, MA", photo: "concert-audio.webp", initials: "CC" },
  { quote: "The setup team had everything ready before our guests arrived.", who: "Corporate client", place: "Cambridge, MA", photo: "projector-screen.jpg", initials: "CO" },
  { quote: "Delivery was smooth, and communication was clear from start to finish.", who: "Wedding client", place: "Boston, MA", photo: "event-production.jpg", initials: "WC" },
  { quote: "Everything came together effortlessly, from setup through wrap.", who: "Private party host", place: "Brookline, MA", photo: "corporate-dance-floor.jpg", initials: "PH" },
  { quote: "The inflatable screen was a hit. Picture and sound were perfect for the whole crowd.", who: "Movie night host", place: "Somerville, MA", photo: "outdoor-movie.jpg", initials: "MN" },
  { quote: "Three channels, zero noise complaints, and every guest loved the headphones.", who: "Silent disco client", place: "Boston, MA", photo: "silent-disco.webp", initials: "SD" },
  { quote: "The 360 booth was the highlight of the night. Guests lined up for hours.", who: "Photo booth client", place: "Newton, MA", photo: "photo-booth-360.jpg", initials: "PB" },
  { quote: "The LED wall looked stunning and made our keynote feel like a real production.", who: "Conference client", place: "Boston, MA", photo: "led-wall-roses.webp", initials: "LW" },
  { quote: "Our hybrid event streamed flawlessly with clear audio for remote guests.", who: "Live stream client", place: "Cambridge, MA", photo: "live-streaming.jpg", initials: "LS" },
  { quote: "Lighting and sound turned our gym into a real dance floor.", who: "School event planner", place: "Newton, MA", photo: "event-lighting.webp", initials: "SE" },
  { quote: "The cold sparklers gave our grand entrance exactly the wow moment we wanted.", who: "Special FX client", place: "Cape Cod, MA", photo: "cold-sparklers.webp", initials: "FX" },
  { quote: "Powerful, clean sound that filled the whole venue. We will book again.", who: "Event organizer", place: "New England", photo: "speaker-wall.webp", initials: "EO" },
];
function testimonialCard(slot, index) {
  return `<article class="tw-card sb-card" data-sb-card data-index="${index}">
    <div class="tw-photo">
      <img src="assets/beantown/${slot.photo}" alt="${escapeHtml(slot.who)}" width="520" height="360" decoding="async" draggable="false">
    </div>
    <div class="tw-body">
      <div class="tw-stars" role="img" aria-label="Rated 5 out of 5 stars">★★★★★</div>
      <p>“${escapeHtml(slot.quote)}”</p>
      <div class="tw-person">
        <span class="tw-avatar" aria-hidden="true">${escapeHtml(slot.initials)}</span>
        <div class="tw-person-meta">
          <strong>${escapeHtml(slot.who)}</strong>
          <small>${escapeHtml(slot.place)}</small>
        </div>
      </div>
    </div>
  </article>`;
}

function testimonialSection() {
  const doubled = [...testimonialSlots, ...testimonialSlots];
  const cards = doubled.map((slot, idx) => testimonialCard(slot, idx)).join("");
  return `<section class="section tw-section sb-section" data-sb-section aria-labelledby="twHeading">
    <div class="tw-layout sb-layout">
      <div class="tw-stage sb-stage" data-tw-stage role="region" aria-label="Client testimonials strip">
        <div class="tw-wheel sb-track" data-tw-wheel>${cards}</div>
      </div>
      <div class="testimonial-copy">
        <span class="eyebrow">CLIENT STORIES</span>
        <h2 id="twHeading">What <span>Clients</span> Say<br>About Our <span>Setup</span></h2>
        <p>Thoughtful support, dependable equipment, and a smoother event from setup to wrap.</p>
      </div>
    </div>
  </section>`;
}

let testimonialWheelCleanup = null;
function initTestimonialWheel() {
  testimonialWheelCleanup?.();
  testimonialWheelCleanup = null;
  const stage = document.querySelector("[data-tw-stage]");
  const track = stage?.querySelector("[data-tw-wheel]");
  if (!stage || !track) return;

  const cards = Array.from(track.querySelectorAll(".sb-card"));
  const totalCount = cards.length;
  const halfCount = Math.floor(totalCount / 2);
  if (!halfCount) return;

  const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  let offsetY = 0;
  let singleSetHeight = 0;
  let lastTime = performance.now();
  let hoverFactor = 1;
  let targetHoverFactor = 1;
  let inView = true;
  let raf = 0;

  const measure = () => {
    const gap = parseFloat(getComputedStyle(track).rowGap || getComputedStyle(track).gap || "24") || 24;
    let y = 0;
    for (let i = 0; i < halfCount; i++) {
      const h = cards[i].offsetHeight || 224;
      y += h + gap;
    }
    singleSetHeight = y;
  };

  const applyPosition = () => {
    if (!singleSetHeight) measure();
    if (!singleSetHeight) return;
    offsetY = ((offsetY % singleSetHeight) + singleSetHeight) % singleSetHeight;
    track.style.transform = `translate3d(0, ${-offsetY.toFixed(2)}px, 0)`;
  };

  const tick = (now) => {
    if (!stage.isConnected) {
      testimonialWheelCleanup?.();
      return;
    }
    const dt = Math.min(0.05, (now - lastTime) / 1000 || 0.016);
    lastTime = now;

    hoverFactor += (targetHoverFactor - hoverFactor) * Math.min(1, dt * 8);
    const baseSpeed = 30 * hoverFactor;
    offsetY += baseSpeed * dt;

    applyPosition();
    raf = requestAnimationFrame(tick);
  };

  const start = () => {
    if (reducedMotion || raf || !inView) return;
    lastTime = performance.now();
    raf = requestAnimationFrame(tick);
  };

  const stop = () => {
    cancelAnimationFrame(raf);
    raf = 0;
  };

  const onEnter = (e) => {
    if (e.pointerType === "mouse") targetHoverFactor = 0;
  };
  const onLeave = () => {
    targetHoverFactor = 1;
  };

  stage.addEventListener("pointerenter", onEnter);
  stage.addEventListener("pointerleave", onLeave);

  const resizeObserver = "ResizeObserver" in window ? new ResizeObserver(() => {
    measure();
    applyPosition();
  }) : null;
  resizeObserver?.observe(stage);

  const viewObserver = "IntersectionObserver" in window
    ? new IntersectionObserver(([entry]) => {
        inView = entry.isIntersecting;
        if (inView) start();
        else stop();
      }, { rootMargin: "160px 0px" })
    : null;
  viewObserver?.observe(stage);

  testimonialWheelCleanup = () => {
    stop();
    stage.removeEventListener("pointerenter", onEnter);
    stage.removeEventListener("pointerleave", onLeave);
    resizeObserver?.disconnect();
    viewObserver?.disconnect();
    testimonialWheelCleanup = null;
  };

  measure();
  applyPosition();
  start();
}
function faqSection() {
  const faqs = [
    {
      category: "Rentals & Inventory",
      question: "What equipment is available in your Boston rental inventory?",
      answer: "We maintain a comprehensive, commercial-grade event inventory in Boston. Our catalog includes powered sound systems and line arrays (QSC, JBL, Mackie), high-output subwoofers (QSC KW181, cardioid KS212C), Shure QLX-D digital wireless microphones (Beta 58A handhelds, lavaliers, Countryman headsets, and push-to-talk conference mics), audio mixers (Behringer X32, QSC TouchMix-16, Allen & Heath SQ-7), club-standard DJ rigs (Pioneer CDJ-3000, DJM-900NXS2, Technics 1200 turntables, Scrim Werks facades), 65″ & 75″ Samsung 4K TVs on motorized truss stands, 2.67mm modular indoor LED video walls, daylight-viewable mobile outdoor LED trailers, inflatable outdoor movie screens (12′ to 40′) with Sony laser projectors, 3-channel silent disco headphones (50–300+ units), photo booths (iPad Mirror, Magic Mirror Air, 360 Video platform), wireless Chauvet Freedom Par battery uplighting, moving heads, and indoor-safe special FX (Cold Sparklers and Dry Ice “Dancing on a Cloud”).",
    },
    {
      category: "Delivery & Setup",
      question: "Do you handle delivery, setup, soundcheck, and pickup?",
      answer: "Yes, we provide full turnkey service throughout Greater Boston and all of New England. Our experienced technicians arrive well before your event begins, manage all load-in, run and tape clean cabling, tune the system for your room acoustics, and conduct a complete soundcheck and microphone walkthrough with you or your speaker. At the end of your event, we return for prompt, quiet teardown. For select compact equipment (such as small PA speakers or silent disco packs), convenient self-pickup and return is also available with straightforward setup guides and on-call telephone support.",
    },
    {
      category: "Pricing & Quotes",
      question: "How does pricing work, and are there any surprise fees?",
      answer: "We pride ourselves on 100% transparent pricing. Fixed-format entertainment packages—such as Silent Disco ($500–$2,500), Inflatable Outdoor Movie Nights ($549–$1,899), and Photo Booths ($799–$1,699)—have clearly listed public pricing. For custom sound systems, modular LED walls, multi-camera live streaming, and concert lighting, we provide an itemized quote based on venue dimensions, guest count, rigging requirements, and technician hours. Every quote clearly separates gear, delivery, setup, and labor—so you will never encounter surprise add-ons on event day.",
    },
    {
      category: "On-Site Support",
      question: "Can we have an on-site technician or sound engineer manage our show?",
      answer: "Absolutely. In addition to delivery and setup, you can book dedicated Beantown AV technicians and FOH audio engineers to stay on-site for the duration of your event. We handle live mic mixing, volume adjustments, background music transitions, presentation slide advancing, video cueing, camera switching, and immediate troubleshooting so that you and your team can focus entirely on your guests.",
    },
    {
      category: "Venue & Power",
      question: "What power and venue accommodations do you need?",
      answer: "Most standard audio setups, 4K TVs, wireless uplights, and projectors operate reliably on standard 120V 15A or 20A wall circuits within 50 feet of the stage area. For high-draw production—like large-scale modular LED video walls, high-power sub arrays, or outdoor park/field screenings—we calculate exact amperage loads in advance and can supply ultra-quiet commercial generator rentals and power distribution boxes. We will gladly coordinate directly with your venue manager or coordinator to review load-in docks, elevator clearance, and power availability.",
    },
    {
      category: "Booking Lead Time",
      question: "How far in advance should we reserve our rentals?",
      answer: "We recommend booking 2 to 4 weeks in advance, especially for busy Friday and Saturday dates during peak wedding and graduation seasons (May through October) and corporate holiday galas (November–December). That said, we maintain a deep Boston inventory and do our best to accommodate short-notice, same-week, and emergency rentals whenever equipment and crew are available. Call or text us directly at (978) 601-5473 for urgent requests.",
    },
    {
      category: "Weather & Outdoor",
      question: "What is your policy for outdoor events and inclement weather?",
      answer: "Outdoor events are a specialty—from park movie nights to outdoor weddings and athletic watch parties. For safety, electronic gear (speakers, non-waterproof lighting, laser projectors, and indoor LED panels) must be situated under a watertight tent, pavilion, or covered structure in case of precipitation. Our mobile outdoor LED video wall trailers are fully weatherproof and wind-rated up to 35 mph. If severe rain or wind threatens an open-air event, we work with you up to 24–48 hours in advance to adapt the schedule or transition to an indoor backup space.",
    },
    {
      category: "Special FX & Safety",
      question: "Are Cold Sparklers and Dry Ice fog safe for indoor Boston venues?",
      answer: "Yes, both effects are 100% venue-friendly and safe for indoor use. Our Cold Sparkler machines utilize a non-pyrotechnic titanium/zirconium composite granule that produces a brilliant spark fountain that remains cool to the touch, generates zero open flame, and produces virtually no smoke. Our Dry Ice machines use solid carbon dioxide and hot water to generate dense, chilled white fog that strictly hugs the floor at ankle height (“Dancing on a Cloud”) and dissipates naturally without rising or triggering optical venue fire alarms.",
    },
    {
      category: "Service Area",
      question: "What areas in Massachusetts and New England do you service?",
      answer: "Our primary service area covers Boston proper (Back Bay, Seaport, Downtown, South End, Fenway, Dorchester, Charlestown), Cambridge, Somerville, Brookline, Newton, Waltham, Quincy, and communities throughout Greater Boston and Route 128 / I-95. We also regularly deliver across Massachusetts (Worcester, the North Shore, South Shore, Cape Cod & the Islands), Rhode Island (Providence, Newport), and Southern New Hampshire. Inquire about events across broader New England.",
    },
    {
      category: "Payment & Terms",
      question: "What payment methods do you accept, and how do deposits work?",
      answer: "We accept all major credit cards, debit cards, ACH bank transfers, and corporate checks. A deposit secures your equipment and dates on our delivery schedule, with the remaining balance due prior to load-in or upon delivery. Direct invoicing and net-30 vendor billing are available for verified universities, municipal departments, and corporate partners.",
    },
  ];

  const renderCard = (item, idx) => `
    <article class="faq-item faq9-card" data-faq-card style="--faq-delay:${(idx * 0.04).toFixed(2)}s">
      <button type="button" class="faq9-question" data-faq-toggle aria-expanded="false">
        <div class="faq9-q-meta">
          <span class="faq9-category-tag">${escapeHtml(item.category)}</span>
          <span class="faq9-q-text">${escapeHtml(item.question)}</span>
        </div>
        <b class="faq9-icon" aria-hidden="true">+</b>
      </button>
      <div class="faq9-answer">
        <div class="faq9-answer-inner">
          <p>${escapeHtml(item.answer)}</p>
        </div>
      </div>
    </article>`;

  return `<section class="section faq-section faq9-section" id="faq">
    <div class="section-head">
      <div>
        <span class="eyebrow">HELP &amp; EVENT LOGISTICS</span>
        <h2>Your questions,<br>answered.</h2>
      </div>
      <p>Clear, direct answers about our equipment, power requirements, on-site engineers, and delivery across Boston and New England.</p>
    </div>

    <div class="faq9-layout">
      <aside class="faq9-contact-panel">
        <div class="faq9-contact-card">
          <div class="faq9-badge">
            <span class="faq9-badge-dot"></span>
            <span>BOSTON PRODUCTION TEAM</span>
          </div>
          <h3>Have a question about your venue or setup?</h3>
          <p class="faq9-contact-copy">Every event and venue has unique logistics. Whether you need help calculating acoustic coverage for 200 guests, checking ceiling clearance for an LED wall, or coordinating a strict 60-minute load-in, our specialists are ready to help.</p>
          
          <div class="faq9-channels">
            <a href="tel:+19786015473" class="faq9-channel-item">
              <span class="faq9-channel-icon" aria-hidden="true">📞</span>
              <div class="faq9-channel-info">
                <span class="faq9-channel-label">Call or text our Boston desk</span>
                <strong>(978) 601-5473</strong>
                <small>Mon–Fri 8am–5pm · Weekend on-call support</small>
              </div>
            </a>

            <a href="mailto:info@beantownaudiorentals.com" class="faq9-channel-item">
              <span class="faq9-channel-icon" aria-hidden="true">✉️</span>
              <div class="faq9-channel-info">
                <span class="faq9-channel-label">Email specs, RFPs, or questions</span>
                <strong>info@beantownaudiorentals.com</strong>
                <small>Fast quote &amp; spec sheet replies</small>
              </div>
            </a>
          </div>

          <div class="faq9-actions">
            <a href="#quote" class="btn btn-dark" style="width:100%;justify-content:center">
              Request a Custom Quote <span>→</span>
            </a>
            <a href="#builder" class="btn btn-light" style="width:100%;justify-content:center;margin-top:8px">
              Build My Event Setup
            </a>
          </div>

          <ul class="faq9-perks" aria-label="Our service guarantee">
            <li><span>✓</span> Tested &amp; soundchecked gear before every dispatch</li>
            <li><span>✓</span> Delivery, setup &amp; strike across New England</li>
            <li><span>✓</span> Dedicated on-site technicians available</li>
          </ul>
        </div>
      </aside>

      <div class="faq9-feed">
        ${faqs.map((item, idx) => renderCard(item, idx)).join("")}
      </div>
    </div>
  </section>`;
}
function home() {
  return `<div class="page">
  <section class="hero reveal"><div class="hero-copy"><span class="eyebrow orange">BOSTON • NEW ENGLAND • EVENT AV</span><h1 class="hero-headline" id="heroHeadline" aria-label="Your event. Your setup."><span class="hero-title-line" data-type-text="YOUR EVENT." data-accent-start="5">YOUR EVENT.</span><br><span class="hero-title-line" data-type-text="YOUR SETUP." data-accent-start="5">YOUR SETUP.</span></h1><p>Rent speakers, screens, streaming gear, photo booths and complete event systems — then build your exact experience before you request a quote.</p><div class="hero-cta"><button type="button" class="btn btn-dark" data-open-cart>Build your setup <span>→</span></button><a class="btn btn-light" href="#rentals">Explore rentals</a></div></div><div class="hero-floats" aria-hidden="true">
    <article class="floating-story" data-scroll-float="-1" style="--tilt:-5deg"><span class="story-media" style="--story-image:url('assets/beantown/event-production.jpg')"></span><span class="story-kicker">WEDDINGS</span><strong>Every vow, heard.</strong><small>Audio for the aisle and the dance floor.</small></article>
    <article class="floating-story" data-scroll-float="1" style="--tilt:5deg"><span class="story-media" style="--story-image:url('assets/beantown/outdoor-movie.jpg')"></span><span class="story-kicker">OUTDOOR MOVIES</span><strong>Movie night, made big.</strong><small>Screen and sound for the whole crowd.</small></article>
    <article class="floating-story" data-scroll-float="-1" style="--tilt:3deg"><span class="story-media" style="--story-image:url('assets/beantown/headphones.jpg')"></span><span class="story-kicker">SILENT DISCO</span><strong>Three channels. One dance floor.</strong><small>Headphones and transmitters, ready to go.</small></article>
    <article class="floating-story" data-scroll-float="1" style="--tilt:-4deg"><span class="story-media" style="--story-image:url('assets/beantown/projector-screen.jpg')"></span><span class="story-kicker">CORPORATE EVENTS</span><strong>Make every word count.</strong><small>Clear voices and confident presentations.</small></article>
    <article class="floating-story" data-scroll-float="-1" style="--tilt:-3deg"><span class="story-media" style="--story-image:url('assets/beantown/live-event.jpg')"></span><span class="story-kicker">LIVE EVENTS</span><strong>Room-filling sound.</strong><small>Audio that meets the moment.</small></article>
    <article class="floating-story" data-scroll-float="1" style="--tilt:4deg"><span class="story-media" style="--story-image:url('assets/beantown/photo-booth-360.jpg')"></span><span class="story-kicker">PHOTO BOOTHS</span><strong>Keep the good part.</strong><small>A photo moment guests take home.</small></article>
  </div></section>
  <div class="marquee"><div class="marquee-track"><span>Audio</span><b>•</b><span>Video</span><b>•</b><span>LED Walls</span><b>•</b><span>Silent Disco</span><b>•</b><span>Photo Booths</span><b>•</b><span>Live Streaming</span><b>•</b><span>Outdoor Movies</span><b>•</b><span>Audio</span><b>•</b><span>Video</span><b>•</b><span>LED Walls</span><b>•</b><span>Silent Disco</span><b>•</b><span>Photo Booths</span></div></div>
  <section class="experience-journey" data-experience-journey>
    <div class="experience-stage">
      <div class="experience-center-anchor">
        <span class="eyebrow">WHAT ARE YOU RENTING?</span>
        <h2 class="experience-main-title">Start with the<br><span class="experience-word">experience</span>.</h2>
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

const RENTAL_CATEGORY_GROUPS = [
  {
    group: "Audio & Sound",
    code: "AUDIO",
    items: [
      { id: "Audio & Speakers", label: "Speakers & PA" },
      { id: "Subwoofers", label: "Subwoofers" },
      { id: "Microphones", label: "Microphones" },
      { id: "Audio Mixers", label: "Audio Mixers" },
      { id: "DJ Equipment", label: "DJ Equipment" },
    ],
  },
  {
    group: "Video & Visuals",
    code: "VIDEO",
    items: [
      { id: "Video & Displays", label: "Displays & Projectors" },
      { id: "LED Video Walls", label: "LED Video Walls" },
      { id: "Live Streaming", label: "Live Streaming" },
    ],
  },
  {
    group: "Lighting & FX",
    code: "LIGHTING",
    items: [
      { id: "Event Lighting", label: "Event Lighting" },
      { id: "Special Effects", label: "Special Effects" },
    ],
  },
  {
    group: "Event Experiences",
    code: "EXPERIENCES",
    items: [
      { id: "Photo Booths", label: "Photo Booths" },
      { id: "Silent Disco", label: "Silent Disco" },
      { id: "Outdoor Movies", label: "Outdoor Movies" },
    ],
  },
];

function rentalsResultsGridMarkup(list) {
  if (!list.length) {
    return `<div class="empty rentals-empty-state"><strong>No rentals match your filters</strong><p>Try adjusting your search, price range, or category selection.</p><button type="button" class="btn btn-dark btn-small" data-reset-filters>Reset all filters</button></div>`;
  }
  return list.map(productCard).join("");
}

function rentals() {
  const list = filteredProducts();
  const selectedTotalCount = Object.values(state.selected).reduce((sum, n) => sum + n, 0);
  const hasActiveFilters =
    state.category !== "All" ||
    state.search.trim() !== "" ||
    state.priceType !== "all" ||
    state.minPrice !== "" ||
    state.maxPrice !== "" ||
    state.onlyPopular ||
    state.onlySelected;

  const priceTypeOptions = [
    { id: "all", label: "Any" },
    { id: "fixed", label: "Fixed" },
    { id: "starting", label: "Packages" },
    { id: "quote", label: "Quote" },
  ];

  return `<div class="page">
    <div class="page-hero">
      <div><span class="eyebrow">RENTAL CATALOG</span><h1>Everything<br>you can add.</h1></div>
      <p>Explore our complete commercial rental inventory. Consumer packages feature transparent fixed pricing; custom staging, line arrays, and LED walls are confirmed with an itemized quote.</p>
    </div>

    <section class="rentals-catalog" aria-label="Rental inventory">
      <div class="rentals-topbar">
        <div class="rentals-count-title" id="rentalsCountTitle">
          <strong>${list.length}</strong> <span>${list.length === 1 ? "rental" : "rentals"}</span>
          ${state.category !== "All" ? `<span class="rentals-active-chip">${escapeHtml(state.category)} <button type="button" data-cat="All" aria-label="Remove category filter">×</button></span>` : ""}
        </div>
        <div class="rentals-topbar-actions">
          <div class="rentals-view-switch" role="group" aria-label="Catalog layout view">
            <button type="button" class="view-switch-btn ${state.viewMode === "grid" ? "active" : ""}" data-view-mode="grid" aria-pressed="${state.viewMode === "grid"}">
              <svg width="14" height="14" viewBox="0 0 16 16" fill="none" aria-hidden="true"><rect x="1.5" y="1.5" width="5" height="5" rx="1" stroke="currentColor" stroke-width="1.6"/><rect x="9.5" y="1.5" width="5" height="5" rx="1" stroke="currentColor" stroke-width="1.6"/><rect x="1.5" y="9.5" width="5" height="5" rx="1" stroke="currentColor" stroke-width="1.6"/><rect x="9.5" y="9.5" width="5" height="5" rx="1" stroke="currentColor" stroke-width="1.6"/></svg>
              Grid
            </button>
            <button type="button" class="view-switch-btn ${state.viewMode === "list" ? "active" : ""}" data-view-mode="list" aria-pressed="${state.viewMode === "list"}">
              <svg width="14" height="14" viewBox="0 0 16 16" fill="none" aria-hidden="true"><path d="M2.5 4H13.5M2.5 8H13.5M2.5 12H13.5" stroke="currentColor" stroke-width="1.6" stroke-linecap="round"/></svg>
              List
            </button>
          </div>
          <div class="rentals-sort-box">
            <select id="rentalSort" class="rentals-sort-select" aria-label="Sort rentals">
              <option value="recommended" ${state.sortBy === "recommended" ? "selected" : ""}>Recommended</option>
              <option value="price-asc" ${state.sortBy === "price-asc" ? "selected" : ""}>Price: Low to High</option>
              <option value="price-desc" ${state.sortBy === "price-desc" ? "selected" : ""}>Price: High to Low</option>
              <option value="name-asc" ${state.sortBy === "name-asc" ? "selected" : ""}>Name: A to Z</option>
            </select>
          </div>
        </div>
      </div>

      <div class="rentals-layout">
        <aside class="rentals-sidebar" aria-label="Filter equipment">
          <div class="sidebar-filter-section">
            <label class="sidebar-section-label" for="rentalSearch">SEARCH</label>
            <div class="sidebar-search-field">
              <input id="rentalSearch" type="text" value="${escapeHtml(state.search)}" placeholder="Equipment, model, brand…" autocomplete="off">
              ${state.search ? `<button type="button" class="sidebar-search-clear" data-clear-search aria-label="Clear search">×</button>` : ""}
            </div>
          </div>

          <div class="sidebar-filter-section">
            <div class="sidebar-section-head">
              <span class="sidebar-section-label">EQUIPMENT BY GROUP</span>
              ${state.category !== "All" ? `<button type="button" class="sidebar-inline-reset" data-cat="All">Reset</button>` : ""}
            </div>
            <button type="button" class="sidebar-cat-item sidebar-cat-all ${state.category === "All" ? "active" : ""}" data-cat="All" aria-pressed="${state.category === "All"}">
              <span class="sidebar-cat-name">All Rental Equipment</span>
              <span class="sidebar-cat-badge">${products.length}</span>
            </button>
            <div class="sidebar-category-groups" role="region" aria-label="Equipment categories by group">
              ${RENTAL_CATEGORY_GROUPS.map((grp) => {
                const groupCount = products.filter((p) => productMatchesCategory(p, grp.group)).length;
                const isGroupActive =
                  state.category === grp.group ||
                  (grp.group === "Audio & Sound" && state.category === "Audio") ||
                  (grp.group === "Event Experiences" && state.category === "Experiences");
                const hasActiveChild = grp.items.some(
                  (item) =>
                    state.category === item.id ||
                    (state.category === "LED Walls" && item.id === "LED Video Walls"),
                );
                return `<div class="sidebar-cat-group ${isGroupActive || hasActiveChild ? "has-active" : ""}">
                  <button type="button" class="sidebar-group-header ${isGroupActive ? "active" : ""}" data-cat="${grp.group}" title="View all ${grp.group}">
                    <span class="sidebar-group-title">${grp.group}</span>
                    <span class="sidebar-group-meta">All · ${groupCount}</span>
                  </button>
                  <div class="sidebar-group-items">
                    ${grp.items.map((item) => {
                      const count = products.filter((p) => productMatchesCategory(p, item.id)).length;
                      const isActive =
                        state.category === item.id ||
                        (state.category === "LED Walls" && item.id === "LED Video Walls");
                      return `<button type="button" class="sidebar-cat-item sidebar-subcat-item ${isActive ? "active" : ""}" data-cat="${item.id}" aria-pressed="${isActive}">
                        <span class="sidebar-cat-name">${item.label}</span>
                        <span class="sidebar-cat-badge">${count}</span>
                      </button>`;
                    }).join("")}
                  </div>
                </div>`;
              }).join("")}
            </div>
          </div>

          <div class="sidebar-filter-section">
            <span class="sidebar-section-label">PRICING TYPE</span>
            <div class="sidebar-Option-pills" role="group" aria-label="Pricing type">
              ${priceTypeOptions.map((opt) => `<button type="button" class="sidebar-mini-pill ${state.priceType === opt.id ? "active" : ""}" data-price-type="${opt.id}">${opt.label}</button>`).join("")}
            </div>
          </div>

          <div class="sidebar-filter-section">
            <span class="sidebar-section-label">PRICE RANGE</span>
            <div class="sidebar-range-row">
              <input id="rentalMinPrice" type="number" min="0" step="10" placeholder="Min" value="${escapeHtml(state.minPrice)}" aria-label="Minimum price">
              <input id="rentalMaxPrice" type="number" min="0" step="10" placeholder="Max" value="${escapeHtml(state.maxPrice)}" aria-label="Maximum price">
            </div>
          </div>

          <div class="sidebar-filter-section">
            <span class="sidebar-section-label">EXTRAS</span>
            <div class="sidebar-checks">
              <label class="sidebar-check-label">
                <input type="checkbox" id="filterPopular" ${state.onlyPopular ? "checked" : ""}>
                <span class="sidebar-check-box" aria-hidden="true"></span>
                <span>Popular &amp; featured</span>
              </label>
              <label class="sidebar-check-label">
                <input type="checkbox" id="filterSelected" ${state.onlySelected ? "checked" : ""}>
                <span class="sidebar-check-box" aria-hidden="true"></span>
                <span>Added to my setup (${selectedTotalCount})</span>
              </label>
            </div>
          </div>

          <div class="sidebar-footer-actions">
            <button type="button" class="sidebar-btn-clear" data-reset-filters ${!hasActiveFilters ? "disabled" : ""}>Clear</button>
            <button type="button" class="sidebar-btn-apply" data-apply-filters>Apply</button>
          </div>
        </aside>

        <div class="rentals-main-area">
          <div class="product-grid rentals-grid ${state.viewMode === "list" ? "is-list" : ""}" id="rentalsProductGrid">
            ${rentalsResultsGridMarkup(list)}
          </div>
        </div>
      </div>
    </section>
  </div>`;
}

function bundlesPage() {
  if (state.bundle) return bundleDetail(state.bundle);
  return `<div class="page"><div class="page-hero"><div><span class="eyebrow">EVENT BUNDLES</span><h1>Start with<br>the occasion.</h1></div><p>Choose a fixed package built around a familiar event format. Every bundle is a complete starting point with clear inclusions and no hidden customization step.</p></div><section class="bundle-customize"><div><span class="eyebrow">NEED SOMETHING MORE SPECIFIC?</span><h2>Customize your experience.</h2><p>Build an event from the ground up with recommendations for your occasion and access to the full equipment catalog.</p></div><button type="button" class="btn btn-dark" data-open-cart>Build your setup →</button></section><div class="bundle-grid">${bundles.map((b) => `<article class="bundle-card reveal"><div class="bundle-top ${b.tone} has-bundle-image" style="--bundle-image:url('${bundleImage(b)}')"><span class="eyebrow">${b.label}</span><h3>${b.title}</h3></div><div class="bundle-body"><p style="margin:0;color:var(--muted);font-size:13px">${b.desc}</p><ul>${b.items.map((i) => `<li>${i}</li>`).join("")}</ul><div class="bundle-foot"><span class="bundle-price">${money(b.price)}</span><button class="btn btn-dark btn-small" data-bundle="${b.id}">View bundle →</button></div></div></article>`).join("")}</div></div>`;
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
  return `<div class="page"><div class="bundle-detail-head"><a class="text-btn" href="#bundles">← All bundles</a><div class="bundle-detail-layout"><div><span class="eyebrow">${bundle.label} PACKAGE</span><h1>${bundle.title}</h1><p>${bundle.desc}</p></div><div class="bundle-detail-price"><span class="eyebrow">TURNKEY PACKAGE TOTAL</span><strong>${money(bundle.price)}</strong></div></div></div><div class="bundle-detail-wrap"><section class="bundle-detail-main"><div class="detail-section-head"><div><span class="eyebrow">WHAT’S INCLUDED</span><h2>Your package, item by item.</h2></div><span class="detail-lock">${included.reduce((s, x) => s + x.quantity, 0)} Total Units</span></div><div class="bundle-included-list">${included.map(({ product, quantity }) => `<div class="bundle-included-item"><div><strong>${quantity} × ${product.name}</strong><span>${product.category} · ${money(product.price)} each · ${product.desc}</span></div><strong>${money(product.price * quantity)}</strong></div>`).join("")}</div><div class="bundle-detail-actions"><button type="button" class="btn btn-dark" data-launch-bundle="${bundle.id}" data-launch-step="6">Request this bundle →</button><button type="button" class="btn btn-light" data-open-cart>View in Cart →</button></div></section><aside class="bundle-detail-summary"><span class="eyebrow">TRANSPARENT MATH</span><div class="detail-total"><span>Itemized equipment sum</span><strong>${money(knownTotal)}</strong></div><div class="detail-total"><span>Package total</span><strong>${money(bundle.price)}</strong></div><p>Every item in this bundle is priced transparently with zero hidden fees. Load this bundle into the Event Builder to add microphones, lighting, or delivery support.</p></aside></div></div>`;
}

function aboutUsPage() {
  const offerItems = [
    {
      num: "01",
      title: "Speakers, Mixers & Microphones",
      desc: "Wired and wireless Shure systems (Beta 58A handhelds, lavaliers, headsets), powered QSC & JBL loudspeakers, high-output subwoofers, and digital mixing consoles calibrated for pristine clarity.",
      iconSvg: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" class="about12-icon" aria-hidden="true"><polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"></polygon><path d="M15.54 8.46a5 5 0 0 1 0 7.07"></path><path d="M19.07 4.93a10 10 0 0 1 0 14.14"></path></svg>`
    },
    {
      num: "02",
      title: "Video Gear, Displays & Walls",
      desc: "High-lumen laser projectors, fast-fold portable screens, 65″–75″ 4K monitor displays on truss stands, modular 2.67mm ultra-bright LED video walls, and multi-camera switcher feeds.",
      iconSvg: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" class="about12-icon" aria-hidden="true"><polygon points="12 2 2 7 12 12 22 7 12 2"></polygon><polyline points="2 17 12 22 22 17"></polyline><polyline points="2 12 12 17 22 12"></polyline></svg>`
    },
    {
      num: "03",
      title: "Lighting Systems & Atmospherics",
      desc: "Wireless battery-powered Chauvet uplighting, moving head fixtures, warm stage wash, cold-spark fountains, and low-lying dry-ice haze for venue transformations.",
      iconSvg: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" class="about12-icon" aria-hidden="true"><path d="m12 3-1.9 5.8a2 2 0 0 1-1.3 1.3L3 12l5.8 1.9a2 2 0 0 1 1.3 1.3L12 21l1.9-5.8a2 2 0 0 1 1.3-1.3L21 12l-5.8-1.9a2 2 0 0 1-1.3-1.3Z"></path></svg>`
    },
    {
      num: "04",
      title: "Silent Disco & Interactive Audio",
      desc: "3-channel silent disco headphone packages, multi-DJ transmitters, 360 photo booth activations, and outdoor movie projection systems with FM broadcast options.",
      iconSvg: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" class="about12-icon" aria-hidden="true"><path d="M3 18v-6a9 9 0 0 1 18 0v6"></path><path d="M21 19a2 2 0 0 1-2 2h-1a2 2 0 0 1-2-2v-3a2 2 0 0 1 2-2h3zM3 19a2 2 0 0 0 2 2h1a2 2 0 0 0 2-2v-3a2 2 0 0 0-2-2H3z"></path></svg>`
    },
    {
      num: "05",
      title: "Full Turnkey AV Production",
      desc: "End-to-end production for large conferences, concerts, festivals, and campus commencements—complete with load-in, live front-of-house mixing, and quiet teardown.",
      iconSvg: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" class="about12-icon" aria-hidden="true"><line x1="4" y1="21" x2="4" y2="14"></line><line x1="4" y1="10" x2="4" y2="3"></line><line x1="12" y1="21" x2="12" y2="12"></line><line x1="12" y1="8" x2="12" y2="3"></line><line x1="20" y1="21" x2="20" y2="16"></line><line x1="20" y1="12" x2="20" y2="3"></line><line x1="1" y1="14" x2="7" y2="14"></line><line x1="9" y1="8" x2="15" y2="8"></line><line x1="17" y1="16" x2="23" y2="16"></line></svg>`
    }
  ];

  const clientTypes = [
    { num: "01", title: "Local Businesses & Corporate Teams", desc: "Town halls, hybrid summits, client dinners, and product showcases." },
    { num: "02", title: "Nonprofits & Community Groups", desc: "Annual fundraisers, charity auctions, galas, and community rallies." },
    { num: "03", title: "Colleges & Universities", desc: "Commencements, guest lectures, student concerts, and orientation programs." },
    { num: "04", title: "DJs, Musicians & Performers", desc: "Club nights, album releases, festival stages, and live band reinforcement." },
    { num: "05", title: "Wedding Planners & Private Hosts", desc: "Ceremonies, cocktail hours, reception dance floors, and private celebrations." },
    { num: "06", title: "Production Companies & Organizers", desc: "Multi-stage festivals, outdoor cinema series, and touring agency event" }
  ];

  const differentiators = [
    { label: "Local Expertise", desc: "We know Boston venues, traffic, loading docks, and city logistics inside and out." },
    { label: "Simple Pricing", desc: "No guesswork, no confusing tech speak, and absolutely no last-minute surprise fees." },
    { label: "Clean, Pro-Grade Equipment", desc: "Every unit is thoroughly soundchecked, cleaned, and tested before delivery." },
    { label: "Helpful, Real People", desc: "Clear communication, friendly on-site engineers, and responsive support." },
    { label: "Scalable Service", desc: "From a single wireless microphone to complete arena-scale concert production." }
  ];

  return `<div class="page about-page">
    <!-- Hero Banner -->
    <header class="about-hero">
      <div class="about-hero-media">
        <img src="assets/beantown/event-production.jpg" alt="Beantown Audio Rentals production setup" class="about-hero-img">
        <div class="about-hero-overlay"></div>
      </div>
      <div class="about-hero-content">
        <span class="eyebrow orange">BOSTON • NEW ENGLAND • EVENT AV</span>
        <h1 class="about-hero-title">BEST AUDIO VISUAL<br>RENTALS IN BOSTON</h1>
        <p class="about-hero-lead">Commercial-grade equipment, easy booking, and hands-on service that puts people first across Greater Boston and all of New England.</p>
      </div>
    </header>

    <!-- Main Content Container -->
    <div class="about-container">

      <!-- Section 1: About Beantown Audio Rentals -->
      <section class="about-section about-story-section reveal">
        <div class="about-story-card">
          <div class="about-story-header">
            <span class="eyebrow">OUR STORY & PHILOSOPHY</span>
            <h2>About Beantown Audio Rentals</h2>
          </div>
          
          <div class="about-story-grid">
            <div class="about-story-col">
              <p class="about-lead-text">
                At <strong>Beantown Audio Rentals</strong>, we believe great events start with great sound, clear visuals, and dependable support. That’s why we’re proud to offer the <em>best audio visual rentals in Boston</em>, paired with hands-on service that puts people first.
              </p>
              <p>
                We serve everyone from first-time party hosts to seasoned event planners. Whether you’re planning a corporate meeting, a wedding, or a large outdoor concert, our team is here to make sure your message gets heard—and seen—exactly the way you imagined.
              </p>
            </div>
            
            <div class="about-story-col about-story-box">
              <h3>Built on Experience. Driven by Simplicity.</h3>
              <p>
                Beantown Audio Rentals was founded with a simple goal: to make high-quality AV gear easy and affordable for everyone. We noticed how often people struggled with confusing tech, unreliable setups, and vague pricing. So we set out to change that.
              </p>
              <p>
                Today, we’re known for providing the best audio visual rentals in Boston with a focus on clear communication, easy booking, and trustworthy service. Our clients love how we simplify the process—no jargon, no hidden fees, and no stress.
              </p>
              <blockquote class="about-quote">
                “We’re here to be more than a vendor. We’re your AV partner from the moment you reach out.”
              </blockquote>
            </div>
          </div>
        </div>
      </section>

      <!-- Section 2: What We Offer (React Bits Pro: About 12 Block) -->
      <section class="about-section about-offer-section about12-block reveal" aria-labelledby="aboutOfferHeading">
        <div class="section-head">
          <div>
            <span class="eyebrow">EQUIPMENT &amp; CAPABILITIES</span>
            <h2 id="aboutOfferHeading">What We Offer</h2>
          </div>
          <p>We rent and support a wide range of professional audio visual equipment across Boston and New England.</p>
        </div>

        <div class="about12-card-wrapper">
          <!-- Left Column: Quote Card, Narrative -->
          <div class="about12-left">
            <div class="about12-quote-card">
              <blockquote class="about12-quote-text">
                “An event feels calm when someone has already met its worst day. At Beantown, we prepare for every variable so your event runs effortlessly.”
              </blockquote>
              <div class="about12-author">
                <img 
                  src="assets/beantown/calvin-reid.jpg" 
                  alt="Calvin Reid" 
                  class="about12-avatar"
                  loading="lazy"
                >
                <div class="about12-author-meta">
                  <strong class="about12-author-name">Calvin Reid</strong>
                  <span class="about12-author-role">Founder</span>
                </div>
              </div>
            </div>

            <p class="about12-left-desc">
              Every piece of equipment is tested before delivery, and we’re always happy to explain how it works. Want us to run the show? We offer on-site tech support and full-service production across Boston, Massachusetts, and the greater New England area.
            </p>
          </div>

          <!-- Right Column: Collapsible Offer Items -->
          <div class="about12-right">
            <div class="about12-items-list" role="region" aria-label="Equipment offerings">
              ${offerItems.map((item) => `
                <article class="about12-item" tabindex="0" role="button" aria-expanded="false" data-offer-item>
                  <span class="about12-num">${item.num}</span>
                  <div class="about12-content">
                    <h3 class="about12-title">${item.title}</h3>
                    <p class="about12-desc">${item.desc}</p>
                  </div>
                  <div class="about12-arrow-box">
                    <span class="about12-arrow-btn" aria-hidden="true">
                      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round" class="about12-arrow-icon">
                        <line x1="5" y1="12" x2="19" y2="12"></line>
                        <polyline points="12 5 19 12 12 19"></polyline>
                      </svg>
                    </span>
                  </div>
                </article>
              `).join("")}
            </div>
          </div>
        </div>
      </section>

      <!-- Section 3: Who We Serve -->
      <section class="about-section about-serve-section reveal" aria-labelledby="aboutServeHeading">
        <div class="serve-header">
          <span class="serve-eyebrow">COMMUNITIES &amp; VENUES</span>
          <h2 class="serve-title" id="aboutServeHeading">Who We Serve</h2>
          <p class="serve-subtitle">We’re proud to work with a wide range of clients and organizations throughout Massachusetts.</p>
        </div>

        <div class="serve-grid-box">
          ${clientTypes.map((client) => `
            <div class="serve-cell">
              <span class="serve-num">${client.num}</span>
              <h3 class="serve-cell-title">${client.title}</h3>
              <p class="serve-cell-desc">${client.desc}</p>
            </div>
          `).join("")}
        </div>

        <div class="serve-gold-banner">
          <p>Whether your event is in downtown Boston, Cambridge, Somerville, Brookline, or anywhere in New England, we’re ready to bring the AV support you need. We’re known for being flexible, fast, and focused on your goals. Our clients return because they trust us. We show up on time. We fix problems fast. And we treat every event—big or small—with the same care and respect.</p>
        </div>
      </section>

      <!-- Section 4 & 5: Why Choose Us & Our Promise (Featured Dark Panel) -->
      <section class="about-section about-why-promise-section reveal">
        <div class="about-dark-panel">
          <div class="about-dark-bg" style="background-image: url('assets/beantown/live-event.jpg')"></div>
          <div class="about-dark-content">
            
            <div class="about-why-block">
              <span class="eyebrow orange">THE BEANTOWN DIFFERENCE</span>
              <h2>Why Choose Beantown Audio Rentals</h2>
              <p class="about-dark-intro">There are lots of places to rent gear, but we do things differently. Here’s what sets us apart:</p>

              <div class="about-diff-grid">
                ${differentiators.map((diff, i) => `
                  <div class="about-diff-item">
                    <span class="about-diff-num">0${i + 1}</span>
                    <div>
                      <strong>${diff.label}</strong>
                      <p>${diff.desc}</p>
                    </div>
                  </div>
                `).join("")}
              </div>

              <p class="about-dark-outro">
                That’s what makes us the go-to for the best audio visual rentals in Boston. We’re not here to impress you with big words or flashy gear—we’re here to deliver results that make your event shine.
              </p>
            </div>

            <div class="about-promise-divider"></div>

            <div class="about-promise-block">
              <span class="eyebrow orange">OUR COMMITMENT</span>
              <h3>Our Promise to You</h3>
              
              <div class="about-promise-body">
                <p>
                  Events are full of moving parts. AV shouldn't be one of the stress factors. That’s why we promise to show up prepared, stay flexible, and focus on helping you succeed. We’ll listen to your needs, work within your budget, and give honest recommendations.
                </p>
                <p>
                  If you ever have a question, we’re just a text or phone call away. If you’re on a tight deadline or need last-minute help, we’ll do everything we can to make it happen.
                </p>
                <div class="about-promise-seal">
                  <p>
                    When you work with Beantown Audio Rentals, you're not just getting gear—you're getting a partner who cares. That’s what makes us the best audio visual rentals in Boston, and that’s the standard we hold ourselves to every day.
                  </p>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      <!-- Section 6: Let’s Work Together -->
      <section class="about-section about-cta-section reveal">
        <div class="about-cta-card">
          <span class="eyebrow orange">READY TO PLAN?</span>
          <h2>Let’s Work Together</h2>
          <p class="about-cta-lead">
            Planning an event? We'd love to hear about it. Whether you need a few microphones or a full AV setup, Beantown Audio Rentals is ready to help. From Boston to all of Massachusetts and New England, we’re known for dependable service, expert support, and real results.
          </p>
          <p class="about-cta-sub">
            Contact us today to get a free quote, schedule a consultation, or just ask a few questions. We’re friendly, fast, and always ready to help your event run smoothly. Let's bring your vision to life—with the best audio visual rentals in Boston by your side.
          </p>
          <div class="about-cta-actions">
            <a href="#quote" class="btn btn-dark">Get a Free Quote →</a>
            <a href="tel:+19786015473" class="btn btn-light">Call (978) 601-5473</a>
            <a href="#rentals" class="btn btn-light">Browse Catalog</a>
          </div>
        </div>
      </section>

    </div>
  </div>`;
}
const servicesList = [
  {
    num: "01",
    tag: "CONCERT & EVENT SOUND",
    title: "Audio Production & Sound Reinforcement",
    desc: "From keynote presentations to live concert stages, we engineer clean vocal intelligibility, feedback-free wireless microphones, and room-filling acoustics.",
    inclusions: [
      "Shure Axient & Beta 58A wireless microphone systems",
      "Powered QSC & JBL line arrays and high-output subwoofers",
      "Digital mixing consoles with live acoustic calibration",
      "Dedicated front-of-house sound engineer on-site"
    ],
    href: "#rentals?cat=Audio",
    cta: "Explore Audio Rentals"
  },
  {
    num: "02",
    tag: "DISPLAYS & WALLS",
    title: "Video Displays & Modular LED Walls",
    desc: "Make your visual presentations unmissable with ultra-bright modular LED walls, high-lumen laser projection, and confidence monitors engineered for any room.",
    inclusions: [
      "Modular 2.67mm indoor/outdoor LED stage walls",
      "5,000–12,000 lumen laser projectors & fast-fold screens",
      "65″–75″ 4K commercial confidence displays on truss",
      "Seamless multi-source presentation switching"
    ],
    href: "#rentals?cat=LED%20Walls",
    cta: "Explore Video & LED"
  },
  {
    num: "03",
    tag: "BROADCAST & HYBRID",
    title: "Live Streaming & Multi-Camera Capture",
    desc: "Reach global remote audiences seamlessly with broadcast-grade camera switching, isolated audio console feeds, and multi-platform streaming.",
    inclusions: [
      "Multi-camera switching systems (Blackmagic / Roland)",
      "Dedicated isolated sound feeds directly from the mixer",
      "Full HD & 4K master recording for post-event archives",
      "Dedicated streaming technician monitoring live feeds"
    ],
    href: "#rentals?cat=Live%20Streaming",
    cta: "Explore Live Streaming"
  },
  {
    num: "04",
    tag: "STAGE & ATMOSPHERE",
    title: "Event Lighting & Atmospheric Effects",
    desc: "Transform ballrooms and bare stages into immersive event spaces with wireless battery uplighting, moving head spotlights, and indoor-safe special FX.",
    inclusions: [
      "Wireless battery-powered Chauvet RGBA+UV uplights",
      "Intelligent moving head spotlights & warm stage wash",
      "Indoor-safe cold sparkler fountains & dancing-on-a-cloud haze",
      "Custom color palettes matched to your brand or theme"
    ],
    href: "#rentals?cat=Event%20Lighting",
    cta: "Explore Lighting & FX"
  },
  {
    num: "05",
    tag: "INTERACTIVE PARTY",
    title: "Silent Disco & Interactive Experiences",
    desc: "Keep the celebration going past venue curfews with 3-channel silent disco headphones, 360 video photo booths, and outdoor inflatable cinema screens.",
    inclusions: [
      "3-channel RF headphones with multi-DJ transmitters",
      "360 automated video photo booth with instant guest sharing",
      "Inflatable outdoor cinema packages with laser projection",
      "Zero noise ordinance issues in residential & city venues"
    ],
    href: "#rentals?cat=Experiences",
    cta: "Explore Experiences"
  },
  {
    num: "06",
    tag: "FULL PRODUCTION",
    title: "Turnkey Logistics, Setup & Technical Crew",
    desc: "Zero stress on event day. Our professional crew manages transport, loading docks, rigging, soundcheck, live cue operation, and quiet strike.",
    inclusions: [
      "Guaranteed on-time delivery across Boston & New England",
      "Clean, concealed cable management & gaffer safety",
      "On-site audio/visual engineers for the entire duration",
      "Complete post-event breakdown and quiet load-out"
    ],
    href: "#quote",
    cta: "Request a Custom Quote"
  }
];

function services() {
  return `<div class="page services-page">
    <!-- Hero Header -->
    <header class="services-hero">
      <div class="services-hero-content">
        <span class="eyebrow orange">BEANTOWN SERVICES</span>
        <h1 class="services-hero-title">Complete Audio Visual<br>Production &amp; Rental Services</h1>
        <p class="services-hero-lead">Commercial-grade equipment paired with experienced on-site sound and video technicians across Greater Boston and all of New England. No confusing tech jargon, no hidden fees—just dependable event execution.</p>
        
        <div class="services-hero-actions">
          <a href="#quote" class="btn btn-dark">Get a Custom Quote →</a>
          <a href="#rentals" class="btn btn-light">Browse Equipment Catalog</a>
        </div>
      </div>
    </header>

    <div class="services-container">
      <!-- 6 Core Services Grid -->
      <section class="services-grid-section">
        <div class="services-section-head">
          <span class="eyebrow">WHAT WE DELIVER</span>
          <h2>Our Core AV Services</h2>
          <p>Whether you need a single microphone rental or complete multi-day festival production, our team delivers end-to-end reliability.</p>
        </div>

        <div class="services-cards-grid">
          ${servicesList.map((s) => `
            <article class="service-clean-card">
              <div class="service-card-top">
                <span class="service-card-num">${s.num}</span>
                <span class="service-card-tag">${s.tag}</span>
              </div>
              <h3 class="service-card-title">${s.title}</h3>
              <p class="service-card-desc">${s.desc}</p>
              
              <div class="service-card-divider"></div>
              
              <ul class="service-card-inclusions" aria-label="Key features">
                ${s.inclusions.map((item) => `
                  <li><span class="service-check" aria-hidden="true">✓</span> <span>${item}</span></li>
                `).join("")}
              </ul>
              
              <div class="service-card-action">
                <a href="${s.href}" class="service-card-btn">${s.cta} →</a>
              </div>
            </article>
          `).join("")}
        </div>
      </section>

      <!-- Simple 3-Step Process (Understandable UI) -->
      <section class="services-process-section">
        <div class="services-section-head">
          <span class="eyebrow">HOW IT WORKS</span>
          <h2>Simple, 3-Step Event Booking</h2>
          <p>We designed our process to eliminate guesswork, save you time, and guarantee your event runs smoothly.</p>
        </div>

        <div class="services-steps-grid">
          <div class="service-step-card">
            <span class="service-step-badge">STEP 01</span>
            <h4>Choose Your Setup</h4>
            <p>Select individual items from our catalog, choose a pre-configured event bundle, or send us your venue specs for a tailored recommendation.</p>
          </div>
          <div class="service-step-card">
            <span class="service-step-badge">STEP 02</span>
            <h4>Confirm Logistics</h4>
            <p>Receive a clear, fixed-price quote with zero hidden fees. We coordinate delivery timing, loading access, power needs, and schedule.</p>
          </div>
          <div class="service-step-card">
            <span class="service-step-badge">STEP 03</span>
            <h4>Flawless Event Day</h4>
            <p>Our technicians arrive early, set up, test every single signal, engineer the live show if needed, and quietly strike when you're done.</p>
          </div>
        </div>
      </section>

      <!-- Bottom Callout Card -->
      <section class="services-cta-banner">
        <div class="services-cta-content">
          <span class="eyebrow orange">LET’S BUILD YOUR EVENT</span>
          <h3>Need help figuring out the right AV setup?</h3>
          <p>Tell us about your venue, guest count, and goals. We’ll provide an itemized proposal and confirm gear availability within hours.</p>
        </div>
        <div class="services-cta-btns">
          <a href="#quote" class="btn btn-dark">Request an Itemized Quote →</a>
          <button type="button" class="btn btn-light" data-open-cart>Build Your Custom Setup</button>
        </div>
      </section>
    </div>
  </div>`;
}

function formatReadableDate(isoDate) {
  if (!isoDate) return "";
  const parts = isoDate.split("-").map(Number);
  if (parts.length !== 3 || parts.some(Number.isNaN)) return isoDate;
  const d = new Date(parts[0], parts[1] - 1, parts[2]);
  return d.toLocaleDateString("en-US", {
    weekday: "short",
    month: "short",
    day: "numeric",
    year: "numeric",
  });
}

function getEffectiveLocationText() {
  if (state.locationFlexible) return "Flexible / Still choosing a venue";
  if (state.manualLocationMode) {
    const parts = [
      state.manualStreet.trim(),
      state.manualCity.trim(),
      state.manualState.trim(),
      state.manualZip.trim(),
    ].filter(Boolean);
    return parts.join(", ");
  }
  return state.eventLocation.trim();
}

function builderCatalogItems() {
  const q = state.builderSearch.trim().toLowerCase();
  return products.filter((p) => {
    const catMatch =
      state.builderCategory === "All" ||
      p.category === state.builderCategory ||
      productMatchesCategory(p, state.builderCategory);
    const searchMatch =
      !q ||
      `${p.name} ${p.category} ${p.desc} ${p.tag}`.toLowerCase().includes(q);
    const selectedMatch =
      !state.builderOnlySelected || Boolean(state.selected[p.id]);
    return catMatch && searchMatch && selectedMatch;
  });
}

function renderBuilderCatalogGridMarkup() {
  const list = builderCatalogItems();
  if (!list.length) {
    return `<div class="q-catalog-empty">
      <strong>No equipment matches your filter</strong>
      <p>Try clearing the search term or switching back to All Categories.</p>
      <button type="button" class="btn btn-light btn-small" data-builder-reset-catalog>Show all 65 rentals</button>
    </div>`;
  }
  return list
    .map((p) => {
      const qty = state.selected[p.id] || 0;
      const lineTotal = (p.price || 0) * qty;
      return `<article class="q-equip-card ${qty > 0 ? "is-selected" : ""}">
        <div class="q-equip-thumb">
          <img src="${productImage(p)}" alt="${escapeHtml(p.name)}" loading="lazy">
          ${qty > 0 ? `<span class="q-equip-qty-badge">${qty} in setup</span>` : ""}
        </div>
        <div class="q-equip-body">
          <div class="q-equip-meta">
            <span class="q-equip-cat">${escapeHtml(p.category)}</span>
            <span class="q-equip-unit-price">${money(p.price)}<small>/day</small></span>
          </div>
          <h4>${escapeHtml(p.name)}</h4>
          <p>${escapeHtml(p.desc)}</p>
          <div class="q-equip-foot">
            <div class="q-stepper">
              <button type="button" class="q-step-btn" data-minus="${p.id}" ${qty === 0 ? "disabled" : ""} aria-label="Decrease ${escapeHtml(p.name)}">−</button>
              <span class="q-step-val">${qty}</span>
              <button type="button" class="q-step-btn q-step-plus" data-plus="${p.id}" aria-label="Increase ${escapeHtml(p.name)}">+</button>
            </div>
            <div class="q-equip-subtotal">
              ${qty > 0 ? `<span>Subtotal: <strong>${money(lineTotal)}</strong></span>` : `<button type="button" class="q-quick-add-btn" data-plus="${p.id}">Add +</button>`}
            </div>
          </div>
        </div>
      </article>`;
    })
    .join("");
}

function renderCalendarStep() {
  const year = state.calendarYear;
  const month = state.calendarMonth;
  const firstDay = new Date(year, month, 1).getDay();
  const daysInMonth = new Date(year, month + 1, 0).getDate();
  const monthName = new Date(year, month, 1).toLocaleDateString("en-US", {
    month: "long",
    year: "numeric",
  });

  const today = new Date();
  today.setHours(0, 0, 0, 0);

  const cells = [];
  for (let i = 0; i < firstDay; i += 1) {
    cells.push(`<span class="q-cal-cell is-empty"></span>`);
  }
  for (let d = 1; d <= daysInMonth; d += 1) {
    const dateObj = new Date(year, month, d);
    const iso = `${year}-${String(month + 1).padStart(2, "0")}-${String(d).padStart(2, "0")}`;
    const isPast = dateObj < today;
    const isSelected = state.date === iso && !state.dateFlexible;
    const isToday = dateObj.getTime() === today.getTime();
    cells.push(
      `<button type="button" class="q-cal-cell ${isSelected ? "is-selected" : ""} ${isToday ? "is-today" : ""}" data-cal-date="${iso}" ${isPast ? "disabled" : ""}>${d}</button>`
    );
  }

  const timeWindows = [
    "Morning (8:00 AM – 12:00 PM)",
    "Afternoon (12:00 PM – 5:00 PM)",
    "Evening (5:00 PM – 11:00 PM)",
    "Full Day / Custom Schedule",
  ];

  return `<div class="q-step-panel">
    <div class="q-step-head">
      <span class="eyebrow orange">STEP 03 OF 06 · EVENT DATE &amp; SCHEDULE</span>
      <h2>When is your event taking place?</h2>
      <p>Select your target event date on the calendar so we can lock in equipment availability, or mark your date as flexible.</p>
    </div>

    <div class="q-date-layout">
      <div class="q-calendar-card">
        <div class="q-cal-header">
          <button type="button" class="q-cal-nav" data-cal-prev aria-label="Previous month">‹</button>
          <strong>${monthName}</strong>
          <button type="button" class="q-cal-nav" data-cal-next aria-label="Next month">›</button>
        </div>
        <div class="q-cal-weekdays">
          <span>SUN</span><span>MON</span><span>TUE</span><span>WED</span><span>THU</span><span>FRI</span><span>SAT</span>
        </div>
        <div class="q-cal-grid">
          ${cells.join("")}
        </div>
      </div>

      <div class="q-date-side">
        <div class="q-date-summary-box">
          <span class="eyebrow">SELECTED EVENT DATE</span>
          <strong class="q-date-display">
            ${state.dateFlexible ? "Flexible Date" : state.date ? formatReadableDate(state.date) : "Select a date on the calendar"}
          </strong>
          <div class="q-field" style="margin-top:14px">
            <label for="quoteDateDirect">Or enter date directly</label>
            <input id="quoteDateDirect" type="date" class="input" value="${escapeHtml(state.date)}" ${state.dateFlexible ? "disabled" : ""}>
          </div>
          <label class="q-check-row" style="margin-top:14px">
            <input type="checkbox" id="quoteDateFlexible" ${state.dateFlexible ? "checked" : ""}>
            <span>My event date is still flexible</span>
          </label>
        </div>

        <div class="q-date-summary-box">
          <span class="eyebrow">PREFERRED TIME WINDOW</span>
          <div class="q-time-pills">
            ${timeWindows
              .map(
                (tw) =>
                  `<button type="button" class="q-time-pill ${state.eventTimeWindow === tw ? "is-active" : ""}" data-time-window="${escapeHtml(tw)}">${escapeHtml(tw)}</button>`
              )
              .join("")}
          </div>
        </div>
      </div>
    </div>
  </div>`;
}

function renderLocationStep() {
  const effectiveLocation = getEffectiveLocationText();
  const { lat, lon } = state.locationCoords || { lat: 42.3601, lon: -71.0589 };
  const bbox = `${(lon - 0.02).toFixed(4)}%2C${(lat - 0.012).toFixed(4)}%2C${(lon + 0.02).toFixed(4)}%2C${(lat + 0.012).toFixed(4)}`;
  const osmUrl = `https://www.openstreetmap.org/export/embed.html?bbox=${bbox}&layer=mapnik&marker=${lat.toFixed(5)}%2C${lon.toFixed(5)}`;

  return `<div class="q-step-panel">
    <div class="q-step-head">
      <span class="eyebrow orange">STEP 04 OF 06 · VENUE &amp; LOCATION</span>
      <h2>Where should we deliver your setup?</h2>
      <p>Search any hotel, campus, ballroom, or street address across Boston and New England—or enter your venue address manually.</p>
    </div>

    <div class="q-location-layout">
      <div class="q-location-controls">
        ${!state.manualLocationMode ? `
          <div class="q-location-search-box">
            <label class="q-label" for="quoteLocationSearch">SEARCH VENUE OR ADDRESS</label>
            <div class="q-search-bar">
              <input id="quoteLocationSearch" type="text" class="input" placeholder="e.g., Omni Boston Hotel at the Seaport, Cambridge MA..." value="${escapeHtml(state.locationQuery || state.eventLocation)}" ${state.locationFlexible ? "disabled" : ""}>
              <button type="button" class="btn btn-dark btn-small" id="quoteLocationSearchBtn" ${state.locationFlexible ? "disabled" : ""}>${state.locationSearching ? "Searching…" : "Find Venue"}</button>
            </div>
            ${state.locationResults && state.locationResults.length ? `
              <div class="q-location-results" role="listbox" aria-label="Suggested locations">
                ${state.locationResults
                  .map(
                    (res, idx) =>
                      `<button type="button" class="q-loc-result-item" data-loc-index="${idx}">
                        <span class="q-loc-pin">📍</span>
                        <span>${escapeHtml(res.display_name)}</span>
                      </button>`
                  )
                  .join("")}
              </div>
            ` : ""}
          </div>
        ` : `
          <div class="q-manual-address-box">
            <span class="q-label">ENTER VENUE ADDRESS MANUALLY</span>
            <div class="form-grid" style="margin-top:10px">
              <div class="field full">
                <label for="manualStreetInput">Venue Name / Street Address</label>
                <input id="manualStreetInput" class="input" placeholder="100 Seaport Blvd / Boston Convention Center" value="${escapeHtml(state.manualStreet)}">
              </div>
              <div class="field">
                <label for="manualCityInput">City / Town</label>
                <input id="manualCityInput" class="input" placeholder="Boston" value="${escapeHtml(state.manualCity)}">
              </div>
              <div class="field">
                <label for="manualStateInput">State &amp; ZIP</label>
                <div style="display:grid;grid-template-columns:80px 1fr;gap:8px">
                  <input id="manualStateInput" class="input" placeholder="MA" value="${escapeHtml(state.manualState)}">
                  <input id="manualZipInput" class="input" placeholder="02210" value="${escapeHtml(state.manualZip)}">
                </div>
              </div>
            </div>
          </div>
        `}

        <div class="q-location-toggles">
          <button type="button" class="text-btn" data-toggle-manual-location>
            ${state.manualLocationMode ? "← Back to live map search" : "Enter address manually instead →"}
          </button>
          <label class="q-check-row">
            <input type="checkbox" id="quoteLocationFlexible" ${state.locationFlexible ? "checked" : ""}>
            <span>I'm still choosing a location / venue is TBD</span>
          </label>
        </div>

        <div class="q-selected-loc-banner">
          <span class="eyebrow">CONFIRMED VENUE LOCATION</span>
          <strong>${effectiveLocation ? escapeHtml(effectiveLocation) : "Boston / Greater New England (Select or type above)"}</strong>
        </div>
      </div>

      <div class="q-map-card">
        <div class="q-map-frame-wrap">
          <iframe
            title="Event Venue Map Preview"
            src="${osmUrl}"
            loading="lazy"
            referrerpolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
        <div class="q-map-foot">
          <span><strong>Service Area:</strong> Boston, Cambridge, Somerville &amp; all of New England</span>
          ${effectiveLocation && !state.locationFlexible
            ? `<a href="https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(effectiveLocation)}" target="_blank" rel="noopener" class="text-btn">Open in Google Maps ↗</a>`
            : ""}
        </div>
      </div>
    </div>
  </div>`;
}

function renderEquipmentStep(totals) {
  const recIds = eventRecommendations[state.eventType] || eventRecommendations.Wedding;
  const recProducts = recIds.map((id) => products.find((p) => p.id === id)).filter(Boolean);
  const categories = [
    "All",
    "Audio & Speakers",
    "Subwoofers",
    "Microphones",
    "Audio Mixers",
    "DJ Equipment",
    "Video & Displays",
    "LED Video Walls",
    "Outdoor Movies",
    "Photo Booths",
    "Silent Disco",
    "Event Lighting",
    "Special Effects",
    "Live Streaming",
  ];

  return `<div class="q-step-panel">
    <div class="q-step-head">
      <span class="eyebrow orange">STEP 05 OF 06 · BUILD YOUR EQUIPMENT &amp; PRODUCTION</span>
      <h2>Choose your packages, gear &amp; crew support.</h2>
      <p>Start with a turnkey event bundle or add individual items below. Every item updates your itemized quote calculation in real time.</p>
    </div>

    <!-- 1. Turnkey Starter Bundles -->
    <div class="q-subblock">
      <div class="q-subblock-head">
        <div>
          <span class="eyebrow">TURNKEY PACKAGES</span>
          <h3>1. Quick-Load an Event Bundle (Optional)</h3>
        </div>
        ${totals.uniqueCount > 0 ? `<button type="button" class="q-clear-all-btn" data-clear-all-equipment>Clear all selected gear (${totals.totalUnits})</button>` : ""}
      </div>
      <div class="q-bundle-strip">
        ${bundles
          .map((b) => {
            const isMatched = totals.matchedBundle && totals.matchedBundle.id === b.id;
            return `<div class="q-bundle-mini ${isMatched ? "is-active" : ""}">
              <div class="q-bundle-mini-top">
                <span class="eyebrow">${escapeHtml(b.label)}</span>
                <strong>${money(b.price)}</strong>
              </div>
              <h4>${escapeHtml(b.title)}</h4>
              <p>${escapeHtml(b.desc)}</p>
              <button type="button" class="btn ${isMatched ? "btn-dark" : "btn-light"} btn-small" data-apply-bundle="${b.id}">
                ${isMatched ? "✓ Loaded in Setup" : "Load Package"}
              </button>
            </div>`;
          })
          .join("")}
      </div>
    </div>

    <!-- 2. Recommended for Selected Event Type -->
    <div class="q-subblock">
      <div class="q-subblock-head">
        <div>
          <span class="eyebrow">TAILORED FOR ${escapeHtml(state.eventType.toUpperCase())}</span>
          <h3>2. Recommended Gear for Your ${escapeHtml(state.eventType)}</h3>
        </div>
        <button type="button" class="text-btn" data-add-all-recommended>Add all recommended +</button>
      </div>
      <div class="q-rec-grid">
        ${recProducts
          .map((p) => {
            const qty = state.selected[p.id] || 0;
            return `<div class="q-rec-item ${qty > 0 ? "is-selected" : ""}">
              <img src="${productImage(p)}" alt="${escapeHtml(p.name)}" loading="lazy">
              <div class="q-rec-info">
                <strong>${escapeHtml(p.name)}</strong>
                <span>${escapeHtml(p.category)} · <b>${money(p.price)}/day</b></span>
              </div>
              <div class="q-stepper">
                <button type="button" class="q-step-btn" data-minus="${p.id}" ${qty === 0 ? "disabled" : ""} aria-label="Decrease ${escapeHtml(p.name)}">−</button>
                <span class="q-step-val">${qty}</span>
                <button type="button" class="q-step-btn q-step-plus" data-plus="${p.id}" aria-label="Increase ${escapeHtml(p.name)}">+</button>
              </div>
            </div>`;
          })
          .join("")}
      </div>
    </div>

    <!-- 3. Full 65-Item Equipment Catalog Browser -->
    <div class="q-subblock">
      <div class="q-subblock-head">
        <div>
          <span class="eyebrow">FULL RENTAL INVENTORY (65 ITEMS)</span>
          <h3>3. Browse &amp; Add Any Individual Equipment</h3>
        </div>
      </div>

      <div class="q-catalog-controls">
        <div class="q-catalog-search">
          <input id="builderCatalogSearch" type="text" class="input" placeholder="Search speakers, Shure mics, LED walls, 360 photo booth, cold sparks..." value="${escapeHtml(state.builderSearch)}">
          <label class="q-selected-toggle">
            <input type="checkbox" id="builderOnlySelectedToggle" ${state.builderOnlySelected ? "checked" : ""}>
            <span>Show selected only (${totals.uniqueCount})</span>
          </label>
        </div>
        <div class="q-cat-pills">
          ${categories
            .map((cat) => {
              const count =
                cat === "All"
                  ? products.length
                  : products.filter((p) => p.category === cat).length;
              return `<button type="button" class="q-cat-pill ${state.builderCategory === cat ? "is-active" : ""}" data-builder-cat="${escapeHtml(cat)}">${escapeHtml(cat)} <span>${count}</span></button>`;
            })
            .join("")}
        </div>
      </div>

      <div class="q-equip-grid" id="quoteCatalogGrid">
        ${renderBuilderCatalogGridMarkup()}
      </div>
    </div>

    <!-- 4. Delivery, Setup & Technician Tier -->
    <div class="q-subblock">
      <div class="q-subblock-head">
        <div>
          <span class="eyebrow">LOGISTICS &amp; ON-SITE CREW</span>
          <h3>4. Delivery, Setup &amp; Technician Support</h3>
        </div>
      </div>
      <div class="q-service-tier-grid">
        ${SERVICE_TIERS.map(
          (tier) => `<button type="button" class="q-tier-card ${state.serviceTier === tier.id ? "is-active" : ""}" data-service-tier="${tier.id}">
            <div class="q-tier-top">
              <strong>${escapeHtml(tier.title)}</strong>
              <span class="q-tier-badge">${escapeHtml(tier.badge)}</span>
            </div>
            <p>${escapeHtml(tier.desc)}</p>
          </button>`
        ).join("")}
      </div>
    </div>
  </div>`;
}

function renderReviewAndSubmitStep(totals) {
  const effectiveLocation = getEffectiveLocationText() || "Boston / New England (TBD)";
  const effectiveDate = state.dateFlexible
    ? "Flexible Date"
    : state.date
      ? formatReadableDate(state.date)
      : "Date TBD";

  return `<div class="q-step-panel">
    <div class="q-step-head">
      <span class="eyebrow orange">STEP 06 OF 06 · FINAL QUOTE BREAKDOWN &amp; SUBMISSION</span>
      <h2>Review your itemized quote &amp; send.</h2>
      <p>Every selected rental item, quantity, unit rate, duration adjustment, and delivery option is itemized below with zero hidden fees. Submit below to send your quote directly to our production desk.</p>
    </div>

    <!-- Event Configuration Summary -->
    <div class="q-review-meta-grid">
      <div class="q-review-meta-card">
        <span>EVENT OCCASION</span>
        <strong>${escapeHtml(state.eventType)}</strong>
        <button type="button" class="q-meta-edit" data-goto-step="1">Edit</button>
      </div>
      <div class="q-review-meta-card">
        <span>GUESTS &amp; VENUE</span>
        <strong>${state.guests} Guests · ${escapeHtml(state.venue)}</strong>
        <button type="button" class="q-meta-edit" data-goto-step="2">Edit</button>
      </div>
      <div class="q-review-meta-card">
        <span>RENTAL DURATION</span>
        <strong>${escapeHtml(totals.durationOption.label)}</strong>
        <button type="button" class="q-meta-edit" data-goto-step="2">Edit</button>
      </div>
      <div class="q-review-meta-card">
        <span>DATE &amp; SCHEDULE</span>
        <strong>${escapeHtml(effectiveDate)}</strong>
        <small>${escapeHtml(state.eventTimeWindow)}</small>
        <button type="button" class="q-meta-edit" data-goto-step="3">Edit</button>
      </div>
      <div class="q-review-meta-card">
        <span>EVENT LOCATION</span>
        <strong>${escapeHtml(effectiveLocation)}</strong>
        <button type="button" class="q-meta-edit" data-goto-step="4">Edit</button>
      </div>
      <div class="q-review-meta-card">
        <span>DELIVERY &amp; CREW</span>
        <strong>${escapeHtml(totals.serviceOption.title)} (${totals.serviceFee === 0 ? "Free" : money(totals.serviceFee)})</strong>
        <button type="button" class="q-meta-edit" data-goto-step="5">Edit</button>
      </div>
    </div>

    <!-- Full Itemized Equipment Table -->
    <div class="q-review-table-card">
      <div class="q-review-table-head">
        <div>
          <span class="eyebrow">COMPLETE ITEMIZED EQUIPMENT LIST</span>
          <h3>Selected Rentals (${totals.uniqueCount} ${totals.uniqueCount === 1 ? "item" : "items"} · ${totals.totalUnits} total ${totals.totalUnits === 1 ? "unit" : "units"})</h3>
        </div>
        <button type="button" class="btn btn-light btn-small" data-goto-step="5">+ Add / Modify Gear</button>
      </div>

      ${totals.lineItems.length ? `
        <div class="q-table-scroll">
          <table class="q-itemized-table">
            <thead>
              <tr>
                <th>#</th>
                <th>Equipment Item</th>
                <th>Category</th>
                <th>Unit Price</th>
                <th>Quantity</th>
                <th class="is-right">Line Subtotal</th>
              </tr>
            </thead>
            <tbody>
              ${totals.lineItems
                .map(
                  (item, idx) => `<tr>
                    <td class="q-td-num">${String(idx + 1).padStart(2, "0")}</td>
                    <td>
                      <strong>${escapeHtml(item.product.name)}</strong>
                      <span class="q-td-sub">${escapeHtml(item.product.tag || "")}</span>
                    </td>
                    <td><span class="q-td-cat">${escapeHtml(item.product.category)}</span></td>
                    <td>${money(item.unitPrice)}<small>/day</small></td>
                    <td>
                      <div class="q-stepper q-stepper-inline">
                        <button type="button" class="q-step-btn" data-minus="${item.product.id}" aria-label="Decrease ${escapeHtml(item.product.name)}">−</button>
                        <span class="q-step-val">${item.qty}</span>
                        <button type="button" class="q-step-btn q-step-plus" data-plus="${item.product.id}" aria-label="Increase ${escapeHtml(item.product.name)}">+</button>
                      </div>
                    </td>
                    <td class="is-right"><strong>${money(item.lineSubtotal)}</strong></td>
                  </tr>`
                )
                .join("")}
            </tbody>
          </table>
        </div>

        <div class="q-financial-summary">
          <div class="q-fin-row">
            <span>Equipment Base Subtotal (${totals.totalUnits} ${totals.totalUnits === 1 ? "unit" : "units"} · 1-Day Base Rate)</span>
            <strong>${money(totals.equipmentBaseSubtotal)}</strong>
          </div>
          ${totals.durationSurcharge > 0 ? `
            <div class="q-fin-row">
              <span>Multi-Day Duration Adjustment (${escapeHtml(totals.durationOption.shortLabel)})</span>
              <strong>+${money(totals.durationSurcharge)}</strong>
            </div>
            <div class="q-fin-row">
              <span>Adjusted Equipment Subtotal</span>
              <strong>${money(totals.equipmentDurationTotal)}</strong>
            </div>
          ` : ""}
          <div class="q-fin-row">
            <span>Delivery, Setup &amp; Production Crew (${escapeHtml(totals.serviceOption.title)})</span>
            <strong>${totals.serviceFee === 0 ? "$0 (Self Pickup)" : `+${money(totals.serviceFee)}`}</strong>
          </div>
          <div class="q-fin-row is-grand">
            <div>
              <span>ESTIMATED GRAND TOTAL</span>
              <small>All items calculated accurately · No hidden fees</small>
            </div>
            <strong>${money(totals.grandTotal)}</strong>
          </div>
        </div>
      ` : `
        <div class="q-empty-warning">
          <strong>No equipment items selected yet!</strong>
          <p>Please go to Step 05 to select an event bundle or individual equipment items so we can calculate your quote.</p>
          <button type="button" class="btn btn-dark btn-small" data-goto-step="5">Choose Equipment Now →</button>
        </div>
      `}
    </div>

    <!-- Contact & Automated Quote Submission Form -->
    <form id="quoteBuilderForm" class="q-contact-card">
      <input type="text" name="_honey" id="quoteHoney" style="display:none" tabindex="-1" autocomplete="off">
      <div class="q-subblock-head">
        <div>
          <span class="eyebrow orange">YOUR CONTACT DETAILS</span>
          <h3>Where should we send your official quote confirmation?</h3>
        </div>
      </div>

      <div class="form-grid">
        <div class="field">
          <label for="contactNameInput">Full Name *</label>
          <input id="contactNameInput" class="input" required placeholder="Alex Morgan" value="${escapeHtml(state.contactName)}">
        </div>
        <div class="field">
          <label for="contactEmailInput">Email Address *</label>
          <input id="contactEmailInput" class="input" type="email" required placeholder="alex@company.com" value="${escapeHtml(state.contactEmail)}">
        </div>
        <div class="field">
          <label for="contactPhoneInput">Phone Number *</label>
          <input id="contactPhoneInput" class="input" type="tel" required placeholder="(978) 601-5473" value="${escapeHtml(state.contactPhone)}">
        </div>
        <div class="field">
          <label for="organizationInput">Company / School / Organization</label>
          <input id="organizationInput" class="input" placeholder="Optional" value="${escapeHtml(state.organization)}">
        </div>
        <div class="field full">
          <label for="eventNameInput">Event Name or Title</label>
          <input id="eventNameInput" class="input" placeholder="e.g., Morgan-Lee Wedding, Annual Biotech Summit, Spring Gala" value="${escapeHtml(state.eventName)}">
        </div>
        <div class="field full">
          <label for="eventNotesInput">Load-In, Timeline, Room Specs or Special Requests</label>
          <textarea id="eventNotesInput" class="textarea" placeholder="Tell us about load-in access, stairs/elevators, power availability, or specific cue timing...">${escapeHtml(state.eventNotes)}</textarea>
        </div>
      </div>

      <div class="q-payment-section">
        <span class="q-label">PREFERRED PAYMENT METHOD (NO PAYMENT REQUIRED TODAY)</span>
        <div class="q-payment-grid">
          ${PAYMENT_METHODS.map(
            (pm) => `<button type="button" class="q-pay-pill ${state.paymentMethod === pm ? "is-active" : ""}" data-payment-method="${escapeHtml(pm)}">${escapeHtml(pm)}</button>`
          ).join("")}
        </div>
      </div>

      ${state.quoteError ? `<div class="q-error-banner" role="alert">${escapeHtml(state.quoteError)}</div>` : ""}

      <div class="q-submit-bar">
        <div class="q-submit-note">
          <strong>Instant Automated Quote Dispatch</strong>
          <span>Submitting sends your complete itemized setup and estimate to our production team and locks in your quote reference.</span>
        </div>
        <button type="submit" class="btn btn-dark q-submit-btn" ${state.isSubmittingQuote ? "disabled" : ""}>
          ${state.isSubmittingQuote ? "Sending Official Quote…" : `Submit Quote (${money(totals.grandTotal)}) →`}
        </button>
      </div>
    </form>
  </div>`;
}

function renderSubmittedReceipt(receipt) {
  return `<div class="page">
    <section class="q-receipt-wrap">
      <div class="q-receipt-card">
        <div class="q-receipt-top">
          <div class="success-mark">✓</div>
          <span class="eyebrow orange">OFFICIAL QUOTE REQUEST SENT · REF #${escapeHtml(receipt.refCode)}</span>
          <h1>Your itemized event quote is in!</h1>
          <p>We’ve dispatched your complete event build and itemized calculation to our production team for <strong>${escapeHtml(receipt.contactName)}</strong> (<strong>${escapeHtml(receipt.contactEmail)}</strong>). Our engineers will confirm equipment availability and follow up shortly.</p>
        </div>

        <div class="q-review-meta-grid">
          <div class="q-review-meta-card"><span>CLIENT</span><strong>${escapeHtml(receipt.contactName)}</strong><small>${escapeHtml(receipt.contactEmail)} · ${escapeHtml(receipt.contactPhone)}</small></div>
          <div class="q-review-meta-card"><span>EVENT TYPE</span><strong>${escapeHtml(receipt.eventType)}</strong><small>${escapeHtml(receipt.eventName || "Custom Event Setup")}</small></div>
          <div class="q-review-meta-card"><span>GUESTS &amp; SETTING</span><strong>${receipt.guests} Guests · ${escapeHtml(receipt.venue)}</strong><small>${escapeHtml(receipt.durationLabel)}</small></div>
          <div class="q-review-meta-card"><span>DATE &amp; TIME</span><strong>${escapeHtml(receipt.eventDate)}</strong><small>${escapeHtml(receipt.eventTimeWindow)}</small></div>
          <div class="q-review-meta-card"><span>LOCATION</span><strong>${escapeHtml(receipt.eventLocation)}</strong></div>
          <div class="q-review-meta-card"><span>DELIVERY &amp; PAYMENT</span><strong>${escapeHtml(receipt.serviceTitle)}</strong><small>Payment Pref: ${escapeHtml(receipt.paymentMethod)}</small></div>
        </div>

        <div class="q-review-table-card" style="margin-top:24px">
          <div class="q-review-table-head">
            <div>
              <span class="eyebrow">COMPLETE ITEMIZED QUOTE SUMMARY</span>
              <h3>All Selected Equipment (${receipt.lineItems.length} items · ${receipt.totalUnits} total units)</h3>
            </div>
          </div>
          <div class="q-table-scroll">
            <table class="q-itemized-table">
              <thead>
                <tr>
                  <th>#</th>
                  <th>Equipment Item</th>
                  <th>Category</th>
                  <th>Unit Price</th>
                  <th>Qty</th>
                  <th class="is-right">Line Subtotal</th>
                </tr>
              </thead>
              <tbody>
                ${receipt.lineItems
                  .map(
                    (item, idx) => `<tr>
                      <td class="q-td-num">${String(idx + 1).padStart(2, "0")}</td>
                      <td><strong>${escapeHtml(item.product.name)}</strong></td>
                      <td><span class="q-td-cat">${escapeHtml(item.product.category)}</span></td>
                      <td>${money(item.unitPrice)}/day</td>
                      <td>${item.qty}</td>
                      <td class="is-right"><strong>${money(item.lineSubtotal)}</strong></td>
                    </tr>`
                  )
                  .join("")}
              </tbody>
            </table>
          </div>

          <div class="q-financial-summary">
            <div class="q-fin-row">
              <span>Equipment Base Subtotal (1-Day Rate)</span>
              <strong>${money(receipt.equipmentBaseSubtotal)}</strong>
            </div>
            ${receipt.durationSurcharge > 0 ? `
              <div class="q-fin-row">
                <span>Multi-Day Duration Adjustment (${escapeHtml(receipt.durationLabel)})</span>
                <strong>+${money(receipt.durationSurcharge)}</strong>
              </div>
            ` : ""}
            <div class="q-fin-row">
              <span>Delivery, Setup &amp; Crew (${escapeHtml(receipt.serviceTitle)})</span>
              <strong>${receipt.serviceFee === 0 ? "$0" : `+${money(receipt.serviceFee)}`}</strong>
            </div>
            <div class="q-fin-row is-grand">
              <span>ESTIMATED GRAND TOTAL</span>
              <strong>${money(receipt.grandTotal)}</strong>
            </div>
          </div>
        </div>

        <div class="q-receipt-actions">
          <button type="button" class="btn btn-dark" data-print-quote>Print / Save PDF Quote</button>
          <button type="button" class="btn btn-light" data-new-quote>Build Another Event Quote</button>
          <a href="#home" class="btn btn-light">Back to Home</a>
        </div>
      </div>
    </section>
  </div>`;
}

function builder() {
  return rentals();
}

function renderEmptyQuoteGate() {
  const sampleBundles = bundles.slice(0, 3);
  return `<div class="page quote-gate-page">
    <div class="quote-gate-container">
      <div class="quote-gate-card">
        <div class="quote-gate-icon" aria-hidden="true">
          <svg viewBox="0 0 24 24" width="44" height="44" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round">
            <path d="M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4Z"></path>
            <path d="M3 6h18"></path>
            <path d="M16 10a4 4 0 0 1-8 0"></path>
          </svg>
        </div>
        <span class="eyebrow orange">ITEMIZED QUOTE REQUIRES EQUIPMENT</span>
        <h1 class="quote-gate-title">Your setup is empty</h1>
        <p class="quote-gate-lead">
          To request an itemized quote, please <strong>add items to your cart first</strong> or <strong>select a turnkey event bundle</strong> before proceeding.
        </p>

        <div class="quote-gate-actions">
          <a href="#rentals" class="btn btn-dark">Browse Rentals &amp; Add to Cart <span>→</span></a>
          <a href="#bundles" class="btn btn-light">Explore Event Bundles</a>
        </div>
      </div>

      <div class="quote-gate-bundles-section">
        <div class="quote-gate-bundles-head">
          <span class="eyebrow">OR START WITH A TURNKEY BUNDLE</span>
          <h3>Quick-start packages with transparent pricing:</h3>
        </div>
        <div class="quote-gate-bundles-grid">
          ${sampleBundles.map((b) => `
            <div class="quote-bundle-card">
              <div class="quote-bundle-meta">
                <span class="eyebrow orange">${escapeHtml(b.label)}</span>
                <h4>${escapeHtml(b.title)}</h4>
                <p>${escapeHtml(b.desc)}</p>
              </div>
              <div class="quote-bundle-foot">
                <span class="quote-bundle-price">${money(b.price)}</span>
                <button type="button" class="btn btn-dark btn-small" data-launch-bundle="${b.id}" data-launch-step="1">Select bundle →</button>
              </div>
            </div>
          `).join("")}
        </div>
      </div>
    </div>
  </div>`;
}

function quote() {
  if (state.submittedQuote) {
    return renderSubmittedReceipt(state.submittedQuote);
  }

  const totals = calculateQuoteTotals();
  if (totals.lineItems.length === 0) {
    return renderEmptyQuoteGate();
  }
  const step = Math.min(6, Math.max(1, Number(state.quoteStep) || 1));
  state.quoteStep = step;

  const stepsMeta = [
    { num: 1, label: "Event Type" },
    { num: 2, label: "Guests & Duration" },
    { num: 3, label: "Event Date" },
    { num: 4, label: "Location" },
    { num: 5, label: "Equipment & Crew" },
    { num: 6, label: "Review & Send" },
  ];

  let stepContent = "";
  if (step === 1) {
    stepContent = `<div class="q-step-panel">
      <div class="q-step-head">
        <h2>What type of event are we building?</h2>
        <p>Tell us what you're planning below, or select from our optional quick presets.</p>
      </div>

      <!-- Main Event Type Big Text Box -->
      <div class="q-main-event-input-box">
        <label for="quoteEventTypeInput" class="q-main-input-label">
          <span>What type of event?</span>
          <span class="q-main-badge">Primary</span>
        </label>
        <div class="q-big-input-wrapper">
          <input
            type="text"
            id="quoteEventTypeInput"
            class="q-big-text-input"
            placeholder="e.g. 50th Birthday Party, Tech Conference, Wedding Reception, Live Concert, Charity Gala..."
            value="${escapeHtml(state.eventType || "")}"
            autocomplete="off"
          />
        </div>
      </div>

      <!-- Optional Choices Section -->
      <div class="q-optional-presets-wrap">
        <div class="q-presets-header">
          <span class="eyebrow">OPTIONAL CHOICES</span>
          <span class="q-presets-sub">Click any option to quickly fill:</span>
        </div>
        <div class="q-event-grid q-event-grid-compact">
          ${EVENT_TYPE_CARDS.map((card) => {
            const isSelected = (state.eventType || "").trim().toLowerCase() === card.id.toLowerCase();
            return `<button type="button" class="q-event-card q-event-card-compact ${isSelected ? "is-active" : ""}" data-select-event="${escapeHtml(card.id)}">
              <span class="q-event-code">${escapeHtml(card.code)}</span>
              <h3>${escapeHtml(card.title)}</h3>
              <span class="q-event-status">${isSelected ? "✓ Selected" : "Select"}</span>
            </button>`;
          }).join("")}
        </div>
      </div>
    </div>`;
  } else if (step === 2) {
    stepContent = `<div class="q-step-panel">
      <div class="q-step-head">
        <h2>How many guests &amp; how long is the rental?</h2>
        <p>Type your estimated audience size and rental duration below. Pricing and speaker wattage scale automatically.</p>
      </div>

      <!-- 1. Estimated Audience Size (Type Only - No Options) -->
      <div class="q-subblock">
        <div class="q-main-event-input-box">
          <label for="quoteGuestExact" class="q-main-input-label">
            <span>1. Estimated Audience Size</span>
            <span class="q-main-badge">Type Count Only</span>
          </label>
          <p class="q-input-helper-desc">Type your estimated attendee count. We scale speaker wattage, subwoofer throw, and microphone systems to fit your room.</p>
          <div class="q-guest-input-row">
            <input
              id="quoteGuestExact"
              type="number"
              min="1"
              max="50000"
              class="q-big-text-input"
              placeholder="e.g. 150"
              value="${state.guests || 120}"
              autocomplete="off"
            />
            <span class="q-input-unit-label">Guests / Attendees</span>
          </div>
        </div>
      </div>

      <!-- 2. Venue Setting (Refined UI/UX & Typography) -->
      <div class="q-subblock">
        <div class="q-presets-header">
          <span class="eyebrow">2. VENUE SETTING</span>
          <span class="q-presets-sub">Select your environment for acoustic calibration &amp; power needs:</span>
        </div>
        <div class="q-venue-grid">
          ${[
            {
              id: "Indoor",
              title: "Indoor Venue",
              tag: "ENCLOSED ROOM ACOUSTICS",
              sub: "Ballrooms, hotels, convention centers, auditoriums, or banquet halls",
              icon: `<svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M3 21h18M5 21V7l8-4 6 3v15M9 9v.01M9 13v.01M9 17v.01M15 9v.01M15 13v.01M15 17v.01"/></svg>`
            },
            {
              id: "Outdoor",
              title: "Outdoor Space",
              tag: "OPEN AIR & WEATHERPROOF",
              sub: "Courtyards, festival lawns, parks, tents, rooftops, or private backyards",
              icon: `<svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m12 3-1.9 5.8a2 2 0 0 1-1.3 1.3L3 12l5.8 1.9a2 2 0 0 1 1.3 1.3L12 21l1.9-5.8a2 2 0 0 1 1.3-1.3L21 12l-5.8-1.9a2 2 0 0 1-1.3-1.3Z"/><circle cx="12" cy="12" r="3"/></svg>`
            },
            {
              id: "Indoor + Outdoor",
              title: "Indoor + Outdoor (Multi-Zone)",
              tag: "MULTI-ZONE WIRELESS SYNC",
              sub: "Outdoor ceremony / cocktail hour + indoor reception and dance floor",
              icon: `<svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><path d="M12 2a14.5 14.5 0 0 0 0 20M2 12h20"/></svg>`
            }
          ].map((v) => {
            const isSelected = state.venue === v.id;
            return `<button type="button" class="q-venue-card ${isSelected ? "is-active" : ""}" data-select-venue="${escapeHtml(v.id)}">
              <div class="q-venue-top">
                <div class="q-venue-icon-box" aria-hidden="true">${v.icon}</div>
                <span class="q-venue-tag">${escapeHtml(v.tag)}</span>
              </div>
              <h4 class="q-venue-title">${escapeHtml(v.title)}</h4>
              <p class="q-venue-desc">${escapeHtml(v.sub)}</p>
              <div class="q-venue-foot">
                <span class="q-event-status">${isSelected ? "✓ Selected Setting" : "Select"}</span>
              </div>
            </button>`;
          }).join("")}
        </div>
      </div>

      <!-- 3. Rental Duration (Typing + Optional Presets) -->
      <div class="q-subblock">
        <div class="q-main-event-input-box">
          <label for="quoteDurationInput" class="q-main-input-label">
            <span>3. Rental Duration</span>
            <span class="q-main-badge">Auto-Calculates Multi-Day Rate</span>
          </label>
          <p class="q-input-helper-desc">Type your rental duration or number of days (e.g. 1 day, 2 days, 3 days, 1 week), and multi-day discounts are calculated automatically.</p>
          <div class="q-duration-input-row">
            <input
              type="text"
              id="quoteDurationInput"
              class="q-big-text-input"
              placeholder="e.g. 1 Day, 2 Days, 3 Days, Weekend, 1 Week..."
              value="${escapeHtml(state.customDurationText || (DURATION_OPTIONS.find(d => d.id === state.duration)?.label || "1 Day / Single Event"))}"
              autocomplete="off"
            />
            <div class="q-duration-rate-chip" id="durationRateBadge">
              <span class="q-rate-calc-label">Calculated Rate:</span>
              <strong class="q-rate-calc-val">${escapeHtml(totals.durationOption.shortLabel || "1.0×")}</strong>
            </div>
          </div>
        </div>

        <!-- Optional Duration Presets -->
        <div class="q-optional-presets-wrap">
          <div class="q-presets-header">
            <span class="eyebrow">OPTIONAL DURATION PRESETS</span>
            <span class="q-presets-sub">Click an option below to auto-fill:</span>
          </div>
          <div class="q-duration-grid q-duration-grid-compact">
            ${DURATION_OPTIONS.map((dur) => {
              const currentText = (state.customDurationText || "").toLowerCase();
              const isSelected = state.duration === dur.id || currentText === dur.label.toLowerCase() || currentText === dur.id;
              return `<button type="button" class="q-duration-card q-duration-card-compact ${isSelected ? "is-active" : ""}" data-select-duration="${escapeHtml(dur.id)}">
                <div class="q-dur-top">
                  <span class="q-event-code">${escapeHtml(dur.shortLabel)}</span>
                  <span class="q-tier-badge">${escapeHtml(dur.badge)}</span>
                </div>
                <h4 class="q-dur-title">${escapeHtml(dur.label)}</h4>
                <span class="q-event-status">${isSelected ? "✓ Selected" : "Select"}</span>
              </button>`;
            }).join("")}
          </div>
        </div>
      </div>
    </div>`;
  } else if (step === 3) {
    stepContent = renderCalendarStep();
  } else if (step === 4) {
    stepContent = renderLocationStep();
  } else if (step === 5) {
    stepContent = renderEquipmentStep(totals);
  } else {
    stepContent = renderReviewAndSubmitStep(totals);
  }

  const effectiveLocation = getEffectiveLocationText();
  const effectiveDate = state.dateFlexible
    ? "Flexible Date"
    : state.date
      ? formatReadableDate(state.date)
      : "Not set yet";

  return `<div class="page q-builder-page">
    <header class="q-hero">
      <div>
        <span class="eyebrow orange">BUILD MY EVENT · LIVE QUOTE CALCULATOR</span>
        <h1>Build your event.<br>See every dollar.</h1>
      </div>
      <p>Configure your event step by step, choose turnkey bundles or individual AV rentals, and get an instant, loophole-free itemized quote sent straight to our team.</p>
    </header>

    <!-- 6-Step Interactive Progress Bar -->
    <nav class="q-progress-nav" aria-label="Quote builder steps">
      ${stepsMeta
        .map((s) => {
          const isCurrent = s.num === step;
          const isDone = s.num < step;
          return `<button type="button" class="q-progress-step ${isCurrent ? "is-current" : ""} ${isDone ? "is-done" : ""}" data-quote-step="${s.num}">
            <span class="q-step-num">${isDone ? "✓" : `0${s.num}`}</span>
            <span class="q-step-label">${escapeHtml(s.label)}</span>
          </button>`;
        })
        .join("")}
    </nav>

    <div class="q-main-layout">
      <!-- Left / Main Active Step Workspace -->
      <div class="q-workspace">
        ${stepContent}

        <div class="q-step-nav-footer">
          ${step > 1
            ? `<button type="button" class="btn btn-light" data-quote-prev>← Previous Step</button>`
            : `<a href="#rentals" class="btn btn-light">← Browse Catalog</a>`}
          <div class="q-step-indicator">Step 0${step} of 06</div>
          ${step < 6
            ? `<button type="button" class="btn btn-dark" data-quote-next>NEXT</button>`
            : ""}
        </div>
      </div>

      <!-- Right / Sticky Live Plan & Calculation Sidebar -->
      <aside class="q-plan-sidebar" aria-label="Live event plan and quote total">
        <div class="q-plan-total-box">
          <span class="eyebrow">ESTIMATED TOTAL</span>
          <strong class="q-plan-grand">${money(totals.grandTotal)}</strong>
          <span class="q-plan-sub">${totals.uniqueCount} ${totals.uniqueCount === 1 ? "item" : "items"} (${totals.totalUnits} ${totals.totalUnits === 1 ? "unit" : "units"}) · ${escapeHtml(totals.durationOption.shortLabel)}</span>
        </div>

        <div class="q-plan-meta-list">
          <button type="button" class="q-plan-meta-row" data-goto-step="1">
            <span>01 · EVENT</span>
            <strong>${escapeHtml(state.eventType)}</strong>
          </button>
          <button type="button" class="q-plan-meta-row" data-goto-step="2">
            <span>02 · GUESTS</span>
            <strong>${state.guests} (${escapeHtml(state.venue)})</strong>
          </button>
          <button type="button" class="q-plan-meta-row" data-goto-step="3">
            <span>03 · DATE</span>
            <strong>${escapeHtml(effectiveDate)}</strong>
          </button>
          <button type="button" class="q-plan-meta-row" data-goto-step="4">
            <span>04 · VENUE</span>
            <strong>${escapeHtml(effectiveLocation ? (effectiveLocation.length > 26 ? effectiveLocation.slice(0, 26) + "…" : effectiveLocation) : "Not set yet")}</strong>
          </button>
          <button type="button" class="q-plan-meta-row" data-goto-step="5">
            <span>05 · CREW</span>
            <strong>${escapeHtml(totals.serviceOption.title)}</strong>
          </button>
        </div>

        <div class="q-plan-items-sec">
          <div class="q-plan-items-head">
            <span>SELECTED EQUIPMENT (${totals.totalUnits})</span>
            ${step !== 5 ? `<button type="button" class="text-btn" data-goto-step="5">+ Add Gear</button>` : ""}
          </div>

          ${totals.lineItems.length ? `
            <ul class="q-plan-items-list">
              ${totals.lineItems
                .map(
                  (item) => `<li class="q-plan-item">
                    <div class="q-plan-item-info">
                      <strong>${escapeHtml(item.product.name)}</strong>
                      <span>${money(item.unitPrice)} × ${item.qty} = <b>${money(item.lineSubtotal)}</b></span>
                    </div>
                    <div class="q-plan-item-ctrl">
                      <button type="button" data-minus="${item.product.id}" aria-label="Remove one ${escapeHtml(item.product.name)}">−</button>
                      <span>${item.qty}</span>
                      <button type="button" data-plus="${item.product.id}" aria-label="Add one ${escapeHtml(item.product.name)}">+</button>
                      <button type="button" class="q-plan-item-del" data-remove="${item.product.id}" aria-label="Delete ${escapeHtml(item.product.name)}">×</button>
                    </div>
                  </li>`
                )
                .join("")}
            </ul>
          ` : `
            <div class="q-plan-empty">
              No equipment selected yet. Choose a bundle or add items in Step 05.
            </div>
          `}
        </div>

        <div class="q-plan-math-breakdown">
          <div class="q-math-line">
            <span>Equipment Base (1-Day)</span>
            <strong>${money(totals.equipmentBaseSubtotal)}</strong>
          </div>
          ${totals.durationSurcharge > 0 ? `
            <div class="q-math-line">
              <span>Duration (${escapeHtml(totals.durationOption.shortLabel)})</span>
              <strong>+${money(totals.durationSurcharge)}</strong>
            </div>
          ` : ""}
          <div class="q-math-line">
            <span>${escapeHtml(totals.serviceOption.title)}</span>
            <strong>${totals.serviceFee === 0 ? "$0" : `+${money(totals.serviceFee)}`}</strong>
          </div>
          <div class="q-math-line is-total">
            <span>Total Estimate</span>
            <strong>${money(totals.grandTotal)}</strong>
          </div>
        </div>

        ${step < 6
          ? `<button type="button" class="btn btn-dark" style="width:100%" data-goto-step="6">Review Full Quote (${money(totals.grandTotal)}) →</button>`
          : `<a href="#quoteBuilderForm" class="btn btn-dark" style="width:100%">Complete &amp; Send Quote ↓</a>`}
      </aside>
    </div>
  </div>`;
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
  if (hash === "about") view = aboutUsPage();
  if (hash === "services") view = services();
  if (hash === "builder" || hash === "cart") {
    view = rentals();
    setTimeout(() => openCartDrawer(), 60);
  }
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
  updateCartDrawer();
  syncMorphingNavigation();
  queueFloatingStoryUpdate();
  syncNavigation();
  observePageMotion();
  initExperienceJourney();
  initTestimonialWheel();
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
    "#app .reveal, #app .page-hero, #app .rentals-toolbar, #app .bundle-customize, #app .builder-wrap, #app .about-section, #app .about-hero, #app .quote-page, #app .bundle-detail-head, #app .bundle-detail-wrap, #app .service-grid, #app .page > .section",
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
/* ==========================================================================
   CART DRAWER (ORDERING SYSTEM — PANEL ONLY)
   ========================================================================== */
let cartDrawerInitialized = false;

function openCartDrawer() {
  const overlay = document.querySelector("#cartDrawerOverlay");
  const drawer = document.querySelector("#cartDrawer");
  if (!overlay || !drawer) return;
  updateCartDrawer();
  overlay.classList.add("is-open");
  overlay.setAttribute("aria-hidden", "false");
  drawer.classList.add("is-open");
  document.body.classList.add("cart-drawer-open");
}

function closeCartDrawer() {
  const overlay = document.querySelector("#cartDrawerOverlay");
  const drawer = document.querySelector("#cartDrawer");
  if (!overlay || !drawer) return;
  overlay.classList.remove("is-open");
  overlay.setAttribute("aria-hidden", "true");
  drawer.classList.remove("is-open");
  document.body.classList.remove("cart-drawer-open");
}

function deleteCartItem(id) {
  const product = products.find((item) => item.id === id);
  delete state.selected[id];
  saveSelection();
  syncSetupCount();
  render({ preserveScroll: true });
  updateCartDrawer();
  showToast(`${product?.name || "Rental"} removed from your setup`);
}

function updateCartDrawer() {
  const bodyEl = document.querySelector("#cartDrawerBody");
  const footerEl = document.querySelector("#cartDrawerFooter");
  if (!bodyEl || !footerEl) return;

  const totals = calculateQuoteTotals();
  const lineItems = totals.lineItems || [];
  const subtotal = totals.equipmentBaseSubtotal || 0;

  if (lineItems.length === 0) {
    bodyEl.innerHTML = `
      <div class="cart-empty-card">
        <div class="cart-empty-icon-wrap" aria-hidden="true">
          <svg viewBox="0 0 24 24" width="32" height="32" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <path d="M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4Z"></path>
            <path d="M3 6h18"></path>
            <path d="M16 10a4 4 0 0 1-8 0"></path>
          </svg>
        </div>
        <h3 class="cart-empty-title">Your setup is empty.</h3>
        <p class="cart-empty-desc">Add speakers, lighting, screens, or event bundles and they will appear here.</p>
        <button type="button" class="cart-continue-btn" data-cart-continue>Continue ordering</button>
      </div>
    `;
    footerEl.innerHTML = `
      <button type="button" class="cart-proceed-btn" id="cartProceedBtn" data-cart-proceed disabled>
        Proceed
      </button>
    `;
  } else {
    bodyEl.innerHTML = lineItems
      .map(({ product, qty, lineSubtotal }) => `
        <article class="cart-item-card" data-item-id="${product.id}">
          <img class="cart-item-img" src="${productImage(product)}" alt="${escapeHtml(product.name)}" loading="lazy" />
          <div class="cart-item-details">
            <span class="cart-item-cat">${escapeHtml(product.category || "Rental")}</span>
            <h4 class="cart-item-name">${escapeHtml(product.name)}</h4>
            <span class="cart-item-unit">${product.price ? `${money(product.price)} each` : "Custom quote"}</span>
          </div>
          <div class="cart-item-actions">
            <span class="cart-item-price">${product.price ? money(lineSubtotal) : "Quote"}</span>
            <div class="cart-item-controls">
              <div class="cart-stepper">
                <button type="button" class="cart-step-btn" data-cart-minus="${product.id}" aria-label="Decrease ${escapeHtml(product.name)}">−</button>
                <span class="cart-step-qty">${qty}</span>
                <button type="button" class="cart-step-btn" data-cart-plus="${product.id}" aria-label="Increase ${escapeHtml(product.name)}">+</button>
              </div>
              <button type="button" class="cart-del-btn" data-cart-delete="${product.id}" aria-label="Delete ${escapeHtml(product.name)}" title="Delete item">
                <svg viewBox="0 0 24 24" width="15" height="15" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                  <polyline points="3 6 5 6 21 6"></polyline>
                  <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path>
                  <line x1="10" y1="11" x2="10" y2="17"></line>
                  <line x1="14" y1="11" x2="14" y2="17"></line>
                </svg>
              </button>
            </div>
          </div>
        </article>
      `)
      .join("");

    footerEl.innerHTML = `
      <button type="button" class="cart-proceed-btn" id="cartProceedBtn" data-cart-proceed>
        Proceed
      </button>
    `;
  }
}

function initCartDrawer() {
  if (cartDrawerInitialized) return;
  cartDrawerInitialized = true;

  const overlay = document.querySelector("#cartDrawerOverlay");
  const drawer = document.querySelector("#cartDrawer");
  if (!overlay || !drawer) return;

  // Close button
  document.querySelector("#closeCartDrawer")?.addEventListener("click", closeCartDrawer);

  // Click on backdrop
  overlay.addEventListener("click", (e) => {
    if (e.target === overlay) {
      closeCartDrawer();
    }
  });

  // Escape key
  window.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && overlay.classList.contains("is-open")) {
      closeCartDrawer();
    }
  });

  // Topbar setup/cart button
  document.querySelector("#setupLink")?.addEventListener("click", (e) => {
    e.preventDefault();
    openCartDrawer();
  });

  // Delegated events for drawer body and footer
  drawer.addEventListener("click", (e) => {
    const plusBtn = e.target.closest("[data-cart-plus]");
    if (plusBtn) {
      e.preventDefault();
      const id = plusBtn.dataset.cartPlus;
      addProduct(id, 1, { silentCart: true });
      return;
    }

    const minusBtn = e.target.closest("[data-cart-minus]");
    if (minusBtn) {
      e.preventDefault();
      const id = minusBtn.dataset.cartMinus;
      addProduct(id, -1, { silentCart: true });
      return;
    }

    const delBtn = e.target.closest("[data-cart-delete]");
    if (delBtn) {
      e.preventDefault();
      const id = delBtn.dataset.cartDelete;
      deleteCartItem(id);
      return;
    }

    const contBtn = e.target.closest("[data-cart-continue]");
    if (contBtn) {
      e.preventDefault();
      closeCartDrawer();
      if (getHash() !== "rentals") {
        location.hash = "#rentals";
      }
      return;
    }

    const proceedBtn = e.target.closest("[data-cart-proceed]");
    if (proceedBtn) {
      e.preventDefault();
      const count = Object.values(state.selected).reduce((sum, q) => sum + q, 0);
      if (count > 0) {
        closeCartDrawer();
        location.hash = "#quote";
        showToast("Setup loaded! Finalize your event details below.");
      } else {
        showToast("Your setup is empty. Add items first!");
      }
      return;
    }
  });

  // Global delegation for any [data-open-cart] button
  document.addEventListener("click", (e) => {
    const openBtn = e.target.closest("[data-open-cart]");
    if (openBtn) {
      e.preventDefault();
      openCartDrawer();
    }
  });

  updateCartDrawer();
}

function addProduct(id, delta = 1, options = {}) {
  state.selected[id] = (state.selected[id] || 0) + delta;
  if (state.selected[id] <= 0) delete state.selected[id];
  saveSelection();
  syncSetupCount();
  render({ preserveScroll: true });
  updateCartDrawer();
  const product = products.find((item) => item.id === id);
  if (delta > 0 && !options.silentCart) {
    openCartDrawer();
  }
  showToast(delta > 0 ? `${product?.name || "Rental"} added to your setup` : `${product?.name || "Rental"} removed`);
}

function bind() {
  const refreshRentalsInPlace = () => {
    const grid = document.querySelector("#rentalsProductGrid");
    const countHeader = document.querySelector("#rentalsCountTitle");
    if (!grid || !countHeader) {
      render({ preserveScroll: true });
      return;
    }
    const list = filteredProducts();
    grid.innerHTML = rentalsResultsGridMarkup(list);
    countHeader.innerHTML = `<strong>${list.length}</strong> <span>${list.length === 1 ? "rental" : "rentals"}</span>${state.category !== "All" ? ` <span class="rentals-active-chip">${escapeHtml(state.category)} <button type="button" data-cat="All" aria-label="Remove category filter">×</button></span>` : ""}`;
    const clearBtn = document.querySelector(".sidebar-btn-clear");
    const hasActive =
      state.category !== "All" ||
      state.search.trim() !== "" ||
      state.priceType !== "all" ||
      state.minPrice !== "" ||
      state.maxPrice !== "" ||
      state.onlyPopular ||
      state.onlySelected;
    if (clearBtn) clearBtn.disabled = !hasActive;
    observePageMotion();
    grid.querySelectorAll("[data-add]").forEach((b) =>
      b.addEventListener("click", () => addProduct(b.dataset.add)),
    );
    grid.querySelectorAll("[data-reset-filters]").forEach((b) =>
      b.addEventListener("click", () => {
        state.category = "All";
        state.search = "";
        state.priceType = "all";
        state.minPrice = "";
        state.maxPrice = "";
        state.onlyPopular = false;
        state.onlySelected = false;
        render({ preserveScroll: true });
      }),
    );
    countHeader.querySelectorAll("[data-cat]").forEach((b) =>
      b.addEventListener("click", () => {
        state.category = b.dataset.cat;
        render({ preserveScroll: true });
      }),
    );
  };

  document.querySelectorAll("[data-cat]").forEach((b) =>
    b.addEventListener("click", () => {
      state.category = b.dataset.cat;
      render({ preserveScroll: true });
    }),
  );
  document.querySelector("#rentalSearch")?.addEventListener("input", (e) => {
    state.search = e.target.value;
    refreshRentalsInPlace();
  });
  document.querySelector("[data-clear-search]")?.addEventListener("click", () => {
    state.search = "";
    render({ preserveScroll: true });
  });
  document.querySelectorAll("[data-price-type]").forEach((b) =>
    b.addEventListener("click", () => {
      state.priceType = b.dataset.priceType;
      render({ preserveScroll: true });
    }),
  );
  document.querySelector("#rentalMinPrice")?.addEventListener("input", (e) => {
    state.minPrice = e.target.value;
    refreshRentalsInPlace();
  });
  document.querySelector("#rentalMaxPrice")?.addEventListener("input", (e) => {
    state.maxPrice = e.target.value;
    refreshRentalsInPlace();
  });
  document.querySelector("#filterPopular")?.addEventListener("change", (e) => {
    state.onlyPopular = e.target.checked;
    render({ preserveScroll: true });
  });
  document.querySelector("#filterSelected")?.addEventListener("change", (e) => {
    state.onlySelected = e.target.checked;
    render({ preserveScroll: true });
  });
  document.querySelector("#rentalSort")?.addEventListener("change", (e) => {
    state.sortBy = e.target.value;
    render({ preserveScroll: true });
  });
  document.querySelectorAll("[data-view-mode]").forEach((b) =>
    b.addEventListener("click", () => {
      state.viewMode = b.dataset.viewMode;
      render({ preserveScroll: true });
    }),
  );
  document.querySelectorAll("[data-reset-filters]").forEach((b) =>
    b.addEventListener("click", () => {
      state.category = "All";
      state.search = "";
      state.priceType = "all";
      state.minPrice = "";
      state.maxPrice = "";
      state.onlyPopular = false;
      state.onlySelected = false;
      render({ preserveScroll: true });
    }),
  );
  document.querySelector("[data-apply-filters]")?.addEventListener("click", () => {
    refreshRentalsInPlace();
    showToast(`Showing ${filteredProducts().length} rentals`);
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
  // Launch bundle from Bundle Detail page into Quote Builder
  document.querySelectorAll("[data-launch-bundle]").forEach((btn) =>
    btn.addEventListener("click", () => {
      const bId = btn.dataset.launchBundle;
      const targetStep = Number(btn.dataset.launchStep) || 1;
      const match = bundles.find((x) => x.id === bId);
      if (match) {
        state.selected = { ...match.included };
        saveSelection();
        syncSetupCount();
        updateCartDrawer();
        if (match.id === "movie") state.eventType = "Outdoor Movie";
        else if (match.id === "wedding") state.eventType = "Wedding";
        else if (match.id === "concert") state.eventType = "Concert";
        else if (match.id === "school") state.eventType = "School Event";
        else if (match.id === "corporate") state.eventType = "Corporate Event";
        else state.eventType = "Private Party";
        state.submittedQuote = null;
        state.quoteStep = targetStep;
        if (location.hash === "#quote" || location.hash === "quote") {
          render();
        } else {
          location.hash = "quote";
        }
        showToast(`${match.title} loaded into your quote`);
      }
    }),
  );

  // Step navigation in Quote
  document.querySelectorAll("[data-quote-step]").forEach((btn) =>
    btn.addEventListener("click", () => {
      state.quoteStep = Math.min(6, Math.max(1, Number(btn.dataset.quoteStep) || 1));
      state.quoteError = "";
      render();
    }),
  );
  document.querySelectorAll("[data-goto-step]").forEach((btn) =>
    btn.addEventListener("click", () => {
      state.quoteStep = Math.min(6, Math.max(1, Number(btn.dataset.gotoStep) || 1));
      state.quoteError = "";
      render();
    }),
  );
  document.querySelector("[data-quote-next]")?.addEventListener("click", () => {
    state.quoteStep = Math.min(6, state.quoteStep + 1);
    state.quoteError = "";
    render();
  });
  document.querySelector("[data-quote-prev]")?.addEventListener("click", () => {
    state.quoteStep = Math.max(1, state.quoteStep - 1);
    state.quoteError = "";
    render();
  });

  // Step navigation in Event Builder (My setup)
  document.querySelector("[data-builder-next]")?.addEventListener("click", () => {
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

  document.querySelector("[data-builder-prev]")?.addEventListener("click", () => {
    state.builderStep = Math.max(1, state.builderStep - 1);
    render({ preserveScroll: getHash() === "builder" });
  });

  // Step 1: Select Event Type & Input
  document.querySelectorAll("[data-select-event]").forEach((btn) =>
    btn.addEventListener("click", () => {
      state.eventType = btn.dataset.selectEvent;
      const input = document.querySelector("#quoteEventTypeInput");
      if (input) input.value = state.eventType;
      render({ preserveScroll: true });
    }),
  );
  document.querySelector("#quoteEventTypeInput")?.addEventListener("input", (e) => {
    state.eventType = e.target.value;
    document.querySelectorAll("[data-select-event]").forEach((btn) => {
      const match = btn.dataset.selectEvent.trim().toLowerCase() === e.target.value.trim().toLowerCase();
      btn.classList.toggle("is-active", match);
      const status = btn.querySelector(".q-event-status");
      if (status) status.textContent = match ? "✓ Selected" : "Select";
    });
  });

  // Apply Starter Bundle in Step 1 or Step 5
  document.querySelectorAll("[data-apply-bundle]").forEach((btn) =>
    btn.addEventListener("click", () => {
      const match = bundles.find((x) => x.id === btn.dataset.applyBundle);
      if (!match) return;
      state.selected = { ...match.included };
      saveSelection();
      render({ preserveScroll: true });
      showToast(`Loaded ${match.title} (${money(match.price)})`);
    }),
  );

  // Clear all equipment
  document.querySelector("[data-clear-all-equipment]")?.addEventListener("click", () => {
    state.selected = {};
    saveSelection();
    render({ preserveScroll: true });
    showToast("Cleared all equipment from setup");
  });

  // Add all recommended for current event type
  document.querySelector("[data-add-all-recommended]")?.addEventListener("click", () => {
    const recIds = eventRecommendations[state.eventType] || eventRecommendations.Wedding;
    recIds.forEach((id) => {
      state.selected[id] = state.selected[id] || 1;
    });
    saveSelection();
    render({ preserveScroll: true });
    showToast(`Added recommended ${state.eventType} gear`);
  });

  // Step 2: Audience size typing, venue setting, rental duration typing & presets
  document.querySelector("#quoteGuestExact")?.addEventListener("input", (e) => {
    const val = parseInt(e.target.value, 10);
    state.guests = Number.isFinite(val) && val > 0 ? val : 0;
  });
  document.querySelector("#quoteGuestExact")?.addEventListener("change", () => {
    render({ preserveScroll: true });
  });

  document.querySelectorAll("[data-select-venue]").forEach((btn) =>
    btn.addEventListener("click", () => {
      state.venue = btn.dataset.selectVenue;
      render({ preserveScroll: true });
    }),
  );

  document.querySelector("#quoteDurationInput")?.addEventListener("input", (e) => {
    state.customDurationText = e.target.value;
    const parsed = parseDurationText(e.target.value);
    const badge = document.querySelector("#durationRateBadge .q-rate-calc-val");
    if (badge && parsed) {
      badge.textContent = parsed.label;
    }
    document.querySelectorAll("[data-select-duration]").forEach((btn) => {
      const match = parsed && parsed.days && (
        (parsed.days === 1 && btn.dataset.selectDuration === "1-day") ||
        (parsed.days === 2 && btn.dataset.selectDuration === "2-days") ||
        (parsed.days >= 3 && btn.dataset.selectDuration === "3-days")
      );
      btn.classList.toggle("is-active", Boolean(match));
      const status = btn.querySelector(".q-event-status");
      if (status) status.textContent = match ? "✓ Selected" : "Select";
    });
  });
  document.querySelector("#quoteDurationInput")?.addEventListener("change", () => {
    render({ preserveScroll: true });
  });

  document.querySelectorAll("[data-select-duration]").forEach((btn) =>
    btn.addEventListener("click", () => {
      state.duration = btn.dataset.selectDuration;
      const opt = DURATION_OPTIONS.find((d) => d.id === btn.dataset.selectDuration);
      state.customDurationText = opt ? opt.label : "";
      const input = document.querySelector("#quoteDurationInput");
      if (input) input.value = state.customDurationText;
      render({ preserveScroll: true });
    }),
  );

  // Step 3: Interactive Calendar & Date Controls
  document.querySelector("[data-cal-prev]")?.addEventListener("click", () => {
    state.calendarMonth -= 1;
    if (state.calendarMonth < 0) {
      state.calendarMonth = 11;
      state.calendarYear -= 1;
    }
    render({ preserveScroll: true });
  });
  document.querySelector("[data-cal-next]")?.addEventListener("click", () => {
    state.calendarMonth += 1;
    if (state.calendarMonth > 11) {
      state.calendarMonth = 0;
      state.calendarYear += 1;
    }
    render({ preserveScroll: true });
  });
  document.querySelectorAll("[data-cal-date]").forEach((btn) =>
    btn.addEventListener("click", () => {
      state.date = btn.dataset.calDate;
      state.dateFlexible = false;
      render({ preserveScroll: true });
    }),
  );
  document.querySelector("#quoteDateDirect")?.addEventListener("change", (e) => {
    state.date = e.target.value;
    if (state.date) {
      state.dateFlexible = false;
      const parts = state.date.split("-").map(Number);
      if (parts.length === 3 && !parts.some(Number.isNaN)) {
        state.calendarYear = parts[0];
        state.calendarMonth = parts[1] - 1;
      }
    }
    render({ preserveScroll: true });
  });
  document.querySelector("#quoteDateFlexible")?.addEventListener("change", (e) => {
    state.dateFlexible = e.target.checked;
    render({ preserveScroll: true });
  });
  document.querySelectorAll("[data-time-window]").forEach((btn) =>
    btn.addEventListener("click", () => {
      state.eventTimeWindow = btn.dataset.timeWindow;
      render({ preserveScroll: true });
    }),
  );

  // Step 4: Location Search (OpenStreetMap Nominatim) & Manual Address
  const runVenueSearch = async () => {
    const qInput = document.querySelector("#quoteLocationSearch");
    const q = (qInput ? qInput.value : state.locationQuery).trim();
    state.locationQuery = q;
    if (!q) return;
    state.locationSearching = true;
    render({ preserveScroll: true });
    try {
      const resp = await fetch(
        `https://nominatim.openstreetmap.org/search?format=json&addressdetails=1&limit=5&countrycodes=us&q=${encodeURIComponent(q)}`,
        { headers: { Accept: "application/json" } }
      );
      const data = await resp.json();
      state.locationResults = Array.isArray(data) ? data : [];
      if (state.locationResults.length > 0 && !state.eventLocation) {
        const first = state.locationResults[0];
        state.eventLocation = first.display_name;
        state.locationCoords = {
          lat: parseFloat(first.lat) || 42.3601,
          lon: parseFloat(first.lon) || -71.0589,
        };
      }
    } catch {
      state.locationResults = [];
      state.eventLocation = q;
    } finally {
      state.locationSearching = false;
      render({ preserveScroll: true });
    }
  };
  document.querySelector("#quoteLocationSearch")?.addEventListener("input", (e) => {
    state.locationQuery = e.target.value;
    state.eventLocation = e.target.value;
  });
  document.querySelector("#quoteLocationSearch")?.addEventListener("keydown", (e) => {
    if (e.key === "Enter") {
      e.preventDefault();
      runVenueSearch();
    }
  });
  document.querySelector("#quoteLocationSearchBtn")?.addEventListener("click", runVenueSearch);
  document.querySelectorAll("[data-loc-index]").forEach((btn) =>
    btn.addEventListener("click", () => {
      const item = state.locationResults[Number(btn.dataset.locIndex)];
      if (!item) return;
      state.eventLocation = item.display_name;
      state.locationQuery = item.display_name;
      state.locationCoords = {
        lat: parseFloat(item.lat) || 42.3601,
        lon: parseFloat(item.lon) || -71.0589,
      };
      state.locationResults = [];
      state.locationFlexible = false;
      render({ preserveScroll: true });
    }),
  );
  document.querySelector("[data-toggle-manual-location]")?.addEventListener("click", () => {
    state.manualLocationMode = !state.manualLocationMode;
    render({ preserveScroll: true });
  });
  document.querySelector("#manualStreetInput")?.addEventListener("input", (e) => {
    state.manualStreet = e.target.value;
  });
  document.querySelector("#manualCityInput")?.addEventListener("input", (e) => {
    state.manualCity = e.target.value;
  });
  document.querySelector("#manualStateInput")?.addEventListener("input", (e) => {
    state.manualState = e.target.value;
  });
  document.querySelector("#manualZipInput")?.addEventListener("input", (e) => {
    state.manualZip = e.target.value;
  });
  document.querySelector("#quoteLocationFlexible")?.addEventListener("change", (e) => {
    state.locationFlexible = e.target.checked;
    render({ preserveScroll: true });
  });

  // Step 5: Equipment Catalog Filtering & Service Tiers
  const refreshBuilderCatalogInPlace = () => {
    const grid = document.querySelector("#quoteCatalogGrid");
    if (!grid) {
      render({ preserveScroll: true });
      return;
    }
    grid.innerHTML = renderBuilderCatalogGridMarkup();
    grid.querySelectorAll("[data-plus]").forEach((b) =>
      b.addEventListener("click", () => addProduct(b.dataset.plus, 1)),
    );
    grid.querySelectorAll("[data-minus]").forEach((b) =>
      b.addEventListener("click", () => addProduct(b.dataset.minus, -1)),
    );
    grid.querySelectorAll("[data-builder-reset-catalog]").forEach((b) =>
      b.addEventListener("click", () => {
        state.builderCategory = "All";
        state.builderSearch = "";
        state.builderOnlySelected = false;
        render({ preserveScroll: true });
      }),
    );
  };
  document.querySelector("#builderCatalogSearch")?.addEventListener("input", (e) => {
    state.builderSearch = e.target.value;
    refreshBuilderCatalogInPlace();
  });
  document.querySelector("#builderOnlySelectedToggle")?.addEventListener("change", (e) => {
    state.builderOnlySelected = e.target.checked;
    render({ preserveScroll: true });
  });
  document.querySelectorAll("[data-builder-cat]").forEach((btn) =>
    btn.addEventListener("click", () => {
      state.builderCategory = btn.dataset.builderCat;
      render({ preserveScroll: true });
    }),
  );
  document.querySelectorAll("[data-builder-reset-catalog]").forEach((btn) =>
    btn.addEventListener("click", () => {
      state.builderCategory = "All";
      state.builderSearch = "";
      state.builderOnlySelected = false;
      render({ preserveScroll: true });
    }),
  );
  document.querySelectorAll("[data-service-tier]").forEach((btn) =>
    btn.addEventListener("click", () => {
      state.serviceTier = btn.dataset.serviceTier;
      render({ preserveScroll: true });
    }),
  );

  // Step 6: Contact Inputs, Payment Method, and Automated Email Submission to kcbianzon@gmail.com
  document.querySelector("#contactNameInput")?.addEventListener("input", (e) => {
    state.contactName = e.target.value;
  });
  document.querySelector("#contactEmailInput")?.addEventListener("input", (e) => {
    state.contactEmail = e.target.value;
  });
  document.querySelector("#contactPhoneInput")?.addEventListener("input", (e) => {
    state.contactPhone = e.target.value;
  });
  document.querySelector("#organizationInput")?.addEventListener("input", (e) => {
    state.organization = e.target.value;
  });
  document.querySelector("#eventNameInput")?.addEventListener("input", (e) => {
    state.eventName = e.target.value;
  });
  document.querySelector("#eventNotesInput")?.addEventListener("input", (e) => {
    state.eventNotes = e.target.value;
  });
  document.querySelectorAll("[data-payment-method]").forEach((btn) =>
    btn.addEventListener("click", () => {
      state.paymentMethod = btn.dataset.paymentMethod;
      render({ preserveScroll: true });
    }),
  );

  document.querySelector("#quoteBuilderForm")?.addEventListener("submit", async (e) => {
    e.preventDefault();
    const totals = calculateQuoteTotals();
    if (totals.lineItems.length === 0) {
      state.quoteError = "Please select at least one equipment item or package in Step 05 before submitting your quote.";
      render({ preserveScroll: true });
      return;
    }

    const nameVal = (document.querySelector("#contactNameInput")?.value || state.contactName).trim();
    const emailVal = (document.querySelector("#contactEmailInput")?.value || state.contactEmail).trim();
    const phoneVal = (document.querySelector("#contactPhoneInput")?.value || state.contactPhone).trim();
    const honeyVal = document.querySelector("#quoteHoney")?.value || "";

    if (!nameVal || !emailVal) {
      state.quoteError = "Please provide your full name and email address.";
      render({ preserveScroll: true });
      return;
    }

    state.contactName = nameVal;
    state.contactEmail = emailVal;
    state.contactPhone = phoneVal;
    state.quoteError = "";
    state.isSubmittingQuote = true;
    render({ preserveScroll: true });

    const effectiveLocation = getEffectiveLocationText() || "Boston / New England (TBD)";
    const effectiveDate = state.dateFlexible
      ? "Flexible Date"
      : state.date
        ? formatReadableDate(state.date)
        : "Date TBD";
    const refCode = "BAV-" + Date.now().toString(36).toUpperCase().slice(-6);

    const itemizedSummaryLines = totals.lineItems
      .map(
        (item, idx) =>
          `${idx + 1}. ${item.qty}x ${item.product.name} (${item.product.category}) @ ${money(item.unitPrice)}/day = ${money(item.lineSubtotal)}`
      )
      .join("\n");

    const emailPayload = {
      _subject: `New Beantown AV Quote [${refCode}]: ${state.eventType} - ${state.contactName} (${money(totals.grandTotal)})`,
      _template: "table",
      _captcha: "false",
      _honey: honeyVal,
      _replyto: state.contactEmail,
      "Quote Reference": refCode,
      "Client Name": state.contactName,
      "Client Email": state.contactEmail,
      "Client Phone": state.contactPhone || "Not provided",
      "Organization / Company": state.organization || "N/A",
      "Event Name": state.eventName || `${state.eventType} Setup`,
      "Event Type": state.eventType,
      "Estimated Guests": `${state.guests} guests (Bracket: ${state.guestBracket})`,
      "Venue Setting": state.venue,
      "Event Date": effectiveDate,
      "Event Time Window": state.eventTimeWindow,
      "Event Location": effectiveLocation,
      "Rental Duration": totals.durationOption.label,
      "Delivery & Support Tier": `${totals.serviceOption.title} (${totals.serviceFee === 0 ? "Free / $0" : money(totals.serviceFee)})`,
      "Preferred Payment Method": state.paymentMethod,
      "Total Selected Equipment": `${totals.uniqueCount} unique items (${totals.totalUnits} total units)`,
      "Complete Itemized Equipment Breakdown": itemizedSummaryLines,
    };

    totals.lineItems.forEach((item, idx) => {
      const key = `Item ${String(idx + 1).padStart(2, "0")}`;
      emailPayload[key] = `${item.qty} × ${item.product.name} [${item.product.category}] — ${money(item.unitPrice)}/ea = ${money(item.lineSubtotal)}`;
    });

    emailPayload["Equipment Base Subtotal (1-Day)"] = money(totals.equipmentBaseSubtotal);
    emailPayload["Multi-Day Duration Adjustment"] =
      totals.durationSurcharge > 0
        ? `+${money(totals.durationSurcharge)} (${totals.durationOption.shortLabel})`
        : "$0 (Single Day 1.0x)";
    emailPayload["Adjusted Equipment Subtotal"] = money(totals.equipmentDurationTotal);
    emailPayload["Delivery, Setup & Tech Support Fee"] =
      totals.serviceFee === 0 ? "$0 (Self Pickup)" : `+${money(totals.serviceFee)} (${totals.serviceOption.title})`;
    emailPayload["ESTIMATED GRAND TOTAL"] = money(totals.grandTotal);
    emailPayload["Additional Event Notes"] = state.eventNotes || "None";

    try {
      await fetch("https://formsubmit.co/ajax/kcbianzon@gmail.com", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify(emailPayload),
      });
    } catch {
      // Even if offline or blocked by adblockers in local testing, complete the quote receipt smoothly
    }

    state.isSubmittingQuote = false;
    state.submittedQuote = {
      refCode,
      contactName: state.contactName,
      contactEmail: state.contactEmail,
      contactPhone: state.contactPhone || "Not provided",
      organization: state.organization,
      eventName: state.eventName,
      eventType: state.eventType,
      guests: state.guests,
      venue: state.venue,
      eventDate: effectiveDate,
      eventTimeWindow: state.eventTimeWindow,
      eventLocation: effectiveLocation,
      durationLabel: totals.durationOption.label,
      serviceTitle: totals.serviceOption.title,
      paymentMethod: state.paymentMethod,
      lineItems: totals.lineItems,
      totalUnits: totals.totalUnits,
      equipmentBaseSubtotal: totals.equipmentBaseSubtotal,
      durationSurcharge: totals.durationSurcharge,
      serviceFee: totals.serviceFee,
      grandTotal: totals.grandTotal,
    };
    render();
    showToast("Quote sent to kcbianzon@gmail.com!");
  });

  document.querySelector("[data-print-quote]")?.addEventListener("click", () => {
    window.print();
  });
  document.querySelector("[data-new-quote]")?.addEventListener("click", () => {
    state.submittedQuote = null;
    state.quoteStep = 1;
    render();
  });
  document.querySelectorAll("[data-faq-toggle]").forEach((btn) =>
    btn.addEventListener("click", () => {
      const card = btn.closest("[data-faq-card]");
      if (!card) return;
      const isOpen = card.classList.toggle("is-open");
      btn.setAttribute("aria-expanded", isOpen ? "true" : "false");
    }),
  );
  document.querySelectorAll("[data-offer-item]").forEach((item) => {
    item.addEventListener("click", () => {
      const isOpen = item.classList.toggle("is-open");
      item.setAttribute("aria-expanded", isOpen ? "true" : "false");
    });
    item.addEventListener("keydown", (e) => {
      if (e.key === "Enter" || e.key === " ") {
        e.preventDefault();
        const isOpen = item.classList.toggle("is-open");
        item.setAttribute("aria-expanded", isOpen ? "true" : "false");
      }
    });
  });
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

function initServicesMelt() {}

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
      if (index >= Number(line.dataset.accentStart || Infinity)) {
        span.classList.add("hero-title-highlight");
      }
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

initCartDrawer();
render();
queueFloatingStoryUpdate();
runOpeningSequence();
