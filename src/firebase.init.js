// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyAiEO76IoCpmgmQqKs-bL1xx4CNoJ_HE7A",
    authDomain: "private-tutor-68671.firebaseapp.com",
    projectId: "private-tutor-68671",
    storageBucket: "private-tutor-68671.appspot.com",
    messagingSenderId: "165860114664",
    appId: "1:165860114664:web:bc25262c783dcc4700495d"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;