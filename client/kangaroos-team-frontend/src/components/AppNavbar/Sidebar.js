import React from 'react';
import { Link } from 'react-router-dom'; // Import the Link component
import './Sidebar.css';

function Sidebar() {
  return (
    <div className="sidebar">
      <div className="logo">Kangaroos Team</div>
      <ul className="nav-links">
        {/* Use the Link component to create links */}
        <li><Link to="/">Home</Link></li>
        <li><Link to="/calendar">Calendar</Link></li>
        <li><Link to="/history">Car History</Link></li>
      </ul>
    </div>
  );
}

export default Sidebar;
