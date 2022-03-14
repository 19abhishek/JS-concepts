const myLocalStorage = {
  setItem: function (id, value, time) {
    localStorage.setItem(id, value);
    //localStorage.getItem(id);
    setTimeout(() => {
      localStorage.removeItem(id);
    }, time);
  },
  getItem: function (id) {
    return localStorage.getItem(id);
  },
};

myLocalStorage.setItem("roc8", "Hi", 3000);

myLocalStorage.getItem("roc8");
