//4
function fnc(a){
    if(a==5){
        console.log("correct number");
    }
    else{
        console.log("try again");
    }
}
 let x=fnc(5);


//5
function mean(a,b,c,d,e){ //we can reuse a since a is a local variable for function fnc
k=(a+b+c+d+e)/5;
return k;
}
let n= mean(78,34,96,73,45);
console.log("Mean of five numbers is: "+n);