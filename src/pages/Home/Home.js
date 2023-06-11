import "./Home.css";
import HomeImg from "../../assets/home-page-img.png";
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div className="container">
      <div className="text">
        <h2>Plan A Delicious Trip</h2>
        <p>
          Explore a number of different restaurants on your upcoming trip and
          plan an experience you won't forget for every meal!
        </p>
        <Link to="/about">
          <button>Get Started</button>
        </Link>
      </div>
      <div className="image">
        <img src={HomeImg} title="home-img" alt="pizza-in-venice" />
      </div>
    </div>
  );
}
