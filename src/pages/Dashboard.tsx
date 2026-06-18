import { useNavigate } from "react-router-dom";
import { FaBell, FaUserCircle } from "react-icons/fa";
import { useState } from "react";
import {
  FaClipboardList,
  FaClock,
  FaSpinner,
  FaCheckCircle,
  FaBars
} from "react-icons/fa";
import {
  FaTachometerAlt,
  FaPlusCircle,
  FaUser,
  FaSignOutAlt
} from "react-icons/fa";

function Dashboard() {
  const navigate = useNavigate();
  const [sidebarOpen, setSidebarOpen] = useState(true);
    return (
  <div className="dashboard-layout">

    <div className={`sidebar ${sidebarOpen ? "show" : "hide"}`}>
      <img src="/Photos/logo.png" alt="logo" className="logo1" />

      <ul>
        <li onClick={() => navigate("/dashboard")}>
          <FaTachometerAlt /> Dashboard
        </li>

        <li onClick={() => navigate("/add-complaint")}>
          <FaPlusCircle /> Add Complaint
        </li>

        <li onClick={() => navigate("/my-complaints")}>
          <FaClipboardList /> My Complaints
        </li>

        <li onClick={() => navigate("/profile")}>
          <FaUser /> Profile
        </li>

        <li onClick={() => navigate("/logout")}>
          <FaSignOutAlt /> Logout
        </li>
      </ul>

      <div className="support-box">
        <p className="support-text">Need Help?</p>
        <p className="support-text">Contact Support</p>

        <button
          className="support-btn"
          onClick={() => navigate("/contact")}
        >
          Contact Us
        </button>
      </div>
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
    onClick={() => navigate("/profile")}
  >
    <FaUserCircle className="top-icon" />
    <p className="profile-name">Student</p>
  </div>
</div>
      </div>

      <h1>Dashboard</h1>

      <div className="stats-container">

        <div className="stat-card total-card">
          <div className="card-icon">
            <FaClipboardList />
          </div>
          <h3 className="icon">5</h3>
          <p>Total Complaints</p>
        </div>

        <div className="stat-card pending-card">
          <div className="card-icon">
            <FaClock />
          </div>
          <h3 className="icon">2</h3>
          <p>Pending</p>
        </div>

        <div className="stat-card progress-card">
          <div className="card-icon">
            <FaSpinner />
          </div>
          <h3 className="icon">1</h3>
          <p>In Progress</p>
        </div>

        <div className="stat-card resolved-card">
          <div className="card-icon">
            <FaCheckCircle />
          </div>
          <h3 className="icon">2</h3>
          <p>Resolved</p>
        </div>

      </div>

      <div className="dashboard-row">

        <div className="table-box">
          <h2>Recent Complaints</h2>

          <table>
            <thead>
              <tr>
                <th>ID</th>
                <th>Title</th>
                <th>Category</th>
                <th>Status</th>
                <th>Date</th>
              </tr>
            </thead>

            <tbody>
              <tr>
                <td>#CC001</td>
                <td>WiFi not working</td>
                <td>Internet</td>
                <td>Pending</td>
                <td>12 May 2026</td>
              </tr>

              <tr>
                <td>#CC002</td>
                <td>Projector Issue</td>
                <td>Laboratory</td>
                <td>In Progress</td>
                <td>10 May 2026</td>
              </tr>

              <tr>
                <td>#CC003</td>
                <td>Water Leakage</td>
                <td>Hostel</td>
                <td>Resolved</td>
                <td>08 May 2026</td>
              </tr>
              <tr>
                <td>#CC004</td>
                <td>Bulb Not Working</td>
                <td>Classroom</td>
                <td>Pending</td>
                <td>06 May 2026</td>
              </tr>
              <tr>
                <td>#CC005</td>
                <td>AC Issue</td>
                <td>Library</td>
                <td>Resolved</td>
                <td>04 May 2026</td>
              </tr>
            </tbody>
          </table>
        </div>

      </div>

    </div>

  </div>
);
}

export default Dashboard;