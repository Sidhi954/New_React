import { useState } from 'react'
import './App.css'

function App() {

  let [counter,setCounter] =useState(0)

  // let counter=15

  const addValue=()=>{
    // console.log("Clicked", counter);
    // counter=counter+1
    if(counter==20) return;
    else{
      setCounter(counter+1)
    }
  }

  const removeValue=()=>{
    if(counter==0){
      return
    }
    else{
      setCounter(counter-1)
    }
  }
  return (
    <>
      <h1>Chai aur React</h1>
      <h2>Counter Value: {counter}</h2>

      <button onClick={addValue}>Add Value {counter}</button><br />
      <button onClick={removeValue}>Remove value {counter}</button>
    </>
  )
}

export default App
