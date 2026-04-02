import { createSlice } from "@reduxjs/toolkit";

const CartSlice= createSlice({
    name:'cart',
    initialState: {
        items:[]
    },
    reducers:{
        addItem: (state,action) =>{
          state.items.push(action.payload)
        },
        RemoveItem: () =>{
         
        },
        ClearCart :(state,action) =>{
            state.items.length=0;
        }
    }
});

export const {addItem,RemoveItem,ClearCart} =CartSlice.actions;
export default CartSlice.reducer;