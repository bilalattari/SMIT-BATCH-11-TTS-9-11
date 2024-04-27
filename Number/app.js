

// decimal ko hata ke number aajae
// Math.round krna (4.6 => 5) (4.4 => 4)
// Math.floor krna decimal gaeb krdo or number rehne do (4.6 => 4) (4.9 => 4)
// Math.ceil krna , halka sa bhe decimal ho aik number barhado , (4.001 ==> 5)


// var number = 4.5
// // Math.round
// console.log(Math.round(number))

// // Math Ceil
// console.log(Math.ceil(number))

// // Math Floor
// console.log(Math.floor(number))


// var h2 = document.getElementById('random')
// function generateRandomNumber() {
//     var num =Math.ceil(Math.random()*6)
//     // var round = Math.round(num)
//     h2.innerText = num
// }

var num = Math.ceil(Math.random()*6)
console.log('num',num);


function matchNumber(val){
console.log(val);
if(val == num ){
    alert("correct")
}
}