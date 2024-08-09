import React, { createContext, useState, useContext } from 'react';

export const UserContext = createContext();

export const useUser = () => useContext(UserContext);

const UserProvider = ({ children }) => {
  const [userRole, setUserRole] = useState(localStorage.getItem('userRole') || 'guest');

  return (
    <UserContext.Provider value={{ userRole, setUserRole }}>
      {children}
    </UserContext.Provider>
  );
};

export default UserProvider;
