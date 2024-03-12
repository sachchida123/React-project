import React from 'react'
import {useState} from 'react'
import { v4 as uuid } from 'uuid';

const Form = (props) => {

    const [input,setInput] = useState('')
    function inputChangeHandler(e){
        setInput(e.target.value)

    }
    function formSubmitHandler(e){
        e.preventDefault();
        const newTodo={
            id:uuid(),
            todo:input
        }
        props.addTodo(newTodo)
        console.log(input)
        setInput('')
    }
  return (
    <form onSubmit={formSubmitHandler}>
    <input onChange={inputChangeHandler} type="text" name="" id="" placeholder='add your todo'  />
</form>
  )
}

export default Form