let sum = (a) => {
  return (b) => {
    if (b) {
      return sum(a + b);
    }
    return a;
  };
};

let sum2 = (a) => (b) => b ? sum2(a + b) : a;

console.log(sum(2)(3)());
console.log(sum2(24)(3)(3)());

(function () {
  var array1 = [];
  var array2 = new Array(100);
  var array3 = new Array(["1", 2, "3", 4, 5.6]);
  console.log(array1);
  console.log(array2);
  console.log(array3);
  console.log(array3.length);
})();
