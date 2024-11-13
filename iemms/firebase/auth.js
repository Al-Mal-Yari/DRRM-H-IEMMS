// iemms/firebase/auth.js
import { auth } from "./firebaseConfig";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut, sendSignInLinkToEmail } from "firebase/auth";

// Send a sign-in link to the user's email
const actionCodeSettings = {
    // URL you want to redirect back to. The domain (www.example.com) for this
    url: 'https://www.example.com/finishSignUp?cartId=1234', // URL must be in the authorized domains list in the Firebase Console.
    handleCodeInApp: true,
    iOS: { bundleId: 'com.example.ios' },
    android: { packageName: 'com.example.android', installApp: true, minimumVersion: '12' },
    dynamicLinkDomain: 'example.page.link' };

// Function to send the sign-in link
export const sendSignInLink = async (email) => {
    try {
      await sendSignInLinkToEmail(auth, email, actionCodeSettings);
      window.localStorage.setItem('emailForSignIn', email); // Save the email locally
      console.log("Sign-in link sent to email:", email);
    } catch (error) {
      console.error("Error sending sign-in link:", error.message);
      throw error;
    }
  };  

// Register a new user
export const registerWithEmailAndPassword = async (email, password) => {
  try {
    const userCredential = await createUserWithEmailAndPassword(auth, email, password);
    return userCredential.user;
  } catch (error) {
    console.error("Error during registration:", error.message);
    throw error;
  }
};

// Login an existing user
export const loginWithEmailAndPassword = async (email, password) => {
    try {
      const userCredential = await signInWithEmailAndPassword(auth, email, password);
      return userCredential.user;
    } catch (error) {
      console.error("Error during login:", error.message);
      if (error.code === "auth/user-not-found") {
        throw new Error("User not found");
      } else if (error.code === "auth/wrong-password") {
        throw new Error("Incorrect password");
      } else {
        throw error;
      }
    }
};

// Logout the current user
export const logout = async () => {
    try {
      await signOut(auth);
      return { success: true };
    } catch (error) {
      console.error("Error during logout:", error.message);
      throw error;
    }
};
