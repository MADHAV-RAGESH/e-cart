import { configureStore } from "@reduxjs/toolkit";
import wishlistslices from "./slices/wishlistslices";

import  cartslice  from "./slices/cartslice";


const store = configureStore({
    reducer:{
        wishlist  : wishlistslices,
        Cart  : cartslice
    }
})

export default store