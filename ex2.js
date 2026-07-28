const num=[1,2,3,4,5,6,7,8,9];
const even=num.filter((i)=>(i%2==0));
const sqr=even.map((i)=>(i*i));
const sum=sqr.reduce((s,i)=>(s+i));
console.log("num=",num);
console.log("even=",even);
console.log("square=",sqr);
console.log("sum=",sum);

