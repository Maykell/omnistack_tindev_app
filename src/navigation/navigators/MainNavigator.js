import React from "react";
import { createSwitchNavigator } from "react-navigation";

import MainScreen from "../../screens/MainScreen";
import LoginScreen from "../../screens/LoginScreen";

import { screens } from "../../config";
import { defaultTheme } from "../../styles/themes";
import { colors } from "../../styles";

const MainNavigator = createSwitchNavigator(
    {
        [screens.LoginScreen]: {
            screen: LoginScreen,
            navigationOptions: {
                title: "Login",
                header: null
            }
        },
        [screens.MainScreen]: {
            screen: MainScreen,
            navigationOptions: {
                title: "Tindev"
            }
        }
    },
    {
        initialRouteName: screens.LoginScreen,
        defaultNavigationOptions: {
            headerStyle: {
                backgroundColor: defaultTheme.primary
            },
            headerTintColor: colors.white,
            headerTitleStyle: {
                fontWeight: "bold"
            }
        },
        headerBackTitleVisible: false
    }
);

export default MainNavigator;
