
import { useState } from "react";

function MyComplaints() {
  const [search, setSearch] = useState("");
  const [filter, setFilter] = useState("All");

  const complaints = [
    {
      id: "#CC001",
      title: "WiFi not working in Block A",
      category: "Internet",
      status: "Pending",
      date: "12 May 2026",
    },
    {
      id: "#CC002",
      title: "Projector Issue",
      category: "Laboratory",
      status: "In Progress",
      date: "10 May 2026",
    },
    {
      id: "#CC003",
      title: "Water Leakage",
      category: "Hostel",
      status: "Resolved",
      date: "08 May 2026",
    },
    {
      id: "#CC004",
      title: "Classroom Fan Not Working",
      category: "Electrical",
      status: "Pending",
      date: "06 May 2026",
    },
    {
      id: "#CC005",
      title: "Library AC Issue",
      category: "Library",
      status: "Resolved",
      date: "04 May 2026",
    },
  ];

  const filteredComplaints = complaints.filter((complaint) => {
    const matchesSearch =
      complaint.title.toLowerCase().includes(search.toLowerCase()) ||
      complaint.id.toLowerCase().includes(search.toLowerCase());

    const matchesFilter =
      filter === "All" || complaint.status === filter;

    return matchesSearch && matchesFilter;
  });
  return (
    <>

      <div className="table-container">
        <h1 className="mycom">My Complaints</h1>

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
                <th>Title</th>
                <th>Category</th>
                <th>Status</th>
                <th>Date</th>
              </tr>
            </thead>

            <tbody>
  {filteredComplaints.map((complaint) => (
    <tr
      key={complaint.id}
      className={
        search &&
        complaint.title
          .toLowerCase()
          .includes(search.toLowerCase())
          ? "highlight-row"
          : ""
      }
    >
      <td>{complaint.id}</td>
      <td>{complaint.title}</td>
      <td>{complaint.category}</td>
      <td>
        <span
          className={
            complaint.status === "Pending"
              ? "pending"
              : complaint.status === "In Progress"
              ? "progress"
              : "resolved"
          }
        >
          {complaint.status}
        </span>
      </td>
      <td>{complaint.date}</td>
    </tr>
  ))}
</tbody>
          </table>
        </div>
      </div>
    </>
  );
}

export default MyComplaints;