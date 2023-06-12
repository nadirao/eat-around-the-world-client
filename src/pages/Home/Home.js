import "./Home.css";
import HomeImg from "../../assets/home-page-img.png";
import { Link } from "react-router-dom";
import { Button } from '@mui/material'

export default function Home() {
  return (
    <div className="home-container">
      <div className="home-image">
        <img src={HomeImg} title="home-img" alt="pizza-in-venice" />
      </div>

      <div className="home-content">
        <div className="home-content-info">
          <h1 className="title">Plan A Delicious Trip</h1>
          <p>
            Explore a number of different restaurants on your upcoming trip and
            plan an experience you won't forget for every meal!
          </p>
          <div className="home-content-btns"></div>
          <Link to="/about">
            <Button className="home-button" type="button">Get Started</Button>
          </Link>
        </div>
      </div>
    </div>
  );
}
