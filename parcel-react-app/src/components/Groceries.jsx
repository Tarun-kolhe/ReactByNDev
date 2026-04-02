import { useEffect, useState } from "react";
import useFetch from "../utils/Custom Hooks/useFetch";
import useDebounce from '../utils/Custom Hooks/useDebounce'

import "./groceries.css"
import SearchBarButton from "./SearchBarButton";

const Groceries = () => {
    const [searchText, setSearchText] = useState("")
    const [filterData, setfilterData] = useState([{}]);
    const debounceValue = useDebounce(searchText, 500)
    const [data, loading] = useFetch(
        debounceValue
            ? `https://api.github.com/users/${debounceValue}`
            : "https://api.github.com/users"
    );
    console.log(data)




    // const debounceValue= useDebounce(searchText,500)
    const handleChange = (e) => {
        setSearchText(e.target.value)
    }
    console.log("Value from child:", debounceValue);

    const handleClick = () => { }


    return (

        <>
            <SearchBarButton searchText={searchText} handledatchange={handleChange} onClick={handleClick} />
            <div className="main-cont">
                <h1 className="text-3xl font-bold text-red-500">
                    Tailwind is working 🚀
                </h1>
                {

                    data.map((card) => {
                        return (
                            <div className="card" key={card.id}>


                                <img className="profile" src={card?.avatar_url} alt="prof" style={{ width: "70px" }} />
                                <div>
                                    <div className="username">NAME : {card?.login}</div>
                                    <div className="profession">PROFF: Software engineer </div>
                                </div>

                            </div>
                        )
                    })
                }

            </div>
        </>

    )
}


export default Groceries;