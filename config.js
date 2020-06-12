import firebase from 'firebase';
require('@firebase/firestore')

var firebaseConfig = {
  apiKey: "AIzaSyAaEa0_PuvdhAxVUllIUcVfRNUQcYZSLSw",
  authDomain: "barter-system-app-72620.firebaseapp.com",
  databaseURL: "https://barter-system-app-72620.firebaseio.com",
  projectId: "barter-system-app-72620",
  storageBucket: "barter-system-app-72620.appspot.com",
  messagingSenderId: "67137793856",
  appId: "1:67137793856:web:30f154fa4add592444d4a5",
  measurementId: "G-MWLSRZ104F"
};
  // Initialize Firebase
  
  firebase.initializeApp(firebaseConfig);

  export default firebase.firestore();