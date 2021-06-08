import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

const Users = () => {
  const [users, setUsers] = useState([]);

  const getUsers = async() => {
    const res = await axios.get('https://jsonplaceholder.typicode.com/users');
    const users = await res.data;
    setUsers(users);
  }

  useEffect ( () => {
    getUsers();
  },[])

  return (
    <div className="container mt-3">
      <h1>Users</h1>
      <ul className="list-group">
        {
          users.map( (item, index ) => 
            <Link to={`/user/${item.id}`} key={ index } className="list-group-item list-group-item-action">
              { item.id }. { item.name }
            </Link>
          )
        }
      </ul>
    </div>
  )
}

export default Users;