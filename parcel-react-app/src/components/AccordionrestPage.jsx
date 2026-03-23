import { useState } from "react";

const AccordionrestPage= (props)=>{
     const [isAccordionopen,setisAccordionopen]=useState(false)
    const {menuTitle,menuItems}=props;

    const handleToggle=()=>{
     setisAccordionopen(!isAccordionopen)
    }

    return(
    <div className="groupOne">
    <div className="section-title" onClick={handleToggle} >{menuTitle || ""} {isAccordionopen ? "▲" : "▼"}</div>
    <div className="menu-card">
     {
        menuItems?.map((item, index) => {
        console.log(index, item)  
        return(
        isAccordionopen &&  <div className="menu" key={item?.card?.info?.id}>
        <div className="menuName">{item?.card?.info?.name}</div>
        <p className="desc-menu">{item?.card?.info?.description}</p>
        <p>Price : {item?.card?.info?.price/100} RS</p>
       </div>
        )
        })
       }
    </div>
  </div>
    )
}

export default AccordionrestPage
