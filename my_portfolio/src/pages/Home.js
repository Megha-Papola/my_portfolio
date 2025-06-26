import { Link } from "react-router-dom";
import "./Home.css";
import profilePic from "../assets/my-profile.jpeg";

const Home = () => {
  return (
    <div className="home-container">
      <div className="left-section">
  <div className="image-wrapper">
    <img src={profilePic} alt="Megha Papola" className="profile-img" />
  </div>
</div>

      <div className="right-section">
        <h1>Hi, I'm Megha Papola</h1>
        <h2>Front-End Developer | ML Enthusiast</h2>
        <p>
          I design beautiful user experiences and
           explore intelligent systems through machine learning.
        </p>
        <div className="home-buttons">
          <Link to="/resume" className="btn">Resume</Link>
          <Link to="/projects" className="btn">Projects</Link>
          <Link to="/contact" className="btn btn-outline">Contact</Link>
        </div>
      </div>
    </div>
  );
};

export default Home;
