 import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-app.js";

 const firebaseConfig = {
   apiKey: "AIzaSyBzlHm63hrEd1oBcKt1n50_Owc2XVnUuNs",
   authDomain: "firstproject-3e2d4.firebaseapp.com",
   projectId: "firstproject-3e2d4",
   storageBucket: "firstproject-3e2d4.appspot.com",
   messagingSenderId: "469407562140",
   appId: "1:469407562140:web:b80071b9bbcbaa148c7059",
   measurementId: "G-5QKKWC3QY1"
 };

 // Initialize Firebase
 const app = initializeApp(firebaseConfig);
 console.log("firebase connect",app);