# Beantown Audio + Visual — Website Mockup

A polished front-end mockup for an event AV rental company inspired by the requested Beantown Audio Rentals redesign direction.

## Included

- Responsive landing page
- Rental catalog with category filters and search
- Event bundle page
- Multi-step custom event builder
- Live selection totals for items with known prices
- Quote-required handling for custom production items
- Quote request page with mock submission state
- Mobile navigation
- Search overlay
- Placeholder media built in CSS — no external image files required

## Run locally

No build tooling is required.

1. Extract the ZIP.
2. Open `index.html` in a browser.

For a local development server, use VS Code Live Server or any static HTTP server.

## Project structure

- `index.html` — page shell
- `styles.css` — full design system and responsive styling
- `script.js` — routing, catalog data, builder state, filtering and interactions
- `assets/` — reserved for real client imagery later

## Pricing data

The mockup uses the publicly listed/reference prices gathered in the research phase for silent disco, outdoor movie packages and photo booths. Items without a public price are intentionally displayed as `Quote required`.

Before production launch, replace the demo catalog in `script.js` with the client's approved inventory, pricing rules, availability rules, delivery/setup fees, taxes, deposits and package definitions.
