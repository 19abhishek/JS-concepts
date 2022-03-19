let count = 0;
function increaseCount(fname, lname) {
  count++;
  console.log(count, fname, lname);
}

// const throttle = (func, time, ...args) => {
//   let flag = true;
//   return function () {
//     if (flag) {
//       func.call(this, ...args);
//       flag = false;
//       setTimeout(() => {
//         flag = true;
//       }, time);
//     }
//   };
// };

const fname = "Abhishek";
const lname = "Kumar";

const throttling = throttle(increaseCount, 400, fname, lname);

// debounce
const debounce = (fn, delay) => {
  let timer = null;
  return (...args) => {
    if (timer) clearTimeout(timer);
    timer = setTimeout((_) => fn(...args), delay);
  };
};

// throttle
const throttle = (fn, delay) => {
  let timer = null;
  return (...args) => {
    if (timer) return;
    timer = setTimeout((_) => {
      fn(...args);
      timer = null;
    }, delay);
  };
};
