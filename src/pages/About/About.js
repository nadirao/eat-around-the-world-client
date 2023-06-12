import "./About.css";
import AboutImg from "../../assets/home-page-img.png";
import { useNavigate, Link } from "react-router-dom";
import { Button } from '@mui/material'

export default function About() {
  //   let navigate = useNavigate();
  //   const routeChange = () => {
  //     let path = '/destinationform';
  //     navigate(path);
  //   };

  return (
    <div className="about-container">
      <div className="about-image">
        <img src={AboutImg} title="about-img" alt="pizza-in-venice" />
      </div>
      <div className="text">
        <h2>About</h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
          Suspendisse ultrices gravida dictum fusce. Non pulvinar neque laoreet
          suspendisse interdum consectetur libero id. Vitae ultricies leo
          integer malesuada nunc.
        </p>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
          Suspendisse ultrices gravida dictum fusce. Non pulvinar neque laoreet
          suspendisse interdum consectetur libero id. Vitae ultricies leo
          integer malesuada nunc. Pellentesque sit amet porttitor eget dolor
          morbi non.
        </p>
        <Link to="/destinationform">
          <Button> Start Planning </Button>
        </Link>
      </div>
    </div>
  );
}
