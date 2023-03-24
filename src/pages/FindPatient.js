import { useState } from "react";
import PatientFinder from "../components/PatientFinder";
import SearchResultsList from "../components/SearchResultsList";
import "./FindPatient.css";

const FindPatient = () => {
  const [results, setResults] = useState([]);
  return (
    <div className="search-patient-container">
      <div className="search-patient-card">
        <PatientFinder setResults={setResults} />
        <SearchResultsList results={results} />
      </div>
    </div>
  );
};

export default FindPatient;
