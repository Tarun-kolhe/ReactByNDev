import { useEffect, useState } from "react"

const useFetch= (endpoint)=>{
const [data,setData]=useState([])
const [loading, setloading] = useState(false);

useEffect(()=>{
 FetchData()
 setloading(true)
},[endpoint])

const FetchData= async ()=>{
    try{
     const apiraw= await fetch(endpoint)
     const response= await apiraw.json()
     setData(response)
    }
    catch(err){
      console.error(err)
    }
    
}

return [data,loading];

}

export default useFetch;