import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [color,setColor] = useState('olive');
  // const changeColor = (newColor)=> setColor(newColor);

  return (
    <div className="w-full h-screen duration-300" style={{backgroundColor:color}}>
      <div className="fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2">
        <div className="flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-2 rounded-3xl">
          <button onClick={()=>{setColor('red')}} className='mx-3 px-3 rounded-full text-white shadow-lg py-1 outline-none bg-red-400'>Red</button>
          <button onClick={()=>{setColor('green')}} className='mx-3 px-3 rounded-full text-white shadow-lg py-1 outline-none bg-emerald-400'>Green</button>
          <button onClick={()=>{setColor('blue')}} className='mx-3 px-3 rounded-full text-white shadow-lg py-1 outline-none bg-sky-400'>Blue</button>
        </div>
      </div>
    </div>
  )
}

export default App
