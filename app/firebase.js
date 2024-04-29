import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDT8OD6lyKqBQFzzpLEYS8iQXzy9vne5DY",
  authDomain: "expense-tracker-4d2ed.firebaseapp.com",
  projectId: "expense-tracker-4d2ed",
  storageBucket: "expense-tracker-4d2ed.appspot.com",
  messagingSenderId: "755073001084",
  appId: "1:755073001084:web:faf91afc202f25d578cbf9"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);