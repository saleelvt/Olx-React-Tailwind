import { initializeApp } from "firebase/app";
import { GoogleAuthProvider, getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyDqPlTl729wrCrKT5N5P3gsx1meATXZkI0",
  authDomain: "olx-react-clone-960de.firebaseapp.com",
  projectId: "olx-react-clone-960de",
  storageBucket: "olx-react-clone-960de.appspot.com",
  messagingSenderId: 792646637071,
  appId: "1:792646637071:web:1361aa05b55176420ab57a",
  
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth(app);
export const storage = getStorage(app);

// VITE_REACT_APP_FIREBASE_API_KEY=AIzaSyDqPlTl729wrCrKT5N5P3gsx1meATXZkI0
// VITE_REACT_APP_FIREBASE_AUTH_DOMAIN=olx-react-clone-960de.firebaseapp.com
// VITE_REACT_APP_FIREBASE_PROJECT_ID=olx-react-clone-960de
// VITE_REACT_APP_FIREBASE_STORAGE_BUCKET=olx-react-clone-960de.appspot.com
// VITE_REACT_APP_MESSAGING_SENDER=792646637071
// VITE_REACT_APP_APP_ID=1:792646637071:web:1361aa05b55176420ab57a