"use strict";
//number Data Type: All Numbers (whole, decimal, positive, negative)
var a = 456/0;
console.log(a, typeof a);

//strings: Single character or series of characters all are strings
var b = 'Konest'
console.log(b, typeof b)

//Boolean: true / false
var c = true;
console.log(c, typeof c)

//undefined:
let d;
console.log(d); //undefined

//null:
let e = null;
console.log(e); //null


let name= 'alice';
console.log(name)

function name1(a,b){
return a+b;
}
console.log(name1(1,1));

let $=56
console.log($)

//template literals
var s=`hi "welcome to javascript"`
var s=`hi 'welcome to javascript'`
let x='alice'
var s=`hi '${x}'`
var s=12
var s1=13
var s=`the sum of '${s}' and '${s1}' is: ${s+s1}`
console.log(s)