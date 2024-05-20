import { useState, useCallback, useEffect, useRef } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [length, setLength] = useState(8);
  const [hasSpecialChar, setHasSpecialChar] = useState(false);
  const [hasNumber, setHasNumber] = useState(false);
  const [curPassword, setCurPassword] = useState('');

  const passwordRef = useRef(null);

  const generatePassword = useCallback(()=>{
    let pass = ``;
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
    if(hasNumber) str +="0123456789";
    if(hasSpecialChar) str +="~!@#$%^&*()_+";
    for (let index = 0; index < length; index++) {
      const rndIndex = Math.floor(Math.random()*str.length);
      pass += str.charAt(rndIndex);
    }
    setCurPassword(pass);
  },[length,hasNumber,hasSpecialChar]);

  const copyPassword = ()=>{
    window.navigator.clipboard.writeText(curPassword);
    passwordRef.current?.select();
  }

  useEffect(() =>{
    generatePassword();
  },[length,hasNumber,hasSpecialChar]);
  return (

      <div className="w-full max-w-md mx-auto shadow-md rounded-lg px-4 py-3 mt-20 bg-slate-700 text-emerald-200">
        <h1 className="text-3xl font-bold mb-2 text-center">Password Generator</h1>
        <div className="flex shadow rounded-lg overflow-hidden mb-4 ">
          <input 
          type="text" 
          value={curPassword} 
          className='outline-none w-full py-1 px-3' 
          placeholder='Password' 
          readOnly
          ref={passwordRef}
          />
          <button 
          className='outline-none bg-blue-700 text-white px-3 py-0.5 shrink-0'
          onClick={copyPassword}
          >copy</button>

        </div>
        <div className="flex text-sm gap-x-2">
          <div className="flex items-center gap-x-3">
            <input 
            type="range" 
            min={6}
            max={20}
            value={length}
            className='cursor-pointer'
            onChange={(e)=>setLength(e.target.value)}
            name="" 
            id="" 
            />
            <label htmlFor="length">Length : {length}</label>
            <input 
            type="checkbox" 
            defaultChecked = {hasNumber}
            className='cursor-pointer'
            onChange={()=>setHasNumber((prev)=> !prev)}
            name="" 
            id="" 
            />
            <label htmlFor="number">Numbers</label>
            <input 
            type="checkbox" 
            defaultChecked = {hasSpecialChar}
            className='cursor-pointer'
            onChange={()=>setHasSpecialChar((prev)=> !prev)}
            name="" 
            id="" 
            />
            <label htmlFor="symbol">Symbols</label>
          </div>
        </div>
      </div>
  )
}

export default App
