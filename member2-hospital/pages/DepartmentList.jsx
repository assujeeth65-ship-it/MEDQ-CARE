import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import DepartmentCard from "../components/DepartmentCard";
import "./DepartmentList.css";

const DepartmentList = () => {
  const navigate = useNavigate();

  const [searchTerm, setSearchTerm] = useState("");
  const [selectedDepartment, setSelectedDepartment] = useState(null);

  const departments = [
    {
      id: 1,
      name: "Cardiology",
      description:
        "Department specializing in heart and cardiovascular care.",
      doctorCount: 8,
      services: 5,
    },
    {
      id: 2,
      name: "General Medicine",
      description:
        "Provides diagnosis and treatment for common medical conditions.",
      doctorCount: 12,
      services: 7,
    },
    {
      id: 3,
      name: "Orthopedics",
      description:
        "Provides care for bones, joints, muscles and related conditions.",
      doctorCount: 6,
      services: 4,
    },
    {
      id: 4,
      name: "Dermatology",
      description:
        "Provides consultation and treatment for skin-related conditions.",
      doctorCount: 5,
      services: 3,
    },
    {
      id: 5,
      name: "Neurology",
      description:
        "Provides diagnosis and treatment for nervous system conditions.",
      doctorCount: 4,
      services: 4,
    },
    {
      id: 6,
      name: "Pediatrics",
      description:
        "Provides medical care and consultation for children.",
      doctorCount: 7,
      services: 5,
    },
  ];

  const filteredDepartments = departments.filter((department) =>
    department.name
      .toLowerCase()
      .includes(searchTerm.toLowerCase())
  );

  // When Select Department is clicked
  const handleDepartmentSelect = (department) => {
    setSelectedDepartment(department);
    navigate("/doctors", {
      state: { department },
    });
  };

  // When View Doctors is clicked
  const handleViewDoctors = (department) => {
    setSelectedDepartment(department);
    navigate("/doctors", {
      state: { department },
    });
  };

  return (
    <div className="department-page">

      <div className="department-header">
        <h1>Hospital Departments</h1>

        <p>
          Select a department to view available doctors and
          appointment services.
        </p>
      </div>

      <div className="department-search">
        <input
          type="text"
          placeholder="Search department..."
          value={searchTerm}
          onChange={(event) =>
            setSearchTerm(event.target.value)
          }
        />
      </div>

      <div className="department-info">
        <p>
          Available Departments:{" "}
          <strong>{filteredDepartments.length}</strong>
        </p>
      </div>

      {filteredDepartments.length > 0 ? (
        <div className="department-grid">

          {filteredDepartments.map((department) => (
            <DepartmentCard
              key={department.id}
              department={department}
              onSelect={handleDepartmentSelect}
              onViewDoctors={handleViewDoctors}
            />
          ))}

        </div>
      ) : (
        <div className="no-department">
          <h3>No department found</h3>

          <p>
            Try searching with another department name.
          </p>
        </div>
      )}

    </div>
  );
};

export default DepartmentList;