import React from 'react'
let arr2=["😊","❤️","💕","🤣","🤷‍♀️"]
let todos=["day1","day2","day3","day4","day5","day6"];
let emoji=Math.floor(Math.random()*6)
const Sam = () => {
  return (
    <div>
        <h1>
            { arr2[emoji] }
            {
            emoji===3 ?<img src='https://images.unsplash.com/photo-1604537466158-719b1972feb8?q=80&w=1469&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
            alt='mountain' />:"tumse nahi ho payega"
            }
          {  todos.map((item,index)=>{
              return <li key={index}>my task is{item} & postiton is {index}</li>
            })
          }
        </h1>
    </div>
  )
}

export default Sam