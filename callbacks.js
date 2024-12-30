var num=[10,11,12,13,14]
num.forEach((ele,index,num)=>console.log(ele,index,num))

//filter
console.log(num.filter((ele)=>ele%3===0))

//map
console.log(num.map((ele)=>ele**3))

//reduce
console.log(num.reduce((acc,ele)=>acc+ele,0))