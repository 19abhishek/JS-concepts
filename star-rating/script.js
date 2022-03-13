function Star(el, count, callback) {
  const starEl = document.querySelector(el);
  for (let i = 0; i < count; i++) {
    var currStar = document.createElement("i");
    currStar.classList.add("fa");
    currStar.classList.add("fa-star-o");
    starEl.appendChild(currStar);
  }
  const allStars = document.querySelectorAll(".fa");
  document.querySelectorAll(".fa").forEach((currStar, index) => {
    currStar.addEventListener("mouseover", () => {
      for (let i = 0; i <= index; i++) {
        const cStar = allStars[i];
        cStar.classList.remove("fa-star-o");
        cStar.classList.add("fa-star");
      }
    });

    function leaveEvent() {
      for (let i = 0; i <= index; i++) {
        const cStar = allStars[i];
        cStar.classList.remove("fa-star");
        cStar.classList.add("fa-star-o");
      }
    }
    currStar.addEventListener("mouseleave", leaveEvent);
    currStar.addEventListener("click", () => {
      for (let i = 0; i <= index; i++) {
        const cStar = allStars[i];
        cStar.removeEventListener("mouseleave", leaveEvent);
        cStar.classList.remove("fa-star-o");
        cStar.classList.add("fa-star");
        getStar(i + 1);
      }
    });
  });
}

function getStar(value) {
  document.getElementById("display-star").innerHTML = value;
}

new Star("#star", 5, getStar);
