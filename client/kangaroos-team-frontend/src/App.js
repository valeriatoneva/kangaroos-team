import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import './App.css';
import Home from './components/HomePage/Home';
// import CarList from './components/CarDisplay/CarList';
import Sidebar from './components/AppNavbar/Sidebar';
import Calendar from './components/Calendar/Calendar';
import CarHistory from './components/CarHistory/History';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <Router>
      <div className="App">
        <Sidebar />
        <div className="main-content body-pd" id="body-pd"> {/* Added class and id to align with the Sidebar's JS */}
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/calendar" element={<Calendar />} />
            <Route path="/history" element={<CarHistory />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
