import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { TodoProvider } from './contexts/index.js'
import { useEffect } from 'react'
import {TodoForm,TodoItem} from './components/index.js'

function App() {

  const [todoList, setTodoList] = useState([]);

  const addTodo = (todo)=>{
    setTodoList((prev)=>[{id:Date.now(),...todo},...prev]);
  }

  const updateTodo = (id,todo)=>{
    setTodoList((prev)=> prev.map((prevTodo)=> (prevTodo.id === id ? todo : prevTodo) ));
  }

  const deleteTodo = (id)=>{
    setTodoList((prev)=> prev.filter((prevTodo)=>(prevTodo.id !== id)));
  }

  const toggleComplete = (id)=>{
    setTodoList((prev)=> prev.map((prevTodo)=>(prevTodo.id === id ? {...prevTodo,completed:!prevTodo.completed} : prevTodo)));
  }

  useEffect(()=>{
    console.log("init");
    const storedTodoList = JSON.parse(localStorage.getItem("todoList"));
    if(storedTodoList && storedTodoList.length>0){
      setTodoList(storedTodoList);
    }
  },[]);

  useEffect(()=>{
    localStorage.setItem("todoList",JSON.stringify(todoList));
  },[todoList]);

  return (
    <>
      <TodoProvider value={{todoList,addTodo,updateTodo,deleteTodo,toggleComplete}}>
        <TodoForm/>
        {
          todoList.map((todo)=>{
            return <div key={todo.id} className='w-full'><TodoItem todo={todo}/></div>
          })
        }
      </TodoProvider>
    </>
  )
}

export default App
