import React from "react";
import {View, Text} from "react-native";
import {createStackNavigator, createAppContainer} from "react-navigation";
import LoginContainer from './screens/Login/container/LoginContainer';
import AppIntroContainer from './screens/AppIntro/container/AppIntroContainer';

const AppNavigator = createStackNavigator({
        Login: {
            screen: LoginContainer
        },
        AppIntroContainer: {
            screen: AppIntroContainer
        }
    },
    {
        initialRouteName: "AppIntroContainer"
    });

export default createAppContainer(AppNavigator);