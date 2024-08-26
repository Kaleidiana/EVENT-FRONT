import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faCalendarDays, faUserTie, faMoneyBillWave, faCog, faInfoCircle } from '@fortawesome/free-solid-svg-icons';

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
                        <FontAwesomeIcon icon={faInfoCircle} /> {/* About */}
                        <span className={isCollapsed ? 'hide-text' : ''}>ABOUT</span>
                    </Link>
                </li>
                <li>
                    <Link to="/AdminDash" className={`nav-link ${activeComponent === 'AdminDash' ? 'active' : ''} ${isCollapsed ? 'hide-text' : ''}`} onClick={() => setActiveComponent('AdminDash')}>
                        <FontAwesomeIcon icon={faCalendarDays} /> {/* Admin Dashboard */}
                        <span className={isCollapsed ? 'hide-text' : ''}>ADMIN</span>
                    </Link>
                </li>
                <li>
                    <Link to="/UsersDash" className={`nav-link ${activeComponent === 'UsersDash' ? 'active' : ''} ${isCollapsed ? 'hide-text' : ''}`} onClick={() => setActiveComponent('UsersDash')}>
                        <FontAwesomeIcon icon={faUserTie} /> {/* Users Dashboard */}
                        <span className={isCollapsed ? 'hide-text' : ''}>USERS</span>
                    </Link>
                </li>
                <li>
                    <Link to="/Income" className={`nav-link ${activeComponent === 'Income' ? 'active' : ''} ${isCollapsed ? 'hide-text' : ''}`} onClick={() => setActiveComponent('Income')}>
                        <FontAwesomeIcon icon={faMoneyBillWave} /> {/* Income */}
                        <span className={isCollapsed ? 'hide-text' : ''}>INCOME</span>
                    </Link>
                </li>
                <li>
                    <Link to="/settings" className={`nav-link ${activeComponent === 'Settings' ? 'active' : ''} ${isCollapsed ? 'hide-text' : ''}`} onClick={() => setActiveComponent('Settings')}>
                        <FontAwesomeIcon icon={faCog} /> {/* Settings */}
                        <span className={isCollapsed ? 'hide-text' : ''}>SETTINGS</span>
                    </Link>
                </li>
                {/* Add other links as needed */}
            </ul>
        </div>
    );
};

export default Sidebar;
