import { APP_DASHBOARD_TAB } from "@app/routes/app-route-labels";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { AppTab } from "./dashboard-tab/dashboard-tab.routes";


const DashBoardStack = createNativeStackNavigator();

export const DashBoardNavigator = () => <DashBoardStack.Navigator
    initialRouteName={APP_DASHBOARD_TAB}
    screenOptions={{
        headerShown: false
    }}
>
    <DashBoardStack.Screen name={APP_DASHBOARD_TAB} component={AppTab} />
</DashBoardStack.Navigator>