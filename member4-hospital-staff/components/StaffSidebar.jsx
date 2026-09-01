import React from "react";

const StaffSidebar = ({
  activePage = "",
  onNavigate,
  role = "Staff",
}) => {
  const doctorMenu = [
    {
      name: "Dashboard",
      path: "doctor-dashboard",
    },
    {
      name: "Today's Patients",
      path: "today-patients",
    },
    {
      name: "Doctor Queue",
      path: "doctor-queue",
    },
    {
      name: "Consultation",
      path: "consultation",
    },
    {
      name: "Recommendations",
      path: "recommendations",
    },
  ];

  const adminMenu = [
    {
      name: "Dashboard",
      path: "admin-dashboard",
    },
    {
      name: "Hospital Management",
      path: "hospital-management",
    },
    {
      name: "Department Management",
      path: "department-management",
    },
    {
      name: "Staff Management",
      path: "staff-management",
    },
    {
      name: "Schedule Management",
      path: "schedule-management",
    },
  ];

  const receptionMenu = [
    {
      name: "Dashboard",
      path: "reception-dashboard",
    },
    {
      name: "Appointments",
      path: "appointment-management",
    },
    {
      name: "Patients",
      path: "patient-management",
    },
    {
      name: "Walk-In",
      path: "walk-in",
    },
  ];

  let menuItems = [];

  if (role === "Doctor") {
    menuItems = doctorMenu;
  } else if (role === "Admin") {
    menuItems = adminMenu;
  } else if (role === "Reception") {
    menuItems = receptionMenu;
  }

  return (
    <aside className="w-64 min-h-screen bg-white border-r border-gray-200">

      {/* Logo */}
      <div className="px-6 py-5 border-b border-gray-200">
        <h1 className="text-xl font-bold text-blue-700">
          MEDQ CARE
        </h1>

        <p className="text-xs text-gray-500 mt-1">
          {role} Panel
        </p>
      </div>

      {/* Navigation */}
      <nav className="p-4">

        <p className="text-xs font-semibold text-gray-400 uppercase px-3 mb-3">
          Navigation
        </p>

        <div className="space-y-1">

          {menuItems.map((item) => {
            const isActive = activePage === item.path;

            return (
              <button
                key={item.path}
                onClick={() => {
                  if (onNavigate) {
                    onNavigate(item.path);
                  }
                }}
                className={`w-full text-left px-4 py-3 rounded-lg text-sm font-medium transition ${
                  isActive
                    ? "bg-blue-50 text-blue-700"
                    : "text-gray-600 hover:bg-gray-50 hover:text-blue-600"
                }`}
              >
                {item.name}
              </button>
            );
          })}

        </div>

      </nav>

    </aside>
  );
};

export default StaffSidebar;