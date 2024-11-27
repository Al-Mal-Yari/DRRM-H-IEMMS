import { loginWithEmailAndPassword, registerWithEmailAndPassword } from "../firebase/auth";
import { appCheck } from "../firebase/firebaseConfig"; // Ensure appCheck is initialized
import { getToken } from "firebase/app-check";

export const handleLogin = async (username, password, router, toast, setIsLoading) => {
  setIsLoading(true);

  try {
    // Validate email format
    if (!username.includes("@")) {
      toast.error("Please enter a valid email address.");
      setIsLoading(false);
      return;
    }

    // Validate password length
    if (password.length < 6) {
      toast.error("Password must be at least 6 characters long.");
      setIsLoading(false);
      return;
    }

    if (!appCheck) throw new Error("App Check is not initialized");

    // Get the reCAPTCHA token
    const appCheckTokenResult = await getToken(appCheck, true);
    const recaptchaToken = appCheckTokenResult?.token;

    // Send token to backend for verification
    const response = await fetch('/api/verify-recaptcha', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ token: recaptchaToken }),
    });

    const reCAPTCHAResult = await response.json();
    if (!reCAPTCHAResult.success) {
      toast.error("reCAPTCHA verification failed.");
      setIsLoading(false);
      return;
    }

    // Log the user in
    const user = await loginWithEmailAndPassword(username, password, recaptchaToken);
    toast.success("Login successful!");

    // Redirect to the home page
    router.push("/upm-drrm-app/home");
  } catch (error) {
    toast.error("Login failed: " + error.message);
  } finally {
    setIsLoading(false);
  }
};

export const handleRegister = async (
  newUsername,
  newPassword,
  confirmPassword,
  router,
  toast,
  setIsLoading,
  handleCloseRegisterModal,
  resetFormFields
) => {
  setIsLoading(true);

  try {
    // Validate email format
    if (!newUsername.includes("@")) {
      toast.error("Please enter a valid email address.");
      setIsLoading(false);
      return;
    }

    // Validate password length
    if (newPassword.length < 6) {
      toast.error("Password must be at least 6 characters long.");
      setIsLoading(false);
      return;
    }

    // Check if passwords match
    if (newPassword !== confirmPassword) {
      toast.error("Passwords do not match!");
      setIsLoading(false);
      return;
    }

    if (!appCheck) throw new Error("App Check is not initialized");

    // Get the reCAPTCHA token
    const appCheckTokenResult = await getToken(appCheck, true);
    const recaptchaToken = appCheckTokenResult?.token;

    // Send token to backend for verification
    const response = await fetch('/api/verify-recaptcha', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ token: recaptchaToken }),
    });

    const reCAPTCHAResult = await response.json();
    if (!reCAPTCHAResult.success) {
      toast.error("reCAPTCHA verification failed.");
      setIsLoading(false);
      return;
    }

    // Register the user
    const user = await registerWithEmailAndPassword(newUsername, newPassword, recaptchaToken);
    toast.success("Registration successful! You can now log in.");

    // Reset form and close modal
    resetFormFields();
    handleCloseRegisterModal();

    // Redirect to login page
    router.push("/");
  } catch (error) {
    toast.error("Registration failed: " + error.message);
  } finally {
    setIsLoading(false);
  }
};
