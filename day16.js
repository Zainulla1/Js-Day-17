// Exercise-1

//which result first print in the console

console.log(1);
setTimeout(() => {console.log(2)},1000);
setTimeout(() => {console.log(3)},0);
console.log(4);

//Exercise-2

//What is the output of the setTimeout function


let i = 10;
setTimeout(() => {
    console.log(i);
},5000);