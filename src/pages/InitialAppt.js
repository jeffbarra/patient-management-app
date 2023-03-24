import React from "react";
import InitialForm from "../forms/InitialForm";
import "./InitialAppt.css";

const InitialAppt = () => {
  return (
    <div className="initial-form-container">
      <div className="initial-form-card">
        <InitialForm />
      </div>
    </div>
  );
};

export default InitialAppt;
