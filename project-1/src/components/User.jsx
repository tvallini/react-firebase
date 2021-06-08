import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';

const User = () => {
  const { id } = useParams();
  const [user, setUser] = useState([]);

  const getUser = async() => {
    const res = await axios.get(`https://jsonplaceholder.typicode.com/users/${id}`);
    const user = await res.data;
    setUser(user);
  }

  useEffect ( () => {
    getUser();
  },[])

  return (
    <div className="container mt-3">
        <div className="col mb-3">
          <div className="card">
            <div className="card-body">
              <div className="d-flex flex-column align-items-center text-center">
                <img src="https://bootdey.com/img/Content/avatar/avatar7.png" alt="Admin" className="rounded-circle" width="150" />
                <div className="mt-3">
                  <h4>{ user.name }</h4>
                  <p className="text-secondary mb-1">@{ user.username }</p>
                  {/* <p className="text-muted font-size-sm">
                    { user.address.street },
                    { user.address.suite },
                    { user.address.city } <br />  
                    { user.address.zipcode } <br />
                    ({ user.address.geo.lat }-{ user.address.geo.lng })
                  </p> */}
                  <button className="btn btn-primary">Follow</button>
                  <button className="btn btn-outline-primary">Message</button>
                </div>
              </div>
            </div>
          </div>
          <div className="card mt-3">
            <ul className="list-group list-group-flush">
              <li className="list-group-item d-flex justify-content-between align-items-center flex-wrap">
                <h6 className="mb-0">
                  Website
                </h6>
                <span className="text-secondary">{ user.website } </span>
              </li>
              <li className="list-group-item d-flex justify-content-between align-items-center flex-wrap">
                <h6 className="mb-0">
                  Email
                </h6>
                <span className="text-secondary">{ user.email }</span>
              </li>
              <li className="list-group-item d-flex justify-content-between align-items-center flex-wrap">
                <h6 className="mb-0">
                  Phone
                </h6>
                <span className="text-secondary">{ user.phone }</span>
              </li>
              {/* <li className="list-group-item d-flex justify-content-between align-items-center flex-wrap">
                <h6 className="mb-0">
                  Company
                </h6>
                <span className="text-secondary">{ user.company.name }, { user.company.catchPhrase }, { user.company.bs }</span> 
              </li> */}
            </ul>
          </div>
        </div>
    </div>
  )
}

export default User;