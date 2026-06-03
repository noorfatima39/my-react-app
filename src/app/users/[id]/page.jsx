"use client";

import { useEffect, useState } from "react";
import { useParams } from "next/navigation"; // Correct hook for App Router
import Loader from "../../../components/Loader"; //  Yeh sahi hai

function UserDetails() {
  // useParams() automatically client-side par URL parameters nikaal leta hai
  const params = useParams();
  const id = params?.id; 

  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!id) return;

    fetch(`https://jsonplaceholder.typicode.com/users/${id % 10 || 1}`)
      .then((res) => res.json())
      .then((data) => {
        setUser(data);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Error fetching user data:", err);
        setLoading(false);
      });
  }, [id]);

  if (loading) return <Loader />;
  if (!user) return <p className="error-text">User not found!</p>;

  return (
    <div className="details-wrapper">
      {/* Premium Glassmorphic Card */}
      <div className="details-card">
        <div className="details-top">
          <div className="avatar-wrapper">
            <img
              src={`https://i.pravatar.cc/200?img=${id % 70 || 1}`}
              alt={user.name || "User Avatar"}
              className="user-avatar"
            />
            <span className="status-badge active">Active</span>
          </div>
          <div className="profile-meta">
            <h2>{user.name}</h2>
            <p className="user-email">{user.email}</p>
          </div>
        </div>

        <hr className="card-divider" />

        <div className="details-grid">
          <div className="detail-item">
            <h4>User ID</h4>
            <p>#{id}</p>
          </div>

          <div className="detail-item">
            <h4>Username</h4>
            <p>{user.username}</p>
          </div>

          <div className="detail-item">
            <h4>Phone</h4>
            <p>{user.phone}</p>
          </div>

          <div className="detail-item">
            <h4>Website</h4>
            <p className="luxury-link">{user.website}</p>
          </div>

          <div className="detail-item">
            <h4>Company</h4>
            <p>{user.company?.name || "N/A"}</p>
          </div>

          <div className="detail-item">
            <h4>Address</h4>
            <p>{user.address?.city || "N/A"}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default UserDetails;