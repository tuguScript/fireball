import React, { Component } from 'react';
import { Platform, StyleSheet, Text, View } from 'react-native';
import Button from '../components/Button';

export default class Feed extends React.Component {
  render() {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>Home Screen</Text>
        <Button text="Go to Details" onPress={() => this.props.navigation.navigate('Details')} />
      </View>
    );
  }
}
