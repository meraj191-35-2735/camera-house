import React from "react";
import profile from "../../../src/images/profile.png";
import "./Header.css";

const Header = () => {
  return (
    <div className="header navbar navbar-expand-lg">
      <div className="container d-flex justify-content-between align-items-center">
        <div className="logo-style d-flex justify-content-center align-items-center">
          <img src="logo192.png" alt="" />
          <h3 className="text-white ms-1">Camera House</h3>
        </div>
        <div className="links d-none d-lg-inline">
          <a
            className="text-decoration-none text-white me-2 fw-bold"
            href="/home"
          >
            Home
          </a>
          <a
            className="text-decoration-none text-white me-2 fw-bold"
            href="/shop"
          >
            Orders
          </a>
          <a
            className="text-decoration-none text-white me-2 fw-bold"
            href="/shop"
          >
            Contact Us
          </a>
          <a
            className="text-decoration-none text-white me-2 fw-bold"
            href="/profile"
          >
            <img src={profile} alt="" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Header;
