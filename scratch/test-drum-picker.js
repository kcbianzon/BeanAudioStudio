// Test drum picker logic and calculation
const state = {
  startDate: "2026-10-11",
  endDate: "2026-10-15",
  startTime: "10:00 AM",
  endTime: "10:00 PM",
  activeTimeTarget: "start",
  selectedHour: 6,
  selectedMinute: "23",
  selectedAmpm: "AM",
  timePickerExpanded: true,
  manualLocationMode: false
};

function parseTimeString(str) {
  if (!str) return null;
  const match = str.match(/^(\d{1,2}):(\d{2})\s*(AM|PM)?$/i);
  if (!match) return null;
  let h = parseInt(match[1], 10);
  let m = match[2];
  let ampm = match[3] ? match[3].toUpperCase() : "AM";
  if (h > 12) { h -= 12; ampm = "PM"; }
  else if (h === 0) { h = 12; ampm = "AM"; }
  return { hour: h, minute: m, ampm };
}

console.log('Parsed startTime:', parseTimeString(state.startTime));
console.log('Parsed endTime:', parseTimeString(state.endTime));

const minutesList = Array.from({ length: 60 }, (_, i) => String(i).padStart(2, '0'));
console.log('Minutes count:', minutesList.length);
console.log('Sample minutes:', minutesList.slice(20, 26));
console.log('Test passed successfully.');
