import React, { useState, useEffect } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { auth } from '../firebaseconfig';

const Nav = () => {
  const history = useHistory();
  const [user, setUser] = useState(null);

  useEffect(() => {
    auth.onAuthStateChanged ( (user) => {
      if (user) {
        setUser(user.email)
      }
    })      
  }, [])

  const Logout = () => {
    auth.signOut()
    setUser(null)
    history.push('/login');
  }

  return (
    <nav className="navbar navbar-expand navbar-dark bg-primary">
      <div className="container-fluid">
        <Link to="/" className="navbar-brand">Project Firebase</Link>
        <div>
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link to="/" className="nav-link">Home</Link>
            </li>                       
            {
              user ? (
                <li className="nav-item">
                  <Link 
                    className="nav-link"
                    style={{backgroundColor: "#dc3545", borderRadius: "0.25rem"}}
                    onClick={Logout}
                  >
                    Logout
                  </Link>
                </li>
              ):(
                <>
                  <li className="nav-item">
                    <Link to="/login" className="nav-link">Login</Link>
                  </li>
                  <li className="nav-item">
                    <Link to="/admin" className="nav-link">Admin</Link>
                  </li> 
                </>
              )
            }
          </ul>
        </div>
      </div>
    </nav>
  )
}

export default Nav;
