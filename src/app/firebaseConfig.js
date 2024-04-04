// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore";
import {getAuth} from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyB2DAlYjXRRz6iy4aPZplsOtfS53QjUpso",
  authDomain: "phoenixbeta-database.firebaseapp.com",
  projectId: "phoenixbeta-database",
  storageBucket: "phoenixbeta-database.appspot.com",
  messagingSenderId: "502359767933",
  appId: "1:502359767933:web:43afa7bbd2c49c96b4aa14",
  measurementId: "G-S7B8LKYR36",
};
// Initialize Firebase
const app = initializeApp(firebaseConfig);

const db = getFirestore(app);
export {db};

const auth = getAuth(app);
export {auth};


 