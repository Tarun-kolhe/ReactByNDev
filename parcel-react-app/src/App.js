import React from "react";
import Heading from "./components/Heading";
import "./App.css"
import MiddleCont from "./components/MiddleCont"
import { createBrowserRouter, RouterProvider } from "react-router-dom"
import Aboutus from "./components/Aboutus"
import ErrorComp from "./components/ErrorComp"
import Layout from "./components/Layout"
import RestPage from "./components/RestPage"


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
        element: <Aboutus/> 
       },
       {
        path:"/restmenu/:restid",
        element:<RestPage/>
       }
    ]
  }
]);

function App() {
  return (
    <div className="app">
      <RouterProvider router={AppRouter} />
    </div>
  );
}

export default App;