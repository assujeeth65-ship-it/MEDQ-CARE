import React from "react";
import { useNavigate } from "react-router-dom";
import "./HospitalList.css";

const HospitalList = () => {
  const navigate = useNavigate();

  // Temporary hospital data
  // Later this can come from your backend API
  const hospitals = [
    {
      id: 1,
      name: "MEDQ CARE Hospital",
      location: "Chennai, Tamil Nadu",
      address: "123 Healthcare Road, Chennai",
      departments: 6,
      doctors: 25,
      services: ["Doctor Consultation", "Laboratory", "Imaging"],
      status: "Open",
    },
    {
      id: 2,
      name: "City Care Hospital",
      location: "Coimbatore, Tamil Nadu",
      address: "45 Medical College Road, Coimbatore",
      departments: 8,
      doctors: 32,
      services: ["Doctor Consultation", "Laboratory", "Imaging"],
      status: "Open",
    },
    {
      id: 3,
      name: "Apollo Health Center",
      location: "Madurai, Tamil Nadu",
      address: "78 Main Road, Madurai",
      departments: 5,
      doctors: 20,
      services: ["Doctor Consultation", "Laboratory"],
      status: "Open",
    },
    {
      id: 4,
      name: "Green Valley Hospital",
      location: "Salem, Tamil Nadu",
      address: "21 Hospital Street, Salem",
      departments: 7,
      doctors: 28,
      services: ["Doctor Consultation", "Imaging"],
      status: "Open",
    },
  ];

  // Open hospital details
  const handleViewHospital = (hospitalId) => {
    navigate(`/hospital/${hospitalId}`);
  };

  return (
    <div className="hospital-list-page">

      {/* Page Header */}
      <div className="hospital-list-header">
        <div>
          <h1>Find a Hospital</h1>

          <p>
            Select a hospital to view departments,
            doctors and available healthcare services.
          </p>
        </div>
      </div>

      {/* Search Box */}
      <div className="hospital-search-container">
        <input
          type="text"
          className="hospital-search"
          placeholder="Search hospital or location..."
        />
      </div>

      {/* Hospital Count */}
      <div className="hospital-count">
        <span>
          {hospitals.length} Hospitals Available
        </span>
      </div>

      {/* Hospital Cards */}
      <div className="hospital-grid">

        {hospitals.map((hospital) => (
          <div
            className="hospital-card"
            key={hospital.id}
          >

            {/* Hospital Icon */}
            <div className="hospital-card-icon">
              🏥
            </div>

            {/* Hospital Name */}
            <div className="hospital-card-content">

              <div className="hospital-title-row">
                <h2>{hospital.name}</h2>

                <span className="hospital-status">
                  {hospital.status}
                </span>
              </div>

              {/* Location */}
              <p className="hospital-location">
                📍 {hospital.location}
              </p>

              {/* Address */}
              <p className="hospital-address">
                {hospital.address}
              </p>

              {/* Statistics */}
              <div className="hospital-stats">

                <div className="hospital-stat">
                  <strong>
                    {hospital.departments}
                  </strong>

                  <span>
                    Departments
                  </span>
                </div>

                <div className="hospital-stat">
                  <strong>
                    {hospital.doctors}
                  </strong>

                  <span>
                    Doctors
                  </span>
                </div>

              </div>

              {/* Services */}
              <div className="hospital-services">

                <h3>Services</h3>

                <div className="service-tags">
                  {hospital.services.map((service) => (
                    <span
                      className="service-tag"
                      key={service}
                    >
                      {service}
                    </span>
                  ))}
                </div>

              </div>

              {/* View Button */}
              <button
                className="view-hospital-button"
                onClick={() =>
                  handleViewHospital(hospital.id)
                }
              >
                View Hospital
                <span>→</span>
              </button>

            </div>
          </div>
        ))}

      </div>

    </div>
  );
};

export default HospitalList;