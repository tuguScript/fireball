import React, { Component } from 'react';
import { Platform, StyleSheet, Text, View } from 'react-native';
import { StackNavigator, TabNavigator, TabBarBottom } from 'react-navigation';
import Register from '../components/Register';
import Login from '../components/Login';
import firebase from '../lib/firebase';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Clubs from '../containers/Clubs';
import Feed from '../containers/Feed';
import Challenge from '../containers/Challenge';
import Games from '../containers/Games';
import Profile from '../containers/Profile';

const Navigator = TabNavigator(
  {
    Feed: {
      screen: Feed,
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
      activeTintColor: 'tomato',
      inactiveTintColor: 'green',
    },
    tabBarComponent: TabBarBottom,
    tabBarPosition: 'bottom',
    animationEnabled: false,
    swipeEnabled: false,
  },
  {
    initialRouteName: 'Home',
  },
);

export default Navigator;
