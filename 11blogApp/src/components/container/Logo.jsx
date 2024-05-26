import React from 'react'
import logo from '../../assets/icon.png'

function Logo({width= "100%"}) {
  return (
    <img 
    src={logo} alt="Logo placeholder" 
    className='m-0 p-0'
    style={{width}}/>
  )
}

export default Logo