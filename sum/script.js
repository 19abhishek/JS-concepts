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
