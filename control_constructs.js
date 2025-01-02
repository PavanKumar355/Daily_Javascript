//if-else
let age=23;
if(age>18){
    console.log('age is greater than 18');
}else{
    console.log('age is not lessar than 18');
}

//switch()
let day='wednesday';
switch(day){
    case 'wednesday':
        console.log('its wednesday')
          break;
    case 'friday':
        console.log('its friday');
    break;
    default:console.log('another day');
    }

   //for of loop ->iterate each element and return values 
   var arr=[1,2,3,4]
   for(var i of arr){
    console.log(i);
   }

   //for in loop -> iterate each value and returns index values
   var arr1=['a','b','e','d']
   for(var i in arr1){
    console.log('index value ',i);
   }

   //forEach() -> accepts one argument as a function
   let arr4=[1,2,3,4,6]
   arr4.forEach((ele,index,a)=>console.log(ele,index,a));

   //break ,continue
   for(let i=1;i<=5;i++){
    if(i==3){
        //break;
        continue;
    }
    console.log(i);
   }