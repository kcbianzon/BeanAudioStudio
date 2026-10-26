const fs = require('fs');

function fixReviewMeta(filePath) {
  let content = fs.readFileSync(filePath, 'utf8');

  // Replace effectiveDate definition in renderReviewAndSubmitStep
  const targetSnippet = `function renderReviewAndSubmitStep(totals) {
    const effectiveTime = (state.startTime && state.startTime !== "Start Time" && state.endTime && state.endTime !== "End Time")
      ? \`\${state.startTime} – \${state.endTime}\`
      : (state.startTime && state.startTime !== "Start Time" ? state.startTime : (state.eventTimeWindow || "Schedule TBD"));
    const effectiveLocation = getEffectiveLocationText() || "Boston / New England (TBD)";
    const effectiveDate = state.dateFlexible
      ? "Flexible Date"
      : state.date
        ? formatReadableDate(state.date)
        : "Date TBD";`;

  const newSnippet = `function renderReviewAndSubmitStep(totals) {
    const effectiveTime = (state.startTime && state.startTime !== "Start Time" && state.endTime && state.endTime !== "End Time")
      ? \`\${state.startTime} – \${state.endTime}\`
      : (state.startTime && state.startTime !== "Start Time" ? state.startTime : (state.eventTimeWindow || "Schedule TBD"));
    const effectiveLocation = getEffectiveLocationText() || "Boston / New England (TBD)";
    const effectiveDate = state.dateFlexible
      ? "Flexible Date"
      : (state.startDate && state.endDate
          ? (state.startDate === state.endDate ? formatReadableDate(state.startDate) : \`\${formatReadableDate(state.startDate)} – \${formatReadableDate(state.endDate)}\`)
          : (state.date ? formatReadableDate(state.date) : "Date TBD"));`;

  if (content.includes('function renderReviewAndSubmitStep(totals) {')) {
    content = content.replace(
      /<small>\$\{escapeHtml\(state\.eventTimeWindow\)\}<\/small>/g,
      '<small>${escapeHtml(effectiveTime)}</small>'
    );
    content = content.replace(
      /<span>EVENT LOCATION<\/span>\s*<strong>\$\{escapeHtml\(effectiveLocation\)\}<\/strong>\s*<button type="button" class="q-meta-edit" data-goto-step="4">Edit<\/button>/,
      '<span>EVENT LOCATION</span>\n          <strong>${escapeHtml(effectiveLocation)}</strong>\n          <button type="button" class="q-meta-edit" data-goto-step="3">Edit</button>'
    );
    content = content.replace(
      /<span>DELIVERY &amp; CREW<\/span>\s*<strong>([^<]+)<\/strong>\s*<button type="button" class="q-meta-edit" data-goto-step="5">Edit<\/button>/,
      '<span>DELIVERY &amp; CREW</span>\n          <strong>$1</strong>\n          <button type="button" class="q-meta-edit" data-goto-step="4">Edit</button>'
    );
  }

  // Also update effectiveDate logic
  content = content.replace(
    /const effectiveDate = state\.dateFlexible\s*\?\s*"Flexible Date"\s*:\s*state\.date\s*\?\s*formatReadableDate\(state\.date\)\s*:\s*"Date TBD";/,
    `const effectiveDate = state.dateFlexible
      ? "Flexible Date"
      : (state.startDate && state.endDate
          ? (state.startDate === state.endDate ? formatReadableDate(state.startDate) : \`\${formatReadableDate(state.startDate)} – \${formatReadableDate(state.endDate)}\`)
          : (state.date ? formatReadableDate(state.date) : "Date TBD"));`
  );

  fs.writeFileSync(filePath, content, 'utf8');
  console.log('Fixed review meta in ' + filePath);
}

fixReviewMeta('public/script.js');
fixReviewMeta('script.js');
