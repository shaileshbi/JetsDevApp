import { createNavigationContainerRef } from "@react-navigation/native"

/** this variable is used for create the reference  */
 const navigationRef = createNavigationContainerRef<any>()

/** this function is used for navigate to other screen */
function navigate<T>(name:string,params?:T){
    if(navigationRef?.isReady()){
       navigationRef?.navigate(name,params)
    }
}

/** this funtion is used for remove the current screen 
 * and  back to previous screen 
 * or close the app  */
function goBack(){
    navigationRef?.goBack()
}

/** access all over the app */
export{
    navigationRef,
    navigate,
    goBack

}