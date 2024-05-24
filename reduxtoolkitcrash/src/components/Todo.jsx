import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { removeTodo } from '../features/todo/todoSlice'

function Todo() {
    const todoList = useSelector(state=>state.todos);
    const dispatch = useDispatch();

  return (
    <>
        <div className='text-pink-500 text-center py-2 font-bold text-2xl '>Todos</div>
        <ul className='list-none'>
            {todoList.map((todo) => (
                <li 
                key={todo.id}
                className='mt-4 flex justify-between items-center bg-gray-800 px-4 py-2 rounded'>
                    <div className='text-pink-400 font-medium'>{todo.text}</div>
                    <button 
                    type="button"
                    onClick = {()=> dispatch(removeTodo(todo.id))}
                    className='text-black font-semibold bg-pink-400 border-0 py-1 px-4 focus:outline-none hover:bg-pink-500 rounded text-sm'
                    >
                        🗑️
                    </button>
                </li>
            ))}
        </ul>
    </>
    
  )
}

export default Todo