import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
const firebaseConfig = {
      apiKey: "AIzaSyB27RjVoCq5TCUIbkczunKSkiJ3DojrNws",
      authDomain: "ema-john-simple-7a4d5.firebaseapp.com",
      projectId: "ema-john-simple-7a4d5",
      storageBucket: "ema-john-simple-7a4d5.appspot.com",
      messagingSenderId: "903834293550",
      appId: "1:903834293550:web:af0fbcaa9729b4503ad6bf"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app)
export default auth;