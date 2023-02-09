import {
    initializeApp,
} from 'https://www.gstatic.com/firebasejs/9.15.0/firebase-app.js';
import {
    getAuth,
    signOut,
    createUserWithEmailAndPassword,
    signInWithPopup,
    GoogleAuthProvider,
    // onAuthStateChanged,
    signInWithEmailAndPassword,
} from 'https://www.gstatic.com/firebasejs/9.15.0/firebase-auth.js';
import {
    getFirestore,
    collection,
    getDocs,
    onSnapshot,
    addDoc,
    deleteDoc,
    doc,
    getDoc,
    updateDoc,
    
} from 'https://www.gstatic.com/firebasejs/9.15.0/firebase-firestore.js';


import { firebaseConfig } from './lib/config.js';

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const store = getFirestore(app);


export {
    app,
    auth,
    store,
    initializeApp,
    getAuth,
    createUserWithEmailAndPassword,
    signInWithPopup,
    GoogleAuthProvider,
    // onAuthStateChanged,
    signInWithEmailAndPassword,
    getFirestore,
    collection,
    getDocs,
    onSnapshot,
    addDoc,
    deleteDoc,
    doc,
    getDoc,
    updateDoc,
    signOut,   
}
