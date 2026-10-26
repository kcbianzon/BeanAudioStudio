const fs = require('fs');
const vm = require('vm');

// Mock browser globals
const domMock = {
  window: {
    addEventListener: () => {},
    matchMedia: () => ({ matches: false }),
    scrollTo: () => {},
    location: { hash: '#quote' },
    requestAnimationFrame: (cb) => cb(),
  },
  document: {
    querySelector: () => null,
    querySelectorAll: () => [],
    getElementById: () => ({ innerHTML: '', querySelector: () => null, addEventListener: () => {} }),
    addEventListener: () => {},
    createElement: () => ({ style: {} }),
    documentElement: { style: {} },
    body: { classList: { add: () => {}, remove: () => {} } },
  },
  location: { hash: '#quote' },
  localStorage: {
    getItem: () => null,
    setItem: () => {},
  },
  fetch: () => Promise.resolve({ json: () => Promise.resolve([]) }),
  showToast: () => {},
};

const scriptCode = fs.readFileSync('public/script.js', 'utf8');

const context = vm.createContext({
  ...domMock,
  console,
  setTimeout: (cb) => cb(),
  setInterval: () => {},
  clearInterval: () => {},
  clearTimeout: () => {},
});

// Run script in context
try {
  vm.runInContext(scriptCode, context);
  console.log('Script loaded successfully in VM!');

  // Test 1: Collapsed Date & Location Step
  context.state.timePickerExpanded = false;
  context.state.manualLocationMode = false;
  context.state.startDate = '2026-10-11';
  context.state.endDate = '2026-10-15';
  context.state.startTime = '10:00 AM';
  context.state.endTime = '10:00 PM';

  const htmlCollapsed = context.renderDateAndLocationStep();
  console.log('Test 1 (Collapsed) generated HTML length:', htmlCollapsed.length);
  if (!htmlCollapsed.includes('q-analog-clock-wrap')) throw new Error('Missing analog clock wrap in collapsed view');
  if (!htmlCollapsed.includes('is-range-start')) throw new Error('Missing is-range-start in calendar');
  if (!htmlCollapsed.includes('is-range-end')) throw new Error('Missing is-range-end in calendar');
  if (!htmlCollapsed.includes('is-in-range')) throw new Error('Missing is-in-range in calendar');
  if (!htmlCollapsed.includes('Enter Address Manually')) throw new Error('Missing Enter Address Manually button');

  // Test 2: Expanded Phone Alarm Roller Step
  context.state.timePickerExpanded = true;
  const htmlExpanded = context.renderDateAndLocationStep();
  console.log('Test 2 (Expanded) generated HTML length:', htmlExpanded.length);
  if (!htmlExpanded.includes('q-alarm-card-wrap')) throw new Error('Missing q-alarm-card-wrap');
  if (!htmlExpanded.includes('data-drum-column="hour"')) throw new Error('Missing hour drum');
  if (!htmlExpanded.includes('data-drum-column="minute"')) throw new Error('Missing minute drum');
  if (!htmlExpanded.includes('data-drum-column="ampm"')) throw new Error('Missing ampm drum');
  if (!htmlExpanded.includes('q-alarm-selection-window')) throw new Error('Missing selection window');
  if (!htmlExpanded.includes('q-alarm-btn-apply')) throw new Error('Missing apply button');

  // Test 3: Manual Address Mode
  context.state.manualLocationMode = true;
  const htmlManual = context.renderDateAndLocationStep();
  console.log('Test 3 (Manual Address) generated HTML length:', htmlManual.length);
  if (!htmlManual.includes('manualStreetInput')) throw new Error('Missing manualStreetInput');
  if (!htmlManual.includes('manualCityInput')) throw new Error('Missing manualCityInput');
  if (!htmlManual.includes('manualStateInput')) throw new Error('Missing manualStateInput');
  if (!htmlManual.includes('manualZipInput')) throw new Error('Missing manualZipInput');
  if (!htmlManual.includes('Back to live map search')) throw new Error('Missing Back to live map search button');

  // Test 4: Calculation Totals with 0 loopholes
  context.state.selected = {
    'qsc-k12-pair': 2,
    'sub-ks118': 1
  };
  context.state.duration = '1-day';
  context.state.serviceTier = 'delivery-setup';
  const totals = context.calculateQuoteTotals();
  console.log('Test 4 (Calculation Totals):', {
    totalUnits: totals.totalUnits,
    equipmentBaseSubtotal: totals.equipmentBaseSubtotal,
    durationSurcharge: totals.durationSurcharge,
    serviceFee: totals.serviceFee,
    grandTotal: totals.grandTotal
  });

  if (totals.totalUnits !== 3) throw new Error('Incorrect total units');
  if (totals.grandTotal <= 0) throw new Error('Grand total should be positive');

  console.log('ALL TESTS PASSED WITH 100% SUCCESS!');
} catch (err) {
  console.error('Test execution failed:', err);
  process.exit(1);
}
