const container = document.querySelector(".list");

let limit = 5;
let pageCount = 1;
let postCount = 0;

const getPost = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/todos");
  const data = await res.json();

  data.slice(postCount * 6, (postCount + 1) * 6).map((cTodo, idx) => {
    const htmlData = `
      <p class="item">${cTodo.title}</p>
    `;
    container.insertAdjacentHTML("beforeend", htmlData);
  });
};

getPost();

const loadMore = () => {
  setTimeout(() => {
    postCount++;
    getPost();
  }, 100);
};

window.addEventListener("scroll", () => {
  const { scrollHeight, scrollTop, clientHeight } = document.documentElement;
  if (scrollTop + clientHeight >= scrollHeight) {
    console.log("I am at the bottom");
    loadMore();
  }
});
