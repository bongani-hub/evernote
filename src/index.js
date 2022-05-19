import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyB5NfoyH9ofXvbqEgNrSlfE_hN2Efw7rK8",
  authDomain: "evernote-clone-a32eb.firebaseapp.com",
  projectId: "evernote-clone-a32eb",
  storageBucket: "evernote-clone-a32eb.appspot.com",
  messagingSenderId: "153281620509",
  appId: "1:153281620509:web:40d50310cc5c296dc9f4f4",
  measurementId: "G-5F7N8H4LMW"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);



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
