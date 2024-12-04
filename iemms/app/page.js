"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import RegisterModal from "./components/registerModal";
import { toast } from "react-toastify";
import { Roboto } from "next/font/google";
import Link from "next/link";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGoogle, faFacebook } from "@fortawesome/free-brands-svg-icons";
import { GoogleAuthProvider, FacebookAuthProvider, signInWithPopup } from "firebase/auth";
import { auth } from "../firebase/firebaseConfig";
import "react-toastify/dist/ReactToastify.css";
import drrmBg from "./bgcover.jpg";
import upmlogo from "./upmlogo.png";
import drrmlogo from "./drrmlogo.png";
import dostlogo from "./dostlogo.png";

// Font configuration using Next.js
const roboto = Roboto({
  subsets: ["latin"],
  weight: ["400", "700"],
  display: "swap",
});

export default function Home() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [showRegisterModal, setShowRegisterModal] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();

  /**
   * Toggles the visibility of the password field.
   */
  const handleTogglePasswordVisibility = () => {
    setShowPassword((prevState) => !prevState);
  };

  /**
   * Opens the registration modal.
   */
  const handleOpenRegisterModal = () => setShowRegisterModal(true);

  /**
   * Closes the registration modal.
   */
  const handleCloseRegisterModal = () => setShowRegisterModal(false);

  /**
   * Handles the form submission for login.
   */
  const handleLogin = async (e) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      const { login } = await import("../services/auth/authHandlers"); // Dynamically import login handler
      await login(username, password);
      toast.success("Login successful!");
      router.push("/upm-drrm-app/home");
    } catch (error) {
      toast.error("Login failed: " + error.message);
    } finally {
      setIsLoading(false);
    }
  };

  /**
   * Handles Google Sign-In.
   */
  const handleGoogleSignIn = async () => {
    const provider = new GoogleAuthProvider();
    setIsLoading(true);

    try {
      const result = await signInWithPopup(auth, provider);
      toast.success(`Welcome, ${result.user.displayName}!`);
      router.push("/upm-drrm-app/home");
    } catch (error) {
      toast.error("Google Sign-In failed: " + error.message);
    } finally {
      setIsLoading(false);
    }
  };

  /**
   * Handles Facebook Sign-In.
   */
  const handleFacebookSignIn = async () => {
    const provider = new FacebookAuthProvider();
    setIsLoading(true);

    try {
      const result = await signInWithPopup(auth, provider);
      toast.success(`Welcome, ${result.user.displayName}!`);
      router.push("/upm-drrm-app/home");
    } catch (error) {
      toast.error("Facebook Sign-In failed: " + error.message);
    } finally {
      setIsLoading(false);
    }
  };

 /**
   * Handles the registration process.
   * Passed as a prop to RegisterModal for flexibility.
   */
 const handleRegister = async (email, password) => {
  try {
    // Dynamically import the register function
    const { registerWithEmailAndPassword } = await import("../services/auth/authHandlers");

    if (typeof registerWithEmailAndPassword !== "function") {
      throw new Error("registerWithEmailAndPassword is not a function.");
    }

    await registerWithEmailAndPassword(email, password); // Call register function
    toast.success("Registration successful!");
    router.push("/upm-drrm-app/home");
  } catch (error) {
    toast.error("Registration failed: " + error.message);
  }
};

  return (
    <div className="flex min-h-screen">
            {/* Left Section - Image Background */}
            <div className="flex-1 relative">
              <Image
                src={drrmBg}
                alt="DRRM Background"
                fill
                style={{ objectFit: "cover" }}
                priority
                placeholder="blur"
              />
              <div className="absolute top-16 left-16 text-white z-10 space-y-4">
                <h1 className="text-yellow-500 font-bold tracking-wider text-[3.55rem] leading-[1.2]">
                  Disaster Risk Reduction <br /> and Management <br /> for Health
                </h1>
                <h2 className="text-lg font-semibold tracking-wider" style={{ fontSize: "1.5rem", marginTop: "2rem" }}>
                  University of the Philippines Manila
                </h2>
                <p className="text-md tracking-wider" style={{ fontSize: "1.2rem", marginTop: "0.5rem" }}>
                  Trainings | Research | Consultancy
                </p>
              </div>
            </div>

            {/* Right Section - Login Form */}
            <div className="flex flex-col items-center justify-center w-1/4 bg-gradient-to-b from-[#5a2122] to-[#3D0000] shadow-md p-8">
              {/* Logos */}
              <div className="flex items-center justify-center mb-6 space-x-3">
                <Link href="https://dost.gov.ph">
                  <Image src={dostlogo} alt="DOST Logo" width={70} height={70} className="cursor-pointer" />
                </Link>
                <Link href="https://upm.edu.ph">
                  <Image src={upmlogo} alt="UPM Logo" width={70} height={70} className="cursor-pointer" />
                </Link>
                <Link href="https://www.facebook.com/UPSimulationCenter">
                  <Image src={drrmlogo} alt="DRRM Logo" width={70} height={70} className="cursor-pointer" />
                </Link>
              </div>

              <h2 className="text-large font-bold mb-6 text-center text-white">
                UPM DRRM-H INVENTORY & EQUIPMENT MONITORING SYSTEM
              </h2>

              {/* Login Form */}
          <form onSubmit={handleLogin} className="w-full max-w-sm">
            <div className="mb-4">
              <label className="block text-[#D4D4D4] text-sm font-bold mb-2" htmlFor="username">
                Email
              </label>
              <input
                type="email"
                id="username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                required
              />
            </div>
            <div className="mb-6 relative">
              <label className="block text-[#D4D4D4] text-sm font-bold mb-2" htmlFor="password">
                Password
              </label>
              <input
                type={showPassword ? "text" : "password"}
                id="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                required
              />
              <span
                onClick={handleTogglePasswordVisibility}
                className="absolute right-0 top-1/2 transform -translate-y-1/2 pr-3 flex items-center cursor-pointer text-gray-500"
              >
                {showPassword ? "🙈" : "👁️"}
              </span>

              </div>
              {/* Button and Forgot Password (Side by Side) */}
                <div className="flex justify-between w-full mb-4">
                <button
                  type="submit"
                  className={`bg-[#770203] w-1/2 text-white py-2 px-4 rounded focus:outline-none focus:shadow-outline font-semibold hover:bg-[#A23C35] ${
                    isLoading ? "opacity-50 cursor-not-allowed" : ""
                  }`}
                  disabled={isLoading}
                >
                  {isLoading ? "Logging in..." : "Login"}
                </button>


                <Link
                  href="/forgot-password"
                  className="text-yellow-400 font-semibold hover:underline self-center ml-4"
                >
                  Forgot Password?
                </Link>
                </div>

              {/* "Don't have an account?" Text and Register Button */}
              <div className="flex items-center justify-center mt-6 space-x-2">
                <p className="text-white text-sm">Don't have an account?</p>
                <button
                  type="button"
                  onClick={handleOpenRegisterModal}
                  className="hover:underline text-yellow-400 font-semibold"
                >
                  Register
                </button>
              </div>
              </form>


              {/* Register Modal */}
              <RegisterModal isOpen={showRegisterModal} onClose={handleCloseRegisterModal} onSubmit={handleRegister} />

              {/* Social Media Login */}
              <div className="flex justify-center space-x-6 mt-6">
                <button
                  onClick={handleGoogleSignIn}
                  className="bg-white p-3 rounded-full shadow-lg hover:opacity-80 transition-all"
                >
                  <FontAwesomeIcon icon={faGoogle} size="2x" className="text-red-500" />
                </button>
                <button
                  onClick={handleFacebookSignIn}
                  className="bg-white p-3 rounded-full shadow-lg hover:opacity-80 transition-all"
                >
                  <FontAwesomeIcon icon={faFacebook} size="2x" className="text-blue-600" />
                </button>
              </div>
      </div>
    </div>
  );
}
