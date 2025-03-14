import React from "react";
import Sidebar from "../components/Sidebar";
import MainContainer from "../components/MainContainer";
import { Outlet } from "react-router-dom";

const Body = () => {
  return (
    <div className="flex mt-20">
      <Sidebar />
      <Outlet />
    </div>
  );
};

export default Body;
