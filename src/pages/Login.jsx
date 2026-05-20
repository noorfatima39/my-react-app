import React from "react";
import { useNavigate } from "react-router-dom";

export default function Login() {

  const navigate = useNavigate();

  return (
    <div className="login-page">

      <div className="login-card">

        <h1>
          Welcome Back!
        </h1>

        <input
          type="email"
          placeholder="Email Address"
        />

        <input
          type="password"
          placeholder="Password"
        />

        <button
          onClick={() => navigate("/home")}
        >
          Login
        </button>

      </div>

    </div>
  );
}