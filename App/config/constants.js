
import firebase from 'firebase'

var config = {
    apiKey: "AIzaSyDHrMYZ1ub1dcTrwEFkwQ77BnhszUp93UM",
    authDomain: "reacmodoro.firebaseapp.com",
    databaseURL: "https://reacmodoro.firebaseio.com",
    projectId: "reacmodoro",
    storageBucket: "reacmodoro.appspot.com",
    messagingSenderId: "489271389734"
  };

  firebase.initializeApp(config);

const ref  = firebase.database().ref(),
      firebaseAuth = firebase.auth(),
      facebookProvider =firebase.auth.FacebookAuthProvider;

export {
  ref,
  firebaseAuth,
  facebookProvider,
}
