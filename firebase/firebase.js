// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyD7crucYFY6ZKOHbSFtzAGBNeap5L7pTtQ",
    authDomain: "project-bulb.firebaseapp.com",
    projectId: "project-bulb",
    storageBucket: "project-bulb.appspot.com",
    messagingSenderId: "536751565270",
    appId: "1:536751565270:web:87449839953db951849c77"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);