// src/Components/EventContext.js
import React, { createContext, useState } from 'react';

export const EventContext = createContext();

export const EventProvider = ({ children }) => {
  const [selectedEvent, setSelectedEvent] = useState(null);

  const selectEvent = (event) => {
    setSelectedEvent(event);
  };

  return (
    <EventContext.Provider value={{ selectedEvent, selectEvent }}>
      {children}
    </EventContext.Provider>
  );
};
