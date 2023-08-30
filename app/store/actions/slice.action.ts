import { favoriteUserSlice } from "../reducers/favorite-user.reducer";
import { apiLoaderSlice } from "../reducers/loader.reducer";
import { userLoginStatusSlice } from "../reducers/login-status.reducer";


/** api loader action */
export const { apiLoader } = apiLoaderSlice.actions
/** check the login status  action */
export const { setUserLoginStatus } = userLoginStatusSlice.actions
/** favorite user all action  */
export const { setUsers, setUserFavorite, setUserUnFavorite, deleteUserUnFavorite } = favoriteUserSlice.actions