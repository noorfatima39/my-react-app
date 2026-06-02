"use client"; // Client component banane ke liye taaki loading state handle ho sake

import { useEffect, useState, use } from "react";
import Loader from "../components/Loader"; 
// Ya fir agar files ka structure badla hai toh:
// import Loader from "../components/Loader";
function UserDetails({ params }) {
  // Next.js App Router mein params ek Promise hota hai async router mein
  const unwrappedParams = use(params);
  const id = unwrappedParams.id;

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
  if (!user) return <p>User not found!</p>;

  return (
    <div className="details-wrapper">
      <div className="details-card">
        <div className="details-top">
          <img
            src={`https://i.pravatar.cc/200?img=${id % 70}`}
            alt={user.name || "User Avatar"}
          />
          <div>
            <h2>{user.name}</h2>
            <p>{user.email}</p>
            <span className="active">Active</span>
          </div>
        </div>

        <div className="details-grid">
          <div className="detail-item">
            <h4>User ID</h4>
            <p>{id}</p>
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
            <p>{user.website}</p>
          </div>

          <div className="detail-item">
            <h4>Company</h4>
            <p>{user.company?.name}</p> 
          </div>

          <div className="detail-item">
            <h4>Address</h4>
            <p>{user.address?.city}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default UserDetails;