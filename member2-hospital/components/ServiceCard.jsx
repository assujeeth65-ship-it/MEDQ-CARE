import React from "react";
import "./ServiceCard.css";

const ServiceCard = ({ service, onSelect }) => {
  const {
    name = "Doctor Consultation",
    description = "Consult with an experienced doctor.",
    icon = "🩺",
    duration = "30 Minutes",
    price = "₹500",
    availability = "Available",
    type = "Consultation",
  } = service || {};

  return (
    <div className="service-card">

      {/* Service Icon */}
      <div className="service-icon">
        {icon}
      </div>

      {/* Service Details */}
      <div className="service-details">

        <h3 className="service-name">
          {name}
        </h3>

        <span className="service-type">
          {type}
        </span>

        <p className="service-description">
          {description}
        </p>

        {/* Service Information */}
        <div className="service-info">

          <div className="service-info-item">
            <span>⏱️</span>
            <span>{duration}</span>
          </div>

          <div className="service-info-item">
            <span>💰</span>
            <span>{price}</span>
          </div>

          <div className="service-info-item">
            <span>📅</span>
            <span>{availability}</span>
          </div>

        </div>

        {/* Select Service Button */}
        <button
          className="select-service-btn"
          onClick={() => onSelect && onSelect(service)}
          disabled={availability.toLowerCase() !== "available"}
        >
          {availability.toLowerCase() === "available"
            ? "Select Service"
            : "Not Available"}
        </button>

      </div>
    </div>
  );
};

export default ServiceCard;