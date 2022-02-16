const user = {
  name: "Abhishek",
  address: {
    personal: {
      City: "Dhanbad",
      State: "Jharkhand",
    },
    office: {
      City: "Banglore",
      State: "Karnataka",
    },
  },
};

const magicFunction = (user, str) => {
  for (var key in user) {
    var name = str + "_" + key;
    if (typeof user[key] === "object") {
      magicFunction(user[key], name);
    } else {
      ans[name] = user[key];
    }
  }
  // Object.values(user).map((curr) => {
  //   console.log(curr);
  //   if (typeof curr !== "object") {
  //     //console.log(curr);
  //     console.log(str + "_" + curr);
  //   }
  // });
};

let da = {};

magicFunction(user, "user");

console.log(ans);

let ans = {};

const usr = [1, 2, 3];

let a = {};

for (var key of usr) {
  const newObject = { k: key };
  a = { a, ...newObject };
}

console.log(a);
