import React, { useState, useEffect } from 'react';
import { store } from '../firebaseconfig';
import { Edit, Save, Trash2 } from 'react-feather';


const Form = () => {
  const [idCustomer, setIdCustomer] = useState('');
  const [name, setName] = useState('');
  const [age, setAge] = useState('');
  const [msgError, setMsgError] = useState('');
  const [customers, setCustomers] = useState([]);
  const [editMode, setEditMode] = useState(false);

  const addCustomer = async (e) => {
    e.preventDefault();
    const customer = {
      name: name,
      age: age
    }
    if (!name.trim()) {
      setMsgError('Name is empty..');
      return;
    } else {
      setMsgError('');
    }
    if (!age.trim()) {
      setMsgError('Age is empty..');
      return;
    } else {
      setMsgError('');
    }

    try {
      const data = await store.collection('customers').add(customer);
      getCustomers();
    } catch (error) {
      console.log(error);
    }
    setName('');
    setAge('');
  }

  const getCustomers = async() => {
    const { docs } = await store.collection('customers').get();
    const newCustomers = docs.map( item => ({ id: item.id, ...item.data()}));
    setCustomers(newCustomers);
  }

  useEffect( ()=> {
    getCustomers();
  },[])

  const deleteCustomer = (id) => {
    const newCustomers = customers.filter( item => item.id !== id );
    setCustomers(newCustomers);
  }

  // copy value to inputs
  const editCustomer = async (id) => {
    try {
      const data = await store.collection('customers').doc(id).get()
      const {name, age } = data.data()
      setName(name)
      setAge(age)
      setIdCustomer(id)
      setEditMode(true);
    } catch (error) {
      console.log(error);
    }    
  }

  const updateCustomer = async (e) => {
    e.preventDefault()
    
    if (!name.trim()) {
      setMsgError('Name is empty..');
      return;
    } else {
      setMsgError('');
    }
    if (!age.trim()) {
      setMsgError('Age is empty..');
      return;
    } else {
      setMsgError('');
    }

    const newCustomer = {
      name: name,
      age: age
    }

    try {
      await store.collection('customers').doc(idCustomer).set(newCustomer)
      getCustomers()
    } catch (error) {
      console.log(error)
    }
    setName('');
    setAge('');
    setEditMode(false);
  }

  return (
    <div className="container mt-3">
      <div className="row mt-4">
        <div className="col-6">
          <h2>Add Customer</h2>
          <form onSubmit={ editMode ? updateCustomer : addCustomer } className="mt-4">
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
            <button type="submit" className="btn btn-primary">
              <Save size={16} /> Save
            </button>
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
        <div className="col-6">
          <h2>List Customers</h2>
          {
            customers.length !== 0 ?
            (
              <ul className="list-group">
                {
                  customers.map( (item, index ) => 
                    <li key={ item.id } className="list-group-item">
                      { item.name } ({ item.age }y)
                      <div className="float-end">
                        <Edit 
                          color="green" 
                          onClick={ () => editCustomer(item.id) }
                          role="button"
                          size={24} 
                        />
                        <Trash2 
                          className='ms-2'
                          color="red" 
                          onClick={ () => deleteCustomer(item.id) }
                          role="button"
                          size={24} 
                        />
                      </div>
                    </li>
                  )
                }
              </ul>
            ):(
              <span>No customers.</span>
            )
          }
        </div>
      </div>
    </div>
  )
}

export default Form;
