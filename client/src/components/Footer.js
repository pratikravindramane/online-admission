import React from "react";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";
import YouTubeIcon from "@mui/icons-material/YouTube";
import { NavLink } from "react-router-dom";
function Footer() {
  return (
    <div>
      <div className="footer">
        <div>
          <h3>Contact</h3>
          <div className="contact-info">
            <p>Email : universal@gmail.com</p>
            <p>phone :+91 1234567890</p>
            <p>
              address ; Lorem ipsum, dolor sit amet consectetur adipisicing.
            </p>
          </div>
        </div>
        <div>
          <h3>social media</h3>
          <div className="social">
            <a href="https://www.instagram.com/">
              <InstagramIcon />
            </a>
            <a href="https://www.facebook.com/">
              <FacebookIcon />
            </a>
            <a href="https://twitter.com/tweeter?lang=en">
              <TwitterIcon />
            </a>
            <a href="https://www.youtube.com/">
              <YouTubeIcon />
            </a>
          </div>
        </div>
        <div className="links">
          <h3>Quick Links</h3>
          <div className="quick-link">
            <NavLink to="/#">Home</NavLink>
            <NavLink to="/about">About</NavLink>
            <NavLink to="/contact">Contact</NavLink>
            <NavLink to="/login">Login</NavLink>
            <NavLink to="/signup">Sign Up</NavLink>
          </div>
        </div>
      </div>
      <div className="last">@copyright by Anshuman 2023</div>
    </div>
  );
}

export default Footer;
