// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB75QdWhFps0Lpb-_KMDWKZaTFoEHKnAgU",
  authDomain: "practice-firebase-athenticate.firebaseapp.com",
  projectId: "practice-firebase-athenticate",
  storageBucket: "practice-firebase-athenticate.appspot.com",
  messagingSenderId: "621782232958",
  appId: "1:621782232958:web:50d378789caa072918cd2f"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;