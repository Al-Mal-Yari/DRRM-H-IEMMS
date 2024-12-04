"use client"

import React from "react";

export default function Return() {
  return (
    <div className="p-6 space-y-8">
      {/* Banner Section */}
      <div className="bg-[#770909] text-white p-6 rounded-lg shadow-md">
        <h1 className="text-3xl font-bold">Return Equipment & Tools</h1>
        <p className="mt-2 text-lg">
          Return your borrowed equipment and tools easily with our simple return process.
        </p>
      </div>

      {/* Return Process Section */}
      <div className="bg-white p-6 rounded-lg shadow-md space-y-6">
        <h2 className="text-2xl font-semibold text-gray-800">How to Return Equipment</h2>
        <p className="text-gray-700">
          Returning borrowed equipment is simple! Follow the steps below to ensure a smooth return:
        </p>
        <ol className="list-decimal list-inside text-gray-700 space-y-2">
          <li>Check the return date and make sure the equipment is returned on time.</li>
          <li>Inspect the equipment for any damage, cleanliness, or missing parts.</li>
          <li>Fill out the return form and provide details of the equipment you’re returning.</li>
          <li>Drop off the tools at the designated location or schedule a pickup.</li>
          <li>Get a confirmation of return and ensure any necessary paperwork is signed.</li>
          <li>Receive your deposit back (if applicable) after the inspection process.</li>
        </ol>
      </div>

      {/* Return Conditions Section */}
      <div className="bg-white p-6 rounded-lg shadow-md space-y-6">
        <h2 className="text-2xl font-semibold text-gray-800">Return Conditions</h2>
        <p className="text-gray-700">
          To ensure the smooth return of equipment, please follow these guidelines:
        </p>
        <ul className="list-disc list-inside text-gray-700 space-y-2">
          <li><strong>Time of Return:</strong> Equipment must be returned within the agreed rental period to avoid late fees.</li>
          <li><strong>Condition of Equipment:</strong> The equipment must be returned in the same condition as when it was borrowed. If it's damaged, report it immediately.</li>
          <li><strong>Cleaning:</strong> Please clean the tools before returning them. A cleaning fee may apply if they are returned dirty.</li>
          <li><strong>Missing Parts:</strong> Ensure that all components of the equipment are returned. Missing parts may result in additional charges.</li>
        </ul>
      </div>

      {/* Return Policies Section */}
      <div className="bg-white p-6 rounded-lg shadow-md space-y-6">
        <h2 className="text-2xl font-semibold text-gray-800">Return Policies</h2>
        <p className="text-gray-700">
          By returning equipment, you agree to the following policies:
        </p>
        <ul className="list-disc list-inside text-gray-700 space-y-2">
          <li>Late returns will incur a late fee. Make sure to return the equipment on time.</li>
          <li>If the equipment is damaged, you may be responsible for repair or replacement costs.</li>
          <li>If the equipment is not returned, or is severely damaged, you may be charged for the full replacement cost.</li>
          <li>If you return equipment earlier than the scheduled period, no refund or discount will be provided for unused rental time.</li>
        </ul>
      </div>

      {/* FAQ Section */}
      <div className="bg-white p-6 rounded-lg shadow-md space-y-6">
        <h2 className="text-2xl font-semibold text-gray-800">Frequently Asked Questions (FAQ)</h2>
        <div className="text-gray-700 space-y-4">
          <h3 className="font-semibold">Can I return the equipment early?</h3>
          <p>Yes, you can return the equipment early, but no refund will be issued for the unused rental time.</p>

          <h3 className="font-semibold">What if the equipment is damaged?</h3>
          <p>If the equipment is damaged during use, please notify us immediately. We will assess the damage and inform you of any additional fees or charges.</p>

          <h3 className="font-semibold">What happens if I miss the return date?</h3>
          <p>If the return date is missed, a late fee will be applied, and you may lose the privilege to borrow tools in the future.</p>
        </div>
      </div>

      {/* Contact Information Section */}
      <div className="bg-white p-6 rounded-lg shadow-md space-y-6">
        <h2 className="text-2xl font-semibold text-gray-800">Contact Us</h2>
        <p className="text-gray-700">
          If you have any questions about returning your equipment or need assistance, contact us:
        </p>
        <div className="text-gray-700 space-y-4">
          <p><strong>Email:</strong> return@oursite.com</p>
          <p><strong>Phone:</strong> (123) 456-7890</p>
          <p><strong>Address:</strong> 123 Main Street, City, Country</p>
        </div>
      </div>
    </div>
  );
}
