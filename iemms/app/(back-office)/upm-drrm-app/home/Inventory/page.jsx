"use client"

import React from "react";

export default function Inventory() {
  return (
    <div className="p-6 space-y-8">
      {/* Banner Section */}
      <div className="bg-[#770909] text-white p-6 rounded-lg shadow-md">
        <h1 className="text-3xl font-bold">Inventory</h1>
        <p className="mt-2 text-lg">
          Browse our available products and equipment.
        </p>
      </div>

      {/* Search Section */}
      <div className="bg-white p-6 rounded-lg shadow-md">
        <h2 className="text-2xl font-semibold text-gray-800">Search Products</h2>
        <div className="mt-4">
          <input
            type="text"
            placeholder="Search for products..."
            className="p-2 w-full border border-gray-300 rounded-md"
          />
        </div>
      </div>

      {/* Category Section */}
      <div className="bg-white p-6 rounded-lg shadow-md space-y-4">
        <h2 className="text-2xl font-semibold text-gray-800">Categories</h2>
        <div className="flex space-x-6">
          <button className="bg-[#770909] text-white p-3 rounded-md">Power Tools</button>
          <button className="bg-[#770909] text-white p-3 rounded-md">Construction Equipment</button>
          <button className="bg-[#770909] text-white p-3 rounded-md">Hand Tools</button>
          <button className="bg-[#770909] text-white p-3 rounded-md">Heavy Machinery</button>
        </div>
      </div>

      {/* Product List Section */}
      <div className="bg-white p-6 rounded-lg shadow-md space-y-6">
        <h2 className="text-2xl font-semibold text-gray-800">Available Products</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Product 1 */}
          <div className="p-4 bg-gray-100 rounded-lg shadow-sm">
            <img
              src="https://via.placeholder.com/300"
              alt="Product Image"
              className="w-full h-48 object-cover rounded-t-lg"
            />
            <h3 className="text-xl font-semibold text-gray-800 mt-4">Power Drill</h3>
            <p className="text-gray-600">A high-performance power drill for heavy-duty tasks.</p>
            <p className="text-gray-800 font-bold mt-2">$199.99</p>
            <button className="bg-[#770909] text-white p-2 rounded-md mt-4 w-full">
              Add to Cart
            </button>
          </div>

          {/* Product 2 */}
          <div className="p-4 bg-gray-100 rounded-lg shadow-sm">
            <img
              src="https://via.placeholder.com/300"
              alt="Product Image"
              className="w-full h-48 object-cover rounded-t-lg"
            />
            <h3 className="text-xl font-semibold text-gray-800 mt-4">Concrete Mixer</h3>
            <p className="text-gray-600">Durable and easy-to-use concrete mixer for construction sites.</p>
            <p className="text-gray-800 font-bold mt-2">$899.99</p>
            <button className="bg-[#770909] text-white p-2 rounded-md mt-4 w-full">
              Add to Cart
            </button>
          </div>

          {/* Product 3 */}
          <div className="p-4 bg-gray-100 rounded-lg shadow-sm">
            <img
              src="https://via.placeholder.com/300"
              alt="Product Image"
              className="w-full h-48 object-cover rounded-t-lg"
            />
            <h3 className="text-xl font-semibold text-gray-800 mt-4">Portable Generator</h3>
            <p className="text-gray-600">Reliable generator for off-grid power supply.</p>
            <p className="text-gray-800 font-bold mt-2">$549.99</p>
            <button className="bg-[#770909] text-white p-2 rounded-md mt-4 w-full">
              Add to Cart
            </button>
          </div>
        </div>
      </div>

      {/* Filter Section */}
      <div className="bg-white p-6 rounded-lg shadow-md space-y-6">
        <h2 className="text-2xl font-semibold text-gray-800">Filter by Price</h2>
        <div className="flex space-x-4">
          <input
            type="number"
            placeholder="Min Price"
            className="p-2 border border-gray-300 rounded-md"
          />
          <input
            type="number"
            placeholder="Max Price"
            className="p-2 border border-gray-300 rounded-md"
          />
          <button className="bg-[#770909] text-white p-3 rounded-md">Apply</button>
        </div>
      </div>

      {/* Featured Section */}
      <div className="bg-white p-6 rounded-lg shadow-md space-y-6">
        <h2 className="text-2xl font-semibold text-gray-800">Featured Products</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Featured Product 1 */}
          <div className="p-4 bg-gray-100 rounded-lg shadow-sm">
            <img
              src="https://via.placeholder.com/300"
              alt="Featured Product Image"
              className="w-full h-48 object-cover rounded-t-lg"
            />
            <h3 className="text-xl font-semibold text-gray-800 mt-4">Hydraulic Lift</h3>
            <p className="text-gray-600">Heavy-duty hydraulic lift for construction sites.</p>
            <p className="text-gray-800 font-bold mt-2">$1,200.00</p>
            <button className="bg-[#770909] text-white p-2 rounded-md mt-4 w-full">
              Add to Cart
            </button>
          </div>

          {/* Featured Product 2 */}
          <div className="p-4 bg-gray-100 rounded-lg shadow-sm">
            <img
              src="https://via.placeholder.com/300"
              alt="Featured Product Image"
              className="w-full h-48 object-cover rounded-t-lg"
            />
            <h3 className="text-xl font-semibold text-gray-800 mt-4">Electric Welder</h3>
            <p className="text-gray-600">Efficient and portable electric welder for quick jobs.</p>
            <p className="text-gray-800 font-bold mt-2">$499.99</p>
            <button className="bg-[#770909] text-white p-2 rounded-md mt-4 w-full">
              Add to Cart
            </button>
          </div>

          {/* Featured Product 3 */}
          <div className="p-4 bg-gray-100 rounded-lg shadow-sm">
            <img
              src="https://via.placeholder.com/300"
              alt="Featured Product Image"
              className="w-full h-48 object-cover rounded-t-lg"
            />
            <h3 className="text-xl font-semibold text-gray-800 mt-4">Excavator</h3>
            <p className="text-gray-600">Powerful excavator for earth-moving tasks.</p>
            <p className="text-gray-800 font-bold mt-2">$35,000.00</p>
            <button className="bg-[#770909] text-white p-2 rounded-md mt-4 w-full">
              Add to Cart
            </button>
          </div>
        </div>
      </div>

      {/* Contact Section */}
      <div className="bg-white p-6 rounded-lg shadow-md space-y-6">
        <h2 className="text-2xl font-semibold text-gray-800">Contact Us for Bulk Orders</h2>
        <p className="text-gray-700">
          For large orders or specific product inquiries, feel free to reach out to us.
        </p>
        <div className="text-gray-700 space-y-4">
          <p><strong>Email:</strong> sales@oursite.com</p>
          <p><strong>Phone:</strong> (123) 456-7890</p>
        </div>
      </div>
    </div>
  );
}
