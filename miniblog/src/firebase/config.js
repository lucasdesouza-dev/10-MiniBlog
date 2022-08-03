// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDIDJSXHtEoiwLgM_6u8wDz_FFNWt3J_Hs",
  authDomain: "miniblog-838ef.firebaseapp.com",
  projectId: "miniblog-838ef",
  storageBucket: "miniblog-838ef.appspot.com",
  messagingSenderId: "28123086430",
  appId: "1:28123086430:web:1b30f9261c82d7094d3ecf"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const db = getFirestore(app);

export { db };