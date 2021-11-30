import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";
import "firebase/compat/storage";

const firebaseConfig = {
    apiKey: "AIzaSyDU-KIpYkFVUD6VxgnzBB9hxcsjJ3T82qk",
    authDomain: "challenge-31b13.firebaseapp.com",
    projectId: "challenge-31b13",
    storageBucket: "challenge-31b13.appspot.com",
    messagingSenderId: "237473777152",
    appId: "1:237473777152:web:56139a9b38b6483d62bae5"
  };

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };