"use client"; // Next.js mein interactivity aur hooks ke liye yeh sab se top par zaroori hai

import React from "react";
import { useRouter } from "next/navigation"; // Fake hook ki jagah asli Next.js router use karte hain jo sahi kaam karega

 function Login() {
  const router = useRouter(); // Is se aapka page click par navigate karega

  return (
    <div className="login-page">
      <div className="login-card">
        <h1>Welcome Back!</h1>

        <input
          type="email"
          placeholder="Email Address"
        />

        <input
          type="password"
          placeholder="Password"
        />

        {/* Next.js mein navigate("/home") ki jagah router.push("/home") use hota hai */}
        <button
          onClick={() => router.push("/home")}
        >
          Login
        </button>
      </div>
    </div>
  );
}
// Aap ke component ka jo bhi naam hai (jaise Login), usay export default karein
export default Login;