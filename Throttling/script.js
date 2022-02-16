let count = 0;
function increaseCount(fname, lname) {
  count++;
  console.log(count, fname, lname);
}

const throttle = (func, time, ...args) => {
  let flag = true;
  return function () {
    if (flag) {
      func.call(this, args);
      flag = false;
      setTimeout(() => {
        flag = true;
      }, time);
    }
  };
};

const fname = "Abhishek";
const lname = "Kumar";

const throttling = throttle(increaseCount, 400, fname, lname);
