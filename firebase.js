import { initializeApp } from "https://www.gstatic.com/firebasejs/12.1.0/firebase-app.js";

import {
  getAuth,
  RecaptchaVerifier,
  signInWithPhoneNumber
} from "https://www.gstatic.com/firebasejs/12.1.0/firebase-auth.js";

const firebaseConfig = {
  apiKey: "AIzaSyDRLQ8DzNvyYEn8lZjcgGdWCzcstitQuKg",
  authDomain: "mule-learner-tuition.firebaseapp.com",
  projectId: "mule-learner-tuition",
  storageBucket: "mule-learner-tuition.firebasestorage.app",
  messagingSenderId: "724253581836",
  appId: "1:724253581836:web:85f2d56ef132bec5da4429",
  measurementId: "G-GLNMLP629R"
};

const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export {
  app,
  auth,
  RecaptchaVerifier,
  signInWithPhoneNumber
};