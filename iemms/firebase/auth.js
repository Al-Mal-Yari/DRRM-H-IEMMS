// iemms/firebase/auth.js
import { auth } from "./firebaseConfig";
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut } from "firebase/auth";

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
