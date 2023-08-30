import { PayloadAction, createSlice } from "@reduxjs/toolkit";

const initialState:boolean = false;

export const apiLoaderSlice = createSlice({
   name:'loader',
   initialState,
   reducers:{
    apiLoader:(state:boolean,action:PayloadAction<boolean>)=>{
        return action.payload
    }
   }
})

export default  apiLoaderSlice.reducer