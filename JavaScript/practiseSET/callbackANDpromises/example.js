// // //example of a asynchronous function

// console.log("one");
// setTimeout(() => {
//     console.log("three")
// }, 2000);
// setTimeout(() => {
//     console.log("four")
// }, 3000);
// console.log("two");

// // //callbacks

// function multiply(a, b) {
//     console.log(a * b);
// }
// function sum(a, b) {
//     console.log(a + b);
// }
// function calculator(a, b, callback) { //callback = sum = multiply    (whatever you wish)
//     callback(a, b);
// }
// calculator(1, 2, sum);
// calculator(2, 3, multiply);

// // //callback hell

// function getData(dataId, nextData) {
//     setTimeout(() => {
//         console.log("data", dataId);
//         if (nextData) {
//             nextData();
//         }
//     }, 2000);
// }

// getData(1, () => {
//     console.log("getting data 2...");
//     getData(2, () => {
//         console.log("getting data 3...");
//         getData(3, () => {
//             console.log("getting data 4...");
//             getData(4);
//         });
//     });
// });

// // //promises
// function API(GetApi) {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             console.log("data", GetApi);
//             resolve("success");
//         }, 5000);
//     });
// }
// let ApiC = API(456); //so,ApiC contains a promise which resolves after 5sec 

// // //then and catch 
// const getPromise = () => {      // function which returns a promise which is resolved or reject
//     return new Promise((resolve, reject) => {
//         console.log("this is promise")
//         //resolve("success");
//         reject("error");
//     });
// };
// let promise = getPromise();
// //if resolved
// promise.then((res) => {
//     console.log("fullfilled", res);
// });
// //if reject
// promise.catch((err) => {
//     console.log("Network issue", err)
// });

// //callback hell using promises
// function getData1(dataId) {
//     console.log("getting data1...")
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             console.log("data", dataId);
//             resolve("success");
//         }, 3000);
//     });
// }

// function getData2(dataId) {
//     console.log("getting data2...")
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             console.log("data", dataId);
//             resolve("success");
//         }, 3000);
//     });
// }

// function getData3(dataId) {
//     console.log("getting data3...")
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             console.log("data", dataId);
//             resolve("success");
//         }, 3000);
//     });
// }
// let p = getData1(476); //we can also use return
// p.then((res) => {
//     let q = getData2(456);
//     q.then((res) => {
//         let r = getData3(457);
//         r.then((res) => {

//         });
//     });
// });