import React, { Component } from 'react';
import { Platform, StyleSheet, Text, View } from 'react-native';
import Button from '../components/Button';
import firebase from '../lib/firebase';

export default class Feed extends React.Component {
  render() {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>Home Screen</Text>
        {/* <Button title="Go to Details" onPress={() => this.props.navigation.navigate('Details')} /> */}
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
                (error) => {
                  console.error('Sign Out Error', error);
                },
              )
          }
        />
      </View>
    );
  }
}
