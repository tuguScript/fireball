import React, { Component } from 'react';
import { Platform, StyleSheet, Text, View } from 'react-native';

export default class DetailsScreen extends React.Component {
  render() {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text>Details!</Text>
      </View>
    );
  }
}

DetailsScreen.navigationOptions = {
  title: 'this.props.id',
};
