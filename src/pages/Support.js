import { Link } from "react-router-dom";
import SupportForm from "../forms/SupportForm";
import home from "../assets/home.svg";
import "./Support.css";

const Support = () => {
  return (
    <div className="support-form-container">
      <div className="support-form-card">
        <div className="support-form-button">
          <Link to="/">
            <img src={home} alt="" />
            <p>Home</p>
          </Link>
        </div>
        <SupportForm />
      </div>
    </div>
  );
};

export default Support;
