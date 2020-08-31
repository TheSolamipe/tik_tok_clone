import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyAXXz-um5W5i-S6610rm1ujiHIZNjUDUcM",
  authDomain: "tik-tok-clone-1203e.firebaseapp.com",
  databaseURL: "https://tik-tok-clone-1203e.firebaseio.com",
  projectId: "tik-tok-clone-1203e",
  storageBucket: "tik-tok-clone-1203e.appspot.com",
  messagingSenderId: "867086384495",
  appId: "1:867086384495:web:7a49687a5226820ec13c9a",
  measurementId: "G-6FHB39ZTM6",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();

export default db;
