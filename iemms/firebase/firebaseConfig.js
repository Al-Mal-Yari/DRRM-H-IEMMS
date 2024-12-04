import { initializeApp, getApps, getApp } from 'firebase/app';
import { initializeAppCheck, ReCaptchaV3Provider } from 'firebase/app-check';
import { getAuth } from 'firebase/auth';
import { getInstallations } from 'firebase/installations';

console.log("firebaseConfig.js loaded");

// Firebase configuration loaded from environment variables
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

// Ensure all required environment variables are set
const requiredEnv = [
  "NEXT_PUBLIC_FIREBASE_API_KEY",
  "NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN",
  "NEXT_PUBLIC_RECAPTCHA_SITE_KEY",
  "RECAPTCHA_SECRET_KEY",
];

requiredEnv.forEach((key) => {
  if (!process.env[key]) {
    console.warn(`Environment variable ${key} is not set`);
  }
});

// Initialize Firebase app (only if not already initialized)
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();
console.log("Firebase app initialized");

// --- App Check Configuration ---
let appCheckInstance;

if (typeof window !== 'undefined') {
  try {
    // Enable debug mode for App Check in development
    if (process.env.NODE_ENV !== "production") {
      self.FIREBASE_APPCHECK_DEBUG_TOKEN = true;
    }

    // Initialize App Check with reCAPTCHA v3 provider
    appCheckInstance = initializeAppCheck(app, {
      provider: new ReCaptchaV3Provider(process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY), // Use the reCAPTCHA Site Key
      isTokenAutoRefreshEnabled: true, // Enable automatic token refresh
    });

    console.log("App Check initialized successfully");
  } catch (error) {
    console.error("Error initializing App Check:", error);
  }
}

// --- Firebase Authentication ---
const auth = getAuth(app); // Firebase Auth instance

// --- Firebase Installations ---
let installations;
if (typeof window !== 'undefined') {
  try {
    installations = getInstallations(app); // Firebase installations service
  } catch (error) {
    console.error("Error initializing Firebase Installations:", error);
  }
}

// --- Exported Firebase Services ---
export { app, appCheckInstance as appCheck, auth, installations };

// --- reCAPTCHA Verification for Server-Side (API Routes) ---
/**
 * Verifies reCAPTCHA tokens sent by the client.
 * This function is typically used in Next.js API routes.
 */
export const verifyRecaptcha = async (req, res) => {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  try {
    // Extract token from request body
    const recaptchaToken = req.body.token;

    // Verify token with Google's reCAPTCHA service
    const response = await fetch('https://www.google.com/recaptcha/api/siteverify', {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: `secret=${process.env.RECAPTCHA_SECRET_KEY}&response=${recaptchaToken}`,
    });

    const data = await response.json();

    if (!data.success) {
      console.error("reCAPTCHA verification failed:", data['error-codes']);
      return res.status(400).json({ 
        message: 'Failed to verify reCAPTCHA', 
        errors: data['error-codes'] 
      });
    }

    // Success response
    return res.status(200).json({ message: 'reCAPTCHA verified successfully' });
  } catch (error) {
    console.error("Error verifying reCAPTCHA:", error.message);
    return res.status(500).json({ 
      message: 'Server error during reCAPTCHA verification', 
      error: error.message 
    });
  }
};
