import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

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

// Initialize Firebase
const app = initializeApp(firebaseApp);
const analytics = getAnalytics(app);
const auth = getAuth(firebaseApp);
const db = getFirestore(firebaseApp);
db.collection('todos').getDocs();
const todosCol = collection(db, 'todos');
const snapshot = await getDocs(todosCol);

// Detect Auth state
onAuthStateChanged(auth, user => {
  if(user != null) {
    console.log('Logged In!');
  }
  else {
    console.log('No User');
  }
});


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
