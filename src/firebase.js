// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDIoB9XgE5esjbneSr7lhN-EQPaaPWVwSg",
  authDomain: "nahum-portfolio.firebaseapp.com",
  projectId: "nahum-portfolio",
  storageBucket: "nahum-portfolio.appspot.com",
  messagingSenderId: "763922673725",
  appId: "1:763922673725:web:fb41c2dc433c6fb8727a54",
  measurementId: "G-3LBX86JW19"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);