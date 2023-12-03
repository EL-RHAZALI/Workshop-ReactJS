import React , { useEffect , useState } from "react";
import axios from "axios";


export default function App(){
const [users , setUsers] = useState([]);
const [posts , setPosts]= useState([]);
const [activ , setActiv] = useState(0);


useEffect(() => {
  fetch("https://jsonplaceholder.typicode.com/users")
  .then((res) => res.json())
  .then((data) => setUsers(data))

  axios.get("https://jsonplaceholder.typicode.com/posts")
  .then((response) => (setPosts(response.data)))
} , []);

function handleClick(id) {
  setActiv(id)
}


const filter = posts.filter((post) => (post.userId===(activ)))



return(
  <div>
    {users.map((user) => {
      return(
        <p>{user.name}
        <button onClick={() => {handleClick(user.id)}}>more details</button>
        <div>
        {activ === user.id
        ?<>
        {filter.map((post) => {
          return(
            <li>{post.id}{post.title}</li>
          )
        })}
        </>
        :null
        }
        </div>
        </p>
        )
    })}
  </div>
)
}