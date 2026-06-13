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

//array methods 
//pop
let arr1 =[0,1,2,3,4,5,6,7,8]; //removes last element from array and returns it 
let Narr1=arr1.pop();
console.log(Narr1);
console.log(arr1);
//push
let arr2=[1,2,3,4,5,6,7,8,9];
let Narr2=arr2.push(101); //pushes a new element into the array and returns its index value
console.log(arr2);
console.log(Narr2);
//shift 
let arr3=[1,2,3,4,5,6,7,8,9];
let Narr3=arr3.shift(); //removes first element and return it
console.log(arr3);
console.log(Narr3);
//unshift
let arr4=[1,2,3,4,5,6,7,8,9]
let Narr4=arr4.unshift(12); //add element in the start and returns the new array 
console.log(arr4);
console.log(Narr4);
//delete
let arr5=[1,2,3,4,5,6,7,8,9]
delete arr5[2]; //it is an operator 
console.log(arr5);








