import React from "react";
import NowServing from "../components/NowServing";
import TokenCard from "../components/TokenCard";

const LiveQueue = () => {

  // Temporary dummy data for testing
  const queueStatus = {
    nowServing: "A-020",
    doctorName: "Dr. Kumar",
    room: "204",
    status: "SERVING"
  };

  const waitingPatients = [
    {
      token: "A-021",
      patientName: "Patient 1",
      position: 1,
      status: "WAITING",
      priority: "NORMAL"
    },
    {
      token: "A-022",
      patientName: "Patient 2",
      position: 2,
      status: "WAITING",
      priority: "NORMAL"
    },
    {
      token: "A-023",
      patientName: "Patient 3",
      position: 3,
      status: "WAITING",
      priority: "HIGH"
    }
  ];

  return (
    <div>

      <h1>MEDQ-CARE Live Queue</h1>

      {/* Currently serving patient */}
      <NowServing
        token={queueStatus.nowServing}
        doctorName={queueStatus.doctorName}
        room={queueStatus.room}
        status={queueStatus.status}
      />

      <h2>Waiting Patients</h2>

      {/* Waiting patients */}
      <div>

        {waitingPatients.map((patient) => (
          <TokenCard
            key={patient.token}
            token={patient.token}
            patientName={patient.patientName}
            position={patient.position}
            status={patient.status}
            priority={patient.priority}
          />
        ))}

      </div>

    </div>
  );
};

export default LiveQueue;