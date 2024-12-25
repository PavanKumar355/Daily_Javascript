//Function Declaration: Hoisted
function greet1(name){
    return `Hello,${name}`
}
console.log(greet1('Priya'))

//Function Expression: Not Hoisted
let greet2 = function(name){
    return `Hello,${name}`
}
console.log(greet2('Ankit'))

//Arrow Function: Callbacks
let greet3 = (name)=>{
    return `Hello,${name}`
}
console.log(greet3('Abhi'))

//named function example
function Message(message){
    return "welcome to javascript learning "+message
}
console.log( Message('Alice'))

//anonymous function
// let product=function (a,b){
//    console.log(a*b)
// }

// function sum(a,b,fun){
//     console.log(a+b)
// fun(6,8)
// }

// sum(12,12,product)

function quotation(quote){
    console.log(quote+" hardwork never fails..")
}

let greet=(wish,fun)=>{
    console.log(wish+" this is for you..")
    fun('Sweet message')
}
greet('Alice',quotation)