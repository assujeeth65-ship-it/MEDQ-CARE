import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Reports.css";

const Reports = () => {
  const navigate = useNavigate();

  const [activeFilter, setActiveFilter] = useState("all");

  // Demo report data
  // Later this can be replaced with data from your backend API.
  const [reports] = useState([
    {
      id: "LAB-001",
      reportType: "Laboratory",
      testName: "Complete Blood Count",
      department: "Laboratory",
      hospital: "City Care Hospital",
      doctor: "Dr. Arun Kumar",
      date: "25 Aug 2026",
      status: "available",
      result: "Normal",
    },
    {
      id: "IMG-001",
      reportType: "Imaging",
      testName: "Chest X-Ray",
      department: "Radiology",
      hospital: "City Care Hospital",
      doctor: "Dr. Priya Sharma",
      date: "22 Aug 2026",
      status: "available",
      result: "Report Available",
    },
    {
      id: "LAB-002",
      reportType: "Laboratory",
      testName: "Lipid Profile",
      department: "Laboratory",
      hospital: "City Care Hospital",
      doctor: "Dr. Arun Kumar",
      date: "20 Aug 2026",
      status: "available",
      result: "Normal",
    },
    {
      id: "IMG-002",
      reportType: "Imaging",
      testName: "Ultrasound Abdomen",
      department: "Radiology",
      hospital: "City Care Hospital",
      doctor: "Dr. Rahul Singh",
      date: "18 Aug 2026",
      status: "processing",
      result: "Processing",
    },
  ]);

  // Filter reports
  const filteredReports = reports.filter((report) => {
    if (activeFilter === "all") {
      return true;
    }

    return report.reportType.toLowerCase() === activeFilter;
  });

  // Report icon
  const getReportIcon = (type) => {
    if (type === "Laboratory") {
      return "🧪";
    }

    if (type === "Imaging") {
      return "🩻";
    }

    return "📄";
  };

  // View report
  const handleViewReport = (report) => {
    if (report.status === "processing") {
      alert("This report is still being processed.");
      return;
    }

    alert(
      `Opening report: ${report.testName}\n\nReport ID: ${report.id}\nResult: ${report.result}`
    );
  };

  // Download report
  const handleDownload = (report) => {
    if (report.status === "processing") {
      alert("The report is not ready for download yet.");
      return;
    }

    alert(`Download started for ${report.testName}.`);
  };

  return (
    <div className="reports-page">

      {/* Header */}
      <div className="reports-header">

        <div>
          <button
            className="reports-back-button"
            onClick={() => navigate(-1)}
          >
            ← Back
          </button>

          <h1>My Reports</h1>

          <p>
            View your laboratory and imaging reports
            from your appointments.
          </p>
        </div>

      </div>


      {/* Summary Cards */}
      <div className="reports-summary">

        <div className="report-summary-card">
          <div className="report-summary-icon">
            📄
          </div>

          <div>
            <span>Total Reports</span>
            <strong>{reports.length}</strong>
          </div>
        </div>


        <div className="report-summary-card">
          <div className="report-summary-icon">
            ✓
          </div>

          <div>
            <span>Available</span>
            <strong>
              {
                reports.filter(
                  (report) => report.status === "available"
                ).length
              }
            </strong>
          </div>
        </div>


        <div className="report-summary-card">
          <div className="report-summary-icon">
            ⏳
          </div>

          <div>
            <span>Processing</span>
            <strong>
              {
                reports.filter(
                  (report) => report.status === "processing"
                ).length
              }
            </strong>
          </div>
        </div>

      </div>


      {/* Filters */}
      <div className="reports-filters">

        <button
          className={
            activeFilter === "all"
              ? "report-filter active"
              : "report-filter"
          }
          onClick={() => setActiveFilter("all")}
        >
          All Reports
        </button>


        <button
          className={
            activeFilter === "laboratory"
              ? "report-filter active"
              : "report-filter"
          }
          onClick={() => setActiveFilter("laboratory")}
        >
          🧪 Laboratory
        </button>


        <button
          className={
            activeFilter === "imaging"
              ? "report-filter active"
              : "report-filter"
          }
          onClick={() => setActiveFilter("imaging")}
        >
          🩻 Imaging
        </button>

      </div>


      {/* Reports List */}
      <div className="reports-container">

        {filteredReports.length === 0 ? (

          <div className="no-reports">

            <div className="no-reports-icon">
              📄
            </div>

            <h2>No Reports Found</h2>

            <p>
              There are no reports available for
              the selected category.
            </p>

          </div>

        ) : (

          filteredReports.map((report) => (

            <div
              className="report-card"
              key={report.id}
            >

              {/* Report Header */}
              <div className="report-card-header">

                <div className="report-title-section">

                  <div className="report-icon">
                    {getReportIcon(report.reportType)}
                  </div>

                  <div>

                    <span className="report-type">
                      {report.reportType}
                    </span>

                    <h2>
                      {report.testName}
                    </h2>

                    <p>
                      Report ID: {report.id}
                    </p>

                  </div>

                </div>


                <span
                  className={`report-status ${report.status}`}
                >
                  {report.status === "available"
                    ? "Available"
                    : "Processing"}
                </span>

              </div>


              {/* Report Details */}
              <div className="report-details">

                <div className="report-detail">

                  <span className="report-detail-icon">
                    🏥
                  </span>

                  <div>
                    <small>Hospital</small>

                    <strong>
                      {report.hospital}
                    </strong>
                  </div>

                </div>


                <div className="report-detail">

                  <span className="report-detail-icon">
                    🏢
                  </span>

                  <div>
                    <small>Department</small>

                    <strong>
                      {report.department}
                    </strong>
                  </div>

                </div>


                <div className="report-detail">

                  <span className="report-detail-icon">
                    👨‍⚕️
                  </span>

                  <div>
                    <small>Doctor</small>

                    <strong>
                      {report.doctor}
                    </strong>
                  </div>

                </div>


                <div className="report-detail">

                  <span className="report-detail-icon">
                    📅
                  </span>

                  <div>
                    <small>Date</small>

                    <strong>
                      {report.date}
                    </strong>
                  </div>

                </div>

              </div>


              {/* Result */}
              <div className="report-result">

                <span>Result Status</span>

                <strong
                  className={
                    report.status === "available"
                      ? "result-available"
                      : "result-processing"
                  }
                >
                  {report.result}
                </strong>

              </div>


              {/* Actions */}
              <div className="report-actions">

                <button
                  className="view-report-button"
                  onClick={() =>
                    handleViewReport(report)
                  }
                >
                  View Report
                </button>


                <button
                  className="download-report-button"
                  onClick={() =>
                    handleDownload(report)
                  }
                >
                  Download
                </button>

              </div>

            </div>

          ))

        )}

      </div>

    </div>
  );
};

export default Reports;