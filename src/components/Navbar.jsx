import React from "react";

export default function Navbar() {
  return (
    <div className="navbar">
      <input type="text" placeholder="Search jobs..." />

      <div className="navbar-icons">
        <span className="bell-icon">🔔</span>
        <img
          className="profile-img"
          src="https://i.pravatar.cc/150?img=5"
          alt="User Profile"
        />
      </div>
    </div>
  );
}