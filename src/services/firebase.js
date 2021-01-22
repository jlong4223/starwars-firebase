import firebase from "firebase/app";
import "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAkFlqszCS2OIkjpl7dJUJgS-h-RMQUG-A",
  authDomain: "starwarsify-11a41.firebaseapp.com",
  projectId: "starwarsify-11a41",
  storageBucket: "starwarsify-11a41.appspot.com",
  messagingSenderId: "413560017306",
  appId: "1:413560017306:web:96a42b727022bb241baa23",
};

firebase.initializeApp(firebaseConfig);

const googleProvider = new firebase.auth.GoogleAuthProvider();
const auth = firebase.auth();

function login() {
  return auth.signInWithPopup(googleProvider);
}

function logout() {
  return auth.signOut();
}

export { login, logout, auth };
