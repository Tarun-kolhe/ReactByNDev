import ResCard from "./ResCard"
import "./MiddleCont.css"
import restaurantData from "../utils/mockdata"
import { useState, useEffect } from "react"
import SearchBar from "../components/SearchBar"
import {REST_CARDS_API} from "../utils/constants"




const MiddleCont = () => {
  const [restaurantList, setrestaurantList] = useState([]);
  const [filteredrest, setFilteredrest] = useState([]);
  const [searchText,setSearchText]=useState("");
  const [loading, setloading] = useState(false);



  useEffect(() => {
    fetchData()
    setloading(true)

    return (() => {
      console.log("component is unmounted ")
    })
  }, [])

  const fetchData = async () => {
    const data = await fetch(REST_CARDS_API);
    const json = await data.json();

    const cards =
      json?.data?.data?.cards?.[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants;

    setrestaurantList(cards || []);
    setFilteredrest(cards || [])
  };
  


  return (
    <>
      <div className="filter-cont">

          <div className="searchbar-cont">
            <input className="inputbox" type="search"  value={searchText} onChange={((e)=>{
                setSearchText(e.target.value)
            })} />
            <button className="btn-search" onClick={(()=>{   
                
              const searchList=restaurantList.filter((text)=>{
                return text?.info?.name.toLowerCase().includes(searchText.toLowerCase())
              })
              setFilteredrest(searchList)
             
            })}>Search</button>
        </div>
        <button
          onClick={() => {

            const filtered = restaurantList.filter(
              (rest) => rest?.info?.avgRating > 4.5
            );
            setFilteredrest(filtered);
          }}
        >
          Top Rated Restaurant
        </button>

        <button
          onClick={() => {
            setFilteredrest(restaurantList) // 
          }}
        >
          All Restaurant
        </button>
      </div>
      {
        loading ? <div className="middleCOnt">
          {filteredrest.map((restaurant) => (
            <ResCard
              key={restaurant?.info?.id}
              resName={restaurant?.info}
            />
          ))}
        </div> :
          <div className="middleCOnt">
           <div>Data Is Loading Please Wait for while .........</div>
          </div>
      }

    </>
  )

}

export default MiddleCont;