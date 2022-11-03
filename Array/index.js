// Array

// Problem 1
// let idea = ["Jazz", "Blues"];
// idea.push("Rock-n-Roll");
// idea[Math.floor(idea.length / 2)] = "Classics";
// idea.unshift("Rap","Reggae");
// console.log(idea);

// Problem 2
// let arr = ["a", "b"];
// arr.push(function () {
//   return 1;
// });
// arr.forEach((result, index) =>
//   console.log(typeof result === "function" ? arr[index]() : result)
// );

// Problem 3
// let array = [];
// function calculate() {
//     let result = array.reduce((a, b) => a + b);
//     alert(result);
// }
// function getValues() {
//     let value = prompt();
//     if (isFinite(value) && value !== null && value !== "") {
//         array.push(Number(value));
//         getValues();
//     } else {
//         calculate();
//     }
// }
// getValues();