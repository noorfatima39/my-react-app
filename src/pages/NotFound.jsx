"use client";
import React from "react";
import Link from "next/link";

export default function NotFound() {
  return (
    <div style={{ textAlign: "center", padding: "50px" }}>
      <h1 style={{ fontSize: "72px", margin: "0" }}>404</h1>
      <h2>Page Not Found</h2>
      <p>Oops! The page you are looking for does not exist.</p>
      <Link href="/" style={{ color: "#0070f3", textDecoration: "underline", fontSize: "18px" }}>
        Back to Home
      </Link>
    </div>
  );
}