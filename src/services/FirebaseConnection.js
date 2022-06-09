import firebase from "firebase/app";

import "firebase/database";
import "firebase/auth";

let firebaseConfig = {
  apiKey: "AIzaSyB9qJ8Ig2TNXGiOKlG50u-RaB5pN6j76cA",
  authDomain: "meu-app-e081a.firebaseapp.com",
  databaseURL: "https://meu-app-e081a-default-rtdb.firebaseio.com",
  projectId: "meu-app-e081a",
  storageBucket: "meu-app-e081a.appspot.com",
  messagingSenderId: "787084097347",
  appId: "1:787084097347:web:b1dd1fb9d6c45bebb3e1f6",
  measurementId: "G-MKP106V7WH",
};

// Initialize Firebase

if (!firebase.apps.lenth) {
  firebase.initializeApp(firebaseConfig);
}

export default firebase;
