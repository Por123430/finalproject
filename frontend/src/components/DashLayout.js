import { Outlet } from "react-router-dom";
import React from "react";
import DashHeader from "./DashHeader";
import DashFooter from "./DashFooter";
import DashNav from "./DashNav";

const DashLayout = () => {
  return (
    <>
      <DashHeader />
      <div className="dash-container" style={{display: "flex"}}>
        <DashNav />
        <Outlet />
      </div>
      <DashFooter />
    </>
  );
};

export default DashLayout;
