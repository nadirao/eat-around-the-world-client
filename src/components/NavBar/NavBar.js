import logo from "../../assets/app-logo.png";
import { Link } from "react-router-dom";
import "./NavBar.css";
import {Stack, Button, Toolbar, AppBar} from "@mui/material";

export default function NavBar() {
  return (

    <Stack direction="row" spacing={10}>
      <Button>
        <img src={logo} title="applogo" className="logo" alt="app-logo" />
      </Button>
      <Button>
        <Link to="/">
          <div>Home</div>
        </Link>
      </Button>
      <Button>
        <Link to="/about">
          <div>About</div>
        </Link>
      </Button>
      <Button>
        <Link to="/featured">
          <div>Featured</div>
        </Link>
      </Button>
      <Button>
        <Link to="/restaurant">
          <div>Restaurant</div>
        </Link>
      </Button>
    </Stack>
  );
}
