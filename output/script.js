// console.log(window);
// console.log(this);
// var x = 20;

// function fn() {
//   var y = 20;
// }

// console.log(window.x);
// //console.log(this.x);
// console.log(y);

// console.log(window.a); // ReferenceError: Cannot access 'a' before initialization
// console.log(window.b); // prints undefined as expected
// let a = 10;
// console.log(a); // 10
// var b = 15;

// function greet() {
//   console.log("Hello");
// }
// setInterval(greet, 1000);

var array = [1, 2, 3, 4, 5];
for (var i = 0; i < array.length; i++) {
  setTimeout(() => {
    console.log(array[i]);
  }, 1000);
}

const arr = [1, 2, 3, 4, 5];

for (var i = 0; i < arr.length; i++) {
  setTimeout(() => {
    console.log(arr[i]);
  }, 1000);
}
