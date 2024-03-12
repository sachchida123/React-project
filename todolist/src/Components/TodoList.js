import React from 'react'
import Todo from './Todo'

const TodoList = (props) => {
  let alltodos=props.todos.map((item,index)=>{
       return <Todo key={index}  id={item.id} todo={item.todo} index={index} deleteTodo={props.deleteTodo}/>
    })
  return (
    <section>
        <ul>
        {alltodos}
        </ul>
    </section>
  )
}

export default TodoList