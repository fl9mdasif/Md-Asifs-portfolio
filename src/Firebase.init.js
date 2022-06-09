// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getAuth } from "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyDmRI62nn97hK8cDY4wzC78MEHFvoVDcEU",
    authDomain: "md-asifs-portfolio.firebaseapp.com",
    projectId: "md-asifs-portfolio",
    storageBucket: "md-asifs-portfolio.appspot.com",
    messagingSenderId: "35544707065",
    appId: "1:35544707065:web:b88a3c623614baa4ead728"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;