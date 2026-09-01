import { apiFetch } from "../../apiClient";

const request = async (path, options = {}) => {
  const response = await apiFetch(path, options);
  return response.json();
};

const authService = {
  login: (mobile) => request("/auth/login", { method: "POST", body: JSON.stringify({ mobile }) }),
  register: (userData) => request("/auth/register", { method: "POST", body: JSON.stringify(userData) }),
  verifyOTP: (phone, otp) => request("/auth/verify-otp", { method: "POST", body: JSON.stringify({ phone, otp }) }),
  resendOTP: (phone) => request("/auth/resend-otp", { method: "POST", body: JSON.stringify({ phone }) }),
  logout: () => { localStorage.removeItem("patientUser"); localStorage.removeItem("patientToken"); localStorage.removeItem("pendingPatientPhone"); },
  saveUser: (user) => localStorage.setItem("patientUser", JSON.stringify(user)),
  getUser: () => { const user = localStorage.getItem("patientUser"); return user ? JSON.parse(user) : null; },
  isAuthenticated: () => !!localStorage.getItem("patientToken"),
};

export default authService;
