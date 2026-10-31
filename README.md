# Habitry – habit tracker

Mobile web app (PWA): create habits, set reminders, earn streaks and rewards, split your day into morning/afternoon/evening, and see which weekdays you slip. The calendar shows completed days in green.

- Free: 3 habits. Premium (DKK 25/month or DKK 149/year): unlimited habits, widgets, detailed charts and themes (prototype – no real payment).
- Sign in with email and password. Without setup, accounts are stored on the device (prototype mode). Add a Firebase config in `firebase-config.js` to store data in the cloud and sync across devices (Google sign-in included).
- On desktop the app is shown inside a phone frame that fills the window (`desktop.html`).
- On mobile it opens as a normal app and can be added to the home screen (works offline).

Run locally: `python3 -m http.server` and open http://localhost:8000
