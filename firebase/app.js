import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.3/firebase-app.js";
import {
  getAuth,
  onAuthStateChanged,
  createUserWithEmailAndPassword,
  signOut,
  signInWithEmailAndPassword,
} from "https://www.gstatic.com/firebasejs/10.12.3/firebase-auth.js";
import {
  getFirestore,
  collection,
  addDoc,
  getDocs,
} from "https://www.gstatic.com/firebasejs/10.12.3/firebase-firestore.js";
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
const auth = getAuth(app);
const db = getFirestore(app);
console.log("app-->", app);
console.log("auth-->", auth);
console.log("db", db);

const authentication = document.getElementById("authentication");
const signupemail = document.getElementById("signupemail");
const signuppassword = document.getElementById("signuppassword");
const signupBtn = document.getElementById("signupBtn");

const signinemail = document.getElementById("signinemail");
const signinpassword = document.getElementById("signinpassword");
const signinBtn = document.getElementById("signinBtn");

const content = document.getElementById("content");
const logoutBtn = document.getElementById("logoutBtn");
const showEmail = document.getElementById("showEmail");
const allusersdiv = document.getElementById("allusers");

signupBtn.addEventListener("click", signupUser);
logoutBtn.addEventListener("click", logoutuser);
signinBtn.addEventListener("click", signinUser);
onAuthStateChanged(auth, (user) => {
  if (user) {
    const uid = user.uid;
    console.log("user id", uid);
    content.style.display = "block";
    authentication.style.display = "none";
    showEmail.innerHTML = `<p> welcome ${user.email} </p>`;
    getAllUsers();
  } else {
    console.log("user is not avalible");
    content.style.display = "none";
    authentication.style.display = "block";
  }
});
function signupUser() {
  const emailvalue = signupemail.value;
  const passwordvalue = signuppassword.value;
  createUserWithEmailAndPassword(auth, emailvalue, passwordvalue)
    .then((userCredential) => {
      // Signed up
      const user = userCredential.user;
      console.log("user", user);
      addData(emailvalue, passwordvalue);
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

async function addData(email, pasword) {
  try {
    const userCollection = collection(db, "allusers");
    const userRef = await addDoc(userCollection, {
      email: email,
      pasword: pasword,
      created_at: new Date().toISOString(),
    });
    console.log("Document written with ID: ", userRef.id);
  } catch (e) {
    console.error("Error adding document: ", e);
  }
}

async function getAllUsers() {
  const userCollecton = collection(db, "allusers");
  const querySnapshot = await getDocs(userCollecton);
  allusersdiv.innerHTML=''
  querySnapshot.forEach((user) => {
    console.log(`${user.id} => ${user.data().email}`);
    var addusers = `<div id=${user.id}>
<p>${user.data().email}</p>
<p>${user.data().pasword}</p>
</div>`;
allusersdiv.innerHTML +=addusers
  });
}
