import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyAEVVLb_JeAmWju5HAYn8FZNrCjTb8LFBE",
    authDomain: "todoapp-1a665.firebaseapp.com",
    projectId: "todoapp-1a665",
    storageBucket: "todoapp-1a665.appspot.com",
    messagingSenderId: "253389492497",
    appId: "1:253389492497:web:2d8e37307e522c15477cb0"
  };

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)