// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDohQK0sQDHkLw4CU7sCBYMbKwfIhuUA6s",
  authDomain: "car-parts-manufacturer-ab6f5.firebaseapp.com",
  projectId: "car-parts-manufacturer-ab6f5",
  storageBucket: "car-parts-manufacturer-ab6f5.appspot.com",
  messagingSenderId: "28026579444",
  appId: "1:28026579444:web:ca182480d31668319471a1"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;