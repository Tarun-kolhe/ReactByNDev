
import { useParams } from "react-router-dom";
import "./RestPage.css"
import AccordionrestPage from "./AccordionrestPage";
import useRestaurantsMenu from "../utils/Custom Hooks/useRestaurantsMenu"
import { useState } from "react";

const RestPage = () =>{
  const [showIndex,setShowIndex]=useState(0)
    const {restid}=useParams()

    const apiResponse=useRestaurantsMenu(restid)

    const cardsDataRest =
   apiResponse?.data?.cards?.[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards || [];

    const filteredData = cardsDataRest.filter(
    (item) => item?.card?.card
    );

    const { name, areaName,cuisines,id,sla,avgRating } = apiResponse?.data?.cards?.[2]?.card?.card?.info || {};

    return(
  <div className="restaurant-page">
  <div className="hero">
    <h1 className="restName">{name}</h1>
    <h2 className="area-name">{areaName}</h2>
    <div className="avg-rating">⭐ {avgRating}</div>
    <div className="distance">📍 {sla?.lastMileTravelString}</div>
    <div className="expecteddel">🕐 {sla?.slaString}</div>
    <div className="cousines">{cuisines?.join(" • ")}</div>
  </div>
 
 {
 
  filteredData.map((category,index)=>{
    return(
    <AccordionrestPage  key={category?.card?.card?.title} 
    menuTitle={category?.card?.card?.title} 
    menuItems={category?.card?.card?.itemCards} num={index}
    showinfo={index===showIndex ? true :false }
    setshowIndexFunction= {(()=>{
      index===showIndex ? setShowIndex(null) : setShowIndex(index)}
    )}
    />
    )
  })
 }
 
</div>
    )
}

export default RestPage;