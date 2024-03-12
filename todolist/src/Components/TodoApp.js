import React from 'react'
import TodoList from './TodoList'
import Form from './Form'
import {useState} from 'react'
import { v4 as uuid } from 'uuid';


const TodoApp = () => {
    let arrayDummy=[
        {
            id:uuid(),
            todo:"maze karo"
        },
        {
            id:uuid(),
            todo:"love you"
        },
        {
            id:uuid(),
            todo:"love karo"
        },
        {
            id:uuid(),
            todo:"nafrat mat karo"
        },
    ]
    let[todos,setTodos]=useState(arrayDummy);
    const addTodo=(todo)=>{
        setTodos([...todos,todo])
    }
    const deleteTodo = (id)=>{
        
            const newTodo=todos.filter((todo)=> todo.id !== id);
            setTodos(newTodo)
        };
    
  return (

    <div>
    <h1 style={{textAlign:'center'}}>Todo List for sachi</h1>
        <Form addTodo={addTodo} todos={todos}/>
        <TodoList todos={todos} deleteTodo={deleteTodo}/>
    </div>
  )
}


export default TodoApp