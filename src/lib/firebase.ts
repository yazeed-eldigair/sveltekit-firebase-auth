import { initializeApp, getApps } from "firebase/app";
import { getAuth } from "firebase/auth";

// Replace with your project's config
const firebaseConfig = {
  apiKey: "",
  authDomain: "",
  projectId: "",
  storageBucket: "",
  messagingSenderId: "",
  appId: ""
};

const app = getApps()[0] || initializeApp(firebaseConfig);

export const auth = getAuth(app);
