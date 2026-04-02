import { useEffect, useState } from "react"

const useDebounce= (value,delay)=>{

const[debounce,setDebounce]=useState()

useEffect(()=>{

    setTimeout(()=>{
     setDebounce(value)
    },delay)

},[])

return debounce;

}


export default useDebounce