import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-analytics.js";

import {
  getFirestore,
  collection,
  addDoc,
  getDocs,
  doc,
  deleteDoc,
} from "https://www.gstatic.com/firebasejs/10.12.2/firebase-firestore.js";

const firebaseConfig = {
  apiKey: "AIzaSyAr2R1sryYvVbSNdplyeKYrIHHZ6D0uZyc",
  authDomain: "calcium-pod-256305.firebaseapp.com",
  projectId: "calcium-pod-256305",
  storageBucket: "calcium-pod-256305.appspot.com",
  messagingSenderId: "182256618793",
  appId: "1:182256618793:web:c3c627824b1c28feea3b38",
  measurementId: "G-3R2S7KYERZ",
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const db = getFirestore(app);
let numbersCollection = collection(db, "numbers");
let todosCollection = collection(db, "todos");

const todo_input = document.getElementById("todo_input");
const add_todo = document.getElementById("add_todo");
const todo_list = document.getElementById("todo_list");

getTodosFromDb();
add_todo.addEventListener("click", addTodoToDb);

async function addTodoToDb() {
  try {
    const obj = {
      todo: todo_input.value,
      createdAt: new Date().toISOString(),
    };

    const docRef = await addDoc(todosCollection, obj);
    getTodosFromDb();
    todo_input.value = "";
  } catch (e) {
    console.log(e);
  }
}

async function getTodosFromDb() {
  try {
    const querySnapshot = await getDocs(todosCollection);
    todo_list.innerHTML = "";
    querySnapshot.forEach((doc) => {
      console.log("Doc=>", doc.id);
      const { todo, createdAt } = doc.data();
      const ele = `<li id = ${doc.id}>${todo} -  ${new Date(
        createdAt
      ).toLocaleDateString()}</li>`;
      todo_list.innerHTML += ele;
    });

    todo_list.childNodes.forEach((li) =>
      li.addEventListener("click", deleteTodo)
    );
  } catch (e) {
    console.log(e);
  }
}

async function deleteTodo() {
  try {
    const docId = this.id;
    const docCollection = doc(db, "todos", docId);
    const docRef = await deleteDoc(docCollection);
    getTodosFromDb()
    console.log("Document deleted=>", docRef);
  } catch (e) {
    console.log(e);
  }
}

// addNumberToDB();
// async function addNumberToDB() {
//   try {
//     const docRef = await addDoc(numbersCollection, {
//       number: Math.round(Math.random() * 1000000),
//     });

//     console.log("docRef=>", docRef);
//     console.log("Document written with ID: ", docRef.id);
//   } catch (e) {
//     console.error("Error adding document: ", e);
//   }
// }
