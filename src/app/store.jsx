import { configureStore } from "@reduxjs/toolkit";
import  productsReducer  from "../Features/products/ProductsSlice";

export const store = configureStore({
    reducer:{
        productsR:productsReducer
    }
})