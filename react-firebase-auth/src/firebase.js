import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth} from 'firebase/auth';
import { getFirestore, collection, getDocs, getDoc } from 'firebase/firestore';

// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseApp = {
  apiKey: "AIzaSyDSbbb9P2HS5Jgm62Kp3etDkUxX687Qc4w",
  authDomain: "goldenyrs-36b19.firebaseapp.com",
  projectId: "goldenyrs-36b19",
  storageBucket: "goldenyrs-36b19.appspot.com",
  messagingSenderId: "242213706159",
  appId: "1:242213706159:web:316058bbba8e9eed34775a",
  measurementId: "G-3170QQV7GW"
};

// Initialize Firebase Authentication and get a reference to the service
const auth = getAuth(app);



