import Announcements from "./Announcements";
import { UserAuth } from "../context/AuthContext";
import Icons from "./Icons";
import logo from "../images/logo.png";
import "./Home.css";

const Home = () => {
  const { logOut, user } = UserAuth();

  const handleSignOut = async () => {
    try {
      await logOut();
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="home-container">
      <div className="home-container-card">
        <div className="home-message-container">
          <div className="home-logo-container">
            <img src={logo} />
          </div>
          <p>Welcome, {user?.displayName}!</p>
        </div>
        <Icons />
        <div className="logout-button-container">
          <div className="logout-button">
            <button onClick={handleSignOut}>Logout</button>
          </div>
        </div>
        <Announcements />
      </div>
    </div>
  );
};

export default Home;
