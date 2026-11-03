# Get a Quote email setup

Both quote flows use FormSubmit, which forwards submissions to `kcbianzon@gmail.com` by default. The **Get a Quote** page posts its customer and event details as a standard HTML form. The setup planner at `#quote` tries FormSubmit's AJAX endpoint first; if that cross-origin request fails, it retries as a standard HTML form post to avoid browser CORS/preflight failures. No Firebase Function, email API key, or server code is required.

1. Deploy the updated static site with `firebase deploy --only hosting`.
2. On the live site, open **Get a Quote** and submit one test request. FormSubmit will send an activation email to `kcbianzon@gmail.com`.
3. Open that email and click the activation link. Check Spam if it does not appear in Inbox.
4. Submit each quote flow again from the live site. Confirm that the standalone form email contains all fields, its subject includes the customer name, and Reply-To is the customer's email. Confirm that the setup planner email includes the selected items and quote summary.

FormSubmit handles delivery and its own spam screening. Both forms use the table email template and a hidden honeypot field. The standalone form shows FormSubmit's confirmation page after submission; the planner stays on the site and shows its receipt only after a successful AJAX response. If AJAX cannot connect, the planner retries through FormSubmit's standard form endpoint, which displays FormSubmit's confirmation page.
