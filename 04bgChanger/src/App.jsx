import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [color,setColor] = useState('bg-lime-600');
  // const changeColor = (newColor)=> setColor(newColor);

  return (
    <div className={"w-full h-screen duration-300 "+color}>
      <div className="fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2">
        <div className="flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-2 rounded-3xl">
          <button 
          onClick={()=>{setColor('bg-stone-400')}} 
          className='mx-3 px-3 rounded-full text-white shadow-lg py-1 outline-none bg-stone-400'
          >Gray</button>
          <button 
          onClick={()=>{setColor('bg-rose-400')}} 
          className='mx-3 px-3 rounded-full text-white shadow-lg py-1 outline-none bg-rose-400'
          >Red</button>
          <button 
          onClick={()=>{setColor('bg-emerald-400')}} 
          className='mx-3 px-3 rounded-full text-white shadow-lg py-1 outline-none bg-emerald-400'
          >Green</button>
          <button 
          onClick={()=>{setColor('bg-sky-400')}} 
          className='mx-3 px-3 rounded-full text-white shadow-lg py-1 outline-none bg-sky-400'
          >Blue</button>
          <button 
          onClick={()=>{setColor('bg-orange-400')}} 
          className='mx-3 px-3 rounded-full text-white shadow-lg py-1 outline-none bg-orange-400'
          >Orange</button>
          <button 
          onClick={()=>{setColor('bg-indigo-400')}} 
          className='mx-3 px-3 rounded-full text-white shadow-lg py-1 outline-none bg-indigo-400'
          >Indigo</button>
          <button 
          onClick={()=>{setColor('bg-purple-400')}} 
          className='mx-3 px-3 rounded-full text-white shadow-lg py-1 outline-none bg-purple-400'
          >Purple</button>
          <button 
          onClick={()=>{setColor('bg-pink-400')}} 
          className='mx-3 px-3 rounded-full text-white shadow-lg py-1 outline-none bg-pink-400'
          >Pink</button>
        </div>
      </div>
    </div>
  )
}

export default App
