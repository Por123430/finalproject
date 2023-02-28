import React from "react";
import { Link } from "react-router-dom";
import "../styles/DashHeader.css";
import Logo from "../img/Egat-Logo.png";
const DashHeader = () => {
  const content = (
    <header className="dash-header">
      <div className="dash-header__container">
        <nav className="dash-header__logo">
          <img src={Logo} alt="Logo"></img>
        </nav>
        <Link to="/dash/notes" className="dash-header__title" >
          DataCenter
        </Link>
      </div>
    </header>
  );
  return content;
};

export default DashHeader;
