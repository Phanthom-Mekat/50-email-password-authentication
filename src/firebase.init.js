// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCgf5W4trE9JORx6YDVvPkxafSgux4dW28",
  authDomain: "email-password-auth-c40c8.firebaseapp.com",
  projectId: "email-password-auth-c40c8",
  storageBucket: "email-password-auth-c40c8.firebasestorage.app",
  messagingSenderId: "841060251011",
  appId: "1:841060251011:web:818260b6ffade81581b2b6"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);