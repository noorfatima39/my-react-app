import React from "react";

export default function About() {

  return (
    <div className="about-page">

      <h1>
        About Our Website
      </h1>

      <div className="about-content">

       <img
  
  src="https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=1920&q=80"
  alt=""
  style={{
    width: "200%",
    height: "300px",
    objectFit: "cover",
    borderRadius: "50px"
  }}
/>

        <div>

          <p className="about-text">

            Jobhive is a modern professional React-based
            job portal platform specially designed for
            developers, designers and IT professionals.

            Our platform helps users explore the latest
            technology careers including React Developer,
            Cloud Architect, UI/UX Designer, Backend Engineer,
            Full Stack Developer and Cyber Security jobs.

            This website provides detailed job descriptions,
            company profiles, analytics and responsive UI
            experience for both laptop and mobile users.

          </p>

          <div className="hero-buttons">

            <button>
              Explore Posts
            </button>

            <button className="outline-btn">
              Learn More
            </button>

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
  );
}