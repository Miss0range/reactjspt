import React from 'react'
import {useDispatch} from 'react-redux'
import authService from '../../appwrite/auth.js'
import {logout} from "../../store/authSlice.js"

function Logout(){
    const dispatch = useDispatch();
    const handleLogout = ()=>{
        authService.logout().then(()=>{
            dispatch(logout());
        })
    }
    return (
        <button
        onClick={handleLogout}
        className='font-bold inline-block px-6 py-2 duration-200 rounded-3xl bg-white hover:bg-sky-500 text-sky-500 hover:text-white border-2 border-sky-500 hover:shadow-md'>
            Logout
        </button>
    );
}

export default Logout;