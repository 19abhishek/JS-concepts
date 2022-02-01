let count = 0;
const getData = (x, y) => {
  console.log("count", count++, x, y);
};

const debounceFn = (fn, time, ...args) => {
  let timer;
  return function () {
    let ctx = this;
    clearTimeout(timer);
    console.log(args);
    console.log(ctx);
    timer = setTimeout(() => {
      fn.call(ctx, ...args);
    }, time);
  };
};
const name = "Abhishek";
const name2 = "Kumar";
const betterFn = debounceFn(getData, 400, name, name2);
