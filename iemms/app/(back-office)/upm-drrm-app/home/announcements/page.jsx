"use client";

import React, { useState } from "react";

export default function Announcement() {
  // State for announcement details
  const [announcements, setAnnouncements] = useState([
    {
      id: 1,
      title: "Upcoming Fire Drill 2024",
      description: "A mandatory fire drill will be conducted on 15th December 2024.",
      date: "2024-12-15",
      status: "Scheduled",
    },
    {
      id: 2,
      title: "First Aid Training in January",
      description: "First Aid and CPR certification training scheduled for January 2024.",
      date: "2024-01-10",
      status: "Planned",
    },
  ]);

  // State for edit mode
  const [editMode, setEditMode] = useState(false);

  // Add and delete functions
  const addAnnouncement = () => {
    setAnnouncements((prev) => [
      ...prev,
      {
        id: Date.now(),
        title: "",
        description: "",
        date: "",
        status: "Planned",
      },
    ]);
  };

  const deleteAnnouncement = (id) => {
    setAnnouncements((prev) =>
      prev.filter((announcement) => announcement.id !== id)
    );
  };

  // Update function for announcements
  const updateAnnouncement = (index, key, value) => {
    const updatedAnnouncements = [...announcements];
    updatedAnnouncements[index][key] = value;
    setAnnouncements(updatedAnnouncements);
  };

  // Toggle edit mode
  const toggleEditMode = () => {
    setEditMode((prev) => !prev);
  };

  return (
    <div className="p-6 space-y-8">
      {/* Dashboard Banner */}
      <div className="bg-[#770909] text-white p-6 rounded-lg shadow-md">
        <h1 className="text-2xl font-bold">Announcements</h1>
        <p className="mt-2">
          Stay informed about the latest announcements regarding upcoming
          events, trainings, and projects.
        </p>
      </div>

      {/* Edit Mode Toggle */}
      <div className="flex justify-end">
        <button
          onClick={toggleEditMode}
          className="bg-[#840404] text-white px-4 py-2 rounded shadow-md"
        >
          {editMode ? "Save Changes" : "Edit"}
        </button>
      </div>

      {/* Announcements Section */}
      <div className="bg-white p-6 rounded-lg shadow-md space-y-6">
        <h2 className="text-xl font-semibold text-gray-800">Latest Announcements</h2>

        {/* Add Announcement Button */}
        {editMode && (
          <button
            onClick={addAnnouncement}
            className="bg-[#8C0808] text-white px-4 py-2 rounded"
          >
            + Add Announcement
          </button>
        )}

        {/* Announcements List */}
        {announcements.map((announcement, index) => (
          <div
            key={announcement.id}
            className="p-4 bg-gray-100 rounded-md shadow-sm space-y-2"
          >
            {editMode ? (
              <>
                <input
                  type="text"
                  value={announcement.title}
                  placeholder="Announcement Title"
                  onChange={(e) =>
                    updateAnnouncement(index, "title", e.target.value)
                  }
                  className="w-full p-2 border rounded"
                />
                <textarea
                  value={announcement.description}
                  placeholder="Description"
                  onChange={(e) =>
                    updateAnnouncement(index, "description", e.target.value)
                  }
                  className="w-full p-2 border rounded"
                />
                <input
                  type="date"
                  value={announcement.date}
                  onChange={(e) =>
                    updateAnnouncement(index, "date", e.target.value)
                  }
                  className="w-full p-2 border rounded"
                />
                <select
                  value={announcement.status}
                  onChange={(e) =>
                    updateAnnouncement(index, "status", e.target.value)
                  }
                  className="w-full p-2 border rounded"
                >
                  <option value="Scheduled">Scheduled</option>
                  <option value="Planned">Planned</option>
                  <option value="Completed">Completed</option>
                </select>
                <button
                  onClick={() => deleteAnnouncement(announcement.id)}
                  className="bg-[#C51616] text-white px-2 py-1 rounded"
                >
                  Delete
                </button>
              </>
            ) : (
              <>
                <h3 className="font-semibold text-gray-700">{announcement.title}</h3>
                <p className="text-gray-500">{announcement.date}</p>
                <p className="text-gray-600">{announcement.description}</p>
                <p className="text-gray-500">{announcement.status}</p>
              </>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
