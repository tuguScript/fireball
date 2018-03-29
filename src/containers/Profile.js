import React, { Component } from 'react';
import { Platform, StyleSheet, Text, View } from 'react-native';
import Button from '../components/Button';
import firebase from '../lib/firebase';

export default class Profile extends React.Component {
  constructor() {
    super();
    this._bootstrapAsync();
    this.state = {
      currentUser: {
        email: 'tug',
      },
    };
  }

  // Fetch the token from storage then navigate to our appropriate place
  _bootstrapAsync = async () => {
    firebase.auth().onAuthStateChanged(user => {
      let currentUser = firebase.auth().currentUser;
      let name, email, photoUrl, uid, emailVerified;

      if (currentUser != null) {
        console.log(currentUser);
        this.setState({ currentUser });
        email = currentUser.email;
        photoUrl = currentUser.photoURL;
        emailVerified = currentUser.emailVerified;
        uid = currentUser.uid; // The user's ID, unique to the Firebase project. Do NOT use
        // this value to authenticate with your backend server, if
        // you have one. Use User.getToken() instead.
      }
    });
  };

  render() {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>{this.state.currentUser.email}</Text>
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
