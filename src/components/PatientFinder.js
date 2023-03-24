import { useState } from "react";
import { Link } from "react-router-dom";
import home from "../images/home.png";
import "./PatientFinder.css";

const PatientFinder = ({ setResults }) => {
  const [input, setInput] = useState("");

  const fetchData = (value) => {
    fetch("http://localhost:5001/api/patients")
      .then((response) => response.json())
      .then((json) => {
        const results = json.filter((patient) => {
          return (
            value &&
            patient &&
            patient.name &&
            patient.name.toLowerCase().includes(value)
          );
        });
        setResults(results);
      });
  };

  const handleChange = (value) => {
    setInput(value);
    fetchData(value);
  };

  return (
    <div className="patient-finder">
      <div className="patient-finder-container">
        <div className="patient-finder-button">
          <Link to="/">
            <img src={home} alt="" />
            <p>Home</p>
          </Link>
        </div>
        <div className="patient-finder-wrap">
          <div className="patient-finder-content">
            <form className="patient-finder-form">
              <h1>Find a Patient</h1>

              <label>Patient's Name</label>
              <input
                type="text"
                placeholder="Enter Patient's Name"
                value={input}
                onChange={(e) => handleChange(e.target.value)}
              />

              {/* <div className="patient-finder-button">
                <button type="submit">Find Patient</button>
              </div> */}
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PatientFinder;
