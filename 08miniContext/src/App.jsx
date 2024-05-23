import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Login from './component/Login.jsx'
import Profile from './component/Profile.jsx'
import UserContextProvider from './context/UserContextProvider.jsx'

function App() {

  return (
    <UserContextProvider>
      <h1>User Login</h1>
      <Login/>
      <Profile/>
    </UserContextProvider>
  )
}

export default App
