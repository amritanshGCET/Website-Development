class Lms1{ //class syntax
constructor(username,email,password){
    this.username=username;
    this.email=email;
    this.password=password;
}

encryptPassword(){
    return `${this.password}abcd`;
}
changeUsername(){
    return `${this.username.toUpperCase()}`;
}
}
const user1 = new Lms1("Amritansh Singh","amratanshsingh012@gmail.com","bvrhvr");
let k = user1.encryptPassword();
let l=user1.changeUsername();
console.log(k);
console.log(l);

//behind the scene 
 
function Lms2(username,email,password){
this.username=username;
this.email=email;
this.password=password;
}

Lms.prototype.encryptPassword=function(){
    return `${this.password}btj`
}
Lms.prototype.changeUsername=function(){
    return `${this.username.toUpperCase()}`
}
const user2= new Lms2("Aryansh singh","Arayansh33@gmail.com","vvvvntvt");

console.log(user2.encryptPassword());
console.log(user2.changeUsername());