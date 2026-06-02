"use client";
import React from "react";
import Link from "next/link";
import { useRouter, usePathname } from "next/navigation";

export default function Sidebar() {
  const router = useRouter();
  const pathname = usePathname(); // Yeh check karega ke kaunsa page active hai

  return (
    <div className="sidebar">

      <h2 className="sidebar-logo">
        JOBHIVE
      </h2>

      <div className="sidebar-links">

        <Link href="/" className={pathname === "/" ? "active" : ""}>
          Home
        </Link>

        <Link href="/" className={pathname === "/about" ? "active" : ""}>
          About
        </Link>

        <Link href="/" className={pathname === "/posts" ? "active" : ""}>
          Jobs
        </Link>

        <Link href="/" className={pathname === "/categories" ? "active" : ""}>
          Categories
        </Link>
        
        <Link href="/" className={pathname === "/users" ? "active" : ""}>
          Users     
        </Link>
         
      </div>

      <div className="sidebar-bottom">

        {/* Next.js mein router.push use hota hai redirect karne ke liye */}
        <button onClick={() => router.push("/")}>
          Profile
        </button>

        <button onClick={() => router.push("/")}>
          Logout
        </button>

      </div>

    </div>
  );
}