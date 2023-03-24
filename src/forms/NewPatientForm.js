import { useState } from "react";
import "./NewPatientForm.css";

const NewPatientForm = () => {
  const [name, setName] = useState("");
  const [dob, setDob] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [monthsPregnant, setMonthsPregnant] = useState("");
  const [dueDate, setDueDate] = useState("");
  const [error, setError] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const patient = { name, dob, email, phone, monthsPregnant, dueDate };

    const response = await fetch("http://localhost:5001/api/patients", {
      method: "POST",
      body: JSON.stringify(patient), // convert the patient object to a string
      headers: {
        "Content-Type": "application/json", // tell the server that the data is in JSON format
      },
    });
    const json = await response.json(); // convert the response to JSON

    if (!response.ok) {
      setError(json.message); // if the response is not ok, set the error state to the message from the server
    }
    if (response.ok) {
      // if the response is ok, clear the form and display a message in the console
      setName("");
      setDob("");
      setEmail("");
      setPhone("");
      setMonthsPregnant("");
      setDueDate("");
      setError(null);
      alert("Patient added successfully!");
    }
  };

  return (
    <div className="new-patient-form-container">
      <div className="new-patient-form-wrap">
        <div className="new-patient-form-content">
          <form className="new-patient-form" onSubmit={handleSubmit}>
            <h1>Add a New Patient</h1>

            <label>Patient's Name</label>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Enter patient's name"
              required
            />

            <label>Patient's Date of Birth</label>
            <input
              type="text"
              value={dob}
              onChange={(e) => setDob(e.target.value)}
              placeholder="Enter patient's date of birth"
              required
            />

            <label>Patient's Email</label>
            <input
              type="text"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter patient's email"
              required
            />

            <label>Phone Number</label>
            <input
              type="text"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              placeholder="Enter patient's phone number"
              required
            />

            <label>How Many Months Pregnant is the Patient</label>
            <input
              type="text"
              value={monthsPregnant}
              onChange={(e) => setMonthsPregnant(e.target.value)}
              placeholder="Enter number of months pregnant"
              required
            />

            <label>When's the Patient's Due Date?</label>
            <input
              type="text"
              value={dueDate}
              onChange={(e) => setDueDate(e.target.value)}
              placeholder="Enter patient's due date"
              required
            />

            <div className="new-patient-form-button">
              <button type="submit">Add Patient</button>
              {error && <div className="error">{error}</div>}
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default NewPatientForm;
