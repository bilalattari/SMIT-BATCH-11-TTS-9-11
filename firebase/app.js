import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.3/firebase-app.js";
import {
  getAuth,
  onAuthStateChanged,
  createUserWithEmailAndPassword,
  signOut,
  signInWithEmailAndPassword,
} from "https://www.gstatic.com/firebasejs/10.12.3/firebase-auth.js";

const firebaseConfig = {
  apiKey: "AIzaSyCNEplx2T0vwmSOSuInj9SvXZzUESAuLNg",
  authDomain: "hidden-analyzer-425514-u8.firebaseapp.com",
  projectId: "hidden-analyzer-425514-u8",
  storageBucket: "hidden-analyzer-425514-u8.appspot.com",
  messagingSenderId: "838420877540",
  appId: "1:838420877540:web:e174c09ffd903442dd9cf1",
  measurementId: "G-Q0N1HKJ4WC",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
console.log("app-->", app);
const auth = getAuth(app);
console.log("auth-->", auth);

const signupemail = document.getElementById("signupemail");
const signuppassword = document.getElementById("signuppassword");
const signupBtn = document.getElementById("signupBtn");

const signinemail = document.getElementById("signinemail");
const signinpassword = document.getElementById("signinpassword");
const signinBtn = document.getElementById("signinBtn");

const authentication = document.getElementById("authentication");
const content = document.getElementById("content");
const logoutBtn = document.getElementById("logoutBtn");

signupBtn.addEventListener("click", signupUser);
logoutBtn.addEventListener("click", logoutuser);
signinBtn.addEventListener("click", signinUser);
onAuthStateChanged(auth, (user) => {
  if (user) {
    const uid = user.uid;
    console.log("user id", uid);
    content.style.display = "block";
    authentication.style.display = "none";
    content.innerHTML += `<p> welcome ${user.email} </p>`;
  } else {
    console.log("user is not avalible");
    content.style.display = "none";
    authentication.style.display = "block";
  }
});
function signupUser() {
  console.log(signupemail.value, signuppassword.value);
  createUserWithEmailAndPassword(auth, signupemail.value, signuppassword.value)
    .then((userCredential) => {
      // Signed up
      const user = userCredential.user;
      console.log("user", user);
      // ...
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      console.log("errorMessage", errorMessage);
      // ..
    });
}
function signinUser() {
  signInWithEmailAndPassword(auth, signinemail.value, signinpassword.value)
    .then((userCredential) => {
      // Signed in
      const user = userCredential.user;
      // ...
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      console.log("sign in error", errorMessage);
    });
}

function logoutuser() {
  signOut(auth)
    .then(() => {
      // Sign-out successful.
    })
    .catch((error) => {
      console.log("logouterror", error);
    });
}
