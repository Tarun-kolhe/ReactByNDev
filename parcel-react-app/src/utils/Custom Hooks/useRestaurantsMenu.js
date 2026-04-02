import { REST_MAIN_PAGE_API } from "../constants"

import { useState, useEffect } from "react"


const useRestaurantsMenu = (restId) => {
    const API_END = REST_MAIN_PAGE_API + restId
    const [apiResponse, setApiResponse] = useState([])


    useEffect(() => {
        fetchRestpage()
    }, [])

    const fetchRestpage = async () => {
        const response = await fetch(API_END)
        const data = await response.json();
        console.log(data)
        setApiResponse(data)
    }

    return apiResponse

}

export default useRestaurantsMenu;