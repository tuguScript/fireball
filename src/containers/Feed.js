import React, { Component } from 'react';
import { Platform, StyleSheet, Text, View } from 'react-native';
import Button from '../components/Button';

export default class Feed extends React.Component {
  loadUser() {
    firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        // User is signed in.
        const displayName = user.displayName;
        const email = user.email;
        const emailVerified = user.emailVerified;
        const photoURL = user.photoURL;
        const isAnonymous = user.isAnonymous;
        const uid = user.uid;
        const providerData = user.providerData;
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
