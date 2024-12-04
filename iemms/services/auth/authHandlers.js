import {
  loginWithEmailAndPassword,
  registerWithEmailAndPassword,
  sendPasswordResetEmail,
} from "../../firebase/auth";  
import { appCheck } from "../../firebase/firebaseConfig";
import { getToken } from "firebase/app-check";

/**
* Validates email format
* @param {string} email - Email to validate
* @returns {boolean} - True if valid, false otherwise
*/
const validateEmail = (email) => /\S+@\S+\.\S+/.test(email);

/**
* Validates password length
* @param {string} password - Password to validate
* @returns {boolean} - True if valid, false otherwise
*/
const validatePassword = (password) => password.length >= 6;

/**
* Handles reCAPTCHA token generation and validation
* @returns {Promise<boolean>} - True if reCAPTCHA is successful, false otherwise
*/
const validateRecaptcha = async () => {
if (!appCheck) throw new Error("App Check is not initialized");

const appCheckTokenResult = await getToken(appCheck, true);
const recaptchaToken = appCheckTokenResult?.token;
console.log("Received reCAPTCHA token:", recaptchaToken);

const response = await fetch("/api/verify-recaptcha", {
  method: "POST",
  headers: { "Content-Type": "application/json" },
  body: JSON.stringify({ token: recaptchaToken }),
});

const reCAPTCHAResult = await response.json();
return reCAPTCHAResult.success;
};

/**
* Handles user login
* @param {string} username - User's email
* @param {string} password - User's password
* @returns {Promise<void>}
*/
export const login = async (username, password) => {
if (!validateEmail(username)) throw new Error("Invalid email format.");
if (!validatePassword(password)) throw new Error("Password must be at least 6 characters long.");

const isRecaptchaValid = await validateRecaptcha();
if (!isRecaptchaValid) throw new Error("reCAPTCHA verification failed.");

// Login using Firebase auth
return await loginWithEmailAndPassword(username, password);
};

/**
* Handles user registration
* @param {string} email - New user's email
* @param {string} password - New user's password
* @param {string} confirmPassword - Confirmation of the new password
* @returns {Promise<void>}
*/
export const register = async (email, password, confirmPassword) => {
if (!validateEmail(email)) throw new Error("Invalid email format.");
if (!validatePassword(password)) throw new Error("Password must be at least 6 characters long.");
if (password !== confirmPassword) throw new Error("Passwords do not match!");

const isRecaptchaValid = await validateRecaptcha();
if (!isRecaptchaValid) throw new Error("reCAPTCHA verification failed.");

try {
  // Register using Firebase auth
  console.log("Attempting to register:", email, password);
  return await registerWithEmailAndPassword(email, password);
} catch (error) {
  console.error("Registration failed:", error.message);
  throw new Error("Failed to register: " + error.message);
}
};

/**
* Handles password reset
* @param {string} email - User's email for password reset
* @returns {Promise<void>}
*/
export const resetPassword = async (email) => {
if (!validateEmail(email)) throw new Error("Invalid email format.");

const isRecaptchaValid = await validateRecaptcha();
if (!isRecaptchaValid) throw new Error("reCAPTCHA verification failed.");

// Send password reset email using Firebase auth
try {
  await sendPasswordResetEmail(email);
  return "Password reset email sent!";
} catch (error) {
  throw new Error("Failed to send password reset email: " + error.message);
}
};
