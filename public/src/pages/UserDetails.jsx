import {
  useEffect,
  useState
} from "react";

import {
  useParams
} from "react-router-dom";

import Loader from "../components/Loader";

function UserDetails(){

  const { id } = useParams();

  const [user,setUser] = useState(null);

  const [loading,setLoading] = useState(true);

  useEffect(()=>{

    fetch(
      `https://jsonplaceholder.typicode.com/users/${id % 10 || 1}`
    )

    .then((res)=>res.json())

    .then((data)=>{

      setUser(data);

      setLoading(false);

    });

  },[id]);

  if(loading) return <Loader />;

  return(

    <div className="details-wrapper">

      <div className="details-card">

        <div className="details-top">

          <img
            src={`https://i.pravatar.cc/200?img=${id % 70}`}
            alt=""
          />

          <div>

            <h2>{user.name}</h2>

            <p>{user.email}</p>

            <span className="active">
              Active
            </span>

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

            <p>{user.company.name}</p>

          </div>

          <div className="detail-item">

            <h4>Address</h4>

            <p>{user.address.city}</p>

          </div>

        </div>

      </div>

    </div>
  );
}

export default UserDetails;