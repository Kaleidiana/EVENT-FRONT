import React, { useState, useEffect } from 'react';
import axios from 'axios'; // Make sure to install axios or use fetch for API calls

const Income = () => {
  const [incomeData, setIncomeData] = useState([]);
  const [newIncome, setNewIncome] = useState({
    source: '',
    amount: '',
    date: '',
    description: '',
  });

  // Fetch Income Data
  useEffect(() => {
    const fetchIncomeData = async () => {
      try {
        const response = await axios.get('/api/income'); // Adjust the endpoint as needed
        setIncomeData(response.data);
      } catch (error) {
        console.error('Error fetching income data:', error);
      }
    };

    fetchIncomeData();
  }, []);

  // Handle Input Change for New Income
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewIncome({ ...newIncome, [name]: value });
  };

  // Handle Form Submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('/api/income', newIncome); // Adjust the endpoint as needed
      setIncomeData([...incomeData, response.data]); // Add new entry to the state
      setNewIncome({ source: '', amount: '', date: '', description: '' }); // Reset form
    } catch (error) {
      console.error('Error adding new income:', error);
    }
  };

  return (
    <div className="income-container">
      <h1>Income Management</h1>

      {/* Income Table */}
      <table className="income-table">
        <thead>
          <tr>
            <th>Source</th>
            <th>Amount</th>
            <th>Date</th>
            <th>Description</th>
          </tr>
        </thead>
        <tbody>
          {incomeData.map((income) => (
            <tr key={income.id}>
              <td>{income.source}</td>
              <td>${income.amount}</td>
              <td>{income.date}</td>
              <td>{income.description}</td>
            </tr>
          ))}
        </tbody>
      </table>

      {/* Add New Income Form */}
      <h2>Add New Income</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="source"
          value={newIncome.source}
          placeholder="Source"
          onChange={handleInputChange}
          required
        />
        <input
          type="number"
          name="amount"
          value={newIncome.amount}
          placeholder="Amount"
          onChange={handleInputChange}
          required
        />
        <input
          type="date"
          name="date"
          value={newIncome.date}
          onChange={handleInputChange}
          required
        />
        <input
          type="text"
          name="description"
          value={newIncome.description}
          placeholder="Description"
          onChange={handleInputChange}
        />
        <button type="submit">Add Income</button>
      </form>
    </div>
  );
};

export default Income;
