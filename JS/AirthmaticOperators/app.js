var num1 = 30
var num2 = 10

// Familiar operators

var addition = num1 + num2
var subtr = num1 - num2
var multiply = num1 * num2
var divide = num1 / num2
var modulas = 545 % 2
//even or odd number
// ksi bhe number ko 2 se divide krdo ,
// agr 0 bache to wo even he or 1 bache to odd
//divide hone ke baad jo value bachti he wo hamen dedeta he

var exponent = 5 ** 3 // 5 * 5 * 5

// console ham use krte hen console mein output ,result ko dekhne ke lye
// console.log(addition) //40
// console.log(subtr) // 20
// console.log(multiply) // 300
// console.log(divide)
// console.log(modulas) //1
// console.log(exponent)

//bodmas
// bracket opent , phr division  , phr multiplication ,
// addition or subtraction mein left se jo pehle aega wo apply hoga.

var bod1 = multiply / subtr + addition
var bod2 = multiply / (subtr + 10)
var bod3 = multiply + subtr * modulas
// console.log(bod1)
// console.log(bod2)
// console.log(bod3)

//Unfamiliar operators

//increment ke lye use krte hen ++

//post increment/decrement
// num++ , num--
// ham jahan par call krte hen ,
// to new variable ko value pehle assign hoti he phr update hoti he

//pre increment/decrement
// ++num , --num
// ham jahan par call krte hen ,
// to value pehle update hoti he phr assign hoti he

// post incre example
var pNum = 10
var pNumAfter = pNum++

console.log(pNum) //11
console.log(pNumAfter) //10

// post descr example
var pdNum = 10
var pdNumAfter = pdNum--

console.log(pdNum) //9
console.log(pdNumAfter) //10 


// pre incre example
var prNum = 10
var prNumAfter = ++prNum

console.log(prNum) 
console.log(prNumAfter)

// pre dec example
var prdNum = 10
var prdNumAfter = --prdNum

console.log(prdNum) 
console.log(prdNumAfter)