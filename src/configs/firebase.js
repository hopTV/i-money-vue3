import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";
import "firebase/storage";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAkunROFVfCvHgZW8Nz4F-suP5cFt0uP_E",
  authDomain: "i-money-1373a.firebaseapp.com",
  projectId: "i-money-1373a",
  storageBucket: "i-money-1373a.appspot.com",
  messagingSenderId: "70136073707",
  appId: "1:70136073707:web:bd7d7084008400bf6f9dae",
  measurementId: "G-E1M8FZHS8P",
};

firebase.initializeApp(firebaseConfig);

const projectAuth = firebase.auth();
const projectStorage = firebase.storage();
const projectFileStore = firebase.firestore();

const timestamp = firebase.firestore.FieldValue.serverTimestamp;

export { projectAuth, projectFileStore, projectStorage, timestamp };
