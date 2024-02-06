// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA5w90FNANGhoPBjPkvh0gA2svrL_978eI",
  authDomain: "food-monkey-8ea19.firebaseapp.com",
  projectId: "food-monkey-8ea19",
  storageBucket: "food-monkey-8ea19.appspot.com",
  messagingSenderId: "890601218116",
  appId: "1:890601218116:web:fd2e981ac33fc3e0cb1c11"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;