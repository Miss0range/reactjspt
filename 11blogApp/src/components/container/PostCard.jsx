import React from 'react'
import { Link } from 'react-router-dom'
import service from '../../appwrite/config'

function PostCard({
    $id,title,featuredImage
}) {
  return (
    <Link to={`/post/${$id}`}>
        <div 
        className="w-full bg-slate-200 rounded-xl p-4 shadow-md"
        >
            <div className='w-full justify-center mb-4'>
                <img 
                src={service.getFilePreview(featuredImage)} 
                alt={title}
                className='rounded-xl w-full md:h-36 object-cover'
                />
            </div>
            <h2 className='text-xl font-bold text-slate-700 text-center mx-0 px-0'>{title}</h2>
        </div>
    </Link>
  )
}

export default PostCard