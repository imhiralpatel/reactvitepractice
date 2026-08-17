import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const fetchProducts=createAsyncThunk('product', async ()=> {
    const resp= await fetch("https://dummyjson.com/products")
    const jsonResponce = await resp.json();

    return jsonResponce.products;
})

const initialState={
    item:[],
    status:undefined,
    error:null
}

const productSlice=createSlice({
    name:"productSlice",
    initialState,
    extraReducers:(builder)=>{
        builder.addCase(fetchProducts.fulfilled,(state, action)=>{
            state.status='succeeded',
            state.item=action.payload
        })
    }
})

export default productSlice.reducer