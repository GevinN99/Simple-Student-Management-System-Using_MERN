import React, {useState} from "react";
import "./AddStudent.css";
import axios from "axios";

export default function AddStudent() {
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [regNumber, setRegNumber] = useState("");
    const [age, setAge] = useState("");
    const [gender, setGender] = useState("");
    const [address, setAddress] = useState("");
    const [contactNumber, setContactNumber] = useState("");

    function sendData(event) {
        event.preventDefault();

        const newStudent = {
            firstName,
            lastName,
            regNumber,
            age,
            gender,
            address,
            contactNumber
        };

        axios
            .post("http://localhost:8070/student/add", newStudent)
            .then(() => {
                alert("Student Added");
                // Clear the form after successful submission
                setFirstName("");
                setLastName("");
                setRegNumber("");
                setAge("");
                setGender("");
                setAddress("");
                setContactNumber("");
            })
            .catch((err) => {
                console.error("Error from server:", err);
                alert(
                    "An error occurred while adding the student: " +
                    err.response.data.message
                );
            });
    }

    return (
        <div className="container">
            <div className="row justify-content-center align-items-center" style={{height: "80vh"}}>
                <div className="col-md-8">
                    <div className="form-container">
                        <h3 className="form-container-heading">Add Student</h3>
                        <form className="row g-3" onSubmit={sendData}>

                            <div className="col-12">
                                <label htmlFor="first-name" className="form-label">First Name:</label>
                                <input
                                    type="text"
                                    className="form-control"
                                    id="firstName"
                                    placeholder="Enter Student Name"
                                    onChange={event => {
                                        setFirstName(event.target.value);
                                    }}
                                />
                            </div>

                            <div className="col-12">
                                <label htmlFor="last-name" className="form-label">Last Name:</label>
                                <input
                                    type="text"
                                    className="form-control"
                                    id="lastName"
                                    placeholder="Enter Student Name"
                                    onChange={event => {
                                        setLastName(event.target.value);
                                    }}
                                />
                            </div>

                            <div className="col-12">
                                <label htmlFor="age" className="form-label">
                                    Student Registration Number :
                                </label>
                                <input
                                    type="text"
                                    className="form-control"
                                    id="regNumber"
                                    placeholder="Enter Student Registration Number"
                                    onChange={(event) => {
                                        setRegNumber(event.target.value);
                                    }}
                                    required
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
                                <label htmlFor="gender" className="form-label">
                                    Select Student Gender:
                                </label>

                                <div className="col-md-4">
                                    <select
                                        className="form-select"
                                        id="gender"
                                        value={gender}
                                        onChange={(event) => setGender(event.target.value)}
                                        required
                                    >
                                        <option value="">Select Gender</option>
                                        <option value="Male">Male</option>
                                        <option value="Female">Female</option>
                                        <option value="Other">Other</option>
                                    </select>
                                </div>
                            </div>

                            <div className="col-12">
                                <label htmlFor="address" className="form-label">Address :</label>
                                <textarea
                                    className="form-control"
                                    id="address"
                                    placeholder="Enter Student Address"
                                    onChange={(event) => {
                                        setAddress(event.target.value);
                                    }}
                                    required
                                />
                            </div>

                            <div className="col-12">
                                <label htmlFor="contactNumber" className="form-label">
                                    Student Contact Number :
                                </label>
                                <input
                                    type="text"
                                    className="form-control"
                                    id="contactNumber"
                                    placeholder="Enter Student Contact Number"
                                    onChange={(event) => {
                                        setContactNumber(event.target.value);
                                    }}
                                    required
                                />
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
