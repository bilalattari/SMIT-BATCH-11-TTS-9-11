import { signInWithEmailAndPassword, auth } from "../utils/utils.js";

const goToCreateAccount = document.getElementById("goToCreateAccount");
const goToSignIn = document.getElementById("goToSignIn");
const signup_container = document.getElementById("signup_container");
const login_container = document.getElementById("login_container");
const signup_form = document.getElementById("signup_form");
const signin_form = document.getElementById("signin_form");

goToCreateAccount.addEventListener("click", (e) => {
  e.preventDefault();
  signup_container.style.display = "block";
  login_container.style.display = "none";
});
goToSignIn.addEventListener("click", (e) => {
  e.preventDefault();
  signup_container.style.display = "none";
  login_container.style.display = "block";
});

signin_form.addEventListener("submit", (e) => {
  e.preventDefault();
  console.log(e);
  e.target[2].disabled = true;
  const email = e.target[0].value;
  const password = e.target[1].value;

  signInWithEmailAndPassword(auth, email, password)
    .then(() => {
      console.log("Login hogya");
      window.location.href = "/";
      e.target[2].disabled = false;
    })
    .catch((err) => {
      alert(err), (e.target[2].disabled = false);
    });
});
