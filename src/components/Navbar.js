import { useState } from "react";
import { Link } from "react-router-dom";
import { Twirl as Hamburger } from "hamburger-react";
import { UserAuth } from "../context/AuthContext";
import "./Navbar.css";

const Navbar = () => {
  const { user, logOut } = UserAuth();

  //  HANDLE LOGOUT //
  const handleSignOut = async () => {
    try {
      await logOut();
    } catch (error) {
      console.log(error);
    }
  };

  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click);

  const closeMenu = () => setClick(false);

  return (
    <div className="header">
      <nav className="navbar">
        <div>
          <Link to="/">
            <h1>Delfina Guide</h1>
          </Link>
        </div>
        <div className="hamburger" onClick={handleClick}>
          <Hamburger />
        </div>
        <ul className={click ? "nav-menu active" : "nav-menu"}>
          <li className="nav-item">
            <Link to="/" onClick={closeMenu} className="a-tag">
              Home
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/today" onClick={closeMenu} className="a-tag">
              Today's Patients
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/find" onClick={closeMenu} className="a-tag">
              Find Patient
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/support" onClick={closeMenu} className="a-tag">
              Get Support
            </Link>
          </li>

          {/* Signin/Logout Button */}
          <div className="navbar-button">
            {user?.displayName ? (
              <button onClick={handleSignOut}>Logout</button>
            ) : (
              <Link to="/signin">
                <button>Sign In</button>
              </Link>
            )}
          </div>
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;
