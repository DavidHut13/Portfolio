import firebase from 'firebase'
  // Initialize Firebase

  const firebaseConfig = {
    apiKey: process.env.VUE_APP_Firebase_Key,
    authDomain: "portfolio-edfde.firebaseapp.com",
    databaseURL: "https://portfolio-edfde.firebaseio.com",
    projectId: "portfolio-edfde",
    storageBucket: "portfolio-edfde.appspot.com",
    messagingSenderId: "646104410003",
    appId: "1:646104410003:web:f3970660e7e9d7c646aa66",
    measurementId: "G-WK6ZN4Z3B6"
  };


const firebaseApp = firebase.initializeApp(firebaseConfig);
export default firebaseApp.storage();
export const db = firebaseApp.firestore();