// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional

// const firebaseConfig = {
//   apiKey: "AIzaSyATcm1wAe8_zxryrKTfGhQttkALX-hl-2I",
//   authDomain: "w-8d288.firebaseapp.com",
//   projectId: "w-8d288",
//   storageBucket: "w-8d288.appspot.com",
//   messagingSenderId: "348201564822",
//   appId: "1:348201564822:web:e9c1b1d4169c50346360b7",
//   measurementId: "G-2PTF71V263"
// };


// const firebaseConfig = {
//   apiKey: "AIzaSyCOBW4RBKOzG8sAyhKCqVVDhPECVIceZ7o",
//   authDomain: "finable-ca733.firebaseapp.com",
//   databaseURL: "https://finable-ca733-default-rtdb.asia-southeast1.firebasedatabase.app",
//   projectId: "finable-ca733",
//   storageBucket: "finable-ca733.appspot.com",
//   messagingSenderId: "1059104959501",
//   appId: "1:1059104959501:web:612ed06c7c583f64117944",
//   measurementId: "G-96ZK0WN9LM"
// };

const firebaseConfig = {
  apiKey: "AIzaSyBWnY8GoyADHeHJQz9EwmyFx9CHLpY0GnM",
  authDomain: "expe-3d66b.firebaseapp.com",
  projectId: "expe-3d66b",
  databaseURL : "https://expe-3d66b-default-rtdb.firebaseio.com/",
  storageBucket: "expe-3d66b.appspot.com",
  messagingSenderId: "670753557353",
  appId: "1:670753557353:web:bed731c93e01e54b8f0bf8",
  measurementId: "G-NRGMGCB861"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// Initialize Firebase authentication and Firestore (or other services if needed)
const auth = getAuth(app);
const db = getFirestore(app);
// Now you can use 'auth' and 'db' for authentication and Firestore operations
const analytics = getAnalytics(app);
export { auth, db };
