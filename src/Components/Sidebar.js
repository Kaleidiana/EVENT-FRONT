import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faCalendarDays, faUserTie, faCalendarAlt, faMoneyBillWave } from '@fortawesome/free-solid-svg-icons';

const Sidebar = ({ setActiveComponent, activeComponent }) => {
  const [isCollapsed, setIsCollapsed] = React.useState(false);

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
        <li>
          <Link 
            to="/AdminDash" 
            className={`nav-link ${activeComponent === 'AdminDash' ? 'active' : ''} ${isCollapsed ? 'hide-text' : ''}`}
            onClick={() => setActiveComponent('AdminDash')}
          >
            <FontAwesomeIcon icon={faCalendarDays} />
            <span className={isCollapsed ? 'hide-text' : ''}>ADMIN</span>
          </Link>
        </li>
        <li>
          <Link 
            to="/UsersDash" 
            className={`nav-link ${activeComponent === 'UsersDash' ? 'active' : ''} ${isCollapsed ? 'hide-text' : ''}`}
            onClick={() => setActiveComponent('UsersDash')}
          >
            <FontAwesomeIcon icon={faUserTie} />
            <span className={isCollapsed ? 'hide-text' : ''}>USER</span>
          </Link>
        </li>
        <li>
          <Link 
            to="/events" 
            className={`nav-link ${activeComponent === 'events' ? 'active' : ''} ${isCollapsed ? 'hide-text' : ''}`}
            onClick={() => setActiveComponent('events')}
          >
            <FontAwesomeIcon icon={faCalendarAlt} />
            <span className={isCollapsed ? 'hide-text' : ''}>EVENTS</span>
          </Link>
        </li>
        <li>
          <Link 
            to="/income" 
            className={`nav-link ${activeComponent === 'income' ? 'active' : ''} ${isCollapsed ? 'hide-text' : ''}`}
            onClick={() => setActiveComponent('income')}
          >
            <FontAwesomeIcon icon={faMoneyBillWave} />
            <span className={isCollapsed ? 'hide-text' : ''}>INCOME</span>
          </Link>
        </li>
      </ul>
    </div>
    
  );
};

export default Sidebar;
