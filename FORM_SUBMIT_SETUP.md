# Get a Quote email setup

Both quote flows now use Web3Forms. The access key is configured in `script.js` and routes submissions to the inbox used to create the key. No Firebase Function or server code is needed.

1. Create the key using the mailbox that should receive quote requests. If the client will receive them, the client should create and own the key.
2. Deploy the updated static site with `firebase deploy --only hosting`.
3. Submit a test request from the planner. Confirm it reaches the key's inbox and includes the event details, selected gear, and customer's reply-to address.

The forms use Web3Forms' JSON API and a hidden botcheck field. The UI shows success only when the API confirms the submission. The free tier currently allows 250 submissions per month; verify the current limit in Web3Forms' [pricing](https://web3forms.com/pricing).
