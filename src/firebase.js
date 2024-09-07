/* eslint-disable no-unused-vars */
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCQcjsPJoOq00YIewZFyuIyWhoQgBnzZrQ",
  authDomain: "clone-2aa89.firebaseapp.com",
  projectId: "clone-2aa89",
  storageBucket: "clone-2aa89.appspot.com",
  messagingSenderId: "738763619411",
  appId: "1:738763619411:web:6f7709672944144061daa6",
  measurementId: "G-JQMCVHKGWR"
};


const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth()
export const db = getFirestore(app)
export const provider = new GoogleAuthProvider()