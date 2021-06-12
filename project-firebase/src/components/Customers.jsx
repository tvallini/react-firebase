import React, { useState, useEffect } from 'react';
import { store } from '../firebaseconfig';


const Customers = () => {
  const [customers, setCustomers] = useState([]);

  useEffect( ()=> {
    const getCustomers = async() => {
      const { docs } = await store.collection('customers').get();
      const newArray = docs.map( item => ({ id: item.id, ...item.data()}));
      setCustomers(newArray);
    }
    getCustomers();
  },[])


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
