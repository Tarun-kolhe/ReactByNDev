
import {configureStore} from "@reduxjs/toolkit" 

import CartReducer from "./CartSlice"

const AppStore =  configureStore ({
 reducer: { // for each slice will have diffrent reducers 
    cart : CartReducer

 }
})

export default AppStore;