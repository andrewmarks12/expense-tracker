// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDAX7tuGFM-T9e3mp_usMga5QHFeJ-V4R0",
  authDomain: "expense-tracker-2c32a.firebaseapp.com",
  projectId: "expense-tracker-2c32a",
  storageBucket: "expense-tracker-2c32a.firebasestorage.app",
  messagingSenderId: "18621618290",
  appId: "1:18621618290:web:664eedc3ac4370cd0c0aeb"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();
export const db = getFirestore(app);

// firebase login
// firebase init
// firebase deploy
// yarn start
