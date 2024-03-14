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
cities.push('Quetta', 'Peshawar', 'ABC')
console.log('After push-->', cities)

//remove element at the end of array
cities.pop()
console.log('After pop-->', cities)

//add value in the start im the array
cities.unshift('Start wala shehr')
console.log('After unshift-->', cities)

//remove value from the start im the array
cities.shift()
console.log('After shift-->', cities)

//push , pop , end pe add krega or remove karega
//shift ,unshift , start pe add krega or remove karega

//splice
// 1.particular index pe add krna he
// 2.particular index se remove krna he
// 3.particular index se add bhe krna he or remove bhe krna he

var fruits = ['Banana', 'Apple', 'Orange', 'Mango', 'Avacado', 'Watermelon']
//add krna 
fruits.splice(1, 0, 'Strawberry', 'ABC Fruit')
console.log('fruits---->', fruits)

//remove krna 

var deleted = fruits.splice(2, 1)
console.log('fruits after remove---->', fruits)
console.log('fruits after remove---->', deleted)

//add bhe krna he or remove bhe

var updated = fruits.splice(4, 1, 'Cheeku')

console.log('fruits after add remove-->', fruits)
console.log('updated-->', updated)

var copy3 = fruits.slice(1, 4)

console.log('copy3---?', copy3)
console.log('copy3---?', fruits)
