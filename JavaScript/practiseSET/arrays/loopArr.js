let Student={
Name:"Amritansh singh",
Course:"B-tech",
Branch:"ECE-B",
intrests:"Web Development",
}

for(key in Student)
    {
    console.log(key);
}
// for(key of Student){ //you cannot use for-of loop in an object
//     console.log(key);
// }
let c="Hello";
let arr=[1,45,89,90,56,23,67,89,90];
for(key of c){ 
    console.log(key);
}
for(key of arr){
    console.log(key);
}
for(key in arr)
    {
    console.log(key);
}