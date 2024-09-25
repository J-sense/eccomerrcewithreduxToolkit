import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import axios from 'axios'



const initialState= {
  products:[],
  isLoading:false,
  error:null
}
export const fetchData = createAsyncThunk('products/fetchData', async()=>{
    const res = await axios.get('http://localhost:3003/products')
    console.log(res.data)
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
        state.products = action.payload; // Fixed the typo here (from `prducts` to `products`)
        state.isLoading = false;
      })
      .addCase(fetchData.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.error.message || 'Something Went Wrong';
      });
  }
});


// Action creators are generated for each case reducer function


export default productsSlice.reducer