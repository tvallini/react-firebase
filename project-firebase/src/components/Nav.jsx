import React from 'react';
import { Link } from 'react-router-dom';

const Nav = () => {
  return (
    <>  
      <nav className="navbar navbar-expand navbar-dark bg-primary">
        <div className="container-fluid">
          <Link to="/" className="navbar-brand">Project Firebase</Link>
          <div>
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link to="/" className="nav-link">Home</Link>
              </li>
              <li className="nav-item">
                <Link to="/admin" className="nav-link">Admin</Link>
              </li>
              <li className="nav-item">
                <Link to="/login" className="nav-link">Login</Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  )
}

export default Nav;
