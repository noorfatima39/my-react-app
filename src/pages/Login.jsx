import React from "react";
import Link from "next/link";

// Fake functions taake aapka puraana login code bina kisi error ke foran chal jaye
const useNavigate = () => () => {};
const Link_Fake = ({ to, children, ...props }) => (
  <Link href={to} {...props}>{children}</Link>
);

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
