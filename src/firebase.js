import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAFc58eq5K7Yt1JKZfptfoPnrVC1KLkLuY",
  authDomain: "gangwal-sales-1abf7.firebaseapp.com",
  projectId: "gangwal-sales-1abf7",
  storageBucket: "gangwal-sales-1abf7.appspot.com",
  messagingSenderId: "1093459673054",
  appId: "1:1093459673054:web:6d875087240a783144a74f",
  measurementId: "G-3X2CS2DGEJ"
};

export const app = initializeApp(firebaseConfig);
export const db = getFirestore();