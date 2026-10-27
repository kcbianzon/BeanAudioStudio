# Beantown site media

Images in this folder were collected from the public Beantown Audio Rentals website on 2026-09-24:

- https://www.beantownaudiorentals.com/
- Image files are from the site's observed `cdn.prod.website-files.com` assets.
- The live homepage exposes its brand as a text wordmark, with no standalone downloadable logo. The supplied Beantown logo image from the user is cropped to its visible mark and converted to transparent black and white PNG variants for the header and dark footer.

The rental catalog in `catalog-data.js` was transcribed from the public service pages listed in each catalog item’s `sourceUrl`. Public prices are included only where the source page states an amount. Listings without a published rate use “Quote required”; they are not assigned mock prices. The public source describes five outdoor LED trailer sizes but does not publish their sizes or rates in page text, so that listing notes the omission and directs customers to request a quote.

The app loads this same catalog from `public/assets/beantown/catalog-data.js` in its published copy. Product imagery remains visual/event imagery and does not imply a specific included model unless the listing description says so.

## Stock photos

Equipment-matched stock photos were downloaded from the Unsplash CDN for local use in the mockup (Unsplash License: https://unsplash.com/license):

- `event-stage.jpg` — photo-1506157786151-b8491531f063
- `microphone.jpg` — photo-1590602847861-f357a9332bbc
- `projector-screen.jpg` — photo-1478720568477-152d9b164e26
- `video-camera.jpg` — photo-1492619375914-88005aa9e8fb
- `live-event.jpg` — photo-1501386761578-eac5c94b800a
- `event-production.jpg` — photo-1511795409834-ef04bbd61622
- `speaker-rental.jpg` — photo-1545454675-3531b543be5d
- `headphones.jpg` — photo-1505740420928-5e560c06d30e
- `event-display.jpg` — photo-1593359677879-a4bb92f829d1

## Rental catalog image URLs

The rental cards use direct Unsplash CDN URLs (served by `images.unsplash.com`) so the catalog loads real web-hosted photography by equipment category. Unsplash photos are provided under the Unsplash License:

- Headphones — `photo-1505740420928-5e560c06d30e`
- Microphone — `photo-1540255431229-f8c6137e88d3`
- Projector / screen — `photo-1697059361461-b81d0e98c3af`
- Presentation display — `photo-1560439514-0fc9d2cd5e1b`
- Event / LED stage — `photo-1506157786151-b8491531f063`
- Photo booth / celebration — `photo-1530103862676-de8c9debad1d`
- Live streaming camera — `photo-1492619375914-88005aa9e8fb`
