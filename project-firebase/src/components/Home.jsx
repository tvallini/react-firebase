import React from 'react';
import Form from './Form';

const Home = () => {
  return (
    <div>
      <nav className="p-2" aria-label="breadcrumb">
        <ol className="breadcrumb">
          <li className="breadcrumb-item active" aria-current="page">Home</li>
        </ol>
      </nav>
      <div className="container-md">
        <div className="row mt-4 justify-content-center">
          <div className="col-6">
            <Form />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home;