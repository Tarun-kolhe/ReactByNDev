import { useState } from "react"
import "./SearchBar.css"

const SearchBar= (props)=>{
    
    const [searchText,setSearchText]=useState("");
    return(
        <div className="searchbar-cont">
            <input className="inputbox" type="search"  value={searchText} onChange={((e)=>{
                setSearchText(e.target.value)
            })} />
            <button className="btn-search">Search</button>
        </div>
    )
}

export default SearchBar