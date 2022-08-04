// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore";
const firebaseConfig = {
  apiKey: "AIzaSyD1D0MOyvNEV-3SbC-7dwK8ddiChJmaLBw",
  authDomain: "a-job-day-roi.firebaseapp.com",
  projectId: "a-job-day-roi",
  storageBucket: "a-job-day-roi.appspot.com",
  messagingSenderId: "101164883494",
  appId: "1:101164883494:web:c477ed20aba189372dd0e7"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore()