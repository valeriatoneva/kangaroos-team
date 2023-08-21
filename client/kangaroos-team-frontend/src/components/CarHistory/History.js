import React, { useState } from 'react';
import './History.css';

function CarHistory() {
    // Sample service history data
    const allHistoryData = [
        { regNumber: 'ABC123', date: '2023-08-01', description: 'Oil change' },
        { regNumber: 'DEF456', date: '2023-06-15', description: 'Tire rotation' },
        { regNumber: 'ABC123', date: '2023-04-10', description: 'Brake inspection' },
        // ... more data
    ];

    // State to store the selected registration number and its corresponding service history
    const [selectedRegNumber, setSelectedRegNumber] = useState(null);

    // Filter service history based on the selected registration number
    const filteredHistory = allHistoryData.filter(entry => entry.regNumber === selectedRegNumber);

    return (
        <div className="car-history">
            <h2>Car Service History</h2>
            <div className="search-form">
                <label htmlFor="regNumber">Search by Registration Number:</label>
                <input
                    type="text"
                    id="regNumber"
                    placeholder="Enter registration number"
                    onChange={event => setSelectedRegNumber(event.target.value)}
                />
            </div>
            <ul className="history-list">
                {filteredHistory.map((entry, index) => (
                    <li key={index} className="history-item">
                        <span className="history-date">{entry.date}</span>
                        <span className="history-description">{entry.description}</span>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default CarHistory;
