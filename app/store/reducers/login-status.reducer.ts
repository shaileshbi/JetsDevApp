import { PayloadAction, createSlice } from "@reduxjs/toolkit";

const initialState: boolean = false;
/** this reducer for check the login status  */
export const userLoginStatusSlice = createSlice({
   name:'loginStatus',
   initialState,
   reducers:{
    setUserLoginStatus:(state:boolean,action:PayloadAction<boolean>)=>{
        return action.payload;
    }
   }
})

export default userLoginStatusSlice.reducer