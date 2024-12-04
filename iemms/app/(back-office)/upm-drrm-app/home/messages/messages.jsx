"use client"

import React from "react";

export default function messages() {
  return (
    <div className="p-6 space-y-8">
      {/* Banner Section */}
      <div className="bg-[#005B96] text-white p-6 rounded-lg shadow-md">
        <h1 className="text-3xl font-bold">Messages</h1>
        <p className="mt-2 text-lg">
          Stay updated with the latest notifications and messages related to your equipment and tool rentals.
        </p>
      </div>

      {/* Message List Section */}
      <div className="bg-white p-6 rounded-lg shadow-md space-y-6">
        <h2 className="text-2xl font-semibold text-gray-800">Your Messages</h2>
        <p className="text-gray-700">
          Below are the latest messages and notifications related to your borrowed equipment and tool rental status:
        </p>
        
        <div className="space-y-4">
          {/* Sample Message 1 */}
          <div className="border-l-4 border-blue-500 bg-gray-50 p-4 shadow-sm">
            <h3 className="font-semibold text-gray-800">Reminder: Return Your Equipment</h3>
            <p className="text-gray-700">Your equipment is due for return in 2 days. Please ensure it's returned on time to avoid late fees.</p>
            <p className="text-sm text-gray-500">Sent on: December 2, 2024</p>
          </div>

          {/* Sample Message 2 */}
          <div className="border-l-4 border-red-500 bg-gray-50 p-4 shadow-sm">
            <h3 className="font-semibold text-gray-800">Overdue Equipment</h3>
            <p className="text-gray-700">Your borrowed equipment is overdue. Please return it immediately to avoid further charges.</p>
            <p className="text-sm text-gray-500">Sent on: November 30, 2024</p>
          </div>

          {/* Sample Message 3 */}
          <div className="border-l-4 border-green-500 bg-gray-50 p-4 shadow-sm">
            <h3 className="font-semibold text-gray-800">Deposit Refund Processed</h3>
            <p className="text-gray-700">Your equipment was returned in good condition, and the deposit refund has been processed successfully.</p>
            <p className="text-sm text-gray-500">Sent on: November 25, 2024</p>
          </div>
        </div>
      </div>

      {/* Message Filters Section */}
      <div className="bg-white p-6 rounded-lg shadow-md space-y-6">
        <h2 className="text-2xl font-semibold text-gray-800">Filter Messages</h2>
        <p className="text-gray-700">
          You can filter your messages based on categories to make it easier to find relevant information:
        </p>
        <div className="flex space-x-4">
          <button className="bg-gray-200 px-4 py-2 rounded-lg text-gray-700">All</button>
          <button className="bg-gray-200 px-4 py-2 rounded-lg text-gray-700">Reminders</button>
          <button className="bg-gray-200 px-4 py-2 rounded-lg text-gray-700">Overdue</button>
          <button className="bg-gray-200 px-4 py-2 rounded-lg text-gray-700">Refunds</button>
        </div>
      </div>

      {/* Archive Section */}
      <div className="bg-white p-6 rounded-lg shadow-md space-y-6">
        <h2 className="text-2xl font-semibold text-gray-800">Archived Messages</h2>
        <p className="text-gray-700">
          View messages that you have archived. These messages will not appear in your inbox but can be accessed here for future reference.
        </p>
        <div className="space-y-4">
          {/* Archived Message 1 */}
          <div className="border-l-4 border-gray-300 bg-gray-50 p-4 shadow-sm">
            <h3 className="font-semibold text-gray-800">Archived: Payment Confirmation</h3>
            <p className="text-gray-700">Your payment for equipment rental has been successfully received. Thank you for your prompt payment.</p>
            <p className="text-sm text-gray-500">Sent on: November 18, 2024</p>
          </div>

          {/* Archived Message 2 */}
          <div className="border-l-4 border-gray-300 bg-gray-50 p-4 shadow-sm">
            <h3 className="font-semibold text-gray-800">Archived: Equipment Maintenance Required</h3>
            <p className="text-gray-700">Your rented equipment requires maintenance. Please take it to the designated service center for inspection.</p>
            <p className="text-sm text-gray-500">Sent on: November 10, 2024</p>
          </div>
        </div>
      </div>

      {/* Contact Information Section */}
      <div className="bg-white p-6 rounded-lg shadow-md space-y-6">
        <h2 className="text-2xl font-semibold text-gray-800">Need Help?</h2>
        <p className="text-gray-700">
          If you have any questions regarding your messages or need assistance, feel free to reach out to us:
        </p>
        <div className="text-gray-700 space-y-4">
          <p><strong>Email:</strong> support@oursite.com</p>
          <p><strong>Phone:</strong> (123) 456-7890</p>
          <p><strong>Address:</strong> 123 Main Street, City, Country</p>
        </div>
      </div>
    </div>
  );
}
