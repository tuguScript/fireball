import React, { Component } from 'react';
import { Platform, StyleSheet, Text, View } from 'react-native';
import { StackNavigator, TabNavigator, TabBarBottom } from 'react-navigation';
import Register from '../components/Register';
import Login from '../components/Login';
import Button from '../components/Button';
import firebase from '../lib/firebase';
import Ionicons from 'react-native-vector-icons/Ionicons';

class Feed extends React.Component {
  loadUser() {
    firebase.auth().onAuthStateChanged(function(user) {
      if (user) {
        // User is signed in.
        var displayName = user.displayName;
        var email = user.email;
        var emailVerified = user.emailVerified;
        var photoURL = user.photoURL;
        var isAnonymous = user.isAnonymous;
        var uid = user.uid;
        var providerData = user.providerData;
        console.log(user);
      } else {
        console.log('logged out');
      }
    });
  }
  render() {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>Home Screen</Text>
        <Button text="Load user" onPress={() => this.loadUser()} />
        <Button text="Go to Details" onPress={() => this.props.navigation.navigate('Details')} />
        <Button text="Go to Register" onPress={() => this.props.navigation.navigate('Register')} />
        <Button text="Go to Login" onPress={() => this.props.navigation.navigate('Login')} />
        <Button
          text="Sign out"
          onPress={() =>
            firebase
              .auth()
              .signOut()
              .then(
                () => console.log('Signed Out'),
                error => {
                  console.error('Sign Out Error', error);
                },
              )
          }
        />
      </View>
    );
  }
}

class DetailsScreen extends React.Component {
  state = {
    displayName: 'tug',
  };
  render() {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>{this.state.displayName}</Text>
      </View>
    );
  }
}

DetailsScreen.navigationOptions = {
  title: 'Details screen',
};

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
    Details: {
      screen: DetailsScreen,
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
        } else if (routeName === 'Details') {
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
