let a= document.getElementById('home');
a.style.color= "blue";
let con=confirm("Do you wish to change the list color to cyan");
let items = document.getElementsByClassName('list');
if(con==true){
for (let i = 0; i < items.length; i++) {
  items[i].style.color = 'cyan';
}
}
