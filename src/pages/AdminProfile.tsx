import AdminNavbar from "../components/AdminNavbar";
function AdminProfile() {
const name = localStorage.getItem("name");
const email = localStorage.getItem("email");
const role = localStorage.getItem("role");

return ( 
  <div className="profile-page"> 
      <AdminNavbar />
    <div className="profile-card">
    <div className="profile-avatar">
      👨‍💼
    </div>

    <h2>Admin Profile</h2>

    <div className="profile-details">

      <div className="detail-row">
        <span>Name</span>
        <span>{name}</span>
      </div>

      <div className="detail-row">
        <span>Email</span>
        <span>{email}</span>
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

export default AdminProfile;