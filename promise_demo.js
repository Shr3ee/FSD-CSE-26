//Asynchronous Function
function register(cb){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
        console.log("register here");
        resolve();
        },10000);
    })
}
function login(cb){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
        console.log("login here");
        resolve();
        },5000);
        
    })
}
function getData(cb){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
        console.log("fetch data from db");
        resolve();
        },4000);
    });
}
function displayData(){
        setTimeout(()=>{
        console.log("view user data")
        },6000);
}
register()
    .then(login)
    .then(getData)
    .then(displayData)
    .catch((err)=>{
        console.err("an error occured",err);
    });
console.log("call another application");




