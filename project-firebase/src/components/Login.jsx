import React, { useState } from 'react'; 
import {auth} from '../firebaseconfig';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [msgError, setMsgError] = useState(null);

  const RegisterUser = (e) => {
    e.preventDefault();
    auth.createUserWithEmailAndPassword(email, password)
    .then( response => alert('usuario registrado') )
    .catch( error => {
      if (error.code === 'auth/invalid-email') {
        setMsgError('Invalid email');
      }
      if (error.code === 'auth/invalid-email') {
        setMsgError('Weak password');
      }
    })
  }

  const LoginUser = () => {
    auth.signInWithEmailAndPassword(email, password)
    .then( response => console.log(response) )
    .catch( error => {

      if (error.code === 'auth/invalid-email') {
        setMsgError('Weak password');
      }
      if (error.code === 'auth/wrong-password') {
        setMsgError('Wrong password');
      }
    })
  }


  return (
    <div className="container-md">
      <div className="row mt-4 justify-content-center">
        <div className="col-6">
          <h2>Login</h2>
          <form onSubmit={RegisterUser}>
            <div className="mb-3">
              <label htmlFor="email" className="form-label">Email address</label>
              <input 
                className="form-control" 
                id="email" 
                onChange={(e)=>{setEmail(e.target.value)}}
                type="email" 
              />
            </div>
            <div className="mb-3">
              <label htmlFor="password" className="form-label">Password</label>
              <input 
                className="form-control" 
                id="password"
                onChange={(e)=>{setPassword(e.target.value)}}
                type="password" 
              />
            </div>            
            <div class="d-grid">
              <button 
                className="btn btn-primary"
                type="submit" 
              >
                Register
              </button>
            </div>
          </form>
          <div class="d-grid mt-2">
            <button 
              className="btn btn-secondary d-block"
              onClick={LoginUser} 
            >
              Login
            </button>
          </div>
          {
            msgError ?
            (
              <div className="alert alert-danger mt-2">
                { msgError }
              </div>
            )
            :
            (
              <span></span>
            )
          }
        </div>
      </div>
    </div>
  )
}

export default Login
