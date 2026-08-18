//Asynchronous Function
function register(){
    setTimeout(()=>{
        console.log("register here")
    },10000);
}
function login(){
    setTimeout(()=>{
        console.log("login here")
    },5000);
}
function getData(){
    setTimeout(()=>{
        console.log("fetch data from db")
    },4000);
}
function displayData(){
    setTimeout(()=>{
        console.log("view user data")
    },6000);
}
register();
login();
getData();
displayData();
console.log("call another application");


//Event loop

