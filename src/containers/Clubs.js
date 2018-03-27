import React, { Component } from 'react';
import { Platform, StyleSheet, Text, View } from 'react-native';
import { RkButton } from 'react-native-ui-kitten';

export default class Clubs extends React.Component {
  state = {};
  render() {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>Clubs</Text>
        <RkButton>Click me!</RkButton>
      </View>
    );
  }
}
