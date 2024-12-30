var arr=[12,345,56,12,78]
for(let i=1;i<arr.length;i++){
    if(arr[i]%2==0)
    console.log(arr[i])
}

//push() -> appends the value to the end of the array
arr.push(100);
console.log(arr);

//unshift() -> appends the value to the 0th index position
arr.unshift(5);
console.log(arr);

//pop() -> removes last element of the array
console.log("pop removed element: ",arr.pop());
console.log("updated array",arr);

//unshift() -> removes element at the 0th index position
console.log("Unshift removed element: ",arr.unshift());
console.log("updated array: ",arr);

//splice(start index,deleteCount,Elements to be added)
var arr1=[10,12,13,14,15,16,17,18,19,20]
console.log(arr1.splice(0,3,21,22,23,24))
console.log("After splice array: ",arr1)

//slice(start ,end index-1)
var arr2=[1,2,3,4,5,6]
console.log(arr2.slice(1,4))
//indexof(index) ->returns index value
console.log(arr2.indexOf(2))
//includes(value)-> checks the specific element in the array or not
console.log(arr2.includes(4))

//sort() -> sort the elements in strings as defaults
var arr4=['a','d','f','e']
console.log(arr4.sort())

//reverse() -> reverse the elements of array
console.log(arr4.reverse())

let n1=[1,2,4,5,6]
let n2=[6,45,3]
let newarr=n1.concat(n2)
console.log("concatinated array:",newarr)

let n=['a','e','r','o']
let ar1=n.join("")
console.log(ar1)

//array unpacking
let users =['hi','hello','how','are','you']
let[user1,user2]=users
console.log(user1)
console.log(user2)

let are=[11,12,14,15,16,17,18]
are.forEach(function(element,index){
    console.log(element,index)
})

//using for loop for finding even numbers
let num=[1,2,3,4,5,6,7,8,9]
let even=[]
for(let i=0;i<num.length;i++){
    if(num[i]%2===0){
        even.push(num[i])
    }
}
console.log(even)

//filter()
let odd=num.filter((element)=>element%2!=0)
console.log("Odd numbers :",odd)
let even1=num.filter((element)=>element%2===0)
console.log("Even numbers: ",even1)

let array=[1,2,3,45,6]
let array1=array.map(element => array[element]+5)
console.log(array1)

