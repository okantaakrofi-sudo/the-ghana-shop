import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAzgKJ8zeS7zGlznBrhNzBNf431V2-Wb6Q",
  authDomain: "ghana-shop-e10a2.firebaseapp.com",
  databaseURL: "https://ghana-shop-e10a2-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "ghana-shop-e10a2",
  storageBucket: "ghana-shop-e10a2.firebasestorage.app",
  messagingSenderId: "1039219520459",
  appId: "1:1039219520459:web:3ef7ba837f419d1081fc4e",
};

const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
