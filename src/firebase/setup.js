import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAsBsa5vX6d4RMsm7M0lLLvIsfx6hd-gNs",
  authDomain: "linkedln-clone-38ea6.firebaseapp.com",
  projectId: "linkedln-clone-38ea6",
  storageBucket: "linkedln-clone-38ea6.appspot.com",
  messagingSenderId: "929054926465",
  appId: "1:929054926465:web:305dab54f3455aec508f80",
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const googleProvider = new GoogleAuthProvider(app);
export const database = getFirestore(app);
