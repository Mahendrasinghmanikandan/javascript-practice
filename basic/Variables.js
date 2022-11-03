// var,let,const

// var
var a = 10;
console.log(a);
a = 100;
console.log(a);
// let
let c = 10;
console.log(c);
c = 100;
console.log(c);

// 1st diff btw var and
var result = 10;
console.log("a1", result);
var result = 100;
console.log(result);

// but
let result1 = 10;
console.log("a1", result1);
// let result1 = 100;
console.log(result1);

// 2nd diff btw var and let
if (true) {
  var random_1 = 10;
  let random_2 = 10;
}
console.log("random_1", random_1);
// console.log("random_2", random_2);

function call() {
  var different_1 = 10;
  let different_2 = 10;
  function add() {
    //   Closures
    var e = 10;
    console.log("different_1", different_1);
  }
  add();
}
call();
// console.log("different_1", different_1);
// console.log("different_2", different_2);

// const
const error = 10;
// error = 20;
console.log("error", error);
