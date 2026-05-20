import React from "react";
import { useNavigate } from "react-router-dom";

export default function NotFound() {

  const navigate = useNavigate();

  return (
    <div className="not-found-page">

      <h1>
        404
      </h1>

      <p>
        Oops! Page Not Found
      </p>

      <button onClick={() => navigate("/home")}>
        Go Back Home
      </button>

    </div>
  );
}