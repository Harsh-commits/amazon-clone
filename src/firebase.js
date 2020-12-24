// For Firebase JS SDK v7.20.0 and later, measurementId is optional

import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyBXf0SMIlFZpNr4q_6q87AYf84wI_xuFU8",
  authDomain: "challenge-c8594.firebaseapp.com",
  projectId: "challenge-c8594",
  storageBucket: "challenge-c8594.appspot.com",
  messagingSenderId: "841124355754",
  appId: "1:841124355754:web:34442a3e7d8fa585087ad3",
  measurementId: "G-111HQDYXY4",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };
