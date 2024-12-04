"use client"

import React from "react";

export default function Borrow() {
  return (
    <div className="p-6 space-y-8">
      {/* Banner Section */}
      <div className="bg-[#770909] text-white p-6 rounded-lg shadow-md">
        <h1 className="text-3xl font-bold">Borrow Equipment & Tools</h1>
        <p className="mt-2 text-lg">
          Explore our wide range of tools and equipment available for borrowing.
        </p>
      </div>

      {/* Borrowing Process Section */}
      <div className="bg-white p-6 rounded-lg shadow-md space-y-6">
        <h2 className="text-2xl font-semibold text-gray-800">How It Works</h2>
        <p className="text-gray-700">
          Our goal is to provide access to high-quality tools and equipment for
          all your construction, repair, and DIY needs. Follow these simple steps
          to borrow from our collection:
        </p>
        <ol className="list-decimal list-inside text-gray-700 space-y-2">
          <li>Browse our available equipment and tools.</li>
          <li>Request the tools you need by selecting them from our catalog.</li>
          <li>Fill out a borrowing request form with your contact details and rental period.</li>
          <li>Wait for confirmation of your request.</li>
          <li>Pick up the equipment or have it delivered (depending on location and availability).</li>
          <li>Use the tools for your project and return them on time to avoid additional charges.</li>
        </ol>
      </div>

      {/* Equipment Catalog Section */}
      <div className="bg-white p-6 rounded-lg shadow-md space-y-6">
        <h2 className="text-2xl font-semibold text-gray-800">Our Equipment & Tools</h2>
        <p className="text-gray-700">
          We offer a variety of equipment and tools for different purposes, ranging
          from construction machinery to basic hand tools. Below is a brief list of
          some of our most popular items available for borrowing:
        </p>
        <ul className="list-disc list-inside text-gray-700 space-y-2">
          <li><strong>Power Tools:</strong> Drills, saws, sanders, grinders, etc.</li>
          <li><strong>Heavy Machinery:</strong> Excavators, backhoes, forklifts, etc.</li>
          <li><strong>Hand Tools:</strong> Hammers, screwdrivers, wrenches, etc.</li>
          <li><strong>Specialized Equipment:</strong> Welding machines, scaffolding, ladders, etc.</li>
        </ul>
      </div>

      {/* Borrowing Requirements Section */}
      <div className="bg-white p-6 rounded-lg shadow-md space-y-6">
        <h2 className="text-2xl font-semibold text-gray-800">Borrowing Requirements</h2>
        <p className="text-gray-700">
          Before borrowing any equipment, please make sure you meet the following
          criteria:
        </p>
        <ul className="list-disc list-inside text-gray-700 space-y-2">
          <li><strong>Age:</strong> Borrowers must be at least 18 years old.</li>
          <li><strong>Identification:</strong> A valid ID must be provided at the time of borrowing.</li>
          <li><strong>Deposit:</strong> A refundable deposit may be required depending on the equipment.</li>
          <li><strong>Experience:</strong> Some tools may require prior experience or certification to borrow. For safety, we may ask for proof of competence or offer training.</li>
        </ul>
      </div>

      {/* Borrowing Terms Section */}
      <div className="bg-white p-6 rounded-lg shadow-md space-y-6">
        <h2 className="text-2xl font-semibold text-gray-800">Terms & Conditions</h2>
        <p className="text-gray-700">
          By borrowing any equipment, you agree to the following terms:
        </p>
        <ul className="list-disc list-inside text-gray-700 space-y-2">
          <li>All tools must be returned on time and in good condition.</li>
          <li>You are responsible for any damage to or loss of the equipment while in your possession.</li>
          <li>If you fail to return tools on time, late fees may apply.</li>
          <li>In case of any malfunction, please report immediately to avoid further damage or issues.</li>
        </ul>
      </div>

      {/* FAQ Section */}
      <div className="bg-white p-6 rounded-lg shadow-md space-y-6">
        <h2 className="text-2xl font-semibold text-gray-800">Frequently Asked Questions (FAQ)</h2>
        <div className="text-gray-700 space-y-4">
          <h3 className="font-semibold">What is the borrowing period?</h3>
          <p>Our borrowing periods vary from daily to weekly rentals, depending on the equipment. Specific tools may have customized rental times based on availability.</p>

          <h3 className="font-semibold">Can I reserve equipment in advance?</h3>
          <p>Yes, we recommend reserving tools and equipment in advance, especially for high-demand items.</p>

          <h3 className="font-semibold">What happens if the equipment is damaged?</h3>
          <p>If any damage occurs, please notify us immediately. Depending on the extent of the damage, repair costs or replacement fees may apply.</p>
        </div>
      </div>

      {/* Contact Information Section */}
      <div className="bg-white p-6 rounded-lg shadow-md space-y-6">
        <h2 className="text-2xl font-semibold text-gray-800">Contact Us</h2>
        <p className="text-gray-700">
          If you have any questions, need assistance, or would like to reserve equipment, feel free to reach out to us:
        </p>
        <div className="text-gray-700 space-y-4">
          <p><strong>Email:</strong> borrow@oursite.com</p>
          <p><strong>Phone:</strong> (123) 456-7890</p>
          <p><strong>Address:</strong> 123 Main Street, City, Country</p>
        </div>
      </div>
    </div>
  );
}
