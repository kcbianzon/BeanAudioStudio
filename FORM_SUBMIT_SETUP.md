# Get a Quote email setup

The **Get a Quote** form posts directly to FormSubmit, which forwards submissions to `kcbianzon@gmail.com`. No Firebase Function, email API key, or server code is required. The existing setup planner at `#quote` is separate.

1. Deploy the updated static site with `firebase deploy --only hosting`.
2. On the live site, open **Get a Quote** and submit one test request. FormSubmit will send an activation email to `kcbianzon@gmail.com`.
3. Open that email and click the activation link. Check Spam if it does not appear in Inbox.
4. Submit the form again from the live site. Confirm that the email contains all fields, its subject includes the customer name, and Reply-To is the customer's email.

FormSubmit handles delivery and its own spam screening. The form uses its table email template and a hidden honeypot field. FormSubmit displays its confirmation page after a valid submission; the website does not claim delivery before the service responds.
