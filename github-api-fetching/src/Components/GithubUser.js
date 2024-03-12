import React, { useEffect, useState } from 'react'

const GithubUser = (props) => {
  let [user,setuser]=useState({
    imgUrl:"",
    followers:0,
    following:0
})
useEffect(()=>{
  async function getUser(username){
    const response=await fetch(`https://api.github.com/users/${username}`)
     const data=await response.json();
     console.log(data)
     const{followers,following,avatar_url}=data
     setuser(()=>{
      return{
        imgUrl:avatar_url,
        following:following,
        followers:followers
      }
     })
  }
  getUser(props.username)
},[])
  return (
    <div>
      <figure>
        <img src={user.imgUrl} alt='profile pic' />
        <figcaption>
          <p>Username:{props.username}</p>
          <p>followers:{user.followers}</p>
          <p>following:{user.following}</p>
        </figcaption>
      </figure>
    </div>
  )
}

export default GithubUser
