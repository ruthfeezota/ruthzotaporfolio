// Import the functions you need from the SDKs you need
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
import { getAnalytics } from "firebase/analytics";



const firebaseConfig = {
  apiKey: "AIzaSyAKfGO2aJaoBp6irOqWNK0lbTuWLyEKj8Y",
  authDomain: "ruthzotaportfolio.firebaseapp.com",
  projectId: "ruthzotaportfolio",
  storageBucket: "ruthzotaportfolio.appspot.com",
  messagingSenderId: "918939228864",
  appId: "1:918939228864:web:e8ad2e9f4933780d96ab25",
  measurementId: "G-87PXH3MRD3"
};

// Use this to initialize the firebase App
const firebaseApp = firebase.initializeApp(firebaseConfig);

// Use these for db & auth
const db = firebaseApp.firestore();
const auth = firebase.auth();

const analytics = getAnalytics();

export { auth, db };