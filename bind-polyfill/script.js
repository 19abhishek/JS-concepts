let name = {
  firstName: "Abhishek",
  lastName: "Kumar",
};

let printName = function (hometown, state, country) {
  console.log(
    this.firstName +
      " " +
      this.lastName +
      " " +
      hometown +
      " " +
      state +
      " " +
      country
  );
};

let printMyName = printName.bind(name, "Dhanbad", "Jharkhand");
printMyName("India");

Function.prototype.myBind = function (...args) {
  console.log(this);
  let obj = this;
  let params = args.slice(1);
  return function (...args2) {
    obj.apply(args[0], [...params, ...args2]);
  };
};

let printMyName2 = printName.myBind(name, "Dhn", "Jh");
printMyName2("Ind");
