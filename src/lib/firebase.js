// // Import the functions you need from the SDKs you need
// import { initializeApp } from "/firebase/app"; // conexion global no necesita importar modulo
// import { getAnalytics } from "/firebase/analytics";
// // TODO: Add SDKs for Firebase products that you want to use
// // https://firebase.google.com/docs/web/setup#available-libraries

// // import { initializeApp } from "firebase/app";
//  import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";

// // // TODO: Replace the following with your app's Firebase project configuration
// // // See: https://firebase.google.com/docs/web/learn-more#config-object
// // const firebaseConfig = {
// //   // ...
// // };

// // // Initialize Firebase
// // const app = initializeApp(firebaseConfig);


// // // Initialize Firebase Authentication and get a reference to the service
// // const auth = getAuth(app);


// // Your web app's Firebase configuration
// // For Firebase JS SDK v7.20.0 and later, measurementId is optional
// const firebaseConfig = {
//     apiKey: "AIzaSyCXUFaEX3vpniO0aQVvMMzlf6_TTu0rTKQ",
//     authDomain: "app-view-my-music.firebaseapp.com",
//     projectId: "app-view-my-music",
//     storageBucket: "app-view-my-music.appspot.com",
//     messagingSenderId: "556207282264",
//     appId: "1:556207282264:web:9568c17056b0a3a4a7d22d",
//     measurementId: "G-9QYJ98EZCD"
// };

  // Import the functions you need from the SDKs you need
  import { initializeApp } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-app.js";
  import { getAuth, createUserWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-auth.js";
  import { getFirestore } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-firestore.js";

  // TODO: Add SDKs for Firebase products that you want to use
  // https://firebase.google.com/docs/web/setup#available-libraries

  // Your web app's Firebase configuration
  const firebaseConfig = {
    apiKey: "AIzaSyAU0Ta8ZyJvb3griwsGlC-PcaqRNjHkMnM",
    authDomain: "view-my-music.firebaseapp.com",
    projectId: "view-my-music",
    storageBucket: "view-my-music.appspot.com",
    messagingSenderId: "137287079012",
    appId: "1:137287079012:web:73908c3667805061763b71"
  };

// myFunction();




createUserWithEmailAndPassword(auth,email,pasword);
  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  const auth = getAuth(app);
  const store = getFirestore(app);

//   export const createUser = (email,password) =>{
   
//     createUserWithEmailAndPassword (auth, email, password)
//     .then((userCredential) => {
//         const user = userCredential.user;
//         console.log(user);
//     })
//     .catch((error) => {
//         const errorCode = error.code;
//         const errorMessage = error.message;
//         console.log(errorCode,errorMessage)
//     }) 
//   }
