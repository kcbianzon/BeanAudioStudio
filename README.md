# Beantown Audio + Visual — Website Mockup (underdevelopment all rights belong to the client)

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

## Catalog and pricing data

`assets/beantown/catalog-data.js` contains the published rental listings from Beantown Audio Rentals service pages. The app includes public prices only where the original page states an amount; all other rates display as `Quote required`. Every catalog entry records its source page URL. The public LED trailer page says five sizes are available but omits size and rate details from its text, so the project records that limitation rather than inventing entries or prices.

Before production launch, confirm the quote-only rates, rental periods, availability, delivery/setup fees, taxes, deposits, and package definitions with the client.
