/*
 * Public rental catalog transcribed from the Beantown Audio Rentals service pages.
 * Rates are populated only where the source page publishes an amount. Everything
 * else is quote-only; zero is a sentinel for the estimator, not a rental price.
 */
window.BEANTOWN_SOURCE_CATALOG = [
  // id, name, category, description, source path, price, rate type, badge
  ["small-audio", "Small Audio Package", "Audio & Speakers", "Great for home gatherings, speeches, or background music. Includes two powered speakers with tripod stands, a wired or wireless microphone, and a small mixer. The speaker package is best for private parties, networking events, or simple speeches.", "/services/audio", 199, "starting", "Audio package"],
  ["medium-audio", "Medium Audio Package", "Audio & Speakers", "Perfect for mid-size events like receptions, panels, or networking nights. Includes four speakers, subwoofers if needed, wireless microphones, and a 16-channel mixer. The speaker package is best for weddings, school functions, or community meetings and includes setup and delivery.", "/services/audio", 349, "starting", "Audio package"],
  ["large-audio", "Large Audio Package", "Audio & Speakers", "Best for big rooms or outdoor events. Includes a line array system with subwoofers, multi-channel mixer, multiple microphones, and optional technician support. The speaker package includes 6–8 line array speakers plus subwoofers, a Shure QLX-D handheld or lapel system, a digital mixer, and an on-site audio tech. Best for concerts, corporate events, or outdoor productions.", "/services/audio", 880, "starting", "Audio package"],
  ["powered-speakers", "Powered Speakers / Line Array Speakers", "Audio & Speakers", "Clean, full-range sound for any room or outdoor space. Available as powered speakers or line array speakers; the team recommends a system based on the event and venue.", "/services/audio", 65, "fixed", "Audio equipment"],
  ["audio-monitors", "Stage Monitors", "Audio & Speakers", "On-stage speakers so performers can hear themselves.", "/services/audio", 55, "fixed", "Audio equipment"],
  ["audio-cables-stands", "Audio Cables & Stands", "Audio & Speakers", "Cables and stands for safe, stable audio connections.", "/services/audio", 25, "fixed", "Audio equipment"],
  ["sub-thump18", "Mackie Thump18S Powered Subwoofer", "Subwoofers", "The Mackie Thump18S offers excellent bass at a budget-friendly price. With solid output and easy setup, it’s a favorite among DJs, schools, and smaller events. Great for DJs and mobile entertainers, parties and school dances, and smaller corporate functions.", "/services/subwoofer-rentals", 75, "fixed", "Subwoofer"],
  ["jbl-vrx-sub", "JBL VRX Sub Series", "Subwoofers", "Engineered to work alongside JBL’s VRX932LA line array speakers. These subwoofers are suited to large concerts or events that need scalable, professional sound, including festivals, outdoor shows, large venues, live productions, and touring acts with JBL line arrays.", "/services/subwoofer-rentals", 150, "fixed", "Subwoofer"],
  ["sub-ks212c", "QSC KS212C K Cardioid Subwoofer", "Subwoofers", "A cardioid subwoofer that pushes sound forward and reduces bass spill behind the unit. This keeps the stage quieter while delivering strong sound to the audience. Great for indoor venues with noise limits, live performances, and reducing stage feedback and sound bleed.", "/services/subwoofer-rentals", 120, "fixed", "Subwoofer"],
  ["sub-kw181", "QSC KW181 1000W 18″ Powered Subwoofer", "Subwoofers", "Known for clear, punchy bass and a rock-solid build. With 1000 watts of Class D power, it fits into larger indoor or outdoor setups and pairs well with QSC tops or other popular speakers. Best for medium to large venues, corporate events, outdoor stages, DJs, and live bands.", "/services/subwoofer-rentals", 95, "fixed", "Subwoofer"],
  ["sub-prx618", "JBL PRX 618S", "Subwoofers", "A 1000-watt 18-inch powered subwoofer that delivers deep bass in a compact design. Ideal for mobile DJs, small venues, tight spaces, private parties, small-to-medium events, and DJ or band setups on the go.", "/services/subwoofer-rentals", 85, "fixed", "Subwoofer"],
  ["qlxd-handheld", "Wireless Handheld Microphone", "Microphones", "Wireless handheld microphones are ideal for hosts, singers, and speakers who like to move around. The single mic setup includes one Shure microphone (wired or wireless), cable, and stand; recommended for solo speakers or small gatherings.", "/services/microphone-rentals", 65, "fixed", "Microphone"],
  ["shure-sm58", "Wired Handheld Microphone", "Microphones", "Wired handheld microphones are great for speeches, stand-up comedy, or backup setups. The single mic setup includes one Shure microphone (wired or wireless), cable, and stand.", "/services/microphone-rentals", 20, "fixed", "Microphone"],
  ["qlxd-lavalier", "Lavalier (Clip-On) Microphone", "Microphones", "Lavalier microphones are perfect for presentations and interviews, with a clean look and hands-free use. The presentation setup includes two wireless lavalier or headset microphones and a small mixer with volume control; great for trainings, lectures, or worship services.", "/services/microphone-rentals", 65, "fixed", "Microphone"],
  ["countryman-headset", "Countryman Headset Microphone", "Microphones", "Countryman headset microphones are known for exceptional audio quality, comfort, and discreet design, with clear, natural sound reproduction for professional settings. Headset microphones are suited to fitness instructors, performers, and stage presenters needing full mobility.", "/services/microphone-rentals", 50, "fixed", "Microphone"],
  ["ptt-mic", "Push-to-Talk Microphone", "Microphones", "Push-to-talk microphones transmit audio only when a button is pressed. They are useful in communication systems where clear and controlled audio transmission is important.", "/services/microphone-rentals", 35, "fixed", "Microphone"],
  ["iem", "In-Ear Monitors (IEMs)", "Microphones", "Small headphones designed to isolate the wearer from ambient noise and provide accurate sound reproduction. Used by musicians, audio engineers, and other professionals who need precise monitoring of audio signals.", "/services/microphone-rentals", 75, "fixed", "Microphone"],
  ["mic-single-package", "Single Mic Setup", "Microphones", "Includes one Shure microphone (wired or wireless), cable, and stand. Recommended for solo speakers or small gatherings.", "/services/microphone-rentals", 35, "fixed", "Microphone package"],
  ["mic-presentation-package", "Presentation Setup", "Microphones", "Includes two wireless lavalier or headset microphones and a small mixer with volume control. Great for trainings, lectures, or worship services.", "/services/microphone-rentals", 120, "fixed", "Microphone package"],
  ["mic-live-package", "Live Performance Package", "Microphones", "Includes 4–6 wired or wireless microphones, a full mixing board and stage stands, and an on-site technician. Best for bands, panels, or stage events.", "/services/microphone-rentals", 220, "fixed", "Microphone package"],
  ["mixer-x32", "Behringer X32 Digital Mixer", "Audio Mixers", "The full-sized version of the X32 Compact, providing more I/O and flexibility: 32 mic preamps, 25 motorized faders, and an integrated effects rack. Ideal for full-scale events or studio work; built for large, multi-source setups.", "/services/audio-mixers", 150, "fixed", "Audio mixer"],
  ["mixer-x32-compact", "Behringer X32 Compact Digital Mixer", "Audio Mixers", "Balances power and price in a compact footprint. Includes 16 mix buses and 8 DCA groups, with easy scene recall for fast setup. Great for front-of-house or monitors.", "/services/audio-mixers", 110, "fixed", "Audio mixer"],
  ["mixer-sq7", "Allen & Heath SQ-7 32-Channel Digital Mixer", "Audio Mixers", "A top-tier digital mixer for demanding productions, with pristine audio processing and advanced routing. Includes 32 onboard mic/line inputs, a touchscreen with custom layouts, and expandable I/O and control options.", "/services/audio-mixers", 295, "fixed", "Audio mixer"],
  ["mixer-touchmix", "QSC TouchMix-16", "Audio Mixers", "Smart digital mixer with big-console power in a portable form. Includes 16 inputs, touchscreen control, presets for instruments and vocal microphones, and built-in multi-track recording. Suitable for band gigs, worship services, and hybrid events.", "/services/audio-mixers", 85, "fixed", "Audio mixer"],
  ["mixer-mackie1402", "Mackie 1402-VLZ3", "Audio Mixers", "A durable workhorse with a clear signal path, six mic preamps, flexible routing, an ultra-low-noise design, and a strong build. Popular in mobile sound setups.", "/services/audio-mixers", 45, "fixed", "Audio mixer"],
  ["mixer-yamaha-mg10xu", "Yamaha MG10XU", "Audio Mixers", "Compact 8-input mixer with analog controls and digital features. Includes built-in effects and a USB recording interface; suited to solo musicians, podcasters, small events, and basic live mixing or streaming.", "/services/audio-mixers", 40, "fixed", "Audio mixer"],
  ["dj-basic-pkg", "Basic DJ Package (Up to 50 Guests)", "DJ Equipment", "Includes one DJ controller, laptop stand, and a small powered speaker setup. Best for house parties, small bars, or first-time DJs.", "/services/dj-equipment-rentals", 299, "starting", "DJ package"],
  ["dj-standard-pkg", "Standard DJ Package (50–150 Guests)", "DJ Equipment", "Includes a controller or CDJ setup, 2-channel mixer, two full-range speakers, and optional DJ booth. Best for weddings, school events, or mid-size venues.", "/services/dj-equipment-rentals", 449, "starting", "DJ package"],
  ["dj-pro-pkg", "Pro DJ Package (150+ Guests)", "DJ Equipment", "Includes turntables or high-end controllers, a 4-channel mixer, a four-speaker setup with subwoofers, and full DJ booth and lighting add-ons. Best for large clubs, festivals, or corporate events.", "/services/dj-equipment-rentals", 699, "starting", "DJ package"],
  ["dj-facade", "Scrim Werks Pro DJ Facade", "DJ Equipment", "Portable, often collapsible structure used to create a professional-looking backdrop for a DJ setup. Typically made of lightweight aluminum and fabric for easy transport and assembly.", "/services/dj-equipment-rentals", 50, "fixed", "DJ equipment"],
  ["rane-72", "Rane SEVENTY-TWO DJ Mixer", "DJ Equipment", "High-end 2-channel DJ mixer designed for professional turntablists and DJs, known for its build quality, innovative features, and pristine audio quality.", "/services/dj-equipment-rentals", 85, "fixed", "DJ equipment"],
  ["rane-ttm57sl", "Rane TTM 57SL", "DJ Equipment", "Legendary 2-channel mixer designed for Serato Scratch Live. A pioneering mixer with professional-grade features and performance.", "/services/dj-equipment-rentals", 65, "fixed", "DJ equipment"],
  ["rane-sl4", "Rane SL4", "DJ Equipment", "Professional DJ interface connecting turntables or CD players to a computer for DJ software. Known for reliability, audio quality, and handling multiple decks.", "/services/dj-equipment-rentals", 50, "fixed", "DJ equipment"],
  ["djm-900nxs", "Pioneer DJM-900NXS", "DJ Equipment", "Professional 4-channel DJ mixer that pairs a classic DJ mixer layout with modern features; popular in clubs and studios.", "/services/dj-equipment-rentals", 95, "fixed", "DJ equipment"],
  ["technics-1200", "Technics SL-1200MK2 Pro Turntable", "DJ Equipment", "Iconic turntable that has defined DJ culture for decades, known for exceptional build quality, reliability, and performance.", "/services/dj-equipment-rentals", 75, "fixed", "DJ equipment"],
  ["cdj-3000", "Pioneer DJ CDJ-3000 Professional DJ Media Player", "DJ Equipment", "Professional DJ media player at the top of Pioneer’s CDJ line, with updated technology and performance.", "/services/dj-equipment-rentals", 125, "fixed", "DJ equipment"],
  ["cdj-2000nxs2", "Pioneer CDJ-2000NXS2 Pro-DJ Multi-Player", "DJ Equipment", "Flagship professional DJ multi-player renowned for sound quality, robust build, and advanced features; an industry-standard player.", "/services/dj-equipment-rentals", 95, "fixed", "DJ equipment"],
  ["ddj-1000srt", "Pioneer DDJ-1000SRT", "DJ Equipment", "Professional 4-channel DJ controller designed for Serato DJ Pro. Offers a club-standard layout and professional features for aspiring and professional DJs.", "/services/dj-equipment-rentals", 90, "fixed", "DJ equipment"],
  ["djm-s9", "Pioneer DJM-S9 Two-Channel DJ Battle Mixer for Serato DJ", "DJ Equipment", "High-end two-channel battle mixer designed for Serato DJ, known for build quality, innovative features, and professional sound.", "/services/dj-equipment-rentals", 75, "fixed", "DJ equipment"],
  ["video-basic-package", "Basic Video Package", "Video & Displays", "Includes one HD projector, tripod screen, basic cabling, and remote. Ideal for team meetings or family events.", "/services/video", 299, "starting", "Video package"],
  ["video-mid-package", "Mid-Size Video Package", "Video & Displays", "Includes a brighter projector, fast-fold screen with black dress kit, input switcher, and professional stands. Great for conferences, workshops, and banquets.", "/services/video", 499, "starting", "Video package"],
  ["video-large-package", "Large Format Video Package", "Video & Displays", "Includes an LED video wall or multiple TVs, staging support, advanced switching video controllers, and an on-site technician. Perfect for keynote presentations or large public events.", "/services/video", 899, "starting", "Video package"],
  ["tv-75", "Samsung 75 Inch TV", "Video & Displays", "75-inch Samsung 4K UHD Smart TV with ultra-clear detail, Dynamic Crystal Color, visibility across larger spaces, and smart streaming and casting capabilities. Recommended for conferences, keynote presentations, corporate product launches, VIP sports and movie events, galleries, or signage.", "/services/tv-rentals", 350, "fixed", "TV rental"],
  ["tv-65", "Samsung 65 Inch TV", "Video & Displays", "65-inch Samsung 4K UHD Smart TV with UHD picture processing, Dynamic Crystal Color, HDMI inputs, and a sleek design for stands or walls. Ideal for wedding slideshows, trade show booths, sports watch parties, conference rooms, and indoor events up to 50 people.", "/services/tv-rentals", 250, "fixed", "TV rental"],
  ["laser-projector", "HD Projector Rental", "Video & Displays", "HD projector with tripod screen, basic cabling, and remote available in the Basic Video Package. The mid-size package includes a brighter projector.", "/services/video", 175, "fixed", "Projector"],
  ["fastfold-screen", "Fast-Fold Screen with Black Dress Kit", "Video & Displays", "Fast-fold screen with black dress kit, input switcher, and professional stands, included in the Mid-Size Video Package.", "/services/video", 150, "fixed", "Projection screen"],
  ["video-switcher", "Video Switcher", "Video & Displays", "Video switcher included with streaming packages; the Pro setup uses a professional switcher for seamless transitions between cameras and inputs.", "/services/live-streaming", 75, "fixed", "Video equipment"],
  ["led-12", "12′ × 7′ 2.67 mm LED Wall Package", "LED Video Walls", "Indoor package includes a 12′ × 7′ LED video wall, Novastar VX1000 processor, two powered speakers, two tripod speaker stands, an audio mixer, and one Shure wireless handheld microphone. Great for trade shows, panels, weddings, parties, and indoor music performances.", "/services/indoorledwall", 1150, "starting", "LED wall package"],
  ["led-16", "16′ × 9′ 2.67 mm LED Wall Package", "LED Video Walls", "Indoor package includes a 16′ × 9′ LED video wall, Novastar VX1000 processor, two powered speakers, two tripod speaker stands, an audio mixer, and one Shure wireless handheld microphone. Great for corporate keynotes, conferences, large meetings, award shows, and entertainment events.", "/services/indoorledwall", 1450, "starting", "LED wall package"],
  ["led-custom", "Custom LED Wall Sizes & Configurations", "LED Video Walls", "Custom LED wall layouts and sizes are available, with ground support, trussing, crank stands, laptops for playback, video mapping, on-site setup and breakdown, and optional event tech support. Pixel pitches listed: 2.6 mm for close viewing, 2.9 mm for audiences at least 10 feet away, and 3.9 mm for larger rooms and longer viewing distances.", "/services/indoorledwall", 1850, "starting", "Custom LED wall"],
  ["led-trailer", "Outdoor LED Video Wall Trailer (5 Sizes)", "LED Video Walls", "Trailer-mounted outdoor LED walls are offered in five sizes with 3.91 mm pixel pitch. The site describes daylight visibility, weather resistance, delivery, setup, and takedown, with optional audio packages, generators, and on-site technical support. It does not publish the five sizes or their prices in the page text; request a custom quote.", "/services/ledtrailers", 2600, "starting", "Outdoor LED trailer"],
  ["movie-12", "12-Foot Inflatable Movie Screen Rental", "Outdoor Movies", "Total rental: $549. Includes a 12-foot inflatable screen, Sony laser projector, two powered speakers, two tripod speaker stands, projector stand, small audio mixer, and DVD player or laptop. Ideal for 10–30 people and small gatherings or backyard movie nights.", "/services/outdoor-movies", 549, "fixed", "12-foot package"],
  ["movie-16", "16-Foot Inflatable Movie Screen Rental", "Outdoor Movies", "Total rental: $749. Includes a 16-foot inflatable screen, Sony laser projector, two powered speakers, two tripod speaker stands, projector stand, small audio mixer, and DVD player or laptop. Designed for up to 75 guests; suited to school nights, church groups, or block parties.", "/services/outdoor-movies", 749, "fixed", "16-foot package"],
  ["movie-26", "26-Foot Inflatable Movie Screen Rental", "Outdoor Movies", "Total rental: $899. Includes a 26-foot inflatable screen, Sony laser projector, two powered speakers, two tripod speaker stands, projector stand, small audio mixer, and DVD player or laptop. Recommended for 100–150+ guests, fundraisers, movie festivals, or public celebrations.", "/services/outdoor-movies", 899, "fixed", "26-foot package"],
  ["movie-40", "40-Foot Inflatable Movie Screen Rental", "Outdoor Movies", "Total rental: $1,899. Includes a 40-foot inflatable screen, Sony laser projector, two powered speakers, two tripod speaker stands, projector stand, small audio mixer, and DVD player or laptop. Built for large crowds, schools, film festivals, and summer movie nights in the park.", "/services/outdoor-movies", 1899, "fixed", "40-foot package"],
  ["photo-ipad-mirror", "iPad Mirror Photo Booth", "Photo Booths", "Look your best and capture picture-perfect moments with the iPad Mirror Photo Booth. Beauty-enhancing technology delivers shareable photos for weddings, parties, and corporate events.", "/services/photo-booth", 799, "starting", "Starting at $799"],
  ["photo-magic-mirror", "Magic Mirror Photo Booth", "Photo Booths", "Interactive mirror booth with next-generation technology. Guests can create shareable keepsakes for Instagram, TikTok, or the family fridge; suited to events that need an interactive photo experience.", "/services/photo-booth", 1399, "starting", "Starting at $1,399"],
  ["photo-frame", "Magic Mirror with Frame Photo Booth", "Photo Booths", "Elegant mirror booth with customizable animations, instant prints, and social-media-ready photos. Adds a modern touch to events and creates keepsakes for guests of all ages.", "/services/photo-booth", 1699, "starting", "Starting at $1,699"],
  ["photo-360", "360 Photo Booth", "Photo Booths", "360 booth captures every angle in shareable videos for weddings, parties, and corporate events, with a seamless setup and social-media-ready content.", "/services/photo-booth", 1499, "starting", "Starting at $1,499"],
  ["silent-50", "Silent Disco Package — 50 Headphones", "Silent Disco", "50 headphones — $500. Perfect for small parties or home gatherings. Rentals include wireless headphones and transmitters with expert support.", "/services/silent-disco", 500, "fixed", "50 headphones"],
  ["silent-100", "Silent Disco Package — 100 Headphones", "Silent Disco", "100 headphones — $900. Great for mid-sized corporate events, student socials, or family celebrations. Rentals include wireless headphones and transmitters with expert support.", "/services/silent-disco", 900, "fixed", "100 headphones"],
  ["silent-150", "Silent Disco Package — 150 Headphones", "Silent Disco", "150 headphones — $1,200. Ideal for school dances, larger rooftops, or venue-based parties. Rentals include wireless headphones and transmitters with expert support.", "/services/silent-disco", 1200, "fixed", "150 headphones"],
  ["silent-200", "Silent Disco Package — 200 Headphones", "Silent Disco", "200 headphones — $1,800. Perfect for community events or mid-size outdoor activations. Rentals include wireless headphones and transmitters with expert support.", "/services/silent-disco", 1800, "fixed", "200 headphones"],
  ["silent-300", "Silent Disco Package — 300 Headphones", "Silent Disco", "300 headphones — $2,500. Built for big crowds and high-energy public events. Rentals include wireless headphones and transmitters with expert support.", "/services/silent-disco", 2500, "fixed", "300 headphones"],
  ["followspot", "LED Followspots", "Event Lighting", "Specialized lighting fixtures designed to accurately track and illuminate moving subjects. Essential when precise focus on performers or objects is required.", "/services/event-lighting", 110, "fixed", "Lighting"],
  ["moving-heads", "Moving Lights", "Event Lighting", "Lights that pan, tilt, and zoom to create dynamic, visually captivating event atmospheres and light shows.", "/services/event-lighting", 120, "fixed", "Lighting"],
  ["light-bar", "LED Light Bars", "Event Lighting", "Linear fixtures equipped with multiple LEDs, offering a versatile, efficient way to illuminate stages, backdrops, and other surfaces.", "/services/event-lighting", 65, "fixed", "Lighting"],
  ["pinspot-pack", "Chauvet EZPin Pack 4", "Event Lighting", "Lighting package for pinspotting and accent lighting. Includes four battery-powered EZPin fixtures and an IRC-6 remote control.", "/services/event-lighting", 80, "fixed", "Lighting package"],
  ["uplights-6", "Chauvet Freedom Par H9", "Event Lighting", "Battery-powered LED uplight for indoor and outdoor use. Wireless capabilities and robust construction make it suited to events, parties, and mobile applications.", "/services/event-lighting", 150, "fixed", "Lighting"],
  ["blacklight-fixtures", "Blacklight Fixtures", "Event Lighting", "Blacklight fixtures are among the lighting inventory options. Specific models, quantities, and pricing are confirmed by quote.", "/services/lighting", 50, "fixed", "Lighting"],
  ["uplighting-package", "Basic Uplighting Package", "Event Lighting", "A package of 6–12 lights for walls, drapes, or columns.", "/services/event-lighting", 275, "fixed", "Lighting package"],
  ["dance-party-lighting", "Dance Party Lighting Package", "Event Lighting", "Package includes moving heads, wash lights, and color effects.", "/services/event-lighting", 350, "starting", "Lighting package"],
  ["wedding-lighting", "Wedding Lighting Package", "Event Lighting", "Package includes warm white uplighting, soft wash lighting, and pin spots.", "/services/event-lighting", 450, "starting", "Lighting package"],
  ["stage-lighting", "Stage Lighting Package", "Event Lighting", "Package includes front lights, backlights, and color washes for performers.", "/services/event-lighting", 550, "starting", "Lighting package"],
  ["outdoor-lighting", "Outdoor Lighting Package", "Event Lighting", "Package includes fully weatherproof LED floodlights and pathway lighting.", "/services/event-lighting", 350, "starting", "Lighting package"],
  ["cold-spark-2", "Basic Sparkler Package", "Special Effects", "Includes two cold spark machines, one control remote, one refill of granules, and delivery, setup, and pickup.", "/services/cold-sparklers", 350, "starting", "Cold spark package"],
  ["cold-spark-4", "Premium Sparkler Package", "Special Effects", "Includes four cold spark machines, a wireless remote or DMX controller, an on-site technician for the event, and multiple refill cycles.", "/services/cold-sparklers", 650, "starting", "Cold spark package"],
  ["cold-spark-ultimate", "Ultimate Sparkler Package", "Special Effects", "Includes six or more machines for larger venues, synced timing with music or lighting, and full effect design and planning. Intended for high-impact events.", "/services/cold-sparklers", 1100, "starting", "Cold spark package"],
  ["dry-ice-cloud", "Dry Ice Machine — Dancing on a Cloud", "Special Effects", "Professional dry ice fog machine with built-in water heating element, power cords and extension cables, plus instructions or live tech support. Delivery, setup, breakdown, and on-site operator are optional. Customer supplies dry ice; the team can recommend suppliers.", "/services/dry-ice-machine", 295, "starting", "Special effect"],
  ["stream-basic", "Live Streaming Basic Package", "Live Streaming", "Single-camera setup for meetings, training sessions, town halls, interviews, or private events with a remote audience. Includes one 4K camera, streaming and capture laptop, QSC iTouch Digital Audio Mixer, video switcher, and audio and video recording.", "/services/live-streaming", 621, "starting", "Streaming package"],
  ["stream-pro", "Live Streaming Pro Package", "Live Streaming", "Multi-camera setup for conferences, panels, performances, live shows, hybrid events, or fundraisers. Includes three 4K cameras, laptop with streaming software and media control, QSC iTouch Digital Audio Mixer, professional video switcher, and audio and video recording.", "/services/live-streaming", 1250, "starting", "Streaming package"],
].map(([id, name, category, desc, sourcePath, price, priceType, tag]) => ({
  id,
  name,
  category,
  desc,
  sourceUrl: `https://www.beantownaudiorentals.com${sourcePath}`,
  price,
  priceType,
  tag,
  image: (id === "small-audio" || id === "medium-audio" || id === "large-audio")
    ? "assets/beantown/audio-package.png"
    : id === "powered-speakers"
    ? "assets/beantown/line-array-speakers.png"
    : id === "audio-monitors"
    ? "assets/beantown/stage-monitor.png"
    : id === "audio-cables-stands"
    ? "assets/beantown/audio-cables-stands.png"
    : id === "sub-thump18"
    ? "assets/beantown/thump18s-subwoofer.png"
    : id === "jbl-vrx-sub"
    ? "assets/beantown/jbl-vrx-sub.png"
    : id === "sub-ks212c"
    ? "assets/beantown/qsc-ks212c-sub.png"
    : id === "sub-kw181"
    ? "assets/beantown/qsc-kw181-sub.png"
    : id === "sub-prx618"
    ? "assets/beantown/jbl-prx618-sub.png"
    : id === "qlxd-handheld"
    ? "assets/beantown/wireless-handheld-mic.png"
    : id === "shure-sm58"
    ? "assets/beantown/wired-handheld-mic.png"
    : id === "qlxd-lavalier"
    ? "assets/beantown/lavalier-clip-mic.png"
    : id === "countryman-headset"
    ? "assets/beantown/countryman-headset-mic.png"
    : id === "ptt-mic"
    ? "assets/beantown/push-to-talk-mic.png"
    : id === "iem"
    ? "assets/beantown/in-ear-monitors.png"
    : id === "mic-single-package"
    ? "assets/beantown/single-mic-setup.png"
    : id === "mic-presentation-package"
    ? "assets/beantown/presentation-setup.png"
    : id === "mic-live-package"
    ? "assets/beantown/live-performance-package-v2.jpg"
    : id === "mixer-x32"
    ? "assets/beantown/behringer-x32-mixer.png"
    : id === "mixer-x32-compact"
    ? "assets/beantown/behringer-x32-compact.png"
    : id === "mixer-sq7"
    ? "assets/beantown/allen-heath-sq7-mixer.png"
    : id === "mixer-touchmix"
    ? "assets/beantown/qsc-touchmix-16.png"
    : id === "mixer-mackie1402"
    ? "assets/beantown/mackie-1402-vlz3.png"
    : id === "mixer-yamaha-mg10xu"
    ? "assets/beantown/yamaha-mg10xu.png"
    : id === "dj-basic-pkg"
    ? "assets/beantown/basic-dj-package.png"
    : id === "dj-standard-pkg"
    ? "assets/beantown/standard-dj-package.png"
    : id === "dj-pro-pkg"
    ? "assets/beantown/pro-dj-package.png"
    : id === "dj-facade"
    ? "assets/beantown/scrim-werks-dj-facade.png"
    : id === "rane-72"
    ? "assets/beantown/rane-seventy-two-mixer.png"
    : id === "rane-ttm57sl"
    ? "assets/beantown/rane-ttm57sl-mixer.png"
    : id === "rane-sl4"
    ? "assets/beantown/rane-sl4-interface.png"
    : id === "djm-900nxs"
    ? "assets/beantown/pioneer-djm-900nxs.png"
    : id === "technics-1200"
    ? "assets/beantown/technics-sl-1200mk2.png"
    : id === "cdj-3000"
    ? "assets/beantown/pioneer-cdj-3000.png"
    : id === "cdj-2000nxs2"
    ? "assets/beantown/pioneer-cdj-2000nxs2.png"
    : id === "ddj-1000srt"
    ? "assets/beantown/pioneer-ddj-1000srt.png"
    : id === "djm-s9"
    ? "assets/beantown/pioneer-djm-s9.png"
    : undefined,
  tone: category === "Microphones" ? "coral" : category === "DJ Equipment" ? "sky" : category === "Event Lighting" ? "lavender" : category === "Photo Booths" ? "peach" : "lime",
}));
