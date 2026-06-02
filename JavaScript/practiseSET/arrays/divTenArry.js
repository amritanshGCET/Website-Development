//program to filter numbers divisible by 10 in a given array
let array=[10,20,30,3,9,8,50,100,200];
function fnc(index){
if((index%10)===0){
    return true;
}
return false;
}
let newArray=array.filter((fnc)); //we can also use for loop instead of .filter
console.log("new array: "+newArray);
console.log("old array: "+array)