import { useState,useEffect } from "react" 

import "./Usercards.css"
import "./MiddleCont.css"
import UserCard from "./UserCard"



const Usercards = ()=>{
 const[userCarddetail,setuserCarddetail]=useState([]);

  useEffect(()=>{
   fetchUserData()
  },[])

  const fetchUserData = async()=>{
    const data= await fetch("https://jsonplaceholder.typicode.com/users")
    const response= await data.json()
    console.log(response)
    setuserCarddetail(response)
  }

return (
    <div className="middleCOnt">
        {
           userCarddetail.map(user=><UserCard key={user?.id} userRes={user}/>)
        }
     
    </div>
)
}
export default Usercards;