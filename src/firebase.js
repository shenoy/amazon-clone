import firebase from "firebase";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyD51-1noJ_0HdWjsQDT5__03Y9YYSMeaqw",
  authDomain: "clone-4b803.firebaseapp.com",
  projectId: "clone-4b803",
  storageBucket: "clone-4b803.appspot.com",
  messagingSenderId: "196791484992",
  appId: "1:196791484992:web:d3f920e24533444a6495a5",
  measurementId: "G-H8ZB94DKCX",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };
