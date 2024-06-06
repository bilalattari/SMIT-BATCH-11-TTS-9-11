//Object
//object is a collection of properties ,
//property consist of name/key and value
//if property value is function , it is called method
var keyboard = {
  company: "Logitics", //string
  color: "Black", //string
  price: 400, //number
  isNew: false, //boolean
  getDiscountedValue: function (disc) {
    console.log("This==>", this);
    var discount = (this.price * disc) / 100;
    console.log("Discount=>", discount);
    var discountedPrice = this.price - discount;
    return discountedPrice;
  },
};

// add object property
keyboard.type = "memrein";
//edit object property
keyboard.color = "white";
// console.log("keyboard=>", keyboard)
//remove object property
delete keyboard.isNew;
// console.log("AFTER DELETE=>", keyboard)
//call a method
console.log(keyboard.getDiscountedValue(50));

var allKeyboards = [
  {
    company: "Logitics",
    type: "Mechanical",
    code: "E324",
  },
  {
    company: "abc",
    type: "memrein",
    code: "E3242",
  },
  {
    company: "ABB",
    type: "Mechanical",
    code: "E124",
  },
];

// console.log(allKeyboards[1])

// allKeyboards[1].company = 'A COMPANY'

// console.log(allKeyboards[1])

// var keyboardDiv = document.getElementById("keyboards");

// function getItem(ele) {
//   console.log("ele==>", ele.id);

//   // var item = allKeyboards[ele.id]

//   // item.code = prompt('New Code')
//   allKeyboards.splice(ele.id, 1);
//   console.log("allKeyboards updated=>", allKeyboards);
//   showAllData();
// }

// function showAllData() {
//   keyboardDiv.innerHTML = "";
//   allKeyboards.forEach(function (data, ind) {
//     // console.log("Index->", ind, "data=>", data)
//     var ele = `<div onclick = "getItem(this)" id=${ind}>${data.code} - ${data.company} - ${data.type}  </div>`;

//     keyboardDiv.innerHTML += ele;
//   });
// }

// showAllData()

//constructor function
function Student(name, fatherName, dob, rollNo, attendance) {
  console.log(this);
  this.name = name;
  this.fatherName = fatherName;
  this.rollNo = rollNo;
  this.dob = dob;
  this.attendance = attendance;
  this.totalClasses = 50;
  this.calculateAge = function () {
    var studentsDob = new Date(this.dob).getFullYear();
    var currentYear = new Date().getFullYear();
    var age = currentYear - studentsDob;
    return age;
  };

  this.inPunctual = function () {};
}

var student1 = new Student("Ahmed", "Abdullah", "10-03-2000", 3132, 45);
var student2 = new Student("sad", "dsa", "10-03-2005", 3133, 40);
var student3 = new Student("sa", "a", "10-03-2001", 3134, 49);
var student4 = new Student("dssds", "ds", "10-03-1998", 3135, 37);
var student5 = new Student("dsasssss", "dsasdsadas", "10-03-2009", 3130, 50);

console.log(student3);
// var student1 = {
//   name: "Ahmed",
//   fatherName: "Abdullah",
//   rollNo: 3132,
// };

var student2 = {
  name: "Usman",
  fatherName: "Abdullah",
  rollNo: 3131,
};

var student3 = {
  name: "Ahsan",
  fatherName: "Ayaz",
  rollNo: 3133,
};
