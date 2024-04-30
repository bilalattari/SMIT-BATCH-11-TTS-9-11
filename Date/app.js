

var date_heading = document.getElementById('currentDate')
var onlyDate = document.getElementById('onlyDate')
var onlyDateFormat = document.getElementById('onlyDateFormat')
var time = document.getElementById('time')

var now = new Date()
date_heading.innerHTML = now

onlyDate.innerText = "Current Date => " + now.toDateString()

onlyDateFormat.innerText = "Format Date => " + now.toLocaleDateString()

time.innerText = "Time => " + now.toLocaleTimeString()
console.log('Year=>', now.getFullYear())
console.log('Hour=>', now.getHours())
console.log('Min=>', now.getMinutes())
var days = ['Sunday' , 'Monday' , 'Tuesday' ,'Wednesday' , 'Thursday' , 'Friday' , 'Saturday']
console.log('Day=>', days[now.getDay()] )
console.log('Month=>', now.getMonth())