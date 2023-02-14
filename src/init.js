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
    arrayRemove,
    arrayUnion,
    
    
} from 'https://www.gstatic.com/firebasejs/9.15.0/firebase-firestore.js';

import { 
    getStorage,
    ref,
    getDownloadURL,
    uploadBytes,
  } from 'https://www.gstatic.com/firebasejs/9.15.0/firebase-storage.js';


import { firebaseConfig } from './lib/config.js';
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const store = getFirestore(app);
const storage = getStorage(app);


export {
    app,
    auth,
    store,
    storage,
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
    arrayRemove,
    arrayUnion,
    getStorage,
    ref,
    getDownloadURL,
    uploadBytes,
}
