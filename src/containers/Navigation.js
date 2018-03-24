import React, { Component } from 'react';
import { Platform, StyleSheet, Text, View, Button } from 'react-native';
import { StackNavigator } from 'react-navigation';
import Register from '../components/Register';

class HomeScreen extends React.Component {
  render() {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>Home Screen</Text>
        <Button title="Go to Details" onPress={() => this.props.navigation.navigate('Details')} />
        <Button title="Go to Register" onPress={() => this.props.navigation.navigate('Register')} />
      </View>
    );
  }
}

class DetailsScreen extends React.Component {
  render() {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>Details Screen</Text>
      </View>
    );
  }
}

const Navigator = StackNavigator(
  {
    Home: {
      screen: HomeScreen,
    },
    Details: {
      screen: DetailsScreen,
    },
    Register: { screen: Register },
  },
  {
    initialRouteName: 'Home',
  },
);

export default Navigator;
