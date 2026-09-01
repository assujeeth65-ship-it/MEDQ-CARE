import React, { useState } from "react";

const PatientManagement = () => {
  const [search, setSearch] = useState("");

  const [patients, setPatients] = useState([
    {
      id: "P001",
      name: "Arun Kumar",
      age: 45,
      gender: "Male",
      phone: "9876543210",
      bloodGroup: "B+",
      status: "Active",
    },
    {
      id: "P002",
      name: "Priya Sharma",
      age: 32,
      gender: "Female",
      phone: "9876543211",
      bloodGroup: "O+",
      status: "Active",
    },
    {
      id: "P003",
      name: "Rahul Kumar",
      age: 51,
      gender: "Male",
      phone: "9876543212",
      bloodGroup: "A+",
      status: "Active",
    },
    {
      id: "P004",
      name: "Meena Devi",
      age: 29,
      gender: "Female",
      phone: "9876543213",
      bloodGroup: "AB+",
      status: "Inactive",
    },
  ]);

  const [showForm, setShowForm] = useState(false);

  const [newPatient, setNewPatient] = useState({
    name: "",
    age: "",
    gender: "",
    phone: "",
    bloodGroup: "",
  });

  const filteredPatients = patients.filter((patient) => {
    const value = search.toLowerCase();

    return (
      patient.name.toLowerCase().includes(value) ||
      patient.id.toLowerCase().includes(value) ||
      patient.phone.includes(value)
    );
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;

    setNewPatient((previous) => ({
      ...previous,
      [name]: value,
    }));
  };

  const handleAddPatient = (e) => {
    e.preventDefault();

    if (
      !newPatient.name ||
      !newPatient.age ||
      !newPatient.gender ||
      !newPatient.phone
    ) {
      alert("Please fill all required fields.");
      return;
    }

    const patient = {
      id: `P${String(patients.length + 1).padStart(3, "0")}`,
      name: newPatient.name,
      age: newPatient.age,
      gender: newPatient.gender,
      phone: newPatient.phone,
      bloodGroup: newPatient.bloodGroup || "Not specified",
      status: "Active",
    };

    setPatients((previous) => [...previous, patient]);

    setNewPatient({
      name: "",
      age: "",
      gender: "",
      phone: "",
      bloodGroup: "",
    });

    setShowForm(false);

    alert("Patient added successfully.");
  };

  return (
    <div className="min-h-screen bg-gray-100">

      {/* Header */}
      <header className="bg-white border-b">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">

          <div>
            <h1 className="text-2xl font-bold text-blue-700">
              MEDQ CARE
            </h1>

            <p className="text-sm text-gray-500">
              Patient Management
            </p>
          </div>

          <div className="text-right">
            <p className="font-semibold text-gray-800">
              Reception Staff
            </p>

            <p className="text-sm text-gray-500">
              Staff ID: R001
            </p>
          </div>

        </div>
      </header>

      {/* Main */}
      <main className="max-w-7xl mx-auto px-6 py-8">

        {/* Page Header */}
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-8">

          <div>
            <h2 className="text-3xl font-bold text-gray-800">
              Patient Management
            </h2>

            <p className="text-gray-500 mt-1">
              Search and manage registered patients.
            </p>
          </div>

          <button
            onClick={() => setShowForm(true)}
            className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-semibold"
          >
            + Register Patient
          </button>

        </div>

        {/* Statistics */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-5 mb-8">

          <div className="bg-white border rounded-xl p-5">
            <p className="text-sm text-gray-500">
              Total Patients
            </p>

            <h3 className="text-3xl font-bold text-blue-600 mt-2">
              {patients.length}
            </h3>
          </div>

          <div className="bg-white border rounded-xl p-5">
            <p className="text-sm text-gray-500">
              Active Patients
            </p>

            <h3 className="text-3xl font-bold text-green-600 mt-2">
              {
                patients.filter(
                  (patient) => patient.status === "Active"
                ).length
              }
            </h3>
          </div>

          <div className="bg-white border rounded-xl p-5">
            <p className="text-sm text-gray-500">
              Inactive Patients
            </p>

            <h3 className="text-3xl font-bold text-gray-500 mt-2">
              {
                patients.filter(
                  (patient) => patient.status === "Inactive"
                ).length
              }
            </h3>
          </div>

        </div>

        {/* Patient Table */}
        <div className="bg-white border rounded-xl overflow-hidden">

          {/* Search */}
          <div className="p-6 border-b">

            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">

              <div>
                <h3 className="text-lg font-bold text-gray-800">
                  Registered Patients
                </h3>

                <p className="text-sm text-gray-500 mt-1">
                  Patient records available in the system.
                </p>
              </div>

              <input
                type="text"
                placeholder="Search by ID, name or phone..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="w-full md:w-80 border border-gray-300 rounded-lg px-4 py-3 outline-none focus:ring-2 focus:ring-blue-500"
              />

            </div>

          </div>

          {/* Table */}
          <div className="overflow-x-auto">

            <table className="w-full">

              <thead className="bg-gray-50">

                <tr className="text-left">

                  <th className="px-6 py-4 text-sm font-semibold text-gray-500">
                    Patient ID
                  </th>

                  <th className="px-6 py-4 text-sm font-semibold text-gray-500">
                    Patient
                  </th>

                  <th className="px-6 py-4 text-sm font-semibold text-gray-500">
                    Gender
                  </th>

                  <th className="px-6 py-4 text-sm font-semibold text-gray-500">
                    Phone
                  </th>

                  <th className="px-6 py-4 text-sm font-semibold text-gray-500">
                    Blood Group
                  </th>

                  <th className="px-6 py-4 text-sm font-semibold text-gray-500">
                    Status
                  </th>

                </tr>

              </thead>

              <tbody>

                {filteredPatients.length > 0 ? (

                  filteredPatients.map((patient) => (

                    <tr
                      key={patient.id}
                      className="border-t hover:bg-gray-50"
                    >

                      <td className="px-6 py-4 font-semibold text-blue-600">
                        {patient.id}
                      </td>

                      <td className="px-6 py-4">

                        <p className="font-semibold text-gray-800">
                          {patient.name}
                        </p>

                        <p className="text-xs text-gray-500">
                          {patient.age} years
                        </p>

                      </td>

                      <td className="px-6 py-4 text-gray-600">
                        {patient.gender}
                      </td>

                      <td className="px-6 py-4 text-gray-600">
                        {patient.phone}
                      </td>

                      <td className="px-6 py-4 font-medium">
                        {patient.bloodGroup}
                      </td>

                      <td className="px-6 py-4">

                        <span
                          className={`px-3 py-1 rounded-full text-xs font-semibold ${
                            patient.status === "Active"
                              ? "bg-green-100 text-green-700"
                              : "bg-gray-100 text-gray-600"
                          }`}
                        >
                          {patient.status}
                        </span>

                      </td>

                    </tr>

                  ))

                ) : (

                  <tr>

                    <td
                      colSpan="6"
                      className="px-6 py-10 text-center text-gray-500"
                    >
                      No patients found.
                    </td>

                  </tr>

                )}

              </tbody>

            </table>

          </div>

        </div>

      </main>

      {/* Register Patient Modal */}
      {showForm && (

        <div className="fixed inset-0 bg-black/40 flex items-center justify-center px-4 z-50">

          <div className="bg-white w-full max-w-lg rounded-2xl shadow-xl p-6">

            <div className="flex items-center justify-between mb-6">

              <div>
                <h3 className="text-xl font-bold text-gray-800">
                  Register New Patient
                </h3>

                <p className="text-sm text-gray-500 mt-1">
                  Enter patient details.
                </p>
              </div>

              <button
                onClick={() => setShowForm(false)}
                className="text-gray-500 hover:text-gray-800 text-xl"
              >
                ✕
              </button>

            </div>

            <form onSubmit={handleAddPatient}>

              {/* Name */}
              <div className="mb-4">

                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Patient Name *
                </label>

                <input
                  type="text"
                  name="name"
                  value={newPatient.name}
                  onChange={handleInputChange}
                  placeholder="Enter patient name"
                  className="w-full border border-gray-300 rounded-lg px-4 py-3 outline-none focus:ring-2 focus:ring-blue-500"
                />

              </div>

              {/* Age + Gender */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">

                <div>

                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Age *
                  </label>

                  <input
                    type="number"
                    name="age"
                    value={newPatient.age}
                    onChange={handleInputChange}
                    placeholder="Age"
                    className="w-full border border-gray-300 rounded-lg px-4 py-3 outline-none focus:ring-2 focus:ring-blue-500"
                  />

                </div>

                <div>

                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Gender *
                  </label>

                  <select
                    name="gender"
                    value={newPatient.gender}
                    onChange={handleInputChange}
                    className="w-full border border-gray-300 rounded-lg px-4 py-3 outline-none focus:ring-2 focus:ring-blue-500"
                  >

                    <option value="">
                      Select
                    </option>

                    <option value="Male">
                      Male
                    </option>

                    <option value="Female">
                      Female
                    </option>

                    <option value="Other">
                      Other
                    </option>

                  </select>

                </div>

              </div>

              {/* Phone */}
              <div className="mb-4">

                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Phone Number *
                </label>

                <input
                  type="tel"
                  name="phone"
                  value={newPatient.phone}
                  onChange={handleInputChange}
                  placeholder="Enter phone number"
                  className="w-full border border-gray-300 rounded-lg px-4 py-3 outline-none focus:ring-2 focus:ring-blue-500"
                />

              </div>

              {/* Blood Group */}
              <div className="mb-6">

                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Blood Group
                </label>

                <select
                  name="bloodGroup"
                  value={newPatient.bloodGroup}
                  onChange={handleInputChange}
                  className="w-full border border-gray-300 rounded-lg px-4 py-3 outline-none focus:ring-2 focus:ring-blue-500"
                >

                  <option value="">
                    Select Blood Group
                  </option>

                  <option value="A+">A+</option>
                  <option value="A-">A-</option>
                  <option value="B+">B+</option>
                  <option value="B-">B-</option>
                  <option value="O+">O+</option>
                  <option value="O-">O-</option>
                  <option value="AB+">AB+</option>
                  <option value="AB-">AB-</option>

                </select>

              </div>

              {/* Buttons */}
              <div className="flex justify-end gap-3">

                <button
                  type="button"
                  onClick={() => setShowForm(false)}
                  className="px-5 py-3 border border-gray-300 rounded-lg font-semibold hover:bg-gray-50"
                >
                  Cancel
                </button>

                <button
                  type="submit"
                  className="px-5 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-semibold"
                >
                  Register Patient
                </button>

              </div>

            </form>

          </div>

        </div>

      )}

    </div>
  );
};

export default PatientManagement;