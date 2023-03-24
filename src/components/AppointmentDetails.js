import { Link } from "react-router-dom";
import "./AppointmentDetails.css";

const AppointmentDetails = ({ appointment }) => {
  // "appointment" prop is passed from the Appointments component

  return (
    <div className="appointment-details">
      <Link to="/initial">
        <h3>{appointment.name}</h3>
      </Link>
      <p>Months Pregnant: {appointment.monthsPregnant}</p>
      <p>DOB: {appointment.dob}</p>
      <h4>
        Type: <span>{appointment.apptType}</span>
      </h4>
    </div>
  );
};

export default AppointmentDetails;
