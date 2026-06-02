let amrit={   //object literal
    Student: "Galgotia college of Eng",
    Intersts:"frontEnd",
    info:function(){
console.log(`Amritansh singh is a student of ${this.Student} intrested in ${this.Intersts}`);
    }
}

Object.prototype.kaiseho=function(){
    console.log("hello! kaise ho");
}
amrit.info()
amrit.kaiseho()
 
//inheritance 
let teacher={
    branch:"Computer Science",
    specelizaion:"Data Stuctures and algorithm",
}

let Trecord={
    Shift:"Day",
    Fulltime:true,
}
teacher.__proto__ = Trecord; //teacher will aquire the properties of Trecord => prototypal inheritance 
//mordern syntax
Object.setPrototypeOf(teacher,Trecord);