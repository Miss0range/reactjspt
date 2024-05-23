import React , { useState } from 'react'
import { useTodo } from '../contexts/index.js'

function TodoItem({todo}) {
    const [isTodoEditable, setIsTodoEditable] = useState(false);
    const [todoMsg, setTodoMsg] = useState(todo.todo);
    const {updateTodo,deleteTodo,toggleComplete} = useTodo();

    const editTodo = ()=>{
        updateTodo(todo.id,{...todo, todo:todoMsg});
        setIsTodoEditable(false);
    }

    const toggleCompleted = ()=>{
        toggleComplete(todo.id);
    }

  return (
    <div className={`flex border border-slate/10 rounded-lg px-3 py-1.5 gap-x-3 shadow-sm shadow-white/50 duration-300 text-slate-600 ${todo.completed ? 'bg-gray-300' : 'bg-indigo-300'}`}>
        <input 
        type="checkbox"
        className='cursor-pointer'
        checked={todo.completed}
        onChange={toggleCompleted}
        />
        <input 
        type="text"
        className={`border outline-none w-full bg-transparent rounded-lg ${isTodoEditable ? "border-slate/90":"border-transparent"}`}
        value={todoMsg}
        readOnly = {!isTodoEditable}
        onChange={(e)=>setTodoMsg(e.target.value)}
        />
        <button 
        onClick={()=>{
            if(todo.completed) return;
            if(isTodoEditable){
                editTodo();
            }else{
                setIsTodoEditable((prev)=>!prev);
            }
        }}
        type="button"
        disabled={todo.completed}
        className='inline-flex w-8 h-8 rounded-lg text-sm border border-slate/10 justify-center items-center bg-gray-50 hover:bg-gray-100 shrink-0 disabled:opacity-50'>
            {isTodoEditable? "💾":"📝"}
        </button>
        <button 
        type="button"
        onClick={()=>(deleteTodo(todo.id))}
        className='inline-flex w-8 h-8 rounded-lg text-sm border border-slate/10 justify-center items-center bg-gray-50 hover:bg-gray-100 shrink-0'
        >🗑️</button>
    </div>
  )
}

export default TodoItem