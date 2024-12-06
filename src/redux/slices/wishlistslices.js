import { createSlice } from "@reduxjs/toolkit";

export const wishlistslices = createSlice({
    name: 'wishlist',
    initialState: [],
    reducers: {
        // to add item in the state
        addwishlistitems: (state, action) => {
            state.push(action.payload)
        },
        removewishlistitem: (state, action) => {
            return state.filter((item) => item.id != action.payload)
        }
    }
})

export const { addwishlistitems, removewishlistitem } = wishlistslices.actions

export default wishlistslices.reducer