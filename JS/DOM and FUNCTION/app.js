

//function

// A JavaScript function is a block of code designed to perform a particular task.

// function ko banana
// function ko call krna

function hello() {
    alert('Hello')
}
//  hello()

function showMessage(msg) {
    alert(msg)
}


//  showMessage('Congrats! You are Pass')
//  showMessage('Sorry , You did not Qualify')
//  showMessage('You are on chance')


var heading = document.getElementById('heading')
var para = document.getElementById('para')
var input = document.getElementById('value')

heading.innerText = 'We are learning Dom'
heading.style.color = 'red'
console.log(para)

function changeColor(color) {
    heading.style.color = color
    para.style.color = color
}


function getValue(){
    console.log(input.value)
}

