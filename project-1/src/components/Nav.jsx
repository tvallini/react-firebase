import React from 'react';
import { Link } from 'react-router-dom';

const Nav = () => {
  return (
    <>  
      <nav className="navbar navbar-expand navbar-dark bg-primary">
        <div className="container-fluid">
          <a className="navbar-brand" href="#">Project 1</a>
          <div>
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link to="/" className="nav-link">Home</Link>
              </li>
              <li className="nav-item">
                <Link to="/counter" className="nav-link">Counter</Link>
              </li>
              <li className="nav-item">
                <Link to="/list" className="nav-link">List</Link>
              </li>
              <li className="nav-item">
                <Link to="/temperature" className="nav-link">Temperature</Link>
              </li>
              <li className="nav-item">
                <Link to="/form" className="nav-link">Form</Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  )
}

export default Nav;
