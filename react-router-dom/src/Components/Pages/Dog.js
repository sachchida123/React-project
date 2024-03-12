import React from 'react'
import{useNavigate} from 'react-router-dom'

const Dog = () => {
  let Navigate=useNavigate()
  let redirectPageHandler=()=>{
    Navigate('/');
  }
  return (
    <div>
      <h1>woof woof</h1>
      <button onClick={redirectPageHandler}>Main page</button>

    </div>
    
  )
}

export default Dog