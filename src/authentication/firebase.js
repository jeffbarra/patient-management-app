// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBGLgAHblSVe8f3E8QPBPEu-owa6QXmj0Y",
  authDomain: "auth---delfina-app.firebaseapp.com",
  projectId: "auth---delfina-app",
  storageBucket: "auth---delfina-app.appspot.com",
  messagingSenderId: "722286644374",
  appId: "1:722286644374:web:3c78413cc615cb5e0106b7",
  measurementId: "G-PELX784867",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth(app);
