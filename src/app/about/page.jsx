"use client"; // Agar aap buttons par click handling add karenge to yeh zaroori hoga
import React from "react";

// Components ko import kiya
import Sidebar from "../../components/Sidebar";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";

export default function AboutPage() {
  return (
    <div>
      {/* 1. Navbar */}
      <Navbar />

      {/* 2. Layout Structure */}
      <div style={{ display: "flex" }}>
        <Sidebar />

        {/* Main content area */}
        <main style={{ flex: 1, padding: "20px" }}>
          <div className="about-page">
            <h1>About Our Website</h1>

            <div className="about-content">
              <img
                src="https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=1920&q=80"
                alt="About Us"
                style={{
                  width: "100%", // 200% se image screen se baahir nikal sakti hai, 100% best hai
                  height: "300px",
                  objectFit: "cover",
                  borderRadius: "20px", // 50px thoda zyada round tha, premium look k liye 20px behtar hai
                  marginBottom: "20px"
                }}
              />

              <div>
                <p className="about-text">
                  Jobhive is a modern professional React-based job portal platform 
                  specially designed for developers, designers and IT professionals.
                  <br /><br />
                  Our platform helps users explore the latest technology careers including 
                  React Developer, Cloud Architect, UI/UX Designer, Backend Engineer, 
                  Full Stack Developer and Cyber Security jobs.
                  <br /><br />
                  This website provides detailed job descriptions, company profiles, 
                  analytics and responsive UI experience for both laptop and mobile users.
                </p>

                <div className="hero-buttons">
                  <button>Explore Posts</button>
                  <button className="outline-btn">Learn More</button>
                </div>

                <div className="stats-grid">
                  <div className="stat-card">
                    <h2>120+</h2>
                    <p>Job Offers</p>
                  </div>

                  <div className="stat-card">
                    <h2>45K+</h2>
                    <p>Active Users</p>
                  </div>

                  <div className="stat-card">
                    <h2>15+</h2>
                    <p>Categories</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>

      {/* 3. Footer */}
      <Footer />
    </div>
  );
}