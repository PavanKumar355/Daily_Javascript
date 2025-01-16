const add=(...args)=>{
    let res=args.reduce((acc,ele)=>acc*ele,1);
    console.log('result is ',res);
}
add();//args=[]
add(2,3);//args=[2,3]
add(1,2,3);//args=[1,2,3]

//...args used with reduce()
function mul(...args){
    let res=args.reduce((acc,ele)=>acc*ele,1);
    console.log('result is ',res);
}
mul();
mul(12,12);

//...args used with filter
function get(...args){
let res=args.filter((ele)=>ele%2===1);
console.log(res);
}
get(1,2,3,4,5);

//...args used with map()
function n(...args){
    let res=args.map((ele)=>ele+4);
    console.log(res);
}
n(1,2,3,4,5);

let prod=1;
function fun(n){
for(let i=n;i>=1;i--){
   prod=i*prod;
}
console.log(prod);
}
fun(5);