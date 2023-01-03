// Import the functions you need from the SDKs you need
import { initializeApp } from "/firebase/app";
import { getAnalytics } from "/firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyCXUFaEX3vpniO0aQVvMMzlf6_TTu0rTKQ",
    authDomain: "app-view-my-music.firebaseapp.com",
    projectId: "app-view-my-music",
    storageBucket: "app-view-my-music.appspot.com",
    messagingSenderId: "556207282264",
    appId: "1:556207282264:web:9568c17056b0a3a4a7d22d",
    measurementId: "G-9QYJ98EZCD"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
// Este es el punto de entrada de tu aplicacion

// import { myFunction } from './lib/index.js';

// myFunction();
