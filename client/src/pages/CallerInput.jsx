import React, { useState } from "react";

const CallerInput = ({ startFakeCall, ringtoneRef }) => {
    const [callerName, setCallerName] = useState("");
    const [callerNumber, setCallerNumber] = useState("");

    // Play Ringtone with User Interaction
    const playRingtone = () => {
        if (ringtoneRef.current) {
            ringtoneRef.current.currentTime = 0;
            ringtoneRef.current.loop = true;
            ringtoneRef.current.play().catch(err => {
                console.error("Audio play error:", err);
            });
        }
    };

    return (
        <div className="container">
            <h2>Call Alert</h2>
            <label>Caller Name:</label>
            <input 
                type="text" 
                placeholder="Enter caller name"
                value={callerName}
                onChange={(e) => setCallerName(e.target.value)}
            />

            <label>Caller Number:</label>
            <input 
                type="text" 
                placeholder="Enter caller number"
                value={callerNumber}
                onChange={(e) => setCallerNumber(e.target.value)}
            />

            <button 
                className="start-call-btn" 
                onClick={() => {
                    startFakeCall(callerName, callerNumber);
                    playRingtone(); // Play ringtone when call starts
                }}
            >
                Start Call
            </button>
        </div>
    );
};

export default CallerInput;