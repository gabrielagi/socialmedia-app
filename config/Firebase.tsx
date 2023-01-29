// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import Constants from "expo-constants"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: Constants.extra.apiKey,
  authDomain: Constants.extra.authDomain,
  projectId: Constants.extra.projectID,
  storageBucket: Constants.extra.storageBucket,
  messagingSenderId: Constants.extra.messagingSenderId,
  appId: Constants.extra.databaseURL
};
// Initialize Firebase

const firebase = initializeApp(firebaseConfig);

const auth = getAuth(firebase);

const db = getFirestore();

export default db;
