import { useEffect, useState } from "react";
import "./Appointments.css";
import AppointmentDetails from "./AppointmentDetails";

const Appointments = () => {
  const [appointments, setAppointments] = useState(null); // state for appointments

  useEffect(() => {
    const fetchAppointments = async () => {
      const response = await fetch("http://localhost:5001/api/appointments"); // fetch all appointments from the api and store in "response"
      const json = await response.json(); // array of appointments as json

      if (response.ok) {
        setAppointments(json); // if response is ok, set the appointments state to the json data
      }
    };

    fetchAppointments(); // call the function
  }, []);

  return (
    <div className="home-screen">
      <div className="today-widget">
        <div className="today-widget-header">
          <h1>Today's Patients</h1>
          <div>
            {appointments &&
              appointments.map((appointment) => (
                <AppointmentDetails
                  key={appointment._id}
                  appointment={appointment}
                /> // "appointment" prop  is passed to the AppointmentDetails component
              ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Appointments;
