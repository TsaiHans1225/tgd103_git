let bars = document.getElementById("fa-bars");
let rwd_header = document.getElementsByClassName("rwd-header")[0];
let abc = rwd_header.style;
let fachange = document.getElementsByClassName("fa-bars")[0];
bars.addEventListener("click", () => {
  if (abc.display !== "flex") {
    abc.display = "flex";
    fachange.className = "fa-sharp fa-solid fa-circle-xmark";
  } else {
    abc.display = "";
    fachange.className = "fa-solid fa-bars";
  }
});
let rwdNav0 = document.getElementsByClassName("rwd-navbar-wrap")[0];
let rwdNav1 = document.getElementsByClassName("rwd-navbar-wrap")[1];
let rwdNav2 = document.getElementsByClassName("rwd-navbar-wrap")[2];
let rwd_list0 = document.getElementById("rwd-list0");
let rwd_list1 = document.getElementById("rwd-list1");
let rwd_list2 = document.getElementById("rwd-list2");
let rwd_mark = document.getElementsByClassName("rwd-mark")[0];
rwd_list0.addEventListener("click", () => {
  if (rwdNav0.style.display == "") {
    rwdNav1.style.display = "";
    rwdNav2.style.display = "";
    rwdNav0.style.display = "flex";
  } else {
    rwdNav0.style.display = "";
    console.log(rwd_mark.style);
  }
});

rwd_list1.addEventListener("click", () => {
  if (rwdNav1.style.display == "") {
    rwdNav0.style.display = "";
    rwdNav2.style.display = "";
    rwdNav1.style.display = "flex";
  } else {
    rwdNav1.style.display = "";
  }
});

rwd_list2.addEventListener("click", () => {
  if (rwdNav2.style.display == "") {
    rwdNav0.style.display = "";
    rwdNav1.style.display = "";
    rwdNav2.style.display = "flex";
  } else {
    rwdNav2.style.display = "";
  }
});
