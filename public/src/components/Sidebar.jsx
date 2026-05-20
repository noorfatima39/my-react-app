import React from "react";
import { NavLink, useNavigate } from "react-router-dom";

export default function Sidebar() {

  const navigate = useNavigate();

  return (
    <div className="sidebar">

      <h2 className="sidebar-logo">
        JOBHIVE
      </h2>

      <div className="sidebar-links">

        <NavLink to="/home">
      Home
        </NavLink>

        <NavLink to="/about">
         About
        </NavLink>

        <NavLink to="/posts">
           Jobs
        </NavLink>

        <NavLink to="/posts">
           Categories
        </NavLink>
        <NavLink to="/users">
         Users     
         </NavLink>
         
      </div>

      <div className="sidebar-bottom">

        <button onClick={() => navigate("/about")}>
           Profile
        </button>

        <button onClick={() => navigate("/")}>
           Logout
        </button>

      </div>

    </div>
  );
}