// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCCiZQvOkJ4NtNFDVZri3ZVPIANevJn2Ws",
  authDomain: "b9a9-real-estate-94d1a.firebaseapp.com",
  projectId: "b9a9-real-estate-94d1a",
  storageBucket: "b9a9-real-estate-94d1a.appspot.com",
  messagingSenderId: "489400976405",
  appId: "1:489400976405:web:efe54fd01332b751863a1c"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app)

export default auth;

