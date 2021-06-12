import React, { useState } from 'react';
import { store } from '../firebaseconfig';


const Form = () => {
  const [name, setName] = useState('');
  const [age, setAge] = useState('');
  const [msgError, setMsgError] = useState('');

  const setCustomers = async (e) => {
    e.preventDefault();
    if (!name.trim()) {
      setMsgError('Name is empty..');
      return;
    }
    if (!age.trim()) {
      setMsgError('Age is empty..');
      return;
    }
    const customer = {
      name: name,
      age: age
    }
    try {
      const data = await store.collection('customers').add(customer);
      setMsgError('');
    } catch (error) {
      console.log(error);
    }
    setName('');
    setAge('');
  }

  return (
    <div className="container mt-3">
      <h2>Add Customer</h2>
      <form onSubmit={setCustomers} className="mt-4">
        <div className="mb-3">
          <input 
            className="form-control" 
            id="name" 
            onChange={ (e) => { setName(e.target.value) }}
            placeholder="Name"
            type="text" 
            value={ name }
          />
        </div>
        <div className="mb-3">
          <input 
            className="form-control" 
            id="age"
            onChange={ (e) => { setAge(e.target.value) }}
            placeholder="Age"
            type="number" 
            value={ age }
          />
        </div>
        <button type="submit" className="btn btn-primary">Save</button>
      </form>
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
  )
}

export default Form;
