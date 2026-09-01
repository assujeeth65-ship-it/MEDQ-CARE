import React, { useState } from "react";
import DashboardCard from "../../components/DashboardCard";
import StaffNavbar from "../../components/StaffNavbar";
import StaffSidebar from "../../components/StaffSidebar";

const ScheduleManagement = () => {
  const [schedules, setSchedules] = useState([
    {
      id: "SCH001",
      doctor: "Dr. Arun",
      department: "General Medicine",
      date: "2026-08-29",
      startTime: "09:00",
      endTime: "13:00",
      room: "102",
      status: "Active",
    },
    {
      id: "SCH002",
      doctor: "Dr. Priya",
      department: "Cardiology",
      date: "2026-08-29",
      startTime: "10:00",
      endTime: "14:00",
      room: "205",
      status: "Active",
    },
    {
      id: "SCH003",
      doctor: "Dr. Karthik",
      department: "Orthopedics",
      date: "2026-08-30",
      startTime: "09:30",
      endTime: "13:30",
      room: "301",
      status: "Active",
    },
  ]);

  const [showForm, setShowForm] = useState(false);

  const [formData, setFormData] = useState({
    doctor: "",
    department: "",
    date: "",
    startTime: "",
    endTime: "",
    room: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((previous) => ({
      ...previous,
      [name]: value,
    }));
  };

  const handleAddSchedule = (e) => {
    e.preventDefault();

    if (
      !formData.doctor ||
      !formData.department ||
      !formData.date ||
      !formData.startTime ||
      !formData.endTime ||
      !formData.room
    ) {
      alert("Please fill all schedule details.");
      return;
    }

    const newSchedule = {
      id: `SCH${String(schedules.length + 1).padStart(3, "0")}`,
      doctor: formData.doctor,
      department: formData.department,
      date: formData.date,
      startTime: formData.startTime,
      endTime: formData.endTime,
      room: formData.room,
      status: "Active",
    };

    setSchedules((previous) => [
      ...previous,
      newSchedule,
    ]);

    setFormData({
      doctor: "",
      department: "",
      date: "",
      startTime: "",
      endTime: "",
      room: "",
    });

    setShowForm(false);

    alert("Schedule added successfully.");
  };

  const toggleScheduleStatus = (id) => {
    setSchedules((previous) =>
      previous.map((schedule) =>
        schedule.id === id
          ? {
              ...schedule,
              status:
                schedule.status === "Active"
                  ? "Cancelled"
                  : "Active",
            }
          : schedule
      )
    );
  };

  const handleNavigate = (page) => {
    console.log("Navigate to:", page);
  };

  const handleLogout = () => {
    console.log("Admin logout");
  };

  const activeSchedules = schedules.filter(
    (schedule) => schedule.status === "Active"
  ).length;

  const cancelledSchedules = schedules.filter(
    (schedule) => schedule.status === "Cancelled"
  ).length;

  const doctorsScheduled = new Set(
    schedules
      .filter((schedule) => schedule.status === "Active")
      .map((schedule) => schedule.doctor)
  ).size;

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
          activePage="schedule-management"
          onNavigate={handleNavigate}
        />

        {/* Main Content */}
        <main className="flex-1 p-6 md:p-8">

          {/* Page Heading */}
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-8">

            <div>
              <h2 className="text-3xl font-bold text-gray-800">
                Schedule Management
              </h2>

              <p className="text-gray-500 mt-1">
                Manage doctor schedules, timings and consultation rooms.
              </p>
            </div>

            <button
              onClick={() => setShowForm((previous) => !previous)}
              className="px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-semibold"
            >
              {showForm ? "Close Form" : "+ Add Schedule"}
            </button>

          </div>

          {/* Statistics */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 mb-8">

            <DashboardCard
              title="Total Schedules"
              value={schedules.length}
              description="Created schedules"
              icon="📅"
            />

            <DashboardCard
              title="Active Schedules"
              value={activeSchedules}
              description="Currently active"
              icon="✓"
            />

            <DashboardCard
              title="Doctors Scheduled"
              value={doctorsScheduled}
              description="Doctors with schedules"
              icon="👨‍⚕️"
            />

            <DashboardCard
              title="Cancelled"
              value={cancelledSchedules}
              description="Cancelled schedules"
              icon="✕"
            />

          </div>

          {/* Add Schedule Form */}
          {showForm && (
            <div className="bg-white border border-gray-200 rounded-xl shadow-sm mb-6">

              <div className="p-6 border-b border-gray-200">
                <h3 className="text-xl font-bold text-gray-800">
                  Create Doctor Schedule
                </h3>

                <p className="text-sm text-gray-500 mt-1">
                  Enter the doctor's working schedule.
                </p>
              </div>

              <form
                onSubmit={handleAddSchedule}
                className="p-6"
              >

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">

                  {/* Doctor */}
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Doctor Name
                    </label>

                    <input
                      type="text"
                      name="doctor"
                      value={formData.doctor}
                      onChange={handleChange}
                      placeholder="e.g. Dr. Kumar"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg outline-none focus:ring-2 focus:ring-blue-500"
                    />
                  </div>

                  {/* Department */}
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Department
                    </label>

                    <input
                      type="text"
                      name="department"
                      value={formData.department}
                      onChange={handleChange}
                      placeholder="e.g. Cardiology"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg outline-none focus:ring-2 focus:ring-blue-500"
                    />
                  </div>

                  {/* Date */}
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Date
                    </label>

                    <input
                      type="date"
                      name="date"
                      value={formData.date}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg outline-none focus:ring-2 focus:ring-blue-500"
                    />
                  </div>

                  {/* Start Time */}
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Start Time
                    </label>

                    <input
                      type="time"
                      name="startTime"
                      value={formData.startTime}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg outline-none focus:ring-2 focus:ring-blue-500"
                    />
                  </div>

                  {/* End Time */}
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      End Time
                    </label>

                    <input
                      type="time"
                      name="endTime"
                      value={formData.endTime}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg outline-none focus:ring-2 focus:ring-blue-500"
                    />
                  </div>

                  {/* Room */}
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Consultation Room
                    </label>

                    <input
                      type="text"
                      name="room"
                      value={formData.room}
                      onChange={handleChange}
                      placeholder="e.g. 102"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg outline-none focus:ring-2 focus:ring-blue-500"
                    />
                  </div>

                </div>

                <div className="flex justify-end mt-6">

                  <button
                    type="submit"
                    className="px-6 py-3 bg-green-600 hover:bg-green-700 text-white rounded-lg font-semibold"
                  >
                    Create Schedule
                  </button>

                </div>

              </form>

            </div>
          )}

          {/* Schedule Table */}
          <div className="bg-white border border-gray-200 rounded-xl shadow-sm overflow-hidden">

            <div className="p-6 border-b border-gray-200">

              <h3 className="text-xl font-bold text-gray-800">
                Doctor Schedules
              </h3>

              <p className="text-sm text-gray-500 mt-1">
                View and manage scheduled consultation timings.
              </p>

            </div>

            <div className="overflow-x-auto">

              <table className="w-full">

                <thead className="bg-gray-50">

                  <tr className="text-left">

                    <th className="px-6 py-4 text-sm font-semibold text-gray-500">
                      Schedule ID
                    </th>

                    <th className="px-6 py-4 text-sm font-semibold text-gray-500">
                      Doctor
                    </th>

                    <th className="px-6 py-4 text-sm font-semibold text-gray-500">
                      Department
                    </th>

                    <th className="px-6 py-4 text-sm font-semibold text-gray-500">
                      Date
                    </th>

                    <th className="px-6 py-4 text-sm font-semibold text-gray-500">
                      Time
                    </th>

                    <th className="px-6 py-4 text-sm font-semibold text-gray-500">
                      Room
                    </th>

                    <th className="px-6 py-4 text-sm font-semibold text-gray-500">
                      Status
                    </th>

                    <th className="px-6 py-4 text-sm font-semibold text-gray-500">
                      Action
                    </th>

                  </tr>

                </thead>

                <tbody>

                  {schedules.map((schedule) => (

                    <tr
                      key={schedule.id}
                      className="border-t border-gray-100 hover:bg-gray-50"
                    >

                      <td className="px-6 py-4">
                        <span className="font-semibold text-blue-600">
                          {schedule.id}
                        </span>
                      </td>

                      <td className="px-6 py-4">
                        <span className="font-semibold text-gray-800">
                          {schedule.doctor}
                        </span>
                      </td>

                      <td className="px-6 py-4 text-gray-600">
                        {schedule.department}
                      </td>

                      <td className="px-6 py-4 text-gray-600">
                        {schedule.date}
                      </td>

                      <td className="px-6 py-4 text-gray-600">
                        {schedule.startTime} - {schedule.endTime}
                      </td>

                      <td className="px-6 py-4 text-gray-600">
                        {schedule.room}
                      </td>

                      <td className="px-6 py-4">

                        <span
                          className={`px-3 py-1 rounded-full text-xs font-semibold ${
                            schedule.status === "Active"
                              ? "bg-green-100 text-green-700"
                              : "bg-red-100 text-red-700"
                          }`}
                        >
                          {schedule.status}
                        </span>

                      </td>

                      <td className="px-6 py-4">

                        <button
                          onClick={() =>
                            toggleScheduleStatus(schedule.id)
                          }
                          className={`px-4 py-2 rounded-lg text-sm font-semibold ${
                            schedule.status === "Active"
                              ? "border border-red-300 text-red-600 hover:bg-red-50"
                              : "border border-green-300 text-green-600 hover:bg-green-50"
                          }`}
                        >
                          {schedule.status === "Active"
                            ? "Cancel"
                            : "Activate"}
                        </button>

                      </td>

                    </tr>

                  ))}

                </tbody>

              </table>

            </div>

          </div>

          {/* Integration Note */}
          <div className="bg-blue-50 border border-blue-200 rounded-xl p-6 mt-6">

            <h3 className="font-bold text-blue-800">
              Team Integration
            </h3>

            <p className="text-sm text-blue-700 mt-2">
              Schedule information is currently demonstration data.
              During backend integration, doctor schedules will be
              shared with the appointment and queue modules.
            </p>

          </div>

        </main>

      </div>

    </div>
  );
};

export default ScheduleManagement;