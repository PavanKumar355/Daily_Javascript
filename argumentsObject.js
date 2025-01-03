// function add(){
//     console.log("inside add function");
// }
// add('hello');
// console.log(add());

// function add(){
//     console.log(arguments[0],arguments[1],arguments[2]);
// }
// add(); //undefined undefined undefined
// add(10);//10 undefined undefined
// add(10,20);//10 20 undefined
// add(10,20,'alice',34);//10,20,'alice'

function mul(){
    if(arguments.length===2){
    console.log(arguments[0]*arguments[1]);
}
else if(arguments.length===3){
    console.log(arguments[0]*arguments[1]*arguments[2]);
}
else if(arguments.length===4){
    console.log(arguments[0]*arguments[1]*arguments[2]*arguments[3])
}
else{
    console.log("invalid number of arguments....");
}
}
mul();
mul(1,2);
mul(1,2,3);
mul(1,2,3,4);

function mul1(){
    //arguments=[]
    let res=1;
    for(let i=0;i<arguments.length;i++){
  res=arguments[i]*res;
    }
    console.log(res);
}
mul1();
mul1(1,2);
