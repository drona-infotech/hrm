import "./Dashboard.css";

function Dashboard() {
  const menuItems = [
    "Dashboard",
    "Settings",
    "Human Resource",
    "Attendance",
    "Leave",
    "Payroll",
    "Organization",
    "Assets",
    "Vendors",
    "Client TDS",
    "Vendor TDS",
    "Domestic Clients",
    "Drona Invoice",
  ];

  return (
    <div className="dashboard-wrapper">
      <aside className="sidebar">
        <div className="logo-box">
          <img src="/logo.png" alt="Drona Infotech" />
        </div>

        <nav className="menu">
          {menuItems.map((item, index) => (
            <a
              href="#"
              key={item}
              className={`menu-item ${index === 0 ? "active" : ""}`}
            >
              <span className="menu-left">
                <span className="menu-icon">☷</span>
                {item}
              </span>
              <span className="arrow">›</span>
            </a>
          ))}
        </nav>
      </aside>

      <main className="dashboard-main">
        <div className="topbar">
          <div>
            <h1>Dashboard</h1>
            <p>Welcome back, manage your HRM system here.</p>
          </div>

          <div className="profile-box">
            <span>Admin</span>
            <div className="avatar">A</div>
          </div>
        </div>

        <div className="stats-grid">
          <div className="stat-card">
            <p>Total Employees</p>
            <h2>124</h2>
          </div>

          <div className="stat-card">
            <p>Present Today</p>
            <h2>98</h2>
          </div>

          <div className="stat-card">
            <p>On Leave</p>
            <h2>08</h2>
          </div>

          <div className="stat-card">
            <p>Pending Requests</p>
            <h2>12</h2>
          </div>
        </div>
      </main>
    </div>
  );
}

export default Dashboard;