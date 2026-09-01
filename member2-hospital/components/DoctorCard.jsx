import React from "react";
import "./DoctorCard.css";

const DoctorCard = ({ doctor, onBookAppointment }) => {
  const {
    name = "Dr. John Doe",
    specialization = "General Medicine",
    experience = "5 Years",
    qualification = "MBBS, MD",
    hospitalName = "MEDQ CARE Hospital",
    availability = "Available Today",
    consultationFee = "₹500",
    image,
  } = doctor || {};

  return (
    <div className="doctor-card">

      {/* Doctor Image */}
      <div className="doctor-image-container">
        {image ? (
          <img
            src={image}
            alt={name}
            className="doctor-image"
          />
        ) : (
          <div className="doctor-placeholder">
            👨‍⚕️
          </div>
        )}
      </div>

      {/* Doctor Details */}
      <div className="doctor-details">

        <h3 className="doctor-name">
          {name}
        </h3>

        <p className="doctor-specialization">
          {specialization}
        </p>

        <p className="doctor-qualification">
          {qualification}
        </p>

        <div className="doctor-info">

          <div className="doctor-info-item">
            <span>🏥</span>
            <span>{hospitalName}</span>
          </div>

          <div className="doctor-info-item">
            <span>💼</span>
            <span>{experience} Experience</span>
          </div>

          <div className="doctor-info-item">
            <span>📅</span>
            <span>{availability}</span>
          </div>

          <div className="doctor-info-item">
            <span>💰</span>
            <span>{consultationFee}</span>
          </div>

        </div>

        {/* Book Appointment Button */}
        <button
          className="book-appointment-btn"
          onClick={() =>
            onBookAppointment && onBookAppointment(doctor)
          }
        >
          Book Appointment
        </button>

      </div>
    </div>
  );
};

export default DoctorCard;