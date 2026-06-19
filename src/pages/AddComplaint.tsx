import { useState } from "react";

function AddComplaint() {
  const [showPopup, setShowPopup] = useState(false);
  return (
    <>
    <div className="login-page">
      <div className="form-box">
        <h2>Add Complaint</h2>

        <p className="complaint-message">
          Fill in the details to submit a new complaint.
        </p>

        <label>Title</label>
        <input
          type="text"
          placeholder="Enter complaint title"
        />

        <label>Category</label>
        <select>
          <option value="">Select Category</option>
          <option>Classroom</option>
          <option>Laboratory</option>
          <option>Hostel</option>
          <option>Library</option>
          <option>Internet/Wi-Fi</option>
          <option>Electrical</option>
          <option>Water Supply</option>
          <option>Cleanliness</option>
          <option>Other</option>
        </select>

        <label>Description</label>
        <textarea
          rows={4}
          placeholder="Enter complaint description"
        ></textarea>

        <label>Location</label>
        <input
          type="text"
          placeholder="Enter location"
        />

        <label htmlFor="image">Upload Image</label>

        <div className="file-upload-container">
          <input
            id="image"
            type="file"
            accept="image/*"
            onChange={(e) =>
              console.log(e.target.files?.[0])
            }
          />
        </div>

        <button onClick={() => setShowPopup(true)}>
          Submit Complaint
        </button>
        {showPopup && (
  <div className="popup-overlay">
    <div className="popup-box">
      <h3>Success</h3>
      <p>Complaint Submitted Successfully!</p>
      <button onClick={() => setShowPopup(false)}>
        OK
      </button>
    </div>
  </div>
)}
      </div>
    </div>
    </>
  );
}

export default AddComplaint;