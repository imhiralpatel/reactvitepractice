import { createSlice } from "@reduxjs/toolkit"


const initialState={
    value:0
}

const addTocart = createSlice({
    name:'cart',
    initialState,
    reducers:{
        addItem:(state)=>{
            state.value+=1;
        },
        removeItem:(state)=>{
            // if(state.value > 0){
            //     state.value-=1;
            // }
            state.value > 0 ? state.value -=1 : null;
        },
        clearAllItems:(state)=>{
                state.value=0;
        }
    }
})

export const {addItem, removeItem, clearAllItems} = addTocart.actions;

export default addTocart.reducer