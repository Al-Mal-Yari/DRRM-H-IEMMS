"use client"

import React, { useState } from "react";

export default function Reports() {
  // State to manage report title, content, and URL
  const [reportTitle, setReportTitle] = useState("Monthly Sales Report");
  const [reportContent, setReportContent] = useState(
    "Placeholder content for the monthly sales report. This can be edited by the user."
  );
  const [googleDocsUrl, setGoogleDocsUrl] = useState("");
  const [savedReports, setSavedReports] = useState([]);

  // Function to handle saving the report
  const saveReport = () => {
    const newReport = {
      title: reportTitle,
      content: reportContent,
      googleDocsUrl: googleDocsUrl,
      savedAt: new Date().toLocaleString(),
    };
    setSavedReports([newReport, ...savedReports]);
    alert("Report saved!");
  };

  // Function to handle viewing the report
  const viewReport = (report) => {
    alert(`Viewing report: ${report.title}`);
    // In a real application, this could redirect to a detailed report view page or open a modal
  };

  return (
    <div className="p-6 space-y-8">
      {/* Banner Section */}
      <div className="bg-[#770909] text-white p-6 rounded-lg shadow-md">
        <h1 className="text-3xl font-bold">Reports</h1>
        <p className="mt-2 text-lg">
          View, edit, and manage your reports here. Customize them as needed.
        </p>
      </div>

      {/* Edit Report Section */}
      <div className="bg-white p-6 rounded-lg shadow-md">
        <h2 className="text-2xl font-semibold text-gray-800">Edit Report</h2>
        <div className="mt-4 space-y-6">
          <div>
            <label htmlFor="report-title" className="block text-lg text-gray-800">
              Report Title
            </label>
            <input
              type="text"
              id="report-title"
              value={reportTitle}
              onChange={(e) => setReportTitle(e.target.value)}
              className="mt-2 p-2 w-full border border-gray-300 rounded-md"
              placeholder="Enter report title"
            />
          </div>

          <div>
            <label htmlFor="report-content" className="block text-lg text-gray-800">
              Report Content
            </label>
            <textarea
              id="report-content"
              value={reportContent}
              onChange={(e) => setReportContent(e.target.value)}
              className="mt-2 p-2 w-full h-40 border border-gray-300 rounded-md"
              placeholder="Enter report content"
            />
          </div>

          <div>
            <label htmlFor="google-docs-url" className="block text-lg text-gray-800">
              Google Docs URL
            </label>
            <input
              type="url"
              id="google-docs-url"
              value={googleDocsUrl}
              onChange={(e) => setGoogleDocsUrl(e.target.value)}
              className="mt-2 p-2 w-full border border-gray-300 rounded-md"
              placeholder="Enter Google Docs URL"
            />
          </div>

          <div>
            <button
              onClick={saveReport}
              className="bg-[#770909] text-white p-3 rounded-md"
            >
              Save Report
            </button>
          </div>
        </div>
      </div>

      {/* Report History Section */}
      <div className="bg-white p-6 rounded-lg shadow-md space-y-6">
        <h2 className="text-2xl font-semibold text-gray-800">Report History</h2>
        <div className="space-y-4">
          {savedReports.length === 0 ? (
            <p>No saved reports yet.</p>
          ) : (
            savedReports.map((report, index) => (
              <div key={index} className="p-4 bg-gray-100 rounded-lg shadow-sm">
                <h3 className="text-xl font-semibold text-gray-800">{report.title}</h3>
                <p className="text-gray-600">Report generated on: {report.savedAt}</p>
                <p className="text-gray-800 mt-2">{report.content}</p>
                <p className="text-gray-600 mt-2">
                  <a
                    href={report.googleDocsUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-500 underline"
                  >
                    View Google Docs
                  </a>
                </p>
                <button
                  onClick={() => viewReport(report)}
                  className="bg-[#770909] text-white p-2 rounded-md mt-4"
                >
                  View Report
                </button>
              </div>
            ))
          )}
        </div>
      </div>

      {/* Report Filter Section */}
      <div className="bg-white p-6 rounded-lg shadow-md">
        <h2 className="text-2xl font-semibold text-gray-800">Filter Reports</h2>
        <div className="mt-4 flex space-x-4">
          <input
            type="date"
            className="p-2 border border-gray-300 rounded-md"
            placeholder="Select start date"
          />
          <input
            type="date"
            className="p-2 border border-gray-300 rounded-md"
            placeholder="Select end date"
          />
          <button className="bg-[#770909] text-white p-3 rounded-md">
            Apply Filters
          </button>
        </div>
      </div>

      {/* Analytics Section */}
      <div className="bg-white p-6 rounded-lg shadow-md">
        <h2 className="text-2xl font-semibold text-gray-800">Analytics Overview</h2>
        <div className="mt-4 space-y-4">
          <p className="text-gray-700">Placeholder content for analytics data and graphs.</p>
          <div className="bg-gray-200 p-4 rounded-lg text-center">
            <h3 className="text-xl font-semibold text-gray-800">Revenue Growth</h3>
            <p className="text-gray-600">Placeholder for a graph showing revenue growth.</p>
          </div>
          <div className="bg-gray-200 p-4 rounded-lg text-center">
            <h3 className="text-xl font-semibold text-gray-800">Product Performance</h3>
            <p className="text-gray-600">Placeholder for a graph showing product performance.</p>
          </div>
        </div>
      </div>
    </div>
  );
}
