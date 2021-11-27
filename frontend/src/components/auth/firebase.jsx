import { getAuth } from "@firebase/auth";
import { initializeApp } from "firebase/app";
import firebaseConfig from "./firebaseConfig.json";

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
