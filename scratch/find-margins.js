const fs = require('fs');
const css = fs.readFileSync('public/styles.css', 'utf8');

const targets = [
  'site-shell',
  'body',
  'page',
  'q-builder-page',
  'q-main-layout',
  'q-workspace',
  'q-step-panel',
  'q-clean-section',
  'q-venue-grid',
  'q-venue-card',
  'q-schedule-card'
];

targets.forEach(t => {
  console.log(`\n================== ${t} ==================`);
  const re = new RegExp('(?:^|\\n|\\})([^{]*\\b' + t + '\\b[^{]*)\\{([^}]+)\\}', 'g');
  let m;
  while ((m = re.exec(css)) !== null) {
    const sel = m[1].trim().replace(/\s+/g, ' ');
    const body = m[2].trim().replace(/\s+/g, ' ');
    if (body.includes('padding') || body.includes('margin') || body.includes('width') || body.includes('grid-template') || body.includes('box-sizing')) {
      console.log(`${sel} {\n  ${body}\n}`);
    }
  }
});
