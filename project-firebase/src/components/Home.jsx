import React from 'react';
import Form from './Form';
import Customers from './Customers';

const Home = () => {
  return (
    <div>
      <nav className="p-2" aria-label="breadcrumb">
        <ol className="breadcrumb">
          <li className="breadcrumb-item active" aria-current="page">Home</li>
        </ol>
      </nav>
      <div className="container-md">
        <div className="row mt-4">
          <div className="col-6">
            <Form />
          </div>
          <div className="col-6">
            <Customers />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home;