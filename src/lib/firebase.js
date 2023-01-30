// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-app.js";
import { getAuth, createUserWithEmailAndPassword, signInWithPopup, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, sendEmailVerification } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-auth.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-firestore.js";


// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAU0Ta8ZyJvb3griwsGlC-PcaqRNjHkMnM",
  authDomain: "view-my-music.firebaseapp.com",
  projectId: "view-my-music",
  storageBucket: "view-my-music.appspot.com",
  messagingSenderId: "137287079012",
  appId: "1:137287079012:web:73908c3667805061763b71"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const store = getFirestore(app);




// 1.- SECCIÓN REGISTRO

//REGISTRANDO UN USURARIO CON FIRE BASE


// const user = auth.currentUser;
// export const nuevoUs= async (email, password) => {
// if (user !== null) {
//   The user object has basic properties such as display name, email, etc.
//   const displayName = user.displayName;
//   const email = user.email;
//   const photoURL = user.photoURL;
//   const emailVerified = user.emailVerified;

//   The user's ID, unique to the Firebase project. Do NOT use
//   this value to authenticate with your backend server, if
//   you have one. Use User.getToken() instead.
//   const uid = user.uid;
// }
// };



export const createUser = async (email, password, name, date) => {
  try {
    return await createUserWithEmailAndPassword(auth, email, password, name,date);
  } catch (error) {
    return error.message;
  }
};


//MAIL DE VERIFICACIÓN 

// sendEmailVerification(auth.currentUser)
//   .then(() => {
//     // Email verification sent!
//     // ...
//   });






// 2.- SECCIÓN HOME


//INICIO SESION USUARIOS EXISTENTEs:

export const authSing = async (email, password) => {
  try {
    return await signInWithEmailAndPassword(auth, email, password);
  } catch (error) {
    return error.message;
  }
};

//Observador
export const authSesion = () => {
  onAuthStateChanged(auth, (user) => {
    if (user) {
      // User is signed in, see docs for a list of available properties
      // https://firebase.google.com/docs/reference/js/firebase.User
      const uid = user.uid;
      // ...
    } else {
      // User is signed out
      // ...
    }
  });
};



// INICIAR SESION CON GOOGLE 

export const authGoogle = () => {
  const provider = new GoogleAuthProvider();
  signInWithPopup(auth, provider)
    .then((result) => {
      // This gives you a Google Access Token. You can use it to access the Google API.
      const credential = GoogleAuthProvider.credentialFromResult(result);
      const token = credential.accessToken;
      // The signed-in user info.
      const user = result.user;
      // console.log(user, token);
      // ...
    }).catch((error) => {
      // Handle Errors here.
      const errorCode = error.code;
      const errorMessage = error.message;
      // The email of the user's account used.
      const email = error.customData.email;
      // The AuthCredential type that was used.
      const credential = GoogleAuthProvider.credentialFromError(error);
      console.log(errorCode, errorMessage, email, credential);
      // ...
    });

};



// 3.- SECCIÓN WALL 