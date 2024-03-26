//for loop

//Tawaf ki
//  7 Chakkar hote hen (loop ki length )
//  1 tasbeeh (variable he)
// tawaf complete hone ke baad jo counter mein add krte hen
// isi kehte hen increment

//syntex
// 1.variable
// 2.condition (kab tk loop ko chalana he)
// 3. increment ya decrement

for (var i = 1; i <= 7; i++) {
  console.log(i + ' Chakkar')
}

// 20 tk ka table banana he
// var tableNumber = prompt('Table number')
// for (var i = 1; i <= 100; i++) {
//   document.write(tableNumber, ' x ', i, ' = ', tableNumber * i, '<br> <br>')
// }

var weekDays = ['Mon', 'Tue', 'Wed', 'Thurs', 'Fri', 'Sat', 'Sun']

// document.write(weekDays[0])
// document.write(weekDays[1])
// document.write(weekDays[2])
for (var i = 0; i < weekDays.length; i++) {
  document.write(weekDays[i] + "<br>")
}

// exercises
document.write(" <h4>Q1. Square from 1 to 10</h4>")
for (var i = 1; i <= 10; i++) {
    document.write(`<li>${i * i}</li>`)
}

document.write(` <h4>Q2. Find largest number from this 
array [0 ,30,10,31,42,22,144,21,42]</h4>`)
var arr = [0, 30, 10, 31, 42, 22, 144, 21, 42]
var largestNumber = 0

for (var i = 0; i < arr.length; i++) {
    if (arr[i] > largestNumber) {
        largestNumber = arr[i]
    }
}
document.write(`<p>Largest number is <b>${largestNumber}</b> </p>`)


document.write(` <h4>Q2. Find Smallest number from this 
array [6 ,30,2,31,42,-2,144,-5,42]</h4>`)
var arr = [6, 30, 2, 31, 42, -2, 144, -5, 42]

var smallestNumber = arr[0]

for (var i = 0; i < arr.length; i++) {
    if (arr[i] < smallestNumber) {
        smallestNumber = arr[i]
    }
}
document.write(`<p>Smallest number is <b>${smallestNumber}</b> </p>`)


document.write(` <h4>Q3. Print number like this ,
1
123
1234
12345
123456 </h4>`)

var numString = ''
for (var i = 1; i <= 20; i++) {
    numString = numString + i
    document.write(`<li>${numString}</li>`)
}

document.write(`<br>`)
document.write(`<h4>Q4.Print number like this ,
1,3,6,10,15,21,28,36,45,55</h4>`)

var numString = 0
for (var i = 1; i <= 10; i++) {
    numString = numString + i
    document.write(`<li>${numString}</li>`)
}


document.write(`<br>`)
document.write(`<h4>Q5.Print number like this ,
10,9,8,7,6,4,3,2,1</h4>`)

for (var i = 1; i <= 10; i++) {
    document.write(11 - i + '<br>')
}



document.write(`<h4>Q6.Check Prize Bond</h4>`)
var prizeBond = [224, 452, 544, 757, 752, 444, 123, 545, 477, 464, 356]

var userNumber = prompt('Your Prize bond number')
var userWin = false
for (var i = 0; i < prizeBond.length; i++) {
    console.log(i)
    if (userNumber == prizeBond[i]) {
        userWin = true
        break;
    }
}
if (userWin == true) {
    document.write('Mubarak! Aapka Prize khul gya he <br>')
} else {
    document.write('Sorry! Agli dafa try karen. <br>')

}
