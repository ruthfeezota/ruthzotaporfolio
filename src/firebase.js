// Import the functions you need from the SDKs you need
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
import { getAnalytics } from "firebase/analytics";



const firebaseConfig = {
  apiKey: "AIzaSyC4q7fKFkd-YAiMnh-4U5-6BL2KkOFdYjc",
  authDomain: "powerappsportfolio.firebaseapp.com",
  projectId: "powerappsportfolio",
  storageBucket: "powerappsportfolio.firebasestorage.app",
  messagingSenderId: "1099139035231",
  appId: "1:1099139035231:web:1461d0f212cf6cb0b5ebea",
  measurementId: "G-V1HJ1T40FQ"
};
// Use this to initialize the firebase App
const firebaseApp = firebase.initializeApp(firebaseConfig);

// Use these for db & auth
const db = firebaseApp.firestore();
const auth = firebase.auth();

const analytics = getAnalytics();

export { auth, db };