window.onload = function () {
  var hh = 0,
    mm = 0,
    sec = 0;

  var start = document.getElementById("start");
  var stop = document.getElementById("stop");
  var reset = document.getElementById("reset");
  var interval;

  const time = document.querySelector(".time");

  function run() {
    sec++;
    if (sec === 60) {
      mm++;
      if (mm === 60) {
        hh++;
        mm = 0;
      }
      sec = 0;
    }
    time.innerHTML = hh + ":" + mm + ":" + sec;
  }

  function run() {
    sec++;
    if (sec === 60) {
      mm++;
      if (mm === 60) {
        hh++;
        mm = 0;
      }
      sec = 0;
    }
    time.innerHTML = hh + ":" + mm + ":" + sec;
  }

  start.onclick = function () {
    console.log("start");
    clearInterval(interval);
    interval = setInterval(run, 1000);
  };

  reset.onclick = function () {
    console.log("reset");
    clearInterval(interval);
    (sec = 0), (hh = 0), (mm = 0);
    time.innerHTML = hh + ":" + mm + ":" + sec;
  };

  stop.onclick = function () {
    console.log("stop");
    clearInterval(interval);
  };
};

// const re = reset.addEventListener(
//   "click",
//   () => {
//     console.log("Reset");
//     (hh = 0), (mm = 0), (sec = 0);
//     time.innerHTML = hh + ":" + mm + ":" + sec;
//   },
//   true
// );
// //let interval = setInterval(run, 1000);
// const st = start.addEventListener(
//   "click",
//   () => {
//     console.log("start");
//     //interval = setInterval(run, 1000);
//     interval();
//   },
//   true
// );

// const stp = stop.addEventListener(
//   "click",
//   () => {
//     console.log("stop");
//     clearInterval(interval);
//   },
//   true
// );
