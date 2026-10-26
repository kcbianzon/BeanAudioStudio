const fs = require('fs');

const originalScript = fs.readFileSync('public/script.js', 'utf8');

// Find insertion boundaries
const startMarker = 'function renderDateAndLocationStep() {';
const endMarker = 'function renderEquipmentStep(totals) {';

const startIndex = originalScript.indexOf(startMarker);
const endIndex = originalScript.indexOf(endMarker);

if (startIndex === -1 || endIndex === -1) {
  console.error('Markers not found!');
  process.exit(1);
}

console.log(`Found markers: start=${startIndex}, end=${endIndex}`);
