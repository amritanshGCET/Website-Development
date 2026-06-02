//by for loop
let n=prompt("enter a number: ");
let k=1;
for(let i=1;i<=n;i++)
{
k=k*i;
}
console.log("output using 'for' loop method: "+k);

//by reduce method
let a=n;
let arr=[];
for(let i=0;i<(a);i++)
{
arr[i]=(i+1);
}
let red=0;
red=arr.reduce(fact);    //there is no intial value given so reduce will start form 0 index reduce will send two input to function and accepts one output
function fact(a,b)
{                          //here 'a' is working as a acumulator it stores all the previous return values 
return a*b;                    
}
console.log("output using reduce method: "+red);
