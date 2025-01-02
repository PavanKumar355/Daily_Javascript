add()
sub()

function add(){
    console.log(a+b);//NaN
    var a=12;
    var b=3;
    console.log(a+b);//15
}

function sub(){
    //console.log(x-y)//cannot access before initialization
    let x=2;
    var y=1;
    console.log(x-y);//1
}