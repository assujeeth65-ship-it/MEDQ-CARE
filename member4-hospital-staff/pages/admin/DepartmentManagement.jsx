import React, { useState } from "react";
import DashboardCard from "../../components/DashboardCard";
import StaffNavbar from "../../components/StaffNavbar";
import StaffSidebar from "../../components/StaffSidebar";

const DepartmentManagement = () => {
  const [departments, setDepartments] = useState([
    {
      id: "DEP001",
      name: "General Medicine",
      head: "Dr. Arun",
      doctors: 5,
      status: "Active",
    },
    {
      id: "DEP002",
      name: "Cardiology",
      head: "Dr. Priya",
      doctors: 4,
      status: "Active",
    },
    {
      id: "DEP003",
      name: "Orthopedics",
      head: "Dr. Karthik",
      doctors: 3,
      status: "Active",
    },
    {
      id: "DEP004",
      name: "Pediatrics",
      head: "Dr. Meena",
      doctors: 4,
      status: "Active",
    },
  ]);

  const [showForm, setShowForm] = useState(false);

  const [formData, setFormData] = useState({
    name: "",
    head: "",
    doctors: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((previous) => ({
      ...previous,
      [name]: value,
    }));
  };

  const handleAddDepartment = (e) => {
    e.preventDefault();

    if (!formData.name || !formData.head || !formData.doctors) {
      alert("Please fill all department details.");
      return;
    }

    const newDepartment = {
      id: `DEP${String(departments.length + 1).padStart(3, "0")}`,
      name: formData.name,
      head: formData.head,
      doctors: Number(formData.doctors),
      status: "Active",
    };

    setDepartments((previous) => [
      ...previous,
      newDepartment,
    ]);

    setFormData({
      name: "",
      head: "",
      doctors: "",
    });

    setShowForm(false);

    alert("Department added successfully.");
  };

  const toggleDepartmentStatus = (id) => {
    setDepartments((previous) =>
      previous.map((department) =>
        department.id === id
          ? {
              ...department,
              status:
                department.status === "Active"
                  ? "Inactive"
                  : "Active",
            }
          : department
      )
    );
  };

  const handleNavigate = (page) => {
    console.log("Navigate to:", page);
  };

  const handleLogout = () => {
    console.log("Admin logout");
  };

  const activeDepartments = departments.filter(
    (department) => department.status === "Active"
  ).length;

  const totalDoctors = departments.reduce(
    (total, department) => total + department.doctors,
    0
  );

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
          activePage="department-management"
          onNavigate={handleNavigate}
        />

        {/* Main Content */}
        <main className="flex-1 p-6 md:p-8">

          {/* Heading */}
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-8">

            <div>
              <h2 className="text-3xl font-bold text-gray-800">
                Department Management
              </h2>

              <p className="text-gray-500 mt-1">
                Manage hospital departments and department heads.
              </p>
            </div>

            <button
              onClick={() => setShowForm((previous) => !previous)}
              className="px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-semibold"
            >
              {showForm ? "Close Form" : "+ Add Department"}
            </button>

          </div>

          {/* Statistics */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-5 mb-8">

            <DashboardCard
              title="Total Departments"
              value={departments.length}
              description="Registered departments"
              icon="🏢"
            />

            <DashboardCard
              title="Active Departments"
              value={activeDepartments}
              description="Currently operational"
              icon="✓"
            />

            <DashboardCard
              title="Total Doctors"
              value={totalDoctors}
              description="Across all departments"
              icon="👨‍⚕️"
            />

          </div>

          {/* Add Department Form */}
          {showForm && (
            <div className="bg-white border border-gray-200 rounded-xl shadow-sm mb-6">

              <div className="p-6 border-b border-gray-200">
                <h3 className="text-xl font-bold text-gray-800">
                  Add New Department
                </h3>

                <p className="text-sm text-gray-500 mt-1">
                  Enter the department information below.
                </p>
              </div>

              <form
                onSubmit={handleAddDepartment}
                className="p-6"
              >

                <div className="grid grid-cols-1 md:grid-cols-3 gap-5">

                  {/* Department Name */}
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Department Name
                    </label>

                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="e.g. Neurology"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg outline-none focus:ring-2 focus:ring-blue-500"
                    />
                  </div>

                  {/* Department Head */}
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Department Head
                    </label>

                    <input
                      type="text"
                      name="head"
                      value={formData.head}
                      onChange={handleChange}
                      placeholder="e.g. Dr. Kumar"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg outline-none focus:ring-2 focus:ring-blue-500"
                    />
                  </div>

                  {/* Doctors */}
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Number of Doctors
                    </label>

                    <input
                      type="number"
                      name="doctors"
                      value={formData.doctors}
                      onChange={handleChange}
                      min="0"
                      placeholder="e.g. 5"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg outline-none focus:ring-2 focus:ring-blue-500"
                    />
                  </div>

                </div>

                <div className="flex justify-end mt-6">

                  <button
                    type="submit"
                    className="px-6 py-3 bg-green-600 hover:bg-green-700 text-white rounded-lg font-semibold"
                  >
                    Add Department
                  </button>

                </div>

              </form>

            </div>
          )}

          {/* Department Table */}
          <div className="bg-white border border-gray-200 rounded-xl shadow-sm overflow-hidden">

            <div className="p-6 border-b border-gray-200">

              <h3 className="text-xl font-bold text-gray-800">
                Departments
              </h3>

              <p className="text-sm text-gray-500 mt-1">
                List of hospital departments.
              </p>

            </div>

            <div className="overflow-x-auto">

              <table className="w-full">

                <thead className="bg-gray-50">

                  <tr className="text-left">

                    <th className="px-6 py-4 text-sm font-semibold text-gray-500">
                      Department ID
                    </th>

                    <th className="px-6 py-4 text-sm font-semibold text-gray-500">
                      Department
                    </th>

                    <th className="px-6 py-4 text-sm font-semibold text-gray-500">
                      Department Head
                    </th>

                    <th className="px-6 py-4 text-sm font-semibold text-gray-500">
                      Doctors
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

                  {departments.map((department) => (

                    <tr
                      key={department.id}
                      className="border-t border-gray-100 hover:bg-gray-50"
                    >

                      <td className="px-6 py-4">
                        <span className="font-semibold text-blue-600">
                          {department.id}
                        </span>
                      </td>

                      <td className="px-6 py-4">
                        <span className="font-semibold text-gray-800">
                          {department.name}
                        </span>
                      </td>

                      <td className="px-6 py-4 text-gray-600">
                        {department.head}
                      </td>

                      <td className="px-6 py-4 text-gray-600">
                        {department.doctors}
                      </td>

                      <td className="px-6 py-4">

                        <span
                          className={`px-3 py-1 rounded-full text-xs font-semibold ${
                            department.status === "Active"
                              ? "bg-green-100 text-green-700"
                              : "bg-gray-100 text-gray-600"
                          }`}
                        >
                          {department.status}
                        </span>

                      </td>

                      <td className="px-6 py-4">

                        <button
                          onClick={() =>
                            toggleDepartmentStatus(
                              department.id
                            )
                          }
                          className={`px-4 py-2 rounded-lg text-sm font-semibold ${
                            department.status === "Active"
                              ? "border border-red-300 text-red-600 hover:bg-red-50"
                              : "border border-green-300 text-green-600 hover:bg-green-50"
                          }`}
                        >
                          {department.status === "Active"
                            ? "Deactivate"
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
              The department information shown here is currently
              demonstration data. Later, this page will use the
              shared backend so department changes are available
              to the rest of the MEDQ CARE system.
            </p>

          </div>

        </main>

      </div>

    </div>
  );
};

export default DepartmentManagement;