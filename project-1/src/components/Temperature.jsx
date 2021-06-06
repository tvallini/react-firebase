import React, { useState } from 'react'

const Temperature = () => {
  const [temperature, setTemperature] = useState(19);
  const Increase = () => {
    setTemperature(temperature + 1)
  };

  const Decrease = () => {
    setTemperature(temperature - 1)
  };

  return (
    <>
      <div className="container">
        <h2>
          The temperature is: { temperature }°C 
          {
            temperature > 21 ? 
              <span class="badge bg-danger">hot</span> :
              <span class="badge bg-info">cold</span>
          }
        </h2>
        <button className="btn btn-outline-success" onClick={ Increase }>+</button>
        <button className="btn btn-outline-danger" onClick={ Decrease }>-</button>
      </div>
    </>
  )
}

export default Temperature;
