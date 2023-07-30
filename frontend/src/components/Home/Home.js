import React, {useState, useEffect} from "react";
import "./Home.css";
import axios from "axios";
import { Link } from "react-router-dom";
import CountUp from "react-countup"; // Update the import statement

export default function Home() {
    const [count, setCount] = useState(0);

    useEffect(() => {
        axios
            .get("http://localhost:8070/student/count")
            .then((res) => {
                setCount(res.data.count);
            })
            .catch((err) => {
                console.error("Error from server:", err);
            });
    }, []);

    return (
        <div className="container d-flex justify-content-center align-items-center p-4 rounded">
            <Link
                to="/all-students"
                className="nav-link active nav-home"
            >
                <div className="d-flex flex-column align-items-center border-box bg-gray">
                    <CountUp
                        className="counter display-3 text-color d-block"
                        end={count}
                        duration={2}
                        separator=","
                    />
                    <span className="h5 text-white mt-2">Available Students</span>
                </div>
            </Link>
        </div>
    );
}
