import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyC7uwpKvpWImc6cY6o9pTFRfXm4IfPJIY0",
  authDomain: "tinder-clone-d3048.firebaseapp.com",
  projectId: "tinder-clone-d3048",
  storageBucket: "tinder-clone-d3048.appspot.com",
  messagingSenderId: "1071106790520",
  appId: "1:1071106790520:web:ca3cd9518f6e7a387d498d",
  measurementId: "G-48RBWZK7VL",
};

const app = initializeApp(firebaseConfig);
const database = getAnalytics(app);

export default database;
