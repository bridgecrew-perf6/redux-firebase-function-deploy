import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth'; 

var firebaseConfig = {
  apiKey: "AIzaSyCOjzF0n2RpLpqwSgwqaPzrHBJsLWf3EE8",
    authDomain: "reduxfirebase-af932.firebaseapp.com",
    databaseURL: "https://reduxfirebase-af932.firebaseio.com",
    projectId: "reduxfirebase-af932",
    storageBucket: "reduxfirebase-af932.appspot.com",
    messagingSenderId: "42950381412",
    appId: "1:42950381412:web:14cafdb547dbd54b017471"
  };

  firebase.initializeApp(firebaseConfig);
  firebase.firestore();

  export default firebase;