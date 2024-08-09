import React, { useState, useEffect } from 'react';

const UsersDash = () => {
  const [users, setUsers] = useState([]);
  const [error, setError] = useState(null);

  // Fetch all users
  useEffect(() => {
    fetch('/api/users')
      .then((response) => response.json())
      .then((data) => setUsers(data))
      .catch((error) => setError('Error fetching users: ' + error.message));
  }, []);

  // Function to delete a user
  const handleDelete = (userId) => {
    fetch(`/api/users/${userId}`, {
      method: 'DELETE',
    })
      .then((response) => {
        if (response.status === 204) {
          setUsers(users.filter(user => user._id !== userId));
        } else {
          setError('Failed to delete user');
        }
      })
      .catch((error) => setError('Error deleting user: ' + error.message));
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Users Dashboard</h1>
      {error && <p className="text-red-500">{error}</p>}
      <ul>
        {users.map((user) => (
          <li key={user._id} className="mb-2">
            <strong>{user.firstName} {user.lastName}</strong> - {user.email}
            <br />
            <button 
              onClick={() => handleDelete(user._id)} 
              className="text-red-500 hover:text-red-700"
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default UsersDash;
