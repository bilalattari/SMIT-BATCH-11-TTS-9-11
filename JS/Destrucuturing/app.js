// let batch_11 = {
//   students: 50,
//   startDate: "01-01-2024",
//   endDate: "31-11-2024",
//   isClassesContinue: true,
// };
// let startDate = batch_11.startDate;

// let { startDate : batchStartDate, endDate } = batch_11;
// // var endDate = batch_11.endDate;

// console.log("startDate=>", batchStartDate);
// console.log("endDate=>", endDate);

//destructuring in array

// let abc = ["12", "32", "34", "45"];

// let [a, , b] = abc;
// console.log(a);
// console.log(b);

//Spread Operator
// ...
// var arr = [1, 2, 3, 4, 5, 6, 7];
// var arr1 = [8, 9, 10];

// var combinedArr = [...arr, ...arr1];
// console.log(combinedArr)

// let batch_11 = {
//   students: 50,
//   startDate: "01-01-2024",
//   endDate: "31-11-2024",
//   isClassesContinue: true,
//   currentTopic: "es6",
// };

// let betch11MWF = {
//   ...batch_11,
//   currentTopic: "Firebase",
// };

// console.log(batch_11);
// console.log(betch11MWF);

// Default Parameters and Rest Parameters

// function sum(a = 0, b = 0) {
//   console.log("a=>", a);
//   console.log("b=>", b);
//   return a + b;
// }

// console.log(sum(20, 20));

// let batch_11 = {
//   students: 50,
//   startDate: "01-01-2024",
//   endDate: "31-11-2024",
//   isClassesContinue: true,
//   currentTopic: "es6",
//   noOfQuiz: 12,
// };

// let { noOfQuiz = 3, students, ...rest } = batch_11;
// console.log(rest);

//conditional (ternary) operator

// condition ? true  : false

// var age = 15;
// var gender = "male";

// let isEligible = age >= 18 && gender === "male" ? true : false;

// console.log(isEligible)

let array = [
  { task: "ABC", status: "done" },
  { task: "ABC", status: "pending" },
  { task: "ABC", status: "rejected" },
];

function getColor(status) {
  if (status == "done") {
    return "green";
  } else if (status === "pending") {
    return "yellow";
  } else {
    return "red";
  }
}

array.forEach((data) => {
  let { task, status } = data;
  var ele = `  <div style="height: 200px;margin: 20px;background-color : ${
    status === "done" ? "green" : status === "pending" ? "yellow" : "red"
  }">
  <h1>${task}</h1>
        </div>`;

  list.innerHTML += ele;
});
