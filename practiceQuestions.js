// write a js program to check two numbers and return true
// if one of the number is 100 or if the sum of two numbers is 100

const toEqualTo100 = (a,b)=>a===100||b===100||a+b===100;
console.log(toEqualTo100(100,0));
console.log(toEqualTo100(100));
console.log(toEqualTo100(10,80));
console.log(toEqualTo100(10,90));

// write a js program to get file extension
const getFileExtension = (str)=>str.slice(str.lastIndexOf('.'));
console.log(getFileExtension("web.html"));
console.log(getFileExtension("web.js"));