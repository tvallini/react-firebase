import React, { useState } from 'react'

const Form = () => {
  const [name, setName] = useState('');
  const [age, setAge] = useState('');

  return (
    <div className="container">
      <h2>Form</h2>
      <form>
        <div className="mb-3">
          <label for="name" className="form-label">Name</label>
          <input 
            className="form-control" 
            id="name" 
            onChange={ (e) => { setName(e.target.value) }}
            type="text" 
          />
        </div>
        <div className="mb-3">
          <label for="age" className="form-label">Age</label>
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
