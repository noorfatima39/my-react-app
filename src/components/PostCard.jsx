import React from "react";
import Link from "next/link";

export default function PostCard({ post }) {
  // Agar post data load na ho rha ho to crash nahi karega
  if (!post) return null; 

  return (
    <div className="post-card">
      <img
        src={post.image || "https://images.unsplash.com/photo-1498050108023-c5249f4df085"}
        alt={post.title || "Job Image"}
      />

      <div className="post-content">
        <h3>{post.title}</h3>
        <p>{post.desc}</p>

        <Link href={`/posts/${post.id}`}>
          <button>Read More</button>
        </Link>
      </div>
    </div>
  );
}