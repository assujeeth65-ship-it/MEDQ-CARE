import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import DoctorCard from "../components/DoctorCard";
import "./DoctorList.css";

const DoctorList = () => {
  const navigate = useNavigate();

  const [searchTerm, setSearchTerm] = useState("");

  const doctors = [
    {
      id: 1,
      name: "Dr. Arun Kumar",
      specialization: "Cardiologist",
      department: "Cardiology",
      experience: "10 Years",
      available: true,
    },
    {
      id: 2,
      name: "Dr. Priya Sharma",
      specialization: "General Physician",
      department: "General Medicine",
      experience: "8 Years",
      available: true,
    },
    {
      id: 3,
      name: "Dr. Rajesh Kumar",
      specialization: "Orthopedic Specialist",
      department: "Orthopedics",
      experience: "12 Years",
      available: false,
    },
    {
      id: 4,
      name: "Dr. Meena Krishnan",
      specialization: "Dermatologist",
      department: "Dermatology",
      experience: "7 Years",
      available: true,
    },
    {
      id: 5,
      name: "Dr. Karthik Raj",
      specialization: "Neurologist",
      department: "Neurology",
      experience: "9 Years",
      available: true,
    },
    {
      id: 6,
      name: "Dr. Anitha Devi",
      specialization: "Pediatrician",
      department: "Pediatrics",
      experience: "6 Years",
      available: true,
    },
  ];

  const filteredDoctors = doctors.filter((doctor) => {
    const search = searchTerm.toLowerCase();

    return (
      doctor.name.toLowerCase().includes(search) ||
      doctor.specialization.toLowerCase().includes(search) ||
      doctor.department.toLowerCase().includes(search)
    );
  });

  const handleBookAppointment = (doctor) => {
    navigate("/appointments/book", {
      state: { doctor },
    });
  };

  return (
    <div className="doctor-list-page">

      {/* Page Header */}
      <div className="doctor-list-header">
        <h1>Available Doctors</h1>

        <p>
          Select a doctor to view details and book an appointment.
        </p>
      </div>

      {/* Search Bar */}
      <div className="doctor-search">
        <input
          type="text"
          placeholder="Search doctor, specialization or department..."
          value={searchTerm}
          onChange={(event) => setSearchTerm(event.target.value)}
        />
      </div>

      {/* Doctor Count */}
      <div className="doctor-info">
        <p>
          Available Doctors:{" "}
          <strong>{filteredDoctors.length}</strong>
        </p>
      </div>

      {/* Doctor Cards */}
      {filteredDoctors.length > 0 ? (
        <div className="doctor-grid">

          {filteredDoctors.map((doctor) => (
            <DoctorCard
              key={doctor.id}
              doctor={doctor}
              onBookAppointment={handleBookAppointment}
            />
          ))}

        </div>
      ) : (
        <div className="no-doctors">
          <h3>No doctors found</h3>

          <p>
            Try searching for another doctor or specialization.
          </p>
        </div>
      )}

    </div>
  );
};

export default DoctorList;