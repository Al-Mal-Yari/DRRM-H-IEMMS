"use client"

import React, { useState } from "react";

export default function Overview() {
  // State for target participants
  const [targetParticipants, setTargetParticipants] = useState({
    perTraining: [
      { id: 1, name: "Mass Casualty Incident", participants: 50, year: 2023 },
      { id: 2, name: "Fire Safety and Evacuation", participants: 30, year: 2024 },
    ],
  });

  // State for ongoing projects
  const [ongoingProjects, setOngoingProjects] = useState([
    {
      id: 1,
      title: "Community First Aid Kits Distribution",
      status: "In Progress",
      description: "Distributing first aid kits to barangays in Manila.",
    },
    {
      id: 2,
      title: "University Emergency Drill 2024",
      status: "Planning Stage",
      description: "Planning for a large-scale emergency drill in UP Manila.",
    },
  ]);

  // State for edit mode
  const [editMode, setEditMode] = useState(false);

  // Add functions
  const addTraining = () => {
    setTargetParticipants((prev) => ({
      ...prev,
      perTraining: [
        ...prev.perTraining,
        { id: Date.now(), name: "", participants: 0, year: 2023 },
      ],
    }));
  };

  const addProject = () => {
    setOngoingProjects((prev) => [
      ...prev,
      {
        id: Date.now(),
        title: "",
        status: "Planning Stage",
        description: "",
      },
    ]);
  };

  // Delete functions
  const deleteTraining = (id) => {
    setTargetParticipants((prev) => ({
      ...prev,
      perTraining: prev.perTraining.filter((training) => training.id !== id),
    }));
  };

  const deleteProject = (id) => {
    setOngoingProjects((prev) =>
      prev.filter((project) => project.id !== id)
    );
  };

  // Update functions
  const updateTraining = (index, key, value) => {
    const updatedTrainings = [...targetParticipants.perTraining];
    updatedTrainings[index][key] = value;
    setTargetParticipants((prev) => ({ ...prev, perTraining: updatedTrainings }));
  };

  const updateProject = (index, key, value) => {
    const updatedProjects = [...ongoingProjects];
    updatedProjects[index][key] = value;
    setOngoingProjects(updatedProjects);
  };

  // Toggle edit mode
  const toggleEditMode = () => {
    setEditMode((prev) => !prev);
  };

  return (
    <div className="p-6 space-y-8">
      {/* Dashboard Banner */}
      <div className="bg-[#770909] text-white p-6 rounded-lg shadow-md">
        <h1 className="text-2xl font-bold">Dashboard Overview</h1>
        <p className="mt-2">
          Stay updated with the latest training data, target participants, and
          ongoing projects.
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

      {/* Target Participants Section */}
      <div className="bg-white p-6 rounded-lg shadow-md space-y-6">
        <h2 className="text-xl font-semibold text-gray-800">
          Target Participants
        </h2>

        {/* Per Training */}
        <div>
          <h3 className="text-lg font-medium text-gray-700 flex justify-between">
            Per Training
            {editMode && (
              <button
                onClick={addTraining}
                className="bg-[#8C0808] text-white px-2 py-1 rounded"
              >
                + Add Training
              </button>
            )}
          </h3>
          {targetParticipants.perTraining.map((training, index) => (
            <div
              key={training.id}
              className="flex items-center gap-4 mt-2 bg-gray-100 p-2 rounded"
            >
              {editMode ? (
                <>
                  <input
                    type="text"
                    value={training.name}
                    placeholder="Training Name"
                    onChange={(e) =>
                      updateTraining(index, "name", e.target.value)
                    }
                    className="flex-1 p-2 border rounded"
                  />
                  <input
                    type="number"
                    value={training.participants}
                    placeholder="Participants"
                    onChange={(e) =>
                      updateTraining(index, "participants", e.target.value)
                    }
                    className="w-24 p-2 border rounded"
                  />
                  <input
                    type="number"
                    value={training.year}
                    placeholder="Year"
                    onChange={(e) => updateTraining(index, "year", e.target.value)}
                    className="w-24 p-2 border rounded"
                  />
                  <button
                    onClick={() => deleteTraining(training.id)}
                    className="bg-[#C51616] text-white px-2 py-1 rounded"
                  >
                    Delete
                  </button>
                </>
              ) : (
                <>
                  <p className="flex-1 text-gray-700 font-medium">
                    {training.name || "Untitled Training"}
                  </p>
                  <p className="text-gray-500">
                    {training.participants || 0} Participants
                  </p>
                  <p className="text-gray-500">Year: {training.year}</p>
                </>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* Ongoing Projects Section */}
      <div className="bg-white p-6 rounded-lg shadow-md space-y-6">
        <h2 className="text-xl font-semibold text-gray-800">
          Ongoing Projects
        </h2>
        {editMode && (
          <button
            onClick={addProject}
            className="bg-[#8C0808] text-white px-4 py-2 rounded"
          >
            + Add Project
          </button>
        )}
        {ongoingProjects.map((project, index) => (
          <div
            key={project.id}
            className="p-4 bg-gray-100 rounded-md shadow-sm space-y-2"
          >
            {editMode ? (
              <>
                <input
                  type="text"
                  value={project.title}
                  placeholder="Project Title"
                  onChange={(e) =>
                    updateProject(index, "title", e.target.value)
                  }
                  className="w-full p-2 border rounded"
                />
                <select
                  value={project.status}
                  onChange={(e) =>
                    updateProject(index, "status", e.target.value)
                  }
                  className="w-full p-2 border rounded"
                >
                  <option value="Planning Stage">Planning Stage</option>
                  <option value="In Progress">In Progress</option>
                  <option value="For Review">For Review</option>
                  <option value="Completed">Completed</option>
                </select>
                <textarea
                  value={project.description}
                  placeholder="Project Description"
                  onChange={(e) =>
                    updateProject(index, "description", e.target.value)
                  }
                  className="w-full p-2 border rounded"
                />
                <button
                  onClick={() => deleteProject(project.id)}
                  className="bg-[#C51616] text-white px-2 py-1 rounded"
                >
                  Delete
                </button>
              </>
            ) : (
              <>
                <h3 className="font-semibold text-gray-700">{project.title}</h3>
                <p className="text-gray-500">{project.status}</p>
                <p className="text-gray-600">{project.description}</p>
              </>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
