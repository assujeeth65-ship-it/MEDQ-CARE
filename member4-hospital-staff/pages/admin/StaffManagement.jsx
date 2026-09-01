import React, { useState } from "react";
import DashboardCard from "../../components/DashboardCard";
import StaffNavbar from "../../components/StaffNavbar";
import StaffSidebar from "../../components/StaffSidebar";

const StaffManagement = () => {
  const [staff, setStaff] = useState([
    {
      id: "STF001",
      name: "Dr. Arun",
      role: "Doctor",
      department: "General Medicine",
      phone: "+91 98765 11111",
      status: "Active",
    },
    {
      id: "STF002",
      name: "Dr. Priya",
      role: "Doctor",
      department: "Cardiology",
      phone: "+91 98765 22222",
      status: "Active",
    },
    {
      id: "STF003",
      name: "Kumar",
      role: "Receptionist",
      department: "Reception",
      phone: "+91 98765 33333",
      status: "Active",
    },
    {
      id: "STF004",
      name: "Meena",
      role: "Nurse",
      department: "Pediatrics",
      phone: "+91 98765 44444",
      status: "Inactive",
    },
  ]);

  const [showForm, setShowForm] = useState(false);

  const [formData, setFormData] = useState({
    name: "",
    role: "Doctor",
    department: "",
    phone: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((previous) => ({
      ...previous,
      [name]: value,
    }));
  };

  const handleAddStaff = (e) => {
    e.preventDefault();

    if (
      !formData.name ||
      !formData.role ||
      !formData.department ||
      !formData.phone
    ) {
      alert("Please fill all staff details.");
      return;
    }

    const newStaff = {
      id: `STF${String(staff.length + 1).padStart(3, "0")}`,
      name: formData.name,
      role: formData.role,
      department: formData.department,
      phone: formData.phone,
      status: "Active",
    };

    setStaff((previous) => [...previous, newStaff]);

    setFormData({
      name: "",
      role: "Doctor",
      department: "",
      phone: "",
    });

    setShowForm(false);

    alert("Staff member added successfully.");
  };

  const toggleStaffStatus = (id) => {
    setStaff((previous) =>
      previous.map((member) =>
        member.id === id
          ? {
              ...member,
              status:
                member.status === "Active"
                  ? "Inactive"
                  : "Active",
            }
          : member
      )
    );
  };

  const handleNavigate = (page) => {
    console.log("Navigate to:", page);
  };

  const handleLogout = () => {
    console.log("Admin logout");
  };

  const activeStaff = staff.filter(
    (member) => member.status === "Active"
  ).length;

  const doctors = staff.filter(
    (member) => member.role === "Doctor"
  ).length;

  const otherStaff = staff.filter(
    (member) => member.role !== "Doctor"
  ).length;

  return (
    <div className="min-h-screen bg-gray-100">

      <StaffNavbar
        userName="Admin"
        role="Administrator"
        onLogout={handleLogout}
      />

      <div className="flex">

        <StaffSidebar
          role="Admin"
          activePage="staff-management"
          onNavigate={handleNavigate}
        />

        <main className="flex-1 p-6 md:p-8">

          {/* Heading */}
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-8">

            <div>
              <h2 className="text-3xl font-bold text-gray-800">
                Staff Management
              </h2>

              <p className="text-gray-500 mt-1">
                Manage doctors and hospital staff members.
              </p>
            </div>

            <button
              onClick={() => setShowForm((previous) => !previous)}
              className="px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-semibold"
            >
              {showForm ? "Close Form" : "+ Add Staff"}
            </button>

          </div>

          {/* Statistics */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 mb-8">

            <DashboardCard
              title="Total Staff"
              value={staff.length}
              description="Registered staff"
              icon="👥"
            />

            <DashboardCard
              title="Active Staff"
              value={activeStaff}
              description="Currently active"
              icon="✓"
            />

            <DashboardCard
              title="Doctors"
              value={doctors}
              description="Medical doctors"
              icon="👨‍⚕️"
            />

            <DashboardCard
              title="Other Staff"
              value={otherStaff}
              description="Non-doctor staff"
              icon="🧑‍💼"
            />

          </div>

          {/* Add Staff Form */}
          {showForm && (
            <div className="bg-white border border-gray-200 rounded-xl shadow-sm mb-6">

              <div className="p-6 border-b border-gray-200">
                <h3 className="text-xl font-bold text-gray-800">
                  Add Staff Member
                </h3>

                <p className="text-sm text-gray-500 mt-1">
                  Enter the staff member's basic information.
                </p>
              </div>

              <form
                onSubmit={handleAddStaff}
                className="p-6"
              >

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Full Name
                    </label>

                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="Enter name"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg outline-none focus:ring-2 focus:ring-blue-500"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Role
                    </label>

                    <select
                      name="role"
                      value={formData.role}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg outline-none focus:ring-2 focus:ring-blue-500"
                    >
                      <option value="Doctor">Doctor</option>
                      <option value="Nurse">Nurse</option>
                      <option value="Receptionist">
                        Receptionist
                      </option>
                      <option value="Technician">
                        Technician
                      </option>
                      <option value="Other">Other</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Department
                    </label>

                    <input
                      type="text"
                      name="department"
                      value={formData.department}
                      onChange={handleChange}
                      placeholder="Enter department"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg outline-none focus:ring-2 focus:ring-blue-500"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Phone Number
                    </label>

                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="Enter phone number"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg outline-none focus:ring-2 focus:ring-blue-500"
                    />
                  </div>

                </div>

                <div className="flex justify-end mt-6">

                  <button
                    type="submit"
                    className="px-6 py-3 bg-green-600 hover:bg-green-700 text-white rounded-lg font-semibold"
                  >
                    Add Staff
                  </button>

                </div>

              </form>

            </div>
          )}

          {/* Staff Table */}
          <div className="bg-white border border-gray-200 rounded-xl shadow-sm overflow-hidden">

            <div className="p-6 border-b border-gray-200">
              <h3 className="text-xl font-bold text-gray-800">
                Staff Members
              </h3>

              <p className="text-sm text-gray-500 mt-1">
                View and manage registered hospital staff.
              </p>
            </div>

            <div className="overflow-x-auto">

              <table className="w-full">

                <thead className="bg-gray-50">
                  <tr className="text-left">

                    <th className="px-6 py-4 text-sm font-semibold text-gray-500">
                      Staff ID
                    </th>

                    <th className="px-6 py-4 text-sm font-semibold text-gray-500">
                      Name
                    </th>

                    <th className="px-6 py-4 text-sm font-semibold text-gray-500">
                      Role
                    </th>

                    <th className="px-6 py-4 text-sm font-semibold text-gray-500">
                      Department
                    </th>

                    <th className="px-6 py-4 text-sm font-semibold text-gray-500">
                      Phone
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

                  {staff.map((member) => (

                    <tr
                      key={member.id}
                      className="border-t border-gray-100 hover:bg-gray-50"
                    >

                      <td className="px-6 py-4">
                        <span className="font-semibold text-blue-600">
                          {member.id}
                        </span>
                      </td>

                      <td className="px-6 py-4">
                        <span className="font-semibold text-gray-800">
                          {member.name}
                        </span>
                      </td>

                      <td className="px-6 py-4 text-gray-600">
                        {member.role}
                      </td>

                      <td className="px-6 py-4 text-gray-600">
                        {member.department}
                      </td>

                      <td className="px-6 py-4 text-gray-600">
                        {member.phone}
                      </td>

                      <td className="px-6 py-4">

                        <span
                          className={`px-3 py-1 rounded-full text-xs font-semibold ${
                            member.status === "Active"
                              ? "bg-green-100 text-green-700"
                              : "bg-gray-100 text-gray-600"
                          }`}
                        >
                          {member.status}
                        </span>

                      </td>

                      <td className="px-6 py-4">

                        <button
                          onClick={() =>
                            toggleStaffStatus(member.id)
                          }
                          className={`px-4 py-2 rounded-lg text-sm font-semibold ${
                            member.status === "Active"
                              ? "border border-red-300 text-red-600 hover:bg-red-50"
                              : "border border-green-300 text-green-600 hover:bg-green-50"
                          }`}
                        >
                          {member.status === "Active"
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
              Staff information is currently demonstration data.
              Later, this page will connect to the shared backend
              so doctors and other hospital staff can be managed
              from the MEDQ CARE system.
            </p>

          </div>

        </main>

      </div>

    </div>
  );
};

export default StaffManagement;