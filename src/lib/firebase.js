import {
  initializeApp,
} from 'https://www.gstatic.com/firebasejs/9.15.0/firebase-app.js';
import { 
  getAuth, 
  createUserWithEmailAndPassword,
  signInWithPopup,
  GoogleAuthProvider,
  onAuthStateChanged,
  signInWithEmailAndPassword,
} from 'https://www.gstatic.com/firebasejs/9.15.0/firebase-auth.js';
import { 
  getFirestore, 
  collection, 
  addDoc,
} from 'https://www.gstatic.com/firebasejs/9.15.0/firebase-firestore.js';


// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyAU0Ta8ZyJvb3griwsGlC-PcaqRNjHkMnM',
  authDomain: 'view-my-music.firebaseapp.com',
  projectId: 'view-my-music',
  storageBucket: 'view-my-music.appspot.com',
  messagingSenderId: '137287079012',
  appId: '1:137287079012:web:73908c3667805061763b71',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const store = getFirestore(app);

// 1.- SECCIÓN REGISTRO
// Registrando usuario con firebase

export const createUser = async (email, password) => {
  try {
    return await createUserWithEmailAndPassword(auth, email, password);
  } catch (error) {
    return error.message;
  }
};

// 2.- SECCIÓN HOME
// inicio de sesion correo y contraseña:
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
      //const uid = user.uid;
      // ...
    } else {
      // User is signed out
      // ...
    }
  });
};
// inicio de sesion con google 
export const authGoogle = () => {
  const provider = new GoogleAuthProvider();
  signInWithPopup(auth, provider)
    .then((result) => {
      const credential = GoogleAuthProvider.credentialFromResult(result);
      const token = credential.accessToken;
      const user = result.user;
      console.log(token,user);
    }).catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      const email = error.customData.email;
      const credential = GoogleAuthProvider.credentialFromError(error);
      console.log(errorCode, errorMessage, email, credential);
    });
};
// 3.- SECCIÓN WALL
// coleccion de comentarios
export const coleccionComentarios =  (comentario) => {
  addDoc(collection(store,'comentarios'), { comentario });

};


