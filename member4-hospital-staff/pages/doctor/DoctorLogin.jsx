import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  doctorLogin,
} from "../../services/doctorService";

const DoctorLogin = () => {
  const navigate = useNavigate();
  const [doctorId, setDoctorId] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    setError("");

    if (!doctorId || !password) {
      setError("Please enter Doctor ID and password.");
      return;
    }

    try {
      setLoading(true);

      const data = await doctorLogin(
        doctorId,
        password
      );

      if (data.token) {
        localStorage.setItem("token", data.token);
      }

      if (data.user) {
        localStorage.setItem(
          "user",
          JSON.stringify(data.user)
        );
      }

      alert("Doctor login successful!");
      navigate("/doctor");

      console.log("Doctor Login Response:", data);
    } catch (error) {
      setError(
        error.message || "Doctor login failed."
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="login-container">
      <div className="login-card">
        <h2>MEDQ CARE</h2>
        <h3>Doctor Login</h3>

        <form onSubmit={handleSubmit}>
          <div>
            <label>Doctor ID</label>

            <input
              type="text"
              value={doctorId}
              onChange={(e) =>
                setDoctorId(e.target.value)
              }
              placeholder="Enter Doctor ID"
            />
          </div>

          <div>
            <label>Password</label>

            <input
              type="password"
              value={password}
              onChange={(e) =>
                setPassword(e.target.value)
              }
              placeholder="Enter password"
            />
          </div>

          {error && (
            <p style={{ color: "red" }}>
              {error}
            </p>
          )}

          <button type="submit" disabled={loading}>
            {loading
              ? "Logging in..."
              : "Login"}
          </button>
        </form>
      </div>
    </div>
  );
};

export default DoctorLogin;