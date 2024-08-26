import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faCalendarDays, faUserTie, faCalendarAlt, faMoneyBillWave, faCog, faInfoCircle } from '@fortawesome/free-solid-svg-icons'; // Importing the faInfoCircle icon

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
                    <Link to="/about" className={`nav-link ${activeComponent === 'About' ? 'active' : ''} ${isCollapsed ? 'hide-text' : ''}`} onClick={() => setActiveComponent('About')}>
                        <FontAwesomeIcon icon={faInfoCircle} /> {/* Using faInfoCircle for About */}
                        <span className={isCollapsed ? 'hide-text' : ''}>ABOUT</span>
                    </Link>
                </li>
                <li>
                    <Link to="/AdminDash" className={`nav-link ${activeComponent === 'AdminDash' ? 'active' : ''} ${isCollapsed ? 'hide-text' : ''}`} onClick={() => setActiveComponent('AdminDash')}>
                        <FontAwesomeIcon icon={faCalendarDays} />
                        <span className={isCollapsed ? 'hide-text' : ''}>ADMIN</span>
                    </Link>
                </li>
                {/* Other links */}
            </ul>
        </div>
    );
};

export default Sidebar;
