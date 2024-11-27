import { verifyRecaptchaToken } from "@/utils/verifyRecaptcha";

export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ message: "Method not allowed" });
  }

  const { token } = req.body;

  try {
    // Use the utility function to verify the token
    await verifyRecaptchaToken(token);

    // Respond with success if verification passes
    return res.status(200).json({
      success: true,
      message: "reCAPTCHA verified successfully.",
    });
  } catch (error) {
    console.error("Error verifying reCAPTCHA:", error.message);

    return res.status(400).json({
      success: false,
      message: error.message,
    });
  }
}
