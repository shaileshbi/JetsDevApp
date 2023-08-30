import Toast from "@app/core/helpers/Toast"
import { loginType } from "./type/login.type"
import { useAppDispatch } from "@app/store"
import { setUserLoginStatus } from "@app/store/actions/slice.action"

const LoginViewModel = ()=>{
    const dispatch = useAppDispatch()

/** on Login event where set the login status   */
   const  onLoginClick = (values:loginType)=>{
    dispatch(setUserLoginStatus(true)) 
    Toast("Login Sucess", '', 'success')
    }

    return{
        onLoginClick
    }
}

export{
    LoginViewModel
}