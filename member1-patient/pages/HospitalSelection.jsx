import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const HospitalSelection = ({ hospitals = [], onSelectHospital }) => {
  const navigate = useNavigate();
  const [selectedHospital, setSelectedHospital] = useState(null);
  const [search, setSearch] = useState("");

  const defaultHospitals = [
    {
      id: 1,
      name: "MEDQ CARE Hospital",
      location: "Chennai, Tamil Nadu",
      departments: ["Cardiology", "General Medicine", "Dermatology"],
      doctors: 25,
      rating: 4.5,
    },
    {
      id: 2,
      name: "City Care Hospital",
      location: "Chennai, Tamil Nadu",
      departments: ["Orthopedics", "Pediatrics", "Neurology"],
      doctors: 18,
      rating: 4.3,
    },
    {
      id: 3,
      name: "Apollo Medical Center",
      location: "Chennai, Tamil Nadu",
      departments: ["Cardiology", "Neurology", "General Medicine"],
      doctors: 30,
      rating: 4.6,
    },
  ];

  const hospitalList =
    hospitals.length > 0 ? hospitals : defaultHospitals;

  const filteredHospitals = hospitalList.filter((hospital) => {
    const searchText = search.toLowerCase();

    return (
      hospital.name.toLowerCase().includes(searchText) ||
      hospital.location.toLowerCase().includes(searchText)
    );
  });

  const handleSelect = (hospital) => {
  setSelectedHospital(hospital);

  if (onSelectHospital) {
    onSelectHospital(hospital);
  }

  navigate("/departments");
};

  return (
    <div className="min-h-screen bg-gray-100 px-4 py-8">

      <div className="mx-auto max-w-6xl">

        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-800">
            Select Hospital
          </h1>

          <p className="mt-2 text-gray-500">
            Choose a hospital to continue with your appointment.
          </p>
        </div>

        {/* Search */}
        <div className="mb-6">
          <input
            type="text"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Search hospital or location..."
            className="w-full rounded-xl border border-gray-300 bg-white px-4 py-3 text-gray-800 outline-none focus:border-blue-500 md:max-w-xl"
          />
        </div>

        {/* Hospital List */}
        {filteredHospitals.length === 0 ? (
          <div className="rounded-2xl bg-white p-8 text-center shadow-sm">
            <p className="text-gray-500">
              No hospitals found.
            </p>
          </div>
        ) : (
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">

            {filteredHospitals.map((hospital) => {
              const isSelected =
                selectedHospital?.id === hospital.id;

              return (
                <div
                  key={hospital.id}
                  className={`rounded-2xl border bg-white p-5 shadow-sm transition hover:shadow-md ${
                    isSelected
                      ? "border-blue-600 ring-2 ring-blue-100"
                      : "border-gray-200"
                  }`}
                >

                  {/* Hospital Icon */}
                  <div className="mb-4 flex items-center justify-between">

                    <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-blue-100 text-2xl">
                      🏥
                    </div>

                    <span className="rounded-full bg-green-100 px-3 py-1 text-xs font-semibold text-green-700">
                      Open
                    </span>

                  </div>

                  {/* Hospital Name */}
                  <h2 className="text-xl font-semibold text-gray-800">
                    {hospital.name}
                  </h2>

                  {/* Location */}
                  <p className="mt-2 text-sm text-gray-500">
                    📍 {hospital.location}
                  </p>

                  {/* Rating */}
                  <div className="mt-3 flex items-center gap-2">
                    <span className="text-yellow-500">
                      ★
                    </span>

                    <span className="text-sm font-semibold text-gray-700">
                      {hospital.rating}
                    </span>

                    <span className="text-xs text-gray-400">
                      Rating
                    </span>
                  </div>

                  {/* Doctors */}
                  <div className="mt-4 rounded-xl bg-gray-50 p-3">
                    <p className="text-xs text-gray-500">
                      Available Doctors
                    </p>

                    <p className="mt-1 font-semibold text-gray-800">
                      {hospital.doctors} Doctors
                    </p>
                  </div>

                  {/* Departments */}
                  <div className="mt-4">
                    <p className="mb-2 text-xs text-gray-500">
                      Departments
                    </p>

                    <div className="flex flex-wrap gap-2">
                      {hospital.departments.map(
                        (department) => (
                          <span
                            key={department}
                            className="rounded-full bg-blue-50 px-3 py-1 text-xs text-blue-700"
                          >
                            {department}
                          </span>
                        )
                      )}
                    </div>
                  </div>

                  {/* Select Button */}
                  <button
                    type="button"
                    onClick={() => handleSelect(hospital)}
                    className={`mt-5 w-full rounded-xl px-4 py-3 font-semibold transition ${
                      isSelected
                        ? "bg-green-600 text-white"
                        : "bg-blue-600 text-white hover:bg-blue-700"
                    }`}
                  >
                    {isSelected
                      ? "Hospital Selected ✓"
                      : "Select Hospital"}
                  </button>

                </div>
              );
            })}

          </div>
        )}

      </div>

    </div>
  );
};

export default HospitalSelection;