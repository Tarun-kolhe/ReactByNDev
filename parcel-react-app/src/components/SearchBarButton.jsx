
const SearchBarButton= (props)=>{


return(
    <div className="searchbar-cont">
            <input className="inputbox" type="search"  value={props?.searchText} onChange={props?.handledatchange} />
            <button className="btn-search" onClick={props?.onClick}>Search</button>
        </div>
)

}

export default SearchBarButton;