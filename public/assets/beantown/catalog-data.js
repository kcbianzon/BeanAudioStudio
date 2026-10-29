/*
 * Public rental catalog transcribed from the Beantown Audio Rentals service pages.
 * Rates are populated only where the source page publishes an amount. Everything
 * else is quote-only; zero is a sentinel for the estimator, not a rental price.
 */
window.BEANTOWN_SOURCE_CATALOG = [
  // id, name, category, description, source path, price, rate type, badge
  ["small-audio", "Small Audio Package", "Audio & Speakers", "• 2× Powered 12″ PA Speakers with heavy-duty tripod stands\n• 1× Shure wireless handheld microphone & receiver\n• 1× Compact 4-channel audio mixer with Bluetooth/AUX\n• All audio cables, power cords & surge protectors\n• Ideal for: Private parties, networking, speeches (up to 50 guests)", "/services/audio", 199, "starting", "Audio package"],
  ["medium-audio", "Medium Audio Package", "Audio & Speakers", "• 4× Full-range powered speakers with adjustable tripod stands\n• 2× Shure wireless microphones (handheld or lapel)\n• 1× 16-channel digital/analog mixer with EQ & effects\n• Subwoofer support included as venue requires\n• Includes: Delivery, on-site setup, soundcheck & cabling\n• Ideal for: Receptions, weddings, panels, meetings (50–150 guests)", "/services/audio", 349, "starting", "Audio package"],
  ["large-audio", "Large Audio Package", "Audio & Speakers", "• 6–8× Scalable Line Array Speakers + high-output subwoofers\n• Multi-channel digital audio console with motorized faders\n• Shure QLX-D professional wireless microphone system\n• Full stage monitor wedge package & stage cabling\n• Includes: Dedicated on-site audio technician support\n• Ideal for: Concerts, corporate keynotes, festivals (150+ guests)", "/services/audio", 880, "starting", "Audio package"],
  ["powered-speakers", "Powered Speakers / Line Array Speakers", "Audio & Speakers", "• 1× High-output powered loudspeaker or line array module\n• Clean full-range audio with DSP tuning presets\n• Includes heavy-duty tripod stand & XLR signal/power cables\n• Ideal for: Main venue sound, delay fills, or stage monitors", "/services/audio", 65, "fixed", "Audio equipment"],
  ["audio-monitors", "Stage Monitors", "Audio & Speakers", "• 1× Low-profile active stage wedge monitor\n• Crisp on-stage vocal & instrument monitoring for performers\n• Heavy-duty stage cabling & independent mix channel send\n• Ideal for: Live bands, vocalists, keynote speakers, stage performers", "/services/audio", 55, "fixed", "Audio equipment"],
  ["audio-cables-stands", "Audio Cables & Stands", "Audio & Speakers", "• Complete cable & stand reinforcement package\n• Heavy-duty tripod speaker stands, XLR, TRS, HDMI & power drops\n• Cable ramps & gaffer tape for neat, trip-free floor runs\n• Ideal for: Safe, clean stage and venue audio connectivity", "/services/audio", 25, "fixed", "Audio equipment"],
  ["sub-thump18", "Mackie Thump18S Powered Subwoofer", "Subwoofers", "• 1× Mackie Thump18S 1200W 18″ Powered Subwoofer\n• High-output Class-D amplifier with precision bass response\n• Stereo XLR inputs, outputs & pole-mount cup\n• Ideal for: Mobile DJs, private parties, school dances & small clubs", "/services/subwoofer-rentals", 75, "fixed", "Subwoofer"],
  ["jbl-vrx-sub", "JBL VRX Sub Series", "Subwoofers", "• 1× JBL VRX918SP 18″ High-Power Flying Powered Subwoofer\n• Seamlessly integrates with JBL VRX932LA line array systems\n• Scalable concert-grade low-frequency output\n• Ideal for: Large concerts, festivals, tours & outdoor stages", "/services/subwoofer-rentals", 150, "fixed", "Subwoofer"],
  ["sub-ks212c", "QSC KS212C K Cardioid Subwoofer", "Subwoofers", "• 1× QSC KS212C Dual 12″ Active Cardioid Subwoofer\n• Cardioid pattern radiates 15 dB more sound to front than rear\n• Keeps stage whisper-quiet while pushing punchy bass forward\n• Ideal for: Noise-sensitive venues, live stages & wedding ballrooms", "/services/subwoofer-rentals", 120, "fixed", "Subwoofer"],
  ["sub-kw181", "QSC KW181 1000W 18″ Powered Subwoofer", "Subwoofers", "• 1× QSC KW181 1000W 18″ Powered Subwoofer\n• 1000W Class D amplifier producing deep, tight bass down to 37 Hz\n• Heavy-duty tour-grade birch enclosure with caster wheels\n• Ideal for: Medium-to-large venues, live bands, DJs & outdoor productions", "/services/subwoofer-rentals", 95, "fixed", "Subwoofer"],
  ["sub-prx618", "JBL PRX 618S", "Subwoofers", "• 1× JBL PRX618S 1000W 18″ Compact Powered Subwoofer\n• Lightweight DuraFlex-finished compact enclosure\n• 1000W Crown-designed Class-D amplification\n• Ideal for: Mobile DJs, tight stage footprints & events up to 200 guests", "/services/subwoofer-rentals", 85, "fixed", "Subwoofer"],
  ["qlxd-handheld", "Wireless Handheld Microphone", "Microphones", "• 1× Shure QLX-D Digital Wireless Handheld Microphone\n• 24-bit digital audio clarity with AES-256 encryption\n• Includes receiver base, adjustable mic stand & XLR interconnect\n• Ideal for: MCs, vocalists, keynote speakers & mobile presenters", "/services/microphone-rentals", 65, "fixed", "Microphone"],
  ["shure-sm58", "Wired Handheld Microphone", "Microphones", "• 1× Industry-standard Shure SM58 Cardioid Dynamic Microphone\n• Pneumatic shock-mount system reduces handling noise\n• Includes 25-foot XLR cable & heavy-duty boom mic stand\n• Ideal for: Speeches, stand-up comedy, backup mics & live stage vocals", "/services/microphone-rentals", 20, "fixed", "Microphone"],
  ["qlxd-lavalier", "Lavalier (Clip-On) Microphone", "Microphones", "• 1× Shure QLX-D Wireless Lavalier (Clip-On) Microphone\n• Discrete miniature condenser capsule & wireless bodypack\n• Digital wireless receiver, clip, windscreen & audio patch cable\n• Ideal for: Keynote lectures, panel discussions, interviews & ceremonies", "/services/microphone-rentals", 65, "fixed", "Microphone"],
  ["countryman-headset", "Countryman Headset Microphone", "Microphones", "• 1× Countryman Discreet Headset Microphone\n• Ultra-lightweight flesh-tone frame with crystal-clear voice pick-up\n• Wireless transmitter pack & receiver base with XLR output\n• Ideal for: Fitness instructors, keynote speakers, theater & dynamic stage presenters", "/services/microphone-rentals", 50, "fixed", "Microphone"],
  ["ptt-mic", "Push-to-Talk Microphone", "Microphones", "• 1× Push-to-Talk (PTT) Desk Paging Microphone\n• Momentary or locking push-to-talk button for controlled audio broadcast\n• Weighted base with flexible gooseneck & balanced XLR output\n• Ideal for: Dispatch desks, factory announcements, ceremonies & control stations", "/services/microphone-rentals", 35, "fixed", "Microphone"],
  ["iem", "In-Ear Monitors (IEMs)", "Microphones", "• 1× Wireless In-Ear Monitor (IEM) System\n• Stereo transmitter with discrete beltpack receiver & sound-isolating earphones\n• Pristine personal audio monitoring without ambient stage bleed\n• Ideal for: Live musicians, vocalists, audio engineers & broadcast hosts", "/services/microphone-rentals", 75, "fixed", "Microphone"],
  ["mic-single-package", "Single Mic Setup", "Microphones", "• 1× Shure wired or wireless microphone (handheld or lapel)\n• 1× Adjustable tripod microphone stand & 25ft XLR cable\n• 1× Passive DI box or mixer channel adapter\n• Ideal for: Solo speakers, presentations, toasts & intimate gatherings", "/services/microphone-rentals", 35, "fixed", "Microphone package"],
  ["mic-presentation-package", "Presentation Setup", "Microphones", "• 2× Wireless Lavalier or Headset Microphones with bodypacks\n• 1× Dual-channel digital wireless receiver\n• 1× Compact audio mixer with independent volume & EQ controls\n• Ideal for: Corporate trainings, lectures, seminars & worship services", "/services/microphone-rentals", 120, "fixed", "Microphone package"],
  ["mic-live-package", "Live Performance Package", "Microphones", "• 4–6× Shure wireless & dynamic microphones with boom stands\n• 1× Multi-channel stage audio mixing console\n• Complete XLR stage snake & interconnect cabling\n• Includes: Dedicated on-site audio technician support\n• Ideal for: Live music bands, panel discussions, award shows & stage events", "/services/microphone-rentals", 220, "fixed", "Microphone package"],
  ["mixer-x32", "Behringer X32 Digital Mixer", "Audio Mixers", "• Behringer X32 40-Input, 25-Bus Digital Mixing Console\n• 32 Midas-designed programmable mic preamps & 25 motorized faders\n• 7″ color TFT display, integrated FX rack & multi-track USB interface\n• Ideal for: Full-scale concert productions, festivals & large multi-source events", "/services/audio-mixers", 150, "fixed", "Audio mixer"],
  ["mixer-x32-compact", "Behringer X32 Compact Digital Mixer", "Audio Mixers", "• Behringer X32 Compact 40-Input, 25-Bus Digital Console\n• 16 Midas preamps, 17 motorized faders & 8 DCA groups\n• Fast scene recall, iPad remote mixing control & USB recording\n• Ideal for: Front-of-house mixing, stage monitors, churches & touring acts", "/services/audio-mixers", 110, "fixed", "Audio mixer"],
  ["mixer-sq7", "Allen & Heath SQ-7 32-Channel Digital Mixer", "Audio Mixers", "• Allen & Heath SQ-7 48-Channel / 36-Bus Digital Mixer\n• 32 onboard mic preamps, 33 motorized faders & 96kHz FPGA processing\n• High-resolution touchscreen, 8 softkeys & custom fader layouts\n• Ideal for: High-end corporate conferences, broadcasts & demanding live shows", "/services/audio-mixers", 295, "fixed", "Audio mixer"],
  ["mixer-touchmix", "QSC TouchMix-16", "Audio Mixers", "• QSC TouchMix-16 Compact Digital Mixer\n• 16 inputs (12 XLR + 4 combo), touchscreen interface & workflow wizards\n• Multi-track USB direct recording & wireless tablet mixing\n• Ideal for: Bands, corporate hybrid events, weddings & mobile production rigs", "/services/audio-mixers", 85, "fixed", "Audio mixer"],
  ["mixer-mackie1402", "Mackie 1402-VLZ3", "Audio Mixers", "• Mackie 1402-VLZ3 14-Channel Ultra-Low-Noise Analog Mixer\n• 6 premium Onyx mic preamps with 3-band EQ & low-cut filters\n• Durable steel chassis, flexible routing & auxiliary sends\n• Ideal for: Mobile sound rigs, break-out rooms, podcasters & acoustic sets", "/services/audio-mixers", 45, "fixed", "Audio mixer"],
  ["mixer-yamaha-mg10xu", "Yamaha MG10XU", "Audio Mixers", "• Yamaha MG10XU 10-Channel Compact Mixer with FX & USB\n• 4 D-PRE mic preamps, SPX digital multi-effects & 1-knob compressors\n• Built-in 24-bit/192kHz 2-in/2-out USB audio interface\n• Ideal for: Solo artists, podcasts, live stream mixing & intimate meeting rooms", "/services/audio-mixers", 40, "fixed", "Audio mixer"],
  ["dj-basic-pkg", "Basic DJ Package (Up to 50 Guests)", "DJ Equipment", "• 1× Pioneer 2-Channel DJ Controller with jog wheels\n• 1× Heavy-duty adjustable laptop stand\n• 2× Powered 12″ PA speakers with tripod stands & all RCA/XLR cables\n• Ideal for: House parties, small lounges, birthday celebrations (up to 50 guests)", "/services/dj-equipment-rentals", 299, "starting", "DJ package"],
  ["dj-standard-pkg", "Standard DJ Package (50–150 Guests)", "DJ Equipment", "• 1× Pioneer CDJ/Controller setup + 2-channel professional mixer\n• 2× High-output powered 15″ PA speakers on tripod stands\n• 1× Professional folding DJ facade / scrim booth\n• All audio patch cables, extension cords & power drops\n• Ideal for: Weddings, school dances, corporate parties (50–150 guests)", "/services/dj-equipment-rentals", 449, "starting", "DJ package"],
  ["dj-pro-pkg", "Pro DJ Package (150+ Guests)", "DJ Equipment", "• 2× Pioneer CDJ-3000 / Technics 1200 turntables + 4-channel DJ mixer\n• 4× Full-range PA speakers + 2× high-power 18″ subwoofers\n• 1× Scrim Werks illuminated DJ booth facade\n• Sound-activated dance floor lighting package included\n• Ideal for: Large clubs, music festivals, corporate galas (150+ guests)", "/services/dj-equipment-rentals", 699, "starting", "DJ package"],
  ["dj-facade", "Scrim Werks Pro DJ Facade", "DJ Equipment", "• 1× Scrim Werks 4-Panel Pro Foldable DJ Booth Facade\n• Lightweight aluminum frame with translucent white fire-retardant stretch scrims\n• Backlight-ready for LED wash and uplighting effects\n• Conceals all DJ cabling, flight cases, and hardware for a sleek look", "/services/dj-equipment-rentals", 50, "fixed", "DJ equipment"],
  ["rane-72", "Rane SEVENTY-TWO DJ Mixer", "DJ Equipment", "• 1× Rane SEVENTY-TWO 2-Channel Advanced Battle Mixer\n• 4.3″ color touchscreen for Serato DJ Pro waveforms & FX control\n• Dual MAG FOUR ultra-light contactless faders with reverse & curve adjust\n• Ideal for: Pro battle DJs, turntablists & high-energy club sets", "/services/dj-equipment-rentals", 85, "fixed", "DJ equipment"],
  ["rane-ttm57sl", "Rane TTM 57SL", "DJ Equipment", "• 1× Rane TTM 57SL Classic 2-Channel DJ Mixer\n• Dedicated Serato Scratch Live controls, internal USB audio interface\n• Legendary magnetic fader performance & dual phono/line inputs\n• Ideal for: Vinyl purists, turntablists & classic scratch battles", "/services/dj-equipment-rentals", 65, "fixed", "DJ equipment"],
  ["rane-sl4", "Rane SL4", "DJ Equipment", "• 1× Rane SL4 5-Stereo-Channel USB DJ Audio Interface\n• Connects up to 4 turntables or CD players to Serato DJ software\n• Dual USB ports for seamless back-to-back DJ transitions\n• Includes all RCA interconnects, USB cables & power supply", "/services/dj-equipment-rentals", 50, "fixed", "DJ equipment"],
  ["djm-900nxs", "Pioneer DJM-900NXS", "DJ Equipment", "• 1× Pioneer DJM-900NXS 4-Channel Professional DJ Mixer\n• Studio-quality Sound Color FX, Beat FX & X-Pad tactile ribbon\n• 4 phono inputs, 4 digital inputs, dual mic inputs & balanced master XLR\n• Industry-standard club mixer for guest DJs and festivals", "/services/dj-equipment-rentals", 95, "fixed", "DJ equipment"],
  ["technics-1200", "Technics SL-1200MK2 Pro Turntable", "DJ Equipment", "• 1× Technics SL-1200MK2 Direct-Drive Professional Turntable\n• Legendary quartz-locked high-torque direct-drive motor system\n• Precision S-shaped tonearm, pitch slider & heavy vibration-damping base\n• Includes slipmat, headshell & RCA interconnects", "/services/dj-equipment-rentals", 75, "fixed", "DJ equipment"],
  ["cdj-3000", "Pioneer DJ CDJ-3000 Professional DJ Media Player", "DJ Equipment", "• 1× Pioneer DJ CDJ-3000 Flagship Professional Media Player\n• 9″ high-definition touchscreen with Touch Preview & Touch Cue\n• Gigabit Pro DJ Link, dual-core MPU & ultra-smooth jog wheel\n• Industry standard for major festivals, mega-clubs & headline artists", "/services/dj-equipment-rentals", 125, "fixed", "DJ equipment"],
  ["cdj-2000nxs2", "Pioneer CDJ-2000NXS2 Pro-DJ Multi-Player", "DJ Equipment", "• 1× Pioneer CDJ-2000NXS2 Pro-DJ Multi-Player\n• 7″ full-color touch display with Qwerty search & multi-colored waveforms\n• 96kHz/24-bit high-resolution audio support with FLAC/ALAC\n• 8 color-coded Hot Cues, slip mode & Pro DJ Link networking", "/services/dj-equipment-rentals", 95, "fixed", "DJ equipment"],
  ["ddj-1000srt", "Pioneer DDJ-1000SRT", "DJ Equipment", "• 1× Pioneer DDJ-1000SRT 4-Channel Controller for Serato DJ Pro\n• Full-size jog wheels with on-jog color LCD displays\n• 14 Beat FX, 4 Sound Color FX & 16 multi-color performance pads\n• Dual USB inputs for seamless two-DJ handoffs", "/services/dj-equipment-rentals", 90, "fixed", "DJ equipment"],
  ["djm-s9", "Pioneer DJM-S9 Two-Channel DJ Battle Mixer for Serato DJ", "DJ Equipment", "• 1× Pioneer DJM-S9 2-Channel Performance Battle Mixer\n• Magvel Fader Pro magnetic crossfader with feeling adjust\n• 16 multi-color performance pads & dual FX paddles for Serato DJ Pro\n• Dual built-in USB sound cards for seamless DJ changeovers", "/services/dj-equipment-rentals", 75, "fixed", "DJ equipment"],
  ["video-basic-package", "Basic Video Package", "Video & Displays", "• 1× High-Definition 1080p Digital Projector (4,500 lumens)\n• 1× Portable 80″ Tripod Projection Screen\n• 1× HDMI cable kit (25ft & 50ft) + wireless presentation clicker\n• 1× Adjustable projector presentation stand\n• Ideal for: Team meetings, conference breakouts, family slide shows (up to 40 guests)", "/services/video", 299, "starting", "Video package"],
  ["video-mid-package", "Mid-Size Video Package", "Video & Displays", "• 1× Ultra-Bright 6,000+ Lumens Laser Projector (1080p Full HD)\n• 1× 100″–120″ Fast-Fold Screen with black velvet dress kit skirt\n• 1× Multi-input HDMI presentation video switcher\n• Heavy-duty crank stands & 50ft/100ft video cabling\n• Ideal for: Banquets, corporate workshops, award dinners (50–175 guests)", "/services/video", 499, "starting", "Video package"],
  ["video-large-package", "Large Format Video Package", "Video & Displays", "• Multiple 75″ 4K Commercial Displays or Large-Format LED Video Wall\n• Seamless multi-source video switcher / matrix scaler with preview\n• Heavy-duty dual truss stands or ground-support framing\n• Includes: Dedicated on-site video technician support\n• Ideal for: Main ballroom keynotes, trade shows, public conventions (175+ guests)", "/services/video", 899, "starting", "Video package"],
  ["tv-75", "Samsung 75 Inch TV", "Video & Displays", "• 1× Samsung 75″ Crystal 4K UHD Smart Television\n• Ultra-thin bezel design with Dynamic Crystal Color & HDR10+\n• 1× Heavy-duty chrome/black mobile floor stand with locking wheels\n• 1× 25ft High-speed HDMI cable + wireless casting support\n• Ideal for: Exhibition booths, trade shows, sports watch parties & ballroom signage", "/services/tv-rentals", 350, "fixed", "TV rental"],
  ["tv-65", "Samsung 65 Inch TV", "Video & Displays", "• 1× Samsung 65″ Crystal 4K UHD Smart Television\n• Crystal 4K processor, vibrant color saturation & wide viewing angles\n• 1× Commercial rolling floor stand with cable management shelf\n• 1× 25ft High-speed HDMI cable + remote control\n• Ideal for: Wedding slideshows, breakout suites, sponsor lounges & watch parties", "/services/tv-rentals", 250, "fixed", "TV rental"],
  ["laser-projector", "HD Projector Rental", "Video & Displays", "• 1× Commercial Laser HD Video Projector (5,000+ Lumens)\n• Instant on/off laser light engine with crisp 1080p/WUXGA resolution\n• Vertical/horizontal keystone correction & optical zoom lens\n• Includes 50ft HDMI cable, power cord & remote\n• Ideal for: Classrooms, auditoriums, ballrooms & conference presentations", "/services/video", 175, "fixed", "Projector"],
  ["fastfold-screen", "Fast-Fold Screen with Black Dress Kit", "Video & Displays", "• 1× 120″ (16:9) Professional Fast-Fold Projection Screen\n• Aircraft-grade aluminum snap frame with quick-release legs\n• Includes black velvet dress kit border & lower skirt for a finished look\n• Front & rear projection surfaces available with rolling flight case", "/services/video", 150, "fixed", "Projection screen"],
  ["video-switcher", "Video Switcher", "Video & Displays", "• 1× 4-Channel Full HD / 4K Seamless Video Production Switcher\n• Picture-in-picture, split screen, wipe transitions & multiview output\n• USB webcam output for direct Zoom/Teams/YouTube streaming\n• Supports HDMI/SDI camera feeds, presentation laptops & graphics", "/services/live-streaming", 75, "fixed", "Video equipment"],
  ["led-12", "12′ × 7′ 2.67 mm LED Wall Package", "LED Video Walls", "• 12′ × 7′ Ultra-Fine 2.67 mm Indoor LED Video Wall\n• 1× NovaStar VX1000 All-in-One LED video processor & scaler\n• 2× Powered 12″ PA speakers on tripod stands + audio mixer\n• 1× Shure wireless handheld microphone system\n• Includes: Delivery, ground-support trussing, setup & tech check\n• Ideal for: Indoor trade shows, galas, wedding stages, panels (100–350 guests)", "/services/indoorledwall", 1150, "starting", "LED wall package"],
  ["led-16", "16′ × 9′ 2.67 mm LED Wall Package", "LED Video Walls", "• 16′ × 9′ Cinema-Grade 2.67 mm Indoor LED Video Wall\n• 1× NovaStar VX1000 All-in-One video processor with ultra-low latency\n• 2× High-output powered PA speakers + tripod stands + audio console\n• 1× Shure wireless handheld microphone system\n• Includes: Full ground-support structure, delivery, setup & teardown\n• Ideal for: Corporate keynotes, main-stage concerts, conventions (300+ guests)", "/services/indoorledwall", 1450, "starting", "LED wall package"],
  ["led-custom", "Custom LED Wall Sizes & Configurations", "LED Video Walls", "• Custom Engineered LED Video Wall Layouts & Dimensions\n• Pitch options: 2.6 mm (close viewing), 2.9 mm, or 3.9 mm (long throw)\n• Full modular ground-support framing, crank towers, or truss rigging\n• Video mapping, playback media servers, on-site setup & technician\n• Ideal for: Bespoke stage backdrops, broadcast studios, curved designs & exhibits", "/services/indoorledwall", 1850, "starting", "Custom LED wall"],
  ["led-trailer", "Outdoor LED Video Wall Trailer (5 Sizes)", "LED Video Walls", "• Mobile Trailer-Mounted Outdoor LED Video Wall (5 screen sizes)\n• High-brightness 3.91 mm pixel pitch visible in direct full sunlight\n• Fully IP65 weather-resistant construction (wind-rated up to 45 mph)\n• Hydraulic mast lift with 360-degree screen rotation\n• Optional onboard whisper generator & integrated horn audio system\n• Ideal for: Outdoor festivals, stadium broadcasts, parades & community rallies", "/services/ledtrailers", 2600, "starting", "Outdoor LED trailer"],
  ["movie-12", "12-Foot Inflatable Movie Screen Rental", "Outdoor Movies", "• 1× 12-Foot Inflatable Outdoor Movie Screen (widescreen 16:9)\n• 1× High-output HD laser movie projector & media stand\n• 2× Powered PA outdoor speakers with tripod stands\n• 1× Blu-ray/DVD player or laptop video connection + ultra-quiet blower\n• Ideal for: Backyard movie nights, birthday parties, intimate gatherings (10–30 guests)", "/services/outdoor-movies", 549, "fixed", "12-foot package"],
  ["movie-16", "16-Foot Inflatable Movie Screen Rental", "Outdoor Movies", "• 1× 16-Foot Inflatable Outdoor Movie Screen (widescreen 16:9)\n• 1× High-output HD laser movie projector & presentation table\n• 2× Powered PA speakers with tripod stands + audio mixer\n• 1× Blu-ray/DVD player or HDMI laptop hookup + quiet air blower\n• Ideal for: School field nights, church youth groups, block parties (up to 75 guests)", "/services/outdoor-movies", 749, "fixed", "16-foot package"],
  ["movie-26", "26-Foot Inflatable Movie Screen Rental", "Outdoor Movies", "• 1× 26-Foot Giant Inflatable Outdoor Movie Screen\n• 1× Commercial high-lumens laser projector with long-throw lens\n• 2× High-power outdoor PA speakers on crank stands + mixer\n• Heavy-duty ground stakes, tethers, quiet blower & media player\n• Ideal for: Community movie nights, fundraisers, town celebrations (100–150+ guests)", "/services/outdoor-movies", 899, "fixed", "26-foot package"],
  ["movie-40", "40-Foot Inflatable Movie Screen Rental", "Outdoor Movies", "• 1× 40-Foot Megascreen Inflatable Outdoor Movie Theater\n• 1× Commercial ultra-high-output venue laser projector\n• Full concert-grade outdoor sound system with subwoofers\n• Heavy-duty tie-downs, whisper-quiet blower & on-site technician\n• Ideal for: City festivals, drive-in parks, college campuses (500+ guests)", "/services/outdoor-movies", 1899, "fixed", "40-foot package"],
  ["photo-ipad-mirror", "iPad Mirror Photo Booth", "Photo Booths", "• 1× iPad Mirror Photo Booth with beauty LED ring light\n• Instant digital photo, GIF & boomerang sharing via SMS/Email/AirDrop\n• Customizable digital photo overlay frame for your event branding\n• Fun party props kit included\n• Ideal for: Birthday parties, weddings, baby showers & social celebrations", "/services/photo-booth", 799, "starting", "Starting at $799"],
  ["photo-magic-mirror", "Magic Mirror Photo Booth", "Photo Booths", "• 1× Interactive Full-Length Magic Mirror Photo Booth\n• Touch-activated mirror animations, interactive games & voice guidance\n• Studio DSLR camera with external flash strobe & lab-quality prints\n• Complete tabletop props pack & online digital gallery access\n• Ideal for: Weddings, corporate galas, milestone celebrations & school formals", "/services/photo-booth", 1399, "starting", "Starting at $1,399"],
  ["photo-frame", "Magic Mirror with Frame Photo Booth", "Photo Booths", "• 1× Vintage Ornate Framed Magic Mirror Photo Booth\n• Elegant gilded gold/silver frame with interactive touch mirror glass\n• Unlimited instant on-site 4×6 dye-sublimation photo prints\n• Red carpet, velvet stanchions & VIP guest prop trunk included\n• Ideal for: Luxury weddings, black-tie galas, charity balls & holiday banquets", "/services/photo-booth", 1699, "starting", "Starting at $1,699"],
  ["photo-360", "360 Photo Booth", "Photo Booths", "• 1× 360-Degree Revolving Video Photo Booth Platform (3–4 guests)\n• Motorized spinning arm with ultra-smooth 4K video recording\n• Dynamic slow-motion, reverse & fast-motion effects with music overlay\n• Instant social sharing station via AirDrop, QR code, and SMS\n• Full RGB perimeter ambient lighting included", "/services/photo-booth", 1499, "starting", "Starting at $1,499"],
  ["silent-50", "Silent Disco Package — 50 Headphones", "Silent Disco", "• 50× Multi-Channel LED Wireless Silent Disco Headphones\n• 3× Long-range multi-channel RF transmitters (up to 3 independent DJs)\n• Color-coded LED earcups showing active channel (Red, Blue, Green)\n• Audio interconnect cables for laptops, phones, mixers & DJ decks\n• Ideal for: House parties, rooftop gatherings & intimate celebrations (up to 50 guests)", "/services/silent-disco", 500, "fixed", "50 headphones"],
  ["silent-100", "Silent Disco Package — 100 Headphones", "Silent Disco", "• 100× Multi-Channel LED Wireless Silent Disco Headphones\n• 3× Long-range multi-channel RF transmitters with broadcast antennas\n• 3 simultaneous music channels with independent volume control\n• Headphone charging tree racks & audio source cables\n• Ideal for: Student socials, corporate mixers, weddings & lounges (50–100 guests)", "/services/silent-disco", 900, "fixed", "100 headphones"],
  ["silent-150", "Silent Disco Package — 150 Headphones", "Silent Disco", "• 150× Multi-Channel LED Wireless Silent Disco Headphones\n• 3× Long-range RF broadcast transmitters with 500-meter range\n• Triple-channel multi-DJ compatibility with synchronized LED pulses\n• Quick-charge transport cases & labeled audio patch cables\n• Ideal for: High school proms, college events & venue parties (100–150 guests)", "/services/silent-disco", 1200, "fixed", "150 headphones"],
  ["silent-200", "Silent Disco Package — 200 Headphones", "Silent Disco", "• 200× Multi-Channel LED Wireless Silent Disco Headphones\n• 3× High-power multi-channel wireless transmitters with boost antennas\n• 3 concurrent audio feeds with crystal-clear reception through walls\n• Pre-charged and packed in organized road cases with setup guide\n• Ideal for: Outdoor festivals, community nights & beach parties (150–200 guests)", "/services/silent-disco", 1800, "fixed", "200 headphones"],
  ["silent-300", "Silent Disco Package — 300 Headphones", "Silent Disco", "• 300× Multi-Channel LED Wireless Silent Disco Headphones\n• 3× Heavy-duty long-range multi-channel broadcast transmitters\n• Triple-channel synchronized lighting across entire crowd\n• Includes complete charging infrastructure & on-site tech guidance\n• Ideal for: Music festivals, university orientations & massive public events (250+ guests)", "/services/silent-disco", 2500, "fixed", "300 headphones"],
  ["followspot", "LED Followspots", "Event Lighting", "• 1× ADJ FS600LED High-Power 60W LED Followspot Fixture\n• 8 vibrant dichroic colors (including warm white 3200K & UV)\n• Adjustable manual iris, framing shutters & 18°–26° beam zoom\n• Includes heavy-duty tripod followspot stand with pan/tilt handle\n• Ideal for: Stage productions, award ceremonies, first dances & keynote presenters", "/services/event-lighting", 110, "fixed", "Lighting"],
  ["moving-heads", "Moving Lights", "Event Lighting", "• 2× ADJ Focus Spot Moving Head LED Fixtures (DMX-controllable)\n• Motorized pan/tilt, rotating gobo wheels & vivid color optics\n• Sound-active mode, automated light shows, or custom DMX control\n• Includes heavy-duty clamps or floor bases + safety cables\n• Ideal for: Concert stages, high-energy dance floors, weddings & private parties", "/services/event-lighting", 120, "fixed", "Lighting"],
  ["light-bar", "LED Light Bars", "Event Lighting", "• 1× ADJ Mega Bar RGBA High-Output Linear LED Wash Bar (42″)\n• Rich color mixing with Red, Green, Blue & Amber LEDs for warm pastels\n• Smooth 0–100% dimming, color strobing & sound-activated modes\n• Includes dual mounting brackets for wall-washing or floor-standing\n• Ideal for: Stage backdrops, perimeter wash, head table underlighting & drapery", "/services/event-lighting", 65, "fixed", "Lighting"],
  ["pinspot-pack", "Chauvet EZPin Pack 4", "Event Lighting", "• 4× Chauvet DJ EZpin Battery-Powered LED Pinspot Fixtures\n• Built-in magnetic bases stick instantly to ceiling grids & metal beams\n• 1× Chauvet IRC-6 wireless infrared remote control\n• Includes warm white & color gel pack + VIP padded gear bag\n• Ideal for: Highlighting wedding cakes, floral centerpieces & auction tables", "/services/event-lighting", 80, "fixed", "Lighting package"],
  ["uplights-6", "Chauvet Freedom Par H9", "Event Lighting", "• 6× Chauvet DJ Freedom Par H9 IP Wireless Battery-Powered Uplights\n• 9× 10W RGBAW+UV LEDs for unlimited rich color mixing & amber warmth\n• 100% wireless operation with up to 20 hours battery life\n• Rugged IP65 weather-resistant housing for indoor or outdoor use\n• Ideal for: Room perimeter wash, architectural accent, pillars & tent poles", "/services/event-lighting", 150, "fixed", "Lighting"],
  ["blacklight-fixtures", "Blacklight Fixtures", "Event Lighting", "• 4× ADJ Eco UV Bar Plus High-Output Ultraviolet LED Wash Fixtures\n• Produces intense 395–405 nm blacklight glow on white & fluorescent items\n• Wide 120° beam angle covers extensive room or stage areas\n• Includes adjustable mounting brackets, power cords & on/off switch\n• Ideal for: Neon glow parties, Halloween events, concerts & retro celebrations", "/services/lighting", 50, "fixed", "Lighting"],
  ["uplighting-package", "Basic Uplighting Package", "Event Lighting", "• 8× Chauvet Freedom Par Battery-Powered Wireless LED Uplights\n• 1× Master wireless remote / controller for instant synchronized color changes\n• Full perimeter venue coverage with vibrant washes or warm candlelit amber\n• Complete charging road case with single-plug charging\n• Ideal for: Wedding receptions, corporate banquets & private event spaces", "/services/event-lighting", 275, "fixed", "Lighting package"],
  ["dance-party-lighting", "Dance Party Lighting Package", "Event Lighting", "• 1× ADJ Dotz T-Par System with 4 High-Output LED Wash Pars\n• 2× Sound-activated moving head / derby dance floor effect fixtures\n• 1× Heavy-duty lighting stand (extends to 11ft) + wireless foot controller\n• Dynamic sound-to-light programs pulse with the music beat\n• Ideal for: Mobile DJ dance floors, sweet sixteens, school dances & parties", "/services/event-lighting", 350, "starting", "Lighting package"],
  ["wedding-lighting", "Wedding Lighting Package", "Event Lighting", "• 8× Wireless Freedom Par uplights preset to custom wedding palette\n• 4× Magnetic pinspot lights to spotlight cake, sweetheart table & centerpieces\n• 1× Chauvet wireless controller for dinner-to-dancing lighting transitions\n• Includes: Delivery, positioning & discreet cable-free setup\n• Ideal for: Wedding ballrooms, rustic barns, historic estates & vineyard tents", "/services/event-lighting", 450, "starting", "Lighting package"],
  ["stage-lighting", "Stage Lighting Package", "Event Lighting", "• 2× Heavy-Duty Lighting Trees / T-Stands with 8× SlimPAR Stage Wash Lights\n• 1× Chauvet Obey 40 DMX Lighting Controller Console\n• Warm white front stage wash + dynamic multi-color backlighting\n• Complete 25ft/50ft DMX link cables & stage power distribution\n• Ideal for: Live band performances, theatrical stages, ceremonies & keynotes", "/services/event-lighting", 550, "starting", "Lighting package"],
  ["outdoor-lighting", "Outdoor Lighting Package", "Event Lighting", "• 8× IP65 Weatherproof Battery-Powered LED Wash & Architectural Fixtures\n• Rain, snow, and moisture-resistant for outdoor lawns, patios, and facades\n• High-lumen architectural color wash illuminates trees, building walls, & tents\n• Includes heavy-duty exterior power drops & waterproof cabling\n• Ideal for: Garden weddings, outdoor festivals, historic facades & patio events", "/services/event-lighting", 350, "starting", "Lighting package"],
  ["cold-spark-2", "Basic Sparkler Package", "Special Effects", "• 2× ColorKey Dazzler FX Non-Flammable Cold Spark Machines\n• 1× Handheld wireless remote control with timer & height adjustments\n• 2× Sealed pouches of indoor/outdoor titanium granules (up to 15ft sparks)\n• Safe, cool-to-touch sparks with zero smoke and zero pyro permit required\n• Ideal for: Grand wedding entrances, first dances, send-offs & private celebrations", "/services/cold-sparklers", 350, "starting", "Cold spark package"],
  ["cold-spark-4", "Premium Sparkler Package", "Special Effects", "• 4× ColorKey Dazzler FX Cold Spark Machines for symmetrical stage geysers\n• 1× DMX controller console or synchronized wireless multi-unit remote\n• 4× Granule refill pouches + linked DMX/powerCON safety cables\n• Includes: Delivery, positioning, safety test & optional on-site technician\n• Ideal for: Concert stages, wedding reception peaks, corporate launches & awards", "/services/cold-sparklers", 650, "starting", "Cold spark package"],
  ["cold-spark-ultimate", "Ultimate Sparkler Package", "Special Effects", "• 6× ColorKey Dazzler FX Cold Spark Machines in an expansive stage array\n• 1× Professional DMX lighting desk for choreographed musical cue firing\n• Multiple titanium granule refill cycles for rehearsals and live show triggers\n• Includes: On-site certified special effects technician & custom flight cases\n• Ideal for: Headline concerts, arena events, major sporting intros & festivals", "/services/cold-sparklers", 1100, "starting", "Cold spark package"],
  ["dry-ice-cloud", "Dry Ice Machine — Dancing on a Cloud", "Special Effects", "• 1× Chauvet DJ Nimbus Professional Commercial Dry Ice Fog Machine\n• Internal water heating element produces thick, low-lying cloud effect\n• 100% dry ice fog stays completely low to the floor without rising\n• Heavy-duty wheeled cart, flexible directional hose & dual power cords\n• Ideal for: “Dancing on a Cloud” wedding first dances, theatrical entrances & music videos", "/services/dry-ice-machine", 295, "starting", "Special effect"],
  ["stream-basic", "Live Streaming Basic Package", "Live Streaming", "• 1× Sony 4K Professional Broadcast Camera on fluid-head tripod\n• 1× Dedicated streaming workstation laptop with OBS / vMix software\n• 1× LiveMaster 4K multi-input video production switcher\n• 1× QSC TouchMix Digital Audio Mixer + Shure wireless microphone\n• Simultaneous HD live broadcast (YouTube, Zoom, Teams) + master recording\n• Ideal for: Remote webinars, hybrid town halls, panel interviews & virtual meetings", "/services/live-streaming", 621, "starting", "Streaming package"],
  ["stream-pro", "Live Streaming Pro Package", "Live Streaming", "• 3× Sony 4K Multi-Camera Production Rigs on heavy-duty fluid-head tripods\n• 1× LiveMaster Broadcast Video Switcher with hardware control surface\n• 1× QSC TouchMix-16 Digital Audio Mixer + dual Shure wireless mics\n• Dedicated live streaming & graphics playback workstation laptop\n• Includes: Broadcast SDI/HDMI cabling, audio sync delay & master recording\n• Ideal for: Major hybrid conferences, multi-speaker symposiums & live stage concerts", "/services/live-streaming", 1250, "starting", "Streaming package"],
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
    : id === "video-basic-package"
    ? "assets/beantown/basic-video-package.png"
    : id === "video-mid-package"
    ? "assets/beantown/mid-video-package.png"
    : id === "video-large-package"
    ? "assets/beantown/large-video-package.png"
    : id === "tv-75"
    ? "assets/beantown/samsung-75-tv.png"
    : id === "tv-65"
    ? "assets/beantown/samsung-65-tv.png"
    : id === "laser-projector"
    ? "assets/beantown/hd-projector.png"
    : id === "fastfold-screen"
    ? "assets/beantown/fastfold-screen.png"
    : id === "video-switcher"
    ? "assets/beantown/video-switcher.png"
    : id === "led-12"
    ? "assets/beantown/led-wall-12ft-package.png"
    : id === "led-16"
    ? "assets/beantown/led-wall-16ft-package.png"
    : id === "led-custom"
    ? "assets/beantown/led-wall-custom.png"
    : id === "led-trailer"
    ? "assets/beantown/outdoor-led-trailer.png"
    : id === "stream-basic"
    ? "assets/beantown/streaming-basic-package.png"
    : id === "stream-pro"
    ? "assets/beantown/streaming-pro-package.png"
    : id === "followspot"
    ? "assets/beantown/followspot.png"
    : id === "moving-heads"
    ? "assets/beantown/moving-heads.png"
    : id === "light-bar"
    ? "assets/beantown/led-light-bar.png"
    : id === "pinspot-pack"
    ? "assets/beantown/chauvet-ezpin-pack.png"
    : id === "uplights-6"
    ? "assets/beantown/chauvet-freedom-par-h9.png"
    : id === "blacklight-fixtures"
    ? "assets/beantown/blacklight-fixtures.png"
    : id === "uplighting-package"
    ? "assets/beantown/basic-uplighting-package.png"
    : id === "dance-party-lighting"
    ? "assets/beantown/dance-party-lighting.png"
    : id === "wedding-lighting"
    ? "assets/beantown/wedding-lighting.png"
    : id === "stage-lighting"
    ? "assets/beantown/stage-lighting.png"
    : id === "outdoor-lighting"
    ? "assets/beantown/outdoor-lighting.png"
    : id === "cold-spark-2"
    ? "assets/beantown/cold-spark-basic-package.png"
    : id === "cold-spark-4"
    ? "assets/beantown/cold-spark-premium-package.png"
    : id === "cold-spark-ultimate"
    ? "assets/beantown/cold-spark-ultimate-package.png"
    : id === "dry-ice-cloud"
    ? "assets/beantown/dry-ice-cloud.png"
    : id === "photo-ipad-mirror"
    ? "assets/beantown/photo-ipad-mirror.png"
    : id === "photo-magic-mirror"
    ? "assets/beantown/photo-magic-mirror.png"
    : id === "photo-frame"
    ? "assets/beantown/photo-frame.png"
    : id === "photo-360"
    ? "assets/beantown/photo-360.png"
    : undefined,
  tone: category === "Microphones" ? "coral" : category === "DJ Equipment" ? "sky" : category === "Event Lighting" ? "lavender" : category === "Photo Booths" ? "peach" : "lime",
}));
