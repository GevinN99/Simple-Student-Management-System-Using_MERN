import React, {useState, useEffect} from "react";
import "./AllStudent.css";
import axios from "axios";
import {Link} from "react-router-dom";

export default function AllStudents() {
    const [students, setStudents] = useState([]);

    useEffect(() => {
        const getStudents = async () => {
            try {
                const res = await axios.get("http://localhost:8070/student/");
                setStudents(res.data);
            } catch (err) {
                console.error("Error from server:", err);
                alert("An error occurred while retrieving the student list: " + err.response.data.message);
            }
        };
        getStudents();
    }, []);

    return (
        <div className="all-students-container">
            <div className="all-students">
                <h3>Student Details</h3>
            </div>
            <table className="table">
                <thead>
                <tr>
                    <th>First Name</th>
                    <th>Last Name</th>
                    <th>Reg. Number</th>
                    <th>Gender</th>
                    <th>Student Profile</th>
                </tr>
                </thead>
                <tbody>
                {students.map((student, index) => (
                    <tr key={student._id} className={index === students.length - 1 ? "last-row" : ""}>
                        <td>{student.firstName}</td>
                        <td>{student.lastName}</td>
                        <td>{student.regNumber}</td>
                        <td>{student.gender}</td>
                        <td>
                            <Link to={`/student-profile/${student._id}`}>
                                <button className="btn btn-primary">View</button>
                            </Link>
                        </td>
                    </tr>
                ))}

                </tbody>
            </table>
        </div>
    );
}
