import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAXFme_oTPlrFmWIm707ac6Z2qawoTvf2k",
  authDomain: "authentication-tutorial-ec556.firebaseapp.com",
  projectId: "authentication-tutorial-ec556",
  storageBucket: "authentication-tutorial-ec556.appspot.com",
  messagingSenderId: "945663559539",
  appId: "1:945663559539:web:51b9786fd75d399bf86706",
  measurementId: "G-22FP5PHT1F",
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
