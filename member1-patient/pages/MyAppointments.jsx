import React, { useState } from "react";
import AppointmentCard from "../components/AppointmentCard";

const MyAppointments = () => {
  const [appointments, setAppointments] = useState([
    {
      id: 1,
      doctorName: "Dr. Arun Kumar",
      department: "Cardiology",
      hospitalName: "MEDQ CARE Hospital",
      date: "28 Aug 2026",
      time: "10:30 AM",
      status: "Confirmed",
      tokenNumber: "A-024",
      appointmentType: "In-Person",
    },
    {
      id: 2,
      doctorName: "Dr. Priya Sharma",
      department: "Dermatology",
      hospitalName: "City Care Hospital",
      date: "30 Aug 2026",
      time: "02:00 PM",
      status: "Pending",
      tokenNumber: "D-015",
      appointmentType: "In-Person",
    },
    {
      id: 3,
      doctorName: "Dr. Rahul Raj",
      department: "General Medicine",
      hospitalName: "MEDQ CARE Hospital",
      date: "25 Aug 2026",
      time: "11:00 AM",
      status: "Completed",
      tokenNumber: "G-010",
      appointmentType: "In-Person",
    },
  ]);

  const [activeFilter, setActiveFilter] = useState("All");

  const filters = [
    "All",
    "Confirmed",
    "Pending",
    "Completed",
    "Cancelled",
  ];

  const filteredAppointments =
    activeFilter === "All"
      ? appointments
      : appointments.filter(
          (appointment) => appointment.status === activeFilter
        );

  const handleCancel = (appointment) => {
    const confirmed = window.confirm(
      `Are you sure you want to cancel the appointment with ${appointment.doctorName}?`
    );

    if (!confirmed) {
      return;
    }

    setAppointments((prevAppointments) =>
      prevAppointments.map((item) =>
        item.id === appointment.id
          ? {
              ...item,
              status: "Cancelled",
            }
          : item
      )
    );
  };

  const handleView = (appointment) => {
    window.alert(
      `Doctor: ${appointment.doctorName}\n` +
        `Department: ${appointment.department}\n` +
        `Hospital: ${appointment.hospitalName}\n` +
        `Date: ${appointment.date}\n` +
        `Time: ${appointment.time}\n` +
        `Token: ${appointment.tokenNumber}\n` +
        `Status: ${appointment.status}`
    );
  };

  return (
    <div className="min-h-screen bg-gray-100 p-4 sm:p-6">

      <div className="mx-auto max-w-7xl">

        {/* Header */}
        <div className="mb-6">
          <h1 className="text-3xl font-bold text-gray-800">
            My Appointments
          </h1>

          <p className="mt-1 text-gray-500">
            View and manage all your appointments.
          </p>
        </div>

        {/* Filters */}
        <div className="mb-6 flex flex-wrap gap-2">
          {filters.map((filter) => {
            const isActive = activeFilter === filter;

            return (
              <button
                key={filter}
                type="button"
                onClick={() => setActiveFilter(filter)}
                className={`rounded-full px-4 py-2 text-sm font-medium transition ${
                  isActive
                    ? "bg-blue-600 text-white"
                    : "bg-white text-gray-600 hover:bg-blue-50 hover:text-blue-600"
                }`}
              >
                {filter}
              </button>
            );
          })}
        </div>

        {/* Appointment Count */}
        <div className="mb-5">
          <p className="text-sm text-gray-500">
            Showing{" "}
            <span className="font-semibold text-gray-800">
              {filteredAppointments.length}
            </span>{" "}
            appointment
            {filteredAppointments.length !== 1 ? "s" : ""}
          </p>
        </div>

        {/* Appointment Cards */}
        {filteredAppointments.length === 0 ? (
          <div className="rounded-2xl bg-white p-10 text-center shadow-sm">
            <div className="mb-3 text-4xl">
              📅
            </div>

            <h2 className="text-xl font-semibold text-gray-800">
              No Appointments Found
            </h2>

            <p className="mt-2 text-sm text-gray-500">
              You don't have any appointments under this category.
            </p>
          </div>
        ) : (
          <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {filteredAppointments.map((appointment) => (
              <AppointmentCard
                key={appointment.id}
                appointment={appointment}
                onCancel={handleCancel}
                onView={handleView}
              />
            ))}
          </div>
        )}

      </div>

    </div>
  );
};

export default MyAppointments;