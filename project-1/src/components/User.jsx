import React from 'react';
import { useParams } from 'react-router-dom';

const User = () => {
  const { name } = useParams();
  return (
    <div className="container mt-3">
      <h1>Testing useParams</h1>
      <h2>Hello { name } !</h2>
    </div>
  )
}

export default User;