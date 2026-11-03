# Get a Quote email setup

The header and mobile menu **Get a Quote** links open a direct request form at `#get-quote`. Submissions go to the Firebase Hosting rewrite at `/api/quote`, which runs `submitQuote` and sends the email to `kcbianzon@gmail.com` through Resend. The existing setup planner remains at `#quote`.

## Configure and deploy

1. Set the Firebase project to the Blaze plan and enable Cloud Functions. Create a Resend account and verify the domain used for the sender address. The sender must be an address on that verified domain.
2. From the project root, install the function dependencies with `npm ci --prefix functions`.
3. Set the server-only secrets with `firebase functions:secrets:set RESEND_API_KEY` and `firebase functions:secrets:set RESEND_FROM_EMAIL`. For the second secret, enter a sender such as `Beantown Audio Rentals <quotes@your-verified-domain.com>`.
4. Deploy both the function and Hosting rewrite with `firebase deploy --only functions,hosting`.
5. Open the hosted website, submit a test request, and confirm it reaches `kcbianzon@gmail.com`. Reply to the message to verify Reply-To points to the customer's email.

Secrets are available only to the Cloud Function. Do not place them in `index.html`, `script.js`, or committed files. The function accepts a request only after Resend returns an email ID; a failed provider request displays the form error and preserves the entered fields. The API also validates fields, checks a hidden honeypot, limits requests per IP, and restricts browser origins.

The plain `index.html` file or a static-only local server cannot deliver email because they do not run Firebase Functions. Use the deployed site or the Firebase Hosting and Functions emulators for end-to-end testing. Run `npm test --prefix functions` for backend checks.
