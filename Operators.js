// console.log(10+20);
// console.log(2**3);//8
// var a = 10;
// console.log(a++);//Post Incrementation - 10 But internall a is 11
// console.log(a);// a = 11 
// console.log(++a)//Pre Incrementation - 12

// == Checks only value not data type:
console.log(10 == 10); //true
console.log(10 == '10'); //true

// === Checks Value and Data Type Both
console.log(10 === '10');//false : Values are matching but not data type
console.log(10 == 10);//true

// logical && || and !
console.log(true && true);//true
console.log(true || false); //true
console.log(!true);//false

//Ternary Operator:
console.log((10 == '10' ? 'Equal by Value': 'Not Equal by Value'));

//more examples on operators
console.log(5&&3)
console.log(5&&0)
console.log(4&&" ")
console.log(" "&&" ")

//bitwise operators
console.log(5<<2)
console.log(5>>2)
console.log(5>>>1)
