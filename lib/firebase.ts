
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAp_0B-b5cfmefAmPuJW3rZPfzV_TJUc7c",
  authDomain: "e-tech-78452.firebaseapp.com",
  projectId: "e-tech-78452",
  storageBucket: "e-tech-78452.firebasestorage.app",
  messagingSenderId: "893893810923",
  appId: "1:893893810923:web:7e1becd9abdefc40ac7cae",
  measurementId: "G-69SEE0KCT0"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// ✅ Export the auth instance
export const auth = getAuth(app);