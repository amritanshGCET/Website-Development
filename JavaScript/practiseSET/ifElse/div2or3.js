//program to check wether the number is divisible by 2 or 3
let a=19;
if(a%2==0 && a%3==0){
console.log("number is divisible by 2 and 3 both");
}
else if (a%2==0)
{
    console.log("number is divisible by 2");
}
else if(a%3==0)
{
    console.log("number is divisible by 3");
}
else{
    console.log("number is not divisible at all");
}