"use client";
import React from "react";
import Link from "next/link";

export default function PostDetail() {
  return (
    <div className="detail-page" style={{ padding: "20px" }}>
      
      {/* Back Button Next.js ke mutabik */}
      <Link href="/" style={{ color: "#0070f3", textDecoration: "none", display: "inline-block", marginBottom: "20px" }}>
        ← Back to Dashboard
      </Link>

      <img
        src="https://images.unsplash.com/photo-1498050108023-c5249f4df085"
        alt="React Developer Position"
        style={{ width: "100%", maxHeight: "300px", objectFit: "cover", borderRadius: "12px", marginBottom: "20px" }}
      />

      <h1 style={{ fontSize: "28px", color: "#fff", marginBottom: "15px" }}>
        React Developer Position
      </h1>

      <p style={{ color: "rgba(255, 255, 255, 0.7)", lineHeight: "1.6" }}>
        We are looking for an experienced React Developer
        who can build scalable and responsive modern web
        applications using React.js and modern frontend tools.
      </p>

      <h2 style={{ fontSize: "20px", color: "#fff", marginTop: "20px" }}>
        Job Description
      </h2>

      <p style={{ color: "rgba(255, 255, 255, 0.7)", lineHeight: "1.6" }}>
        Candidate will work with frontend teams,
        develop reusable components, optimize performance
        and create modern responsive interfaces.
      </p>

      <h2 style={{ fontSize: "20px", color: "#fff", marginTop: "20px" }}>
        Responsibilities
      </h2>

      <ul style={{ color: "rgba(255, 255, 255, 0.7)", paddingLeft: "20px", lineHeight: "1.8" }}>
        <li>Build scalable React applications</li>
        <li>Create reusable UI components</li>
        <li>API integration and state management</li>
        <li>Performance optimization</li>
        <li>Responsive web design</li>
      </ul>

      <h2 style={{ fontSize: "20px", color: "#fff", marginTop: "20px" }}>
        Key Requirements
      </h2>

      <ul style={{ color: "rgba(255, 255, 255, 0.7)", paddingLeft: "20px", lineHeight: "1.8" }}>
        <li>Strong React.js knowledge</li>
        <li>JavaScript ES6+</li>
        <li>Tailwind CSS / CSS3</li>
        <li>GitHub & Version Control</li>
        <li>Problem solving skills</li>
      </ul>

      <h2 style={{ fontSize: "20px", color: "#fff", marginTop: "20px" }}>
        Company Profile
      </h2>

      <p style={{ color: "rgba(255, 255, 255, 0.7)", lineHeight: "1.6" }}>
        NeoJobs is an international tech recruitment
        platform connecting developers with modern
        software companies around the world.
      </p>

      <h2 style={{ fontSize: "20px", color: "#fff", marginTop: "20px" }}>
        Location
      </h2>

      <p style={{ color: "rgba(255, 255, 255, 0.7)", marginBottom: "25px" }}>
        Remote / Dubai / London / USA
      </p>

      <button style={{ 
        background: "#0070f3", 
        color: "#fff", 
        padding: "12px 24px", 
        border: "none", 
        borderRadius: "8px", 
        cursor: "pointer",
        fontSize: "16px",
        fontWeight: "bold"
      }}>
        Apply Now
      </button>

    </div>
  );
}
  