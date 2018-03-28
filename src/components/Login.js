import React from 'react';
import {
  KeyboardAvoidingView,
  StyleSheet,
  Text,
  TextInput,
  TouchableWithoutFeedback,
  View,
  Image,
  Keyboard,
  ActivityIndicator,
} from 'react-native';
import colors from '../lib/colors';
import dismissKeyboard from 'react-native/Libraries/Utilities/dismissKeyboard';
import firebase, { provider, auth, FBprovider } from '../lib/firebase';
import Button from '../components/Button';
import {
  RkButton,
  RkText,
  RkTextInput,
  RkAvoidKeyboard,
  RkStyleSheet,
} from 'react-native-ui-kitten';
// import { FontAwesome } from '../../assets/icons';
// import { GradientButton } from '../../components/gradientButton';
import { RkTheme } from 'react-native-ui-kitten';
import { scale, scaleModerate, scaleVertical } from '../lib/scale';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import FBSDK, { LoginManager, AccessToken } from 'react-native-fbsdk';

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

  async fbAuth() {
    LoginManager.logInWithReadPermissions(['public_profile', 'email']).then(
      function(result) {
        if (result.isCancelled) {
          console.log('Login was cancelled');
        } else {
          AccessToken.getCurrentAccessToken().then(data => {
            const credential = FBprovider.FacebookAuthProvider.credential(data.accessToken);
            console.log('end :62', data.accessToken);
            firebase
              .auth()
              .signInWithCredential(credential)
              .then(result => {
                console.log('logged in succes');
              })
              .catch(error => {
                console.log(error);
              });
          });
        }
      },
      function(error) {
        console.log('Login failed with error: ' + error);
      },
    );
  }

  async login() {
    // const { resetToHome } = this.props;
    const { email, password } = this.state;
    this.setIsLoading(true);
    console.log(this.state);

    try {
      await auth.signInWithEmailAndPassword(email, password);

      const currentUser = auth.currentUser;

      //   await firebase.database().ref(`users/${currentUser.uid}`).set({ email, name: this.name });

      //   resetToHome();
      console.log(currentUser);
    } catch (error) {
      console.warn(error.message);
      this.setIsLoading(false);
    }
  }
  signInWithGoogle() {
    auth.signInWithPopup(provider).then(result => {
      const currentUser = auth.currentUser;
      // This gives you a Google Access Token. You can use it to access the Google API.
      // let token = result.credential.accessToken;
      // const user = result.user;
      // this.setState({
      //   user,
      //   token,
      // });
    });
  }
  render() {
    // let renderIcon = () => {
    //   if (RkTheme.current.name === 'light')
    //     return <Image style={styles.image} source={require('../../assets/images/logo.png')}/>;
    //   return <Image style={styles.image} source={require('../../assets/images/logoDark.png')}/>
    // };
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
          <RkButton style={styles.LoginButton} onPress={() => this.login()}>
            {this.state.isLoading ? (
              <ActivityIndicator color={colors.white} style={[styles.centering]} />
            ) : (
              'Login'
            )}
          </RkButton>

          <View style={styles.buttons}>
            <RkButton style={styles.button} rkType="social">
              <RkText rkType="awesome hero">
                <FontAwesome name={'google'} size={25} color={'white'} />
              </RkText>
            </RkButton>
            <RkButton style={styles.button} rkType="social">
              <RkText rkType="awesome hero">
                <FontAwesome
                  name={'facebook'}
                  size={25}
                  color={'white'}
                  onPress={this.fbAuth.bind(this)}
                />
              </RkText>
            </RkButton>
            <RkButton style={styles.button} rkType="social">
              <RkText rkType="awesome hero">
                <FontAwesome name={'github'} size={25} color={'white'} />
              </RkText>
            </RkButton>
          </View>

          <View style={styles.footer}>
            <View style={styles.textRow}>
              <RkText rkType="primary3">Don’t have an account?</RkText>
              <RkButton rkType="clear" onPress={() => this.props.navigation.navigate('Register')}>
                <RkText rkType="header6"> Sign up now </RkText>
              </RkButton>
            </View>
          </View>
        </View>
      </RkAvoidKeyboard>
    );
  }
}

export default Login;

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
