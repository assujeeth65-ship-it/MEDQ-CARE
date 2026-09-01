import React, { useState } from "react";
import MockAbhaCard from "../components/MockAbhaCard";

const PatientProfile = () => {
  const [profile, setProfile] = useState({
    name: "Arun Kumar",
    mobile: "9876543210",
    dateOfBirth: "2000-08-15",
    gender: "Male",
    address: "Chennai, Tamil Nadu",
    abhaId: "12-3456-7890-1234",
  });

  const [isEditing, setIsEditing] = useState(false);
  const [message, setMessage] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;

    setProfile((prev) => ({
      ...prev,
      [name]: value,
    }));

    setMessage("");
  };

  const handleSave = (e) => {
    e.preventDefault();

    if (!profile.name.trim()) {
      setMessage("Please enter your name.");
      return;
    }

    if (!/^[6-9]\d{9}$/.test(profile.mobile)) {
      setMessage("Please enter a valid 10-digit mobile number.");
      return;
    }

    if (!profile.dateOfBirth) {
      setMessage("Please enter your date of birth.");
      return;
    }

    if (!profile.gender) {
      setMessage("Please select your gender.");
      return;
    }

    if (!profile.address.trim()) {
      setMessage("Please enter your address.");
      return;
    }

    setIsEditing(false);
    setMessage("Profile updated successfully.");
  };

  return (
    <div className="min-h-screen bg-gray-100 p-4 sm:p-6">

      <div className="mx-auto max-w-6xl">

        {/* Page Header */}
        <div className="mb-6">
          <h1 className="text-3xl font-bold text-gray-800">
            My Profile
          </h1>

          <p className="mt-1 text-gray-500">
            View and manage your personal information.
          </p>
        </div>

        {/* Message */}
        {message && (
          <div className="mb-6 rounded-xl bg-green-50 p-4">
            <p className="text-sm font-medium text-green-700">
              {message}
            </p>
          </div>
        )}

        <div className="grid gap-6 lg:grid-cols-2">

          {/* Profile Information */}
          <div className="rounded-2xl bg-white p-6 shadow-sm">

            <div className="mb-6 flex items-center justify-between">

              <div>
                <h2 className="text-xl font-bold text-gray-800">
                  Personal Information
                </h2>

                <p className="mt-1 text-sm text-gray-500">
                  Your registered patient details
                </p>
              </div>

              {!isEditing && (
                <button
                  type="button"
                  onClick={() => {
                    setIsEditing(true);
                    setMessage("");
                  }}
                  className="rounded-xl bg-blue-600 px-4 py-2 text-sm font-semibold text-white hover:bg-blue-700"
                >
                  Edit
                </button>
              )}

            </div>

            <form onSubmit={handleSave} className="space-y-5">

              {/* Name */}
              <div>
                <label
                  htmlFor="name"
                  className="mb-2 block text-sm font-medium text-gray-700"
                >
                  Full Name
                </label>

                <input
                  id="name"
                  name="name"
                  type="text"
                  value={profile.name}
                  onChange={handleChange}
                  disabled={!isEditing}
                  className={`w-full rounded-xl border px-4 py-3 outline-none ${
                    isEditing
                      ? "border-gray-300 bg-white focus:border-blue-500"
                      : "border-gray-200 bg-gray-50"
                  }`}
                />
              </div>

              {/* Mobile */}
              <div>
                <label
                  htmlFor="mobile"
                  className="mb-2 block text-sm font-medium text-gray-700"
                >
                  Mobile Number
                </label>

                <input
                  id="mobile"
                  name="mobile"
                  type="tel"
                  value={profile.mobile}
                  onChange={(e) => {
                    const value = e.target.value.replace(/\D/g, "");

                    if (value.length <= 10) {
                      setProfile((prev) => ({
                        ...prev,
                        mobile: value,
                      }));
                    }

                    setMessage("");
                  }}
                  disabled={!isEditing}
                  maxLength={10}
                  className={`w-full rounded-xl border px-4 py-3 outline-none ${
                    isEditing
                      ? "border-gray-300 bg-white focus:border-blue-500"
                      : "border-gray-200 bg-gray-50"
                  }`}
                />
              </div>

              {/* Date of Birth */}
              <div>
                <label
                  htmlFor="dateOfBirth"
                  className="mb-2 block text-sm font-medium text-gray-700"
                >
                  Date of Birth
                </label>

                <input
                  id="dateOfBirth"
                  name="dateOfBirth"
                  type="date"
                  value={profile.dateOfBirth}
                  onChange={handleChange}
                  disabled={!isEditing}
                  className={`w-full rounded-xl border px-4 py-3 outline-none ${
                    isEditing
                      ? "border-gray-300 bg-white focus:border-blue-500"
                      : "border-gray-200 bg-gray-50"
                  }`}
                />
              </div>

              {/* Gender */}
              <div>
                <label
                  htmlFor="gender"
                  className="mb-2 block text-sm font-medium text-gray-700"
                >
                  Gender
                </label>

                <select
                  id="gender"
                  name="gender"
                  value={profile.gender}
                  onChange={handleChange}
                  disabled={!isEditing}
                  className={`w-full rounded-xl border px-4 py-3 outline-none ${
                    isEditing
                      ? "border-gray-300 bg-white focus:border-blue-500"
                      : "border-gray-200 bg-gray-50"
                  }`}
                >
                  <option value="">Select Gender</option>
                  <option value="Male">Male</option>
                  <option value="Female">Female</option>
                  <option value="Other">Other</option>
                </select>
              </div>

              {/* Address */}
              <div>
                <label
                  htmlFor="address"
                  className="mb-2 block text-sm font-medium text-gray-700"
                >
                  Address
                </label>

                <textarea
                  id="address"
                  name="address"
                  value={profile.address}
                  onChange={handleChange}
                  disabled={!isEditing}
                  rows="3"
                  className={`w-full resize-none rounded-xl border px-4 py-3 outline-none ${
                    isEditing
                      ? "border-gray-300 bg-white focus:border-blue-500"
                      : "border-gray-200 bg-gray-50"
                  }`}
                />
              </div>

              {/* Buttons */}
              {isEditing && (
                <div className="flex gap-3">

                  <button
                    type="submit"
                    className="flex-1 rounded-xl bg-blue-600 px-4 py-3 font-semibold text-white hover:bg-blue-700"
                  >
                    Save Changes
                  </button>

                  <button
                    type="button"
                    onClick={() => {
                      setIsEditing(false);
                      setMessage("");
                    }}
                    className="flex-1 rounded-xl border border-gray-300 px-4 py-3 font-semibold text-gray-700 hover:bg-gray-50"
                  >
                    Cancel
                  </button>

                </div>
              )}

            </form>

          </div>

          {/* ABHA Card */}
          <div>
            <div className="mb-3">
              <h2 className="text-xl font-bold text-gray-800">
                ABHA Information
              </h2>

              <p className="text-sm text-gray-500">
                Your healthcare identification details
              </p>
            </div>

            <MockAbhaCard
              patient={{
                name: profile.name,
                mobile: profile.mobile,
                dateOfBirth: profile.dateOfBirth,
                gender: profile.gender,
                address: profile.address,
                abhaId: profile.abhaId,
              }}
            />
          </div>

        </div>

      </div>

    </div>
  );
};

export default PatientProfile;