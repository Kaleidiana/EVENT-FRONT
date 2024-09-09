import React from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faCog, faInfoCircle, faUser } from '@fortawesome/free-solid-svg-icons';

const Sidebar = () => {
    const [isCollapsed, setIsCollapsed] = React.useState(false);
    const location = useLocation(); // Get current location
    const navigate = useNavigate(); // Import useNavigate

    const toggleSidebar = () => {
        setIsCollapsed(!isCollapsed);
    };

    const handleLogout = () => {
        // Add your logout logic here (e.g., clearing tokens, etc.)
        navigate('/'); // Redirect to home page
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
                        to="/user/about"
                        className={`nav-link ${location.pathname === '/about' ? 'active' : ''} ${isCollapsed ? 'hide-text' : ''}`}
                    >
                        <FontAwesomeIcon icon={faInfoCircle} /> {/* About */}
                        <span className={isCollapsed ? 'hide-text' : ''}>ABOUT</span>
                    </Link>
                </li>

                <li>
                    <Link
                        to="/user/events"
                        className={`nav-link ${location.pathname === '/events' ? 'active' : ''} ${isCollapsed ? 'hide-text' : ''}`}
                    >
                        <FontAwesomeIcon icon={faCog} /> {/* Events */}
                        <span className={isCollapsed ? 'hide-text' : ''}>EVENTS</span>
                    </Link>
                </li>

                <li>
                    <Link
                        to="/user/ContactUs"
                        className={`nav-link ${location.pathname === '/ContactUs' ? 'active' : ''} ${isCollapsed ? 'hide-text' : ''}`}
                    >
                        <FontAwesomeIcon icon={faCog} /> {/* Contact */}
                        <span className={isCollapsed ? 'hide-text' : ''}>CONTACT</span>
                    </Link>
                </li>
                <li className="logout">
                    <button onClick={handleLogout} className="logout-btn">
                        <FontAwesomeIcon icon={faUser} /> LOGOUT
                    </button>
                </li>
                {/* Add other links as needed */}
            </ul>
        </div>
    );
};

export default Sidebar;
