// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.4.0/firebase-app.js";
import {
    getAuth,
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    onAuthStateChanged,
    signOut
} from "https://www.gstatic.com/firebasejs/10.4.0/firebase-auth.js";
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
const auth = getAuth(app);

const userEmail = document.querySelector("#userEmail");
const userPassword = document.querySelector("#userPassword");
const authForm = document.querySelector("#authForm");
const content = document.querySelector("#content");
const signUpButton = document.querySelector("#signUpButton");
const signInButton = document.querySelector("#signInButton");
const signOutButton = document.querySelector("#signOutButton");

content.style.display = "none";

const userSignUp = async () => {
    const signUpEmail = userEmail.value;
    const signUpPassword = userPassword.value;

    createUserWithEmailAndPassword(auth, signUpEmail, signUpPassword)
        .then(userCredential => {
            const user = userCredential.user;
            console.log(user);
            alert("Your account has been created!");
        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            console.log(errorCode + errorMessage);
        });
}

const userSignIn = async () => {
    const signInEmail = userEmail.value;
    const signInPassword = userPassword.value;

    console.log(signInEmail, signInPassword);

    signInWithEmailAndPassword(auth, signInEmail, signInPassword)
        .then(userCredential => {
            const user = userCredential.user;
            console.log(user);
            alert("You have signed in successfully!");
        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            console.log(errorCode + errorMessage);
        });
}

const checkAuthState = async () => {
    onAuthStateChanged(auth, user => {
        if (user) {
            content.style.display = "block";
            authForm.style.display = "none";
        } else {
            content.style.display = "none";
            authForm.style.display = "block";
        }
    });
}

const userSignOut = async () => {
    await signOut(auth);
}

checkAuthState();

signUpButton.addEventListener("click", userSignUp());
signInButton.addEventListener("click", userSignIn());
signOutButton.addEventListener("click", userSignOut());