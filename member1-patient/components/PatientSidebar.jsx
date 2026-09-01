import React from "react";

const PatientSidebar = ({ activePage = "Dashboard", onNavigate }) => {
  const menuItems = [
    {
      name: "Dashboard",
      icon: "🏠",
      path: "/patient/dashboard",
    },
    {
      name: "Hospitals",
      icon: "🏥",
      path: "/patient/hospitals",
    },
    {
      name: "Book Appointment",
      icon: "📅",
      path: "/patient/book-appointment",
    },
    {
      name: "My Appointments",
      icon: "📋",
      path: "/patient/appointments",
    },
    {
      name: "Live Queue",
      icon: "🎫",
      path: "/patient/live-queue",
    },
    {
      name: "Reports",
      icon: "📄",
      path: "/patient/reports",
    },
    {
      name: "Notifications",
      icon: "🔔",
      path: "/patient/notifications",
    },
    {
      name: "Profile",
      icon: "👤",
      path: "/patient/profile",
    },
  ];

  const handleNavigation = (item) => {
    if (onNavigate) {
      onNavigate(item);
    }
  };

  return (
    <aside className="flex min-h-screen w-64 flex-col border-r border-gray-200 bg-white">

      {/* Sidebar Header */}
      <div className="border-b border-gray-200 p-5">
        <h2 className="text-xl font-bold text-blue-600">
          Patient Portal
        </h2>

        <p className="mt-1 text-xs text-gray-500">
          MEDQ CARE
        </p>
      </div>

      {/* Navigation */}
      <nav className="flex-1 p-4">

        <ul className="space-y-2">
          {menuItems.map((item) => {
            const isActive = activePage === item.name;

            return (
              <li key={item.name}>
                <button
                  type="button"
                  onClick={() => handleNavigation(item)}
                  className={`flex w-full items-center gap-3 rounded-xl px-4 py-3 text-left text-sm font-medium transition ${
                    isActive
                      ? "bg-blue-600 text-white shadow-sm"
                      : "text-gray-700 hover:bg-blue-50 hover:text-blue-600"
                  }`}
                >
                  <span className="text-lg">
                    {item.icon}
                  </span>

                  <span>
                    {item.name}
                  </span>
                </button>
              </li>
            );
          })}
        </ul>

      </nav>

      {/* Sidebar Footer */}
      <div className="border-t border-gray-200 p-4">

        <div className="rounded-xl bg-blue-50 p-4">
          <p className="text-sm font-semibold text-blue-700">
            Need Help?
          </p>

          <p className="mt-1 text-xs text-gray-500">
            Contact MEDQ CARE support for assistance.
          </p>

          <button
            type="button"
            className="mt-3 text-sm font-semibold text-blue-600 hover:underline"
          >
            Contact Support
          </button>
        </div>

      </div>

    </aside>
  );
};

export default PatientSidebar;