import { Link } from "react-router-dom";
import Appointments from "../components/Appointments";
import home from "../images/home.png";
import "./TodaysPatients.css";

const TodaysPatients = () => {
  return (
    <div className="appt-container">
      <div className="appt-card">
        <div className="appt-button">
          <Link to="/">
            <img src={home} alt="" />
            <p>Home</p>
          </Link>
        </div>
        <Appointments />
      </div>
    </div>
  );
};

export default TodaysPatients;
