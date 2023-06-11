import './DestinationForm.css'
import DFImage from '../../assets/home-page-img.png'


export default function DestinationForm(){
    return(
        <div className="df-container">
        <div className="image">
          <img src={DFImage} title="df-img" alt="pizza-in-venice" />
        </div>
        <div className="destination-form">
          <h4>WHERE ARE YOU GOING?</h4>
          <h2>Enter your trip destination and dates</h2>
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
        </div>
      </div>
    )
}