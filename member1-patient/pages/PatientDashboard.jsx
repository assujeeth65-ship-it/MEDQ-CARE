import React from "react";
import { useNavigate } from "react-router-dom";
import PatientNavbar from "../components/PatientNavbar";
import PatientSidebar from "../components/PatientSidebar";
import AppointmentCard from "../components/AppointmentCard";
import QueueCard from "../components/QueueCard";
import MockAbhaCard from "../components/MockAbhaCard";

const PatientDashboard = () => {
  const navigate = useNavigate();
  const patient = {
    name: "Arun Kumar",
    mobile: "9876543210",
    dateOfBirth: "15 Aug 2000",
    gender: "Male",
    address: "Chennai, Tamil Nadu",
    abhaId: "12-3456-7890-1234",
  };

  const appointment = {
    doctorName: "Dr. Arun Kumar",
    department: "Cardiology",
    hospitalName: "MEDQ CARE Hospital",
    date: "28 Aug 2026",
    time: "10:30 AM",
    status: "Confirmed",
    tokenNumber: "A-024",
    appointmentType: "In-Person",
  };

  const queue = {
    tokenNumber: "A-024",
    nowServing: "A-020",
    patientsAhead: 3,
    estimatedWaitTime: "15 mins",
    doctorName: "Dr. Arun Kumar",
    department: "Cardiology",
    room: "204",
    status: "WAITING",
  };

  const handleCancel = (appointmentData) => {
    alert(`Cancel appointment for ${appointmentData.doctorName}?`);
  };

  const handleView = (appointmentData) => {
    alert(
      `Doctor: ${appointmentData.doctorName}\n` +
      `Department: ${appointmentData.department}\n` +
      `Date: ${appointmentData.date}\n` +
      `Time: ${appointmentData.time}`
    );
  };

  const handleLogout = () => {
    alert("Logout clicked");
  };

  const handleNavigation = (item) => {
  navigate(item.path);
};

  return (
    <div className="min-h-screen bg-gray-100">

      {/* Navbar */}
      <PatientNavbar
        patientName={patient.name}
        onLogout={handleLogout}
      />

      <div className="flex">

        {/* Sidebar */}
        <div className="hidden md:block">
          <PatientSidebar
            activePage="Dashboard"
            onNavigate={handleNavigation}
          />
        </div>

        {/* Main Content */}
        <main className="flex-1 p-4 sm:p-6">

          {/* Welcome */}
          <div className="mb-6">
            <h1 className="text-2xl font-bold text-gray-800 sm:text-3xl">
              Welcome, {patient.name} 👋
            </h1>

            <p className="mt-1 text-sm text-gray-500">
              Here's an overview of your healthcare activity.
            </p>
          </div>

          {/* Quick Stats */}
          <div className="mb-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">

            <div className="rounded-2xl bg-white p-5 shadow-sm">
              <p className="text-sm text-gray-500">
                Upcoming Appointments
              </p>

              <p className="mt-2 text-3xl font-bold text-blue-600">
                2
              </p>
            </div>

            <div className="rounded-2xl bg-white p-5 shadow-sm">
              <p className="text-sm text-gray-500">
                Active Queue
              </p>

              <p className="mt-2 text-3xl font-bold text-orange-500">
                A-024
              </p>
            </div>

            <div className="rounded-2xl bg-white p-5 shadow-sm">
              <p className="text-sm text-gray-500">
                Patients Ahead
              </p>

              <p className="mt-2 text-3xl font-bold text-purple-600">
                3
              </p>
            </div>

            <div className="rounded-2xl bg-white p-5 shadow-sm">
              <p className="text-sm text-gray-500">
                Estimated Wait
              </p>

              <p className="mt-2 text-3xl font-bold text-green-600">
                15 min
              </p>
            </div>

          </div>

          {/* Main Dashboard Grid */}
          <div className="grid gap-6 xl:grid-cols-2">

            {/* Appointment */}
            <section>
              <div className="mb-3 flex items-center justify-between">
                <h2 className="text-xl font-bold text-gray-800">
                  Upcoming Appointment
                </h2>
              </div>

              <AppointmentCard
                appointment={appointment}
                onCancel={handleCancel}
                onView={handleView}
              />
            </section>

            {/* Queue */}
            <section>
              <div className="mb-3">
                <h2 className="text-xl font-bold text-gray-800">
                  Live Queue
                </h2>
              </div>

              <QueueCard queue={queue} />
            </section>

          </div>

          {/* ABHA Section */}
          <section className="mt-8">

            <div className="mb-3">
              <h2 className="text-xl font-bold text-gray-800">
                Health ID
              </h2>

              <p className="text-sm text-gray-500">
                Your registered healthcare identification details
              </p>
            </div>

            <MockAbhaCard patient={patient} />

          </section>

        </main>

      </div>

    </div>
  );
};

export default PatientDashboard;