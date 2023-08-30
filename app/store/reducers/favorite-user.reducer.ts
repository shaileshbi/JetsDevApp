import { UserResType } from "@app/core/type/UserResType";
import { PayloadAction, createSlice } from "@reduxjs/toolkit";

interface favUser{
    users:Array<UserResType>
}
const initialState:favUser = {
   users:[]
}
export const favoriteUserSlice = createSlice({
    name:'favoriteUser',
    initialState,
    reducers:{
        setUsers:(state:favUser,action:PayloadAction<UserResType>)=>{
        return {users:action.payload}
        },
        setUserFavorite:(state:favUser,action:PayloadAction<UserResType>)=>{
            let favoriteItem = [...state?.users];
            let index = state?.users?.findIndex((el:UserResType) => el?.login?.username === action.payload);
            favoriteItem[index] = {...favoriteItem[index], status: true}; 
            return  {...state,users:favoriteItem}
        },
        setUserUnFavorite:(state:favUser,action:PayloadAction<UserResType>)=>{
            let unFavoriteItem = [...state?.users]; 
            let index = state?.users.findIndex((el:UserResType) => el?.login?.username === action.payload);
            unFavoriteItem[index] = {...unFavoriteItem[index], status: false}; 
            return  {...state,users:unFavoriteItem}
        },
        deleteUserUnFavorite:(state:favUser,action:PayloadAction<UserResType>)=>{
            return {...state,users:state.users.filter((item:UserResType)=>item.status!==action.payload)}
           },
         
           
    }
})

export default favoriteUserSlice.reducer