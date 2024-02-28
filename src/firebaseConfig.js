// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCAgVFUgBuk7MrlAp8PqfsfgVXuC12ubMA",
  authDomain: "pulsezest-school.firebaseapp.com",
  databaseURL: "https://pulsezest-school-default-rtdb.firebaseio.com",
  projectId: "pulsezest-school",
  storageBucket: "pulsezest-school.appspot.com",
  messagingSenderId: "825819682630",
  appId: "1:825819682630:web:19a523f847bb185cd33747",
  measurementId: "G-VPSF4178GE"
};

// Initialize Firebase  
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export { auth };