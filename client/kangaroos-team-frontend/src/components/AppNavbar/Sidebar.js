import React from 'react';
import { Link } from 'react-router-dom';
import './Sidebar.css';

function Sidebar() {
  return (
    <div className="sidebar">
      <div className="logo">Your App Name</div>
      <ul className="nav-links">
        <li><Link to="/">Home</Link></li>
        <li><Link to="/calendar">Calendar</Link></li>
        <li><Link to="/history">Car History</Link></li>
        {/* Add more navigation links here */}
      </ul>
    </div>
  );
}

export default Sidebar;
