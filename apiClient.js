const API_URL = import.meta.env.VITE_API_URL || "http://localhost:5000/api";

export const apiFetch = async (path, options = {}) => {
  const headers = { ...(options.body instanceof FormData ? {} : { "Content-Type": "application/json" }), ...(options.headers || {}) };
  const token = localStorage.getItem("patientToken") || localStorage.getItem("token");
  if (token) headers.Authorization = `Bearer ${token}`;

  const target = /^https?:\/\//i.test(path) ? path : `${API_URL}${path}`;
  let response;
  try {
    response = await fetch(target, { ...options, headers });
  } catch {
    throw new Error(`Cannot connect to MEDQ-CARE backend at ${API_URL}. Start the backend with npm start.`);
  }

  if (!response.ok) {
    const data = await response.clone().json().catch(() => ({}));
    if (response.status === 401) {
      localStorage.removeItem("token");
      localStorage.removeItem("patientToken");
    }
    throw new Error(data.message || `Request failed (${response.status})`);
  }
  return response;
};

export { API_URL };
