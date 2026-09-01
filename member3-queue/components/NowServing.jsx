import React from "react";
import "./NowServing.css";

const NowServing = ({ token, room, doctorName, status = "SERVING" }) => {
  return (
    <div className="now-serving-card">

      <div className="now-serving-header">
        <span className="live-indicator"></span>
        <span>NOW SERVING</span>
      </div>

      <div className="now-serving-token">
        {token || "--"}
      </div>

      <div className="now-serving-status">
        {status}
      </div>

      {doctorName && (
        <div className="now-serving-doctor">
          Doctor: {doctorName}
        </div>
      )}

      {room && (
        <div className="now-serving-room">
          Room: {room}
        </div>
      )}

    </div>
  );
};

export default NowServing;