// Date
let GetDate = new Date(); //Date is an object in JS
console.log(`${GetDate} GetDate`); 
console.log(`${GetDate.toString()} toString`);
console.log(`${GetDate.toDateString()} toDateString`);
console.log(`${GetDate.toISOString()} toISOString`);
console.log(`${GetDate.toJSON()} toJSON`);

let CreateMyDate= new Date(2024,10,23,12,34,45,56);  //in JS month starts with 0 so,0=January
console.log(CreateMyDate.toDateString());

//Time
let TimeStamp = Date.now(); //use .now() with Date only 
console.log(TimeStamp);
let MyTimeStamp = CreateMyDate.getTime(); 
console.log(MyTimeStamp);
//time in seconds 
console.log(Math.floor(Date.now()/1000));



