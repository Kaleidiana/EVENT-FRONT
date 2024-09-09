import React from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faCalendarDays, faCog, faInfoCircle, faUser } from '@fortawesome/free-solid-svg-icons';

const Sidebar = ({ setActiveComponent, activeComponent }) => {
    const [isCollapsed, setIsCollapsed] = React.useState(false);
    const location = useLocation(); // Get current location
    const navigate = useNavigate(); // Hook to navigate programmatically

    React.useEffect(() => {
        // Update activeComponent based on the current route
        const path = location.pathname.substring(1); // Remove leading '/'
        setActiveComponent(path.charAt(0).toUpperCase() + path.slice(1) || 'Home');
    }, [location, setActiveComponent]);

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
                    <Link to="/about" className={`nav-link ${activeComponent === 'About' ? 'active' : ''} ${isCollapsed ? 'hide-text' : ''}`}>
                        <FontAwesomeIcon icon={faInfoCircle} /> ABOUT
                    </Link>
                </li>
                <li>
                    <Link to="/admindash" className={`nav-link ${activeComponent === 'AdminDash' ? 'active' : ''} ${isCollapsed ? 'hide-text' : ''}`}>
                        <FontAwesomeIcon icon={faCalendarDays} /> ADMIN
                    </Link>
                </li>
                <li>
                    <Link to="/events" className={`nav-link ${activeComponent === 'Events' ? 'active' : ''} ${isCollapsed ? 'hide-text' : ''}`}>
                        <FontAwesomeIcon icon={faCog} /> EVENTS
                    </Link>
                </li>
                <li>
                    <Link to="/contactus" className={`nav-link ${activeComponent === 'ContactUs' ? 'active' : ''} ${isCollapsed ? 'hide-text' : ''}`}>
                        <FontAwesomeIcon icon={faCog} /> CONTACT
                    </Link>
                </li>
                <li className="logout">
                    <button onClick={handleLogout} className="logout-btn">
                        <FontAwesomeIcon icon={faUser} /> LOGOUT
                    </button>
                </li>
            </ul>
        </div>
    );
};

export default Sidebar;
