import React, { useState } from "react";
import { checkInPatient } from "../services/queueService";

const WalkIn = () => {
  const [patientId, setPatientId] = useState("");
  const [doctorId, setDoctorId] = useState("D001");
  const [departmentId, setDepartmentId] = useState("CARDIO");
  const [priority, setPriority] = useState("NORMAL");

  const [token, setToken] = useState("");
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    setMessage("");
    setError("");
    setToken("");

    if (!patientId) {
      setError("Please enter Patient ID");
      return;
    }

    try {
      const response = await checkInPatient({
        patientId,
        doctorId,
        departmentId,
        priority,
      });

      setToken(response.data.token);
      setMessage("Patient checked in successfully!");
    } catch (err) {
      setError(err.message);
    }
  };

  return (
    <div>
      <h1>Walk-In Registration</h1>

      <form onSubmit={handleSubmit}>
        <label>Patient ID</label>
        <br />
        <input
          type="text"
          placeholder="Example: P001"
          value={patientId}
          onChange={(e) => setPatientId(e.target.value)}
        />

        <br />
        <br />

        <label>Doctor ID</label>
        <br />
        <input
          type="text"
          value={doctorId}
          onChange={(e) => setDoctorId(e.target.value)}
        />

        <br />
        <br />

        <label>Department ID</label>
        <br />
        <input
          type="text"
          value={departmentId}
          onChange={(e) => setDepartmentId(e.target.value)}
        />

        <br />
        <br />

        <label>Priority</label>
        <br />
        <select
          value={priority}
          onChange={(e) => setPriority(e.target.value)}
        >
          <option value="NORMAL">Normal</option>
          <option value="HIGH">High</option>
          <option value="EMERGENCY">Emergency</option>
        </select>

        <br />
        <br />

        <button type="submit">
          Generate Token
        </button>
      </form>

      {message && <p>{message}</p>}

      {error && <p>{error}</p>}

      {token && (
        <div>
          <h2>Your Token</h2>
          <h1>{token}</h1>
          <p>Please wait until your token is called.</p>
        </div>
      )}
    </div>
  );
};

export default WalkIn;