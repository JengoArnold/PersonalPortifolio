// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBeq5ewcep2OD7A0nL6fyFz88CjcRhncBQ",
  authDomain: "jengo-portfolio.firebaseapp.com",
  projectId: "jengo-portfolio",
  storageBucket: "jengo-portfolio.firebasestorage.app",
  messagingSenderId: "362554127235",
  appId: "1:362554127235:web:75d7de2c3ff0fa6ca37cb6",
  measurementId: "G-GEN5N2NLCW"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);   

export { db };  
