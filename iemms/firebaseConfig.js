// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore';
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyA22kUe0zYNhziGqTInGveLLvUwOjbF7Qo",
  authDomain: "drrm-h-iemms.firebaseapp.com",
  projectId: "drrm-h-iemms",
  storageBucket: "drrm-h-iemms.appspot.com",
  messagingSenderId: "24260782147",
  appId: "1:24260782147:web:dfa3a47de02747ab794cf6",
  measurementId: "G-9FKVD5EW9N"
};

const { initializeApp } = require('firebase-admin/app');

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const database = getFirestore(app);
const analytics = getAnalytics(app);