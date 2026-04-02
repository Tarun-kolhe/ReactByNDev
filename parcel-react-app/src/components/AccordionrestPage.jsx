import { useState } from "react";
import { addItem } from "../utils/Redux store/CartSlice"; 

import {useDispatch} from "react-redux"

const AccordionrestPage= (props)=>{
  
    const {menuTitle,menuItems,showinfo,setshowIndexFunction}=props;
    const despatch= useDispatch();
    const[btnText,setBtnText]= useState("Add +")

    const handleToggle=()=>{
      setshowIndexFunction()
    } 
    const HandleCart= (item)=>{
      console.log("Tarun Bhai Yha ho AAP ",item)
      despatch(addItem(item))
      setBtnText("Added")
    }


    return(
    <div className="groupOne">
    <div className="section-title" onClick={handleToggle} >{menuTitle || ""} {showinfo ? "▲" : "▼"}</div>
    <div className="menu-card">
     {
        menuItems?.map((item) => { 
        return(
        showinfo &&  
        <div className="menu" key={item?.card?.info?.id}>
          <div>
        <div className="menuName">{item?.card?.info?.name}</div>
        <p className="desc-menu">{item?.card?.info?.description}</p>            
        <p>Price : {item?.card?.info?.price/100} RS</p>
          </div>

        <button className="btn-add-cart" onClick={()=>{
          HandleCart(item)
        }}>{btnText}</button>
       </div>
        )
        })
       }
    </div>
  </div>
    )
}

export default AccordionrestPage
