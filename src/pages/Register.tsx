import { useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

function Register() {
  const [showPassword, setShowPassword] = useState(false);
   const navigate = useNavigate();

  return (
    <>
    <div className="login-page">
      <div className="form-box">
        <h2>Register</h2>

        <p className="register-message">
          Create a new account
        </p>

        <label>Name</label>
        <input
          type="text"
          placeholder="Enter your name"
        />

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
        <label>Register No</label>
          <input
              type="text"
              placeholder="Enter register number"
          />
        <label>Department</label>
        <select>
          <option value="">Select Department</option>
          <option value="CSE">CSE</option>
          <option value="ME">ME</option>
          <option value="EEE">EEE</option>
          <option value="CE">CE</option>
        </select>

        <label>Year of Study</label>
        <select>
          <option value="">Select Year</option>
          <option value="First Year">First Year</option>
          <option value="Second Year">Second Year</option>
          <option value="Third Year">Third Year</option>
          <option value="Final Year">Final Year</option>
        </select>

        <label>Role</label>
        <select>
          <option value="">Select Role</option>
          <option value="Student">Student</option>
          <option value="Admin">Admin</option>
        </select>

        <button
          type="button"
          onClick={() => navigate("/login")}
        >
  Register
</button>

        <p className="login-link">
            Already have an account?{" "}
            <span onClick={() => navigate("/login")}>
                Login
            </span>
            </p>
      </div>
    </div>
    </>
  );
}

export default Register;