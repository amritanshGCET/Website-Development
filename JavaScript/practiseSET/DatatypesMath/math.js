let num =Math.random(); //generates a random number
console.log(num);
let WNum = Math.floor((num*10)+1);  //generates a random number between 1-10
console.log(WNum); 
let two=0,four=0,six=0,eight=0,ten=0;
let INum=0;
for(i=0;i<1000;i++){
    INum =Math.floor((num*10)+1); 
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
console.table(`Data generated are as follows:- \n Less than three \t ${two} \n between 3 to 5 \t ${four} \n between 5 to 7 \t ${six} \n between 7 to 9 \t ${eight} \n between 8 to 10 \t ${ten} \n`);
// formula to generate numbers in a specific range 
