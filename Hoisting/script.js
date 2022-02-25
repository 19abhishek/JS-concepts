console.log(this);
console.log(x);
x();
var x = () => {
  console.log("Inside x");
};

/////////////////////////////////
var a = 1;

function fun() {
  a = 2;
  console.log(a);
  var a;
}

fun();

console.log("line22", a);

if (!("b" in window)) {
  var b = 1;
}

console.log("line28", b);

//o/p
// 2
// line22 1
// line28 1

///////////////////////////////////
