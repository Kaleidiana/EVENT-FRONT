import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faCalendarDays, faUserTie, faUser, faCalendarAlt, faMoneyBillWave } from '@fortawesome/free-solid-svg-icons';


const Sidebar = ({ setActiveComponent }) => {
  const [isCollapsed, setIsCollapsed] = useState(false);

  const handleClick = (component) => {
    setActiveComponent(component);
  };

  const toggleSidebar = () => {
    setIsCollapsed(!isCollapsed);
  };

  return (
    <div className={`sidebar ${isCollapsed ? 'collapsed' : ''}`}>
      <div className="toggle-btn" onClick={toggleSidebar}>
        <FontAwesomeIcon icon={faBars} />
      </div>
      <h2 className={`h2 ${isCollapsed ? 'hidden' : ''}`}>EVENTPRO</h2>
      <ul>
        <li onClick={() => handleClick('AdminDash')}>
          <Link to="/AdminDash" className={`nav-link ${isCollapsed ? 'hide-text' : ''}`}>
            <FontAwesomeIcon icon={faCalendarDays} />
            <span className={isCollapsed ? 'hide-text' : ''}>DASHBOARD</span>
          </Link>
        </li>
        <li onClick={() => handleClick('UsersDash')}>
          <Link to="/UsersDash" className={`nav-link ${isCollapsed ? 'hide-text' : ''}`}>
            <FontAwesomeIcon icon={faUserTie} />
            <span className={isCollapsed ? 'hide-text' : ''}>ADMIN</span>
          </Link>
        </li>
        <li onClick={() => handleClick('events')}>
          <Link to="/events" className={`nav-link ${isCollapsed ? 'hide-text' : ''}`}>
            <FontAwesomeIcon icon={faCalendarAlt} />
            <span className={isCollapsed ? 'hide-text' : ''}>EVENTS</span>
          </Link>
        </li>
        
        <li onClick={() => handleClick('users')}>
          <Link to="/users" className={`nav-link ${isCollapsed ? 'hide-text' : ''}`}>
            <FontAwesomeIcon icon={faUser} />
            <span className={isCollapsed ? 'hide-text' : ''}>USERS</span>
          </Link>
        </li>
        <li onClick={() => handleClick('income')}>
          <Link to="/income" className={`nav-link ${isCollapsed ? 'hide-text' : ''}`}>
            <FontAwesomeIcon icon={faMoneyBillWave} />
            <span className={isCollapsed ? 'hide-text' : ''}>INCOME</span>
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
