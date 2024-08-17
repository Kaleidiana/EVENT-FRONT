import React, { useEffect, useState } from 'react';
import axios from 'axios';

function UsersDash() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true); // Added loading state
  const [error, setError] = useState(null); // Added error state

  useEffect(() => {
    axios.get('http://localhost:4000/api/users/getAllUsers')
      .then(response => {
        setUsers(response.data);
        setLoading(false); // Set loading to false once data is fetched
      })
      .catch(error => {
        console.error('There was an error fetching the users!', error);
        setError('Error fetching users.'); // Set error message
        setLoading(false); // Set loading to false even if there's an error
      });
  }, []);

  if (loading) return <p>Loading users...</p>; // Display loading message
  if (error) return <p>{error}</p>; // Display error message

  return (
    <div className="users-dash">
      <h1>Users Dashboard</h1>
      <table>
        <thead>
          <tr>
            <th>Users</th>
            <th>Gender</th>
            <th>Event Chosen</th>
            <th>Amount</th>
          </tr>
        </thead>
        <tbody>
          {users.length > 0 ? (
            users.map((user, index) => (
              <tr key={index}>
                <td>{user.firstname} {user.lastname}</td>
                <td>{user.gender}</td>
                <td>{user.selectedEvent ? user.selectedEvent.title : 'No event selected'}</td>
                <td>{user.selectedEvent ? user.selectedEvent.price : 'N/A'}</td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="4">No users available</td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
}

export default UsersDash;
