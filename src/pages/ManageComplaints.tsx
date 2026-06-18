import { useState } from "react";
function ManageComplaints() {
const [search, setSearch] = useState("");
const [filter, setFilter] = useState("All");
const [complaints, setComplaints] = useState([
  {
    id: "#CC001",
    student: "Rahul",
    complaint: "WiFi Issue",
    category: "Internet",
    status: "Pending",
  },
  {
    id: "#CC002",
    student: "Arun",
    complaint: "Projector Issue",
    category: "Lab",
    status: "In Progress",
  },
  {
    id: "#CC003",
    student: "Akhil",
    complaint: "Water Leakage",
    category: "Hostel",
    status: "Resolved",
  },
  {
    id: "#CC004",
    student: "Kiran",
    complaint: "Bulb not working",
    category: "Classroom",
    status: "Pending",
  },
  {
    id: "#CC005",
    student: "Manoj",
    complaint: "AC issue",
    category: "Library",
    status: "Pending",
  },
]);

const updateStatus = (index: number, value: string) => {
  const updated = [...complaints];
  updated[index].status = value;
  setComplaints(updated);
};
const filteredComplaints = complaints.filter((item) => {
  const matchesSearch =
    item.id.toLowerCase().includes(search.toLowerCase()) ||
    item.student.toLowerCase().includes(search.toLowerCase()) ||
    item.complaint.toLowerCase().includes(search.toLowerCase());

  const matchesFilter =
    filter === "All" || item.status === filter;

  return matchesSearch && matchesFilter;
});
return ( 

<div className="table-container"> <h1 className="mycom">Manage Complaints</h1>
<div className="complaint-actions">
  <input
    type="text"
    placeholder="Search complaints..."
    className="search-box"
    value={search}
    onChange={(e) => setSearch(e.target.value)}
  />

  <select
    className="filter-select"
    value={filter}
    onChange={(e) => setFilter(e.target.value)}
  >
    <option value="All">All Status</option>
    <option value="Pending">Pending</option>
    <option value="In Progress">In Progress</option>
    <option value="Resolved">Resolved</option>
  </select>
</div>

  <div className="table-box">
    <table>
      <thead>
        <tr>
          <th>ID</th>
          <th>Student</th>
          <th>Complaint</th>
          <th>Category</th>
          <th>Update Status</th>
          <th>Action</th>
        </tr>
      </thead>

      <tbody>
  {filteredComplaints.map((item, index) => (
    <tr key={item.id}>
      <td>{item.id}</td>
      <td>{item.student}</td>
      <td>{item.complaint}</td>
      <td>{item.category}</td>

      <td>
        <select
          className={
            item.status === "Pending"
              ? "pending"
              : item.status === "In Progress"
              ? "progress"
              : "resolved"
          }
          value={item.status}
          onChange={(e) =>
            updateStatus(index, e.target.value)
          }
        >
          <option>Pending</option>
          <option>In Progress</option>
          <option>Resolved</option>
        </select>
      </td>

      <td>
        <button className="update-btn">
          {item.status === "Resolved" ? "View" : "Update Status"}
        </button>
      </td>
    </tr>
  ))}
</tbody>
    </table>
  </div>
</div>
);
}

export default ManageComplaints;
