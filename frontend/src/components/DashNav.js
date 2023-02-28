import React from "react";
import { Link } from "react-router-dom";
import "../styles/DashNav.css"

const DashNav = () => {
  const content = (
    <nav className="dash-nav" >
      <div className="dash-nav__container" >
        <Link to="/dash/Monitor" className="dash-nav__link">
          Monitor
        </Link>
        <Link to="/dash/LogUser" className="dash-nav__link">
          Log User
        </Link>
        <Link to="/dash/LogMonitor" className="dash-nav__link">
          Log Monitor
        </Link>
        <Link to="/dash/Notification" className="dash-nav__link">
          Notification
        </Link>
        <Link to="/dash/AddUser" className="dash-nav__link">
          Add User
        </Link>
        <Link to="/dash/Statistics" className="dash-nav__link">
          Statistics
        </Link>
      </div>
    </nav>
  );
  return content;
};

export default DashNav;
