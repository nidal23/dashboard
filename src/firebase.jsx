import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: import.meta.env.VITE_APP_API_KEY,
  authDomain: "dashboard-7fbc2.firebaseapp.com",
  projectId: "dashboard-7fbc2",
  storageBucket: "dashboard-7fbc2.appspot.com",
  messagingSenderId: "951541342880",
  appId: "1:951541342880:web:abb867427e2e5085e2dfc5",
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const db = getFirestore(app);
export const storage = getStorage(app);

