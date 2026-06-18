import "./Login.css";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

function Login() {
  const navigate = useNavigate();

  const [employeeId, setEmployeeId] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      console.log("Sending Login Request...");

      const response = await axios.post(
        "http://127.0.0.1:8000/auth/login",
        {
          employee_id: employeeId,
          password: password,
        }
      );

      console.log("Login Success:", response.data);

      localStorage.setItem(
        "token",
        response.data.access_token
      );

      localStorage.setItem(
        "role",
        response.data.role
      );

      navigate("/dashboard");

    } catch (error) {
      console.error("Login Error:", error);

      alert(
        error.response?.data?.detail ||
        "Invalid Credentials"
      );
    }
  };

  return (
    <div className="login-page">
      <div className="login-card">
        <div className="login-left">

          <div className="brand-logo">
            <img
              src="https://mediahubindia.com/wp-content/uploads/2026/06/drona-icon.png"
              alt="Drona Infotech"
            />
          </div>

          <h1>Welcome Back</h1>

          <p>
            Login to manage employees, attendance,
            leave and payroll.
          </p>

          <form onSubmit={handleLogin}>
            <div className="form-group">
              <input
                type="text"
                placeholder="Enter email or employee ID"
                value={employeeId}
                onChange={(e) =>
                  setEmployeeId(e.target.value)
                }
              />
            </div>

            <div className="form-group">
              <input
                type="password"
                placeholder="Enter password"
                value={password}
                onChange={(e) =>
                  setPassword(e.target.value)
                }
              />
            </div>

            <div className="form-row">
              <label className="remember">
                <input type="checkbox" />
                Remember me
              </label>

              <a href="#">Forgot Password?</a>
            </div>

            <button type="submit">
              Login
            </button>
          </form>

        </div>

        <div className="login-right">
          <h2>Smart HR Management System</h2>

          <p>
            Manage employee records, attendance,
            leave requests, payroll and reports
            from one powerful dashboard.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Login;