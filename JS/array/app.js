// var name1 = "ahmed" 
// var name2 = "raza" 
// var name3 = "bilal" 

// store multiple data in array 
var names = ["ahmed", "raza", "bilal", "ahmed", "raza", "bilal", "ahmed", "raza", "bilal3"]
// console.log(names);

//length
var length = names.length
// console.log("names length:" + length);

//getting value from index
var index = names[2]
// console.log("index 2:" + index);

// console the last index of an array
// console.log('last=>', names[names.length - 1])

// console the first index of an array
// console.log('first=>', names[0])

// console the second last index of an array
// console.log('last=>', names[names.length - 2])

//array mein value ko update krna
names[3] = 'Ahmed at 3'
// console.log('names-->', names)

//array mein value ko add krna
names[names.length] = '9 indx'
// console.log('names after-->', names)


var cities = ['Karachi', 'Lahore', 'Islamabad']

console.log('cities-->', cities)

//add element at the end of array
cities.push('Quetta', 'Peshawar' , 'ABC')
console.log('After push-->', cities)

//remove element at the end of array
cities.pop()
console.log('After pop-->'  ,cities )

//add value in the start im the array
cities.unshift('Start wala shehr')
console.log('After unshift-->', cities)

//remove value from the start im the array
cities.shift()
console.log('After shift-->', cities)



var userCity = prompt('Add your city')
console.log(userCity)
cities.push(userCity)
console.log(cities)
