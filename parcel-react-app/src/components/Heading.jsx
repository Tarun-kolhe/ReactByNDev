import React from "react" 
import "./Heading.css"
import {MY_LOGO} from "../utils/constants"
import { useState } from "react"

{
  // this is also complete valid js functional comepoenent 
  //const Heading =  () => <div>Hello Heading comp</div>;
  //executing js inside curly braces 
  // putting react element inside the component 
  //cross site scripting ---- attackers can excute  his js code  ---> jsx is preventig this -- sanitize this data before run to prevent 



}

const Heading= function(){
  const [btnText,setBtntext]=useState("Login")
  
  return(
    <div className="heading-main">
      <div className="logo">
        <img className="logo-img" src={MY_LOGO} alt="logo-img" />
        <div className="appName">
        <h3>HungerBox</h3>
      </div>
      </div>
      

      <div className="menu-cont">
        <ul className="menu-list">
          <li className="menu-item">Home</li>
          <li className="menu-item">About us</li>
          <li className="menu-item">Orders</li>
          <li className="menu-item">My Cart</li>
          <li><button onClick={()=>{
            btnText==="Login" ? setBtntext("logout") : setBtntext("Login")
          }} className="btn-login">{btnText}</button></li> 
        </ul>
      
      </div>

    </div>
  )
}

export default Heading;