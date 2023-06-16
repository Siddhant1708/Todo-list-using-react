import "../src/styles.css"
import { useState } from "react"
import { NewTodoForm } from "./NewTodoForm";
import { TodoList } from "./TodoList";

export default function App(){

const [todos,setTodos]=useState([]);

function addTodo(title){
  setTodos(currentTodos=>{
    return [...currentTodos,{id: crypto.randomUUID(), title, completed: false},];
  })
}







  return<>
   <NewTodoForm onSubmit={addTodo} />
  <h1>Todo List</h1>
  <TodoList todos={todos} setTodos={setTodos}/>
  </>
}