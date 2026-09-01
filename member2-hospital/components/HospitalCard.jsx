import React from "react";
import "./HospitalCard.css";

const HospitalCard = ({
  hospital,
  onSelect,
  onViewDetails,
}) => {
  const {
    name = "MEDQ CARE Hospital",
    location = "Chennai, Tamil Nadu",
    address = "Main Road, Chennai",
    description = "Quality healthcare services with experienced doctors and modern facilities.",
    departments = 0,
    doctors = 0,
    services = [],
    image,
    status = "Open",
  } = hospital || {};

  return (
    <div className="hospital-card">

      {/* Hospital Image */}
      <div className="hospital-image-container">
        {image ? (
          <img
            src={image}
            alt={name}
            className="hospital-image"
          />
        ) : (
          <div className="hospital-placeholder">
            🏥
          </div>
        )}

        {/* Hospital Status */}
        <span
          className={`hospital-status ${
            status.toLowerCase() === "open"
              ? "status-open"
              : "status-closed"
          }`}
        >
          {status}
        </span>
      </div>

      {/* Hospital Information */}
      <div className="hospital-content">

        <h2 className="hospital-name">
          {name}
        </h2>

        <div className="hospital-location">
          <span>📍</span>
          <span>{location}</span>
        </div>

        <p className="hospital-address">
          {address}
        </p>

        <p className="hospital-description">
          {description}
        </p>

        {/* Hospital Statistics */}
        <div className="hospital-stats">

          <div className="hospital-stat">
            <span className="stat-icon">🏥</span>
            <div>
              <strong>{departments}</strong>
              <small>Departments</small>
            </div>
          </div>

          <div className="hospital-stat">
            <span className="stat-icon">👨‍⚕️</span>
            <div>
              <strong>{doctors}</strong>
              <small>Doctors</small>
            </div>
          </div>

        </div>

        {/* Services */}
        {services.length > 0 && (
          <div className="hospital-services">

            {services.slice(0, 3).map((service, index) => (
              <span
                className="service-tag"
                key={index}
              >
                {service}
              </span>
            ))}

            {services.length > 3 && (
              <span className="service-more">
                +{services.length - 3} more
              </span>
            )}

          </div>
        )}

        {/* Buttons */}
        <div className="hospital-actions">

          <button
            className="view-hospital-btn"
            onClick={() =>
              onViewDetails &&
              onViewDetails(hospital)
            }
          >
            View Details
          </button>

          <button
            className="select-hospital-btn"
            onClick={() =>
              onSelect &&
              onSelect(hospital)
            }
          >
            Select Hospital
          </button>

        </div>

      </div>

    </div>
  );
};

export default HospitalCard;