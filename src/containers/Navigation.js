
import React, { Component } from 'react';
import { StatusBar, ActivityIndicator, Platform, StyleSheet, Text, View } from 'react-native';
import { SwitchNavigator, StackNavigator, TabNavigator, TabBarBottom } from 'react-navigation';
import Register from '../components/Register';
import Login from '../components/Login';
import firebase from '../lib/firebase';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Clubs from '../containers/Clubs';
import Feed from '../containers/Feed';
import Challenge from '../containers/Challenge';
import Games from '../containers/Games';
import Profile from '../containers/Profile';
import DetailsScreen from '../containers/Details';
import AuthLoadingScreen from '../components/AuthLoadingScreen';

const FeedStack = StackNavigator({
  Feed: { screen: Feed },
  Details: { screen: DetailsScreen },
});

const AppStack = TabNavigator(
  {
    Feed: {
      screen: FeedStack,
    },
    Clubs: {
      screen: Clubs,
    },
    Challenge: {
      screen: Challenge,
    },
    Games: { screen: Games },
    Profile: { screen: Profile },
  },
  {
    navigationOptions: ({ navigation }) => ({
      tabBarIcon: ({ focused, tintColor }) => {
        const { routeName } = navigation.state;
        let iconName;
        if (routeName === 'Feed') {
          iconName = `ios-paper${focused ? '' : '-outline'}`;
        } else if (routeName === 'Clubs') {
          iconName = `ios-people${focused ? '' : '-outline'}`;
        } else if (routeName === 'Challenge') {
          iconName = `ios-radio-button-on${focused ? '' : '-outline'}`;
        } else if (routeName === 'Games') {
          iconName = `ios-calendar${focused ? '' : '-outline'}`;
        } else if (routeName === 'Profile') {
          iconName = `ios-person${focused ? '' : '-outline'}`;
        }

        // You can return any component that you like here! We usually use an
        // icon component from react-native-vector-icons
        return <Ionicons name={iconName} size={25} color={tintColor} />;
      },
    }),
    tabBarOptions: {
      activeTintColor: 'red',
      inactiveTintColor: 'blue',
    },
    tabBarComponent: TabBarBottom,
    tabBarPosition: 'bottom',
    animationEnabled: false,
    swipeEnabled: false,
  },
  {
    initialRouteName: 'Clubs',
  },
);

const AuthStack = StackNavigator({ Login, Register });

export default SwitchNavigator(
  {
    AuthLoading: AuthLoadingScreen,
    App: AppStack,
    Auth: AuthStack,
  },
  {
    initialRouteName: 'AuthLoading',
  },
);
