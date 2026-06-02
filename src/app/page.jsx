"use client";
import React, { useState, useEffect } from "react";


import Sidebar from "../components/Sidebar";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Loader from "../components/Loader";

import Login from "../pages/Login";
import Home from "../pages/Home";
import About from "../pages/About";
import Posts from "../pages/Posts";
import PostDetail from "../pages/PostDetail";
import NotFound from "../pages/NotFound";
import Users from "../pages/Users";
import UserDetails from "../pages/UserDetails";
export default function App() {

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 2500);
  }, []);
// Agar abhi bhi loading chal rahi hai toh loader dikhayein
  if (loading) {
    return <Loader />;
  }

  // Next.js routing setup bina react-router-dom ke
  return (
    <div className="main-layout">
      <Sidebar />
      <div className="content-area">
        <Navbar />

        {/* Hum standard routing ko simple layout mein handle kar rahe hain */}
        <main style={{ padding: "20px 0" }}>
          <Home />
          {/* Aap temporary check karne ke liye yahan <About />, <Posts /> wagera bhi switch kar ke dekh sakte hain */}
        </main>

        <Footer />
      </div>
    </div>
  );
}