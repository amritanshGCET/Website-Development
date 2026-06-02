 function getData(DataId){
return new Promise((resolve,reject)=>{
setTimeout(()=>{
console.log("data "+DataId);
resolve("200");
},2000);
});
}

async function reciveData(){
await getData(2333);
await getData(2334);
await getData(2335);
}