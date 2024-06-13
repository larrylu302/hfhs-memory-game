import React from 'react';
import './Calendar.css';
import { Link } from 'react-router-dom';
import { useState } from 'react';

const Calendar = () => {

    const [userid, setUID] = useState('');
    const [showError, setShowError] = useState(false);
    const days = Array.from({ length: 12 }, (_, i) => i + 1);

    const handleUserIDChange = (event) => {
        setUID(event.target.value);
        if (event.target.value.trim() !== '') {
            setShowError(false);
        }
    }

    const handleClick = (e) => {
        if (userid.trim() === '') {
            e.preventDefault();
            setShowError(true);
        }
    }

    return (
        <div className="calendar-container">
            <h1>Calendar</h1>
            <input className="input-box" value={userid} placeholder='Player ID' onChange={handleUserIDChange} />
            {showError && <p className="error-message">Please enter a valid Player ID.</p>}
            <div className="grid-container">
                {days.map(day => (
                    <Link key={day} to={`${userid}/${day}/intervention`} onClick={handleClick}>
                        <button className="grid-button">Day {day}</button>
                    </Link>
                ))}
            </div>
        </div>
    );
};

export default Calendar;
