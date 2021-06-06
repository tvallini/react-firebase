import React, { useState } from 'react'

export const Counter = () => {
  const [number, setNumber] = useState(0);
  const Increase = () => {
    setNumber(number + 1)
  };

  const Decrease = () => {
    setNumber(number - 1)
  };

  return (
    <>
      <h2>Counter: { number }</h2>
      <button onClick={ Increase }>+</button>
      <button onClick={ Decrease }>-</button>
    </>
  )
}

export default Counter;
