import React from "react";
import PostCard from "../components/PostCard";

const posts = [
  {
    id: 1,
    title: "React Developer",
    desc: "Frontend React developer required for modern web apps.",
    image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085"
  },
  {
    id: 2,
    title: "Cloud Architect",
    desc: "AWS cloud architect required for scalable systems.",
    image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa"
  },
  {
    id: 3,
    title: "UI/UX Designer",
    desc: "Creative UI/UX designer with Figma experience.",
    image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3"
  },
  {
    id: 4,
    title: "Cloud Developer",
    desc: "Cloud developer required with DevOps skills.",
    image: "https://images.unsplash.com/photo-1518770660439-4636190af475"
  },
  {
    id: 5,
    title: "Backend Developer",
    desc: "Node.js backend developer for APIs and databases.",
    image: "https://images.unsplash.com/photo-1516321165247-4aa89a48be28"
  },
  {
    id: 6,
    title: "Cyber Security Expert",
    desc: "Security engineer required for enterprise systems.",
    image: "https://images.unsplash.com/photo-1563986768609-322da13575f3"
  }
];

export default function Posts() {
  return (
    <div>
      <h1 className="posts-title">All Jobs</h1>

      {/* Grid container jisme saare cards show honge */}
      <div className="posts-grid">
        {posts.map((post) => (
          <PostCard key={post.id} post={post} />
        ))}
      </div>
    </div>
  );
}