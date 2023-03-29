import "./NavBar.css";
import { NavLink } from "react-router-dom";

function NavBar() {
  return (
    <div className="navbar">
      <NavLink className="nodec" to="">
        <h1>GitMunny</h1>
      </NavLink>
      <div>
        <NavLink className="nodec" to="howitworks">
          <span>How it works</span>
        </NavLink>
        <NavLink className="nodec" to="about">
          <span>About Us</span>
        </NavLink>
      </div>
    </div>
  );
}

export default NavBar;
