import React from "react";
import "./PatientsAhead.css";

const PatientsAhead = ({ count = 0, token }) => {
  return (
    <div className="patients-ahead-card">
      <h2>Patients Ahead</h2>

      <div className="patients-ahead-count">
        {count}
      </div>

      {token && (
        <p>
          Patients ahead of token <strong>{token}</strong>
        </p>
      )}

      <p className="queue-message">
        {count === 0
          ? "You are next!"
          : `${count} patient${count > 1 ? "s" : ""} ahead of you`}
      </p>
    </div>
  );
};

export default PatientsAhead;