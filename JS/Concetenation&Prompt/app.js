


// var firstName  = prompt('Your First name')
// var lastName = prompt('Your last name')

// console.log('Your fullname is ' + firstName + ' ' + lastName )


var maths = +prompt('Your maths number')
var urdu = +prompt('Your urdu number')
var english = +prompt('Your english number')

console.log(typeof maths)
console.log(maths + urdu + english)
var percentage = (maths + urdu + english) /300 * 100

console.log('Your percentage is ' + percentage + '%')
document.write('Your percentage is ' + percentage + '%')

document.write("<h1>Your percentage is" + percentage + "% </h1>")