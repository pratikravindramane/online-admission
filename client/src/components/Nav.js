import { useRef } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { NavLink } from "react-router-dom";
import logo from '../img/logos-removebg-preview2.png'
import "./Nav.css";

function Nav() {
  const navRef = useRef();

  const showNav = () => {
    navRef.current.classList.toggle("responsive_nav");
  };

  return (
    <header>
      <img
        // src="https://d2jg2pri5bpndu.cloudfront.net/schools/250_7f47c7e1f724e54de3233a0cca4c2f9f.jpg"
        src={logo}
        alt=""
        className="logo"
      />
      <nav ref={navRef} className="nav">
        <NavLink to="/#">Home</NavLink>
        <NavLink to="/about">About</NavLink>
        <NavLink to="/contact">Contact</NavLink>
        <NavLink to="/login">Login</NavLink>
        <NavLink to="/signup">Sign Up</NavLink>
        <button className="nav-btn nav-close-btn" onClick={showNav}>
          <FaTimes />
        </button>
      </nav>
      <button className="nav-btn" onClick={showNav}>
        <FaBars />
      </button>
    </header>
  );
}

export default Nav;
