import React, { useState } from 'react'

const Person = (props) => {
  //let namee=props.name;
  let[namee,setnamee]=useState(props.name)

  function handleclick(){
    setnamee("love")
  }
  return (
    <div>
      <div onClick={handleclick}>I am a div do not click me</div>

        {/* <h1>name:{props.name}</h1> */}
        <h1>name:{namee}</h1>
        <h3>age:{props.age}</h3>
        <p>favcolor:{props.favcolor}</p>
    </div>
  )
}

export default Person