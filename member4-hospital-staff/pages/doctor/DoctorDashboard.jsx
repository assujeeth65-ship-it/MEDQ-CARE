import React, { useState } from "react";

const DoctorDashboard = () => {
  const [doctorStatus, setDoctorStatus] = useState("Available");

  const stats = [
    { title: "Patients Today", value: "24", icon: "👥" },
    { title: "Waiting", value: "5", icon: "⏳" },
    { title: "Completed", value: "19", icon: "✅" },
    { title: "Avg. Consultation", value: "12 min", icon: "🕐" },
  ];

  const patients = [
    {
      token: "C-021",
      name: "Arun Kumar",
      age: 45,
      gender: "Male",
      appointment: "10:00 AM",
      status: "Waiting",
    },
    {
      token: "C-022",
      name: "Priya Sharma",
      age: 32,
      gender: "Female",
      appointment: "10:15 AM",
      status: "Waiting",
    },
    {
      token: "C-023",
      name: "Rahul Kumar",
      age: 51,
      gender: "Male",
      appointment: "10:30 AM",
      status: "Waiting",
    },
    {
      token: "C-024",
      name: "Meena Devi",
      age: 29,
      gender: "Female",
      appointment: "10:45 AM",
      status: "Completed",
    },
  ];

  const handleCallNext = () => {
    alert("Calling next patient: C-021");
  };

  return (
    <div className="min-h-screen bg-gray-100">

      {/* Navbar */}
      <header className="bg-white border-b px-6 py-4 flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold text-blue-700">
            MEDQ CARE
          </h1>
          <p className="text-sm text-gray-500">
            Doctor Dashboard
          </p>
        </div>

        <div className="flex items-center gap-4">
          <div className="text-right">
            <p className="font-semibold">Dr. Arun</p>
            <p className="text-sm text-gray-500">
              Cardiology
            </p>
          </div>

          <div className="w-10 h-10 rounded-full bg-blue-600 text-white flex items-center justify-center font-bold">
            DA
          </div>
        </div>
      </header>

      {/* Main */}
      <main className="p-6 max-w-7xl mx-auto">

        {/* Welcome + Status */}
        <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-6">
          <div>
            <h2 className="text-2xl font-bold text-gray-800">
              Welcome, Dr. Arun
            </h2>

            <p className="text-gray-500 mt-1">
              Manage today's patients and consultations.
            </p>
          </div>

          {/* Doctor Status */}
          <div className="mt-4 md:mt-0 flex items-center gap-3">
            <span className="text-sm font-medium text-gray-600">
              Status
            </span>

            <select
              value={doctorStatus}
              onChange={(e) => setDoctorStatus(e.target.value)}
              className="border rounded-lg px-4 py-2 bg-white"
            >
              <option>Available</option>
              <option>On Break</option>
              <option>Delayed</option>
              <option>Unavailable</option>
            </select>
          </div>
        </div>

        {/* Status Alert */}
        {doctorStatus === "Delayed" && (
          <div className="mb-6 bg-yellow-50 border border-yellow-300 text-yellow-800 p-4 rounded-xl">
            ⚠️ Doctor is delayed. Estimated additional waiting time:
            <strong> 20 minutes</strong>
          </div>
        )}

        {/* Statistics */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 mb-6">
          {stats.map((stat) => (
            <div
              key={stat.title}
              className="bg-white rounded-xl shadow-sm p-5 border"
            >
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-gray-500">
                    {stat.title}
                  </p>

                  <h3 className="text-2xl font-bold mt-2">
                    {stat.value}
                  </h3>
                </div>

                <div className="text-3xl">
                  {stat.icon}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Current Queue */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">

          {/* Next Patient */}
          <div className="bg-white rounded-xl shadow-sm border p-6">

            <h3 className="text-lg font-bold text-gray-800 mb-5">
              Next Patient
            </h3>

            <div className="text-center">

              <div className="w-20 h-20 rounded-full bg-blue-100 text-blue-700 flex items-center justify-center mx-auto text-2xl font-bold">
                C-021
              </div>

              <h4 className="text-xl font-bold mt-4">
                Arun Kumar
              </h4>

              <p className="text-gray-500">
                45 years • Male
              </p>

              <p className="text-sm text-gray-500 mt-2">
                Appointment: 10:00 AM
              </p>

              <button
                onClick={handleCallNext}
                className="w-full mt-6 bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-lg font-semibold transition"
              >
                📢 Call Next Patient
              </button>

            </div>
          </div>

          {/* Patient Queue */}
          <div className="lg:col-span-2 bg-white rounded-xl shadow-sm border p-6">

            <div className="flex items-center justify-between mb-5">

              <div>
                <h3 className="text-lg font-bold">
                  Today's Queue
                </h3>

                <p className="text-sm text-gray-500">
                  Cardiology
                </p>
              </div>

              <div className="bg-blue-50 text-blue-700 px-4 py-2 rounded-lg font-semibold">
                Now Serving: C-021
              </div>

            </div>

            <div className="overflow-x-auto">

              <table className="w-full">

                <thead>
                  <tr className="border-b text-left">
                    <th className="py-3 text-sm text-gray-500">
                      Token
                    </th>

                    <th className="py-3 text-sm text-gray-500">
                      Patient
                    </th>

                    <th className="py-3 text-sm text-gray-500">
                      Age / Gender
                    </th>

                    <th className="py-3 text-sm text-gray-500">
                      Appointment
                    </th>

                    <th className="py-3 text-sm text-gray-500">
                      Status
                    </th>
                  </tr>
                </thead>

                <tbody>

                  {patients.map((patient) => (

                    <tr
                      key={patient.token}
                      className="border-b last:border-0"
                    >

                      <td className="py-4 font-bold text-blue-600">
                        {patient.token}
                      </td>

                      <td className="py-4 font-medium">
                        {patient.name}
                      </td>

                      <td className="py-4 text-gray-600">
                        {patient.age} / {patient.gender}
                      </td>

                      <td className="py-4 text-gray-600">
                        {patient.appointment}
                      </td>

                      <td className="py-4">

                        <span
                          className={`px-3 py-1 rounded-full text-xs font-semibold ${
                            patient.status === "Waiting"
                              ? "bg-yellow-100 text-yellow-700"
                              : "bg-green-100 text-green-700"
                          }`}
                        >
                          {patient.status}
                        </span>

                      </td>

                    </tr>

                  ))}

                </tbody>

              </table>

            </div>

          </div>

        </div>

        {/* Quick Actions */}
        <div className="bg-white rounded-xl shadow-sm border p-6 mt-6">

          <h3 className="text-lg font-bold mb-4">
            Quick Actions
          </h3>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">

            <button className="border rounded-lg p-4 text-left hover:bg-gray-50">
              <span className="text-2xl">👨‍⚕️</span>
              <p className="font-semibold mt-2">
                Start Consultation
              </p>
              <p className="text-sm text-gray-500">
                Open current patient
              </p>
            </button>

            <button className="border rounded-lg p-4 text-left hover:bg-gray-50">
              <span className="text-2xl">💊</span>
              <p className="font-semibold mt-2">
                Prescription
              </p>
              <p className="text-sm text-gray-500">
                Add prescription
              </p>
            </button>

            <button className="border rounded-lg p-4 text-left hover:bg-gray-50">
              <span className="text-2xl">🧪</span>
              <p className="font-semibold mt-2">
                Recommend Test
              </p>
              <p className="text-sm text-gray-500">
                Lab or imaging
              </p>
            </button>

            <button className="border rounded-lg p-4 text-left hover:bg-gray-50">
              <span className="text-2xl">📋</span>
              <p className="font-semibold mt-2">
                Patient History
              </p>
              <p className="text-sm text-gray-500">
                View permitted records
              </p>
            </button>

          </div>

        </div>

      </main>
    </div>
  );
};

export default DoctorDashboard;