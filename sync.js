//synchronous Function
function register(){
    waitofdelay(1000);
    console.log("register here")
}
function login(){
    waitofdelay(2000);
    console.log("login here")
}
function getData(){
    waitofdelay(3000);
    console.log("fetch data from DB")
}
function displayData(){
    waitofdelay(4000);
    console.log("view user data")
}
function waitofdelay(delay){
    const mt=Date.now()+delay;
    while(Date.now()<mt){
    }
}
register();
login();
getData();
displayData();
console.log("call another application");