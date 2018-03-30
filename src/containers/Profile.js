import React, { Component } from 'react';
import { Platform, StyleSheet, Text, View, ScrollView, Image } from 'react-native';
import Button from '../components/Button';
import firebase from '../lib/firebase';
import { RkStyleSheet, RkText } from 'react-native-ui-kitten';

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
      <ScrollView style={styles.root}>
        <View style={[styles.header, styles.bordered]}>
          <Image
            style={styles.image}
            source={{
              uri: `${this.state.currentUser.photoURL}`,
            }}
          />
          <RkText rkType="header2">{this.state.currentUser.displayName}</RkText>
          <RkText rkType="header2">{this.state.currentUser.email}</RkText>
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

        <View style={styles.userInfo}>
          <View style={styles.section}>
            <RkText rkType="header3" style={styles.space}>
              {`1`}
            </RkText>
            <RkText rkType="secondary1 hintColor">Posts</RkText>
          </View>
          <View style={styles.section}>
            <RkText rkType="header3" style={styles.space}>
              {`3`}
            </RkText>
            <RkText rkType="secondary1 hintColor">Followers</RkText>
          </View>
          <View style={styles.section}>
            <RkText rkType="header3" style={styles.space}>
              {`4`}
            </RkText>
            <RkText rkType="secondary1 hintColor">Following</RkText>
          </View>
        </View>
      </ScrollView>
    );
  }
}

let styles = RkStyleSheet.create(theme => ({
  root: {
    backgroundColor: theme.colors.screen.base,
  },
  image: {
    width: 200,
    height: 200,
  },
  header: {
    alignItems: 'center',
    paddingTop: 25,
    paddingBottom: 17,
  },
  userInfo: {
    flexDirection: 'row',
    paddingVertical: 18,
  },
  bordered: {
    borderBottomWidth: 1,
    borderColor: theme.colors.border.base,
  },
  section: {
    flex: 1,
    alignItems: 'center',
  },
  space: {
    marginBottom: 3,
  },
  separator: {
    backgroundColor: theme.colors.border.base,
    alignSelf: 'center',
    flexDirection: 'row',
    flex: 0,
    width: 1,
    height: 42,
  },
  buttons: {
    flexDirection: 'row',
    paddingVertical: 8,
  },
  button: {
    marginTop: 18,
    alignSelf: 'center',
    width: 140,
  },
}));
