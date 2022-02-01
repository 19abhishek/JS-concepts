let multiply = function (x, y) {
  return x * y;
};

let multiply1 = function (x) {
  return function (y) {
    return x * y;
  };
};

console.log(multiply.bind(this, 5)(3));

console.log(multiply1(4)(5));
