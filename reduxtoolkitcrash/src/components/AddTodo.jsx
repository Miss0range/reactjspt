import React, {useState} from 'react'
import { useDispatch } from 'react-redux'
import { addTodo } from '../features/todo/todoSlice'

function AddTodo() {
    const [input,setInput] = useState('');
    const dispatch = useDispatch();

    const handleSubmit = (e)=>{
        e.preventDefault();
        dispatch(addTodo(input));
        setInput('');
    }
  return (
    <>
    <h2 className='text-center mt-6 text-3xl font-bold text-gray-800'>Manage Todo List</h2>
    <form 
    onSubmit={handleSubmit}
    className='space-x-3 mt-6 mb-6 w-full'>
        <input 
        type="text"
        className='bg-gray-800 rounded border border-gray-800 focus:border-pink-400 focus:ring-2 focus:ring-pink-400 text-base outline-none placeholder-pink-200 text-pink-500 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out'
        placeholder='Enter a Todo...'
        value={input}
        onChange={(e)=>setInput(e.target.value)}
        />
        <button 
        type="submit"
        className='text-white font-medium bg-pink-400 border-0 py-2 px-6 focus:outline-none hover:bg-pink-500 rounded text-lg'>
            Add Todo
        </button>
    </form>
    </>
  )
}

export default AddTodo