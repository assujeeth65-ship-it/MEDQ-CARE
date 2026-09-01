import React, { useEffect, useState } from "react";
import { getTodayPatients } from "../../services/doctorService";
import "./TodayPatients.css";

const TodayPatients = () => {
  const [patients, setPatients] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    getTodayPatients("D021")
      .then((data) => setPatients(data.patients || data.data || []))
      .catch((err) => setError(err.message))
      .finally(() => setLoading(false));
  }, []);

  return (
    <div className="simple-page">
      <h1>Today's Patients</h1>
      {loading && <p>Loading patients...</p>}
      {error && <p className="error-text">{error}</p>}
      {!loading && !error && (
        patients.length ? (
          <div className="data-list">
            {patients.map((patient) => (
              <div className="data-card" key={patient.appointmentId || patient.patientId}>
                <strong>{patient.patientName}</strong>
                <span>Token: {patient.tokenNumber}</span>
                <span>Status: {patient.status}</span>
              </div>
            ))}
          </div>
        ) : <p>No patients scheduled today.</p>
      )}
    </div>
  );
};

export default TodayPatients;
