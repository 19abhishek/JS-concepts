function Star(el, count, callback) {
  const starEl = document.querySelector(el);
  for (let i = 0; i < count; i++) {
    var currStar = document.createElement("i");
    currStar.classList.add("fa");
    currStar.classList.add("fa-star");
    starEl.appendChild(currStar);
  }
  console.log(starEl);
}

function getStar(value) {
  document.getElementById("display-star").innerHTML = value;
}

new Star("#star", 5, getStar);
