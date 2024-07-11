import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-app.js";
import {
  getFirestore,
  collection,
  addDoc,
  getDocs,
} from "https://www.gstatic.com/firebasejs/10.12.2/firebase-firestore.js";
import {
  getStorage,
  ref,
  uploadBytes,
  getDownloadURL,
} from "https://www.gstatic.com/firebasejs/10.12.2/firebase-storage.js";
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAr2R1sryYvVbSNdplyeKYrIHHZ6D0uZyc",
  authDomain: "calcium-pod-256305.firebaseapp.com",
  projectId: "calcium-pod-256305",
  storageBucket: "calcium-pod-256305.appspot.com",
  messagingSenderId: "182256618793",
  appId: "1:182256618793:web:c3c627824b1c28feea3b38",
  measurementId: "G-3R2S7KYERZ",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const storage = getStorage(app);

const carsCollection = collection(db, "cars");
console.log("storage=>", storage);

const car_img = document.getElementById("car_img");
const save_file = document.getElementById("save_file");
const container = document.getElementById("container");

getImagesFromDB();

save_file.addEventListener("click", () => {
  //console the first file from the input type file
  console.log(car_img.files[0]);

  const carStorageRef = ref(storage, car_img.files[0].name);

  //upload file to the storage
  save_file.disabled = true;
  uploadBytes(carStorageRef, car_img.files[0])
    .then((snapshot) => {
      console.log("Uploaded  file!");

      // get url from the same storage ref
      getDownloadURL(carStorageRef)
        .then((url) => {
          console.log("url=>", url);

          //add url + category to the db
          addDoc(carsCollection, { url, category: "car" }).then(() => {
            console.log("Document updated to the DB");
            getImagesFromDB();
            save_file.disabled = false;
          });
        })
        .catch((err) => {
          console.log("Error in download=>", err), (save_file.disabled = false);
        });
    })
    .catch((err) => {
      console.log(err), (save_file.disabled = false);
    });
});

async function getImagesFromDB() {
  const querySnapshot = await getDocs(carsCollection);
  container.innerHTML = "";
  querySnapshot.forEach((doc) => {
    console.log(`${doc.id} =>`);

    console.log(doc.data());

    const img = `<img
    id = ${doc.id}
    src = ${doc.data().url}
    style="height: 300px; width: 300px; border-radius: 12px; margin: 10px"
  />`;

    container.innerHTML += img;
  });
}
