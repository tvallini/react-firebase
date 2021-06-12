import React from 'react';
import Form from './Form';

const Home = () => {
  return (
    <div>
      <nav className="p-2" aria-label="breadcrumb">
        <ol className="breadcrumb">
          <li className="breadcrumb-item active" aria-current="page">
            Home
          </li>
        </ol>
      </nav>
      <Form />
    </div>
  )
}

export default Home;