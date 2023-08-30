import Toast from "@app/core/helpers/Toast"
import { loginType } from "./type/login.type"
import { useAppDispatch } from "@app/store"
import { setUserLoginStatus } from "@app/store/actions/slice.action"

const LoginViewModel = ()=>{
    const dispatch = useAppDispatch()

/** on Login event where set the login status   */
   const  onLoginClick = (values:loginType)=>{
  
    if(values.email=='reactnative@jetdevs.com' && values.password=='jetdevs@123'){
        dispatch(setUserLoginStatus(true)) 
        Toast("Login Sucess", '', 'success') 
    }else{
        Toast("Please enter the corrent email id and password", '', 'info') 
    }
   
    }

    return{
        onLoginClick
    }
}

export{
    LoginViewModel
}