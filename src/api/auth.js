// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
export const firebaseConfig = {
  apiKey: "AIzaSyBaOV0zB1U3EAmJjMV8IOJmiGGNJgwQ7rI",
  authDomain: "fullflixapp.firebaseapp.com",
  projectId: "fullflixapp",
  storageBucket: "fullflixapp.appspot.com",
  messagingSenderId: "271456244701",
  appId: "1:271456244701:web:4f537a2b4b8df5baf31c34",
  measurementId: "G-66DW1X62M1"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);