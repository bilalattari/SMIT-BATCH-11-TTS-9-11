
//1. Mutable update hojaega jabke immutable update nahn hota balke isko replace krna parhta he


var hello = 'hello world!'
// console.log('Uppercase=>', hello.toUpperCase())
// console.log("hello=>", hello)

var array = ['Ahsan', 'Abdullah', 'Abu Bakr']

array[0] = 'Akbar'
hello[0] = 'H'
// console.log("array=>", array)
// console.log("hello=>", hello)


//2.Immutable ko jab ham dusre variable mein assign krte hen to original value dusre variable mein copy hojati he or peche se connection nahn rehta. jabke Mutable ko jab ham dusre variable mein assign krte hen to reference copy hota he or original se connection baaqi rehta he.
var test = 'Test'
var test1 = test

test = 'testing'


//mutable
var abc = ['a', 'b', 'c', 'd']
var abc1 = abc
abc.push('e')

console.log(abc)
console.log(abc1)

// console.log('test=>', test)
// console.log('test1=>', test1)


//3.Mutable ko compare karte hen to wo reference ko check krta he , jabke immutable ko compare krte hen to wo value ko compate krta he

var test = 'test'
test = 'testing'
var test1 = test
console.log(test === test1)

var arr = ['1', '2', '3', '4']
var arr1 = arr
var arr2 = ['1', '2', '3', '4']

console.log(arr === arr1)
console.log(arr === arr2)