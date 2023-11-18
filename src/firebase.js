// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getDatabase } from 'firebase/database';

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBtzRPLSv9TYfnujoSEdPkv31hwrDY5Vgc",
  authDomain: "ecommerce-project-1daf4.firebaseapp.com",
  databaseURL: "https://ecommerce-project-1daf4-default-rtdb.firebaseio.com",
  projectId: "ecommerce-project-1daf4",
  storageBucket: "ecommerce-project-1daf4.appspot.com",
  messagingSenderId: "998586161327",
  appId: "1:998586161327:web:82be6813664357e9369c5a"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getDatabase(app);
