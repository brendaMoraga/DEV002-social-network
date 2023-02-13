import {
  // initializeApp,
  app,
} from '../init.js';
import { 
  auth,
  // getAuth, 
  createUserWithEmailAndPassword,
  signInWithPopup,
  GoogleAuthProvider,
  // onAuthStateChanged,
  signInWithEmailAndPassword,
  signOut,
} from '../init.js';
import { 
  // getFirestore, 
  store,
  collection, 
  getDocs,
  onSnapshot,
  addDoc,
  deleteDoc,
  doc,
  getDoc,
  updateDoc,
} from '../init.js';



// 1.- SECCIÓN REGISTRO
// Registrando usuario con firebase

export const createUser = async (auth,email, password) => {
  try {
    return await createUserWithEmailAndPassword(auth, email, password);
  } catch (error) {
    return error.message;
  }
};

// 2.- SECCIÓN HOME
// inicio de sesion correo y contraseña:
export const authSing = async ( auth, email, password) => {
  try {
    return await signInWithEmailAndPassword(auth, email, password);
  } catch (error) {
    return error.message;
  }
};


//3.- SECCIÓN INICIO CON GOOGLE
export const authGoogle = async () => {
const provider = new GoogleAuthProvider();
try {
  const credentials = await signInWithPopup(auth, provider)
  console.log(credentials);
  console.log("google sign in");
  
} catch (error) {
  return error.message;
}
};

// 3.- SECCIÓN WALL
// DIV coleccion de comentarios fans
export const coleccionComentarios =  (comentario) => {
  addDoc(collection(store,'comentarios'), { comentario });
};
export const onGetTasks = (callback) =>
  onSnapshot(collection(store, 'comentarios'), callback);
export const deleteTask = (id) => deleteDoc(doc(store, 'comentarios', id));
export const getTask = (id) => getDoc(doc(store, 'comentarios', id));
export const updateTask = (id, newFields) =>
  updateDoc(doc(store, 'comentarios', id), newFields);
  export const obtenerComentarios = () => {
    getDocs(collection(store,'comentarios'));
  };  

  // LOGOUT
  export const logOut = async (auth) => {
  try {
    await signOut(auth)
    console.log("signup out");
  } catch (error) {
    console.log(error)
  }
};
  
export { app, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut}
