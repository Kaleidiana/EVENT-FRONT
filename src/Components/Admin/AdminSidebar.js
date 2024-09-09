import React from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faCalendarDays, faUser } from '@fortawesome/free-solid-svg-icons';

const AdminSidebar = () => {
    const [isCollapsed, setIsCollapsed] = React.useState(false);
    const location = useLocation(); // Get current location
    const navigate = useNavigate(); // Import useNavigate

    const toggleSidebar = () => {
        setIsCollapsed(!isCollapsed);
    };

    const handleLogout = () => {
        // Add your logout logic here (e.g., clearing tokens, etc.)
        navigate('/adminlogin'); // Redirect to home page
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
                        to="/admin/AdminDash"
                        className={`nav-link ${location.pathname === '/AdminDash' ? 'active' : ''} ${isCollapsed ? 'hide-text' : ''}`}
                    >
                        <FontAwesomeIcon icon={faCalendarDays} /> {/* Admin Dashboard */}
                        <span className={isCollapsed ? 'hide-text' : ''}>ADMIN</span>
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

export default AdminSidebar;
