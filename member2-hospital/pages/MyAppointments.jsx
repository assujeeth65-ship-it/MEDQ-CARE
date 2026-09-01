import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./MyAppointments.css";

const MyAppointments = () => {
  const navigate = useNavigate();

  const [activeTab, setActiveTab] = useState("upcoming");

  const [appointments, setAppointments] = useState([
    {
      id: "APT001",
      type: "Doctor",
      doctor: "Dr. Arun Kumar",
      specialization: "Cardiology",
      hospital: "City Care Hospital",
      department: "Cardiology",
      date: "29 Aug 2026",
      time: "10:30 AM",
      token: "C-027",
      status: "upcoming",
    },
    {
      id: "APT002",
      type: "Laboratory",
      doctor: "Laboratory Department",
      specialization: "Blood Test",
      hospital: "City Care Hospital",
      department: "Laboratory",
      date: "30 Aug 2026",
      time: "09:00 AM",
      token: "LAB-014",
      status: "upcoming",
    },
    {
      id: "APT003",
      type: "Imaging",
      doctor: "Radiology Department",
      specialization: "Chest X-Ray",
      hospital: "City Care Hospital",
      department: "Radiology",
      date: "31 Aug 2026",
      time: "11:30 AM",
      token: "IMG-008",
      status: "upcoming",
    },
    {
      id: "APT004",
      type: "Doctor",
      doctor: "Dr. Priya Sharma",
      specialization: "General Medicine",
      hospital: "City Care Hospital",
      department: "General Medicine",
      date: "20 Aug 2026",
      time: "02:00 PM",
      token: "G-015",
      status: "completed",
    },
    {
      id: "APT005",
      type: "Doctor",
      doctor: "Dr. Rahul Singh",
      specialization: "Orthopedics",
      hospital: "City Care Hospital",
      department: "Orthopedics",
      date: "15 Aug 2026",
      time: "11:00 AM",
      token: "O-021",
      status: "cancelled",
    },
  ]);

  // Filter appointments according to selected tab
  const filteredAppointments = appointments.filter(
    (appointment) => appointment.status === activeTab
  );

  // Cancel appointment
  const handleCancel = (appointmentId) => {
    const confirmCancel = window.confirm(
      "Are you sure you want to cancel this appointment?"
    );

    if (!confirmCancel) {
      return;
    }

    setAppointments((previousAppointments) =>
      previousAppointments.map((appointment) =>
        appointment.id === appointmentId
          ? {
              ...appointment,
              status: "cancelled",
            }
          : appointment
      )
    );
  };

  // Open live queue
  const handleLiveQueue = (appointment) => {
    navigate("/live-queue", {
      state: {
        appointment,
      },
    });
  };

  // Book new appointment
  const handleBookAppointment = () => {
    navigate("/book-appointment");
  };

  // Get icon according to appointment type
  const getAppointmentIcon = (type) => {
    if (type === "Doctor") {
      return "👨‍⚕️";
    }

    if (type === "Laboratory") {
      return "🧪";
    }

    if (type === "Imaging") {
      return "🩻";
    }

    return "📅";
  };

  return (
    <div className="my-appointments-page">

      {/* Header */}
      <div className="appointments-header">

        <div>
          <button
            className="appointments-back-button"
            onClick={() => navigate(-1)}
          >
            ← Back
          </button>

          <h1>My Appointments</h1>

          <p>
            View and manage your doctor, laboratory
            and imaging appointments.
          </p>
        </div>

        <button
          className="new-appointment-button"
          onClick={handleBookAppointment}
        >
          + Book Appointment
        </button>

      </div>


      {/* Appointment Tabs */}
      <div className="appointment-tabs">

        <button
          className={`appointment-tab ${
            activeTab === "upcoming" ? "active" : ""
          }`}
          onClick={() => setActiveTab("upcoming")}
        >
          Upcoming
          <span>
            {
              appointments.filter(
                (appointment) =>
                  appointment.status === "upcoming"
              ).length
            }
          </span>
        </button>

        <button
          className={`appointment-tab ${
            activeTab === "completed" ? "active" : ""
          }`}
          onClick={() => setActiveTab("completed")}
        >
          Completed
          <span>
            {
              appointments.filter(
                (appointment) =>
                  appointment.status === "completed"
              ).length
            }
          </span>
        </button>

        <button
          className={`appointment-tab ${
            activeTab === "cancelled" ? "active" : ""
          }`}
          onClick={() => setActiveTab("cancelled")}
        >
          Cancelled
          <span>
            {
              appointments.filter(
                (appointment) =>
                  appointment.status === "cancelled"
              ).length
            }
          </span>
        </button>

      </div>


      {/* Appointment List */}
      <div className="appointments-container">

        {filteredAppointments.length === 0 ? (

          <div className="no-appointments">

            <div className="no-appointments-icon">
              📅
            </div>

            <h2>No Appointments Found</h2>

            <p>
              You currently don't have any{" "}
              {activeTab} appointments.
            </p>

            <button
              onClick={handleBookAppointment}
              className="no-appointment-button"
            >
              Book an Appointment
            </button>

          </div>

        ) : (

          filteredAppointments.map((appointment) => (

            <div
              className="appointment-card"
              key={appointment.id}
            >

              {/* Card Header */}
              <div className="appointment-card-header">

                <div className="appointment-type">

                  <div className="appointment-icon">
                    {getAppointmentIcon(appointment.type)}
                  </div>

                  <div>
                    <span className="appointment-type-label">
                      {appointment.type} Appointment
                    </span>

                    <h2>
                      {appointment.doctor}
                    </h2>

                    <p>
                      {appointment.specialization}
                    </p>
                  </div>

                </div>


                <span
                  className={`appointment-status ${appointment.status}`}
                >
                  {appointment.status === "upcoming" &&
                    "Upcoming"}

                  {appointment.status === "completed" &&
                    "Completed"}

                  {appointment.status === "cancelled" &&
                    "Cancelled"}
                </span>

              </div>


              {/* Appointment Information */}
              <div className="appointment-details">

                <div className="appointment-detail">

                  <span className="detail-icon">
                    🏥
                  </span>

                  <div>
                    <small>Hospital</small>
                    <strong>
                      {appointment.hospital}
                    </strong>
                  </div>

                </div>


                <div className="appointment-detail">

                  <span className="detail-icon">
                    🏢
                  </span>

                  <div>
                    <small>Department</small>
                    <strong>
                      {appointment.department}
                    </strong>
                  </div>

                </div>


                <div className="appointment-detail">

                  <span className="detail-icon">
                    📅
                  </span>

                  <div>
                    <small>Date</small>
                    <strong>
                      {appointment.date}
                    </strong>
                  </div>

                </div>


                <div className="appointment-detail">

                  <span className="detail-icon">
                    🕐
                  </span>

                  <div>
                    <small>Time</small>
                    <strong>
                      {appointment.time}
                    </strong>
                  </div>

                </div>

              </div>


              {/* Token */}
              <div className="appointment-token">

                <div>
                  <span>Appointment ID</span>
                  <strong>{appointment.id}</strong>
                </div>

                <div>
                  <span>Token</span>
                  <strong>{appointment.token}</strong>
                </div>

              </div>


              {/* Actions */}
              {appointment.status === "upcoming" && (

                <div className="appointment-actions">

                  <button
                    className="queue-button"
                    onClick={() =>
                      handleLiveQueue(appointment)
                    }
                  >
                    🎟️ View Live Queue
                  </button>

                  <button
                    className="cancel-button"
                    onClick={() =>
                      handleCancel(appointment.id)
                    }
                  >
                    Cancel Appointment
                  </button>

                </div>

              )}


              {appointment.status === "completed" && (

                <div className="appointment-actions">

                  <button
                    className="view-button"
                    onClick={() =>
                      alert(
                        "Appointment details will be connected to the backend."
                      )
                    }
                  >
                    View Details
                  </button>

                  <button
                    className="book-again-button"
                    onClick={handleBookAppointment}
                  >
                    Book Again
                  </button>

                </div>

              )}


              {appointment.status === "cancelled" && (

                <div className="appointment-cancelled-message">

                  This appointment has been cancelled.

                </div>

              )}

            </div>

          ))

        )}

      </div>

    </div>
  );
};

export default MyAppointments;