import { useState } from "react"


export function TodoList({todos,setTodos}){

    function todoDelete(id){

        setTodos(currentTodos=>{
          return currentTodos.filter(todo=> todo.id!=id)
        })
      }
      function toggleTodo(id,completed){
        setTodos(currentTodos=>{
          return currentTodos.map(todo=>{
            if(todo.id==id)
            {
              return {...todo, completed};
            }
            return todo;
          })
        })
      }

    
    return <ul className="list">
    {todos.map(todo=>{
      return <li key={todo.id}>
      <label>
        <input  type="checkbox" checked={todo.completed} onChange={e=>toggleTodo(todo.id,e.target.checked)} />
        {todo.title}
      </label>
      <button className="btn btn-danger" onClick={()=> todoDelete(todo.id)}>DELETE</button>
    </li>
    })}
  </ul>
}