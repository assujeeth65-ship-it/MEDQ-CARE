import React from "react";
import "./DepartmentCard.css";

const DepartmentCard = ({
  department,
  onSelect,
  onViewDoctors,
}) => {
  const {
    name,
    description,
    doctorCount,
    icon,
    color,
  } = department;

  return (
    <div className="department-card">

      <div
        className="department-icon"
        style={{
          backgroundColor: color || "#e8f1ff",
        }}
      >
        {icon || "🏥"}
      </div>

      <div className="department-content">

        <h3 className="department-name">
          {name}
        </h3>

        <p className="department-description">
          {description ||
            "Medical services and consultation available in this department."}
        </p>

        <div className="department-info">

          <div className="info-item">
            <span className="info-icon">👨‍⚕️</span>
            <span>
              {doctorCount ?? 0} Doctors
            </span>
          </div>

          <div className="info-item">
            <span className="info-icon">📅</span>
            <span>
              Appointments Available
            </span>
          </div>

        </div>

        <div className="department-actions">

          <button
            className="view-doctors-btn"
            onClick={() =>
              onViewDoctors && onViewDoctors(department)
            }
          >
            View Doctors
          </button>

          <button
            className="select-department-btn"
            onClick={() =>
              onSelect && onSelect(department)
            }
          >
            Select Department
          </button>

        </div>

      </div>

    </div>
  );
};

export default DepartmentCard;