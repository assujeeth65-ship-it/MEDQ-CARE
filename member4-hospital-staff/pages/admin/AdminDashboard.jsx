import React from "react";
import DashboardCard from "../../components/DashboardCard";
import DoctorStatus from "../../components/DoctorStatus";
import StaffNavbar from "../../components/StaffNavbar";
import StaffSidebar from "../../components/StaffSidebar";

const AdminDashboard = () => {
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
          activePage="admin-dashboard"
          onNavigate={handleNavigate}
        />

        {/* Main Content */}
        <main className="flex-1 p-6 md:p-8">

          {/* Page Heading */}
          <div className="mb-8">
            <h2 className="text-3xl font-bold text-gray-800">
              Admin Dashboard
            </h2>

            <p className="text-gray-500 mt-1">
              Manage hospital operations, staff, departments and schedules.
            </p>
          </div>

          {/* Dashboard Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-5 mb-8">

            <DashboardCard
              title="Total Doctors"
              value="24"
              description="Registered doctors"
              icon="👨‍⚕️"
            />

            <DashboardCard
              title="Total Staff"
              value="68"
              description="Hospital staff members"
              icon="👥"
            />

            <DashboardCard
              title="Departments"
              value="12"
              description="Active departments"
              icon="🏥"
            />

            <DashboardCard
              title="Today's Appointments"
              value="156"
              description="Appointments scheduled"
              icon="📅"
            />

          </div>

          {/* Main Grid */}
          <div className="grid grid-cols-1 xl:grid-cols-2 gap-6">

            {/* Doctor Status */}
            <div className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm">

              <div className="mb-5">
                <h3 className="text-xl font-bold text-gray-800">
                  Doctor Status
                </h3>

                <p className="text-sm text-gray-500 mt-1">
                  Current availability of doctors.
                </p>
              </div>

              <div className="space-y-4">

                <DoctorStatus
                  doctorName="Dr. Arun"
                  specialization="General Medicine"
                  status="Available"
                  roomNumber="102"
                />

                <DoctorStatus
                  doctorName="Dr. Priya"
                  specialization="Cardiology"
                  status="Busy"
                  roomNumber="205"
                />

                <DoctorStatus
                  doctorName="Dr. Karthik"
                  specialization="Orthopedics"
                  status="Available"
                  roomNumber="301"
                />

                <DoctorStatus
                  doctorName="Dr. Meena"
                  specialization="Pediatrics"
                  status="On Leave"
                  roomNumber="210"
                />

              </div>

            </div>

            {/* Quick Actions */}
            <div className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm">

              <div className="mb-5">
                <h3 className="text-xl font-bold text-gray-800">
                  Quick Actions
                </h3>

                <p className="text-sm text-gray-500 mt-1">
                  Frequently used administration functions.
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">

                <button
                  onClick={() =>
                    handleNavigate("hospital-management")
                  }
                  className="p-5 border border-gray-200 rounded-xl text-left hover:border-blue-300 hover:bg-blue-50 transition"
                >
                  <div className="text-2xl mb-2">
                    🏥
                  </div>

                  <h4 className="font-semibold text-gray-800">
                    Hospital Management
                  </h4>

                  <p className="text-sm text-gray-500 mt-1">
                    Manage hospital information.
                  </p>
                </button>

                <button
                  onClick={() =>
                    handleNavigate("department-management")
                  }
                  className="p-5 border border-gray-200 rounded-xl text-left hover:border-blue-300 hover:bg-blue-50 transition"
                >
                  <div className="text-2xl mb-2">
                    🏢
                  </div>

                  <h4 className="font-semibold text-gray-800">
                    Departments
                  </h4>

                  <p className="text-sm text-gray-500 mt-1">
                    Manage hospital departments.
                  </p>
                </button>

                <button
                  onClick={() =>
                    handleNavigate("staff-management")
                  }
                  className="p-5 border border-gray-200 rounded-xl text-left hover:border-blue-300 hover:bg-blue-50 transition"
                >
                  <div className="text-2xl mb-2">
                    👨‍💼
                  </div>

                  <h4 className="font-semibold text-gray-800">
                    Staff Management
                  </h4>

                  <p className="text-sm text-gray-500 mt-1">
                    Manage doctors and staff.
                  </p>
                </button>

                <button
                  onClick={() =>
                    handleNavigate("schedule-management")
                  }
                  className="p-5 border border-gray-200 rounded-xl text-left hover:border-blue-300 hover:bg-blue-50 transition"
                >
                  <div className="text-2xl mb-2">
                    🗓️
                  </div>

                  <h4 className="font-semibold text-gray-800">
                    Schedules
                  </h4>

                  <p className="text-sm text-gray-500 mt-1">
                    Manage doctor schedules.
                  </p>
                </button>

              </div>

            </div>

          </div>

          {/* System Information */}
          <div className="bg-blue-50 border border-blue-200 rounded-xl p-6 mt-6">

            <h3 className="font-bold text-blue-800">
              System Information
            </h3>

            <p className="text-sm text-blue-700 mt-2">
              The dashboard currently displays demonstration data.
              During integration, hospital, doctor, staff and appointment
              information will be loaded from the shared backend.
            </p>

          </div>

        </main>

      </div>

    </div>
  );
};

export default AdminDashboard;