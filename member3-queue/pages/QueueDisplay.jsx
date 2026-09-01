import React, { useEffect, useState } from "react";
import { getQueueStatus } from "../services/queueService";

const QueueDisplay = () => {
  const [queue, setQueue] = useState(null);
  const [error, setError] = useState("");

  const queueId = "D001-CARDIO";

  const loadQueue = async () => {
    try {
      const response = await getQueueStatus(queueId);
      setQueue(response.data);
      setError("");
    } catch (err) {
      setError(err.message);
    }
  };

  useEffect(() => {
    loadQueue();

    const interval = setInterval(loadQueue, 5000);

    return () => clearInterval(interval);
  }, []);

  if (error) {
    return <h2>{error}</h2>;
  }

  if (!queue) {
    return <h2>Loading queue...</h2>;
  }

  return (
    <div>
      <h1>Queue Display</h1>

      <h2>Now Serving</h2>

      <div>
        <strong>
          {queue.nowServing || "No patient currently serving"}
        </strong>
      </div>

      <hr />

      <h2>Queue Information</h2>

      <p>
        Total Patients: {queue.totalPatients}
      </p>

      <p>
        Waiting: {queue.waiting}
      </p>

      <p>
        Serving: {queue.serving}
      </p>

      <p>
        Completed: {queue.completed}
      </p>

      <h2>Waiting Patients</h2>

      {queue.patients
        .filter((patient) => patient.status === "WAITING")
        .map((patient) => (
          <div key={patient.token}>
            <strong>{patient.token}</strong>
            <span> — {patient.priority}</span>
          </div>
        ))}
    </div>
  );
};

export default QueueDisplay;