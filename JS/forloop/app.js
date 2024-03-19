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
