import React from 'react'
import { NavLink } from 'react-router-dom'

function Contact() {
  return (
    <div className='py-16 bg-white'>
        <div className="flex flex-wrap justify-center">
            <div className="flex justify-end md:w-1/3 lg:w-5/12">
                <div className="w-full min-h-60 min-w-96 rounded-2xl overflow-hidden bg-cover ml-4 md:w-4/5" style={{backgroundImage:"url(https://images.pexels.com/photos/1451040/pexels-photo-1451040.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1)"}}>
                </div>
            </div>
            <div className="flex justify-center items-center md:2/3 lg:7/12 mx-auto">
                <div className="py-6">

                    <h1 className='text-black font-semibold text-4xl sm:text-5xl'>Contact Info</h1>
                    <ul className='list-none py-3 font-medium text-lg sm:text-xl'>
                        <li>Email : miss0range1994@gmail.com</li>
                        <li>Github : 
                            <NavLink
                            to='/github'
                            className="hover:text-yellow-700"
                            >
                            {" "}Miss0range
                            </NavLink> </li>
                        <li>Telephone : (512)9**-2023</li>
                        <li></li>
                    </ul>
                </div>
            </div>
            <div className="md:w-2/3 lg:w-7/12"></div>
        </div>
    </div>
  )
}

export default Contact