import React from 'react';
import {
  KeyboardAvoidingView,
  StyleSheet,
  Text,
  TextInput,
  TouchableWithoutFeedback,
  View,
  ActivityIndicator,
} from 'react-native';
import colors from '../lib/colors';
import dismissKeyboard from 'react-native/Libraries/Utilities/dismissKeyboard';
import firebase from '../lib/firebase';
import {
  RkButton,
  RkText,
  RkTextInput,
  RkAvoidKeyboard,
  RkStyleSheet,
} from 'react-native-ui-kitten';
import { RkTheme } from 'react-native-ui-kitten';
import { scale, scaleModerate, scaleVertical } from '../lib/scale';

class Register extends React.Component {
  constructor(props) {
    super(props);
    this.register = this.register.bind(this);
    this.handleEmailChange = this.handleEmailChange.bind(this);
    this.handlePasswordChange = this.handlePasswordChange.bind(this);
  }
  state = {
    email: '',
    password: '',
    isLoading: false,
  };
  setIsLoading(isLoading) {
    this.setState({ isLoading });
  }
  handleEmailChange(email) {
    this.setState({ email });
  }

  handlePasswordChange(password) {
    this.setState({ password });
  }
  async register() {
    // const { resetToHome } = this.props;
    const { email, password } = this.state;
    // const email = 'tuguscript@gmail.com';
    // const password = '123456';
    this.setIsLoading(true);
    console.log(this.state);

    try {
      await firebase.auth().createUserWithEmailAndPassword(email, password);

      const currentUser = firebase.auth().currentUser;

      //   await firebase.database().ref(`users/${currentUser.uid}`).set({ email, name: this.name });

      //   resetToHome();
      console.log(currentUser);
    } catch (error) {
      console.warn(error.message);
      this.setIsLoading(false);
    }
  }
  render() {
    return (
      <RkAvoidKeyboard
        style={styles.screen}
        onStartShouldSetResponder={e => true}
        onResponderRelease={e => Keyboard.dismiss()}
      >
        <View style={styles.header}>
          {/* {renderIcon()} */}
          <RkText rkType="light h1">Fireball</RkText>
          <RkText rkType="logo h0">Tinder for table tennis players</RkText>
        </View>
        <View style={styles.content}>
          <View>
            <RkTextInput
              rkType="rounded"
              placeholder="E-mail"
              onChangeText={this.handleEmailChange}
              autoCorrect={false}
              blurOnSubmit={false}
              keyboardType="email-address"
            />
            <RkTextInput
              rkType="rounded"
              placeholder="Password"
              onChangeText={this.handlePasswordChange}
              secureTextEntry={true}
            />
          </View>
          <RkButton style={styles.LoginButton} onPress={() => this.register()}>
            {this.state.isLoading ? (
              <ActivityIndicator color={colors.white} style={[styles.centering]} />
            ) : (
              'Register'
            )}
          </RkButton>
        </View>
      </RkAvoidKeyboard>
    );
  }
}

export default Register;

let styles = RkStyleSheet.create(theme => ({
  screen: {
    padding: scaleVertical(16),
    flex: 1,
    justifyContent: 'space-between',
    backgroundColor: theme.colors.screen.base,
  },
  image: {
    height: scaleVertical(77),
    resizeMode: 'contain',
  },
  header: {
    paddingBottom: scaleVertical(10),
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
  },
  content: {
    justifyContent: 'space-between',
  },
  LoginButton: {
    marginBottom: scaleVertical(10),
    marginHorizontal: '30%',
  },
  save: {
    marginVertical: 20,
  },
  buttons: {
    flexDirection: 'row',
    marginBottom: scaleVertical(24),
    marginHorizontal: 24,
    justifyContent: 'space-around',
  },
  textRow: {
    flexDirection: 'row',
    justifyContent: 'center',
  },
  button: {
    borderColor: theme.colors.border.solid,
  },
  footer: {},
}));
