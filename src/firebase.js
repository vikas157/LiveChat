import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
/* import { getAnalytics } from "firebase/analytics"; */
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDW_6sP2jMc0Hm6uHScd_6vruCBw3TY1PQ",
  authDomain: "think-piece-e203c.firebaseapp.com",
  projectId: "think-piece-e203c",
  storageBucket: "think-piece-e203c.appspot.com",
  messagingSenderId: "886137808683",
  appId: "1:886137808683:web:74f3e273449f6a537bc76e",
  measurementId: "G-BV41H6LCJQ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
/* const analytics = getAnalytics(app); */
export const firestore = getFirestore(app);
