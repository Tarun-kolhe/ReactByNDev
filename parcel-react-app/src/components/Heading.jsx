import React, { useContext } from "react" 
import "./Heading.css"
import {MY_LOGO} from "../utils/constants"
import { useState } from "react"

import { useNavigate } from "react-router-dom"
import UserContext from "../utils/Custom Hooks/UserContext"
import {useSelector} from "react-redux"

{
  // this is also complete valid js functional comepoenent 
  //const Heading =  () => <div>Hello Heading comp</div>;
  //executing js inside curly braces 
  // putting react element inside the component 
  //cross site scripting ---- attackers can excute  his js code  ---> jsx is preventig this -- sanitize this data before run to prevent 



}

const Heading= function(){
  const [btnText,setBtntext]=useState("Login")
  const Navigate=useNavigate();

  const {UserName} =useContext(UserContext)
  const cartItems =useSelector((store) => store.cart.items) 
  
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
          <li className="menu-item" onClick={(()=>{
            Navigate("/")
          })}>Home</li>
          <li className="menu-item" onClick={(()=>{
            Navigate("/about-us")
          })}>About us</li>
          <li className="menu-item">Groceries</li>
          <li className="menu-item">Orders</li>
          <li className="menu-item" onClick={()=>{
            Navigate("/my-cart")
          }}>My Cart ({cartItems.length} Items)</li>
          <li className="menu-item"
          onClick={(()=>{
            Navigate("/contact-us")
          })}
          >Contact us</li>
          <li><button onClick={()=>{
            btnText==="Login" ? setBtntext("logout") : setBtntext("Login")
          }} className="btn-login">{btnText}</button></li> 

          <div>{UserName}</div>
        </ul>
      
      </div>

    </div>
  )
}

export default Heading;