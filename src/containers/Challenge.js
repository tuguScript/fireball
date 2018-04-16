import React, { Component } from 'react';
import { Platform, StyleSheet, Text, View, FlatList, TouchableOpacity, Image } from 'react-native';
import { RkStyleSheet, RkText, RkTextInput } from 'react-native-ui-kitten';
import Avatar from '../components/Avatar';
import Conversations from '../data/conversations';

export default class Challenge extends React.Component {
  state = {
    data: [],
  };

  constructor() {
    super();
    this.renderItem = this.renderItem.bind(this);
  }

  componentDidMount() {
    this.chats = Conversations;
    this.setState(
      {
        data: this.chats,
      },
      () => {
        console.log(this.state.data);
      },
    );
  }

  renderItem(info) {
    let name = `Tugi`;
    let last = info.item.messages[info.item.messages.length - 1];
    return (
      <TouchableOpacity
        onPress={() => this.props.navigation.navigate('Chat', { userId: info.item.withUser.id })}
      >
        <View style={styles.container}>
          <Image
            style={{ width: 50, height: 50 }}
            source={{
              uri: info.item.photo,
            }}
          />
          <View style={styles.content}>
            <View style={styles.contentHeader}>
              <RkText rkType="header5">{name}</RkText>
            </View>
            <RkText numberOfLines={2} rkType="primary3 mediumLine" style={{ paddingTop: 5 }}>
              {last.text}
            </RkText>
          </View>
        </View>
      </TouchableOpacity>
    );
  }

  render() {
    return (
      <FlatList
        style={styles.root}
        data={this.state.data}
        // extraData={this.state}
        // ItemSeparatorComponent={this._renderSeparator}
        // keyExtractor={this._keyExtractor}
        renderItem={this.renderItem}
      />
    );
  }
}

let styles = RkStyleSheet.create(theme => ({
  root: {
    backgroundColor: 'white',
    marginTop: '4%',
  },
  searchContainer: {
    backgroundColor: theme.colors.screen.bold,
    paddingHorizontal: 16,
    paddingVertical: 10,
    height: 60,
    alignItems: 'center',
  },
  container: {
    paddingLeft: 19,
    paddingRight: 16,
    paddingBottom: 12,
    paddingTop: 7,
    flexDirection: 'row',
  },
  content: {
    marginLeft: 16,
    flex: 1,
  },
  contentHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 6,
  },
  separator: {
    height: StyleSheet.hairlineWidth,
    backgroundColor: theme.colors.border.base,
  },
}));
