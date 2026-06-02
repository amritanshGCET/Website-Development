//program to add numbers in array till 0 is added
let arr=[1,2,3,4,5,6];
let b=0;let arrg=0;
for(let i=1;i<=arr.length;i++)
{
    let b=prompt("Enter number "+i+":");
    if(b!=0)
    {
    arrg=arr.unshift(b); //we can use arr.push(b) or arr.splice(0,0,b) also
    }
    else{
        break;
    }
}
console.log(arr);
console.log(arrg);




