
// property => jo simple aik value ho
// method   => us type ke related function ko function kehte hen


// length 

var SMIT_11 = 'We are learning Javascript.'
// console.log(SMIT_11.length)

//USE CASE

// var username = prompt('Add your name')
// if (username.length > 3 && username.length < 12) {
//     console.log('ok')
// } else {
//     alert('Please add proper name')
// }

// if (username.length < 3 || username.length > 12) {
//     alert('Please add proper name')
// }


// charAt , ye index number leta he or us position pe jo value hoti he usko return krta he
var qoute = "Insaan jab bolta he to uska character pata chal jata he."
// console.log(qoute.charAt(5))

for (var i = 0; i < qoute.length; i++) {
    console.log(qoute.charAt(i))
}



// toUpperCase , ye string to uppercase mein krke new string return krta he

// toLowerCase , ye string to lowercase mein krke new string return krta he

// slice , copy krke new string return krta he

// indexOf , alphabet/character dete hen to agr wo alphabet mojood ho to uska index number return krta he wrna -1 return krta he

// lastIndexOf , alphabet/character dete hen to agr wo alphabet mojood ho to uska last wala index number return krta he wrna -1 return krta he

// replace , ye 2 parameters leta he, jisko krna he or jis se krna he , updated new string return krdega

// replaceAll  , ye replace ki tarha he lekin sab jaga se replace krdeta he

// trim , start or end se empty spaces ko remove krdeta he