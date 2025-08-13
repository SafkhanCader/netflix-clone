// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
} from "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBM4_Ys1-IFvks3aBgx_nQnG_hKZXrQkH8",
  authDomain: "netflix-clone-fbfc4.firebaseapp.com",
  projectId: "netflix-clone-fbfc4",
  storageBucket: "netflix-clone-fbfc4.appspot.com", // corrected
  messagingSenderId: "226204629388",
  appId: "1:226204629388:web:e956fc26df5bddba593ea9"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication
const auth = getAuth(app);

// Functions for signup, login, and logout
export const registerWithEmail = (email, password) => {
  return createUserWithEmailAndPassword(auth, email, password);
};

export const loginWithEmail = (email, password) => {
  return signInWithEmailAndPassword(auth, email, password);
};

export const logout = () => {
  return signOut(auth);
};

export { auth };
