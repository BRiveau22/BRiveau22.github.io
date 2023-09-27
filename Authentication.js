import {
    getAuth,
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    onAuthStateChanged,
    signOut
} from "https://www.gstatic.com/firebasejs/10.4.0/firebase-auth.js";
import { app } from "./firebaseSetup.js";

const auth = getAuth(app);
const userEmail = document.querySelector("#userEmail");
const userPassword = document.querySelector("#userPassword");
const authForm = document.querySelector("#authForm");
const content = document.querySelector("#content");
const signUpButton = document.querySelector("#signUpButton");
const signInButton = document.querySelector("#signInButton");
const signOutButton = document.querySelector("#signOutButton");

content.style.display = "none";

export async function userSignUp() {
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

export async function userSignIn() {
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

export async function checkAuthState() {
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

export async function userSignOut() {
    await signOut(auth);
}

checkAuthState();

signUpButton.addEventListener("click", userSignUp());
signInButton.addEventListener("click", userSignIn());
signOutButton.addEventListener("click", userSignOut());