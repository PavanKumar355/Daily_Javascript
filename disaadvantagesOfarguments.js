//arguments object can't use with arrow functions
const add=()=>{
    let res=0;
    for(var i=0;i<arguments.length;i++){
        res=res+arguments[i];
    }
    console.log('addition result: ',res);
}
add();
add(1,2);
add(1,2,4);

//arguments objects can't be used with filter,map,reduce
function add1(){
    let res=arguments.reduce((acc,ele)=>acc*ele,1);
}
add1();
add1(1,2);
add1(1,2,4);