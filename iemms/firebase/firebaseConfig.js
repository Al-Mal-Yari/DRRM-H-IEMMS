import { getApp, initializeApp, getApps } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getInstallations } from "firebase/installations";
//import { getAnalytics } from "firebase/analytics"; //analytics isn't implemented yet

const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
  authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN,
  databaseURL: process.env.NEXT_PUBLIC_FIREBASE_DATABASE_URL,
  projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
  storageBucket: process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.NEXT_PUBLIC_FIREBASE_APP_ID,
};

console.log("Firebase Config:", {
  apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
  authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN,
  databaseURL: process.env.NEXT_PUBLIC_FIREBASE_DATABASE_URL,
  projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
  storageBucket: process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.NEXT_PUBLIC_FIREBASE_APP_ID,
});

// Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();
const auth = getAuth(app)
//const analytics = getAnalytics(app); //analytics isn't implemented yet

let installations; //add analytics if it is implemented in the future

// Check if running on the client side and if analytics is enabled
/*if (typeof window !== "undefined" && process.env.NEXT_PUBLIC_ENABLE_ANALYTICS === "true") {
  try {
    analytics = getAnalytics(app);
  } catch (error) {
    console.error("Analytics initialization error:", error);
  }
}*/ //analytics isn't implemented yet

// Check if running on the client side for installations
if (typeof window !== "undefined") {
  try {
    installations = getInstallations(app);
  } catch (error) {
    console.error("Installations initialization error:", error);
  }
}

export { app, auth, installations };//add analytics if it is implemented in the future