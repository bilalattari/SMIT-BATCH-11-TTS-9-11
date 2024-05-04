// var date_heading = document.getElementById('currentDate')
// var onlyDate = document.getElementById('onlyDate')
// var onlyDateFormat = document.getElementById('onlyDateFormat')
// var time = document.getElementById('time')

// var now = new Date()
// console.log(now);
// date_heading.innerText = now

// onlyDate.innerText = "Current Date => " + now.toDateString()
// onlyDateFormat.innerText = "Format Date => " + now.toLocaleDateString()

// time.innerText = "Time => " + now.toLocaleTimeString()
// console.log('Year=>', now.getFullYear())
// console.log('Hour=>', now.getHours())
// console.log('Min=>', now.getMinutes())
// console.log('sec=>', now.getSeconds())
// console.log('day=>', now.getDay())

// var days = ['Sunday' , 'Monday' , 'Tuesday' ,'Wednesday' , 'Thursday' , 'Friday' , 'Saturday']
// console.log(days[0]);
// console.log('Day=>', days[now.getDay()])
// console.log('Month=>', now.getMonth())




var now = new Date()
console.log("Milliseconds=>", now.getTime())
// console.log("seconds=>", now.getTime() / 1000)
// console.log("minutes=>", now.getTime() / 1000 / 60)
// console.log("hour=>", now.getTime() / 1000 / 60 / 60)
// console.log("day=>", now.getTime() / 1000 / 60 / 60 / 24)
// console.log("month=>", now.getTime() / 1000 / 60 / 60 / 24 / 30)
// console.log("years=>", Math.floor(now.getTime() / 1000 / 60 / 60 / 24 / 30 / 12))
var fahadBirthDate = new Date("December 14 ,2006")
// fahadBirthDate.setDate(14)
// fahadBirthDate.setMonth(11)
// fahadBirthDate.setFullYear(2006)
var difference = now.getTime() - fahadBirthDate.getTime()
console.log(difference)
var birthdate = document.getElementById('birthdate')
function calculateTimeFromBirth() {
    console.log(birthdate.value)
    var userBirthdate = new Date(birthdate.value)
    var currentDate = new Date()
    console.log(userBirthdate)

} 
