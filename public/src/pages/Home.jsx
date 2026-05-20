import React, { useState } from "react";

export default function Home() {

  const [showPosts, setShowPosts] = useState(false);
  const [showLearn, setShowLearn] = useState(false);

   

  return (
    <div className="home-page">

      <div className="hero-section">

        <div>

          <p className="small-title">
            MOST POPULAR JOB PORTAL
          </p>

          <h1>
            Discover Amazing
            <br />
            Career Opportunities
          </h1>

          <p className="hero-text">
            Find top tech careers including
            React Developer, Cloud Engineer,
            UI/UX Designer and Full Stack jobs.
          </p>

          <div className="hero-buttons">

            <button
              className="hero-btn"
              onClick={() => setShowPosts(true)}
            >
              Explore Posts
            </button>

            <button
              className="outline-btn"
              onClick={() => setShowLearn(true)}
            >
              Learn More
            </button>

      </div>

  

        

        </div>

        <img
          src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=1920&q=80"
          alt=""
          style={{
            width: "90%",
            height: "300px",
            objectFit: "cover",
            borderRadius: "10px"
          }}
        />

      </div>

      <div className="feature-grid">

        <div className="feature-card">
          120+ Job Offers
        </div>

        <div className="feature-card">
          45K+ Active Users
        </div>

        <div className="feature-card">
          15+ Categories
        </div>

      </div>

      {/* POSTS POPUP */}

      {showPosts && (
        <div
          className="popup-overlay"
          onClick={() => setShowPosts(false)}
        >

          <div
            className="popup-card"
            onClick={(e) => e.stopPropagation()}
          >

            <div className="popup-header">

              <h2>Trending Job Posts</h2>

              <button onClick={() => setShowPosts(false)}>
                ✕
              </button>

            </div>

            <div className="posts-grid">

              <div className="job-card">

                <img
                  src="https://images.unsplash.com/photo-1498050108023-c5249f4df085"
                  alt=""
                />

                <h3>React Developer</h3>

                <p>
                  Frontend developer required for modern UI projects.
                </p>

                <button>Apply Now</button>

              </div>

              <div className="job-card">

                <img
                  src="https://images.unsplash.com/photo-1552664730-d307ca884978"
                  alt=""
                />

                <h3>UI/UX Designer</h3>

                <p>
                  Create beautiful user experiences and mobile designs.
                </p>

                <button>Apply Now</button>

              </div>

              <div className="job-card">

                <img
                  src="https://images.unsplash.com/photo-1516321318423-f06f85e504b3"
                  alt=""
                />

                <h3>Cloud Engineer</h3>

                <p>
                  Manage AWS infrastructure and cloud deployment.
                </p>

                <button>Apply Now</button>

              </div>

            </div>

          </div>

        </div>
      )}

      {/* LEARN MORE POPUP */}

      {showLearn && (
        <div
          className="popup-overlay"
          onClick={() => setShowLearn(false)}
        >

          <div
            className="learn-card"
            onClick={(e) => e.stopPropagation()}
          >

            <div className="popup-header">

              <h2>About JOBHIVE</h2>

              <button onClick={() => setShowLearn(false)}>
                ✕
              </button>

            </div>

            <div className="learn-content">

              <div className="learn-box">

                <h3>🚀 Modern Jobs</h3>

                <p>
                  Find latest tech jobs including React,
                  AI, UI/UX, Full Stack and Cloud Engineering.
                </p>

              </div>

              <div className="learn-box">

                <h3>💼 Trusted Companies</h3>

                <p>
                  Connect with verified companies and startups worldwide.
                </p>

              </div>

              <div className="learn-box">

                <h3>⚡ Fast Hiring</h3>

                <p>
                  Apply instantly with modern hiring experience.
                </p>

              </div>

            </div>

          </div>

        </div>
      )}

    </div>
  );
}