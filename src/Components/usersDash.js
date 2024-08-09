import React from 'react';

// Example data, you can replace this with actual data from your API or state
const users = [
  { name: 'John Doe', gender: 'Male', eventChosen: 'Event A', amount: '$100' },
  { name: 'Jane Smith', gender: 'Female', eventChosen: 'Event B', amount: '$150' },
  // Add more user data as needed
];

function UsersDash() {
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
              <td>{user.name}</td>
              <td>{user.gender}</td>
              <td>{user.eventChosen}</td>
              <td>{user.amount}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default UsersDash;
