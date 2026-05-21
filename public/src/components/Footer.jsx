import React from "react";

export default function Footer() {
  return (
    <footer className="footer">

      {/* Brand Section */}
      <div>
        <h3>DevSphere</h3>
        <p>
          Crafting modern web experiences with clean engineering and premium user interfaces.
        </p>
      </div>

      {/* Quick Links Section */}
      <div>
        <h4>Quick Links</h4>
        <p><a href="/" style={{ color: "inherit", textDecoration: "none" }}>Home</a></p>
        <p><a href="/posts" style={{ color: "inherit", textDecoration: "none" }}>Posts</a></p>
        <p><a href="/contact" style={{ color: "inherit", textDecoration: "none" }}>Contact</a></p>
      </div>

      {/* Socials Section */}
      <div>
        <h4>Follow Us</h4>
        <p><a href="https://instagram.com" target="_blank" rel="noreferrer" style={{ color: "inherit", textDecoration: "none" }}>Instagram</a></p>
        <p><a href="https://facebook.com" target="_blank" rel="noreferrer" style={{ color: "inherit", textDecoration: "none" }}>Facebook</a></p>
        <p><a href="https://twitter.com" target="_blank" rel="noreferrer" style={{ color: "inherit", textDecoration: "none" }}>Twitter</a></p>
      </div>

    </footer>
  );
}