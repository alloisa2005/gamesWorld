
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getStorage } from 'firebase/storage'

const firebaseConfig = {
  apiKey: "AIzaSyAyiN115dBaoE_3mLCDAKUOoAJzbW1l52A",
  authDomain: "games-world-c68fd.firebaseapp.com",
  projectId: "games-world-c68fd",
  storageBucket: "games-world-c68fd.appspot.com",
  messagingSenderId: "767618946604",
  appId: "1:767618946604:web:70edde5158cbe5e596e389"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const storage = getStorage(app);