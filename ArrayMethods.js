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