import React from "react";
import { useNavigate } from "react-router-dom";
import "./HospitalDetails.css";

const HospitalDetails = () => {
  const navigate = useNavigate();

  // Temporary hospital data for frontend development
  const hospital = {
    id: 1,
    name: "MEDQ CARE Hospital",
    location: "Chennai, Tamil Nadu",
    address: "123 Healthcare Road, Chennai",
    phone: "+91 98765 43210",
    email: "contact@medqcare.com",
    description:
      "MEDQ CARE Hospital provides integrated healthcare services with smart appointment and queue management.",
    departments: [
      "Cardiology",
      "General Medicine",
      "Orthopedics",
      "Dermatology",
      "Neurology",
      "Pediatrics",
    ],
    services: [
      "Doctor Consultation",
      "Laboratory",
      "Imaging",
      "Follow-up Consultation",
    ],
    workingHours: "08:00 AM - 08:00 PM",
  };

  // Go to department list
  const handleViewDepartments = () => {
    navigate("/departments");
  };

  // Go directly to appointment booking
  const handleBookAppointment = () => {
    navigate("/book-appointment");
  };

  return (
    <div className="hospital-details-page">

      {/* Hospital Header */}
      <div className="hospital-details-header">
        <div className="hospital-icon">
          🏥
        </div>

        <div>
          <h1>{hospital.name}</h1>

          <p className="hospital-location">
            📍 {hospital.location}
          </p>
        </div>
      </div>

      {/* Hospital Description */}
      <div className="hospital-description">
        <h2>About the Hospital</h2>

        <p>{hospital.description}</p>
      </div>

      {/* Hospital Information */}
      <div className="hospital-info-grid">

        <div className="hospital-info-card">
          <h3>📍 Address</h3>
          <p>{hospital.address}</p>
        </div>

        <div className="hospital-info-card">
          <h3>📞 Contact</h3>
          <p>{hospital.phone}</p>
        </div>

        <div className="hospital-info-card">
          <h3>✉️ Email</h3>
          <p>{hospital.email}</p>
        </div>

        <div className="hospital-info-card">
          <h3>🕐 Working Hours</h3>
          <p>{hospital.workingHours}</p>
        </div>

      </div>

      {/* Departments */}
      <div className="hospital-section">

        <div className="section-header">
          <h2>Departments</h2>

          <button
            className="secondary-button"
            onClick={handleViewDepartments}
          >
            View All Departments
          </button>
        </div>

        <div className="hospital-list">
          {hospital.departments.map((department) => (
            <div
              className="hospital-list-item"
              key={department}
            >
              {department}
            </div>
          ))}
        </div>

      </div>

      {/* Services */}
      <div className="hospital-section">

        <div className="section-header">
          <h2>Available Services</h2>
        </div>

        <div className="hospital-list">
          {hospital.services.map((service) => (
            <div
              className="hospital-list-item"
              key={service}
            >
              {service}
            </div>
          ))}
        </div>

      </div>

      {/* Actions */}
      <div className="hospital-actions">

        <button
          className="primary-button"
          onClick={handleViewDepartments}
        >
          View Doctors
        </button>

        <button
          className="secondary-button"
          onClick={handleBookAppointment}
        >
          Book Appointment
        </button>

      </div>

    </div>
  );
};

export default HospitalDetails;