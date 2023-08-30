import { FAVORITE_TAB_SCREEN, HOME_TAB_SCREEN } from "@app/routes/app-route-labels";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { BottomNavigation, BottomNavigationTab, Icon } from "@ui-kitten/components";
import React from "react";
import Home from "./home/Home";
import Favorite from "./favorite/Favorite";
import { StyleSheet, Text } from "react-native";
import colors from "@app/theme/colors";
import { RFValue } from "react-native-responsive-fontsize";
import HeaderDashBaord from "./components/HeaderDashBaord";
import { verticalScale } from "react-native-size-matters";

const { Navigator, Screen } = createBottomTabNavigator();

/** buttom tab bar functon is called when navigate screen */
const BottomTabBar = ({ navigation, state }: { navigation: any, state: any }) => {
    return (
        <BottomNavigation
            selectedIndex={state.index}
            onSelect={index =>
                navigation.navigate(state.routeNames[index])
            }
            indicatorStyle={{ backgroundColor: colors.primary,height:verticalScale(1.5) }}
        >
            <BottomNavigationTab title={() => {
                return (
                    <Text style={[styles.textFontSize, { color: state.index == 0 ? colors.secondary : colors.primary}]}>
                        Home
                    </Text>
                )
            }}
                icon={PersonIcon(state.index)} />
            <BottomNavigationTab
                title={() => {
                    return (
                        <Text style={[styles.textFontSize, { color: state.index == 1 ? colors.secondary : colors.primary }]}>
                            Favorite
                        </Text>
                    )
                }}

                icon={FavoriteIcon(state.index)} />
        </BottomNavigation>
    )
}

/** App tab where tab screen is called */
export const AppTab = () => {
    return (<Navigator
        tabBar={(props: any) => <BottomTabBar {...props} />}
        initialRouteName={HOME_TAB_SCREEN}
        screenOptions={{
            headerShown: true
        }}>
        <Screen name={HOME_TAB_SCREEN} component={Home} options={{
            headerTitleAlign: 'center',
            headerTitle: props => (
                <HeaderDashBaord />
            ),
        }}/>
        <Screen name={FAVORITE_TAB_SCREEN} component={Favorite} options={{
            headerTitleAlign: 'center',
            headerTitle: props => (
                <HeaderDashBaord/>
            ),
        }}/>
    </Navigator>
    )
}


/** stylesheet for bottom tab */

const styles = StyleSheet.create({
    bottomNavigation: {
        marginVertical: 8,
    },
    textFontSize: {
        fontSize: RFValue(12),
        fontWeight:'600'
    }
});

/** home icon of tab */
const PersonIcon = (props: any) => {
    return (
        <Icon {...props} name={props == 0 ? 'home' : 'home-outline'} fill={props == 0 ? colors.secondary : colors.primary} />
    );
}
/** favorite icon of tab */
const FavoriteIcon = (props: any) => (
    <Icon {...props} name= {props == 1 ? 'star' :'star-outline'} fill={props == 1 ? colors.secondary : colors.primary} />
);