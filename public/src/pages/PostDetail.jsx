import React from "react";
import { useParams } from "react-router-dom";

export default function PostDetail() {

  const { id } = useParams();

  return (
    <div className="detail-page">

      <img
        src="https://images.unsplash.com/photo-1498050108023-c5249f4df085"
        alt=""
      />

      <h1>
        React Developer Position
      </h1>

      <p>
        We are looking for an experienced React Developer
        who can build scalable and responsive modern web
        applications using React.js and modern frontend tools.
      </p>

      <h2>
        Job Description
      </h2>

      <p>
        Candidate will work with frontend teams,
        develop reusable components, optimize performance
        and create modern responsive interfaces.
      </p>

      <h2>
        Responsibilities
      </h2>

      <ul>

        <li>Build scalable React applications</li>

        <li>Create reusable UI components</li>

        <li>API integration and state management</li>

        <li>Performance optimization</li>

        <li>Responsive web design</li>

      </ul>

      <h2>
        Key Requirements
      </h2>

      <ul>

        <li>Strong React.js knowledge</li>

        <li>JavaScript ES6+</li>

        <li>Tailwind CSS / CSS3</li>

        <li>GitHub & Version Control</li>

        <li>Problem solving skills</li>

      </ul>

      <h2>
        Company Profile
      </h2>

      <p>
        NeoJobs is an international tech recruitment
        platform connecting developers with modern
        software companies around the world.
      </p>

      <h2>
        Location
      </h2>

      <p>
        Remote / Dubai / London / USA
      </p>

      <button>
        Apply Now
      </button>

    </div>
  );
}