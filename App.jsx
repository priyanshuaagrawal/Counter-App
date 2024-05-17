import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  let [state,setState]=useState(0)    //return array
  
  let count=0
  let handleClick = () => {
   
     count++;
    
    setState(state+1);  //function
    
  };
  let handClick = () => {
    count++
    setState(state-1);
  }

  return (
    <>
      
    <p>Counter App</p>
    <h1>10</h1>
      <button onClick={handleClick}>+</button>
      <button >{state}</button>
      <button onClick={handClick}>-</button>
    </>
  );
}

export default App
