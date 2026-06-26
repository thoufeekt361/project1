import StudentNavbar from "../components/StudentNavbar";

function Profile() {
  const name = localStorage.getItem("name");
  const registerNo = localStorage.getItem("registerNo");
  const email = localStorage.getItem("email");
  const branch = localStorage.getItem("branch");
  const semester = localStorage.getItem("semester");
  const role = localStorage.getItem("role");

  return (
    <div className="profile-page">
        <StudentNavbar />
      <div className="profile-card">

        <div className="profile-avatar">
          👨‍🎓
        </div>

        <h2>Student Profile</h2>

        <div className="profile-details">

          <div className="detail-row">
            <span>Name</span>
            <span>{name}</span>
          </div>

          <div className="detail-row">
            <span>Register No</span>
            <span>{registerNo}</span>
          </div>

          <div className="detail-row">
            <span>Email</span>
            <span>{email}</span>
          </div>

          <div className="detail-row">
            <span>Branch</span>
            <span>{branch}</span>
          </div>

          <div className="detail-row">
            <span>Semester</span>
            <span>{semester}</span>
          </div>

          <div className="detail-row">
            <span>Role</span>
            <span>{role}</span>
          </div>

        </div>

      </div>

    </div>
  );
}

export default Profile;