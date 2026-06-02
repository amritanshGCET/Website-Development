let arr = [1, 4, 6, 6, 4, 3, 55, 3, 5, 5];
function fnc(index) {
    let n = index * index;
    return n; //we can directly apply return index*index;
}
let sq = arr.map((fnc)); //we can also use arr.map((index)=>{
//return index*index;
//      });
console.log(sq);

