import React, { useState } from "react";
import "./AddStudent.css";
import axios from "axios";

export default function AddStudent() {
    const [name, setName] = useState("");
    const [age, setAge] = useState("");
    const [gender, setGender] = useState("");

    function sendData(event) {
        event.preventDefault();

        const newStudent = {
            name,
            age,
            gender
        };

        axios
            .post("http://localhost:8070/student/add", newStudent)
            .then(() => {
                alert("Student Added");
            })
            .catch((err) => {
                console.error("Error from server:", err);
                alert("An error occurred while adding the student: " + err.response.data.message);
            });
    }

    return (
        <div className="container">
            <div className="row justify-content-center align-items-center" style={{ height: "80vh" }}>
                <div className="col-md-5">
                    <div className="form-container">
                        <form className="row g-3" onSubmit={sendData}>
                            <div className="col-12">
                                <label htmlFor="name" className="form-label">Student Name:</label>
                                <input
                                    type="text"
                                    className="form-control"
                                    id="name"
                                    placeholder="Enter Student Name"
                                    onChange={event => {
                                        setName(event.target.value);
                                    }}
                                />
                            </div>

                            <div className="col-12">
                                <label htmlFor="age" className="form-label">
                                    Student Age (Between 5 and 19):
                                </label>
                                <input
                                    type="text"
                                    className="form-control"
                                    id="age"
                                    placeholder="Enter Student Age"
                                    onChange={(event) => {
                                        setAge(event.target.value);
                                    }}
                                    pattern="^(1[0-9]|[5-9])$"
                                    title="Age must be between 5 and 19."
                                    required
                                />
                            </div>

                            <div className="col-12">
                                <label className="form-label">Select Student Gender:</label>
                                <div className="form-check">
                                    <input
                                        className="form-check-input"
                                        type="radio"
                                        name="gender"
                                        value="Male"
                                        checked={gender === "Male"}
                                        onChange={() => setGender("Male")}
                                    />
                                    <label className="form-check-label" htmlFor="male">
                                        Male
                                    </label>
                                </div>
                                <div className="form-check">
                                    <input
                                        className="form-check-input"
                                        type="radio"
                                        name="gender"
                                        value="Female"
                                        checked={gender === "Female"}
                                        onChange={() => setGender("Female")}
                                    />
                                    <label className="form-check-label" htmlFor="female">
                                        Female
                                    </label>
                                </div>
                                <div className="form-check">
                                    <input
                                        className="form-check-input"
                                        type="radio"
                                        name="gender"
                                        value="Other"
                                        checked={gender === "Other"}
                                        onChange={() => setGender("Other")}
                                    />
                                    <label className="form-check-label" htmlFor="other">
                                        Other
                                    </label>
                                </div>
                            </div>

                            <div className="col-12 d-flex justify-content-center">
                                <button type="submit" className="btn btn-primary">Submit</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
}
