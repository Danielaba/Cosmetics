// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD9uoLtaob2nireDI1JWPn6huz1KP2TJfw",
  authDomain: "cosmetics-3ad34.firebaseapp.com",
  projectId: "cosmetics-3ad34",
  storageBucket: "cosmetics-3ad34.appspot.com",
  messagingSenderId: "663616157512",
  appId: "1:663616157512:web:e0891bffcf4711e7ab657d"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app)

export default db;