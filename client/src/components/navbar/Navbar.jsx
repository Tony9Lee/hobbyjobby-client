import React from "react";
import "./Navbar.scss";

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="container">
        <div className="logo">
          <span className="text">HobbyJobby</span>
          <span className="dot">.</span>
        </div>
        <div className="links"></div>
        <span>Hobby Lobby Business</span>
        <span>Explore</span>
        <span>English</span>
        <span>Sign In</span>
        <span>Become a Seller</span>
      </div>
    </div>
  );
};

export default Navbar;
