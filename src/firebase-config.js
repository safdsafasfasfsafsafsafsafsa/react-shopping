// https://ilimes.github.io/web/post37/

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyC4hyVPajx99OLVoq2w7vxAJYIHqch8sNM",
  authDomain: "react-login-test-36fcd.firebaseapp.com",
  projectId: "react-login-test-36fcd",
  storageBucket: "react-login-test-36fcd.firebasestorage.app",
  messagingSenderId: "811726773272",
  appId: "1:811726773272:web:9c0ce800e227c7471c776d",
  measurementId: "G-5KHXXB92VR",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export { app, auth };
