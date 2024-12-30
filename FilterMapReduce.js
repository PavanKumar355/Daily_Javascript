let arr =[10,11,12,13,14,15]
// let newarr=arr.filter(function(element){
//     if(element%2===0)
//         return element
// })

//using arrow function
let newarr=arr.filter((element)=>element%2===0)
console.log(newarr)

// let years=[1992,2002,2004,2332]
// let leap=years.filter(function(element){
//     if(element%100!==0 && (element%4===0 || element%400===0))
//         return element
// })
// console.log(leap)

//array.map(fun(ele){}) -> it modifies the each element in the array
let arr1=[12,12,1,3,5,6,7]
// let sq=arr1.map(function(element){
//     return element*element
// })

//using arrow function
let sq=arr1.map((Element)=> Element*Element)
console.log("original array: ",arr1)
console.log("mapped array: ",sq)

//reduce((accumulator, currentValue) => accumulator + currentValue, 0) -> it reduces the output into a single value/output
let arr2=[1,2,3,45,6]
// let arrSum=arr2.reduce(function(acc,ele){
//     return acc+ele
// },0)

//using callback function
let arrSum=arr2.reduce((acc,ele)=>acc+ele,0)
let arrProd=arr2.reduce((acc,ele)=>acc*ele,1)
console.log("Sum is",arrSum)
console.log("Product is",arrProd)