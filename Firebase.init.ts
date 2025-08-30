import { getAuth } from 'firebase/auth';
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCWu5-VB-OAM0v9n40b8hKB5FirFHzrHrQ",
  authDomain: "horizoncomposite-c1cfb.firebaseapp.com",
  projectId: "horizoncomposite-c1cfb",
  storageBucket: "horizoncomposite-c1cfb.appspot.com",
  messagingSenderId: "782860256339",
  appId: "1:782860256339:web:728db8406e43f38cb072a6",
  measurementId: "G-T1X221JGYM"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);