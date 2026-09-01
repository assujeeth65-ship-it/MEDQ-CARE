import React from "react";
import "./TokenCard.css";

const TokenCard = ({
  token,
  patientName,
  position,
  status = "WAITING",
  priority = "NORMAL"
}) => {
  return (
    <div className="token-card">

      <div className="token-card-top">
        <span className="token-label">TOKEN</span>

        <span className={`token-status ${status.toLowerCase()}`}>
          {status}
        </span>
      </div>

      <div className="token-number">
        {token || "--"}
      </div>

      {patientName && (
        <div className="patient-name">
          {patientName}
        </div>
      )}

      <div className="token-details">

        <div>
          <span>Position</span>
          <strong>{position || "--"}</strong>
        </div>

        <div>
          <span>Priority</span>
          <strong>{priority}</strong>
        </div>

      </div>

    </div>
  );
};

export default TokenCard;