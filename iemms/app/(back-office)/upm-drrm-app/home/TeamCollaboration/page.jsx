"use client"

import React from "react";

export default function TeamCollaboration() {
  return (
    <div className="p-6 space-y-8">
      {/* Banner Section */}
      <div className="bg-[#770909] text-white p-6 rounded-lg shadow-md">
        <h1 className="text-3xl font-bold">Team Collaboration</h1>
        <p className="mt-2 text-lg">
          Discover the tools, practices, and strategies that drive our team's success.
        </p>
      </div>

      {/* Collaboration Tools Section */}
      <div className="bg-white p-6 rounded-lg shadow-md space-y-6">
        <h2 className="text-2xl font-semibold text-gray-800">Collaboration Tools</h2>
        <p className="text-gray-700">
          We use a variety of tools to enhance communication and streamline workflows within our team. These tools ensure that everyone is on the same page and can work efficiently, regardless of location.
        </p>
        <ul className="list-disc list-inside text-gray-700">
          <li><strong>Slack:</strong> For team communication and real-time collaboration.</li>
          <li><strong>Trello:</strong> For project management and tracking progress.</li>
          <li><strong>Zoom:</strong> For virtual meetings and team discussions.</li>
          <li><strong>Google Drive:</strong> For file sharing and document collaboration.</li>
        </ul>
      </div>

      {/* Best Practices Section */}
      <div className="bg-white p-6 rounded-lg shadow-md space-y-6">
        <h2 className="text-2xl font-semibold text-gray-800">Our Best Practices</h2>
        <p className="text-gray-700">
          To ensure smooth collaboration, our team follows a set of best practices that help us stay organized and aligned:
        </p>
        <ul className="list-disc list-inside text-gray-700">
          <li><strong>Daily Standups:</strong> Quick daily meetings to align on priorities and obstacles.</li>
          <li><strong>Weekly Reviews:</strong> A weekly review of ongoing projects to assess progress and make adjustments.</li>
          <li><strong>Clear Documentation:</strong> All project details, decisions, and workflows are documented to ensure transparency and knowledge sharing.</li>
          <li><strong>Feedback Culture:</strong> Continuous feedback is encouraged to foster growth and improvement.</li>
        </ul>
      </div>

      {/* Team Communication Section */}
      <div className="bg-white p-6 rounded-lg shadow-md space-y-6">
        <h2 className="text-2xl font-semibold text-gray-800">Effective Communication</h2>
        <p className="text-gray-700">
          Communication is key to any successful team. Our team strives for clarity, openness, and responsiveness in all our interactions.
        </p>
        <ul className="list-disc list-inside text-gray-700">
          <li><strong>Open Channels:</strong> Multiple communication channels are available to cater to different needs and preferences (e.g., chat, video calls, email).</li>
          <li><strong>Active Listening:</strong> Team members actively listen to understand, not just to respond.</li>
          <li><strong>Clear Expectations:</strong> Expectations for tasks, deadlines, and deliverables are communicated clearly from the start.</li>
        </ul>
      </div>

      {/* Team Success Stories Section */}
      <div className="bg-white p-6 rounded-lg shadow-md space-y-6">
        <h2 className="text-2xl font-semibold text-gray-800">Team Success Stories</h2>
        <p className="text-gray-700">
          We are proud of our achievements and the positive outcomes that our collaborative efforts have brought. Here are some of our success stories:
        </p>
        <div className="space-y-4">
          <div className="p-4 bg-gray-100 rounded-lg shadow-sm">
            <h3 className="text-xl font-semibold text-gray-800">Project X Completion</h3>
            <p className="text-gray-700">
              Our team successfully completed Project X ahead of schedule, demonstrating the power of efficient communication and collaboration.
            </p>
          </div>

          <div className="p-4 bg-gray-100 rounded-lg shadow-sm">
            <h3 className="text-xl font-semibold text-gray-800">Cross-team Collaboration</h3>
            <p className="text-gray-700">
              By collaborating with other departments, we improved our internal processes and introduced new tools that enhanced overall efficiency.
            </p>
          </div>
        </div>
      </div>

      {/* Contact Us Section */}
      <div className="bg-white p-6 rounded-lg shadow-md space-y-6">
        <h2 className="text-2xl font-semibold text-gray-800">Get in Touch</h2>
        <p className="text-gray-700">
          If you have any questions or want to learn more about our collaboration practices, feel free to reach out to us.
        </p>
        <div className="text-gray-700 space-y-4">
          <p><strong>Email:</strong> teamcollaboration@oursite.com</p>
          <p><strong>Phone:</strong> (123) 456-7890</p>
          <p><strong>Address:</strong> 123 Collaboration Avenue, City, Country</p>
        </div>
      </div>
    </div>
  );
}
