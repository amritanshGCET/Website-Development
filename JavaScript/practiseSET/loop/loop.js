//for loop
for (let i = 0; i <= 10; i++) {
    console.log("helloworld no:- " + i);
}
//for-in loop
let info = {
    "name": "Amritansh singh",
    "id": "45jcb",
    "password": "****",
}
for (const key in info) {
    const element = info[key];
    console.log(key, element);
}
//while loop
let w = 5;
while (w >= 0) {
    console.log("value of w is " + w);
    w--;
}
//do while loop
let k=1;
do{
console.log("no of times loop executed "+k);
k++;
}
while(k<=10)