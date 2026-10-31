// Habitry – cloud login and sync (optional)
//
// Leave FIREBASE_CONFIG as null to run in prototype mode: accounts and data
// are stored on the device only.
//
// To store data in the cloud and sync across devices:
// 1. Create a free project at https://console.firebase.google.com
// 2. Build > Authentication > Get started > enable "Email/Password" (and "Google" if you want)
// 3. Authentication > Settings > Authorized domains > add flowersmokeapp.github.io
// 4. Build > Firestore Database > Create database (production mode), then under Rules paste:
//      rules_version = '2';
//      service cloud.firestore {
//        match /databases/{db}/documents {
//          match /users/{uid} { allow read, write: if request.auth != null && request.auth.uid == uid; }
//        }
//      }
// 5. Project settings > Your apps > Web app (</>) > copy the config object below.
window.FIREBASE_CONFIG = null;
/* Example:
window.FIREBASE_CONFIG = {
  apiKey: "AIza...",
  authDomain: "habitry-xxxx.firebaseapp.com",
  projectId: "habitry-xxxx",
  storageBucket: "habitry-xxxx.appspot.com",
  messagingSenderId: "1234567890",
  appId: "1:1234567890:web:abc123"
};
*/
