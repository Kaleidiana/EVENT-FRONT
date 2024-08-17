import React, { useEffect, useState } from 'react';
import axios from 'axios';

function UsersDash() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    axios.get('/api/users/getAllUsers') // Ensure this is the correct endpoint
      .then(response => {
        setUsers(response.data);
      })
      .catch(error => {
        console.error('There was an error fetching the users!', error);
      });
  }, []);

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
          {users.map((user, index) => (
            <tr key={index}>
              <td>{user.firstname} {user.lastname}</td>
              <td>{user.gender}</td>
              <td>{user.selectedEvent ? user.selectedEvent.title : 'No event selected'}</td>
              <td>{user.selectedEvent ? user.selectedEvent.price : 'N/A'}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default UsersDash;
