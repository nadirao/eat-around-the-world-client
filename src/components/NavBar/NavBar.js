import logo from "../../assets/app-logo.png";
import { Link } from "react-router-dom";
import './NavBar.css'

export default function NavBar() {
  return (
    <header>
      <div className="logo-div">
        <Link to="/">
          <img src={logo} title="applogo" className="logo" alt="app-logo" />
        </Link>
      </div>
      <nav className="navbar">
        <Link to='/'>
            <div>Home</div>
        </Link>
        <Link to='/about'>
            <div>About</div>
        </Link>
        <Link to='/featured'>
            <div>Featured</div>
        </Link>
        <Link to='/itinerary'>
            <div>Itinerary</div>
        </Link>
      </nav>
    </header>
  );
}
