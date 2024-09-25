import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import axios from 'axios'



const initialState= {
  products:[],
  isLoading:false,
  error:null
}
export const fetchData = createAsyncThunk('products/fetchData', async()=>{
    const res = await axios.get('http://localhost:3003/products')
    return res.data;
})
export const deleteData = createAsyncThunk('products/deleteData', async(id)=>{
    const res = await axios.get(`http://localhost:3003/products/${id}`)
    return id;
})
export const productsSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchData.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(fetchData.fulfilled, (state, action) => {
        state.products = action.payload; 
        state.isLoading = false;
      })
      .addCase(fetchData.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.error.message || 'Something Went Wrong';
      })
      .addCase(deleteData.fulfilled, (state,action)=>{
        state.products = state.products.filter(product => product.id !== action.payload)
      })
      
  }
});


// Action creators are generated for each case reducer function


export default productsSlice.reducer