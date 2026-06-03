"use client";
import React from "react";
import Sidebar from "../../components/Sidebar";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import "../../App.css"; 

export default function ProfilePage() {
  return (
    <div>
      {/* Top Navbar */}
      <Navbar />

      <div style={{ display: "flex" }}>
        {/* Left Sidebar */}
        <Sidebar />
        
        {/* Main Content Area */}
        <main style={{ flex: 1, padding: "30px" }}>
          <div className="profile-container" style={{
            background: "rgba(255, 255, 255, 0.05)",
            backdropFilter: "blur(10px)",
            borderRadius: "15px",
            padding: "40px",
            border: "1px solid rgba(255, 255, 255, 0.1)",
            maxWidth: "600px",
            margin: "40px auto",
            textAlign: "center",
            boxShadow: "0 8px 32px 0 rgba(0, 0, 0, 0.37)"
          }}>
            {/* Big Profile Image with Glass effect border */}
            <img 
              src="https://i.pravatar.cc/150?img=5" 
              alt="User Profile" 
              style={{
                width: "120px",
                height: "120px",
                borderRadius: "50%",
                border: "4px solid rgba(255, 255, 255, 0.2)",
                marginBottom: "20px"
              }}
            />

            <h1 style={{ color: "#fff", marginBottom: "5px", fontSize: "2rem" }}>Noor Fatima</h1>
            <p style={{ color: "#b3b3b3", fontSize: "1rem", marginBottom: "25px" }}>noorfatima39@github</p>

            <div style={{ borderTop: "1px solid rgba(255, 255, 255, 0.1)", paddingTop: "20px" }}>
              <div style={{ display: "flex", justifyContent: "space-between", marginBottom: "15px", color: "#fff" }}>
                <span><strong>Role:</strong></span>
                <span style={{ color: "#e040fb" }}>Premium Member</span>
              </div>
              <div style={{ display: "flex", justifyContent: "space-between", marginBottom: "15px", color: "#fff" }}>
                <span><strong>Applied Jobs:</strong></span>
                <span>12 Jobs</span>
              </div>
              <div style={{ display: "flex", justifyContent: "space-between", color: "#fff" }}>
                <span><strong>Account Status:</strong></span>
                <span style={{ color: "#00e676" }}>✓ Active</span>
              </div>
            </div>
          </div>
        </main>
      </div>

      {/* Bottom Footer */}
      <Footer />
    </div>
  );
}