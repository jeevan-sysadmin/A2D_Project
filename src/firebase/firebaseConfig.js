// Firebase configuration and initialization
import firebase from 'firebase/app';
import 'firebase/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyCqTqvna4GEYri_EFj2079Swsl7fdNpnSY",
    authDomain: "a2dt-f5fb7.firebaseapp.com",
    projectId: "a2dt-f5fb7",
    storageBucket: "a2dt-f5fb7.firebasestorage.app",
    messagingSenderId: "576473877537",
    appId: "1:576473877537:web:0b411eda21051d62b7e760",
    measurementId: "G-PG1CMC2ERP"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const db = firebase.firestore();
export { db };
