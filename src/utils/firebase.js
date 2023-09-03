// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth} from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAGxU2XE1t_v5k2k4ZDqIkeWmYM7fCsOT4",
  authDomain: "netflixgpt-53ba5.firebaseapp.com",
  projectId: "netflixgpt-53ba5",
  storageBucket: "netflixgpt-53ba5.appspot.com",
  messagingSenderId: "1048158993378",
  appId: "1:1048158993378:web:ef9ddce82304bf6a1257bb",
  measurementId: "G-B1TJGXQH4V"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

 export const auth = getAuth();