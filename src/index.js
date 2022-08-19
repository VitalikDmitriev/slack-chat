import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/common/App/App';
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import 'firebase/auth'
import 'firebase/firestore'

const firebaseConfig = {
    apiKey: "AIzaSyBJxBj_lD6_CSbVkRbT5pmFM1-6SvxcL7I",
    authDomain: "react-slack-chat-2b094.firebaseapp.com",
    projectId: "react-slack-chat-2b094",
    storageBucket: "react-slack-chat-2b094.appspot.com",
    messagingSenderId: "162103218113",
    appId: "1:162103218113:web:0dfa936aac9ab0205a2940",
    measurementId: "G-QFM1G1J81K"
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

const auth = firbase.auth();
const firestore = firebase.firestore()

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render( <
    React.StrictMode >
    <
    App / >
    <
    /React.StrictMode>
);