import React from 'react';
import {
  KeyboardAvoidingView,
  StyleSheet,
  Text,
  TextInput,
  TouchableWithoutFeedback,
  View,
} from 'react-native';
import colors from '../lib/colors';
import dismissKeyboard from 'react-native/Libraries/Utilities/dismissKeyboard';
import firebase from '../lib/firebase';
import Button from '../components/Button';

class Login extends React.Component {
  constructor(props) {
    super(props);
    this.login = this.login.bind(this);
    this.handleEmailChange = this.handleEmailChange.bind(this);
    this.handlePasswordChange = this.handlePasswordChange.bind(this);
  }
  state = {
    email: '',
    password: '',
    isLoading: false,
    displayName: '',
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

  async login() {
    // const { resetToHome } = this.props;
    const { email, password } = this.state;
    this.setIsLoading(true);
    console.log(this.state);

    try {
      await firebase.auth().signInWithEmailAndPassword(email, password);

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
      <KeyboardAvoidingView behavior="padding" keyboardVerticalOffset={60} style={styles.full}>
        <TouchableWithoutFeedback onPress={dismissKeyboard} style={styles.full}>
          <View style={styles.container}>
            <View style={styles.headerContainer}>
              <Text style={styles.title}>Title here</Text>
              <Text style={styles.subTitle}>
                {this.name}subTitle here
                {'\n'}
                {this.state.displayName}
              </Text>
            </View>
            <Text style={styles.main}>main text</Text>
            <View style={styles.formContainer}>
              <View style={styles.inputContainer}>
                <TextInput
                  autoCapitalize="none"
                  autoCorrect={false}
                  blurOnSubmit={false}
                  keyboardType="email-address"
                  onChangeText={this.handleEmailChange}
                  onSubmitEditing={this.focusPasswordInput}
                  placeholder="email"
                  ref={this.setEmailInput}
                  returnKeyType="next"
                  style={styles.input}
                />
                <TextInput
                  onChangeText={this.handlePasswordChange}
                  placeholder="password"
                  ref={this.setPasswordInput}
                  secureTextEntry
                  style={styles.input}
                />
              </View>
              {/* {this.renderNotice()} */}
              <Button text="Login" onPress={this.login} indicator={this.state.isLoading} />
              <Button text="Register" onPress={() => this.props.navigation.navigate('Register')} />
            </View>
          </View>
        </TouchableWithoutFeedback>
      </KeyboardAvoidingView>
    );
  }
}

export default Login;

const styles = StyleSheet.create({
  buttonContent: {
    color: 'white',
    fontWeight: 'bold',
  },
  container: {
    alignItems: 'stretch',
    backgroundColor: 'whitesmoke',
    flex: 1,
    justifyContent: 'space-around',
    paddingHorizontal: 60,
  },
  formContainer: {
    alignItems: 'center',
  },
  full: {
    flex: 1,
  },
  headerContainer: {
    alignItems: 'center',
  },
  icon: {
    marginRight: 16,
  },
  input: {
    backgroundColor: 'white',
    borderColor: 'lightgray',
    borderRadius: 5,
    borderWidth: StyleSheet.hairlineWidth,
    fontSize: 14.5,
    height: 45,
    margin: 5,
    padding: 10,
  },
  inputContainer: {
    alignItems: 'stretch',
    alignSelf: 'stretch',
  },
  loginButton: {
    backgroundColor: colors.deepNerd,
  },
  main: {
    color: colors.nerd,
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  notice: {
    color: colors.nerd,
    fontSize: 12,
  },
  registerButton: {
    backgroundColor: colors.darkNerd,
  },
  subTitle: {
    color: 'slategray',
    fontSize: 13.5,
    lineHeight: 20,
    textAlign: 'center',
  },
  title: {
    color: 'slategray',
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
  },
});
