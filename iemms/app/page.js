"use client";

import { useState, useEffect, useRef } from "react";
import { loginWithEmailAndPassword, registerWithEmailAndPassword } from "../firebase/auth";
import { useRouter } from "next/navigation";
import { appCheck } from "../firebase/firebaseConfig"; // Make sure it's imported correctly
import { getToken } from "firebase/app-check";
import RegisterModal from "./components/registerModal";
import { Roboto } from 'next/font/google';
import Link from "next/link";
import Image from "next/image";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faGoogle } from '@fortawesome/free-brands-svg-icons';
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import drrmBg from './bgcover.jpg';
import upmlogo from './upmlogo.png';
import drrmlogo from './drrmlogo.png';
import dostlogo from './dostlogo.png';

console.log("page.js loaded");

// Font
const roboto = Roboto({
  subsets: ['latin'],
  weight: ['400', '700'],
  display: 'swap',
});

export default function Home() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [newUsername, setNewUsername] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [showRegisterModal, setShowRegisterModal] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();

  const handleOpenRegisterModal = () => setShowRegisterModal(true);
  const handleCloseRegisterModal = () => setShowRegisterModal(false);

  const handleTogglePasswordVisibility = () => {
    setShowPassword(prevState => !prevState);
  };



  // Handle login
  const handleLogin = async (e) => {
    e.preventDefault();
    setIsLoading(true); // Disable double submission by enabling a loading state
  
    try {
      // Validate email format
      if (!username.includes("@")) {
        toast.error("Please enter a valid email address."); // User-friendly feedback for email
        setIsLoading(false);
        return;
      }
  
      // Validate password length
      if (password.length < 6) {
        toast.error("Password must be at least 6 characters long."); // Feedback for weak passwords
        setIsLoading(false);
        return;
      }
  
      if (!appCheck) throw new Error("App Check is not initialized");
  
      // Get the reCAPTCHA token
      const appCheckTokenResult = await getToken(appCheck, true);
      const recaptchaToken = appCheckTokenResult?.token;
      console.log("reCAPTCHA Token:", recaptchaToken);
  
      // Send token to backend for verification
      const response = await fetch('/api/verify-recaptcha', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ token: recaptchaToken }),
      });
  
      const reCAPTCHAResult = await response.json();
      if (!reCAPTCHAResult.success) {
        toast.error("reCAPTCHA verification failed."); // User-friendly feedback for reCAPTCHA failure
        setIsLoading(false);
        return;
      }
  
      // Log the user in
      const user = await loginWithEmailAndPassword(username, password, recaptchaToken);
      console.log("Logged in user:", user);
      toast.success("Login successful!"); // Notify successful login
  
      // Redirect to the home page
      router.push("/upm-drrm-app/home");
    } catch (error) {
      toast.error("Login failed: " + error.message); // Notify failure
    } finally {
      setIsLoading(false); // Re-enable the button after API call
    }
  };  



// Handle registration
const handleRegister = async (e) => {
  e.preventDefault();
  setIsLoading(true); // Prevent double submission

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
    console.log("reCAPTCHA Token:", recaptchaToken);

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
    console.log("Registered user:", user);
    toast.success("Registration successful! You can now log in."); // Notify success

    // Reset form and close modal
    handleCloseRegisterModal();
    setNewUsername('');
    setNewPassword('');
    setConfirmPassword('');

    // Redirect to login page
    router.push("/");
  } catch (error) {
    toast.error("Registration failed: " + error.message); // Notify failure
  } finally {
    setIsLoading(false); // Re-enable the button after API call
  }
};



  return (
    <div className='flex min-h-screen'>
      {/* Left Side - Image Section */}
      <div className="flex-1 relative">
        <Image
          src={drrmBg}
          alt="drrmBg"
          fill
          style={{ objectFit: 'cover' }}
          priority
          placeholder="blur"
        />
        <div className="absolute top-16 left-16 text-white z-10 space-y-4">
          <h1 className="text-yellow-500 font-bold tracking-wider text-[3.55rem] leading-[1.2]">
            Disaster Risk Reduction <br /> and Management <br /> for Health
          </h1>
          <h2 className="text-lg font-semibold tracking-wider" style={{ fontSize: '1.5rem', marginTop: '2rem' }}>
            University of the Philippines Manila
          </h2>
          <p className="text-md tracking-wider" style={{ fontSize: '1.2rem', marginTop: '0.5rem' }}>
            Trainings | Research | Consultancy
          </p>
        </div>
      </div>

      {/* Right Side - Login Section */}
      <div className="flex flex-col items-center justify-center w-1/4 bg-gradient-to-b from-[#5a2122] shadow-md p-8 to-[#3D0000]">
        {/* Logos Section */}
        <div className="flex items-center justify-center mb-6 space-x-3">
          <div className="ml-0">
            <Link href="https://dost.gov.ph" passHref>
              <Image src={dostlogo} alt="DOST Logo" width={70} height={70} loading="lazy" className="cursor-pointer" />
            </Link>
          </div>

          <div className="flex-shrink-0 mx-6">
            <Link href="https://upm.edu.ph" passHref>
              <Image src={upmlogo} alt="UPM Logo" width={70} height={70} loading="lazy" className="cursor-pointer" />
            </Link>
          </div>

          <div className="ml-4">
            <Link href="https://www.facebook.com/UPSimulationCenter" passHref>
              <Image src={drrmlogo} alt="DRRM Logo" width={70} height={70} loading="lazy" className="cursor-pointer" />
            </Link>
          </div>
        </div>

        {/* Title */}
        <h2 className="text-3xl font-bold mb-6 text-center text-white" style={{ fontSize: '1rem' }}>
          UPM DRRM-H INVENTORY & EQUIPMENT MONITORING MANAGEMENT SYSTEM
        </h2>

        {/* Login Form */}
        <form onSubmit={handleLogin} className='w-full max-w-sm'>
          <div className='mb-4'>
            <label className='block text-[#D4D4D4] text-sm font-bold mb-2' htmlFor='username'>
              Email
            </label>
            <input
              type='text'
              id='username'
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
              required
            />
          </div>

          <div className='mb-6 relative'>
            <label className='block text-[#D4D4D4] text-sm font-bold mb-2' htmlFor='password'>
              Password
            </label>
            <input
              type={showPassword ? 'text' : 'password'}
              id='password'
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className='shadow appearance-none border rounded w-full py-2 px-3 pr-10 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
              required
            />
            <button
              type="button"
              onClick={handleTogglePasswordVisibility}
              className="absolute inset-y-0 right-3 top-1/2 transform text-xs flex items-center text-gray-600 focus:outline-none"
            >
              {showPassword ? 'Hide' : 'Show'}
            </button>
          </div>

          <div className='flex items-center justify-between'>
            <button
              type='submit'
              disabled={isLoading}
              className={`bg-[#841919] text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline ${isLoading ? 'opacity-50 cursor-not-allowed' : 'hover:bg-[#d16767]'}`}
            >
              {isLoading ? "Loading..." : "Login"}
            </button>
            <Link href="/forgot-password" className='inline-block align-baseline font-bold text-sm text-[#D2D2D2] hover:text-[#ff4646]'>
              Forgot Password?
            </Link>
          </div>

          <div className='flex items-center mb-4 mt-4'>
            <hr className='flex-grow border-gray-300' />
            <span className='mx-2 text-[#D2D2D2]'>or</span>
            <hr className='flex-grow border-gray-300' />
          </div>

          <div className='flex space-x-4 mb-4'>
            <button className='flex items-center bg-[#841919] text-white px-4 py-2 rounded hover:bg-[#d16767]'>
              <FontAwesomeIcon icon={faFacebook} size="lg" />
              <span className='ml-2'>Login with Facebook</span>
            </button>
            <button className='flex items-center bg-[#841919] text-white px-4 py-2 rounded hover:bg-[#d16767]'>
              <FontAwesomeIcon icon={faGoogle} size="lg" />
              <span className='ml-2'>Login with Gmail</span>
            </button>
          </div>

          <div className="flex flex-col items-center justify-center w-full mt-4 space-y-2">
            <button onClick={handleOpenRegisterModal} className="inline-block font-bold text-sm text-[#D2D2D2] hover:text-[#ff4646]">
              Register
            </button>
            <Link href="https://facebook.com/UPSimulationCenter" target="_blank" className="inline-block font-bold text-sm text-[#D2D2D2] hover:text-[#ff4646]">
              UPM DRRM-H Facebook Page
            </Link>
          </div>
        </form>

        {/* Register Modal */}
        {showRegisterModal && (
          <RegisterModal
            handleClose={handleCloseRegisterModal}
            handleRegister={handleRegister}
            setNewUsername={setNewUsername}
            setNewPassword={setNewPassword}
            setConfirmPassword={setConfirmPassword}
          />
        )}
      </div>
    </div>
  );
}
