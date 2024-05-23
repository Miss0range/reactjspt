import React from 'react'
import { useState } from 'react'
import { useTodo } from '../contexts/index.js';

function TodoForm() {
    const [todo, setTodo] = useState("");
    const {addTodo} = useTodo();

    const handleSubmit = (e)=>{
        e.preventDefault();
        if(!todo) return;
        addTodo({todo,completed:false});
        setTodo('');
    }

  return (
    <form 
    onSubmit={handleSubmit}
    className='flex'>
        <input 
        type="text"
        placeholder='Write Todo...'
        className='w-full border border-slate-700 rounded-l-full px-3 outline-none duration-150 bg-white/20 py-1.5'
        value={todo}
        onChange={(e)=>setTodo(e.target.value)}
        />
        <button 
        type="submit"
        className='rounded-r-full pl-4 pr-6 py-1 bg-slate-700 text-white shrink-0'
        >
            Add
        </button>
    </form>
  )
}

export default TodoForm