/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import { createStore } from 'redux';
import { Platform, StyleSheet, Text, View } from 'react-native';
import { StackNavigator } from 'react-navigation';
import { Provider } from 'react-redux';
import Navigation from './containers/Navigation';
// import reducers from './reducers';

// const store = createStore(reducers);

const App = () => <Navigation />;

export default App;
