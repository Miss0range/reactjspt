import { createContext, useContext} from "react";

export const TodoContext = createContext({
    todoList:[{
        id:1,
        todo:"Todo Message",
        completed: false
    }],
    addTodo: (todoItem)=>{},
    updateTodo:(id,todoItem)=>{},
    toggleComplete:(id)=>{},
    deleteTodo:(id)=>{},
});

export const TodoProvider = TodoContext.Provider;

export const useTodo = ()=>{
    return useContext(TodoContext);
}