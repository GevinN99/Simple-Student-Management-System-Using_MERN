import React from "react";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NavBar from "./components/NavBar/NavBar";
import AddStudent from "./components/AddStudent/AddStudent";
import AllStudents from "./components/AllStudents/AllStudents";
import StudentProfile from "./components/StudentProfile/StudentProfile";
import Home from "./components/Home/Home";

function App() {
    return (
        <Router>
            <div className="App">
                <NavBar />
                <Routes>
                    <Route path="/add" element={<AddStudent />} />
                    <Route path="/all-students" element={<AllStudents />} />
                    <Route path="/student-profile/:id" element={<StudentProfile />} />
                    <Route path="/" element={<Home />} />
                </Routes>
            </div>
        </Router>
    );
}

export default App;
