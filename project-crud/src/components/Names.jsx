import React, { useState } from 'react';
import uniqid from 'uniqid';

const Names = () => {
  const [name, setName] = useState('');
  const [names, setNames] = useState([]);

  const addName = (e) => {
    e.preventDefault();
    const newName = {
      id: uniqid(),
      name: name
    }
    setNames([...names, newName]);
  }

  return (
    <div className="container">
      <h1>CRUD basic</h1>
      <div className="row">
        <div className="col">
          <h2>Names</h2>
        </div>
        <div className="col">
          <h2>Form</h2>
          <form className="row g-2" onSubmit={ (e) => { addName(e) } }>
            <div className="col-auto">
              <input 
                class="form-control" 
                onChange={ (e)=>{setName(e.target.value)} }
                placeholder="Name" 
                type="text" 
              />
            </div>
            <div className="col-auto">
              <button type="submit" class="btn btn-primary mb-3">Add</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Names;