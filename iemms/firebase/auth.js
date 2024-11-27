import { auth } from "./firebaseConfig";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut } from "firebase/auth";

// Helper function to make API requests for registration or login
const makeAuthRequest = async (url, email, password, reCAPTCHAToken) => {
  try {
    // Send the reCAPTCHA token to the backend for verification
    const response = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}${url}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${reCAPTCHAToken}`, // Pass the token in the Authorization header
      },
      body: JSON.stringify({ email, password }),
    });

    // Handle the response from the server
    if (!response.ok) {
      const errorText = await response.text();
      console.error("Error response from server:", errorText);
      throw new Error(errorText || 'Failed to verify reCAPTCHA');
    }

    // Return the JSON response if the request is successful
    return await response.json();
  } catch (error) {
    console.error("API Request Error:", error.message);
    throw new Error(`API Request Error: ${error.message}`);
  }
};

// Register a new user
export const registerWithEmailAndPassword = async (email, password, reCAPTCHAToken) => {
  try {
    // Verify the reCAPTCHA token by making a backend request
    await makeAuthRequest('/api/register', email, password, reCAPTCHAToken);

    // If the token is valid, proceed with Firebase registration
    const userCredential = await createUserWithEmailAndPassword(auth, email, password);
    return userCredential.user;
  } catch (error) {
    console.error("Error during registration:", error.message);
    throw new Error(`Registration Error: ${error.message}`);
  }
};

// Login an existing user
export const loginWithEmailAndPassword = async (email, password, reCAPTCHAToken) => {
  try {
    // Verify the reCAPTCHA token before proceeding with login
    await makeAuthRequest('/api/login', email, password, reCAPTCHAToken);

    // If the token is valid, proceed with Firebase login
    const userCredential = await signInWithEmailAndPassword(auth, email, password);
    return userCredential.user;
  } catch (error) {
    console.error("Error during login:", error.message);
    throw new Error(`Login Error: ${error.message}`);
  }
};

// Logout the current user
export const logout = async () => {
  try {
    await signOut(auth);
    return { success: true };
  } catch (error) {
    console.error("Error during logout:", error.message);
    throw new Error(`Logout Error: ${error.message}`);
  }
};
