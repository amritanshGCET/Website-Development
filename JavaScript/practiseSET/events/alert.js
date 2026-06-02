function fnc(buttonNo){
alert("button "+buttonNo+" was clicked");
}
let btn1=document.querySelector(".btn1");
btn1.addEventListener("click", function() {
    fnc(1);
});
let btn2=document.querySelector(".btn2");
btn2.addEventListener("click",function() {
    fnc(2);
});
let btn3=document.querySelector(".btn3");
btn3.addEventListener("click",function() {
    fnc(3);
});
