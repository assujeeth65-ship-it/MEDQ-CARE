import React, { useState } from "react";

const Consultation = () => {
  const [patient, setPatient] = useState({
    patientId: "P001",
    name: "Rahul Kumar",
    age: "32",
    gender: "Male",
    phone: "+91 98765 12345",
    reason: "Fever and headache",
  });

  const [notes, setNotes] = useState("");
  const [diagnosis, setDiagnosis] = useState("");
  const [prescription, setPrescription] = useState("");
  const [followUp, setFollowUp] = useState("");
  const [completed, setCompleted] = useState(false);

  const handleCompleteConsultation = (e) => {
    e.preventDefault();

    if (!diagnosis.trim()) {
      alert("Please enter the diagnosis.");
      return;
    }

    setCompleted(true);

    alert("Consultation completed successfully.");
  };

  const handleReset = () => {
    setNotes("");
    setDiagnosis("");
    setPrescription("");
    setFollowUp("");
    setCompleted(false);
  };

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
              Doctor Consultation
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

        {/* Page heading */}
        <div className="mb-8">

          <h2 className="text-3xl font-bold text-gray-800">
            Patient Consultation
          </h2>

          <p className="text-gray-500 mt-1">
            Review patient details and record consultation information.
          </p>

        </div>

        {/* Patient Information */}
        <div className="bg-white border rounded-xl p-6 mb-6">

          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-6">

            <div>
              <h3 className="text-xl font-bold text-gray-800">
                Patient Information
              </h3>

              <p className="text-sm text-gray-500 mt-1">
                Current patient selected from the doctor queue.
              </p>
            </div>

            <span className="px-4 py-2 rounded-full bg-blue-100 text-blue-700 text-sm font-semibold w-fit">
              Patient ID: {patient.patientId}
            </span>

          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">

            <div className="border rounded-lg p-4">
              <p className="text-sm text-gray-500">
                Patient Name
              </p>

              <p className="font-semibold text-gray-800 mt-1">
                {patient.name}
              </p>
            </div>

            <div className="border rounded-lg p-4">
              <p className="text-sm text-gray-500">
                Age
              </p>

              <p className="font-semibold text-gray-800 mt-1">
                {patient.age}
              </p>
            </div>

            <div className="border rounded-lg p-4">
              <p className="text-sm text-gray-500">
                Gender
              </p>

              <p className="font-semibold text-gray-800 mt-1">
                {patient.gender}
              </p>
            </div>

            <div className="border rounded-lg p-4">
              <p className="text-sm text-gray-500">
                Phone
              </p>

              <p className="font-semibold text-gray-800 mt-1">
                {patient.phone}
              </p>
            </div>

            <div className="border rounded-lg p-4 md:col-span-2">
              <p className="text-sm text-gray-500">
                Reason for Visit
              </p>

              <p className="font-semibold text-gray-800 mt-1">
                {patient.reason}
              </p>
            </div>

          </div>

        </div>

        {/* Consultation Form */}
        <form onSubmit={handleCompleteConsultation}>

          <div className="bg-white border rounded-xl p-6">

            <div className="mb-6">

              <h3 className="text-xl font-bold text-gray-800">
                Consultation Details
              </h3>

              <p className="text-sm text-gray-500 mt-1">
                Enter the clinical information for this consultation.
              </p>

            </div>

            {/* Clinical Notes */}
            <div className="mb-6">

              <label className="block text-sm font-semibold text-gray-700 mb-2">
                Clinical Notes
              </label>

              <textarea
                value={notes}
                onChange={(e) => setNotes(e.target.value)}
                rows="5"
                placeholder="Enter symptoms, observations and clinical notes..."
                className="w-full border border-gray-300 rounded-lg px-4 py-3 outline-none focus:ring-2 focus:ring-blue-500 resize-none"
              />

            </div>

            {/* Diagnosis */}
            <div className="mb-6">

              <label className="block text-sm font-semibold text-gray-700 mb-2">
                Diagnosis *
              </label>

              <textarea
                value={diagnosis}
                onChange={(e) => setDiagnosis(e.target.value)}
                rows="4"
                placeholder="Enter diagnosis..."
                className="w-full border border-gray-300 rounded-lg px-4 py-3 outline-none focus:ring-2 focus:ring-blue-500 resize-none"
              />

            </div>

            {/* Prescription */}
            <div className="mb-6">

              <label className="block text-sm font-semibold text-gray-700 mb-2">
                Prescription
              </label>

              <textarea
                value={prescription}
                onChange={(e) => setPrescription(e.target.value)}
                rows="5"
                placeholder="Enter medicines, dosage and instructions..."
                className="w-full border border-gray-300 rounded-lg px-4 py-3 outline-none focus:ring-2 focus:ring-blue-500 resize-none"
              />

            </div>

            {/* Follow Up */}
            <div className="mb-6">

              <label className="block text-sm font-semibold text-gray-700 mb-2">
                Follow-up Date
              </label>

              <input
                type="date"
                value={followUp}
                onChange={(e) => setFollowUp(e.target.value)}
                className="w-full md:w-80 border border-gray-300 rounded-lg px-4 py-3 outline-none focus:ring-2 focus:ring-blue-500"
              />

            </div>

            {/* Buttons */}
            <div className="flex flex-col sm:flex-row justify-end gap-3">

              <button
                type="button"
                onClick={handleReset}
                className="px-6 py-3 border border-gray-300 rounded-lg font-semibold hover:bg-gray-50"
              >
                Clear
              </button>

              <button
                type="submit"
                disabled={completed}
                className="px-6 py-3 bg-blue-600 hover:bg-blue-700 disabled:bg-green-600 text-white rounded-lg font-semibold"
              >
                {completed
                  ? "Consultation Completed"
                  : "Complete Consultation"}
              </button>

            </div>

          </div>

        </form>

        {/* Completed Message */}
        {completed && (
          <div className="bg-green-50 border border-green-200 rounded-xl p-6 mt-6">

            <div className="flex items-start gap-4">

              <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center">
                ✓
              </div>

              <div>

                <h3 className="font-bold text-green-800">
                  Consultation Completed
                </h3>

                <p className="text-sm text-green-700 mt-1">
                  The consultation for {patient.name} has been completed.
                </p>

                <p className="text-sm text-green-700 mt-1">
                  The patient can now proceed according to the hospital
                  workflow.
                </p>

              </div>

            </div>

          </div>
        )}

        {/* Integration Note */}
        <div className="bg-blue-50 border border-blue-200 rounded-xl p-6 mt-6">

          <h3 className="font-bold text-blue-800">
            Team Integration
          </h3>

          <p className="text-sm text-blue-700 mt-2">
            Currently this page uses demonstration patient data.
            During integration, the patient will be received from the
            shared Queue Management module and consultation details
            will be stored through the backend.
          </p>

        </div>

      </main>

    </div>
  );
};

export default Consultation;