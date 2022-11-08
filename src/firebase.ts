import { initializeApp } from 'firebase/app';
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyC7XMfE_amPIxhZwcDREgR16O0WMM1pM8s",
  authDomain: "edcare-5452f.firebaseapp.com",
  projectId: "edcare-5452f",
  storageBucket: "edcare-5452f.appspot.com",
  messagingSenderId: "807453993711",
  appId: "1:807453993711:web:71ed3b8b6fa71d12c3c91a"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);