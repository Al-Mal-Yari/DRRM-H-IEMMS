// iemms/components/registerModal.js
import React, { useState } from "react";
import PropTypes from "prop-types";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const RegisterModal = ({ isOpen, onClose, onSubmit }) => {
  const [newUsername, setNewUsername] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (newPassword !== confirmPassword) {
      toast.error("Passwords do not match.");
      return;
    }

    try {
      await onSubmit(newUsername, newPassword); // Call the passed onSubmit handler
      toast.success("Registration successful! Please check your email for verification.");
      setNewUsername("");
      setNewPassword("");
      setConfirmPassword("");
      onClose(); // Close modal on success
    } catch (error) {
      toast.error("Failed to register: " + error.message);
    }
  };

  // Close modal when clicking outside the content
  const handleOutsideClick = (e) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50"
      onClick={handleOutsideClick}
    >
      <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md">
        <h3 className="text-2xl font-bold mb-4">Create a New Account</h3>
        <form onSubmit={handleSubmit}>
          {/* Email */}
          <div className="mb-4">
            <label className="block text-gray-700 font-bold mb-2" htmlFor="newUsername">
              Email
            </label>
            <input
              type="email"
              id="newUsername"
              value={newUsername}
              onChange={(e) => setNewUsername(e.target.value)}
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              required
            />
          </div>

          {/* Password */}
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

          {/* Confirm Password */}
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

          {/* Submit Button */}
          <button
            type="submit"
            className="bg-[#841919] hover:bg-[#d16767] text-white font-bold py-2 px-4 rounded w-full"
          >
            Register
          </button>
        </form>

        {/* Cancel Button */}
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

// Prop validation
RegisterModal.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
  onSubmit: PropTypes.func.isRequired,
};

export default RegisterModal;
