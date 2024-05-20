import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './components/Card'

function App() {

  return (
    <>
      <h1 className='text-3xl bg-green-300 p-20 rounded-xl'>Hi</h1>
      <Card userName ="Jen" post='Admin' url="https://pic1.zhimg.com/v2-e9c8c177d77044007eec995b51fe338a_720w.jpg?source=172ae18b"/>
      <Card/>
    </>
  )
}

export default App
