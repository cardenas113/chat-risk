import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";


const firebaseConfig = {
  apiKey: "AIzaSyACG8H_18qL4Yy9JvzN_s7VT5eTMqozxhU",
  authDomain: "chat-rk.firebaseapp.com",
  projectId: "chat-rk",
  storageBucket: "chat-rk.appspot.com",
  messagingSenderId: "55849480509",
  appId: "1:55849480509:web:ce6781e90cde0d2eeb1554"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const storage = getStorage();
export const db = getFirestore()

