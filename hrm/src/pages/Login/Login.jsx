import "./Login.css";

function Login() {
  return (
    <div className="login-page">
      <div className="login-card">
        <div className="login-left">
          
          <div className="brand-logo">
            <img src="https://www.dronainfotech.com/path-to-logo.png" alt="Drona Infotech" />
          </div>

          <h1>Welcome Back</h1>
          <p>Login to manage employees, attendance, leave and payroll.</p>

          <form>
            <div className="form-group">
              <label>Email / Employee ID</label>
              <input type="text" placeholder="Enter email or employee ID" />
            </div>

            <div className="form-group">
              <label>Password</label>
              <input type="password" placeholder="Enter password" />
            </div>

            <div className="form-row">
              <label className="remember">
                <input type="checkbox" />
                Remember me
              </label>

              <a href="#">Forgot Password?</a>
            </div>

            <button type="submit">Login</button>
          </form>
        </div>

        <div className="login-right">
          <h2>Smart HR Management System</h2>
          <p>
            Manage employee records, attendance, leave requests, payroll and
            reports from one powerful dashboard.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Login;