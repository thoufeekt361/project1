
import { useNavigate } from "react-router-dom";

function Logout() {
  const navigate = useNavigate();

  return (
    <>

      <div className="logout-page">

        <div className="logout-card">

          <div className="logout-icon">
            🚪
          </div>

          <h2>Logout</h2>

          <p>
            Are you sure you want to logout from
            Campus Complaint Management System?
          </p>

          <div className="logout-buttons">

            <button
              className="cancel-btn"
              onClick={() => navigate("/dashboard")}
            >
              Cancel
            </button>

            <button
              className="logout-btn"
              onClick={() => navigate("/login")}
            >
              Logout
            </button>

          </div>

        </div>

      </div>
    </>
  );
}

export default Logout;