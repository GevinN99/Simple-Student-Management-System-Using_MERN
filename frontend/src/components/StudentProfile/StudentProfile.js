import React, { useState } from "react";
import "./StudentProfile.css";
import { Link } from "react-router-dom";
import { Modal, Button } from "react-bootstrap";

export default function StudentProfile() {
    const [showModal, setShowModal] = useState(false);

    const handleClose = () => setShowModal(false);
    const handleShow = () => setShowModal(true);

    return (
        <div className="container">
            <button className="btn btn-primary" onClick={handleShow}>
                View Profile
            </button>

            <Modal show={showModal} onHide={handleClose} size="xl">
                <Modal.Header closeButton>
                    <Modal.Title>Student Profile</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    {/* Add Content here */}
                    <p>This is the student profile content.</p>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>
                </Modal.Footer>
            </Modal>
        </div>
    );
}
