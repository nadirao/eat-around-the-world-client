import "./About.css";
import AboutImg from "../../assets/home-page-img.png";
export default function About() {
  return (
    <div className="container">
      <div className="image">
        <img src={AboutImg} title="about-img" alt="pizza-in-venice" />
      </div>
      <div className="text">
        <h2>About</h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
          Suspendisse ultrices gravida dictum fusce. Non pulvinar neque laoreet
          suspendisse interdum consectetur libero id. Vitae ultricies leo
          integer malesuada nunc.{" "}
        </p>
        <p>
          {" "}
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
          Suspendisse ultrices gravida dictum fusce. Non pulvinar neque laoreet
          suspendisse interdum consectetur libero id. Vitae ultricies leo
          integer malesuada nunc. Pellentesque sit amet porttitor eget dolor
          morbi non.
        </p>
        <button>Start Planning</button>
      </div>
    </div>
  );
}
