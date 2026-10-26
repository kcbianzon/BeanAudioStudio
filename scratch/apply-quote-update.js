const fs = require('fs');

function applyToScript(filePath) {
  let content = fs.readFileSync(filePath, 'utf8');

  // 1. Ensure timePickerExpanded is in initial state
  if (!content.includes('timePickerExpanded:')) {
    content = content.replace(
      'pickingRangeEnd: false,',
      'pickingRangeEnd: false,\n    timePickerExpanded: false,'
    );
  }

  // 2. Replace lines from renderDateAndLocationStep up to renderEquipmentStep
  const startMarker = 'function renderDateAndLocationStep() {';
  const endMarker = 'function renderEquipmentStep(totals) {';

  const startIndex = content.indexOf(startMarker);
  const endIndex = content.indexOf(endMarker);

  if (startIndex === -1 || endIndex === -1) {
    throw new Error('Could not find markers in ' + filePath);
  }

  const newRenderFunction = `function renderDateAndLocationStep() {
  const monthNames = [
    "January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December",
  ];
  const year = state.calendarYear || 2026;
  const month = state.calendarMonth !== undefined ? state.calendarMonth : 9;
  const monthName = \`\${monthNames[month]} \${year}\`;

  const firstDay = new Date(year, month, 1).getDay();
  const daysInMonth = new Date(year, month + 1, 0).getDate();

  const cells = [];
  for (let i = 0; i < firstDay; i += 1) {
    cells.push('<span class="q-new-cal-cell is-empty" aria-hidden="true"></span>');
  }
  for (let d = 1; d <= daysInMonth; d += 1) {
    const iso = \`\${year}-\${String(month + 1).padStart(2, "0")}-\${String(d).padStart(2, "0")}\`;
    const isStart = state.startDate === iso;
    const isEnd = state.endDate === iso;
    const isSingle = isStart && isEnd;
    const inRange = Boolean(
      state.startDate &&
      state.endDate &&
      iso > state.startDate &&
      iso < state.endDate
    );

    let cellClass = "q-new-cal-cell";
    if (isSingle) {
      cellClass += " is-range-single";
    } else if (isStart) {
      cellClass += " is-range-start";
    } else if (isEnd) {
      cellClass += " is-range-end";
    } else if (inRange) {
      cellClass += " is-in-range";
    }

    cells.push(
      \`<button type="button" class="\${cellClass}" data-cal-date="\${iso}">
        <span class="q-cell-text">\${d}</span>
      </button>\`
    );
  }

  // Active time target parsing & formatting
  const activeTarget = state.activeTimeTarget || "start";
  const targetCurrentTime = activeTarget === "start" ? state.startTime : state.endTime;
  const parsedTarget = parseTimeString(targetCurrentTime);
  const curHour = parsedTarget ? parsedTarget.hour : (state.selectedHour || (activeTarget === "start" ? 10 : 10));
  const curMin = parsedTarget ? parsedTarget.minute : (state.selectedMinute || "00");
  const curAmpm = parsedTarget ? parsedTarget.ampm : (state.selectedAmpm || (activeTarget === "start" ? "AM" : "PM"));

  // Keep state synchronized
  state.selectedHour = curHour;
  state.selectedMinute = curMin;
  state.selectedAmpm = curAmpm;

  const handAngle = (curHour % 12) * 30;
  const digitalTimeDisplay = \`\${String(curHour).padStart(2, "0")}:\${curMin}\`;

  // Clock numbers SVG
  const clockNumbersSvg = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]
    .map((h) => {
      const angleRad = ((h * 30 - 90) * Math.PI) / 180;
      const r = 43;
      const x = (65 + r * Math.cos(angleRad)).toFixed(1);
      const y = (65 + r * Math.sin(angleRad) + 4).toFixed(1);
      const isSelected = curHour === h;
      return \`<text
        x="\${x}"
        y="\${y}"
        text-anchor="middle"
        class="q-clock-num \${isSelected ? "is-active-hour" : ""}"
        data-clock-hour="\${h}"
      >\${h}</text>\`;
    })
    .join("");

  const hoursList = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
  const minutesList = Array.from({ length: 60 }, (_, i) => String(i).padStart(2, "0"));

  const { lat, lon } = state.locationCoords || { lat: 42.3601, lon: -71.0589 };
  const bbox = \`\${(lon - 0.02).toFixed(4)}%2C\${(lat - 0.012).toFixed(4)}%2C\${(lon + 0.02).toFixed(4)}%2C\${(lat + 0.012).toFixed(4)}\`;
  const osmUrl = \`https://www.openstreetmap.org/export/embed.html?bbox=\${bbox}&layer=mapnik&marker=\${lat.toFixed(5)}%2C\${lon.toFixed(5)}\`;

  return \`<div class="q-step-panel">
    <div class="q-step-head">
      <h2>When &amp; where is your event taking place?</h2>
      <p>Select your target event date and delivery venue across Boston and New England.</p>
    </div>
    <div class="q-step-head-divider"></div>

    <!-- Date & Schedule (Images 1 & 2) -->
    <div class="q-clean-section">
      <h3 class="q-clean-section-title">Date &amp; Schedule</h3>

      <div class="q-schedule-card">
        <!-- Left: Calendar with connected range selection -->
        <div class="q-schedule-cal-col">
          <div class="q-cal-pill-header">
            <button type="button" class="q-cal-circle-btn" data-cal-prev aria-label="Previous month">‹</button>
            <span class="q-cal-month-title">\${monthName}</span>
            <button type="button" class="q-cal-circle-btn" data-cal-next aria-label="Next month">›</button>
          </div>

          <div class="q-cal-weekdays-row">
            <span>SUN</span><span>MON</span><span>TUE</span><span>WED</span><span>THU</span><span>FRI</span><span>SAT</span>
          </div>

          <div class="q-cal-days-grid">
            \${cells.join("")}
          </div>
        </div>

        <!-- Right: Start Date / End Date and Expandable Phone Alarm Scroll Picker -->
        <div class="q-schedule-controls-col">
          <!-- Start Date -->
          <div class="q-schedule-field-group">
            <label class="q-schedule-input-label" for="quoteStartDateInput">Start Date *</label>
            <div class="q-schedule-pill-box">
              <input
                type="text"
                id="quoteStartDateInput"
                class="q-schedule-date-input"
                value="\${escapeHtml(state.startDate || '')}"
                placeholder="YYYY-MM-DD"
                autocomplete="off"
              />
              <button
                type="button"
                class="q-schedule-time-badge \${state.activeTimeTarget === 'start' ? 'is-active' : ''}"
                data-target-time="start"
                title="Click to adjust time"
              >
                \${escapeHtml(state.startTime && state.startTime !== 'Start Time' ? state.startTime : '10:00 AM')}
              </button>
            </div>
          </div>

          <!-- End Date -->
          <div class="q-schedule-field-group">
            <label class="q-schedule-input-label" for="quoteEndDateInput">End Date *</label>
            <div class="q-schedule-pill-box">
              <input
                type="text"
                id="quoteEndDateInput"
                class="q-schedule-date-input"
                value="\${escapeHtml(state.endDate || '')}"
                placeholder="YYYY-MM-DD"
                autocomplete="off"
              />
              <button
                type="button"
                class="q-schedule-time-badge \${state.activeTimeTarget === 'end' ? 'is-active' : ''}"
                data-target-time="end"
                title="Click to adjust time"
              >
                \${escapeHtml(state.endTime && state.endTime !== 'End Time' ? state.endTime : '10:00 PM')}
              </button>
            </div>
          </div>

          \${state.timePickerExpanded ? \`
            <!-- EXPANDED: Phone Alarm Drum Roller Picker (Picture 3) -->
            <div class="q-alarm-card-wrap" role="region" aria-label="Set time like phone alarm scroll">
              <div class="q-alarm-header-row">
                <div class="q-alarm-target-tabs">
                  <button type="button" class="q-alarm-target-tab \${state.activeTimeTarget === 'start' ? 'is-active' : ''}" data-set-time-target="start">
                    <span class="q-tab-label">Start Time</span>
                    <strong class="q-tab-time">\${escapeHtml(state.startTime && state.startTime !== 'Start Time' ? state.startTime : '10:00 AM')}</strong>
                  </button>
                  <button type="button" class="q-alarm-target-tab \${state.activeTimeTarget === 'end' ? 'is-active' : ''}" data-set-time-target="end">
                    <span class="q-tab-label">End Time</span>
                    <strong class="q-tab-time">\${escapeHtml(state.endTime && state.endTime !== 'End Time' ? state.endTime : '10:00 PM')}</strong>
                  </button>
                </div>
                <button type="button" class="q-alarm-close-btn" data-close-alarm-picker aria-label="Close alarm time picker" title="Close">✕</button>
              </div>

              <!-- 3-Column Roller Drum -->
              <div class="q-alarm-drum-stage">
                <div class="q-alarm-selection-window" aria-hidden="true"></div>
                <div class="q-alarm-drum-mask mask-top" aria-hidden="true"></div>
                <div class="q-alarm-drum-mask mask-bottom" aria-hidden="true"></div>

                <div class="q-alarm-drum-columns">
                  <!-- Hours Column (1 - 12) -->
                  <div class="q-alarm-drum-col" data-drum-column="hour" tabindex="0" role="listbox" aria-label="Hours">
                    <div class="q-alarm-spacer" aria-hidden="true"></div>
                    \${hoursList.map((h) => \`
                      <div class="q-drum-item \${h === curHour ? 'is-selected' : ''}" data-val="\${h}">
                        <span>\${h}</span>
                      </div>
                    \`).join('')}
                    <div class="q-alarm-spacer" aria-hidden="true"></div>
                  </div>

                  <!-- Minutes Column (00 - 59) -->
                  <div class="q-alarm-drum-col" data-drum-column="minute" tabindex="0" role="listbox" aria-label="Minutes">
                    <div class="q-alarm-spacer" aria-hidden="true"></div>
                    \${minutesList.map((m) => \`
                      <div class="q-drum-item \${m === curMin ? 'is-selected' : ''}" data-val="\${m}">
                        <span>\${m}</span>
                      </div>
                    \`).join('')}
                    <div class="q-alarm-spacer" aria-hidden="true"></div>
                  </div>

                  <!-- AM / PM Column -->
                  <div class="q-alarm-drum-col drum-ampm" data-drum-column="ampm" tabindex="0" role="listbox" aria-label="Period">
                    <div class="q-alarm-spacer" aria-hidden="true"></div>
                    \${['AM', 'PM'].map((p) => \`
                      <div class="q-drum-item \${p === curAmpm ? 'is-selected' : ''}" data-val="\${p}">
                        <span>\${p}</span>
                      </div>
                    \`).join('')}
                    <div class="q-alarm-spacer" aria-hidden="true"></div>
                  </div>
                </div>
              </div>

              <!-- Bottom Actions -->
              <div class="q-alarm-foot-actions">
                <div class="q-alarm-live-readout">
                  <small>\${state.activeTimeTarget === 'start' ? 'Start:' : 'End:'}</small>
                  <strong id="quoteAlarmLivePreview">\${String(curHour).padStart(2, '0')}:\${curMin} \${curAmpm}</strong>
                </div>
                <div style="display:flex;gap:8px">
                  <button type="button" class="q-alarm-btn-apply" id="quoteAlarmApplyBtn">
                    Apply \${state.activeTimeTarget === 'start' ? 'Start Time' : 'End Time'}
                  </button>
                  <button type="button" class="q-alarm-btn-done" data-close-alarm-picker>
                    Done
                  </button>
                </div>
              </div>
            </div>
          \` : \`
            <!-- COLLAPSED: Clock Face & Digital Display (Image 1) -->
            <div class="q-time-picker-block" title="Click clock to expand phone alarm scroll time picker">
              <div class="q-analog-clock-wrap" role="button" tabindex="0" aria-label="Analog clock - click to expand phone alarm scroll picker">
                <svg viewBox="0 0 130 130" class="q-analog-clock-svg" aria-label="Clock face">
                  <circle cx="65" cy="65" r="60" fill="#f0efea" />
                  \${clockNumbersSvg}
                  <circle cx="65" cy="65" r="3.5" fill="#1e1e1e" />
                  <line
                    x1="65"
                    y1="65"
                    x2="65"
                    y2="30"
                    stroke="#1e1e1e"
                    stroke-width="2.5"
                    stroke-linecap="round"
                    transform="rotate(\${handAngle} 65 65)"
                  />
                  <circle
                    cx="65"
                    cy="30"
                    r="7"
                    fill="rgba(30, 30, 30, 0.15)"
                    transform="rotate(\${handAngle} 65 65)"
                  />
                </svg>
              </div>

              <div class="q-digital-clock-side">
                <div class="q-digital-time-readout">
                  <span class="q-digital-time-val">\${digitalTimeDisplay}</span>
                  <div class="q-ampm-stacked">
                    <span class="q-ampm-text \${curAmpm === 'AM' ? 'is-active' : ''}">AM</span>
                    <span class="q-ampm-text \${curAmpm === 'PM' ? 'is-active' : ''}">PM</span>
                  </div>
                </div>
                <button type="button" class="q-clock-apply-btn" id="quoteApplyTimeBtn">Apply</button>
                <button type="button" class="q-clock-expand-pill" data-open-alarm-picker>
                  <svg viewBox="0 0 24 24" width="12" height="12" fill="none" stroke="currentColor" stroke-width="2.2"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>
                  Set Alarm Roller ▾
                </button>
              </div>
            </div>
          \`}
        </div>
      </div>
    </div>

    <!-- Divider -->
    <div class="q-combined-step-divider"></div>

    <!-- Venue & Delivery Location (Images 1 & 2) -->
    <div class="q-clean-section">
      <h3 class="q-clean-section-title">Venue &amp; Delivery Location</h3>

      <div class="q-venue-location-wrap">
        \${!state.manualLocationMode ? \`
          <!-- Version 1: Live search map (Image 1) -->
          <div class="q-venue-left-col">
            <label class="q-venue-field-label" for="quoteLocationSearch">Search Venue or Adress</label>
            <div class="q-venue-search-wrap">
              <input
                type="text"
                id="quoteLocationSearch"
                class="q-venue-search-input"
                placeholder=""
                value="\${escapeHtml(state.locationQuery || state.eventLocation)}"
              />
              <button type="button" class="q-venue-btn-dark" id="quoteLocationSearchBtn">
                \${state.locationSearching ? "Searching…" : "Find Venue"}
              </button>
            </div>

            \${state.locationResults && state.locationResults.length ? \`
              <div class="q-location-results" role="listbox">
                \${state.locationResults.map((res, idx) => \`
                  <button type="button" class="q-loc-result-item" data-loc-index="\${idx}">
                    <span class="q-loc-pin">📍</span>
                    <span>\${escapeHtml(res.display_name)}</span>
                  </button>
                \`).join("")}
              </div>
            \` : ""}

            <div class="q-venue-toggle-row">
              <button type="button" class="q-venue-btn-dark" data-toggle-manual-location>Enter Address Manually</button>
            </div>
          </div>
        \` : \`
          <!-- Version 2: Enter address manually (Image 2) -->
          <div class="q-venue-left-col">
            <div class="q-manual-field">
              <label class="q-venue-label" for="manualStreetInput">Venue Name / Street Address</label>
              <input
                type="text"
                id="manualStreetInput"
                class="q-manual-input full"
                placeholder=""
                value="\${escapeHtml(state.manualStreet)}"
              />
            </div>

            <div class="q-manual-grid-3">
              <div class="q-manual-field">
                <label class="q-venue-label" for="manualCityInput">City / Town</label>
                <input
                  type="text"
                  id="manualCityInput"
                  class="q-manual-input"
                  placeholder=""
                  value="\${escapeHtml(state.manualCity)}"
                />
              </div>
              <div class="q-manual-field">
                <label class="q-venue-label" for="manualStateInput">State</label>
                <input
                  type="text"
                  id="manualStateInput"
                  class="q-manual-input"
                  placeholder=""
                  value="\${escapeHtml(state.manualState)}"
                />
              </div>
              <div class="q-manual-field">
                <label class="q-venue-label" for="manualZipInput">Zip</label>
                <input
                  type="text"
                  id="manualZipInput"
                  class="q-manual-input"
                  placeholder=""
                  value="\${escapeHtml(state.manualZip)}"
                />
              </div>
            </div>

            <div class="q-venue-toggle-row">
              <button type="button" class="q-venue-btn-dark" data-toggle-manual-location>Back to live map search</button>
            </div>
          </div>
        \`}

        <!-- Right: Map Preview -->
        <div class="q-venue-right-col">
          <div class="q-venue-map-preview">
            <iframe
              title="Event Venue Map Preview"
              src="\${osmUrl}"
              loading="lazy"
              referrerpolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </div>
    </div>
  </div>\`;
}

`;

  content = content.slice(0, startIndex) + newRenderFunction + content.slice(endIndex);

  // 3. Update the event listeners in bind()
  // Replace the old clock and apply handlers with initAlarmDrumWheels and modern handlers
  const oldClockBindingStart = 'document.querySelectorAll("[data-target-time]").forEach((btn)';
  const oldClockBindingEnd = 'document.querySelector("#quoteDateFlexible")?.addEventListener("change"';

  const clockStartIndex = content.indexOf(oldClockBindingStart);
  const clockEndIndex = content.indexOf(oldClockBindingEnd);

  if (clockStartIndex === -1 || clockEndIndex === -1) {
    throw new Error('Could not find clock binding markers in ' + filePath);
  }

  const newClockBinding = `// Initialize Phone Alarm Drum Roller Wheels (Picture 3)
  function initAlarmDrumWheels() {
    const hourCol = document.querySelector('[data-drum-column="hour"]');
    const minCol = document.querySelector('[data-drum-column="minute"]');
    const ampmCol = document.querySelector('[data-drum-column="ampm"]');
    if (!hourCol || !minCol || !ampmCol) return;

    const itemHeight = 44;
    const curHour = state.selectedHour || 10;
    const curMin = parseInt(state.selectedMinute || "00", 10);
    const curAmpm = state.selectedAmpm || "AM";

    // Position drums immediately without animation on open
    hourCol.scrollTop = (curHour - 1) * itemHeight;
    minCol.scrollTop = curMin * itemHeight;
    ampmCol.scrollTop = (curAmpm === "PM" ? 1 : 0) * itemHeight;

    function updateColumnVisuals(col, selectedIdx) {
      const items = col.querySelectorAll('.q-drum-item');
      items.forEach((item, idx) => {
        const dist = Math.abs(idx - selectedIdx);
        item.classList.toggle('is-selected', dist === 0);
        item.classList.toggle('is-near-1', dist === 1);
        item.classList.toggle('is-near-2', dist === 2);
      });
    }

    function updateLivePreview() {
      const hr = String(state.selectedHour || 10).padStart(2, "0");
      const mn = String(state.selectedMinute || "00").padStart(2, "0");
      const ap = state.selectedAmpm || "AM";
      const formatted = \`\${hr}:\${mn} \${ap}\`;
      const previewEl = document.querySelector('#quoteAlarmLivePreview');
      if (previewEl) previewEl.textContent = formatted;

      if (state.activeTimeTarget === "start") {
        const badge = document.querySelector('[data-target-time="start"]');
        if (badge) badge.textContent = formatted;
        const tabTime = document.querySelector('[data-set-time-target="start"] .q-tab-time');
        if (tabTime) tabTime.textContent = formatted;
      } else {
        const badge = document.querySelector('[data-target-time="end"]');
        if (badge) badge.textContent = formatted;
        const tabTime = document.querySelector('[data-set-time-target="end"] .q-tab-time');
        if (tabTime) tabTime.textContent = formatted;
      }
    }

    const setupColScroll = (col, type) => {
      let ticking = false;
      col.addEventListener('scroll', () => {
        if (!ticking) {
          requestAnimationFrame(() => {
            const idx = Math.round(col.scrollTop / itemHeight);
            updateColumnVisuals(col, idx);
            if (type === 'hour') {
              state.selectedHour = Math.min(12, Math.max(1, idx + 1));
            } else if (type === 'minute') {
              state.selectedMinute = String(Math.min(59, Math.max(0, idx))).padStart(2, "0");
            } else if (type === 'ampm') {
              state.selectedAmpm = idx >= 1 ? "PM" : "AM";
            }
            updateLivePreview();
            ticking = false;
          });
          ticking = true;
        }
      }, { passive: true });

      // Click to scroll into view
      col.querySelectorAll('.q-drum-item').forEach((item, idx) => {
        item.addEventListener('click', (e) => {
          e.stopPropagation();
          col.scrollTo({ top: idx * itemHeight, behavior: 'smooth' });
        });
      });

      // Mouse drag simulation on desktop
      let isDown = false;
      let startY = 0;
      let startScroll = 0;
      col.addEventListener('mousedown', (e) => {
        isDown = true;
        startY = e.pageY;
        startScroll = col.scrollTop;
        col.style.cursor = 'grabbing';
      });
      window.addEventListener('mousemove', (e) => {
        if (!isDown) return;
        const walk = (e.pageY - startY) * 1.3;
        col.scrollTop = startScroll - walk;
      });
      window.addEventListener('mouseup', () => {
        if (!isDown) return;
        isDown = false;
        col.style.cursor = '';
        const snapIdx = Math.round(col.scrollTop / itemHeight);
        col.scrollTo({ top: snapIdx * itemHeight, behavior: 'smooth' });
      });
    };

    setupColScroll(hourCol, 'hour');
    setupColScroll(minCol, 'minute');
    setupColScroll(ampmCol, 'ampm');

    updateColumnVisuals(hourCol, curHour - 1);
    updateColumnVisuals(minCol, curMin);
    updateColumnVisuals(ampmCol, curAmpm === "PM" ? 1 : 0);
    updateLivePreview();
  }

  // Initialize drums if visible
  if (state.timePickerExpanded) {
    setTimeout(initAlarmDrumWheels, 10);
  }

  // Time Target Switcher in Start/End Date Badges
  document.querySelectorAll("[data-target-time]").forEach((btn) =>
    btn.addEventListener("click", () => {
      const target = btn.dataset.targetTime;
      state.activeTimeTarget = target;
      const existing = target === "start" ? state.startTime : state.endTime;
      const parsed = parseTimeString(existing);
      if (parsed) {
        state.selectedHour = parsed.hour;
        state.selectedMinute = parsed.minute;
        state.selectedAmpm = parsed.ampm;
      }
      state.timePickerExpanded = true;
      render({ preserveScroll: true });
    })
  );

  // Switch time target in expanded alarm tabs
  document.querySelectorAll("[data-set-time-target]").forEach((btn) =>
    btn.addEventListener("click", () => {
      const target = btn.dataset.setTimeTarget;
      state.activeTimeTarget = target;
      const existing = target === "start" ? state.startTime : state.endTime;
      const parsed = parseTimeString(existing);
      if (parsed) {
        state.selectedHour = parsed.hour;
        state.selectedMinute = parsed.minute;
        state.selectedAmpm = parsed.ampm;
      } else {
        if (target === "start") {
          state.selectedHour = 10;
          state.selectedMinute = "00";
          state.selectedAmpm = "AM";
        } else {
          state.selectedHour = 10;
          state.selectedMinute = "00";
          state.selectedAmpm = "PM";
        }
      }
      render({ preserveScroll: true });
    })
  );

  // Expand Alarm Roller from Clock or Button
  document.querySelector(".q-analog-clock-wrap")?.addEventListener("click", () => {
    state.timePickerExpanded = true;
    render({ preserveScroll: true });
  });
  document.querySelector(".q-digital-clock-side")?.addEventListener("click", (e) => {
    if (e.target.id === "quoteApplyTimeBtn") return;
    state.timePickerExpanded = true;
    render({ preserveScroll: true });
  });
  document.querySelectorAll("[data-open-alarm-picker]").forEach((btn) =>
    btn.addEventListener("click", (e) => {
      e.stopPropagation();
      state.timePickerExpanded = true;
      render({ preserveScroll: true });
    })
  );

  // Close Alarm Roller
  document.querySelectorAll("[data-close-alarm-picker]").forEach((btn) =>
    btn.addEventListener("click", (e) => {
      e.stopPropagation();
      state.timePickerExpanded = false;
      render({ preserveScroll: true });
    })
  );

  // Expanded Alarm Apply Button
  document.querySelector("#quoteAlarmApplyBtn")?.addEventListener("click", () => {
    const hr = String(state.selectedHour || 10).padStart(2, "0");
    const min = String(state.selectedMinute || "00").padStart(2, "0");
    const ampm = state.selectedAmpm || "AM";
    const formatted = \`\${hr}:\${min} \${ampm}\`;

    if (state.activeTimeTarget === "start") {
      state.startTime = formatted;
      if (!state.endTime || state.endTime === "End Time" || state.endTime === "10:00 PM") {
        state.activeTimeTarget = "end";
        state.selectedHour = 10;
        state.selectedMinute = "00";
        state.selectedAmpm = "PM";
        showToast(\`Start Time set: \${formatted}. Now set End Time.\`);
        render({ preserveScroll: true });
        return;
      } else {
        showToast(\`Start Time set: \${formatted}\`);
        state.timePickerExpanded = false;
      }
    } else {
      state.endTime = formatted;
      showToast(\`End Time set: \${formatted}\`);
      state.timePickerExpanded = false;
    }
    render({ preserveScroll: true });
  });

  // Collapsed Clock Face: Click Numbers 1 to 12
  document.querySelectorAll("[data-clock-hour]").forEach((el) =>
    el.addEventListener("click", (e) => {
      e.stopPropagation();
      const h = parseInt(el.dataset.clockHour, 10);
      if (!isNaN(h)) {
        state.selectedHour = h;
        render({ preserveScroll: true });
      }
    })
  );

  // Collapsed Clock Face: Click anywhere on Clock Face to calculate hour from angle
  document.querySelector(".q-analog-clock-svg")?.addEventListener("click", (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const scaleX = 130 / rect.width;
    const scaleY = 130 / rect.height;
    const dx = (x * scaleX) - 65;
    const dy = (y * scaleY) - 65;
    const dist = Math.sqrt(dx * dx + dy * dy);
    if (dist < 10) return;
    let angleDeg = (Math.atan2(dy, dx) * 180 / Math.PI) + 90;
    if (angleDeg < 0) angleDeg += 360;
    let hour = Math.round(angleDeg / 30);
    if (hour === 0) hour = 12;
    state.selectedHour = hour;
    render({ preserveScroll: true });
  });

  // Collapsed View Apply Button
  document.querySelector("#quoteApplyTimeBtn")?.addEventListener("click", (e) => {
    e.stopPropagation();
    const hr = String(state.selectedHour || 10).padStart(2, "0");
    const min = String(state.selectedMinute || "00").padStart(2, "0");
    const ampm = state.selectedAmpm || "AM";
    const formatted = \`\${hr}:\${min} \${ampm}\`;

    if (state.activeTimeTarget === "start") {
      state.startTime = formatted;
      if (!state.endTime || state.endTime === "End Time") {
        state.activeTimeTarget = "end";
        state.selectedHour = 10;
        state.selectedMinute = "00";
        state.selectedAmpm = "PM";
      }
    } else {
      state.endTime = formatted;
    }
    showToast(\`Time set: \${formatted}\`);
    render({ preserveScroll: true });
  });
  `;

  content = content.slice(0, clockStartIndex) + newClockBinding + content.slice(clockEndIndex);

  fs.writeFileSync(filePath, content, 'utf8');
  console.log('Successfully updated ' + filePath);
}

applyToScript('public/script.js');
applyToScript('script.js');
