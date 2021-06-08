import React, { useState } from 'react'

const Form = () => {
  const [name, setName] = useState('');
  const [age, setAge] = useState('');

  const validate = (e) => {
    e.preventDefault();
    console.log('submit ok');
    if (!name.trim()) {
      console.log('Name is empty..');
      return;
    }
    if (!age.trim()) {
      console.log('Age is empty..');
      return;
    }
  };

  return (
    <div className="container mt-3">
      <h2>Form</h2>
      <form onSubmit={validate}>
        <div className="mb-3">
          <label htmlFor="name" className="form-label">Name</label>
          <input 
            className="form-control" 
            id="name" 
            onChange={ (e) => { setName(e.target.value) }}
            type="text" 
          />
        </div>
        <div className="mb-3">
          <label htmlFor="age" className="form-label">Age</label>
          <input 
            className="form-control" 
            id="age"
            onChange={ (e) => { setAge(e.target.value) }}
            type="text" 
          />
        </div>
        <button type="submit" className="btn btn-primary">Submit</button>
      </form>
    </div>
  )
}

export default Form;
