// window

//get location
console.log("location",window.location.href);
console.log("location",window.location.pathname);
// upate location

// window.location.href = "http://www.me.com/1.html";


const changeLocaion=  () =>{
    // window.location.assign("http://www.me.com");
    window.location.replace("http://www.me.com/lojack.html");

}
const historyMethods=()=>{
    history.forward();

}