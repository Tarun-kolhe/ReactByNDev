import { useSelector } from "react-redux"; 

import "./CartPage.css"
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { ClearCart } from "../utils/Redux store/CartSlice";


const CartPage  = () =>{
    const cartItems= useSelector((store)=> store.cart.items)
    const [toatal,setToatal]= useState(0);
    const clearCartDespatch=useDispatch()


   useEffect(()=>{
       setToatal(2)
   },[])

   const HandleClearCart= ()=>{
      clearCartDespatch(ClearCart())
   }
    return(
    
        <div className="cart-main-cont">  your Cart 
        <button onClick={HandleClearCart}>Clear Cart </button>
         {
        
        cartItems.map((cartItem,id)=>{
            return <div className="cart-item-cont" key={id}>
                <div className="first-part-cart-menu">
                    <div className="cart-det-name">{`${cartItem?.card?.info?.name} : ` || ""}</div>
                    <div className="cart-det-desc">{cartItem?.card?.info?.description || ""}</div>
                </div>
                
                <div className="cart-det-price" >price  :  {cartItem?.card?.info?.price/100 || ""}</div>
            </div>
        })
        
         }
         <div className="bill-cont-main">Bill Details 
            <div className="biil-det">Item -Toatal  <span>{toatal}</span></div>
            <div className="biil-det">Handling Fee</div>
            <div className="biil-det">delivery partner Fee</div>
            <div className="biil-det">GST and charges</div>
            <div className="biil-det">To Pay </div>
         </div>
        </div>
    )
}

export default CartPage;