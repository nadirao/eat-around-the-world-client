import "./DestinationForm.css";
import DFImage from "../../assets/home-page-img.png";
import { Link } from "react-router-dom";
import { useState } from "react";



export default function DestinationForm({searchYelp}) {

  const [term, setTerm] = useState("");
  const [location, setLocation] = useState("");

  const handleTermChange = (event) => {
    setTerm(event.target.value);
  };

  const handleLocationChange = (event) => {
    setLocation(event.target.value);
  };

  const handleSearch = (event) => {
    event.preventDefault();
    searchYelp(term, location);
  };

  
  return (
    <div className="df-container">
      <div className="df-image">
        <img src={DFImage} title="df-img" alt="pizza-in-venice" />
      </div>
      <div className="destination-form">
        <h4>WHERE ARE YOU GOING?</h4>
        <h2>Enter your trip destination</h2>
        <form onSubmit={handleSearch}>
          <label>City
            <input type="text" name="location" onChange={handleLocationChange} placeholder="Destination City" />
          </label>
          <label> Cuisine
            <input type="text" name="term" onChange={handleTermChange} placeholder="What are you craving?" />
          </label>


          <input type="submit" value="Submit"/>
          <Link to='/featured'>click here to see the results</Link>
        </form>
      </div>
    </div>
  );
}
