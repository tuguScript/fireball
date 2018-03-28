import React from 'react'
import { Provider } from 'react-redux'
import { createStore } from 'redux'

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
