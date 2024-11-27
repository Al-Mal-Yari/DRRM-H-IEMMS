//this is utils/verify-Recaptcha.js, a diff file than verify-recaptcha.js
import axios from "axios";

/**
 * Verifies the reCAPTCHA token using Google's API.
 * @param {string} token - The reCAPTCHA token submitted by the client.
 * @returns {Promise<void>} - Resolves if verification succeeds; otherwise, throws an error.
 */
export const verifyRecaptchaToken = async (token) => {
  if (!token) {
    throw new Error("Missing reCAPTCHA token.");
  }

  const secretKey = process.env.RECAPTCHA_SECRET_KEY;

  if (!secretKey) {
    throw new Error("reCAPTCHA secret key is not configured.");
  }

  const verificationURL = "https://www.google.com/recaptcha/api/siteverify";

  // Call Google's API to verify the token
  const response = await axios.post(
    verificationURL,
    null,
    {
      params: {
        secret: secretKey,
        response: token,
      },
    }
  );

  const { success, "error-codes": errorCodes } = response.data;

  if (!success) {
    throw new Error(
      `reCAPTCHA verification failed: ${
        errorCodes ? errorCodes.join(", ") : "Unknown error"
      }`
    );
  }
};
