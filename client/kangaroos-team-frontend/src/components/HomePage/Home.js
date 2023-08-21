import React from 'react';
import './Home.css';

const Home = () => {
  // Mock data for demonstration purposes
  const totalJobs = 50;
  const completedJobs = 35;
  const pendingJobs = totalJobs - completedJobs;
  const totalRevenue = 45000;

  return (
    <div className="dashboard-container">
      <h2>Dashboard</h2>
      <div className="metric-card">
        <h3>Total Jobs</h3>
        <p>{totalJobs}</p>
      </div>
      <div className="metric-card">
        <h3>Completed Jobs</h3>
        <p>{completedJobs}</p>
      </div>
      <div className="metric-card">
        <h3>Pending Jobs</h3>
        <p>{pendingJobs}</p>
      </div>
      <div className="metric-card">
        <h3>Total Revenue</h3>
        <p>${totalRevenue.toLocaleString()}</p>
      </div>
    </div>
  );
};

export default Home;
