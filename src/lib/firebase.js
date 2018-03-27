import firebase from 'firebase';

const config = {
  apiKey: 'AIzaSyAH0chybJHe-ZDDclJTNqpLAU0GvyJM7nw',
  authDomain: 'fireball-d28f5.firebaseapp.com',
  databaseURL: 'https://fireball-d28f5.firebaseio.com',
  projectId: 'fireball-d28f5',
  storageBucket: 'fireball-d28f5.appspot.com',
  messagingSenderId: '748826828068',
};
firebase.initializeApp(config);

export const provider = new firebase.auth.GoogleAuthProvider();
export const auth = firebase.auth();
export default firebase.app();
