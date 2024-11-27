import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth, appCheck } from "../firebase/firebaseConfig";

export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ message: "Method Not Allowed" });
  }

  const { email, password, recaptchaToken } = req.body;

  if (!email || !password || !recaptchaToken) {
    return res.status(400).json({ message: "Missing required fields" });
  }

  try {
    // Verify reCAPTCHA token
    const appCheckResponse = await fetch(
      "https://www.google.com/recaptcha/api/siteverify",
      {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: `secret=${process.env.RECAPTCHA_SECRET_KEY}&response=${recaptchaToken}`,
      }
    );

    const { success, "error-codes": errorCodes } = await appCheckResponse.json();
    if (!success) {
      return res.status(400).json({ message: "reCAPTCHA verification failed", errorCodes });
    }

    // Create user in Firebase
    const userCredential = await createUserWithEmailAndPassword(auth, email, password);
    return res.status(200).json({ message: "Registration successful", user: userCredential.user });
  } catch (error) {
    return res.status(500).json({ message: "Registration failed", error: error.message });
  }
}
