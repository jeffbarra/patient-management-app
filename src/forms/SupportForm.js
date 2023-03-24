import { useState } from "react";
import { Link } from "react-router-dom";
import home from "../images/home.png";
import "./SupportForm.css";

const SupportForm = () => {
  const [name, setName] = useState("");
  const [patientName, setPatientName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [description, setDescription] = useState("");
  const [error, setError] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const supportTicket = { name, patientName, email, phone, description };

    const response = await fetch("http://localhost:5001/api/support", {
      method: "POST",
      body: JSON.stringify(supportTicket),
      headers: {
        "Content-Type": "application/json",
      },
    });
    const json = await response.json();

    if (!response.ok) {
      setError(json.message);
    }
    if (response.ok) {
      setName("");
      setPatientName("");
      setEmail("");
      setPhone("");
      setDescription("");
      setError(null);
      alert("Support ticket submitted successfully!");
    }
  };

  return (
    <div className="support-form-container">
      <div className="support-form-card">
        <div className="support-form-button">
          <Link to="/">
            <img src={home} alt="" />
            <p>Home</p>
          </Link>
        </div>
        <div className="support-form-content">
          <form className="support-form" onSubmit={handleSubmit}>
            <h1>Create a Support Ticket</h1>

            <label>Your Name</label>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Enter your name"
              required
            />

            <label>Patient's Name</label>
            <input
              type="text"
              value={patientName}
              onChange={(e) => setPatientName(e.target.value)}
              placeholder="Enter patient's name"
              required
            />

            <label>Your Email</label>
            <input
              type="text"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
              required
            />

            <label>Your Phone Number</label>
            <input
              type="text"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              placeholder="Enter your phone number "
              required
            />

            <label>Description of your issue</label>
            <textarea
              type="text"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              placeholder="Enter a description of your issue"
              required
            />

            <div className="new-patient-form-button">
              <button type="submit">Submit</button>
              {error && <div className="error">{error}</div>}
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default SupportForm;
