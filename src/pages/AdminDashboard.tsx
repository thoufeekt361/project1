import { useNavigate } from "react-router-dom";
import {
  Chart as ChartJS,
  ArcElement,
  Tooltip,
  Legend,
} from "chart.js";

import { Doughnut } from "react-chartjs-2";

ChartJS.register(ArcElement, Tooltip, Legend);
import { FaBell, FaSpinner, FaUserCircle } from "react-icons/fa";
import {
FaClipboardList,
FaClock,
FaCheckCircle,
FaUsers,
FaBars,
FaUser,
FaSignOutAlt,
FaChartBar
} from "react-icons/fa";
import { useState } from "react";

function AdminDashboard() {
const navigate = useNavigate();
const [sidebarOpen, setSidebarOpen] = useState(true);
const chartData = {
  labels: ["Internet", "Laboratory", "Hostel", "Library"],
  datasets: [
    {
      data: [2, 1, 1, 1],
      backgroundColor: [
        "#3b82f6",
        "#10b981",
        "#f59e0b",
        "#ef4444",
      ],
      borderWidth: 0,
    },
  ],
};

return ( 
<div className="dashboard-layout">

  <div className={`sidebar ${sidebarOpen ? "show" : "hide"}`}>
    <img src="/Photos/logo.png" alt="logo" className="logo1" />

    <ul>
      <li onClick={() => navigate("/admin-dashboard")}>
        <FaChartBar /> Dashboard
      </li>

      <li onClick={() => navigate("/manage-complaints")}>
        <FaClipboardList /> Manage Complaints
      </li>

      <li onClick={() => navigate("/manage-students")}>
        <FaUsers /> Manage Students
      </li>

      <li onClick={() => navigate("/admin-profile")}>
        <FaUser /> Profile
      </li>

      <li onClick={() => navigate("/logout")}>
        <FaSignOutAlt /> Logout
      </li>
    </ul>
  </div>

  <div className="main-content">

    <div className="top-bar">
      <FaBars
        className="menu-icon"
        onClick={() => setSidebarOpen(!sidebarOpen)}
      />
      <div className="top-icons">
  <FaBell
    className="top-icon"
    onClick={() => navigate("/notifications")}
  />

  <div
    className="profile-section"
    onClick={() => navigate("/admin-profile")}
  >
    <FaUserCircle className="top-icon" />
    <p className="profile-name">Admin</p>
  </div>
</div>
    </div>

    <h1>Admin Dashboard</h1>

    <div className="stats-container">

      <div className="stat-card total-card">
        <div className="card-icon">
          <FaClipboardList />
        </div>
        <h3>5</h3>
        <p>Total Complaints</p>
      </div>

      <div className="stat-card pending-card">
        <div className="card-icon">
          <FaClock />
        </div>
        <h3>2</h3>
        <p>Pending</p>
      </div>

      <div className="stat-card progress-card">
        <div className="card-icon">
          <FaSpinner />
        </div>
        <h3>1</h3>
        <p>In Progress</p>
      </div>

      <div className="stat-card resolved-card">
        <div className="card-icon">
          <FaCheckCircle />
        </div>
        <h3>2</h3>
        <p>Resolved</p>
      </div>

    </div>
    <div className="dashboard-row">
  <div className="bottom-section">
  <div className="chart-container">
    <h2>Complaints by Category</h2>

    <div className="doughnut-wrapper">
      <Doughnut
        data={chartData}
        options={{
          responsive: true,
          animation: false,
          cutout: "70%",
          plugins: {
            legend: {
            display: false,
            },
            tooltip: {
              enabled: false,
            },
          },
        }}
      />

      <div className="center-text">
        <h3>5</h3>
        <p>Total Complaints</p>
      </div>
    </div>

    <div className="chart-legend">
      <p><span className="internet-dot"></span> Internet - 2 (40%)</p>
      <p><span className="lab-dot"></span> Laboratory - 1 (20%)</p>
      <p><span className="hostel-dot"></span> Hostel - 1 (20%)</p>
      <p><span className="library-dot"></span> Library - 1 (20%)</p>
    </div>
  </div>
  </div>
    <div className="table-box">
      <h2>Recent Complaints</h2>

      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Student</th>
            <th>Complaint</th>
            <th>Status</th>
          </tr>
        </thead>

        <tbody>
          <tr>
            <td>#CC001</td>
            <td>Rahul</td>
            <td>WiFi Issue</td>
            <td>Pending</td>
          </tr>

          <tr>
            <td>#CC002</td>
            <td>Arun</td>
            <td>Projector Issue</td>
            <td>Resolved</td>
          </tr>

          <tr>
            <td>#CC003</td>
            <td>Akhil</td>
            <td>Water Leakage</td>
            <td>In Progress</td>
          </tr>
          <tr>
            <td>#CC004</td>
            <td>Kiran</td>
            <td>Bulb Not Working</td>
            <td>Pending</td>
          </tr>
          <tr>
            <td>#CC005</td>
            <td>Manoj</td>
            <td>AC Issue</td>
            <td>Pending</td>
          </tr>
        </tbody>
      </table>

    </div>

  </div>
</div>
</div>
);
}

export default AdminDashboard;
