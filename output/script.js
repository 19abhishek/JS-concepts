// console.log(window);
// console.log(this);
// var x = 20;

// function fn() {
//   var y = 20;
// }

// console.log(window.a);
// console.log(window.b);
// //console.log(y);

// console.log(window.a); // ReferenceError: Cannot access 'a' before initialization
// console.log(window.b); // prints undefined as expected
// let a = 10;
// console.log(a); // 10
// var b = 15;
// console.log(window.b);
// console.log(window.a);

// function greet() {
//   console.log("Hello");
// }
// setInterval(greet, 1000);

// var array = [1, 2, 3, 4, 5];
// for (let i = 0; i < array.length; i++) {
//   setTimeout(() => {
//     console.log(array[i]);
//   }, 1000);
// }

// const arr = [1, 2, 3, 4, 5];

// for (var i = 0; i < arr.length; i++) {
//   setTimeout(() => {
//     console.log(arr[i]);
//     console.log(i);
//   }, 1000);
// }

// const ans = true;

// function f() {
//   var a = 10;
//   let b = 20;
//   const c = 30;
// }

// console.log(a);
// console.log(b);
// console.log(c);

// if (ans) {
//   var a = 10;
//   let b = 20;
//   const c = 30;
// }

// let a = 10;

// {
//   const a = 20;
//   console.log(a);
// }

// console.log(a);

// function x() {
//   for (let i = 1; i <= 5; i++) {
//     setTimeout(function () {
//       console.log(i);
//     }, i * 1000);
//   }
//   console.log("This is Hari");
// }
// x();

// function x() {
//   for (var i = 1; i <= 5; i++) {
//     function close(i) {
//       setTimeout(function () {
//         console.log(i);
//       }, i * 1000);
//       // put the setT fun inside new function close()
//     }
//     close(i); // everytime you call close(i) it creates new copy of i. Only this time, it is with var itself!
//   }
//   console.log("This is Hari");
// }
// x();

// console.log("Start"); // this calls the console web api (through window) which in turn actually modifies values in console.

// setTimeout(function cbT() {
//   console.log("CB Timeout");
// }, 5000);

// fetch("https://jsonplaceholder.typicode.com/posts").then(function cbF() {
//   console.log("CB Netflix");
// });

// console.log("End");

const object = {
  who: "World",
  greet() {
    return `Hello, ${this.who}!`;
  },
  farewell: () => {
    return `Goodbye, ${this.who}!`;
  },
};
console.log(object.greet()); // What is logged?
console.log(object.farewell()); // What is logged?
