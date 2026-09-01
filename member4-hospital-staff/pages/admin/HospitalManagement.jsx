import React, { useState } from "react";
import DashboardCard from "../../components/DashboardCard";
import StaffNavbar from "../../components/StaffNavbar";
import StaffSidebar from "../../components/StaffSidebar";

const HospitalManagement = () => {
  const [hospital, setHospital] = useState({
    name: "MEDQ CARE Hospital",
    registrationNumber: "HOSP001",
    address: "Chennai, Tamil Nadu",
    phone: "+91 98765 43210",
    email: "hospital@medqcare.com",
    emergencyNumber: "108",
    totalBeds: 250,
    availableBeds: 72,
  });

  const [isEditing, setIsEditing] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;

    setHospital((previous) => ({
      ...previous,
      [name]: value,
    }));
  };

  const handleSave = (e) => {
    e.preventDefault();

    setIsEditing(false);

    console.log("Hospital information:", hospital);
    alert("Hospital information saved successfully.");
  };

  const handleNavigate = (page) => {
    console.log("Navigate to:", page);
  };

  const handleLogout = () => {
    console.log("Admin logout");
  };

  return (
    <div className="min-h-screen bg-gray-100">

      {/* Navbar */}
      <StaffNavbar
        userName="Admin"
        role="Administrator"
        onLogout={handleLogout}
      />

      <div className="flex">

        {/* Sidebar */}
        <StaffSidebar
          role="Admin"
          activePage="hospital-management"
          onNavigate={handleNavigate}
        />

        {/* Main Content */}
        <main className="flex-1 p-6 md:p-8">

          {/* Page Heading */}
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-8">

            <div>
              <h2 className="text-3xl font-bold text-gray-800">
                Hospital Management
              </h2>

              <p className="text-gray-500 mt-1">
                View and manage hospital information.
              </p>
            </div>

            <button
              onClick={() => setIsEditing((previous) => !previous)}
              className="px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-semibold"
            >
              {isEditing ? "Cancel Edit" : "Edit Hospital"}
            </button>

          </div>

          {/* Statistics */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-5 mb-8">

            <DashboardCard
              title="Total Beds"
              value={hospital.totalBeds}
              description="Hospital capacity"
              icon="🛏️"
            />

            <DashboardCard
              title="Available Beds"
              value={hospital.availableBeds}
              description="Currently available"
              icon="🏥"
            />

            <DashboardCard
              title="Hospital Status"
              value="Active"
              description="Currently operational"
              icon="✓"
            />

          </div>

          {/* Hospital Information */}
          <div className="bg-white border border-gray-200 rounded-xl shadow-sm">

            <div className="p-6 border-b border-gray-200">
              <h3 className="text-xl font-bold text-gray-800">
                Hospital Information
              </h3>

              <p className="text-sm text-gray-500 mt-1">
                Basic details of the registered hospital.
              </p>
            </div>

            <form onSubmit={handleSave} className="p-6">

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

                {/* Hospital Name */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Hospital Name
                  </label>

                  <input
                    type="text"
                    name="name"
                    value={hospital.name}
                    onChange={handleChange}
                    disabled={!isEditing}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg disabled:bg-gray-100 disabled:text-gray-500 outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>

                {/* Registration Number */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Registration Number
                  </label>

                  <input
                    type="text"
                    name="registrationNumber"
                    value={hospital.registrationNumber}
                    onChange={handleChange}
                    disabled={!isEditing}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg disabled:bg-gray-100 disabled:text-gray-500 outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>

                {/* Phone */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Phone Number
                  </label>

                  <input
                    type="text"
                    name="phone"
                    value={hospital.phone}
                    onChange={handleChange}
                    disabled={!isEditing}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg disabled:bg-gray-100 disabled:text-gray-500 outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>

                {/* Email */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Email
                  </label>

                  <input
                    type="email"
                    name="email"
                    value={hospital.email}
                    onChange={handleChange}
                    disabled={!isEditing}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg disabled:bg-gray-100 disabled:text-gray-500 outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>

                {/* Emergency Number */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Emergency Number
                  </label>

                  <input
                    type="text"
                    name="emergencyNumber"
                    value={hospital.emergencyNumber}
                    onChange={handleChange}
                    disabled={!isEditing}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg disabled:bg-gray-100 disabled:text-gray-500 outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>

                {/* Total Beds */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Total Beds
                  </label>

                  <input
                    type="number"
                    name="totalBeds"
                    value={hospital.totalBeds}
                    onChange={handleChange}
                    disabled={!isEditing}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg disabled:bg-gray-100 disabled:text-gray-500 outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>

                {/* Available Beds */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Available Beds
                  </label>

                  <input
                    type="number"
                    name="availableBeds"
                    value={hospital.availableBeds}
                    onChange={handleChange}
                    disabled={!isEditing}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg disabled:bg-gray-100 disabled:text-gray-500 outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>

                {/* Address */}
                <div className="md:col-span-2">
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Address
                  </label>

                  <textarea
                    name="address"
                    value={hospital.address}
                    onChange={handleChange}
                    disabled={!isEditing}
                    rows="3"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg disabled:bg-gray-100 disabled:text-gray-500 outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>

              </div>

              {/* Save Button */}
              {isEditing && (
                <div className="flex justify-end mt-6">

                  <button
                    type="submit"
                    className="px-6 py-3 bg-green-600 hover:bg-green-700 text-white rounded-lg font-semibold"
                  >
                    Save Changes
                  </button>

                </div>
              )}

            </form>

          </div>

          {/* Integration Note */}
          <div className="bg-blue-50 border border-blue-200 rounded-xl p-6 mt-6">

            <h3 className="font-bold text-blue-800">
              Team Integration
            </h3>

            <p className="text-sm text-blue-700 mt-2">
              The current hospital information is demonstration data.
              During backend integration, this information will be
              loaded and updated through the shared hospital management API.
            </p>

          </div>

        </main>

      </div>

    </div>
  );
};

export default HospitalManagement;