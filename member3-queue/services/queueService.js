import { apiFetch } from "../../apiClient";
const API_URL = `${import.meta.env.VITE_API_URL || "http://localhost:5000/api"}/queue`;

// Check-in patient
export const checkInPatient = async (patientData) => {
  const response = await apiFetch(`${API_URL}/check-in`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(patientData),
  });

  const data = await response.json();

  if (!response.ok) {
    throw new Error(data.message || "Failed to check-in patient");
  }

  return data;
};

// Get complete queue
export const getQueue = async (queueId) => {
  const response = await apiFetch(`${API_URL}/${queueId}`);

  const data = await response.json();

  if (!response.ok) {
    throw new Error(data.message || "Failed to get queue");
  }

  return data;
};

// Get live queue status
export const getQueueStatus = async (queueId) => {
  const response = await apiFetch(`${API_URL}/${queueId}/status`);

  const data = await response.json();

  if (!response.ok) {
    throw new Error(data.message || "Failed to get queue status");
  }

  return data;
};

// Call next patient
export const callNextPatient = async (queueId) => {
  const response = await apiFetch(`${API_URL}/${queueId}/call-next`, {
    method: "POST",
  });

  const data = await response.json();

  if (!response.ok) {
    throw new Error(data.message || "Failed to call next patient");
  }

  return data;
};

// Skip patient
export const skipPatient = async (queueId, token) => {
  const response = await apiFetch(`${API_URL}/${queueId}/skip`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ token }),
  });

  const data = await response.json();

  if (!response.ok) {
    throw new Error(data.message || "Failed to skip patient");
  }

  return data;
};

// Hold patient
export const holdPatient = async (queueId, token) => {
  const response = await apiFetch(`${API_URL}/${queueId}/hold`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ token }),
  });

  const data = await response.json();

  if (!response.ok) {
    throw new Error(data.message || "Failed to hold patient");
  }

  return data;
};

// Resume patient
export const resumePatient = async (queueId, token) => {
  const response = await apiFetch(`${API_URL}/${queueId}/resume`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ token }),
  });

  const data = await response.json();

  if (!response.ok) {
    throw new Error(data.message || "Failed to resume patient");
  }

  return data;
};

// Complete patient
export const completePatient = async (queueId, token) => {
  const response = await apiFetch(`${API_URL}/${queueId}/complete`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ token }),
  });

  const data = await response.json();

  if (!response.ok) {
    throw new Error(data.message || "Failed to complete patient");
  }

  return data;
};

// Get patients ahead
export const getPatientsAhead = async (queueId, token) => {
  const response = await apiFetch(
    `${API_URL}/${queueId}/patients-ahead/${token}`
  );

  const data = await response.json();

  if (!response.ok) {
    throw new Error(data.message || "Failed to get patients ahead");
  }

  return data;
};

// Get estimated waiting time
export const getWaitingTime = async (queueId, token) => {
  const response = await apiFetch(
    `${API_URL}/${queueId}/waiting-time/${token}`
  );

  const data = await response.json();

  if (!response.ok) {
    throw new Error(data.message || "Failed to get waiting time");
  }

  return data;
};