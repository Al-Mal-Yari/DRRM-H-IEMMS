"use client"; // Mark this file as a client component

import { useState } from "react";

import { Roboto } from '@next/font/google';
import Link from "next/link";
import Image from "next/image";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faGoogle } from '@fortawesome/free-brands-svg-icons'; // Import the Facebook and Google icons
import { useRouter } from "next/navigation"; // Import useRouter for navigation
import drrmBg from './bgcover.jpg';
import Logo from './logo.png';
import upmlogo from './upmlogo.png';
import drrmlogo from './drrmlogo.png';
import dostlogo from './dostlogo.png';

const roboto = Roboto({
    subsets: ['latin'],
    weight: ['400', '700'],
  })
export default function Home() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const router = useRouter(); // Initialize useRouter

  const handleLogin = (e) => {
    e.preventDefault();
    // Here, you would typically check the credentials
    console.log("Logging in with:", username, password);

    // After successful login, redirect to the dashboard
    router.push("/main/home/overview"); // Adjust the path to your dashboard
  };

  return (
    <div className='flex min-h-screen'>
      {/* Left Side - Image Section */}
        <div className="flex-1 relative">
          <Image
            src={drrmBg}
            alt="drrmBg"
            fill // Use fill instead of layout
            style={{ objectFit: 'cover' }} // Set the image to cover the container
          />
          <div className="absolute inset-0 bg-black opacity-30"></div> {/* Overlay for a modern look */}

            <div className="absolute bottom-5 right-4 flex flex-col space-y-2 z-10"> {/* Parent container in the lower-right corner */}
              {/* DOST Logo */}
              <div className="relative"> {/* Adjust position here if needed */}
                <Image src={dostlogo} alt="DOST Logo" width={90} height={90} /> {/* Slightly larger DOST logo */}
              </div>

              {/* UPM Logo */}
              <div className="relative mt-2, ml-2"> {/* Adjust `mt-1` to control spacing */}
                <Image src={upmlogo} alt="UPM Logo" width={70} height={70} />
              </div>

              {/* DRRM Logo */}
              <div className="relative mt-2, ml-1.5"> {/* Adjust `mt-1` to control spacing */}
                <Image src={drrmlogo} alt="DRRM Logo" width={72} height={72} />
              </div>
            </div>


    </div>

      {/* Right Side - Login Section */}
      <div className="flex items-center justify-center w-1/4 bg-gradient-to-b from-[#6D0203] shadow-md p-8 to-[#3D0000]">
      <div className="w-full flex flex-col items-center">
        {/* Logo Section */}
        <div className="mb-6"> {/* Adjust the margin to control spacing */}
          <Image
            src={Logo}
            alt="Lettuce Logo"
            width={100} // Custom width
            height={100} // Custom height
            className="object-contain" // Ensure the image fits within the specified width and height
          />
        </div>

        {/* Title */}
        <h2 className="text-3xl font-bold mb-6 text-center text-white" style={{fontSize: '1.25rem'}}>
          UPM DRRM-H INVENTORY-EQUIPMENT & MONITORING MANAGEMENT SYSTEM
        </h2>


          <form onSubmit={handleLogin} className='w-full max-w-sm'>
            <div className='mb-4'>
              <label className='block text-[#D4D4D4] text-sm font-bold mb-2' htmlFor='username'>
                Username
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
                className='bg-[#841919] hover:bg-[#d16767] text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline'
              >
                Login
              </button>
              <Link 
                href="/forgot-password" 
                className='inline-block align-baseline font-bold text-sm text-[#D2D2D2] hover:text-[#ff4646]'
              >
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
              <Link 
                href="/register" 
                className="inline-block font-bold text-sm text-[#D2D2D2] hover:text-[#ff4646]"
              >
                Register
              </Link>
              <Link
                href="https://facebook.com/UPSimulationCenter" // Make sure to include "https://" to open the link correctly
                target="_blank" // Opens the Facebook page in a new tab
                className="inline-block font-bold text-sm text-[#D2D2D2] hover:text-[#ff4646]"
              >
                UPM DRRM-H Facebook Page
              </Link>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}