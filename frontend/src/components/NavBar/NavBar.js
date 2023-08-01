import React from "react";
import "./NavBar.css";
import { Link } from "react-router-dom";

function NavBar() {
    return (
        <nav className="navbar fixed-navbar navbar-expand-lg bg-body-tertiary">
            <div className="container-fluid">
                <Link className="navbar-brand" to="/">
                    <div className="nav-home">Home</div>
                </Link>
                {/* Replace the navbar-toggler-icon with the Font Awesome icon */}
                <button
                    className="navbar-toggler"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#navbarNav"
                    aria-controls="navbarNav"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                >
                    {/* Example of using a Font Awesome icon */}
                    <span className="fas fa-bars text-white"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <Link
                                to="/all-students"
                                className="nav-link active nav-home"
                            >
                                <div className="nav-text">View All Students</div>
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/add" className="nav-link">
                                <div className="nav-text">Create Student</div>
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
}

export default NavBar;
