let a=Math.random();


//first word
if(a<0.33)
{
    first="crazy";
}

else if(a>=0.33 && a<=0.66){
first="amazing";
}

else{
    first="fire";
}
//second word
let b=Math.random();
if(b<0.33)
{
    second="engine";
}

else if(b>=0.33 && b<=0.66){
second="food";
}

else{
    second="garments";
}
 
//third number
let c=Math.random();
if(c<0.33)
{
    third="limited";
}

else if(c>=0.33 && c<=0.66){
third="HUB";
}

else{
    third="Bros";
}
 
console.log(first+" "+second+" "+third);
