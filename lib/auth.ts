import { getAuth } from "firebase/auth";
import { initializeApp } from "firebase/app";

const app = initializeApp({
  apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
});

export const auth = getAuth(app);
