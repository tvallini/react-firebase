import React, { useState } from 'react'

const List = () => {
  const [numbers, setNumbers] = useState([1,2,3,4,5,6]);

  return (
    <>  
      <ul className="list-group">
        {
          numbers.map( (item, index) => 
            <li key={ index } className="list-group-item">
              { item }
            </li>
          )
        }
      </ul>
    </>
  )
}

export default List;