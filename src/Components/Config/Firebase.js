// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getStorage} from 'firebase/storage';
import {getAuth, GoogleAuthProvider} from 'firebase/auth';
import {getFirestore} from '@firebase/firestore';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBYymTQCkMxpnITxKjWCzZyvqHRvtvKEVg",
  authDomain: "africa-bloging.firebaseapp.com",
  projectId: "africa-bloging",
  storageBucket: "africa-bloging.appspot.com",
  messagingSenderId: "877953102221",
  appId: "1:877953102221:web:13e9a765f5d65f58de8dc4",
  measurementId: "G-3X42H8F8QB"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth(app);
export const googleProvider = new GoogleAuthProvider();
export const storage = getStorage(app);
export const db = getFirestore(app);