// Array

// Problem 1
// let idea = ["Jazz", "Blues"];
// idea.push("Rock-n-Roll");
// idea[Math.floor(idea.length / 2)] = "Classics";
// idea.unshift("Rap","Reggae");
// console.log(idea);

// Problem 2

let arr = ["a", "b"];

arr.push(function () {
  return 1;
});

arr.forEach((result, index) =>
  console.log(typeof result === "function" ? arr[index]() : result)
);

