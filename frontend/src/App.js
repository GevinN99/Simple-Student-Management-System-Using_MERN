import './App.css';
import NavBar from "./components/NavBar/NavBar";
import AddStudent from "./components/AddStudent/AddStudent";
import AllStudents from "./components/AllStudents/AllStudents";
import Home from "./components/Home/Home";
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";

function App() {
    return (
        <Router>
            <div className="App">
                <NavBar/>
                <Routes>
                    <Route path="/add" element={<AddStudent/>}/>
                    <Route path="/all-students" element={<AllStudents/>}/>
                    <Route path="/" element={<Home/>}/>
                </Routes>
            </div>
        </Router>
    );
}

export default App;
