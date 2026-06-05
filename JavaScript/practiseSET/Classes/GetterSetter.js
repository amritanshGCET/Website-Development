class User{
    constructor(name,password){
         this.name=name;
         this.password=password;
    }

//getter only works with setter
get name(){
    return this._name.toUpperCase(); //we return in getters
}
set name(value){
  this._name=value //we do not usually return values in the setters
}
}
const amrit= new User("amritansh singh","efgfbfkjfb");
console.log(amrit);
console.log(amrit.password);
console.log(amrit.name);
