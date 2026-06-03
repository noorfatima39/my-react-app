"use client";
import React from "react";
import Link from "next/link";
import { useRouter, usePathname } from "next/navigation";

export default function Sidebar() {
  const router = useRouter();
  const pathname = usePathname();

  return (
    <div className="sidebar">
      <h2 className="sidebar-logo">JOBHIVE</h2>

      <div className="sidebar-links">
        {/* Yahan href ko theek kar diya taake sahi pages khulein */}
        <Link href="/" className={pathname === "/" ? "active" : ""}>
          Home
        </Link>

        <Link href="/about" className={pathname === "/about" ? "active" : ""}>
          About
        </Link>

        <Link href="/posts" className={pathname === "/posts" ? "active" : ""}>
          Jobs
        </Link>

        <Link href="/users" className={pathname === "/users" ? "active" : ""}>
          Users
        </Link>
      </div>

      <div className="sidebar-bottom">
        {/* Profile aur Logout ke sahi paths set karein jahan aap bhejna chahein */}
        <button onClick={() => router.push("/profile")}>
          Profile
        </button>

        <button onClick={() => router.push("/login")}>
          Logout
        </button>
      </div>
    </div>
  );
}