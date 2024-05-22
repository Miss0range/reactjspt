import React from 'react'
import { useState,useContext } from 'react'
import UserContext from '../context/UserContext';

function login() {
    const [userName,setUserName] = useState('');
    const [password,setPassword] = useState('');

    const {setUser} = useContext(UserContext);

    const handleSubmit = (e)=>{
        e.preventDefault();
        setUser({userName,password})
    }

  return (
    <div>
        <h2>Login</h2>
        <input 
        type="text" 
        onChange={(e)=> setUserName(e.target.value)}
        placeholder='Username'
        />
        {"  "}
        <input 
        type="password" 
        onChange={(e)=> setPassword(e.target.value)}
        placeholder='Password'
        />
        <button onClick={handleSubmit}>Submit</button>

    </div>
  )
}

export default login