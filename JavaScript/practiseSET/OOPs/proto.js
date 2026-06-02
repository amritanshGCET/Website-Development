// Every object in JavaScript has a built-in property, which is called its prototype. 
// The prototype is itself an object, so the prototype will have its own prototype, making what's called a prototype chain. 
// The chain ends when we reach a prototype that has null for its own prototype.
function square(num){
    return num*num;
}
square.power=5;
console.log(square.power);
console.log(square.prototype);

function Data(Username, price){
this.Username=Username;
this.price=price;
}

 Data.prototype.inrcement= function (){  //creating a custom method(function) in prototype
    this.price++;
 }
 Data.prototype.print=function(){
    console.log(`price is ${this.price}`); //.this(jis ne)
 }

 const chai= new Data("chai",10); //creation of a new object (custom method bana hai ye batane ke liye "new" keyword use kare ge)
 const Tea = new Data("tea",200);
chai.inrcement();
chai.print();