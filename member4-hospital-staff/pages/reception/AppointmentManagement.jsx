import React, { useState } from "react";
import StaffNavbar from "../../components/StaffNavbar";
import StaffSidebar from "../../components/StaffSidebar";

const AppointmentManagement = () => {
  const [appointments, setAppointments] = useState([
    {
      id: "APT001",
      patient: "Rahul Kumar",
      doctor: "Dr. Arun",
      department: "General Medicine",
      date: "2026-08-29",
      time: "09:30",
      status: "Confirmed",
    },
    {
      id: "APT002",
      patient: "Priya S",
      doctor: "Dr. Priya",
      department: "Cardiology",
      date: "2026-08-29",
      time: "10:00",
      status: "Waiting",
    },
    {
      id: "APT003",
      patient: "Vijay Raj",
      doctor: "Dr. Karthik",
      department: "Orthopedics",
      date: "2026-08-29",
      time: "11:30",
      status: "Completed",
    },
  ]);

  const updateStatus = (id, status) => {
    setAppointments((previous) =>
      previous.map((appointment) =>
        appointment.id === id
          ? { ...appointment, status }
          : appointment
      )
    );
  };

  const handleNavigate = (page) => {
    console.log("Navigate to:", page);
  };

  const handleLogout = () => {
    console.log("Reception logout");
  };

  return (
    <div className="min-h-screen bg-gray-100">

      <StaffNavbar
        userName="Reception Staff"
        role="Receptionist"
        onLogout={handleLogout}
      />

      <div className="flex">

        <StaffSidebar
          role="Reception"
          activePage="appointment-management"
          onNavigate={handleNavigate}
        />

        <main className="flex-1 p-6 md:p-8">

          <div className="mb-8">
            <h2 className="text-3xl font-bold text-gray-800">
              Appointment Management
            </h2>

            <p className="text-gray-500 mt-1">
              View and manage patient appointments.
            </p>
          </div>

          <div className="bg-white rounded-xl border border-gray-200 shadow-sm overflow-hidden">

            <div className="p-6 border-b">
              <h3 className="text-xl font-bold">
                Today's Appointments
              </h3>
            </div>

            <div className="overflow-x-auto">

              <table className="w-full">

                <thead className="bg-gray-50">

                  <tr className="text-left">

                    <th className="px-6 py-4">ID</th>
                    <th className="px-6 py-4">Patient</th>
                    <th className="px-6 py-4">Doctor</th>
                    <th className="px-6 py-4">Department</th>
                    <th className="px-6 py-4">Time</th>
                    <th className="px-6 py-4">Status</th>
                    <th className="px-6 py-4">Action</th>

                  </tr>

                </thead>

                <tbody>

                  {appointments.map((appointment) => (

                    <tr
                      key={appointment.id}
                      className="border-t hover:bg-gray-50"
                    >

                      <td className="px-6 py-4 font-semibold text-blue-600">
                        {appointment.id}
                      </td>

                      <td className="px-6 py-4 font-semibold">
                        {appointment.patient}
                      </td>

                      <td className="px-6 py-4">
                        {appointment.doctor}
                      </td>

                      <td className="px-6 py-4">
                        {appointment.department}
                      </td>

                      <td className="px-6 py-4">
                        {appointment.time}
                      </td>

                      <td className="px-6 py-4">

                        <span className="px-3 py-1 rounded-full text-xs font-semibold bg-blue-100 text-blue-700">
                          {appointment.status}
                        </span>

                      </td>

                      <td className="px-6 py-4">

                        <div className="flex gap-2">

                          <button
                            onClick={() =>
                              updateStatus(
                                appointment.id,
                                "Waiting"
                              )
                            }
                            className="px-3 py-2 text-sm border rounded-lg hover:bg-yellow-50"
                          >
                            Check In
                          </button>

                          <button
                            onClick={() =>
                              updateStatus(
                                appointment.id,
                                "Completed"
                              )
                            }
                            className="px-3 py-2 text-sm border rounded-lg hover:bg-green-50"
                          >
                            Complete
                          </button>

                        </div>

                      </td>

                    </tr>

                  ))}

                </tbody>

              </table>

            </div>

          </div>

        </main>

      </div>

    </div>
  );
};

export default AppointmentManagement;