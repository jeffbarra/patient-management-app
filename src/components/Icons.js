import { Link } from "react-router-dom";
import newIcon from "../images/new-icon.png";
import appointment from "../images/appointment.png";
import supportIcon from "../images/support-icon.png";
import search from "../images/search.png";
import "./Icons.css";

const Icons = () => {
  return (
    <>
      {/* First Row of Icons */}
      <div className="home-row">
        <div className="home-icons">
          <div className="icon-with-text">
            <Link to="/today">
              <img src={appointment} alt="" />
              <p>Today's Patients</p>
            </Link>
          </div>
          <Link to="/new">
            <div className="icon-with-text">
              <img src={newIcon} alt="" />
              <p>New Patient</p>
            </div>
          </Link>
          <div className="icon-with-text">
            <Link to="/find">
              <img src={search} alt="" />
              <p>Find Patient</p>
            </Link>
          </div>
          <div className="icon-with-text">
            <Link to="/support">
              <img src={supportIcon} alt="" />
              <p>Delfina Support</p>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Icons;
