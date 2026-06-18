import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { FaEye, FaEyeSlash } from "react-icons/fa";

function Login() {
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();
  const [role, setRole] = useState("");
  const handleLogin = () => {
  if (role === "Admin") {
    navigate("/admin-dashboard");
  } else {
    navigate("/dashboard");
  }
};

  return (
    <>
    <div className="login-page">
      <div className="form-box">
        <h2>Login</h2>

        <p className="login-message">
          Welcome back! Please login to continue.
        </p>

        <label>Email</label>
        <input
          type="email"
          placeholder="Enter your email"
        />

        <label>Password</label>

        <div className="password-container">
          <input
            type={showPassword ? "text" : "password"}
            placeholder="Enter your password"
          />

          <span
            className="eye-icon"
            onClick={() => setShowPassword(!showPassword)}
            >
            {showPassword ? <FaEyeSlash /> : <FaEye />}
          </span>
        </div>
        <label>Role</label>

      <select
        value={role}
        onChange={(e) => setRole(e.target.value)}
      >
        <option value="">Select Role</option>
        <option value="Student">Student</option>
        <option value="Admin">Admin</option>
      </select>

        <button onClick={handleLogin}>
          Login
        </button>

        <p className="forgot-password">
          Forgot Password?
        </p>
        <p className="register-link">
            Don't have an account?{" "}
            <span onClick={() => navigate("/register")}>
            Register
            </span>
        </p>
      </div>
    </div>
    </>
  );
}

export default Login;