"use client";

import { useState, useEffect, useMemo, useCallback } from "react";
import { getAuth } from "firebase/auth";
//import { getAnalytics } from "firebase/analytics"; //analytics is not implemented yet
import { initializeApp, getApps, getApp } from "firebase/app"; // Import getApps and getApp
import { loginWithEmailAndPassword, registerWithEmailAndPassword } from "../firebase/auth";
import { useRouter } from "next/navigation";
import { Roboto } from 'next/font/google';
import Link from "next/link";
import Image from "next/image";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faGoogle } from '@fortawesome/free-brands-svg-icons';
import drrmBg from './bgcover.jpg';
import upmlogo from './upmlogo.png';
import drrmlogo from './drrmlogo.png';
import dostlogo from './dostlogo.png';

const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
  authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN,
  databaseURL: process.env.NEXT_PUBLIC_FIREBASE_DATABASE_URL,
  projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
  storageBucket: process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.NEXT_PUBLIC_FIREBASE_APP_ID,
};

console.log("Firebase Config:", firebaseConfig);//this is needed to be placed before the firebase was initialized

// Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();
const auth = getAuth(app); // Ensure this line is correct

// Conditionally initialize Analytics if it's a required feature
/*let analytics;
if (typeof window !== "undefined" && process.env.NEXT_PUBLIC_ENABLE_ANALYTICS === "true") {
  try {
    analytics = getAnalytics(app);
  } catch (error) {
    console.error("Analytics initialization error:", error);
  }
}*/ //analytics is not implemented yet

export { app, auth };

const roboto = Roboto({
  subsets: ['latin'],
  weight: ['400', '700'],
  display: 'swap',
});

export default function Home() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [showRegisterModal, setShowRegisterModal] = useState(false);
  const [newUsername, setNewUsername] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [currentTextIndex, setCurrentTextIndex] = useState(0);
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(false);

  const handleOpenRegisterModal = () => { setShowRegisterModal(true); };
  
  const handleCloseRegisterModal = () => { setShowRegisterModal(false); };  

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const user = await loginWithEmailAndPassword(username, password);
      console.log("Logged in user:", user);
  
      // Redirect to dashboard after login
      router.push("/inventory/home/overview");
    } catch (error) {
      alert("Failed to login: " + error.message);
    }
  };

  const handleRegister = async (e) => {
    e.preventDefault();
    if (newPassword !== confirmPassword) {
      alert("Passwords do not match.");
      return;
    }
    try {
      const user = await registerWithEmailAndPassword(newUsername, newPassword);
      console.log("Registered user:", user);
      setShowRegisterModal(false); // Close modal on success
    } catch (error) {
      alert("Failed to register: " + error.message);
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
          <div className="ml-0"> {/* Adjust margin-right to move DOST logo more to the left */}
            <Link href="https://dost.gov.ph" passHref>
              <Image src={dostlogo} alt="DOST Logo" width={70} height={70} loading="lazy" className="cursor-pointer" />
            </Link>
          </div>

          <div className="flex-shrink-0 mx-6"> {/* Adjust margin-x to control spacing around UPM logo */}
            <Link href="https://upm.edu.ph" passHref>
              <Image src={upmlogo} alt="UPM Logo" width={70} height={70} loading="lazy" className="cursor-pointer" />
            </Link>
          </div>

          <div className="ml-4"> {/* Adjust margin-left to move DRRM logo more to the right */}
            <Link href="https://www.facebook.com/UPSimulationCenter" passHref>
              <Image src={drrmlogo} alt="DRRM Logo" width={70} height={70} loading="lazy" className="cursor-pointer" />
            </Link>
          </div>
        </div>



        {/* Title */}
        <h2 className="text-3xl font-bold mb-6 text-center text-white" style={{ fontSize: '1rem' }}>
          UPM DRRM-H INVENTORY & EQUIPMENT MONITORING MANAGEMENT SYSTEM
        </h2>

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

          <div className='mb-6'>
            <label className='block text-[#D4D4D4] text-sm font-bold mb-2' htmlFor='password'>
              Password
            </label>
            <input
              type='password'
              id='password'
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
              required
            />
          </div>

          <div className='flex items-center justify-between'>
            <button 
              type='submit' 
              disabled={isLoading}
              className={`bg-[#841919] text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline ${
                isLoading ? 'opacity-50 cursor-not-allowed' : 'hover:bg-[#d16767]'
              }`}
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
            <button 
              onClick={handleOpenRegisterModal} 
              className="inline-block font-bold text-sm text-[#D2D2D2] hover:text-[#ff4646]"
            >
              Register
            </button>
            <Link
              href="https://facebook.com/UPSimulationCenter"
              target="_blank"
              className="inline-block font-bold text-sm text-[#D2D2D2] hover:text-[#ff4646]"
            >
              UPM DRRM-H Facebook Page
            </Link>
          </div>
        </form>

      </div>

      {/* Register Modal */}
      {showRegisterModal && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
          <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md">
            <h3 className="text-2xl font-bold mb-4">Create a New Account</h3>
            <form onSubmit={handleRegister}>
              <div className="mb-4">
                <label className="block text-gray-700 font-bold mb-2" htmlFor="newUsername">
                  Email
                </label>
                <input
                  type="text"
                  id="newUsername"
                  value={newUsername}
                  onChange={(e) => setNewUsername(e.target.value)}
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  required
                />
              </div>
              <div className="mb-4">
                <label className="block text-gray-700 font-bold mb-2" htmlFor="newPassword">
                  Password
                </label>
                <input
                  type="password"
                  id="newPassword"
                  value={newPassword}
                  onChange={(e) => setNewPassword(e.target.value)}
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  required
                />
              </div>
              <div className="mb-6">
                <label className="block text-gray-700 font-bold mb-2" htmlFor="confirmPassword">
                  Confirm Password
                </label>
                <input
                  type="password"
                  id="confirmPassword"
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  required
                />
              </div>
              <button
                type="submit"
                className="bg-[#841919] hover:bg-[#d16767] text-white font-bold py-2 px-4 rounded w-full"
              >
                Register
              </button>
            </form>
            <button
              onClick={handleCloseRegisterModal}
              className="mt-4 inline-block font-bold text-sm text-[#841919] hover:text-[#d16767]"
            >
              Cancel
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
