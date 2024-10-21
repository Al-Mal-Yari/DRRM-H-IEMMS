"use client";

import React, { useState } from 'react';
import { Line } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend } from 'chart.js';
import styles from '../../../../../styles/Dashboard.module.css';

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend);

const timeOptions = [3, 7, 14, 30, 90, 180, 365, 730, 1095, 1460, 1825]; // Day options

const Dashboard = () => {
  // State to manage the visibility of details
  const [selectedCard, setSelectedCard] = useState(null);
  const [selectedDays, setSelectedDays] = useState(14); // Default to 14 days

  // Generate 14 days of labels (from 2024-10-01 to 2024-10-14)
  const labels = Array.from({ length: selectedDays }, (_, i) => {
    const date = new Date(2024, 9, i + 1); // Starting from 2024-10-01
    return date.toISOString().split('T')[0]; // Format date as YYYY-MM-DD
  });

  // Equipment Borrowed Data for 14 Days
  const borrowedData = {
    labels: labels,
    datasets: [
      {
        label: 'Electronics Borrowed',
        data: Array.from({ length: selectedDays }, () => Math.floor(Math.random() * 20 + 1)),
        borderColor: '#4CAF50',
        backgroundColor: 'rgba(76, 175, 80, 0.2)',
        fill: true,
      },
      {
        label: 'Medical Supplies Borrowed',
        data: Array.from({ length: selectedDays }, () => Math.floor(Math.random() * 30 + 1)),
        borderColor: '#FF9800',
        backgroundColor: 'rgba(255, 152, 0, 0.2)',
        fill: true,
      },
      {
        label: 'Rescue Equipment Borrowed',
        data: Array.from({ length: selectedDays }, () => Math.floor(Math.random() * 10 + 1)),
        borderColor: '#2196F3',
        backgroundColor: 'rgba(33, 150, 243, 0.2)',
        fill: true,
      },
      {
        label: 'Vehicles Borrowed',
        data: Array.from({ length: selectedDays }, () => Math.floor(Math.random() * 5 + 1)),
        borderColor: '#9C27B0',
        backgroundColor: 'rgba(156, 39, 176, 0.2)',
        fill: true,
      },
    ],
  };

  // Equipment Returned Data
  const returnedData = {
    labels: labels,
    datasets: [
      {
        label: 'Electronics Returned',
        data: Array.from({ length: selectedDays }, () => Math.floor(Math.random() * 20 + 1)),
        borderColor: '#66BB6A',
        backgroundColor: 'rgba(102, 187, 106, 0.2)',
        fill: true,
      },
      {
        label: 'Medical Supplies Returned',
        data: Array.from({ length: selectedDays }, () => Math.floor(Math.random() * 25 + 1)),
        borderColor: '#FFB74D',
        backgroundColor: 'rgba(255, 183, 77, 0.2)',
        fill: true,
      },
      {
        label: 'Rescue Equipment Returned',
        data: Array.from({ length: selectedDays }, () => Math.floor(Math.random() * 10 + 1)),
        borderColor: '#42A5F5',
        backgroundColor: 'rgba(66, 165, 245, 0.2)',
        fill: true,
      },
      {
        label: 'Vehicles Returned',
        data: Array.from({ length: selectedDays }, () => Math.floor(Math.random() * 5 + 1)),
        borderColor: '#BA68C8',
        backgroundColor: 'rgba(186, 104, 200, 0.2)',
        fill: true,
      },
    ],
  };

  const trainingData = {
    labels: labels,
    datasets: [
      {
        label: 'Number of Attendees',
        data: Array.from({ length: selectedDays }, () => Math.floor(Math.random() * 15 + 1)),
        borderColor: '#FF9800',
        backgroundColor: 'rgba(255, 152, 0, 0.2)',
        fill: true,
      },
    ],
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        position: 'left', // Position the legend on the left
        labels: {
          usePointStyle: true, // Make the legend use point styles like circles
        },
      },
    },
    scales: {
      y: {
        min: 0,
        max: 35,
        ticks: {
          stepSize: 5,
        },
      },
    },
  };
  

  const handleCardClick = (cardType) => {
    setSelectedCard(selectedCard === cardType ? null : cardType);
  };

  const handleDayChange = (e) => {
    setSelectedDays(Number(e.target.value)); // Update selected days
  };

  // Sample data for top borrowers, returners, and attendees
  const topBorrowers = [
    { name: 'John Doe', items: 25 },
    { name: 'Jane Smith', items: 20 },
    { name: 'Mark Johnson', items: 15 },
  ];

  const topReturners = [
    { name: 'Alice Brown', items: 22 },
    { name: 'Tom Clark', items: 18 },
    { name: 'Sarah White', items: 16 },
  ];

  const topAttendees = [
    { name: 'Robert Green', attendees: 12 },
    { name: 'Emily Davis', attendees: 10 },
    { name: 'Chris Wilson', attendees: 9 },
  ];

  return (
    <div className={styles.container}>
      <div className={styles.dashboardHeader}>
        <h2>UPM Disaster Risk Reduction and Management for Health Program Dashboard</h2>
      </div>

      {/* Total Number of Equipment Card */}
      <div className={styles.cards}>
        <div className={`${styles.card} ${styles.buttonCard}`} onClick={() => handleCardClick('totalEquipment')}>
          <h3>Total Number of Equipment</h3>
          <p>1000</p>
          <span>Borrowed: 50</span>
          <span>Returned: 45</span>
          {selectedCard === 'totalEquipment' && <p>Further details about total equipment...</p>}
        </div>
        <div className={`${styles.card} ${styles.buttonCard}`} onClick={() => handleCardClick('borrowed')}>
          <h3>Borrowed</h3>
          <p>50</p>
          <span>Out of 1000</span>
          {selectedCard === 'borrowed' && <p>Further details about borrowed items...</p>}
        </div>
        <div className={`${styles.card} ${styles.buttonCard}`} onClick={() => handleCardClick('returned')}>
          <h3>Returned</h3>
          <p>45</p>
          <span>Out of 50</span>
          {selectedCard === 'returned' && <p>Further details about returned items...</p>}
        </div>
      </div>

      {/* Top 3 Borrowers */}
      <div className={styles.cards}>
        <div className={`${styles.card} ${styles.buttonCard}`} onClick={() => handleCardClick('topBorrowers')}>
          <h3>Top 3 Borrowers</h3>
          <ul>
            {topBorrowers.map((borrower, index) => (
              <li key={index}>{borrower.name} - {borrower.items} items</li>
            ))}
          </ul>
          {selectedCard === 'topBorrowers' && <p>Further details about top borrowers...</p>}
        </div>

        {/* Top 3 Returners */}
        <div className={`${styles.card} ${styles.buttonCard}`} onClick={() => handleCardClick('topReturners')}>
          <h3>Top 3 Returners</h3>
          <ul>
            {topReturners.map((returner, index) => (
              <li key={index}>{returner.name} - {returner.items} items</li>
            ))}
          </ul>
          {selectedCard === 'topReturners' && <p>Further details about top returners...</p>}
        </div>

        {/* Top 3 Attendees */}
        <div className={`${styles.card} ${styles.buttonCard}`} onClick={() => handleCardClick('topAttendees')}>
          <h3>Top 3 Attendees</h3>
          <ul>
            {topAttendees.map((attendee, index) => (
              <li key={index}>{attendee.name} - {attendee.attendees} attendees</li>
            ))}
          </ul>
          {selectedCard === 'topAttendees' && <p>Further details about top attendees...</p>}
        </div>
      </div>

      <div className={styles.cards}>
  {/* Recent Borrowers */}
  <div className={`${styles.card} ${styles.buttonCard}`} onClick={() => handleCardClick('recentBorrowers')}>
    <h3>Recent Borrowers</h3>
    <ul>
      {topBorrowers.map((borrower, index) => (
        <li key={index}>{borrower.name} - {borrower.items} items (2024-10-{String(index + 1).padStart(2, '0')})</li>
      ))}
    </ul>
    {selectedCard === 'recentBorrowers' && <p>Further details about recent borrowers...</p>}
  </div>

  {/* Recent Returners */}
  <div className={`${styles.card} ${styles.buttonCard}`} onClick={() => handleCardClick('recentReturners')}>
    <h3>Recent Returners</h3>
    <ul>
      {topReturners.map((returner, index) => (
        <li key={index}>{returner.name} - {returner.items} items (2024-10-{String(index + 1).padStart(2, '0')})</li>
      ))}
    </ul>
    {selectedCard === 'recentReturners' && <p>Further details about recent returners...</p>}
  </div>

  {/* Recent Triage Attendees */}
  <div className={`${styles.card} ${styles.buttonCard}`} onClick={() => handleCardClick('recentAttendees')}>
    <h3>Recent Triage Attendees</h3>
    <ul>
      {topAttendees.map((attendee, index) => (
        <li key={index}>{attendee.name} - {attendee.attendees} attendees (2024-10-{String(index + 1).padStart(2, '0')})</li>
      ))}
    </ul>
    {selectedCard === 'recentAttendees' && <p>Further details about recent attendees...</p>}
  </div>
</div>
      {/* Dropdown for selecting time range */}
      <div className={styles.selectContainer}>
        <label htmlFor="dayRange">Select Time Range: </label>
        <select id="dayRange" onChange={handleDayChange} value={selectedDays}>
          {timeOptions.map((days, index) => (
            <option key={index} value={days}>
              {days} days
            </option>
          ))}
        </select>
      </div>

      {/* Equipment Borrowed Chart */}
      <div className={styles.chartSection}>
        <h3>Equipment Borrowed ({selectedDays} Days)</h3>
        <div className={styles.scrollableContainer}>
          <div className={styles.chartContainerScrollable}
          style={{ minWidth: `${Math.max(selectedDays, 90) * 5}px` }} // Dynamic width
          >
          <Line data={borrowedData} options={options} />
        </div>
      </div>
      </div>

      {/* Equipment Returned Chart */}
      <div className={styles.chartSection}>
        <h3>Equipment Returned ({selectedDays} Days)</h3>
        <div className={styles.scrollableContainer}>
          <div className={styles.chartContainerScrollable}
          style={{ minWidth: `${Math.max(selectedDays, 90) * 5}px` }} // Dynamic width
          >
          <Line data={returnedData} options={options} />
        </div>
      </div>
      </div>

      {/* Triage Training Chart */}
      <div className={styles.chartSection}>
        <h3>Triage Training Progress ({selectedDays} Days)</h3>
        <div className={styles.scrollableContainer}>
          <div className={styles.chartContainerScrollable}
          style={{ minWidth: `${Math.max(selectedDays, 90) * 5}px` }} // Dynamic width
          >
          <Line data={trainingData} options={options} />
        </div>
      </div>

    </div>
  </div>
  );
};

export default Dashboard;
