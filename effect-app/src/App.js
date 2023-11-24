import React from 'react';
import { useState, useEffect } from'react';


export default function App () {

const [users , setUsers] = useState ([]);

useEffect (() => {
  fetch ('https://jsonplaceholder.typicode.com/users')
  .then ((res) => res.json())
  .then ((data) => setUsers (data) )
} , [] )

const [filterName , setFilterName] = useState ([]);

useEffect (() => {
setFilterName (users)
} , [users])


const filterUser = (Event)=>{
  const filter = users.filter((user) => user.name.includes(Event.target.value));
   setFilterName (filter);
   console.log(filter);
}
return (
  <>
  <input type = "text" placeholder = "search" onInput = {filterUser}/>
    {filterName.map((user) => (
      <div>
      <h2>{user.name}</h2>
      <h2>{user.username} </h2>
      <h2>{user.email}</h2> 
      <hr/>
      </div>
    ))}
  </>
)
}