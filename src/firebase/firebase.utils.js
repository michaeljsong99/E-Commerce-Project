import firebase from 'firebase/app';
import 'firebase/firestore'; // database
import 'firebase/auth'; // authentication

const config = {
    apiKey: "AIzaSyBHnOMdBki4tFEH7we0ePo1KO17KKorfGg",
    authDomain: "react-course-e1f54.firebaseapp.com",
    databaseURL: "https://react-course-e1f54.firebaseio.com",
    projectId: "react-course-e1f54",
    storageBucket: "react-course-e1f54.appspot.com",
    messagingSenderId: "147434733581",
    appId: "1:147434733581:web:005ef3e0661fef28ce5544",
    measurementId: "G-6TK245Z6FE"
  };

  firebase.initializeApp(config);

  export const auth = firebase.auth();
  export const firestore = firebase.firestore();

  // Set up Google authentication utility.
  const provider = new firebase.auth.GoogleAuthProvider();
  provider.setCustomParameters({prompt:'select_account'}); // trigger google pop-up
  export const signInWithGoogle = () => auth.signInWithPopup(provider);

  export default firebase;