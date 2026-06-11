let num =Math.random(); //generates a random number
console.log(num);
let WNum = Math.floor((num*10)+1);  //generates a random number between 1-10
console.log(WNum); 
let two=0,four=0,six=0,eight=0,ten=0;
let INum=0,RiNum=0;
for(let i=0;i<1000;i++){
    RiNum =Math.random();
    INum =Math.floor((RiNum*10)+1); 
    if(INum<3){
        two++;
    }
    else if(INum>=3 && INum<5){
        four++;
    }
   else if(INum>=5 && INum<7){
    six++;
   }
   else if (INum>=7 && INum<9){
    eight++;
   }
   else{
    ten++;
   }
}
console.table({"Between 1 to 3":two, 
    "Between 3 to 5":four , 
    "Between 5 to 7":six ,
    "Between 7 to 9":eight , 
    "between 9 to 10":ten
});

// formula to generate numbers in a specific range 
