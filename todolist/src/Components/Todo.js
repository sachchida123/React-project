import React from 'react'
import { MdDelete } from "react-icons/md";



const Todo = (props) => {
    function deleteTodoHandler(id){
        props.deleteTodo(id)
    }
  return (
    <div>
        <li>
            <p>index={props.index} ID={props.id} task={props.todo} <span onClick={()=>deleteTodoHandler(props.id)}><MdDelete /></span></p>
        </li>
    </div>
  )
}

export default Todo