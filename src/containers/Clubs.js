import React, { Component } from 'react';
import { Platform, StyleSheet, Text, View } from 'react-native';
import { RkButton } from 'react-native-ui-kitten';
import Interactable from 'react-native-interactable';
import {
  Card,
  CardTitle,
  CardContent,
  CardAction,
  CardButton,
  CardImage,
} from 'react-native-cards';

export default class Clubs extends React.Component {
  state = {};
  render() {
    return (
      <View style={styles.container}>
        <Interactable.View
          key="first"
          horizontalOnly={true}
          snapPoints={[{ x: 360 }, { x: 0, damping: 0.5 }, { x: -360 }]}
        >
          <View style={styles.card}>
            <Card>
              <CardImage
                source={{
                  uri:
                    'https://images.unsplash.com/photo-1519162952575-c6c7199502a3?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=3c5351b56f47c892ad0871f80e913f23&auto=format&fit=crop&w=1950&q=80',
                }}
              />
              <CardAction separator={false} inColumn={false}>
                <CardButton onPress={() => {}} title="Share" color="#FEB557" />
                <CardButton onPress={() => {}} title="Explore" color="#FEB557" />
              </CardAction>
            </Card>
          </View>
        </Interactable.View>

        <Interactable.View
          key="second"
          horizontalOnly={true}
          snapPoints={[{ x: 360 }, { x: 0 }, { x: -360 }]}
        >
          <View style={styles.card}>
            <Card>
              <CardImage
                source={{
                  uri:
                    'https://images.unsplash.com/photo-1508954528226-0b941060b8bf?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=bc9801b08d7ffedf4ce75d2e43b81d5f&auto=format&fit=crop&w=1446&q=80',
                }}
              />
              <CardAction separator={false} inColumn={false}>
                <CardButton onPress={() => {}} title="Share" color="#FEB557" />
                <CardButton onPress={() => {}} title="Explore" color="#FEB557" />
              </CardAction>
            </Card>
          </View>
        </Interactable.View>

        <Interactable.View
          key="third"
          horizontalOnly={true}
          snapPoints={[{ x: 360 }, { x: 0, damping: 0.8 }, { x: -360 }]}
        >
          <View style={styles.card}>
            <Card>
              <CardImage
                source={{
                  uri:
                    'https://images.unsplash.com/photo-1490576198307-6ff97609a0cc?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=bb643d33f418ef6974cf0e6ebfca6cda&auto=format&fit=crop&w=1950&q=80',
                }}
              />
              <CardAction separator={false} inColumn={false}>
                <CardButton onPress={() => {}} title="Share" color="#FEB557" />
                <CardButton onPress={() => {}} title="Explore" color="#FEB557" />
              </CardAction>
            </Card>
          </View>
        </Interactable.View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
  },
  card: {
    width: 300,
    height: 180,
    // backgroundColor: 'red',
    borderRadius: 8,
    marginVertical: 6,
  },
});
