// iemms/components/registerModal.js
import React, { useState } from "react";

const RegisterModal = ({ isOpen, onClose, onSubmit }) => {
  const [newUsername, setNewUsername] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  // Inside your handleRegister function, after successful registration
const handleRegister = async (e) => {
  e.preventDefault();
  if (newPassword !== confirmPassword) {
    alert("Passwords do not match.");
    return;
  }
  try {
    const user = await registerWithEmailAndPassword(newUsername, newPassword);
    console.log("Registered user:", user);

    const actionCodeSettings = {
      url: 'https://yourdomain.com/finishSignUp?cartId=1234', // update with actual redirect URL
      handleCodeInApp: true,
    };

    await sendSignInLinkToEmail(auth, newUsername, actionCodeSettings);
    window.localStorage.setItem('emailForSignIn', newUsername); // Store email locally
    alert("Verification email sent.");
    setShowRegisterModal(false); // Close modal on success
  } catch (error) {
    alert("Failed to register: " + error.message);
  }
};

if (!isOpen) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
      <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md">
        <h3 className="text-2xl font-bold mb-4">Create a New Account</h3>
        <form onSubmit={handleRegisterSubmit}>
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
          <button type="submit" className="bg-[#841919] hover:bg-[#d16767] text-white font-bold py-2 px-4 rounded w-full">
            Register
          </button>
        </form>
        <button 
          onClick={onClose} 
          className="mt-4 inline-block font-bold text-sm text-[#841919] hover:text-[#d16767]"
        >
          Cancel
        </button>
      </div>
    </div>
  );
};

export default RegisterModal;
