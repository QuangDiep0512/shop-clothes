import { initializeApp } from "firebase/app";
import {
  FacebookAuthProvider,
  getAuth,
  GoogleAuthProvider,
} from "firebase/auth";
import { getDatabase } from "firebase/database";

const firebaseConfig = {
  apiKey: "AIzaSyBVB3yx0i4gPe1DvtEkX7r6JzVJCLMuhyc",
  authDomain: "login-app-68809.firebaseapp.com",
  projectId: "login-app-68809",
  storageBucket: "login-app-68809.appspot.com",
  messagingSenderId: "442091125365",
  appId: "1:442091125365:web:5457e82dac4b3d7cccd63c",
};
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const database = getDatabase(app);
const providerGg = new GoogleAuthProvider();
const providerFb = new FacebookAuthProvider();

export { auth, providerGg, providerFb, database };
