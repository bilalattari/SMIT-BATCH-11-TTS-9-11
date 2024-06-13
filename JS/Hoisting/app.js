//There are two phases of code execution
//1.Memory allocation
//2.Code Execute

// var x = undefined
//function sum(a, b) {
//    return a + b;
//}
//var sum1 = undefined
//var sum2 = undefined

// console.log("x==>", x);
// console.log("sum>", sum);
// // console.log("y==>", y);

// var x = 10;

// console.log("x->", x);

// function sum(a, b) {
//   return a + b;
// }

// console.log(x);

// var sum1 = sum(5, 10);
// var sum2 = sum(10, 10);

// if (true) {
//   console.log(sum2);
// }

// Difference between var and let/const

//1.variable made using var can be redeclare
// but variable made using let cannot be redeclare

// let x = 10;
// x = 20;

// console.log("x=>", x);

//2.variable made using let/const cannot be used before it's declaration
// but variable made using var can be used before it is declared

// temporal dead zone
// temporal dead zone
// temporal dead zone
// temporal dead zone
// let x = 30;

//3.var made using var have functional scope or global scope
//but variable made using let have block scope

// function varScope() {
//     //x = undefined
//     //y = undefined
//   console.log(y);
//   var x = 2;
//   console.log("First=>", x);
//   if (true) {
//     var x = 4;
//     console.log("Second=>", x);
//     if (true) {
//       var y = 10;
//     }
//   }
//   console.log("Third=>", x);
// }

// varScope();

// function letScope() {
// //   console.log(y);
//   let x = 2;
//   console.log("First=>", x);
//   if (true) {
//     let x = 4;
//     console.log("Second=>", x);
//     if (true) {
//       console.log(y);
//       let y = 4;
//     }
//   }
//   console.log("Third=>", x);
// }

// letScope();
