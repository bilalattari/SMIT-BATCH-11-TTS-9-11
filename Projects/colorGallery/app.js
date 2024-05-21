var preview = document.getElementById('previewImg')
var allBoxes = document.getElementsByClassName('box')
for (var i = 0; i < allBoxes.length; i++) {
    allBoxes[i].addEventListener('click', function () {
        preview.style.backgroundColor = this.style.backgroundColor
    })
    allBoxes[i].addEventListener('mouseover', function () {
        this.style.border = '2px solid purple'
    })
    allBoxes[i].addEventListener('mouseout', function () {
        this.style.border = '2px solid transparent'
    })
}

var selected = 0
preview.style.backgroundColor = allBoxes[selected].style.backgroundColor
allBoxes[selected].style.border = '2px solid purple'

var timer = setInterval(() => {
    allBoxes[selected++].style.border = '2px solid transparent'
    if (selected == 5) selected = 0
    preview.style.backgroundColor = allBoxes[selected].style.backgroundColor
    allBoxes[selected].style.border = '2px solid purple'

}, 1500);

// var box1 = document.getElementById('box1')
// var box2 = document.getElementById('box2')
// var box3 = document.getElementById('box3')
// var box4 = document.getElementById('box4')
// var box5 = document.getElementById('box5')

// box1.addEventListener('click', function () {
//     preview.style.backgroundColor = this.style.backgroundColor
// })
// box2.addEventListener('click', function () {
//     preview.style.backgroundColor = this.style.backgroundColor
// })
// box3.addEventListener('click', function () {
//     preview.style.backgroundColor = this.style.backgroundColor
// })
// box4.addEventListener('click', function () {
//     preview.style.backgroundColor = this.style.backgroundColor
// })
// box5.addEventListener('click', function () {
//     preview.style.backgroundColor = this.style.backgroundColor
// })