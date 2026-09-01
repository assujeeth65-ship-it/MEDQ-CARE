import React, { useState } from "react";
import {
  callNextPatient,
  skipPatient,
  holdPatient,
  resumePatient,
  completePatient,
} from "../services/queueService";

const QueueControl = () => {
  const [queueId] = useState("D001-CARDIO");
  const [token, setToken] = useState("");
  const [message, setMessage] = useState("");

  const handleCallNext = async () => {
    try {
      const response = await callNextPatient(queueId);

      setMessage(
        `Now serving: ${response.data.token}`
      );
    } catch (error) {
      setMessage(error.message);
    }
  };

  const handleSkip = async () => {
    if (!token) {
      setMessage("Enter a token first");
      return;
    }

    try {
      const response = await skipPatient(queueId, token);

      setMessage(
        `${response.data.token} skipped successfully`
      );

      setToken("");
    } catch (error) {
      setMessage(error.message);
    }
  };

  const handleHold = async () => {
    if (!token) {
      setMessage("Enter a token first");
      return;
    }

    try {
      const response = await holdPatient(queueId, token);

      setMessage(
        `${response.data.token} placed on hold`
      );

      setToken("");
    } catch (error) {
      setMessage(error.message);
    }
  };

  const handleResume = async () => {
    if (!token) {
      setMessage("Enter a token first");
      return;
    }

    try {
      const response = await resumePatient(queueId, token);

      setMessage(
        `${response.data.token} returned to queue`
      );

      setToken("");
    } catch (error) {
      setMessage(error.message);
    }
  };

  const handleComplete = async () => {
    if (!token) {
      setMessage("Enter a token first");
      return;
    }

    try {
      const response = await completePatient(queueId, token);

      setMessage(
        `${response.data.token} completed successfully`
      );

      setToken("");
    } catch (error) {
      setMessage(error.message);
    }
  };

  return (
    <div>
      <h1>Queue Control</h1>

      <p>
        Queue: <strong>{queueId}</strong>
      </p>

      <button onClick={handleCallNext}>
        Call Next Patient
      </button>

      <hr />

      <label>
        Patient Token:
      </label>

      <br />

      <input
        type="text"
        placeholder="Example: A-001"
        value={token}
        onChange={(e) => setToken(e.target.value)}
      />

      <br />
      <br />

      <button onClick={handleSkip}>
        Skip
      </button>

      <button onClick={handleHold}>
        Hold
      </button>

      <button onClick={handleResume}>
        Resume
      </button>

      <button onClick={handleComplete}>
        Complete
      </button>

      {message && (
        <p>
          <strong>{message}</strong>
        </p>
      )}
    </div>
  );
};

export default QueueControl;