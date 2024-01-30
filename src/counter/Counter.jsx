
import React, { useState } from 'react'

const Counter = () => {
  const[counter,setCounter]=useState('')
  const handleAdd =()=>{
    setCounter(counter+1)
  }
  const handleSub=()=>{
    setCounter(counter-1)
  }
  return (
    <div>
      <h1>Counter:{counter}</h1>
      <h1>Counter:{counter}</h1>
      <button onClick={handleSub}>decr</button>count
      <button onClick={handleAdd}>incr</button>
      
    </div>
  )
  

}

export default Counter