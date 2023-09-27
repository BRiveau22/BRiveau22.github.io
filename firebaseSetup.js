// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.4.0/firebase-app.js";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyCjeBnz90-iXvJsStWcNwSBgQMsM5JjuQ4",
    authDomain: "profile-app-fab7c.firebaseapp.com",
    databaseURL: "https://profile-app-fab7c-default-rtdb.firebaseio.com",
    projectId: "profile-app-fab7c",
    storageBucket: "profile-app-fab7c.appspot.com",
    messagingSenderId: "462698494586",
    appId: "1:462698494586:web:3f1bd2fa1bf76cbf1299c3"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export { app }