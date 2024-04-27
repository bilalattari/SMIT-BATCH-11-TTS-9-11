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
// var count = 0
// for (var i = 0; i < qoute.length; i++) {
//     console.log(qoute.charAt(i))
//     if (qoute.charAt(i) === 'c') {
//         count++
//     }
// }
// console.log(count)



// toUpperCase , ye string to uppercase mein krke new string return krta he

// MUTABLE   => WO DATA TYPE JO UPDATE HOSAKTI e.g Object-Array
// IMMUTABLE => WO DATA TYPE JO UPDATE NAHN HOTI BALKE REPLACE HOTI HE. 

var smit = 'smit'
console.log(smit.toUpperCase())
smit = smit.toUpperCase()
console.log(smit)

// toLowerCase , ye string to lowercase mein krke new string return krta he

// var lowerCase = 'LowerCasE'
// console.log(lowerCase.toLowerCase())
//use case
var a = 'a'
var A = 'A'
console.log(a === A)

var cities = ['KarAChi', 'LaHore', 'IslAMAbad', 'Mirpur']
var userCity = prompt('Add City')
for (var i = 0; i < cities.length; i++) {

    if (cities[i].toLowerCase() === userCity.toLowerCase()) {
        alert('Match')
    }
}
// slice , copy krke new string return krta he
// var username = 'Bilal Raza'
// console.log(username.slice(1, 5))

var username = 'basit'
username = username[0].toUpperCase() + username.slice(1)
console.log(username)


// indexOf , alphabet/character dete hen to agr wo alphabet mojood ho to uska index number return krta he wrna -1 return krta he

// lastIndexOf , alphabet/character dete hen to agr wo alphabet mojood ho to uska last wala index number return krta he wrna -1 return krta he

// replace , ye 2 parameters leta he, jisko krna he or jis se krna he , updated new string return krdega

// replaceAll  , ye replace ki tarha he lekin sab jaga se replace krdeta he

// trim , start or end se empty spaces ko remove krdeta he




// AIK HOGA SECRET NUMBER
// SECRET NUMBER => 15
// 1.USER 1 OR USER 2 SE NUMBER LENGE USING PROMPT
// 2.2 PRIZES HE
// => LOW=> 5 SE ZYADA HO OR 20 SE KAM HO LEKIN 15 NA HO  , 11 , 18
// => MEDIUM PRIZE => KOI BHE NUMBER DAALE JIS MEIN 5 PLUS YA MINUS KAREN TO 15 HOJAE , 10 ,20
// => HIGH PRIZE => EXACT SECRET NUMBER BATADE ., 15
let userName = prompt("Enter name").toUpperCase();
if(userName === "ALI"){
  console.log("found")  
}else{
    console.log("not found")
}


let arr = ['ali', 'shehzad','ahmed'];
for(let i=0 ; i< arr.length ; i++){
    console.log(arr[i][0].toUpperCase() +arr[i].slice(1) )
}
