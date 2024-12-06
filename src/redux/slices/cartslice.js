import { createSlice } from "@reduxjs/toolkit";

export const cartslice = createSlice({
    name :'cart',
    initialState:[],
    reducers:{
        additemCart : (state, action)=>{
            state.push(action.payload)
        },
        removeCartitem:(state,action)=>{
            return state.filter((item) => item.id != action.payload)
        },
        emptyCart : (state)=>{
            return state=[]
        }
       


    }
})

export const {additemCart,removeCartitem, emptyCart} = cartslice.actions

export default cartslice.reducer