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