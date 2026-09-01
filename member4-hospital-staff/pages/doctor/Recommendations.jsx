import React, { useState } from "react";

const Recommendations = () => {
  const [patient] = useState({
    patientId: "P001",
    name: "Rahul Kumar",
    age: 32,
    gender: "Male",
    condition: "Fever and headache",
  });

  const [recommendation, setRecommendation] = useState({
    medicines: "",
    tests: "",
    lifestyle: "",
    instructions: "",
    followUp: "",
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;

    setRecommendation((previous) => ({
      ...previous,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (
      !recommendation.medicines &&
      !recommendation.tests &&
      !recommendation.lifestyle &&
      !recommendation.instructions
    ) {
      alert("Please enter at least one recommendation.");
      return;
    }

    setSubmitted(true);

    alert("Recommendation saved successfully.");
  };

  const handleClear = () => {
    setRecommendation({
      medicines: "",
      tests: "",
      lifestyle: "",
      instructions: "",
      followUp: "",
    });

    setSubmitted(false);
  };

  return (
    <div className="min-h-screen bg-gray-100">

      {/* Header */}
      <header className="bg-white border-b">
        <div className="max-w-7xl mx-auto px-6 py-4 flex flex-col md:flex-row md:items-center md:justify-between gap-4">

          <div>
            <h1 className="text-2xl font-bold text-blue-700">
              MEDQ CARE
            </h1>

            <p className="text-sm text-gray-500">
              Doctor Recommendations
            </p>
          </div>

          <div className="text-right">
            <p className="font-semibold text-gray-800">
              Dr. Arun
            </p>

            <p className="text-sm text-gray-500">
              Doctor ID: D001
            </p>
          </div>

        </div>
      </header>

      {/* Main */}
      <main className="max-w-7xl mx-auto px-6 py-8">

        {/* Page Heading */}
        <div className="mb-8">

          <h2 className="text-3xl font-bold text-gray-800">
            Patient Recommendations
          </h2>

          <p className="text-gray-500 mt-1">
            Provide medicines, tests and follow-up instructions for the patient.
          </p>

        </div>

        {/* Patient Information */}
        <div className="bg-white border rounded-xl p-6 mb-6">

          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-6">

            <div>
              <h3 className="text-xl font-bold text-gray-800">
                Patient Information
              </h3>

              <p className="text-sm text-gray-500 mt-1">
                Patient selected for the current consultation.
              </p>
            </div>

            <span className="px-4 py-2 rounded-full bg-blue-100 text-blue-700 text-sm font-semibold w-fit">
              {patient.patientId}
            </span>

          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">

            <div className="border rounded-lg p-4">
              <p className="text-sm text-gray-500">
                Patient Name
              </p>

              <p className="font-semibold text-gray-800 mt-1">
                {patient.name}
              </p>
            </div>

            <div className="border rounded-lg p-4">
              <p className="text-sm text-gray-500">
                Age
              </p>

              <p className="font-semibold text-gray-800 mt-1">
                {patient.age}
              </p>
            </div>

            <div className="border rounded-lg p-4">
              <p className="text-sm text-gray-500">
                Gender
              </p>

              <p className="font-semibold text-gray-800 mt-1">
                {patient.gender}
              </p>
            </div>

            <div className="border rounded-lg p-4">
              <p className="text-sm text-gray-500">
                Reason for Visit
              </p>

              <p className="font-semibold text-gray-800 mt-1">
                {patient.condition}
              </p>
            </div>

          </div>

        </div>

        {/* Recommendation Form */}
        <form onSubmit={handleSubmit}>

          <div className="bg-white border rounded-xl p-6">

            <div className="mb-6">

              <h3 className="text-xl font-bold text-gray-800">
                Recommendation Details
              </h3>

              <p className="text-sm text-gray-500 mt-1">
                Enter the recommendations for the patient.
              </p>

            </div>

            {/* Medicines */}
            <div className="mb-6">

              <label className="block text-sm font-semibold text-gray-700 mb-2">
                Medicines
              </label>

              <textarea
                name="medicines"
                value={recommendation.medicines}
                onChange={handleChange}
                rows="5"
                placeholder="Enter medicine name, dosage and frequency..."
                className="w-full border border-gray-300 rounded-lg px-4 py-3 outline-none focus:ring-2 focus:ring-blue-500 resize-none"
              />

            </div>

            {/* Tests */}
            <div className="mb-6">

              <label className="block text-sm font-semibold text-gray-700 mb-2">
                Recommended Tests
              </label>

              <textarea
                name="tests"
                value={recommendation.tests}
                onChange={handleChange}
                rows="4"
                placeholder="Enter recommended laboratory or imaging tests..."
                className="w-full border border-gray-300 rounded-lg px-4 py-3 outline-none focus:ring-2 focus:ring-blue-500 resize-none"
              />

            </div>

            {/* Lifestyle */}
            <div className="mb-6">

              <label className="block text-sm font-semibold text-gray-700 mb-2">
                Lifestyle Recommendations
              </label>

              <textarea
                name="lifestyle"
                value={recommendation.lifestyle}
                onChange={handleChange}
                rows="4"
                placeholder="Enter diet, exercise, rest or lifestyle recommendations..."
                className="w-full border border-gray-300 rounded-lg px-4 py-3 outline-none focus:ring-2 focus:ring-blue-500 resize-none"
              />

            </div>

            {/* Instructions */}
            <div className="mb-6">

              <label className="block text-sm font-semibold text-gray-700 mb-2">
                Additional Instructions
              </label>

              <textarea
                name="instructions"
                value={recommendation.instructions}
                onChange={handleChange}
                rows="4"
                placeholder="Enter additional instructions for the patient..."
                className="w-full border border-gray-300 rounded-lg px-4 py-3 outline-none focus:ring-2 focus:ring-blue-500 resize-none"
              />

            </div>

            {/* Follow-up */}
            <div className="mb-6">

              <label className="block text-sm font-semibold text-gray-700 mb-2">
                Follow-up Date
              </label>

              <input
                type="date"
                name="followUp"
                value={recommendation.followUp}
                onChange={handleChange}
                className="w-full md:w-80 border border-gray-300 rounded-lg px-4 py-3 outline-none focus:ring-2 focus:ring-blue-500"
              />

            </div>

            {/* Buttons */}
            <div className="flex flex-col sm:flex-row justify-end gap-3">

              <button
                type="button"
                onClick={handleClear}
                className="px-6 py-3 border border-gray-300 rounded-lg font-semibold hover:bg-gray-50"
              >
                Clear
              </button>

              <button
                type="submit"
                disabled={submitted}
                className="px-6 py-3 bg-blue-600 hover:bg-blue-700 disabled:bg-green-600 text-white rounded-lg font-semibold"
              >
                {submitted
                  ? "Recommendation Saved"
                  : "Save Recommendation"}
              </button>

            </div>

          </div>

        </form>

        {/* Success Message */}
        {submitted && (
          <div className="bg-green-50 border border-green-200 rounded-xl p-6 mt-6">

            <div className="flex items-start gap-4">

              <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center text-green-700 font-bold">
                ✓
              </div>

              <div>

                <h3 className="font-bold text-green-800">
                  Recommendation Saved
                </h3>

                <p className="text-sm text-green-700 mt-1">
                  Recommendations for {patient.name} have been saved successfully.
                </p>

              </div>

            </div>

          </div>
        )}

        {/* Integration Note */}
        <div className="bg-blue-50 border border-blue-200 rounded-xl p-6 mt-6">

          <h3 className="font-bold text-blue-800">
            Team Integration
          </h3>

          <p className="text-sm text-blue-700 mt-2">
            Currently this page uses demonstration patient data.
            During integration, patient information will come from the
            shared Doctor Queue and consultation data will be stored
            through the backend.
          </p>

        </div>

      </main>

    </div>
  );
};

export default Recommendations;