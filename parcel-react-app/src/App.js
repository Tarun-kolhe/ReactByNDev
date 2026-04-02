import { lazy, Suspense, useEffect, useState } from "react";
import "./App.css"
import MiddleCont from "./components/MiddleCont"
import { createBrowserRouter, RouterProvider } from "react-router-dom"
import ErrorComp from "./components/ErrorComp"
import Layout from "./components/Layout"
import RestPage from "./components/RestPage"
import UserClass from "./components/UserClass";
import Groceries from "./components/Groceries";
import UserContext from "./utils/Custom Hooks/UserContext";
import {Provider} from "react-redux"
import AppStore from "./utils/Redux store/AppStore"
import CartPage from "./components/CartPage"


 //here i used dynamic impporting 
const AboutUs= lazy(()=> import("./components/Aboutus")) 


// router.jsx — Layout ko parent banao
const AppRouter = createBrowserRouter([
  {
    element: <Layout/>,      // path nahi, sirf wrapper
    errorElement: <ErrorComp/>,
    children: [
      { path: "/",
       element: <MiddleCont/>
       },
       { path: "/about-us", 
      
        element: <Suspense fallback={<h1> Please Wait Data is Loading .....</h1>}><AboutUs/> </Suspense>
       },
       {
        path:"/restmenu/:restid",
        element:<RestPage/>
       },
       {
        path:"/contact-us",
        element:<UserClass email="Mr.abc@support.com" phone={8684838282}/>
       },
       {
        path:"/groceries",
        element:<Groceries/>
       },
       {
        path:"/my-cart",
        element: <CartPage/>
       }
    ]
  }
]);

function App() {
  const [userNamemd,setUserNamemd] = useState(localStorage.getItem("userName")|| "Tarun")
  useEffect(()=>{
   localStorage.setItem("userName",userNamemd)
  },[])
  return (
    <Provider store={AppStore}>
    <UserContext.Provider value={{UserName:userNamemd,setUserNamemd}}>
    <div className="app">
      <RouterProvider router={AppRouter} />
    </div>
    </UserContext.Provider>
    </Provider>
    
  );
}

export default App;