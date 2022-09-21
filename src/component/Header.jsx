import React from "react";
import "./Header.css";
import logo from "./logo.png";

const Header = () => {
  return (
    <div>
      <ul className="header__nav">
      <img src={logo} alt="logo" className="logo nav" />
        <li className="nav">Subjects</li>
        <li className="nav">Topics</li>
        <li className="nav">Exams</li>
        <li className="nav">Calendar</li>
      </ul>
    </div>
  );
};

export default Header;
