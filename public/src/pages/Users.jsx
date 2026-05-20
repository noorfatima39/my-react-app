import { useEffect, useState } from "react";

import { Link } from "react-router-dom";

import Loader from "../components/Loader";

function Users() {

  const [users,setUsers] = useState([]);

  const [loading,setLoading] = useState(true);

  useEffect(()=>{

    fetch("https://jsonplaceholder.typicode.com/users")

    .then((res)=>res.json())

    .then((data)=>{

      setUsers(data);

      setLoading(false);

    });

  },[]);

  if(loading) return <Loader />;

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

            </tr>

          </thead>

          <tbody>

            {users.map((user)=>(

              <tr key={user.id}>

                <td>{user.id}</td>

                <td>

                  <div className="user-info">

                    <img
                      src={`https://i.pravatar.cc/100?img=${user.id}`}
                      alt=""
                    />

                    {user.name}

                  </div>

                </td>

                <td>{user.email}</td>

                <td>
                  <span className="role">
                    Admin
                  </span>
                </td>

                <td>
                  <span className="active">
                    Active
                  </span>
                </td>

                <td>

                  <Link
                    to={`/users/${user.id}`}
                  >
                    →
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