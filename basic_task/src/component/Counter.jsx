// state
import React, { useState } from 'react'

function Counter() {
    const [count, setCount] = useState(0)
    const [incrementBy, setIncrementBy] = useState(1)

    function increment(){
        setCount (count + incrementBy);
    }

    function increaseIncrement(){
        setIncrementBy (incrementBy + 1)
    }
  return (
    <div>
      <h1>The Count is: {count}</h1>
      <button type='submit' onClick={increment} >Submit</button>


      {/* Creating Multiple State */}
      <h1>The incrementing value is: {incrementBy}</h1>
      <button type='submit' onClick={increaseIncrement}>Increase Increment</button>
    </div>
  )
}

export default Counter

