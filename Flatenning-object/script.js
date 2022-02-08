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

let ans = {};

// for (var key in user) {
//   const newObject = { key: user[key] };
//   ans = { ...newObject };
// }

// console.log(ans);

const magicFunction = (user, str, ans) => {
  for (var key in user) {
    var name = str + "_" + key;
    if (typeof user[key] === "object") {
      magicFunction(user[key], name, ans);
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

magicFunction(user, "user", ans);

console.log(ans);
