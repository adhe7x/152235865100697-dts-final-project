// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDyekePBMXoAh9m_8EYYD9XjTKNGGxIF10",
  authDomain: "myfood-recipes.firebaseapp.com",
  projectId: "myfood-recipes",
  storageBucket: "myfood-recipes.appspot.com",
  messagingSenderId: "86441248537",
  appId: "1:86441248537:web:4beb59bc9c18016999a788"
};

// Initialize Firebase
const firebase = initializeApp(firebaseConfig);

export default firebase;