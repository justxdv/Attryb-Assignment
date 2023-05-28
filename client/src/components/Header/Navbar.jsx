import React from "react";
import "./navbar.css";

const Navbar = ({ userRole }) => {
  return (
    <div className="navbar">
      <nav>
        <ul>
          <li>
            <a href="/">Home</a>
            </li>
          <li><a href = "/addCar">Add a Car</a></li>
          <li>
            <a href="/about">View Cars</a>
          </li>
          <li className="right">
            <a href="/signUp">Sign up</a>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;
