import React, { Component } from 'react';
import { Platform, StyleSheet, Text, View, Dimensions, Animated, Image } from 'react-native';
import Interactable from 'react-native-interactable';
import Button from '../components/Button';

const Screen = Dimensions.get('window');

export default class Feed extends React.Component {
  constructor(props) {
    super(props);
    this._deltaX = new Animated.Value(0);
  }
  render() {
    return (
      <View style={styles.container}>
        {/* <Button text="Go to Details" onPress={() => this.props.navigation.navigate('Details')} /> */}

        <Interactable.View
          style={styles.container}
          horizontalOnly
          snapPoints={[{ x: 390 }, { x: 0, damping: 0.8 }, { x: -390 }]}
          animatedValueX={this._deltaX}
        >
          <Animated.View
            style={[
              styles.card,
              {
                transform: [
                  {
                    rotate: this._deltaX.interpolate({
                      inputRange: [-250, 0, 250],
                      outputRange: ['10deg', '0deg', '-10deg'],
                    }),
                  },
                ],
              },
            ]}
          >
            <Image
              style={styles.image}
              source={{
                uri:
                  'https://images.unsplash.com/photo-1491433415365-da7acd5425cc?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=dcfd6f04b04b4536025f89bbbfc3f1c8&auto=format&fit=crop&w=1950&q=80',
              }}
            />

            <Animated.View
              style={[
                styles.overlay,
                { backgroundColor: '#de6d77' },
                {
                  opacity: this._deltaX.interpolate({
                    inputRange: [-120, 0],
                    outputRange: [0.8, 0],
                    extrapolateLeft: 'clamp',
                    extrapolateRight: 'clamp',
                  }),
                },
              ]}
            >
              <Text style={styles.overlayText}>Trash</Text>
            </Animated.View>

            <Animated.View
              style={[
                styles.overlay,
                { backgroundColor: '#2f9a5d' },
                {
                  opacity: this._deltaX.interpolate({
                    inputRange: [0, 120],
                    outputRange: [0, 0.8],
                    extrapolateLeft: 'clamp',
                    extrapolateRight: 'clamp',
                  }),
                },
              ]}
            >
              <Text style={styles.overlayText}>Keep</Text>
            </Animated.View>
          </Animated.View>
        </Interactable.View>

        <View style={{ marginBottom: 40 }}>
          <Text style={styles.text}>Swipe LEFT to trash</Text>
          <Text style={styles.text}>or RIGHT to keep</Text>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#efefef',
    width: Screen.width + 80,
    alignSelf: 'center',
  },
  card: {
    width: Screen.width - 40,
    marginHorizontal: 20,
    borderColor: 'white',
    borderWidth: 3,
  },
  image: {
    width: Screen.width - 40 - 6,
    height: Screen.width - 40 - 6,
  },
  overlay: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    justifyContent: 'center',
    alignItems: 'center',
  },
  overlayText: {
    fontSize: 60,
    color: 'white',
  },
  text: {
    textAlign: 'center',
    marginTop: 4,
    fontSize: 18,
    fontWeight: 'bold',
    color: '#aaaaaa',
  },
});
