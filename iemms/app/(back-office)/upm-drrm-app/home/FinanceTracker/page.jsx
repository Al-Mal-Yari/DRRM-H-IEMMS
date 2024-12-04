"use client";

import React, { useState } from "react";
import { Line } from "react-chartjs-2"; // For line charts
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend } from "chart.js";

// Register the necessary components for the chart
ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend);

export default function FinanceTracker() {
  const [transactionTitle, setTransactionTitle] = useState("Salary");
  const [transactionAmount, setTransactionAmount] = useState(0);
  const [transactionType, setTransactionType] = useState("Income");
  const [transactionDescription, setTransactionDescription] = useState("");
  const [transactionDate, setTransactionDate] = useState(new Date().toISOString().split("T")[0]);
  const [savedTransactions, setSavedTransactions] = useState([]);
  const [editingIndex, setEditingIndex] = useState(null); // Store the index for editing

  // Function to handle saving a transaction
  const saveTransaction = () => {
    const newTransaction = {
      title: transactionTitle,
      amount: transactionAmount,
      type: transactionType,
      description: transactionDescription,
      date: transactionDate,
    };
    if (editingIndex === null) {
      setSavedTransactions([newTransaction, ...savedTransactions]);
    } else {
      const updatedTransactions = [...savedTransactions];
      updatedTransactions[editingIndex] = newTransaction;
      setSavedTransactions(updatedTransactions);
      setEditingIndex(null); // Reset editing state
    }
    alert(editingIndex === null ? "Transaction saved!" : "Transaction updated!");
  };

  // Function to remove a transaction
  const removeTransaction = (index) => {
    const updatedTransactions = savedTransactions.filter((_, i) => i !== index);
    setSavedTransactions(updatedTransactions);
  };

  // Function to edit a transaction
  const editTransaction = (index) => {
    const transaction = savedTransactions[index];
    setTransactionTitle(transaction.title);
    setTransactionAmount(transaction.amount);
    setTransactionType(transaction.type);
    setTransactionDescription(transaction.description);
    setTransactionDate(transaction.date);
    setEditingIndex(index); // Set editing mode
  };

  // Function to export transactions as CSV
  const exportCSV = () => {
    const headers = ["Title", "Amount", "Type", "Description", "Date"];
    const rows = savedTransactions.map((transaction) => [
      transaction.title,
      transaction.amount,
      transaction.type,
      transaction.description,
      transaction.date,
    ]);

    const csvContent = [headers, ...rows]
      .map((row) => row.join(","))
      .join("\n");

    const blob = new Blob([csvContent], { type: "text/csv;charset=utf-8;" });
    const link = document.createElement("a");
    if (link.download !== undefined) {
      const url = URL.createObjectURL(blob);
      link.setAttribute("href", url);
      link.setAttribute("download", "transactions.csv");
      link.click();
    }
  };

  // Prepare chart data
  const chartData = {
    labels: savedTransactions.map((transaction, index) => `Transaction ${index + 1}`),
    datasets: [
      {
        label: "Income",
        data: savedTransactions.filter((transaction) => transaction.type === "Income").map((t) => t.amount),
        borderColor: "#008000",
        backgroundColor: "#66FF66",
        fill: false,
        tension: 0.1,
      },
      {
        label: "Expense",
        data: savedTransactions.filter((transaction) => transaction.type === "Expense").map((t) => t.amount),
        borderColor: "#FF0000",
        backgroundColor: "#FF6666",
        fill: false,
        tension: 0.1,
      },
    ],
  };

  return (
    <div className="p-6 space-y-8">
      {/* Banner Section */}
      <div className="bg-[#770909] text-white p-6 rounded-lg shadow-md">
        <h1 className="text-3xl font-bold">Finance Tracker</h1>
        <p className="mt-2 text-lg">Track your financial transactions, including income and expenses.</p>
      </div>

      {/* Edit Transaction Section */}
      <div className="bg-white p-6 rounded-lg shadow-md">
        <h2 className="text-2xl font-semibold text-gray-800">Add/Edit Transaction</h2>
        <div className="mt-4 space-y-6">
          <div>
            <label htmlFor="transaction-title" className="block text-lg text-gray-800">Transaction Title</label>
            <input
              type="text"
              id="transaction-title"
              value={transactionTitle}
              onChange={(e) => setTransactionTitle(e.target.value)}
              className="mt-2 p-2 w-full border border-gray-300 rounded-md"
              placeholder="Enter transaction title"
            />
          </div>

          <div>
            <label htmlFor="transaction-amount" className="block text-lg text-gray-800">Transaction Amount</label>
            <input
              type="number"
              id="transaction-amount"
              value={transactionAmount}
              onChange={(e) => setTransactionAmount(Number(e.target.value))}
              className="mt-2 p-2 w-full border border-gray-300 rounded-md"
              placeholder="Enter transaction amount"
            />
          </div>

          <div>
            <label htmlFor="transaction-type" className="block text-lg text-gray-800">Transaction Type</label>
            <select
              id="transaction-type"
              value={transactionType}
              onChange={(e) => setTransactionType(e.target.value)}
              className="mt-2 p-2 w-full border border-gray-300 rounded-md"
            >
              <option value="Income">Income</option>
              <option value="Expense">Expense</option>
            </select>
          </div>

          <div>
            <label htmlFor="transaction-description" className="block text-lg text-gray-800">Description</label>
            <textarea
              id="transaction-description"
              value={transactionDescription}
              onChange={(e) => setTransactionDescription(e.target.value)}
              className="mt-2 p-2 w-full border border-gray-300 rounded-md"
              placeholder="Enter description"
            />
          </div>

          <div>
            <label htmlFor="transaction-date" className="block text-lg text-gray-800">Transaction Date</label>
            <input
              type="date"
              id="transaction-date"
              value={transactionDate}
              onChange={(e) => setTransactionDate(e.target.value)}
              className="mt-2 p-2 w-full border border-gray-300 rounded-md"
            />
          </div>

          <div>
            <button
              onClick={saveTransaction}
              className="bg-[#770909] text-white p-3 rounded-md"
            >
              {editingIndex === null ? "Save Transaction" : "Update Transaction"}
            </button>
          </div>
        </div>
      </div>

      {/* Transaction History Section */}
      <div className="bg-white p-6 rounded-lg shadow-md space-y-6">
        <h2 className="text-2xl font-semibold text-gray-800">Transaction History</h2>
        <div className="space-y-4">
          {savedTransactions.length === 0 ? (
            <p>No saved transactions yet.</p>
          ) : (
            savedTransactions.map((transaction, index) => (
              <div key={index} className="p-4 bg-gray-100 rounded-lg shadow-sm">
                <h3 className="text-xl font-semibold text-gray-800">{transaction.title}</h3>
                <p className="text-gray-600">Transaction date: {transaction.date}</p>
                <p className="text-gray-600">Description: {transaction.description}</p>
                <p className="text-gray-800 mt-2">Amount: {transaction.amount} ({transaction.type})</p>

                {/* Buttons for editing and removing transactions */}
                <div className="mt-4 flex space-x-4">
                  <button
                    onClick={() => editTransaction(index)}
                    className="bg-yellow-500 text-white p-2 rounded-md"
                  >
                    Edit
                  </button>
                  <button
                    onClick={() => removeTransaction(index)}
                    className="bg-[#770909] text-white p-2 rounded-md"
                  >
                    Remove
                  </button>
                </div>
              </div>
            ))
          )}
        </div>
      </div>

      {/* Chart Section */}
      <div className="bg-white p-6 rounded-lg shadow-md">
        <h2 className="text-2xl font-semibold text-gray-800">Transaction Visualization</h2>
        <Line data={chartData} options={{ responsive: true }} />
      </div>

      {/* Export Section */}
      <div className="bg-white p-6 rounded-lg shadow-md">
        <button
          onClick={exportCSV}
          className="bg-blue-500 text-white p-3 rounded-md"
        >
          Export to CSV
        </button>
      </div>
    </div>
  );
}
