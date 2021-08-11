import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";

const clientCredentials = {
    apiKey: "AIzaSyBEvq4uoQO-owzCS9aeRuC4asKtNfBF4JI",
    authDomain: "next-prueba-1.firebaseapp.com",
    projectId: "next-prueba-1",
    storageBucket: "next-prueba-1.appspot.com",
    messagingSenderId: "467212682811",
    appId: "1:467212682811:web:1b98b32d9a25925365be1e",
};

if (!firebase.apps.length) {
    firebase.initializeApp(clientCredentials);
}

export default firebase;
