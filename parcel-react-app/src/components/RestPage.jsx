
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import {REST_MAIN_PAGE_API} from ".././utils/constants"
import "./RestPage.css"
import AccordionrestPage from "./AccordionrestPage";

const RestPage = () =>{
    const {restid}=useParams()
    const [apiResponse,setApiResponse]=useState([])
    const API_END=REST_MAIN_PAGE_API+restid 
 
   console.log(API_END)
    useEffect(()=>{
    fetchRestpage()
    },[])

    const fetchRestpage= async()=>{
       const response= await fetch(API_END)
       const data= await response.json();
       console.log(data)
       setApiResponse(data)
    }
    const { name, areaName,cuisines,id,sla,avgRating } = apiResponse?.data?.cards?.[2]?.card?.card?.info || {};
    const { title:title1,itemCards } = apiResponse?.data?.cards?.[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards?.[1]?.card?.card || {}
    const { title:title2,itemCards:itemCards2 } = apiResponse?.data?.cards?.[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards?.[2]?.card?.card || {}
    const { title:title3,itemCards:itemCards3 } = apiResponse?.data?.cards?.[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards?.[3]?.card?.card || {}


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

  <AccordionrestPage menuTitle={title1} menuItems={itemCards}/>
  <AccordionrestPage menuTitle={title2} menuItems={itemCards2}/>
  <AccordionrestPage menuTitle={title3} menuItems={itemCards3}/>
 
</div>
    )
}

export default RestPage;