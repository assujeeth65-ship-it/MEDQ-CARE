import React from "react";
import { Link, Route, Routes, useNavigate } from "react-router-dom";

import PatientLogin from "./member1-patient/pages/Login";
import PatientRegister from "./member1-patient/pages/Register";
import PatientOTP from "./member1-patient/pages/OTPVerification";
import PatientDashboard from "./member1-patient/pages/PatientDashboard";
import PatientProfile from "./member1-patient/pages/PatientProfile";
import PatientAppointments from "./member1-patient/pages/MyAppointments";
import PatientBookAppointment from "./member1-patient/pages/BookAppointment";
import PatientHospitalSelection from "./member1-patient/pages/HospitalSelection";
import PatientLiveQueue from "./member1-patient/pages/LiveQueue";
import PatientNotifications from "./member1-patient/pages/Notifications";
import PatientReports from "./member1-patient/pages/Reports";

import HospitalList from "./member2-hospital/pages/HospitalList";
import HospitalDetails from "./member2-hospital/pages/HospitalDetails";
import DepartmentList from "./member2-hospital/pages/DepartmentList";
import DoctorList from "./member2-hospital/pages/DoctorList";
import HospitalBookAppointment from "./member2-hospital/pages/BookAppointment";
import HospitalMyAppointments from "./member2-hospital/pages/MyAppointments";
import LabBooking from "./member2-hospital/pages/LabBooking";
import ImagingBooking from "./member2-hospital/pages/ImagingBooking";
import HospitalReports from "./member2-hospital/pages/Reports";

import QueueLive from "./member3-queue/pages/LiveQueue";
import QueueControl from "./member3-queue/pages/QueueControl";
import QueueDisplay from "./member3-queue/pages/QueueDisplay";
import WalkInQueue from "./member3-queue/pages/WalkIn";

import AdminLogin from "./member4-hospital-staff/pages/admin/AdminLogin";
import AdminDashboard from "./member4-hospital-staff/pages/admin/AdminDashboard";
import DepartmentManagement from "./member4-hospital-staff/pages/admin/DepartmentManagement";
import HospitalManagement from "./member4-hospital-staff/pages/admin/HospitalManagement";
import ScheduleManagement from "./member4-hospital-staff/pages/admin/ScheduleManagement";
import StaffManagement from "./member4-hospital-staff/pages/admin/StaffManagement";

import DoctorLogin from "./member4-hospital-staff/pages/doctor/DoctorLogin";
import DoctorDashboard from "./member4-hospital-staff/pages/doctor/DoctorDashboard";
import DoctorQueue from "./member4-hospital-staff/pages/doctor/DoctorQueue";
import TodayPatients from "./member4-hospital-staff/pages/doctor/TodayPatients";
import Consultation from "./member4-hospital-staff/pages/doctor/Consultation";
import Recommendations from "./member4-hospital-staff/pages/doctor/Recommendations";

import ReceptionLogin from "./member4-hospital-staff/pages/reception/ReceptionLogin";
import ReceptionDashboard from "./member4-hospital-staff/pages/reception/ReceptionDashboard";
import ReceptionAppointments from "./member4-hospital-staff/pages/reception/AppointmentManagement";
import ReceptionPatients from "./member4-hospital-staff/pages/reception/PatientManagement";
import ReceptionWalkIn from "./member4-hospital-staff/pages/reception/WalkIn";

const roles = [
  { path: "/patient/login", icon: "👤", title: "Patient", text: "Patient Portal" },
  { path: "/doctor/login", icon: "🩺", title: "Doctor", text: "Doctor Portal" },
  { path: "/reception/login", icon: "📋", title: "Reception", text: "Reception Portal" },
  { path: "/admin/login", icon: "⚙️", title: "Admin", text: "Admin Portal" },
];



function PatientLoginRoute() {
  const navigate = useNavigate();
  return <PatientLogin onLogin={() => navigate("/patient/otp")} />;
}

function PatientRegisterRoute() {
  const navigate = useNavigate();
  return <PatientRegister onRegister={() => navigate("/patient/otp")} />;
}

function PatientOTPRoute() {
  const navigate = useNavigate();
  return <PatientOTP onVerified={() => navigate("/patient/dashboard")} onBack={() => navigate("/patient/login")} />;
}

function Home() {
  return (
    <>
      <header className="navbar">
        <Link className="logo" to="/">
          <span>+</span> MEDQ-CARE
        </Link>
        <nav>
          <a href="#home">Home</a>
          <a href="#services">Services</a>
          <a href="#access">Access</a>
        </nav>
        <Link className="nav-button" to="/patient/login">Login</Link>
      </header>

      <main>
        <section className="hero" id="home">
          <div className="hero-content">
            <p className="tagline">SMART HEALTHCARE MANAGEMENT</p>
            <h1>Better Healthcare.<br /><span>Better Experience.</span></h1>
            <p className="hero-text">
              MEDQ-CARE connects patients, doctors, receptionists and
              administrators through one smart healthcare platform.
            </p>
            <div className="hero-buttons">
              <a href="#access" className="primary-button">Get Started</a>
              <a href="#services" className="secondary-button">Explore Services</a>
            </div>
          </div>
          <div className="hero-card">
            <div className="card-icon">✚</div>
            <h2>Healthcare Made Simple</h2>
            <p>Appointments, patients, doctors and queues in one place.</p>
            <div className="status"><span /> System Online</div>
          </div>
        </section>

        <section className="services" id="services">
          <div className="section-title">
            <p>OUR SERVICES</p><h2>Everything You Need</h2>
          </div>
          <div className="service-container">
            {roles.map((r) => (
              <Link className="service-card role-link" to={r.path} key={r.path}>
                <div className="service-icon">{r.icon}</div>
                <h3>{r.title}</h3>
                <p>{r.text}</p>
              </Link>
            ))}
          </div>
        </section>

        <section className="login-section" id="access">
          <div className="section-title">
            <p>ACCESS PORTAL</p><h2>Choose Your Role</h2>
          </div>
          <div className="role-container">
            {roles.map((r) => (
              <Link className="role-card" to={r.path} key={r.path}>
                <span>{r.icon}</span><strong>{r.title}</strong><small>{r.text}</small>
              </Link>
            ))}
          </div>
        </section>
      </main>

      <footer>
        <div className="logo"><span>+</span> MEDQ-CARE</div>
        <p>Smart Healthcare Management System</p>
        <p className="copyright">© 2026 MEDQ-CARE. All rights reserved.</p>
      </footer>
    </>
  );
}

function NotFound() {
  return (
    <div className="simple-page">
      <h1>404</h1>
      <p>Page not found.</p>
      <Link to="/" className="primary-button">Back to MEDQ-CARE</Link>
    </div>
  );
}

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />

      <Route path="/patient/login" element={<PatientLoginRoute />} />
      <Route path="/patient/register" element={<PatientRegisterRoute />} />
      <Route path="/patient/otp" element={<PatientOTPRoute />} />
      <Route path="/patient/dashboard" element={<PatientDashboard />} />
      <Route path="/patient/profile" element={<PatientProfile />} />
      <Route path="/patient/appointments" element={<PatientAppointments />} />
      <Route path="/patient/book-appointment" element={<PatientBookAppointment />} />
      <Route path="/patient/hospitals" element={<PatientHospitalSelection />} />
      <Route path="/patient/queue" element={<PatientLiveQueue />} />
      <Route path="/patient/notifications" element={<PatientNotifications />} />
      <Route path="/patient/reports" element={<PatientReports />} />

      <Route path="/hospitals" element={<HospitalList />} />
      <Route path="/hospitals/:id" element={<HospitalDetails />} />
      <Route path="/departments" element={<DepartmentList />} />
      <Route path="/doctors" element={<DoctorList />} />
      <Route path="/appointments/book" element={<HospitalBookAppointment />} />
      <Route path="/appointments" element={<HospitalMyAppointments />} />
      <Route path="/diagnostics/lab" element={<LabBooking />} />
      <Route path="/diagnostics/imaging" element={<ImagingBooking />} />
      <Route path="/hospital/reports" element={<HospitalReports />} />

      <Route path="/queue/live" element={<QueueLive />} />
      <Route path="/queue/control" element={<QueueControl />} />
      <Route path="/queue/display" element={<QueueDisplay />} />
      <Route path="/queue/walk-in" element={<WalkInQueue />} />

      <Route path="/admin/login" element={<AdminLogin />} />
      <Route path="/admin" element={<AdminDashboard />} />
      <Route path="/admin/departments" element={<DepartmentManagement />} />
      <Route path="/admin/hospitals" element={<HospitalManagement />} />
      <Route path="/admin/schedules" element={<ScheduleManagement />} />
      <Route path="/admin/staff" element={<StaffManagement />} />

      <Route path="/doctor/login" element={<DoctorLogin />} />
      <Route path="/doctor" element={<DoctorDashboard />} />
      <Route path="/doctor/queue" element={<DoctorQueue />} />
      <Route path="/doctor/patients" element={<TodayPatients />} />
      <Route path="/doctor/consultation" element={<Consultation />} />
      <Route path="/doctor/recommendations" element={<Recommendations />} />

      <Route path="/reception/login" element={<ReceptionLogin />} />
      <Route path="/reception" element={<ReceptionDashboard />} />
      <Route path="/reception/appointments" element={<ReceptionAppointments />} />
      <Route path="/reception/patients" element={<ReceptionPatients />} />
      <Route path="/reception/walk-in" element={<ReceptionWalkIn />} />

      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}
