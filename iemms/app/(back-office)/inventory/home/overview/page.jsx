"use client";

import React, { useState } from 'react';
import { Line } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend } from 'chart.js';
import styles from '../../../../../styles/Dashboard.module.css';

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend);

const Dashboard = () => {
  // State to manage the visibility of details
  const [selectedCard, setSelectedCard] = useState(null);

  // Generate 14 days of labels (from 2024-10-01 to 2024-10-14)
  const labels = Array.from({ length: 14 }, (_, i) => `2024-10-${String(i + 1).padStart(2, '0')}`);

  // Equipment Borrowed Data for 14 Days
  const borrowedData = {
    labels: labels,
    datasets: [
      {
        label: 'Electronics Borrowed',
        data: [5, 12, 10, 15, 6, 18, 14, 7, 16, 19, 8, 20, 22, 11],
        borderColor: '#4CAF50',
        backgroundColor: 'rgba(76, 175, 80, 0.2)',
        fill: true,
      },
      {
        label: 'Medical Supplies Borrowed',
        data: [15, 18, 20, 22, 17, 21, 19, 23, 26, 20, 24, 15, 12, 30],
        borderColor: '#FF9800',
        backgroundColor: 'rgba(255, 152, 0, 0.2)',
        fill: true,
      },
      {
        label: 'Rescue Equipment Borrowed',
        data: [2, 3, 5, 4, 3, 6, 5, 8, 7, 4, 5, 6, 3, 9],
        borderColor: '#2196F3',
        backgroundColor: 'rgba(33, 150, 243, 0.2)',
        fill: true,
      },
      {
        label: 'Vehicles Borrowed',
        data: [1, 1, 2, 3, 2, 4, 3, 2, 3, 4, 5, 4, 2, 3],
        borderColor: '#9C27B0',
        backgroundColor: 'rgba(156, 39, 176, 0.2)',
        fill: true,
      },
    ],
  };

  // Equipment Returned Data for 14 Days
  const returnedData = {
    labels: labels,
    datasets: [
      {
        label: 'Electronics Returned',
        data: [7, 5, 9, 10, 8, 6, 13, 12, 14, 7, 10, 8, 5, 11],
        borderColor: '#66BB6A',
        backgroundColor: 'rgba(102, 187, 106, 0.2)',
        fill: true,
      },
      {
        label: 'Medical Supplies Returned',
        data: [10, 14, 11, 13, 10, 15, 16, 18, 14, 12, 8, 6, 9, 11],
        borderColor: '#FFB74D',
        backgroundColor: 'rgba(255, 183, 77, 0.2)',
        fill: true,
      },
      {
        label: 'Rescue Equipment Returned',
        data: [1, 2, 3, 4, 2, 3, 2, 1, 3, 4, 5, 2, 3, 4],
        borderColor: '#42A5F5',
        backgroundColor: 'rgba(66, 165, 245, 0.2)',
        fill: true,
      },
      {
        label: 'Vehicles Returned',
        data: [0, 1, 2, 1, 1, 3, 2, 2, 3, 1, 1, 0, 2, 3],
        borderColor: '#BA68C8',
        backgroundColor: 'rgba(186, 104, 200, 0.2)',
        fill: true,
      },
    ],
  };

  // Triage Training Data: Number of Attendees per Day
  const trainingData = {
    labels: labels,
    datasets: [
      {
        label: 'Number of Attendees',
        data: [5, 8, 10, 12, 6, 9, 10, 7, 15, 8, 12, 11, 10, 14],
        borderColor: '#FF9800',
        backgroundColor: 'rgba(255, 152, 0, 0.2)',
        fill: true,
      },
    ],
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,
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

  const handleCardClick = (cardType) => {
    setSelectedCard(selectedCard === cardType ? null : cardType);
  };

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

      {/* Inventory Equipment Borrowed Line Chart */}
      <div className={styles.chartSection}>
        <h3>Equipment Borrowed (14 Days)</h3>
        <div className={styles.chartContainerLarge}>
          <Line data={borrowedData} options={options} />
        </div>
      </div>

      {/* Inventory Equipment Returned Line Chart */}
      <div className={styles.chartSection}>
        <h3>Equipment Returned (14 Days)</h3>
        <div className={styles.chartContainerLarge}>
          <Line data={returnedData} options={options} />
        </div>
      </div>

      {/* Triage Training Status Line Chart */}
      <div className={styles.chartSection}>
        <h3>Triage Training Progress (Number of Attendees per Day)</h3>
        <div className={styles.chartContainerLarge}>
          <Line data={trainingData} options={options} />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
