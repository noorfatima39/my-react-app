import React from "react";
import Link from "next/link";

export default function PostCard({ post }) {

  return (
    <div className="post-card">

      <img
        src={post.image}
        alt=""
      />

      <div className="post-content">

        <h3>
          {post.title}
        </h3>

        <p>
          {post.desc}
        </p>

        <Link to={`/posts/${post.id}`}>

          <button>
            Read More
          </button>

        </Link>

      </div>

    </div>
  );
}