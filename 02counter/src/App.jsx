import { useCallback, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  
  const [counter, setCounter] = useState(15);//useState(initial value/state)
  console.log("Rerender");
  // let counter = 15;
  const addValue = () => setCounter(counter+1);
  const decreaseValue = useCallback(() =>{
    setCounter((counter)=> counter-1);
  },[])

  return (
    <>
      <h1>React bootcamp</h1>
      <h2>Counter Value : {counter}</h2>
      <button onClick={addValue}
      >Add Value</button> {"     UwU    "}
      <button onClick={decreaseValue}>Decrease Value</button>
      <p>footer:{counter}</p>
    </>
  )
}

export default App
