import React from "react";
import "./WaitingTime.css";

const WaitingTime = ({ minutes = 0, token }) => {
  return (
    <div className="waiting-time-card">
      <h2>Estimated Waiting Time</h2>

      <div className="waiting-time-value">
        {minutes}
      </div>

      <p className="waiting-time-unit">
        minutes
      </p>

      {token && (
        <p>
          For token <strong>{token}</strong>
        </p>
      )}

      <p className="waiting-time-message">
        {minutes === 0
          ? "You are next!"
          : "Please wait for your turn."}
      </p>
    </div>
  );
};

export default WaitingTime;