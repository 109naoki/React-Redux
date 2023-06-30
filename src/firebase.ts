import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
const firebaseConfig = {
  apiKey: "AIzaSyDnI-GqpalZBp9WwAs_zXm_8Ia3NzNCfZQ",
  authDomain: "discord-clone-0525.firebaseapp.com",
  projectId: "discord-clone-0525",
  storageBucket: "discord-clone-0525.appspot.com",
  messagingSenderId: "287350005167",
  appId: "1:287350005167:web:a0b03fb0c15c7c608ea35a",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();

export { auth, provider, db };
