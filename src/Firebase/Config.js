// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAZuFbCpsraAUD75KgHiQWV7WdtKe2mWek",
  authDomain: "cats-upside-down.firebaseapp.com",
  projectId: "cats-upside-down",
  storageBucket: "cats-upside-down.appspot.com",
  messagingSenderId: "1057046767708",
  appId: "1:1057046767708:web:263cebb2b5c4eb79401e99",
  measurementId: "G-QSXFHF738L"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const analytics = getAnalytics(app);
export const storage = getStorage(app);