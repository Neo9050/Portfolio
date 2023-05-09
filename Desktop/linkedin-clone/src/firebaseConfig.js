// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import {getFirestore} from 'firebase/firestore';
import {getStorage } from "firebase/storage";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBsJa6j1bPRjFtUjf5d_M8IhLJ_T7ATnNE",
  authDomain: "linkedin-clone-30899.firebaseapp.com",
  projectId: "linkedin-clone-30899",
  storageBucket: "linkedin-clone-30899.appspot.com",
  messagingSenderId: "297723461198",
  appId: "1:297723461198:web:f4c4b6af63e0674e7e8d1f",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth= getAuth(app);
const firestore = getFirestore(app);
const storage = getStorage(app);

// exporting after initalising variables
export { auth, app, firestore, storage};
