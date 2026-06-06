// const descritor = Object.getOwnPropertyDescriptor(Math,"PI");
// console.log(descritor);

let admin={
    Name:"Amritansh singh",
    class:"ECE",
    isLoggedIn:true,
}

const descritor = Object.getOwnPropertyDescriptor(admin,"isLoggedIn"); //(name of object ,"Name of property")
console.log(descritor);

//how to set your own property
Object.defineProperty(admin,"Name",{
    writable:false,
});

console.log(Object.getOwnPropertyDescriptor(admin,"Name"))
