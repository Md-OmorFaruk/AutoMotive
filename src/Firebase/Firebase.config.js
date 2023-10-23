// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBQkl2yOEt-PYefTtf8EtoAut7lLkN1eRg",
  authDomain: "automotive-2fd82.firebaseapp.com",
  projectId: "automotive-2fd82",
  storageBucket: "automotive-2fd82.appspot.com",
  messagingSenderId: "187124691454",
  appId: "1:187124691454:web:c20605ed387c0b8f8d50af"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;