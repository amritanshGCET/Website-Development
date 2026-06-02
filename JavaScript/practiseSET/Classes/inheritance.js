class User {
    constructor(username){
        this.username=username;
    }
    logMe(){
        console.log(`this is username:-${this.username}`);
    }
}
class Teacher extends User{
    constructor(username,email,password){
        super(username);
        this.email=email;
        this.password=password;
    }

    addcourse(){
        return `course added by ${this.username}`;
    }
} 
 
const user1= new Teacher("Amritansh singh","amratanshsingh012@gmail.com","ehjvrf");
console.log(user1.addcourse());