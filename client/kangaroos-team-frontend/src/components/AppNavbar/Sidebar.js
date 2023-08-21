import React from 'react';
import { Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Sidebar.css';

function Sidebar() {
  return (
    <div className="sidebar">
      <div className="team-info">
        <h1>Kangaroos Team</h1>
        <p>Est. 1990</p>
      </div>
      <Nav className="sidebar-nav">
        <Link className="nav-link" to="/" activeClassName="active">Home</Link>
        <Link className="nav-link" to="/calendar" activeClassName="active">Calendar</Link>
        <Link className="nav-link" to="/history" activeClassName="active">History</Link>
      </Nav>
    </div>
  );
}

export default Sidebar;
