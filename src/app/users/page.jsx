"use client"; // State aur Effect use karne ke liye Client Component zaroori hai

import { useEffect, useState } from "react";
// react-router-dom ke Link ko Next.js ke Link se replace kiya
import Link from "next/link"; 
import Loader from "../../components/Loader"; //  Yeh sahi hai (Do baar ../ aayega)
function Users() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => res.json())
      .then((data) => {
        setUsers(data);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Error fetching users:", err);
        setLoading(false);
      });
  }, []);

  if (loading) return <Loader />;

  return (
    <div>
      <div className="top-bar">
        <h1>Users</h1>
        <button>Add User</button>
      </div>

      <div className="table-box">
        <table>
          <thead>
            <tr>
              <th>#</th>
              <th>Name</th>
              <th>Email</th>
              <th>Role</th>
              <th>Status</th>
              <th>Actions</th> {/* Table structure clean rakhne ke liye header add kiya */}
            </tr>
          </thead>
          <tbody>
            {users.map((user) => (
              <tr key={user.id}>
                <td>{user.id}</td>
                <td>
                  <div className="user-info">
                    <img
                      src={`https://i.pravatar.cc/100?img=${user.id}`}
                      alt={user.name}
                    />
                    {user.name}
                  </div>
                </td>
                <td>{user.email}</td>
                <td>
                  <span className="role">Admin</span>
                </td>
                <td>
                  <span className="active">Active</span>
                </td>
                <td>
                  {/* Next.js ka Link element bilkul React Router jaisa hi href leta hai */}
                  <Link href={`/users/${user.id}`}>
                    <span>→</span>
                  </Link>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Users;