import { useState } from 'react';
import './App.css'

function App() {
  
  let [counter, setCounter] = useState(15)


  // let counter = 5;
 
  const addValue = () => {
    // counter = counter + 1
    if(counter==20){
      setCounter(counter)
    }else{
    setCounter(counter+1)
    }
  }
  const removeValue = () => {
    if(counter==0){
      setCounter(counter)
    }else{
    setCounter(counter-1)
    }
  }
  return (
    <>
      <h1>chai or react</h1>
      <h2>counter value: {counter}</h2>
      <button onClick={addValue}>Add value</button>
      <br />
      <button onClick={removeValue}>remove value{counter}</button>
      <p>footer: {counter}</p>
    </>
  )
}

export default App
