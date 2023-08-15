// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAKfGO2aJaoBp6irOqWNK0lbTuWLyEKj8Y",
  authDomain: "ruthzotaportfolio.firebaseapp.com",
  projectId: "ruthzotaportfolio",
  storageBucket: "ruthzotaportfolio.appspot.com",
  messagingSenderId: "918939228864",
  appId: "1:918939228864:web:e8ad2e9f4933780d96ab25",
  measurementId: "G-87PXH3MRD3"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);