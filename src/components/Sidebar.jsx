"use client";
import React, { useState } from "react";
import Link from "next/link";
import { useRouter, usePathname } from "next/navigation";

export default function Sidebar() {
  const router = useRouter();
  const pathname = usePathname();
  
  // Mobile par sidebar ko open/close karne ki state
  const [isOpen, setIsOpen] = useState(false);

  // Link click hone par menu ko close karne ke liye function
  const handleLinkClick = () => {
    setIsOpen(false);
  };

  return (
    <>
      {/* 1. Mobile Top Bar (Sirf mobile par dikhega, ☰ button ke sath) */}
      <div className="mobile-header">
        <button className="hamburger-btn" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? "✕" : "☰"}
        </button>
        <span className="mobile-logo">JOBHIVE</span>
        <div className="mobile-icons">
          <span className="bell-icon">🔔</span>
          <img 
            src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=150" 
            alt="profile" 
            className="profile-img" 
            onClick={() => { router.push("/profile"); handleLinkClick(); }}
            style={{ cursor: 'pointer' }}
          />
        </div>
      </div>

      {/* 2. Sidebar Component (isOpen state ke mutabiq 'open' class lagayenge) */}
      <div className={`sidebar ${isOpen ? "open" : ""}`}>
        <h2 className="sidebar-logo">JOBHIVE</h2>

        <div className="sidebar-links">
          <Link 
            href="/" 
            className={pathname === "/" ? "active" : ""}
            onClick={handleLinkClick}
          >
            Home
          </Link>

          <Link 
            href="/about" 
            className={pathname === "/about" ? "active" : ""}
            onClick={handleLinkClick}
          >
            About
          </Link>

          <Link 
            href="/posts" 
            className={pathname === "/posts" ? "active" : ""}
            onClick={handleLinkClick}
          >
            Jobs
          </Link>

          <Link 
            href="/users" 
            className={pathname === "/users" ? "active" : ""}
            onClick={handleLinkClick}
          >
            Users
          </Link>
        </div>

        <div className="sidebar-bottom">
          <button onClick={() => { router.push("/profile"); handleLinkClick(); }}>
            Profile
          </button>

          <button onClick={() => { router.push("/login"); handleLinkClick(); }}>
            Logout
          </button>
        </div>
      </div>
    </>
  );
}