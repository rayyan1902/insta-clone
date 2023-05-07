// Import the functions you need from the SDKs you need
import { initializeApp, getApps, getApp } from "firebase/app";
import {getFirestore} from "firebase/firestore";
import {getStorage} from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAjzPnhtg7sVaDx_5wwb3MIKUXt0G32JBs",
  authDomain: "instagram-clone-5edfb.firebaseapp.com",
  projectId: "instagram-clone-5edfb",
  storageBucket: "instagram-clone-5edfb.appspot.com",
  messagingSenderId: "229881445327",
  appId: "1:229881445327:web:36d29eb74fef4f4bd870ba"
};

// Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();
const db = getFirestore();
const storage = getStorage();

export {app, db, storage};