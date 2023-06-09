import './Home.css'
import Home from '../../assets/home-page-img.png'

export default function NavBar(){
    return(
        <div className="container">
            <div className="text">
                <h2>Plan A Delicious Trip</h2>
                <p>Explore a number of different restaurants on your upcoming trip and plan an experience you won't forget for every meal!</p>
            </div>
            <div className="image">
            <img src={Home} title="home-img" alt="pizza-in-venice" />
            </div>
        </div>
    )
}