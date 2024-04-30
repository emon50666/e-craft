// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBqK-WJDrlX355oxO0DZtTaKdMuv1dBEOo",

  authDomain: "assignment-10-541cd.firebaseapp.com",
  projectId: "assignment-10-541cd",
  storageBucket: "assignment-10-541cd.appspot.com",
  messagingSenderId: "552071651806",
  appId: "1:552071651806:web:43e692f0ea507753b2fd4f"
};
console.log(firebaseConfig)
// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export default auth;