// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDPQpiqlkK7FNMf8a732XiBNEj0c3ed9K8",
  authDomain: "job-board-reactjs-252ca.firebaseapp.com",
  projectId: "job-board-reactjs-252ca",
  storageBucket: "job-board-reactjs-252ca.appspot.com",
  messagingSenderId: "1024860098711",
  appId: "1:1024860098711:web:ca41b433afbec7ee1f99d2"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app)

export {db}