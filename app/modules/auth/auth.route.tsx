import { LOGIN_SCREEN } from "@app/routes/app-route-labels";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Login from "./login/Login";

const Stack = createNativeStackNavigator()

/** auth naviagator where all login screen is here */
export const AuthNavigator = ()=>{
    return(
        <Stack.Navigator
         initialRouteName={LOGIN_SCREEN}
         screenOptions={{
            headerShown:false,
         }}
        >
        <Stack.Screen name ={LOGIN_SCREEN} component={Login}/>
        </Stack.Navigator>
    )
}