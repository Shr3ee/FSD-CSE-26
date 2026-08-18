const a=[1,2,3,4];
const b=[5,6,7,8];
const c=[...a,...b];
console.log("a=",a);
console.log("b=",b);
console.log("c=",c);
const student={
    name:"xyz",
    age:41,
    branch:"CSE"
}
const newStudent={
    ...student,branch:"IT"
}
const{name,age,branch}=student;
console.log("Student=",student);
console.log("New Student=",newStudent);
console.log('my name is ${name} this is my old name')
console.log("age=",age);