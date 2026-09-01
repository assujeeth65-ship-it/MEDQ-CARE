import React from "react";
import "./QueueStatus.css";

const QueueStatus = ({
  totalPatients = 0,
  waiting = 0,
  serving = 0,
  completed = 0
}) => {
  return (
    <div className="queue-status">

      <h2>Queue Status</h2>

      <div className="queue-status-grid">

        <div className="status-box">
          <h3>{totalPatients}</h3>
          <p>Total Patients</p>
        </div>

        <div className="status-box">
          <h3>{waiting}</h3>
          <p>Waiting</p>
        </div>

        <div className="status-box">
          <h3>{serving}</h3>
          <p>Serving</p>
        </div>

        <div className="status-box">
          <h3>{completed}</h3>
          <p>Completed</p>
        </div>

      </div>

    </div>
  );
};

export default QueueStatus;