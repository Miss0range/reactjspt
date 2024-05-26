import React from 'react'
import { Container,Logo } from '../container/index.js'
import {Link} from "react-router-dom"
import Logout from './Logout.jsx'
import { useNavigate } from 'react-router-dom'
import { useSelector } from 'react-redux'

function Header() {
    const authStatus = useSelector((state)=>state.auth.status);
    const navigate = useNavigate();

    const navItems = [
        {
            name:"Home",
            slug:"/",
            active:true,
        },
        {
            name:"Login",
            slug:"/login",
            active:!authStatus,
        },
        {
            name:"Signup",
            slug:'/signup',
            active:!authStatus,
        },
        {
            name:"All Posts",
            slug:'/all-posts',
            active:authStatus,
        },
        {
            name:"Add Post",
            slug:'/add-post',
            active:authStatus,
        },
    ];
  return (
    <header className='py-3 shadow bg-slate-100'>
        <Container>
            <nav className='flex'>
                <div className="m-0 w-20">
                    <Link style={{margin:0}} to="/">
                        <Logo width='100px'/>
                    </Link>
                </div>
                <ul className='flex ml-auto items-center'>
                    {navItems.map((item)=>
                        item.active ? (
                            <li key={item.name}>
                                <button
                                onClick={()=> navigate(item.slug)}
                                className='px-6 py-2 inline-block font-bold text-slate-700 border-2 border-slate-100 hover:border-sky-500 hover:bg-white hover:text-sky-500 rounded-3xl cursor-pointer duration-200'
                                >{item.name}</button>
                            </li>
                        ) : null
                    )}
                    {authStatus && (
                        <li className='ml-2'><Logout/></li>
                    )}
                </ul>
            </nav>
        </Container>
    </header>
  )
}

export default Header