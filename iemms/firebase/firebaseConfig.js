import { initializeApp, getApps, getApp } from 'firebase/app';
import { initializeAppCheck, ReCaptchaV3Provider } from 'firebase/app-check';
import { getAuth } from 'firebase/auth';
import { getInstallations } from 'firebase/installations';

console.log("firebaseConfig.js loaded");

// Firebase config loaded from environment variables
const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
  authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN,
  databaseURL: process.env.NEXT_PUBLIC_FIREBASE_DATABASE_URL,
  projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
  storageBucket: process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.NEXT_PUBLIC_FIREBASE_APP_ID,
  measurementId: process.env.NEXT_PUBLIC_FIREBASE_MEASUREMENT_ID,
};

// Initialize Firebase app (only if not already initialized)
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();

// Declare `appCheck` instance
let appCheckInstance;

// Initialize App Check on the client side
if (typeof window !== 'undefined' && !appCheckInstance) {
  try {
    appCheckInstance = initializeAppCheck(app, {
      provider: new ReCaptchaV3Provider(process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY),
      isTokenAutoRefreshEnabled: true, // Enable token auto-refresh
    });
    console.log("App Check initialized successfully");
  } catch (error) {
    console.error("Error initializing App Check:", error);
  }
}

// Initialize Firebase Authentication
const auth = getAuth(app);

// Initialize Installations (only on the client side)
let installations;
if (typeof window !== 'undefined') {
  try {
    installations = getInstallations(app);
  } catch (error) {
    console.error("Error initializing Firebase Installations:", error);
  }
}

// Export Firebase services
export { app, appCheckInstance as appCheck, auth, installations };

// Server-side function to verify reCAPTCHA token (for API routes)
export const verifyRecaptcha = async (req, res) => {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  try {
    const recaptchaToken = req.body.token; // Extract the token from the request body
    const response = await fetch('https://www.google.com/recaptcha/api/siteverify', {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: `secret=${process.env.RECAPTCHA_SECRET_KEY}&response=${recaptchaToken}`,
    });

    const data = await response.json();

    if (!data.success) {
      return res.status(400).json({ message: 'Failed to verify reCAPTCHA', errors: data['error-codes'] });
    }

    // Proceed if reCAPTCHA verification succeeds
    return res.status(200).json({ message: 'reCAPTCHA verified successfully' });
  } catch (error) {
    console.error("Error verifying reCAPTCHA:", error.message);
    return res.status(500).json({ message: 'Server error during reCAPTCHA verification', error: error.message });
  }
};
