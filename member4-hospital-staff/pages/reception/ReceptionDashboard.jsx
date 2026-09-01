import React from "react";
import DashboardCard from "../../components/DashboardCard";
import StaffNavbar from "../../components/StaffNavbar";
import StaffSidebar from "../../components/StaffSidebar";

const ReceptionDashboard = () => {
  const handleNavigate = (page) => {
    console.log("Navigate to:", page);
  };

  const handleLogout = () => {
    console.log("Reception logout");
  };

  return (
    <div className="min-h-screen bg-gray-100">

      <StaffNavbar
        userName="Reception Staff"
        role="Receptionist"
        onLogout={handleLogout}
      />

      <div className="flex">

        <StaffSidebar
          role="Reception"
          activePage="reception-dashboard"
          onNavigate={handleNavigate}
        />

        <main className="flex-1 p-6 md:p-8">

          <div className="mb-8">
            <h2 className="text-3xl font-bold text-gray-800">
              Reception Dashboard
            </h2>

            <p className="text-gray-500 mt-1">
              Manage patients, appointments and walk-in registrations.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-5 mb-8">

            <DashboardCard
              title="Today's Appointments"
              value="48"
              description="Scheduled today"
              icon="📅"
            />

            <DashboardCard
              title="Waiting Patients"
              value="12"
              description="Currently waiting"
              icon="⏳"
            />

            <DashboardCard
              title="Completed"
              value="31"
              description="Appointments completed"
              icon="✓"
            />

            <DashboardCard
              title="Walk-ins"
              value="7"
              description="Today's walk-ins"
              icon="🚶"
            />

          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">

            <div className="bg-white rounded-xl border border-gray-200 shadow-sm p-6">

              <h3 className="text-xl font-bold text-gray-800 mb-5">
                Today's Summary
              </h3>

              <div className="space-y-4">

                <div className="flex justify-between border-b pb-3">
                  <span className="text-gray-600">
                    Total appointments
                  </span>
                  <span className="font-bold">48</span>
                </div>

                <div className="flex justify-between border-b pb-3">
                  <span className="text-gray-600">
                    Patients checked in
                  </span>
                  <span className="font-bold">36</span>
                </div>

                <div className="flex justify-between border-b pb-3">
                  <span className="text-gray-600">
                    Waiting patients
                  </span>
                  <span className="font-bold">12</span>
                </div>

                <div className="flex justify-between">
                  <span className="text-gray-600">
                    Walk-in patients
                  </span>
                  <span className="font-bold">7</span>
                </div>

              </div>

            </div>

            <div className="bg-white rounded-xl border border-gray-200 shadow-sm p-6">

              <h3 className="text-xl font-bold text-gray-800 mb-5">
                Quick Actions
              </h3>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">

                <button
                  onClick={() =>
                    handleNavigate("appointment-management")
                  }
                  className="p-5 text-left border rounded-xl hover:bg-blue-50 transition"
                >
                  <div className="text-2xl mb-2">📅</div>
                  <h4 className="font-semibold">
                    Appointments
                  </h4>
                  <p className="text-sm text-gray-500 mt-1">
                    Manage appointments
                  </p>
                </button>

                <button
                  onClick={() =>
                    handleNavigate("patient-management")
                  }
                  className="p-5 text-left border rounded-xl hover:bg-blue-50 transition"
                >
                  <div className="text-2xl mb-2">👤</div>
                  <h4 className="font-semibold">
                    Patients
                  </h4>
                  <p className="text-sm text-gray-500 mt-1">
                    Manage patient records
                  </p>
                </button>

                <button
                  onClick={() => handleNavigate("walk-in")}
                  className="p-5 text-left border rounded-xl hover:bg-blue-50 transition"
                >
                  <div className="text-2xl mb-2">🚶</div>
                  <h4 className="font-semibold">
                    Walk-in Registration
                  </h4>
                  <p className="text-sm text-gray-500 mt-1">
                    Register walk-in patients
                  </p>
                </button>

                <button
                  onClick={() => handleNavigate("queue")}
                  className="p-5 text-left border rounded-xl hover:bg-blue-50 transition"
                >
                  <div className="text-2xl mb-2">🔢</div>
                  <h4 className="font-semibold">
                    Queue
                  </h4>
                  <p className="text-sm text-gray-500 mt-1">
                    View patient queue
                  </p>
                </button>

              </div>

            </div>

          </div>

        </main>

      </div>

    </div>
  );
};

export default ReceptionDashboard;