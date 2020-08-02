import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";

// https://www.youtube.com/watch?v=unr4s3jd9qA
// https://blog.logrocket.com/user-authentication-firebase-react-apps/

const firebaseConfig = {
  apiKey: "AIzaSyD25wOR3cWF1XoXOPcK1rgDB42L1UjRf6o",
  authDomain: "currency-demo-app.firebaseapp.com",
  databaseURL: "https://currency-demo-app.firebaseio.com",
  projectId: "currency-demo-app",
  storageBucket: "currency-demo-app.appspot.com",
  messagingSenderId: "268166493807",
  appId: "1:268166493807:web:15f64eb54c727ed2f0bf9a",
  measurementId: "G-41K57VJKDE",
};

firebase.initializeApp(firebaseConfig);
export const auth = firebase.auth();
export const firestore = firebase.firestore();
