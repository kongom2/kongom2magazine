import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";
import "firebase/compat/storage";

const firebaseConfig = {
  apiKey: "AIzaSyAMPHzdmHzVJ3xgpFdEi_TTJKsrSGvIC3s",
  authDomain: "kongom2magazine.firebaseapp.com",
  projectId: "kongom2magazine",
  storageBucket: "kongom2magazine.appspot.com",
  messagingSenderId: "652512138194",
  appId: "1:652512138194:web:0b93d2e948ca86cee66e0b",
  measurementId: "G-7T4H1RVRH4",
};

firebase.initializeApp(firebaseConfig);

const apiKey = firebaseConfig.apiKey;
const auth = firebase.auth();
const firestore = firebase.firestore();
const storage = firebase.storage();

export { auth, apiKey, firestore, storage };
