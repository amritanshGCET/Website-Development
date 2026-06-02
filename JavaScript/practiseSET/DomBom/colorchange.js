function color(){
let r=Math.floor(Math.random() * 256);
let g=Math.floor(Math.random() * 256);
let b=Math.floor(Math.random() * 256);
return "rgb("+r+","+g+","+b+")";
}
function Bcolor(){
let r1=Math.floor(Math.random() * 256);
let g1=Math.floor(Math.random() * 256);
let b1=Math.floor(Math.random() * 256);
return "rgb("+r1+","+g1+","+b1+")";
}
let box=document.getElementsByClassName("box");
for(i=0;i<box.length;i++)
{
    box[i].style.color=color();
    box[i].style.backgroundColor=Bcolor();
}
