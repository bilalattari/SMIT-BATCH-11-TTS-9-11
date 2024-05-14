function sayHello () {
  alert('Hello Class')
}

// var btn = document.getElementById('helloBtn')

// btn.addEventListener('click', function () {
//   alert('Hello Class')
// })

// btn.addEventListener('mouseover', function () {
//   console.log(btn.id)
//   btn.style.backgroundColor = 'blue'
//   btn.style.color = 'white'
// })

// btn.addEventListener('mouseout', function () {
//   btn.style.backgroundColor = 'white'
//   btn.style.color = 'black'
// })

var cow_img = document.getElementById('cow_img')
console.log(cow_img)

cow_img.addEventListener('mouseover', function () {
  console.log('this==>', this)
  this.src =
    'https://64.media.tumblr.com/bc081c795a65f7077311ca90f1c61bd9/tumblr_nda6hgKpyj1r4zr2vo1_r1_500.gifv'
  this.style.borderRadius = '100%'
})

cow_img.addEventListener('mouseout', function () {
  this.src =
    'https://images.unsplash.com/photo-1545468800-85cc9bc6ecf7?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fGNvd3xlbnwwfHwwfHx8MA%3D%3D'
})
