const chessBox = document.getElementById("chess");
console.log(chessBox);
let set = new Set();
for (let i = 0; i < 8; i++) {
  for (let j = 0; j < 8; j++) {
    const boxDiv = document.createElement("div");
    boxDiv.setAttribute("value", JSON.stringify({ row: i, col: j }));
    boxDiv.classList.add("boxDiv");
    if ((i + j) % 2 === 0) {
      boxDiv.classList.add("even");
    } else {
      boxDiv.classList.add("odd");
    }
    chessBox.appendChild(boxDiv);
    boxDiv.onclick = () => {
      boxDiv.classList.add("red");

      const row = JSON.parse(boxDiv.getAttribute("value")).row;
      const col = JSON.parse(boxDiv.getAttribute("value")).col;
      let x = row - 1,
        y = col - 1;
      set.add(row + "" + col);
      while (x >= 0 && y >= 0) {
        set.add(x + "" + y);
        x--;
        y--;
      }
      let a = row + 1,
        b = col + 1;
      while (a < 8 && b < 8) {
        set.add(a + "" + b);
        a++;
        b++;
      }
      let c = row + 1,
        d = col - 1;
      while (c < 8 && d >= 0) {
        set.add(c + "" + d);
        c++;
        d--;
      }
      let e = row - 1,
        f = col + 1;
      while (e >= 0 && f < 8) {
        set.add(e + "" + f);
        e--;
        f++;
      }
      console.log(set.size);
      for (const item of set) {
        console.log(item);
      }
      const boxes = document.querySelectorAll(".boxDiv");
      boxes.forEach((currBox) => {
        const currX = JSON.parse(currBox.getAttribute("value")).row;
        const currY = JSON.parse(currBox.getAttribute("value")).col;
        if (set.has(currX + "" + currY)) {
          currBox.classList.add("red");
        }
      });
    };
  }
}
