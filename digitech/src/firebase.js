import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth"; // Authentication
import { getFirestore } from "firebase/firestore"; // Database

const firebaseConfig = {
  apiKey: "AIzaSyBjGwglhIOf12ZEdWivlvuyew2wLb1DZPc",
  authDomain: "digitech-app-12847.firebaseapp.com",
  projectId: "digitech-app-12847",
  storageBucket: "digitech-app-12847.firebasestorage.app",
  messagingSenderId: "810530344377",
  appId: "1:810530344377:web:f51e572c8e46bcf7a6fa68",
  measurementId: "G-F74CXFGYSK"
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const db = getFirestore(app);