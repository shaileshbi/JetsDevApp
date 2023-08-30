import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";
import apiLoaderSlice from "./reducers/loader.reducer";
import userLoginStatusSlice from "./reducers/login-status.reducer";
import favoriteUserReducer from "./reducers/favorite-user.reducer";


/** combine reducer where all reducer will be bind */
const combineReducer = combineReducers({
    loader: apiLoaderSlice,
    loginStatus: userLoginStatusSlice,
    favoriteUser:favoriteUserReducer
})

/** store of reducer  */
export const store = configureStore({
    reducer: combineReducer,

})

export type JetsDevRootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
export const useAppDispatch = () => useDispatch<AppDispatch>();
/** use App Selector  */
export const useAppSelector: TypedUseSelectorHook<JetsDevRootState> = useSelector;
