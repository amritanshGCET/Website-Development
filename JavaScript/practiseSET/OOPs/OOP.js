//CHAI AUR CODE
let costm_details={   //object literal(literaly an object)
username : "Amritansh singh",
Id : "BAC537",
password: "********",
getUserDetails : function(){ //methods of a functions
console.log("Got the user data");
console.log(this.username); //  (.this) tells ki username ki current context me baat ho rahi hai
}
};
console.log(costm_details,costm_details.Id,costm_details.getUserDetails());

function getData(username,loginCount,IsloggedIn){
   /*this.username(object) */ this.username=username;
   this.loginCount=loginCount;
   this.IsloggedIn=IsloggedIn;
   return this;
}
const getData1=getData("Amritansh singh",4,true);
const getData2=getData("hitesh",15,false);
console.log(getData1); //Data overwriting (use new keyword for this situation)
// const getData1= new getData("Amritansh singh",4,true);
//const getData2= new getData("hitesh",15,false); 

