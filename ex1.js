// ES-6
// 1.let and const
// 2.arrow function
// 3.promise
// 4.filter,map,reduce
// 5.template literal
// 6.default value
// 7.destructing
// 8.rest and spread operator
// 9.fetch
// 10.set and map
// 11.class component
// 12.import and export
var a=20;
var b=30;
b=a++;
console.log("a=",a);
console.log("b=",b);
function sum(a=0,b=0){
    return (a+b);
}
//arrowfunction
const sum1=(a,b)=>a+b;
console.log("sum=",sum(12));
console.log("sum=",sum(12,34));
console.log("sum=",sum());
console.log("sum1=",sum1(12,34));
