import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faCalendarDays, faMoneyBillWave, faCog, faInfoCircle } from '@fortawesome/free-solid-svg-icons';

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
                    <Link to="/events" className={`nav-link ${activeComponent === 'Events' ? 'active' : ''} ${isCollapsed ? 'hide-text' : ''}`} onClick={() => setActiveComponent('Events')}>
                        <FontAwesomeIcon icon={faCog} /> {/* Settings */}
                        <span className={isCollapsed ? 'hide-text' : ''}>EVENTS</span>
                    </Link>
                </li>
               
                <li>
                    <Link to="/Booking" className={`nav-link ${activeComponent === 'Booking' ? 'active' : ''} ${isCollapsed ? 'hide-text' : ''}`} onClick={() => setActiveComponent('Booking')}>
                        <FontAwesomeIcon icon={faMoneyBillWave} /> {/* Income */}
                        <span className={isCollapsed ? 'hide-text' : ''}>BOOKING</span>
                    </Link>
                </li>
                <li>
                    <Link to="/ContactUs" className={`nav-link ${activeComponent === 'ContactUs' ? 'active' : ''} ${isCollapsed ? 'hide-text' : ''}`} onClick={() => setActiveComponent('ContactUs')}>
                        <FontAwesomeIcon icon={faCog} /> {/* Settings */}
                        <span className={isCollapsed ? 'hide-text' : ''}>CONTACT</span>
                    </Link>
                </li>
                {/* Add other links as needed */}
            </ul>
        </div>
    );
};

export default Sidebar;
