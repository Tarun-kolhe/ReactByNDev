import { ResCard, VegCard } from "./ResCard"
import "./MiddleCont.css"
import restaurantData from "../utils/mockdata"
import { useState, useEffect, useContext } from "react"
import SearchBar from "../components/SearchBar"
import { REST_CARDS_API, OFFLINE_STATUS_MESSAGE } from "../utils/constants"
import useOnlineStatus from "../utils/Custom Hooks/useOnlineStatus"
import Notifications from "../components/Notifications"
import useFetch from "../utils/Custom Hooks/useFetch"
import UserContext from "../utils/Custom Hooks/UserContext"





const MiddleCont = () => {

  const [restaurantList, setrestaurantList] = useState([]);
  const [filteredrest, setFilteredrest] = useState([]);
  const [searchText, setSearchText] = useState("");
  const networkStatus = useOnlineStatus()
  const [response, loading] = useFetch(REST_CARDS_API)
  const HOFCompRest = VegCard(ResCard)
  const { UserName, setUserNamemd } = useContext(UserContext)


  useEffect(() => {
    const cards =
      response?.data?.data?.cards?.[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants;
    setrestaurantList(cards || []);
    setFilteredrest(cards || [])
    console.log(cards)

    return (() => {
      console.log("component is unmounted ")
    })
  }, [response])

  return (
    <>
      {
        !networkStatus && <Notifications Notification={OFFLINE_STATUS_MESSAGE} type={"warning"} />
      }
      <div className="filter-cont">

        <div className="searchbar-cont">
          <input className="inputbox border-black" type="search" value={searchText} onChange={((e) => {
            setSearchText(e.target.value)
          })} />
          <button className="btn-search" onClick={(() => {

            const searchList = restaurantList.filter((text) => {
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
        <input type="text" value={UserName} placeholder="UseContaxt Test" onChange={((e) => {
          localStorage.setItem("userName", e.target.value)
          setUserNamemd(e.target.value)

        })} />
      </div>
      {
        loading ? <div className="middleCont">
          {filteredrest.map((restaurant) => {
            const info = restaurant?.info;

            return info?.veg ? (
              <HOFCompRest key={info?.id} {...info} />
            ) : (
              <ResCard key={info?.id} {...info} />
            );
          })}
        </div> :
          <div className="middleCOnt">
            <div>Data Is Loading Please Wait for while .........</div>
          </div>
      }

    </>
  )

}

export default MiddleCont;