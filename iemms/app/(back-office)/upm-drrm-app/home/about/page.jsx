"use client"

import React from "react";

export default function About() {
  return (
    <div className="p-6 space-y-8">
      {/* Banner Section */}
      <div className="bg-[#770909] text-white p-6 rounded-lg shadow-md">
        <h1 className="text-3xl font-bold">About Us</h1>
        <p className="mt-2 text-lg">
          Learn more about our mission, vision, and the impact we are making.
        </p>
      </div>

      {/* Mission Section */}
      <div className="bg-white p-6 rounded-lg shadow-md space-y-6">
        <h2 className="text-2xl font-semibold text-gray-800">Our Mission</h2>
        <p className="text-gray-700">
          Our mission is to provide accessible training programs and resources
          that empower communities to be prepared for emergencies. Through
          dedicated efforts, we aim to enhance safety, raise awareness, and
          create sustainable change in disaster response preparedness.
        </p>
        <p className="text-gray-700">
          We believe in the power of education and community collaboration. Our
          goal is to ensure that every individual is well-equipped with the
          knowledge and skills to respond effectively in times of crisis.
        </p>
      </div>

      {/* Vision Section */}
      <div className="bg-white p-6 rounded-lg shadow-md space-y-6">
        <h2 className="text-2xl font-semibold text-gray-800">Our Vision</h2>
        <p className="text-gray-700">
          We envision a future where every community is empowered to face
          emergencies with confidence. A world where proactive training programs
          and collaboration between various sectors play a pivotal role in
          disaster management and community safety.
        </p>
        <p className="text-gray-700">
          Our vision is to be the leading organization providing comprehensive
          emergency response training and resources, equipping individuals with
          the skills and tools to make a real difference.
        </p>
      </div>

      {/* Values Section */}
      <div className="bg-white p-6 rounded-lg shadow-md space-y-6">
        <h2 className="text-2xl font-semibold text-gray-800">Our Values</h2>
        <ul className="list-disc list-inside text-gray-700">
          <li><strong>Integrity:</strong> We operate with transparency and uphold the highest standards of ethical behavior in all our actions.</li>
          <li><strong>Community Collaboration:</strong> We believe in the power of collective action and work closely with local communities to drive impact.</li>
          <li><strong>Excellence:</strong> We strive for excellence in everything we do, ensuring the highest quality in our programs and services.</li>
          <li><strong>Innovation:</strong> We embrace new ideas and technologies to continuously improve our training methodologies and effectiveness.</li>
          <li><strong>Empowerment:</strong> We empower individuals and communities to take control of their own safety and contribute to a safer society.</li>
        </ul>
      </div>

      {/* Our Story Section */}
      <div className="bg-white p-6 rounded-lg shadow-md space-y-6">
        <h2 className="text-2xl font-semibold text-gray-800">Our Story</h2>
        <p className="text-gray-700">
          Our organization was founded in [Year] with the vision of creating a
          safer and more prepared society. What started as a small initiative to
          distribute emergency kits and educate a few communities has now grown
          into a nationwide effort, training thousands of individuals annually.
        </p>
        <p className="text-gray-700">
          Over the years, we have expanded our reach, forming strategic
          partnerships with local government units, non-governmental organizations,
          and private sectors. Together, we have built a network of first responders,
          volunteers, and emergency management professionals who share the same
          commitment to saving lives.
        </p>
        <p className="text-gray-700">
          Today, we continue to work towards expanding our training programs,
          improving disaster preparedness, and creating a world where everyone is
          ready to respond to emergencies.
        </p>
      </div>

      {/* Team Section */}
      <div className="bg-white p-6 rounded-lg shadow-md space-y-6">
        <h2 className="text-2xl font-semibold text-gray-800">Meet Our Team</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Lead Developer */}
          <div className="p-4 bg-gray-100 rounded-lg shadow-sm">
            <img
              src="https://via.placeholder.com/150"
              alt="Allaine T. Mallari"
              className="w-full h-48 object-cover rounded-t-lg"
            />
            <h3 className="text-xl font-semibold text-gray-800 mt-4">Allaine T. Mallari</h3>
            <p className="text-gray-600">Lead Developer</p>
            <p className="text-gray-700 mt-2">
              Allaine leads the development of our technological platforms, ensuring they meet the needs of both the users and the organization.
            </p>
          </div>

          {/* Program Director */}
          <div className="p-4 bg-gray-100 rounded-lg shadow-sm">
            <img
              src="https://via.placeholder.com/150"
              alt="Dr. Carlos Primero Gundran"
              className="w-full h-48 object-cover rounded-t-lg"
            />
            <h3 className="text-xl font-semibold text-gray-800 mt-4">Dr. Carlos Primero Gundran</h3>
            <p className="text-gray-600">Program Director</p>
            <p className="text-gray-700 mt-2">
              Dr. Gundran oversees all programs, ensuring they align with our vision and mission. He is dedicated to making a tangible impact on disaster preparedness.
            </p>
          </div>

          {/* Chief IT Officer */}
          <div className="p-4 bg-gray-100 rounded-lg shadow-sm">
            <img
              src="https://via.placeholder.com/150"
              alt="Engr. Ralph Visaya"
              className="w-full h-48 object-cover rounded-t-lg"
            />
            <h3 className="text-xl font-semibold text-gray-800 mt-4">Engr. Ralph Visaya</h3>
            <p className="text-gray-600">Chief IT Officer</p>
            <p className="text-gray-700 mt-2">
              Engr. Visaya ensures our IT infrastructure supports the organization’s growth and effectiveness, driving innovations in emergency management technologies.
            </p>
          </div>
        </div>
      </div>

      {/* Contact Information Section */}
      <div className="bg-white p-6 rounded-lg shadow-md space-y-6">
        <h2 className="text-2xl font-semibold text-gray-800">Contact Us</h2>
        <p className="text-gray-700">
          If you would like to learn more about our programs, collaborate with us,
          or get involved, please don't hesitate to reach out!
        </p>
        <div className="text-gray-700 space-y-4">
          <p><strong>Email:</strong> contact@oursite.com</p>
          <p><strong>Phone:</strong> (123) 456-7890</p>
          <p><strong>Address:</strong> 123 Main Street, City, Country</p>
        </div>
      </div>
    </div>
  );
}
