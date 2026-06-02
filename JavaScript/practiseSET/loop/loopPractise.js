//1
let marks={
    "harry":"98",
    "rohan":"70",
    "aakash":"7",
}
console.log(marks);
//2
for (const key in marks) {
        const element = marks[key];
        console.log(key,element);
}

