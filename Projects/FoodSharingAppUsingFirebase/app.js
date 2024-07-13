import {
  onAuthStateChanged,
  auth,
  signOut,
  getDocs,
  collection,
  db,
} from "./utils/utils.js";
getFoods();
const cards_container = document.getElementById("cards_container");
// const login_btn = document.getElementById('login_btn')
onAuthStateChanged(auth, (user) => {
  console.log(user);
  if (user) {
    login_btn.style.display = "none";
    user_info.style.display = "block";
    user_info.innerText = user.email;
    create_recipe_btn.style.display = "block";
    logout_btn.style.display = "block";
    // User is signed in, see docs for a list of available properties
    // https://firebase.google.com/docs/reference/js/auth.user
    const uid = user.uid;
    // ...
  } else {
    // User is signed out
    // ...
    login_btn.style.display = "block";
    user_info.style.display = "none";
    user_info.innerText = user.email;
    create_recipe_btn.style.display = "none";
    logout_btn.style.display = "none";
  }
});

logout_btn.addEventListener("click", () => {
  signOut(auth).then(() => {
    console.log("user sign out hogya");
  });
});

async function getFoods() {
  const querySnapshot = await getDocs(collection(db, "foods"));
  querySnapshot.forEach((doc) => {
    console.log(`${doc.id} => ${doc.data()}`);

    const obj = doc.data();
    const { image, foodName, foodPrice, foodLocation, addByEmail } = obj;
    console.log("image=>", image);
    const card = `
    <div
        class="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700"
      >
          <img
            src=${image}
            className= "w-full h-32"
            alt=""
          />
        <div class="p-5">
          <a href="#">
            <h5
              class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white"
            >
              ${foodName}
            </h5>
          </a>
          <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">
          ${foodLocation}
          </p>

          <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">
         Added By ${addByEmail}
          </p>
         
        </div>
      </div>`;

    cards_container.innerHTML += card;
  });
}
