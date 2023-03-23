import { initializeApp } from "firebase/app";
import { collection, getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDijmrSfED9ex1HhCjRl8e3R40MLS9EBqQ",
  authDomain: "twitter-clone-91536.firebaseapp.com",
  projectId: "twitter-clone-91536",
  storageBucket: "twitter-clone-91536.appspot.com",
  messagingSenderId: "725139709710",
  appId: "1:725139709710:web:35847533b6031a9570015f",
};

initializeApp(firebaseConfig);

const db = getFirestore();
const colRef = collection(db, "posts");

export { db, colRef };
