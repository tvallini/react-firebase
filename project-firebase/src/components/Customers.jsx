import React, { useState, useEffect } from 'react';
import { store } from '../firebaseconfig';


const Customers = () => {
  const [customers, setCustomers] = useState([]);

  useEffect( ()=> {
    const getCustomers = async() => {
      const { docs } = await store.collection('customers').get();
      const newCustomers = docs.map( item => ({ id: item.id, ...item.data()}));
      setCustomers(newCustomers);
    }
    getCustomers();
  },[])

  const deleteCustomer = (id) => {
    const newCustomers = customers.filter( item => item.id !== id );
    setCustomers(newCustomers);
  }


  return (
    <div className="container mt-3">
      <h2>List Customers</h2>
      {
        customers.length !== 0 ?
        (
          <ul className="list-group">
            {
              customers.map( (item, index ) => 
                <li key={ item.id } className="list-group-item">
                  { item.name } ({ item.age })
                  <button 
                    className="btn btn-sm btn-danger float-end"
                    onClick={ () => deleteCustomer(item.id) }
                  >delete</button>
                </li>
              )
            }
          </ul>
        ):(
          <span>No customers.</span>
        )
      }
    </div>
  )
}

export default Customers;
