// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
import { getFirestore } from "firebase/firestore";

// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD3I6-Hi4KLNVgPpAPrWvCOPI586swXBZw",
  authDomain: "photo-tagging-app-1ee3b.firebaseapp.com",
  projectId: "photo-tagging-app-1ee3b",
  storageBucket: "photo-tagging-app-1ee3b.appspot.com",
  messagingSenderId: "347591117125",
  appId: "1:347591117125:web:96cc1f88ad31193f32d62c"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);