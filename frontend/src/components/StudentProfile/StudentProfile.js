import React, {useState, useEffect} from "react";
import axios from "axios";
import {useParams} from "react-router-dom";
import "./StudentProfile.css";
import {Modal, Button} from "react-bootstrap";

export default function StudentProfile() {
    const {id} = useParams();
    const [student, setStudent] = useState(null);
    const [showModal, setShowModal] = useState(false);
    const handleClose = () => setShowModal(false);
    const handleShow = () => setShowModal(true);

    // Initialize the updatedStudent state with an empty object
    const [updatedStudent, setUpdatedStudent] = useState({});

    const handleInputChange = (e) => {
        const {name, value} = e.target;
        setUpdatedStudent({
            ...updatedStudent,
            [name]: value,
        });
    };

    const handleFormSubmit = async (e) => {
        e.preventDefault();
        try {
            const res = await axios.put(
                `http://localhost:8070/student/update/${id}`,
                updatedStudent
            );
            console.log("Student updated successfully:", res.data);
            fetchStudent(); // Call fetchStudent function to reload the student data
            handleClose(); // Close the modal
        } catch (err) {
            console.error("Error updating student:", err);
        }
    };

    const fetchStudent = async () => {
        try {
            const res = await axios.get(`http://localhost:8070/student/get/${id}`);
            setStudent(res.data.user);
        } catch (err) {
            console.error("Error fetching student:", err);
        }
    };

    useEffect(() => {
        const fetchStudent = async () => {
            try {
                const res = await axios.get(`http://localhost:8070/student/get/${id}`);
                setStudent(res.data.user);
                // Initialize the updatedStudent state with the current student data
                setUpdatedStudent(res.data.user);
            } catch (err) {
                console.error("Error fetching student:", err);
            }
        };
        fetchStudent();
    }, [id]);

    if (!student) {
        return (
            <div>
                <h2 className="rotating-text">...LOADING...</h2>
            </div>
        );
    }

    return (
        <div className="student-profile-container">
            <h2 className="student-profile-test-style">Student Profile</h2>
            <div className="form">
                <div className="form-group row">
                    <label className="col-sm-2 col-form-label">First Name:</label>
                    <div className="col-sm-10">
                        {student.firstName}
                    </div>
                </div>
                <div className="form-group row">
                    <label className="col-sm-2 col-form-label ">Last Name:</label>
                    <div className="col-sm-10">
                        {student.lastName}
                    </div>
                </div>
                <div className="form-group row">
                    <label className="col-sm-2 col-form-label">Registration Number:</label>
                    <div className="col-sm-10">
                        {student.regNumber}
                    </div>
                </div>
                <div className="form-group row">
                    <label className="col-sm-2 col-form-label">Age:</label>
                    <div className="col-sm-10">
                        {student.age}
                    </div>
                </div>
                <div className="form-group row">
                    <label className="col-sm-2 col-form-label">Gender:</label>
                    <div className="col-sm-10">
                        {student.gender}
                    </div>
                </div>
                <div className="form-group row">
                    <label className="col-sm-2 col-form-label">Contact Number:</label>
                    <div className="col-sm-10">
                        {student.contactNumber}
                    </div>
                </div>
                <div className="form-group row">
                    <label className="col-sm-2 col-form-label">Address:</label>
                    <div className="col-sm-10">
                        {student.address}
                    </div>
                </div>

                <div className="d-flex flex-row-reverse bd-highlight">
                    <button className="btn btn-primary" onClick={handleShow}>
                        Go To Update
                    </button>
                </div>

                <Modal show={showModal} onHide={handleClose} size="xl">
                    <Modal.Header closeButton>
                        <Modal.Title>Update Student Profile</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <form onSubmit={handleFormSubmit}>
                            <div className="modal-body">
                                <div className="col-12">
                                    <label htmlFor="first-name" className="form-label">
                                        First Name:
                                    </label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        id="firstName"
                                        placeholder="Enter Student Name"
                                        name="firstName"
                                        value={updatedStudent.firstName || ""}
                                        onChange={handleInputChange}
                                    />
                                </div>

                                <div className="col-12">
                                    <label htmlFor="last-name" className="form-label">
                                        Last Name:
                                    </label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        id="lastName"
                                        placeholder="Enter Student Name"
                                        name="lastName"
                                        value={updatedStudent.lastName || ""}
                                        onChange={handleInputChange}
                                    />
                                </div>

                                <div className="col-12">
                                    <label htmlFor="regNumber" className="form-label">
                                        Student Registration Number:
                                    </label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        id="regNumber"
                                        placeholder="Enter Student Registration Number"
                                        name="regNumber"
                                        value={updatedStudent.regNumber || ""}
                                        onChange={handleInputChange}
                                        disabled
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
                                        name="age"
                                        value={updatedStudent.age || ""}
                                        onChange={handleInputChange}
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
                                            name="gender"
                                            value={updatedStudent.gender || ""}
                                            onChange={handleInputChange}
                                        >
                                            <option value="">Select Gender</option>
                                            <option value="Male">Male</option>
                                            <option value="Female">Female</option>
                                            <option value="Other">Other</option>
                                        </select>
                                    </div>
                                </div>

                                <div className="col-12">
                                    <label htmlFor="address" className="form-label">
                                        Address:
                                    </label>
                                    <textarea
                                        className="form-control"
                                        id="address"
                                        placeholder="Enter Student Address"
                                        name="address"
                                        value={updatedStudent.address || ""}
                                        onChange={handleInputChange}
                                    />
                                </div>

                                <div className="col-12">
                                    <label htmlFor="address" className="form-label">
                                        Address:
                                    </label>
                                    <textarea
                                        className="form-control"
                                        id="address"
                                        placeholder="Enter Student Address"
                                        name="address"
                                        value={updatedStudent.address || ""}
                                        onChange={handleInputChange}
                                    />
                                </div>

                                <div className="col-12">
                                    <label htmlFor="contactNumber" className="form-label">
                                        Student Contact Number:
                                    </label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        id="contactNumber"
                                        placeholder="Enter Student Contact Number"
                                        name="contactNumber"
                                        value={updatedStudent.contactNumber || ""}
                                        onChange={handleInputChange}
                                    />
                                </div>
                            </div>

                            <Modal.Footer>
                                <Button type="submit" variant="primary" onClick={handleClose}>
                                    Update
                                </Button>
                                <Button variant="secondary" onClick={handleClose}>
                                    Close
                                </Button>
                            </Modal.Footer>
                        </form>
                    </Modal.Body>
                </Modal>
            </div>
        </div>
    );
}
