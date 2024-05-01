// Import the functions you need from the SDKs you need

import { initializeApp } from "firebase/app";

import { getFirestore } from 'firebase/firestore';

// TODO: Add SDKs for Firebase products that you want to use

// https://firebase.google.com/docs/web/setup#available-libraries



// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyCbiUB3OTtUjKOqV1gJ9gyYsma87sGqE44",
    authDomain: "it35a-78046.firebaseapp.com",
    projectId: "it35a-78046",
    storageBucket: "it35a-78046.appspot.com",
    messagingSenderId: "907486446939",
    appId: "1:907486446939:web:521cf99a991435c195067e",
    measurementId: "G-3BPC62C4XS"
  };

  // Initialize Firebase

const firebaseApp = initializeApp(firebaseConfig);

// 
const db = getFirestore(firebaseApp);

export{db}