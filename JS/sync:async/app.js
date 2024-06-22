//Asynchronous functions

//1.settimeout
//2.fetch
//3.Promise

var a = "A";
var b = "B";

// setTimeout(() => {
//   console.log(a);
// }, 0);

// fetch("https://api.escuelajs.co/api/v1/products")
//   .then((res) => res.json())
//   .then((data) => console.log("data==>", data));

// console.log(b);

//callbacks
//A callback is a function passed as an argument to another function

// function login(callback) {
//   setTimeout(() => {
//     console.log("User login");
//     callback();
//   }, 1000);
// }

// function getUserData() {
//   let userInfo = {
//     fullName: "Bilal Raza",
//   };
//   setTimeout(() => {
//     console.log(userInfo);
//   }, 500);
// }

// login(getUserData);

let productsArr = [];
function getProductsFromApi(callBack) {
  fetch("https://api.escuelajs.co/api/v1/products")
    .then((res) => res.json())
    .then((products) => {
      console.log("products==>", products);
      callBack(products);
    });
}

function displayProducts(products) {
  console.log("See all products", products);
}

getProductsFromApi(displayProducts);


