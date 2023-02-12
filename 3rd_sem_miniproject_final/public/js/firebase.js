import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firebase-firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAEdAE5LcW__xoK6EgB0XcGw91ySMCJdpI",
  authDomain: "mini-gehu-final.firebaseapp.com",
  projectId: "mini-gehu-final",
  storageBucket: "mini-gehu-final.appspot.com",
  messagingSenderId: "533195060524",
  appId: "1:533195060524:web:65700a7910ab71153ee889"
};


initializeApp(firebaseConfig);
export const db = getFirestore();