// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCN_OkUVg1uzCk4whgnpXCeWEg-ssGlANM",
  authDomain: "skill-nest.firebaseapp.com",
  projectId: "skill-nest",
  storageBucket: "skill-nest.appspot.com",
  messagingSenderId: "589915122071",
  appId: "1:589915122071:web:4beac62c980cd728adfcd2"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;