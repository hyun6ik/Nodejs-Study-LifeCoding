const { setupMaster } = require("cluster");

console.log(Math.round(1.7));
console.log(Math.round(1.4));

function sum(first, second){
    console.log(first+second);
}

function sum2(first, second){
    return first+second;
}

sum(2,4);
var c = sum(3,5);
console.log(c);