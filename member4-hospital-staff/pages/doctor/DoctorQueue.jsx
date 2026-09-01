import React, { useState } from "react";

const DoctorQueue = () => {
  const [queue, setQueue] = useState([
    {
      token: "A001",
      patientId: "P001",
      patientName: "Rahul Kumar",
      age: 32,
      reason: "Fever and headache",
      appointmentTime: "09:30 AM",
      status: "Waiting",
    },
    {
      token: "A002",
      patientId: "P002",
      patientName: "Priya Sharma",
      age: 28,
      reason: "Chest discomfort",
      appointmentTime: "09:45 AM",
      status: "Waiting",
    },
    {
      token: "A003",
      patientId: "P003",
      patientName: "Arun Raj",
      age: 45,
      reason: "Back pain",
      appointmentTime: "10:00 AM",
      status: "Waiting",
    },
    {
      token: "A004",
      patientId: "P004",
      patientName: "Meena Devi",
      age: 51,
      reason: "Blood pressure check",
      appointmentTime: "10:15 AM",
      status: "Waiting",
    },
  ]);

  const [selectedPatient, setSelectedPatient] = useState(null);

  const callNextPatient = () => {
    const nextPatient = queue.find(
      (patient) => patient.status === "Waiting"
    );

    if (!nextPatient) {
      alert("No patients are currently waiting.");
      return;
    }

    setQueue((previous) =>
      previous.map((patient) =>
        patient.token === nextPatient.token
          ? { ...patient, status: "In Consultation" }
          : patient
      )
    );

    setSelectedPatient(nextPatient);
  };

  const completeConsultation = (token) => {
    setQueue((previous) =>
      previous.map((patient) =>
        patient.token === token
          ? { ...patient, status: "Completed" }
          : patient
      )
    );

    setSelectedPatient(null);

    alert("Patient consultation completed.");
  };

  const waitingCount = queue.filter(
    (patient) => patient.status === "Waiting"
  ).length;

  const completedCount = queue.filter(
    (patient) => patient.status === "Completed"
  ).length;

  return (
    <div className="min-h-screen bg-gray-100">

      {/* Header */}
      <header className="bg-white border-b">
        <div className="max-w-7xl mx-auto px-6 py-4 flex flex-col md:flex-row md:items-center md:justify-between gap-4">

          <div>
            <h1 className="text-2xl font-bold text-blue-700">
              MEDQ CARE
            </h1>

            <p className="text-sm text-gray-500">
              Doctor Queue
            </p>
          </div>

          <div className="text-right">
            <p className="font-semibold text-gray-800">
              Dr. Arun
            </p>

            <p className="text-sm text-gray-500">
              Doctor ID: D001
            </p>
          </div>

        </div>
      </header>

      {/* Main */}
      <main className="max-w-7xl mx-auto px-6 py-8">

        {/* Heading */}
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-8">

          <div>
            <h2 className="text-3xl font-bold text-gray-800">
              Today's Patient Queue
            </h2>

            <p className="text-gray-500 mt-1">
              View waiting patients and manage consultations.
            </p>
          </div>

          <button
            onClick={callNextPatient}
            className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-semibold"
          >
            Call Next Patient
          </button>

        </div>

        {/* Statistics */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-5 mb-8">

          <div className="bg-white border rounded-xl p-5">
            <p className="text-sm text-gray-500">
              Total Patients
            </p>

            <h3 className="text-3xl font-bold text-blue-600 mt-2">
              {queue.length}
            </h3>
          </div>

          <div className="bg-white border rounded-xl p-5">
            <p className="text-sm text-gray-500">
              Waiting
            </p>

            <h3 className="text-3xl font-bold text-orange-500 mt-2">
              {waitingCount}
            </h3>
          </div>

          <div className="bg-white border rounded-xl p-5">
            <p className="text-sm text-gray-500">
              Completed
            </p>

            <h3 className="text-3xl font-bold text-green-600 mt-2">
              {completedCount}
            </h3>
          </div>

        </div>

        {/* Current Patient */}
        {selectedPatient && (
          <div className="bg-blue-50 border border-blue-200 rounded-xl p-6 mb-6">

            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">

              <div>

                <p className="text-sm text-blue-600 font-semibold">
                  CURRENT PATIENT
                </p>

                <h3 className="text-2xl font-bold text-gray-800 mt-1">
                  {selectedPatient.patientName}
                </h3>

                <p className="text-gray-600 mt-1">
                  Token: {selectedPatient.token} •{" "}
                  Patient ID: {selectedPatient.patientId}
                </p>

              </div>

              <button
                onClick={() =>
                  completeConsultation(selectedPatient.token)
                }
                className="bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-lg font-semibold"
              >
                Complete Consultation
              </button>

            </div>

          </div>
        )}

        {/* Queue Table */}
        <div className="bg-white border rounded-xl overflow-hidden">

          <div className="p-6 border-b">

            <h3 className="text-xl font-bold text-gray-800">
              Patient Queue
            </h3>

            <p className="text-sm text-gray-500 mt-1">
              Patients assigned to the doctor for today's consultation.
            </p>

          </div>

          <div className="overflow-x-auto">

            <table className="w-full">

              <thead className="bg-gray-50">

                <tr className="text-left">

                  <th className="px-6 py-4 text-sm font-semibold text-gray-500">
                    Token
                  </th>

                  <th className="px-6 py-4 text-sm font-semibold text-gray-500">
                    Patient
                  </th>

                  <th className="px-6 py-4 text-sm font-semibold text-gray-500">
                    Age
                  </th>

                  <th className="px-6 py-4 text-sm font-semibold text-gray-500">
                    Reason
                  </th>

                  <th className="px-6 py-4 text-sm font-semibold text-gray-500">
                    Appointment
                  </th>

                  <th className="px-6 py-4 text-sm font-semibold text-gray-500">
                    Status
                  </th>

                  <th className="px-6 py-4 text-sm font-semibold text-gray-500">
                    Action
                  </th>

                </tr>

              </thead>

              <tbody>

                {queue.map((patient) => (

                  <tr
                    key={patient.token}
                    className="border-t hover:bg-gray-50"
                  >

                    <td className="px-6 py-4">

                      <span className="font-bold text-blue-600">
                        {patient.token}
                      </span>

                    </td>

                    <td className="px-6 py-4">

                      <p className="font-semibold text-gray-800">
                        {patient.patientName}
                      </p>

                      <p className="text-xs text-gray-500">
                        {patient.patientId}
                      </p>

                    </td>

                    <td className="px-6 py-4 text-gray-600">
                      {patient.age}
                    </td>

                    <td className="px-6 py-4 text-gray-600">
                      {patient.reason}
                    </td>

                    <td className="px-6 py-4 text-gray-600">
                      {patient.appointmentTime}
                    </td>

                    <td className="px-6 py-4">

                      <span
                        className={`px-3 py-1 rounded-full text-xs font-semibold ${
                          patient.status === "Waiting"
                            ? "bg-orange-100 text-orange-700"
                            : patient.status === "In Consultation"
                            ? "bg-blue-100 text-blue-700"
                            : "bg-green-100 text-green-700"
                        }`}
                      >
                        {patient.status}
                      </span>

                    </td>

                    <td className="px-6 py-4">

                      {patient.status === "Waiting" && (
                        <button
                          onClick={() => {
                            setQueue((previous) =>
                              previous.map((item) =>
                                item.token === patient.token
                                  ? {
                                      ...item,
                                      status: "In Consultation",
                                    }
                                  : item
                              )
                            );

                            setSelectedPatient({
                              ...patient,
                              status: "In Consultation",
                            });
                          }}
                          className="px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg text-sm font-semibold"
                        >
                          Call
                        </button>
                      )}

                      {patient.status === "In Consultation" && (
                        <button
                          onClick={() =>
                            completeConsultation(patient.token)
                          }
                          className="px-4 py-2 bg-green-600 hover:bg-green-700 text-white rounded-lg text-sm font-semibold"
                        >
                          Complete
                        </button>
                      )}

                      {patient.status === "Completed" && (
                        <span className="text-sm text-gray-400">
                          Finished
                        </span>
                      )}

                    </td>

                  </tr>

                ))}

              </tbody>

            </table>

          </div>

        </div>

        {/* Team Integration */}
        <div className="bg-blue-50 border border-blue-200 rounded-xl p-6 mt-6">

          <h3 className="font-bold text-blue-800">
            Team Integration
          </h3>

          <p className="text-sm text-blue-700 mt-2">
            This page currently uses demonstration queue data.
            During final integration, the queue will be received from
            the shared Queue Management module developed by Member 3.
            Patient status and token information will then be updated
            through the common backend.
          </p>

        </div>

      </main>

    </div>
  );
};

export default DoctorQueue;