import React from "react";
import { Link } from "react-router-dom";
import "../styles/DashNav.css"
import useAuth from "../hooks/useAuth";
const DashNav = () => {
  const { username,isAdmin ,isOfficer} = useAuth()
  const content = (
    <nav className="dash-nav" >
      <div className="dash-nav__container" >
        {(!isAdmin || isOfficer) && <Link to="/dash/LogMonitor" className="dash-nav__link">
          Monitor 
        </Link>}
        {(!isAdmin || isOfficer) && <Link to="/dash/monitors" className="dash-nav__link">
          Log Monitor
        </Link>}
        {(!isAdmin || isOfficer) && <Link to="/dash/LogUser" className="dash-nav__link">
          Log User
        </Link>}
        {(!isAdmin || isOfficer) && <Link to="/dash/Statistics" className="dash-nav__link">
          Statistics
        </Link>}
        {(!isAdmin || isOfficer) && <Link to="/dash/Notification" className="dash-nav__link">
          Notification
        </Link>}
        {(isAdmin || isOfficer, isAdmin) &&<Link to="/dash/users" className="dash-nav__link">
          Users
        </Link>}
        {(isAdmin || isOfficer, isAdmin) && <Link to="/dash/users/new" className="dash-nav__link">
          Add User
        </Link>}
        {(isAdmin && isOfficer , isAdmin) && <Link to="/dash/Statistics" className="dash-nav__link">
          Edit sensor
        </Link>}
      </div>
    </nav>
  );
  return content;
};

export default DashNav;
