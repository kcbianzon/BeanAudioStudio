const fs = require('fs');

const cssToAdd = `
/* ==========================================================================
   PHONE ALARM SCROLL PICKER (IMAGE 3 - VERTICAL DRUM ROLLER WHEEL)
   ========================================================================== */
.q-alarm-card-wrap {
  background: #000000;
  border-radius: 20px;
  padding: 18px 16px 14px;
  color: #ffffff;
  box-shadow: 0 16px 40px rgba(0, 0, 0, 0.45), 0 0 0 1px rgba(255, 255, 255, 0.08);
  display: flex;
  flex-direction: column;
  gap: 12px;
  width: 100%;
  max-width: 360px;
  margin: 6px auto 0;
  box-sizing: border-box;
  animation: qAlarmFadeIn 0.22s cubic-bezier(0.16, 1, 0.3, 1);
}

@keyframes qAlarmFadeIn {
  from { opacity: 0; transform: translateY(-8px) scale(0.98); }
  to { opacity: 1; transform: translateY(0) scale(1); }
}

.q-alarm-header-row {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 8px;
}

.q-alarm-target-tabs {
  display: flex;
  gap: 6px;
  background: #1c1c1e;
  padding: 3px;
  border-radius: 12px;
  flex: 1;
}

.q-alarm-target-tab {
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 6px 6px;
  border: none;
  background: transparent;
  color: #8e8e93;
  border-radius: 9px;
  cursor: pointer;
  transition: all 0.15s ease;
}

.q-alarm-target-tab.is-active {
  background: #2c2c2e;
  color: #ffffff;
}

.q-alarm-target-tab .q-tab-label {
  font-family: 'Space Grotesk', Inter, sans-serif;
  font-size: 10.5px;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.04em;
}

.q-alarm-target-tab .q-tab-time {
  font-family: 'Space Grotesk', monospace;
  font-size: 13px;
  font-weight: 700;
  color: inherit;
}

.q-alarm-target-tab.is-active .q-tab-time {
  color: #e5a93b;
}

.q-alarm-close-btn {
  width: 32px;
  height: 32px;
  border-radius: 50%;
  border: none;
  background: #1c1c1e;
  color: #8e8e93;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  font-size: 14px;
  transition: all 0.15s ease;
  flex-shrink: 0;
}

.q-alarm-close-btn:hover {
  background: #2c2c2e;
  color: #ffffff;
}

/* 3-Column Cylinder Drum Stage */
.q-alarm-drum-stage {
  position: relative;
  height: 220px;
  background: #000000;
  border-radius: 14px;
  overflow: hidden;
  user-select: none;
}

/* Center Selection Highlight Bar (iOS Alarm guidelines) */
.q-alarm-selection-window {
  position: absolute;
  top: 50%;
  left: 6px;
  right: 6px;
  transform: translateY(-50%);
  height: 44px;
  border-top: 1.5px solid rgba(255, 255, 255, 0.22);
  border-bottom: 1.5px solid rgba(255, 255, 255, 0.22);
  pointer-events: none;
  z-index: 2;
  border-radius: 4px;
  background: rgba(255, 255, 255, 0.04);
}

/* 3D Cylinder Fade Masks */
.q-alarm-drum-mask {
  position: absolute;
  left: 0;
  right: 0;
  height: 72px;
  pointer-events: none;
  z-index: 3;
}

.q-alarm-drum-mask.mask-top {
  top: 0;
  background: linear-gradient(to bottom, #000000 12%, rgba(0, 0, 0, 0.8) 55%, transparent 100%);
}

.q-alarm-drum-mask.mask-bottom {
  bottom: 0;
  background: linear-gradient(to top, #000000 12%, rgba(0, 0, 0, 0.8) 55%, transparent 100%);
}

.q-alarm-drum-columns {
  display: grid;
  grid-template-columns: 1fr 1fr 0.9fr;
  height: 100%;
  position: relative;
  z-index: 1;
}

.q-alarm-drum-col {
  height: 100%;
  overflow-y: scroll;
  scroll-snap-type: y mandatory;
  scrollbar-width: none;
  -ms-overflow-style: none;
  text-align: center;
  cursor: grab;
}

.q-alarm-drum-col:active {
  cursor: grabbing;
}

.q-alarm-drum-col::-webkit-scrollbar {
  display: none;
}

.q-alarm-spacer {
  height: 88px; /* (220 - 44) / 2 */
  flex-shrink: 0;
}

.q-drum-item {
  height: 44px;
  display: flex;
  align-items: center;
  justify-content: center;
  scroll-snap-align: center;
  font-family: -apple-system, BlinkMacSystemFont, 'SF Pro Display', 'Space Grotesk', sans-serif;
  font-size: 20px;
  font-weight: 500;
  color: rgba(255, 255, 255, 0.25);
  cursor: pointer;
  transition: color 0.12s ease, transform 0.12s ease, font-size 0.12s ease;
}

.q-drum-item.is-near-2 {
  color: rgba(255, 255, 255, 0.22);
  font-size: 20px;
}

.q-drum-item.is-near-1 {
  color: rgba(255, 255, 255, 0.55);
  font-size: 24px;
}

.q-drum-item.is-selected {
  color: #ffffff;
  font-size: 32px;
  font-weight: 700;
  transform: scale(1.04);
}

.q-alarm-foot-actions {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 10px;
  padding-top: 2px;
}

.q-alarm-live-readout {
  font-family: 'Space Grotesk', monospace;
  font-size: 14px;
  font-weight: 700;
  color: #ffffff;
  display: flex;
  align-items: center;
  gap: 5px;
}

.q-alarm-live-readout small {
  font-family: Inter, sans-serif;
  font-size: 11px;
  color: #8e8e93;
  font-weight: 500;
}

.q-alarm-btn-apply {
  background: #ffffff;
  color: #000000;
  border: none;
  border-radius: 9px;
  padding: 9px 16px;
  font-family: 'Space Grotesk', Inter, sans-serif;
  font-size: 12.5px;
  font-weight: 700;
  cursor: pointer;
  transition: all 0.15s ease;
}

.q-alarm-btn-apply:hover {
  background: #e5a93b;
  color: #000000;
}

.q-alarm-btn-done {
  background: #2c2c2e;
  color: #ffffff;
  border: none;
  border-radius: 9px;
  padding: 9px 14px;
  font-family: 'Space Grotesk', Inter, sans-serif;
  font-size: 12.5px;
  font-weight: 600;
  cursor: pointer;
}

.q-alarm-btn-done:hover {
  background: #3a3a3c;
}

/* Collapsed Clock View Additions (Image 1) */
.q-ampm-stacked {
  display: flex;
  flex-direction: column;
  justify-content: center;
  line-height: 1;
  gap: 2px;
  margin-left: 6px;
}

.q-ampm-text {
  font-family: 'Space Grotesk', Inter, sans-serif;
  font-size: 10px;
  font-weight: 700;
  color: #a09d94;
  letter-spacing: 0.04em;
}

.q-ampm-text.is-active {
  color: #1e1e1e;
  font-weight: 900;
}

.q-clock-expand-pill {
  display: inline-flex;
  align-items: center;
  gap: 5px;
  border: 1px solid #dcd8d0;
  background: #ffffff;
  color: #444444;
  font-family: 'Space Grotesk', Inter, sans-serif;
  font-size: 11px;
  font-weight: 600;
  padding: 5px 10px;
  border-radius: 20px;
  cursor: pointer;
  margin-top: 6px;
  transition: all 0.15s ease;
}

.q-clock-expand-pill:hover {
  background: #f0eee8;
  border-color: #1e1e1e;
  color: #000000;
}

/* ==========================================================================
   MOBILE & IPHONE 320PX RESPONSIVE PERFECTION ACROSS ALL PAGES
   ========================================================================== */
@media (max-width: 480px) {
  html, body {
    max-width: 100vw;
    overflow-x: hidden;
  }

  .nav-wrap {
    width: calc(100% - 16px);
    padding: 8px 12px;
  }

  .brand-logo {
    height: 30px;
  }

  .brand-copy strong {
    font-size: 13px;
  }

  .hero {
    padding-top: 60px;
  }

  .hero-copy h1 {
    font-size: clamp(26px, 8vw, 38px);
    line-height: 1.08;
    word-break: break-word;
  }

  .hero-actions {
    flex-direction: column;
    gap: 10px;
    width: 100%;
  }

  .hero-actions .btn {
    width: 100%;
    text-align: center;
    justify-content: center;
  }

  .rentals-toolbar {
    padding: 10px 8px;
    top: 60px;
  }

  .rentals-toolbar .inline-search {
    width: 100%;
  }

  .product-grid {
    grid-template-columns: 1fr;
    gap: 14px;
  }

  .bundle-grid {
    grid-template-columns: 1fr;
    gap: 16px;
  }

  /* Quote page */
  .quote-page {
    padding-top: 48px;
    gap: 20px;
  }

  .q-step-panel {
    padding: 18px 12px;
    border-radius: 20px;
  }

  .q-step-head h2 {
    font-size: 21px;
    line-height: 1.25;
  }

  .q-schedule-card {
    padding: 16px 10px;
    border-radius: 18px;
    gap: 20px;
  }

  .q-cal-pill-header {
    padding: 4px 10px;
  }

  .q-cal-month-title {
    font-size: 13.5px;
  }

  .q-cal-days-grid {
    row-gap: 3px;
  }

  .q-new-cal-cell {
    height: 36px;
    font-size: 12.5px;
  }

  .q-venue-location-wrap {
    grid-template-columns: 1fr;
    gap: 18px;
  }

  .q-venue-search-wrap {
    flex-direction: column;
    gap: 8px;
  }

  .q-venue-search-input {
    width: 100%;
  }

  .q-venue-btn-dark {
    width: 100%;
    text-align: center;
    justify-content: center;
  }

  .q-manual-grid-3 {
    grid-template-columns: 1fr;
    gap: 10px;
  }

  .q-venue-map-preview {
    height: 200px;
    min-height: 200px;
  }

  .q-foot-actions {
    gap: 10px;
  }

  .q-foot-actions .btn {
    min-width: 90px;
    padding: 12px 18px;
  }

  .cart-drawer {
    width: 100vw;
    max-width: 100vw;
    border-radius: 0;
  }

  .cart-drawer-head {
    padding: 18px 14px 12px;
  }

  .cart-drawer-body {
    padding: 14px 14px;
  }

  .cart-drawer-footer {
    padding: 14px 14px 20px;
  }
}

/* Dedicated iPhone 320px ultra-compact adjustments */
@media (max-width: 360px) {
  .nav-wrap {
    width: calc(100% - 8px);
    padding: 6px 8px;
  }

  .brand-copy small {
    display: none;
  }

  .brand-copy strong {
    font-size: 11.5px;
  }

  .brand-logo {
    height: 24px;
  }

  .call-pill {
    padding: 5px 8px;
    font-size: 11px;
  }

  .page {
    padding-left: 6px !important;
    padding-right: 6px !important;
  }

  .q-step-panel {
    padding: 14px 6px;
    border-radius: 14px;
  }

  .q-step-head h2 {
    font-size: 18.5px;
  }

  .q-step-head p {
    font-size: 12px;
  }

  .q-schedule-card {
    padding: 12px 4px;
    border-radius: 14px;
    gap: 14px;
  }

  .q-cal-weekdays-row {
    font-size: 9.5px;
  }

  .q-cal-days-grid {
    row-gap: 2px;
  }

  .q-new-cal-cell {
    height: 33px;
    font-size: 11px;
  }

  .q-new-cal-cell .q-cell-text {
    width: 29px;
    height: 29px;
    font-size: 11px;
  }

  .q-schedule-pill-box {
    flex-wrap: wrap;
    gap: 4px;
    padding: 4px 6px;
  }

  .q-schedule-date-input {
    width: 105px;
    font-size: 12px;
  }

  .q-schedule-time-badge {
    font-size: 11px;
    padding: 5px 8px;
  }

  .q-time-picker-block {
    flex-direction: column;
    align-items: center;
    gap: 12px;
  }

  .q-analog-clock-wrap {
    width: 105px;
    height: 105px;
  }

  .q-digital-time-val {
    font-size: 26px;
    width: 95px;
  }

  .q-alarm-card-wrap {
    max-width: 100%;
    padding: 14px 6px 12px;
    border-radius: 14px;
  }

  .q-alarm-target-tab .q-tab-label {
    font-size: 9px;
  }

  .q-alarm-target-tab .q-tab-time {
    font-size: 11.5px;
  }

  .q-drum-item.is-selected {
    font-size: 26px;
  }

  .q-drum-item.is-near-1 {
    font-size: 20px;
  }

  .q-drum-item.is-near-2 {
    font-size: 15px;
  }

  .q-alarm-foot-actions {
    flex-direction: column;
    gap: 8px;
    width: 100%;
  }

  .q-alarm-btn-apply,
  .q-alarm-btn-done {
    width: 100%;
    text-align: center;
  }

  .q-clean-big-input {
    font-size: 13.5px;
    padding: 10px 10px;
  }

  .footer {
    padding: 26px 10px 18px;
    border-radius: 18px 18px 0 0;
  }
}
`;

function appendCss(filePath) {
  let content = fs.readFileSync(filePath, 'utf8');
  content += '\n' + cssToAdd + '\n';
  fs.writeFileSync(filePath, content, 'utf8');
  console.log('Appended CSS to ' + filePath);
}

appendCss('public/styles.css');
appendCss('styles.css');
