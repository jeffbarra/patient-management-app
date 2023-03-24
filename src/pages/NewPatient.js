import { Link } from "react-router-dom";
import home from "../images/home.png";
import NewPatientForm from "../forms/NewPatientForm";
import "./NewPatient.css";

const NewPatient = () => {
  return (
    <div className="new-patient-container">
      <div className="new-patient-card">
        <div className="new-patient-button">
          <Link to="/">
            <img src={home} alt="" />
            <p>Home</p>
          </Link>
        </div>
        <NewPatientForm />
      </div>
    </div>
  );
};

export default NewPatient;
