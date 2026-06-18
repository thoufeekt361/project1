import { useState } from "react";
function ManageStudents() {
  const [search, setSearch] = useState("");

const students = [
  { regNo: "2025CS001", name: "Rahul", department: "CSE", year: "Third Year", email: "rahul@gmail.com" },
  { regNo: "2025ME002", name: "Arun", department: "ME", year: "Second Year", email: "arun@gmail.com" },
  { regNo: "2025EEE003", name: "Akhil", department: "EEE", year: "Final Year", email: "akhil@gmail.com" },
  { regNo: "2025ME004", name: "Kiran", department: "ME", year: "Third Year", email: "kiran@gmail.com" },
  { regNo: "2025EEE006", name: "Alan", department: "EEE", year: "Final Year", email: "alan@gmail.com" }
];

const filteredStudents = students.filter(
  (student) =>
    student.name.toLowerCase().includes(search.toLowerCase()) ||
    student.regNo.toLowerCase().includes(search.toLowerCase())
);
return (
  
   <div className="table-container"> 
   <h1 className="mycom">Manage Students</h1>

    <input
  type="text"
  placeholder="Search student..."
  className="search-box"
  value={search}
  onChange={(e) => setSearch(e.target.value)}
/>
  <div className="table-box">
    <table>
      <thead>
        <tr>
          <th>Register No</th>
          <th>Name</th>
          <th>Department</th>
          <th>Year</th>
          <th>Email</th>
        </tr>
      </thead>

      <tbody>
  {filteredStudents.map((student) => (
    <tr key={student.regNo}>
      <td>{student.regNo}</td>
      <td>{student.name}</td>
      <td>{student.department}</td>
      <td>{student.year}</td>
      <td>{student.email}</td>
    </tr>
  ))}
      </tbody>
    </table>
  </div>
</div>
);
}

export default ManageStudents;
